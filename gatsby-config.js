module.exports = {
  siteMetadata: {
    title: `Ryan Turnbull`,
    description: `Developer, Designer, Visionary.`,
    author: `ryanturnbull`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Ryan Turnbull`,
        start_url: `/`,
        icon: `src/assets/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `yxey0ltiqdf5`,
        accessToken: `TV-unQfWMB3GS3oPZszDV_b0Lsal-k28OF5ZjBFNb0c`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        apiKey: "7ced7665ba3e3616b2af3a0645450a3e",
        head: false,
        respectDNT: true,
        eventTypes: {
          outboundLinkClick: "OUTBOUND_LINK_CLICK",
          pageView: "PAGE_VIEW",
        },
        amplitudeConfig: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true,
        },
        environments: ["production"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
