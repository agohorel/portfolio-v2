import React from "react"
import { Helmet } from "react-helmet"

export const Head = ({ title }) => {
  return (
    <Helmet title={`agohorel | ${title}`}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#000" />

      {/* Primary Meta Tags  */}
      <meta name="title" content="Alex Gohorel" />
      <meta
        name="description"
        content="Alex Gohorel is a Philadelphia based software engineer and audiovisual designer."
      />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.agohorel.dev/" />
      <meta property="og:title" content="Alex Gohorel" />
      <meta
        property="og:description"
        content="Alex Gohorel is a Philadelphia based software engineer and audiovisual designer."
      />
      <meta property="og:image" content="/favicon-embed.png" />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.agohorel.dev/" />
      <meta property="twitter:title" content="Alex Gohorel" />
      <meta
        property="twitter:description"
        content="Alex Gohorel is a Philadelphia based software engineer and audiovisual designer."
      />
      <meta property="twitter:image" content="/favicon-embed.png"></meta>
    </Helmet>
  )
}
