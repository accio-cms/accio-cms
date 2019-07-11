import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import ItemList from '../components/items-list'

function ItemsTemplates() {
  const data = useStaticQuery(graphql`
    query {
      allItem {
        nodes {
          data {
            idx
            name
            slug
          }
        }
      }
    }
  `)

  const items = data.allItem.nodes[0].data

  return (
    <Layout>
      <ItemList items={items} />
    </Layout>
  )
}

export default ItemsTemplates
