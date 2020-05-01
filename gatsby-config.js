const netlifyCMSPath = {
  resolve: "gatsby-plugin-netlify-cms-paths",
  options: {
    cmsConfig: "/static/admin/config.yml",
  },
}

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/blog`,
      },
    },
    netlifyCMSPath,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          netlifyCMSPath,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              backgroundColor: "transparent",
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
  ],
}
