import { GraphQLModule } from '@graphql-modules/core'

import typeDefs from './schema'
import resolvers from './resolvers'

export default new GraphQLModule({
  name: 'user',
  typeDefs,
  resolvers,
})
