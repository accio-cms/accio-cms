const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, `data`),
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
