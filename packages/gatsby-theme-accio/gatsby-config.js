const path = require(`path`)

module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, contentPath),
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Item`,
      },
    },
  ],
})
