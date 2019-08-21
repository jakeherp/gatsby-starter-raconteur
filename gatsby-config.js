require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Raconteur`,
    description: `A new site by Raconteur`,
    siteUrl: process.env.SITE_URL,
    author: `Jacob Herper <jacob@herper.io>`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-raconteur`,
        short_name: `raconteur`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ef3d4b`,
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-tslint`,
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
