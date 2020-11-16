import { RSSParser } from 'rss-parser/dist/rss-parser.js';
import { useStaticQuery, graphql } from "gatsby"

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

parser.parseURL(`https://medium.com/feed/${data.site.siteMetadata.social.medium}`, function (err, feed) {
  if (err) throw err;
  console.log(feed.title);
  feed.items.forEach(function (entry) {
    console.log(entry.title + ':' + entry.link);
    console.log(entry['content:encoded']);
  })
})