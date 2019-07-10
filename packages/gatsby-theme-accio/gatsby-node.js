const path = require(`path`)
const fs = require(`fs`)

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'data'

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
      slug: String
    }
    type Item implements Node @dontInfer {
      data: [Content!]!
    }
  `)
}

exports.createResolvers = ({ createResolvers }) => {
  const basePath = '/'

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
