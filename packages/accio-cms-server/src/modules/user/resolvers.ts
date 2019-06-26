export default {
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
