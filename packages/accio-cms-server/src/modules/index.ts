import { GraphQLModule } from '@graphql-modules/core'
import AppModule from './user'

export default new GraphQLModule({
  name: 'root',
  imports: [
    AppModule,
  ]
})