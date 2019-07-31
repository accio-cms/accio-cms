import React from 'react'
import { graphql } from 'gatsby'

import Item from '../components/item'
import Layout from '../components/layout'

// export const query = graphql`
//   query($itemIdx: Int!) {
//     item(data: { elemMatch: { idx: { eq: $itemIdx } } }) {
//       data {
//         name
//       }
//     }
//   }
// `

function ItemTemplate({ data, pageContext: { itemIdx } }) {
  const item = data.item.data[itemIdx]

  return (
    <Layout>
      <Item {...item} />
    </Layout>
  )
}

export default ItemTemplate
