import { Resolvers } from '../../generated-models';

export const resolvers: Resolvers = {
  Query: {
    user: (_root: any, props: { id: any }) => {
      return {
        id: props.id,
        username: 'USERNAME',
      }
    },
  },
  User: {
    id: (user: any) => user.id,
    username: (user: any) => user.username,
  },
}
