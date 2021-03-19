module.exports = {
  siteMetadata: {
    title: "session-registration-setup",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `events`,
            queryName: `Events`,
          },
        ],
      },
    },
  ],
}
