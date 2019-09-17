/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Andreas Åkerlöf - Frontendutvecklare - akerlof.se`,
    url: `https://www.akerlof.se`,
    description: `Andreas Åkerlöf's personliga utrymme på internet.
                  Andreas är en frontendutvecklare som ständigt lär sig mer och mer. 
                  På den här sidan presenterar Andreas sig själv och många av de alster han utvecklat.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146658929-1",
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      },
    }
  ],
}