const _ = require(`lodash`)
const path = require(`path`)

async function onCreateNode(
  { node, actions, loadNodeContent, createNodeId, createContentDigest },
  { typeName }
) {
  function getType({ node, object }) {
    if (_.isFunction(typeName)) {
      return typeName({ node, object })
    } else if (_.isString(typeName)) {
      return typeName
    } else if (node.internal.type !== `File`) {
      return _.upperFirst(_.camelCase(`${node.internal.type} Loki`))
    } else {
      return _.upperFirst(_.camelCase(`${path.basename(node.dir)} Loki`))
    }
  }

  function transformObject(obj, id, type) {
    const collections = []
    
    _.forEach(obj.collections, ({ name, data, ...rest }) => {
      collections.push({
        name,
        data,
        meta: {
          ...rest,
        }
      })
    })

    const lokiContent = {
      collections,
      meta: _.omit(obj, 'collections'),
    }

    const lokiNode = {
      ...lokiContent,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(lokiContent),
        type,
      },
    }

    createNode(lokiNode)
    createParentChildLink({ parent: node, child: lokiNode })
  }

  const { createNode, createParentChildLink } = actions

  if (node.internal.mediaType !== `application/json`) {
    return
  }

  const content = await loadNodeContent(node)
  const parsedContent = JSON.parse(content)

  if (_.isPlainObject(parsedContent)) {
    transformObject(
      parsedContent,
      parsedContent.id ? parsedContent.id : createNodeId(`${node.id} >>> LOKI`),
      getType({ node, object: parsedContent, isArray: false })
    )
  }
}

exports.onCreateNode = onCreateNode
