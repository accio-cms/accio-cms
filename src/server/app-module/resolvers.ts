export default {
  Query: {
    user: (_root: any, props: { id: any }) => {
      return {
        _id: props.id,
        username: 'jhon',
      }
    },
  },
  User: {
    id: (user: any) => user._id,
    username: (user: any) => user.username,
  },
}
