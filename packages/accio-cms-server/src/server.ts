import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'

import RootModule from './modules'

const server = new ApolloServer({
  modules: [RootModule  as any],
  context: RootModule.context,
})

export default server
