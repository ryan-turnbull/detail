import React from "react"
import FadeIn from "react-fade-in/lib/FadeIn"
import { Layout } from "../components/layout"
import SEO from "../components/seo"

export const Contact = () => {
  return (
    <Layout
      titleContent={
        <FadeIn>
          <h1>Contact</h1>
        </FadeIn>
      }
    >
      <SEO title="Contact" />
    </Layout>
  )
}

export default Contact
