import { createTestClient } from '../../node_modules/apollo-server-testing/dist'
import gql from '../../node_modules/graphql-tag'

import server from '../../src/server';

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
