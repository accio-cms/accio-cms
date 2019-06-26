import gql from 'graphql-tag'

export default gql`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String!
  }
`
