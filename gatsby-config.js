module.exports = {
  siteMetadata: {
    title: `Andreas Åkerlöf - Frontend Developer - akerlof.se`,
    siteUrl: `http://www.akerlof.se`,
    description: `Andreas is a frontend developer who learns new stuff on a daily basis.
                  On this site Andreas presents himself and the stuff he's been working on.
                  There's also a blog where he shares stories related to his web development.`
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
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      },
    },
  ]
}