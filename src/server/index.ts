import { ApolloServer } from 'apollo-server'

import { AppModule } from './app-module'

const server = new ApolloServer({
  schema: AppModule.schema,
  context: session => session,
})

export default server
