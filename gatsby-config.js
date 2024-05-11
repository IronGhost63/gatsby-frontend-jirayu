/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `JIRAYU.IN.TH`,
    siteUrl: `https://frontend.jirayu.in.th`,
    siteTagline: 'โปรแกรมเมอร์, ช่างภาพ, และคนเลี้ยงแมว',
    postsPerPage: 10,
  },
  plugins: [
    "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", 'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: "https://jirayu.in.th/graphql",
        verbose: true,
        schema: {
          timeout: 120000,
        },
        html: {
          useGatsbyImage: true,
        },
      }
    }, {
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
    }
  ]
};
