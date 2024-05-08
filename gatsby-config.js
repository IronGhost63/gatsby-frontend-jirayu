/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `JIRAYU.IN.TH`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      url: "https://jirayu.in.th/graphql",
      verbose: true,
      schema: {
        timeout: 300000,
      },
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        '366757691'
      ],
    }
  }]
};
