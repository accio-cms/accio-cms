const path = require(`path`)

module.exports = {
  siteMetadata: {
    basePath: '/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'data'),
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Item`,
      },
    },
  ],
}
