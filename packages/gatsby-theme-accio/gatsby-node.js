const path = require(`path`)
const fs = require(`fs`)

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data'

  reporter.info(`${path.join(__dirname, contentPath)}`)
  if (!fs.existsSync(path.join(__dirname, contentPath))) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(path.join(__dirname, contentPath))
  }
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Content {
      idx: Int!,
      name: String!
      slug: String!
    }
    type Item implements Node @dontInfer {
      data: [Content!]!
    }
  `)
}

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/'

  const slugify = str => {
    const slug = str
      ? str
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '')
      : ''

    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/')
  }

  createResolvers({
    Item: {
      data: {
        resolve(source, args, context, info) {
          return info.originalResolver(
            {
              ...source,
              data: source.data.map(item => ({
                ...item,
                slug: slugify(item.name),
              })),
            },
            args,
            context,
            info
          )
        },
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = options.basePath || '/'
  actions.createPage({
    path: basePath,
    component: require.resolve(path.join(__dirname, 'src/templates/items'))
  })

  const result =  await graphql(`
    query {
      allItem {
        nodes {
          data {
            idx
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic('error loading items', reporter.errors)
    return;
  }

  const items = result.data.allItem.nodes[0].data

  items.forEach(item => {
    const slug = item.slug

    actions.createPage({
      path: slug,
      component: require.resolve(path.join(__dirname, 'src/templates/item')),
      context: {
        itemIdx: item.idx
      }
    })
  })
}
