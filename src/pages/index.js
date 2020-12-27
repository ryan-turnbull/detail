import "./index.css"

import React from "react"

import SEO from "../components/seo"
import { Layout } from "../components/layout"

const IndexPage = () => (
  <Layout titleContent={<h1>Coming soon!</h1>}>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
