import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'

import { AppModule } from './app-module'

const server = new ApolloServer({
  schema: AppModule.schema,
  context: AppModule.context,
})

server.listen({
  port: 4000,
}).then((props: { url: string }) => {
  console.log(`🚀  Server ready at ${props.url}`)
})

export default server
