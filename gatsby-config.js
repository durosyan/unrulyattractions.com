/* https://www.gatsbyjs.com/docs/gatsby-config/ */
module.exports = {
  siteMetadata: {
    title: "unruly attractions",
    siteUrl: "http://unrulyattractions.com/",
    description: "A game development team",
    social: {
      instagram: "https://www.instagram.com/unrulyattractions",
      facebook: "https://www.facebook.com/UnrulyAttractions",
      twitter: "twitter.com/vethan4",
      email: "pr@unrulyattractions.com",
      medium: "@kigacit636"
    },
    jsonld: {
      "@context": "https://schema.org/",
      datePublished: "2020-08-11",
      description: "a video game development team"
    }
  },
  plugins: [
    "gatsby-theme-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "unruly attractions",
        short_name: "unruly",
        icon: "src/assets/UA_logo_tall_dark.svg",
        start_url: "/",
        background_color: "#262626",
        theme_color: "#e5e5e5",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-theme-material-ui"
    }
  ],
}
