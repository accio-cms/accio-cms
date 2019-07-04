module.exports = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        use: 'graphql-tag/loader',
      },
    ],
  },
}
