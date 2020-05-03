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
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: `${__dirname}/portfolio`,
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
              maxWidth: 800,
              ratio: 1.77,
              height: 400,
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
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
  ],
}
