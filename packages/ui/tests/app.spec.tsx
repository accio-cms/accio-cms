import React = require('react')
import serializer from 'jest-emotion'
import { create } from 'react-test-renderer'

import App from '../src/app'

expect.addSnapshotSerializer(serializer)

test("App without color", () => {
  const msg = 'Poop'
  const tree1 = create(
    <App msg={msg} />
  ).toJSON()
  expect(tree1).toMatchSnapshot()
})

test("App with blue color", () => {
  const msg = 'Poop'
  const dataColor = 'blue'
  const tree1 = create(
    <App msg={msg} dataColor={dataColor} />
  ).toJSON()
  expect(tree1).toMatchSnapshot()
})
