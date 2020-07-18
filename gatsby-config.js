module.exports = {
  siteMetadata: {
    title: `Kone- ja materiaalitekniikka`,
    description: `Turun yliopiston kone- ja materiaalitekniikan uusien opiskelijoiden tietopankki`,
    author: `Konsta Purtsi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5fa096`,
        theme_color: `#3c887c`,
        display: `minimal-ui`,
        icon: `src/static/ty-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `www.komateekkarit.fi`,
        protocol: `https`,
        hostname: `komateekkarit.fi`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
