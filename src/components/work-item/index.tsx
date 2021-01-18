import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { Layout } from "../layout"
import SEO from "../seo"
import FadeIn from "react-fade-in"

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file, title } = node?.data?.target

      if (!file) {
        return
      }

      return <img src={file.url} alt={title} className="my-16" />
    },
    [BLOCKS.PARAGRAPH]: node => {
      const content = node.content.map(
        ({ value, nodeType, data, ...other }) => {
          console.log(value, other)
          if (!value && nodeType === "hyperlink") {
            return (
              <a
                className="font-bold text-blue-600 mb-3 block"
                href={data.uri}
                target="_blank"
              >
                View Demo
              </a>
            )
          }
          const paragraphs = value.split("\n").map((item, index) => {
            const fVal = item.replace(/[^a-z0-9\.\,\%\-\&\(\)\']/gim, " ")

            return fVal ? (
              <p className="mb-4" key={`paragraph-${index}`}>
                {fVal}
              </p>
            ) : null
          })

          return paragraphs
        }
      )

      return content
    },
  },
}

export const WorkItem = ({ pathContext }) => {
  const { name, description, what, link } = pathContext

  const titleContent = () => (
    <FadeIn className="flex flex-col items-center">
      <h2>{name}</h2>
      <p className="my-8">{description.description}</p>
      <button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Check it out
        </a>
      </button>
      <hr />
    </FadeIn>
  )

  return (
    <Layout showFooter titleContent={titleContent()}>
      <SEO title={`Work - ${name}`} />
      {what && (
        <FadeIn delay={1000}>
          <section className="max-w-3xl mx-auto px-2 mb-24">
            <h2 className="mb-4 text-center">What i did</h2>
            {renderRichText(what, richTextOptions)}
          </section>
        </FadeIn>
      )}
    </Layout>
  )
}

export default WorkItem
