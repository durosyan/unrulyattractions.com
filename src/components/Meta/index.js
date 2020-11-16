import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            siteUrl,
            description
          }
        }
      }
    `
  )

  return (
    <Helmet defer={false} defaultTitle={"unruly attractions"}>
      <meta name="docsearch:version" content="2.0" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="unruly attractions logo" />
      <meta property="og:image" content={data.site.siteMetadata.siteUrl + 'icons/UA_logo_dark.png'} />
    </Helmet>
  )
}