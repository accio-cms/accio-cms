import { GraphQLModule } from '@graphql-modules/core'
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit';

export default new GraphQLModule({
  name: 'user',
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
})
