import React = require('react')
import { create } from 'react-test-renderer'

import App from '../src/app'

test("Say my name, say my name...", () => {
  const tree1 = create(
    <App />
  ).toJSON()
  expect(tree1).toMatchSnapshot()
})
