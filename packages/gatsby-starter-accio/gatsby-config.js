const path = require(`path`);

module.exports = {
  // __experimentalThemes: ['@accio-cms/gatsby-theme-accio'],
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'data'),
      },
    },
    // {
    //   resolve: '@accio-cms/gatsby-transformer-loki',
    //   options: {
    //     typeName: 'Loki',
    //   },
    // },
    // {
    //   resolve: '@accio-cms/gatsby-theme-accio',
    // }
  ],
};
