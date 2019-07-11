import React from 'react'
import { Link } from 'gatsby';

function ItemList({ items }) {
  return (
    <>
      <h1>Items</h1>
      <ul>{items.map(item => (
        <li key={item.idx}>
          <Link to={item.slug}>{item.name}</Link>
        </li>
      ))}</ul>
    </>
  )
}

export default ItemList
