// const fs = require(`fs`)

// exports.onPreBootstrap = ({ reporter }) => {
//   const contentPath = 'data'

//   if (!fs.existsSync(contentPath)) {
//     reporter.info(`creating the ${contentPath} directory`)
//     fs.mkdirSync(contentPath)
//   }
// }

// exports.sourceNodes = ({ actions }) => {
//   actions.createTypes(`
//     type Content {
//       idx: Int!,
//       name: String!
//       slug: String!
//     }
//     type Item implements Node @dontInfer {
//       data: [Content!]!
//     }
//   `)
// }

// exports.createResolvers = ({ createResolvers }) => {
//   const basePath = '/'

//   const slugify = str => {
//     const slug = str
//       ? str
//           .toLowerCase()
//           .replace(/[^a-z0-9]+/g, '-')
//           .replace(/(^-|-$)+/g, '')
//       : ''

//     return `/${basePath}/${slug}`.replace(/\/\/+/g, '/')
//   }

//   createResolvers({
//     Item: {
//       data: {
//         resolve(source, args, context, info) {
//           return info.originalResolver(
//             {
//               ...source,
//               data: source.data.map(item => ({
//                 ...item,
//                 slug: slugify(item.name),
//               })),
//             },
//             args,
//             context,
//             info
//           )
//         },
//       },
//     },
//   })
// }

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const basePath = '/'
//   actions.createPage({
//     path: basePath,
//     component: require.resolve('./src/templates/items')
//   })

//   const result =  await graphql(`
//     query {
//       allItem {
//         nodes {
//           data {
//             idx
//             slug
//           }
//         }
//       }
//     }
//   `)

//   if (result.error) {
//     reporter.panic('error loading items', reporter.errors)
//     return;
//   }

//   const items = result.data.allItem.nodes
//     .reduce((acc, item) => acc.concat(item.data), [])

//   items.forEach(item => {
//     const slug = item.slug

//     actions.createPage({
//       path: slug,
//       component: require.resolve('./src/templates/item'),
//       context: {
//         itemIdx: item.idx
//       }
//     })
//   })
// }
