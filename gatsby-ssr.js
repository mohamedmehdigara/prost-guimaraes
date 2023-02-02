/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/redig/Redig-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="redigFont"
    />,
  ])
}
