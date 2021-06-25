module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `SiteName`,
    description: `Description`,
    domain: '*.min.studio',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-minify-classnames`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //     // purgeCSSPaths: ['./node_modules/react-bootstrap/**/*.js'],
    //     purgeCSSOptions: {
    //       // https://purgecss.com/configuration.html#options
    //       safelist: {
    //         standard: ['container', /dropdown$/, /nav$/, /btn$/],
    //       }, // Don't remove this selector
    //     },
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/data/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        urlSvgOptions: [
          {
            test: /\.svg$/,
            svgoConfig: {
              plugins: [
                {
                  cleanupIDs: false,
                },
              ],
            },
            urlLoaderOptions: {
              limit: 10,
            },
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
