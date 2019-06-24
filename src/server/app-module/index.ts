import { GraphQLModule } from '@graphql-modules/core'

import typeDefs from './schema.gql'
import resolvers from './resolvers'

export const AppModule = new GraphQLModule({
  typeDefs,
  resolvers,
})
