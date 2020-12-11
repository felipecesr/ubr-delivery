const path = require("path")
const queries = require("./src/utils/algolia")

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `UBR Delivery`,
    description: `Viemos para facilitar o contato com os comerciantes de Uruburetama`,
    author: `@felipecesr`,
    siteUrl: `https://ubr-delivery.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-source-api`,
      options: {
        googleSheetID: process.env.GOOGLE_SHEET_ID,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`source sans pro:400,700`],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UBR Delivery`,
        short_name: `UBR Delivery`,
        start_url: `/`,
        background_color: `#ffb800`,
        theme_color: `#ffb800`,
        display: `fullscreen`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: process.env.GOOGLE_TAG_MANAGER,
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@layouts": path.resolve(__dirname, "src/layouts"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@templates": path.resolve(__dirname, "src/templates"),
          "@styles": path.resolve(__dirname, "src/styles"),
        },
        extensions: ["js"],
      },
    },
  ],
}
