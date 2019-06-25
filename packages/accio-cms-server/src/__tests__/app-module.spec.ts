import { createTestClient } from 'apollo-server-testing'
import gql from 'graphql-tag'

import { server } from '../../index';

describe('AppModule', () => {
  it('FieldResolver of Query: user', async () => {

    const { query } = createTestClient(server)

    const result = await query({
      query: gql`
        query {
          user(id: "ANOTHERID") {
            id
            username
          }
        }
      `,
    })
    expect(result.errors).toBeFalsy()
    expect(result.data['user']['id']).toBe('ANOTHERID')
    expect(result.data['user']['username']).toBe('USERNAME')
  })
})
