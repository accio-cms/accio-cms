const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: '@accio-cms/gatsby-theme-accio',
      options: {
        contentPath: 'items',
        basePath: '/items',
      }
    }
  ]
}