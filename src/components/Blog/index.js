import React from "react";
import RSSParser from 'rss-parser/dist/rss-parser.js';
import { useStaticQuery, graphql } from "gatsby";
import { Typography } from "@material-ui/core";

const parser = new RSSParser({
  headers: { 'origin': 'medium.com' },
});

export default () => {
  const response = useBlog();

  return <Typography>BLOG</Typography>
}


/** returns rss parsed */
export const useBlog = (medium) => {
  const [response, setResponse] = React.useState(null);
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
  );

  React.useEffect(() => {
    /** need to keep an eye on this cors proxy, might go down */
    parser.parseURL(`https://cors-anywhere.herokuapp.com/https://medium.com/feed/${data.site.siteMetadata.social.medium}`,
      function (err, feed) {
        if (err) throw err;
        if (!feed.items) console.error('feed is missing key: items');

        feed.items.forEach(entry => {
          ['title', 'link'].forEach((key) => {
            if (!entry[key]) console.error(`feed item is missing key: ${key}`);
          })

          let content = '';
          if (entry['content:encoded']) content = entry['content:encoded']
          else if (entry['content']) { content = entry['content']; console.log(content) }
          else console.error('item is missing content')
        })

        setResponse(feed);
      });
  }, [])

  return response
};
