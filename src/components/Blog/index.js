import React from "react"
import RSSParser from 'rss-parser/dist/rss-parser.js';
import { useStaticQuery, graphql } from "gatsby"
import { Typography } from "@material-ui/core";

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              medium
            }
          }
        }
      }
    `
  )

  let parser = new RSSParser();
  
  // cors error for local host
  parser.parseURL(`https://medium.com/feed/${data.site.siteMetadata.social.medium}`, function (err, feed) {
  if (err) throw err;
  console.log(feed.title);
  feed.items.forEach(function (entry) {
    console.log(entry.title + ':' + entry.link);
    console.log(entry['content:encoded']);
  })
})

  return <Typography>BLOG</Typography>
}