import { graphql } from "gatsby"
import React, { useMemo } from "react"
import FadeIn from "react-fade-in"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { mapNodesToArray } from "../utils/data"

const getWorkItemProps = item => {
  return item.link
    ? {
        className: "cursor-pointer",
        href: item.link,
        target: "_blank",
      }
    : {
        className: '"cursor-not-allowed"',
      }
}

const Work = ({ data }) => {
  const [featuredWork, otherWork] = useMemo(() => {
    const items = mapNodesToArray("allContentfulWork", data)

    const featuredWork = []
    const otherWork = []

    items.forEach(item => {
      if (item.featured) {
        featuredWork.unshift(item)
      } else {
        otherWork.unshift(item)
      }
    })

    return [featuredWork, otherWork]
  }, [data])

  return (
    <Layout
      titleContent={
        <FadeIn>
          <h1>Work</h1>
        </FadeIn>
      }
    >
      <SEO title="Work" />
      <FadeIn delay={100} className="max-w-2xl mx-auto pb-12">
        <p className="uppercase font-medium text-xs mb-2 text-gray-400 pl-2 sm:pl-4">
          Featured
        </p>
        {featuredWork.map(workItem => {
          const { className, ...containerProps } = getWorkItemProps(workItem)

          return (
            <a
              className={`w-full ${className}`}
              {...containerProps}
              key={workItem.slug}
            >
              <img src={workItem.image.file.url} alt={workItem.name} />
            </a>
          )
        })}
        <p className="uppercase font-medium text-xs mt-12 mb-2 text-gray-400 pl-2 sm:pl-4">
          Recent projects
        </p>
        <div className="flex flex-row flex-wrap">
          {otherWork.map(workItem => {
            const { className, ...containerProps } = getWorkItemProps(workItem)
            return (
              <a
                className={`w-1/2 ${className}`}
                {...containerProps}
                key={workItem.slug}
              >
                <img src={workItem.image.file.url} alt={workItem.name} />
              </a>
            )
          })}
        </div>
      </FadeIn>
    </Layout>
  )
}

export const pageQuery = graphql`
  query WorkPageQuery {
    allContentfulWork(sort: { fields: [featured], order: DESC }) {
      edges {
        node {
          id
          image {
            file {
              url
            }
          }
          featured
          name
          link
          slug
        }
      }
    }
  }
`

export default Work
