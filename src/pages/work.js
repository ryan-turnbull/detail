import { graphql, Link } from "gatsby"
import React, { useMemo } from "react"
import FadeIn from "react-fade-in"
import "./work.css"

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

const WorkItem = ({ workItem }) => {
  const { className, ...containerProps } = getWorkItemProps(workItem)
  return workItem.description ? (
    <Link
      className={`${className} small-work-card`}
      to={`/work/${workItem.slug}`}
    >
      {workItem.image && (
        <img src={workItem.image.file.url} alt={workItem.name} />
      )}{" "}
    </Link>
  ) : (
    <a
      className={`${className} small-work-card`}
      {...containerProps}
      key={workItem.slug}
    >
      {workItem.image && (
        <img src={workItem.image.file.url} alt={workItem.name} />
      )}
    </a>
  )
}

const Work = ({ data }) => {
  const [featuredWork, recentWork, otherWork] = useMemo(() => {
    const items = mapNodesToArray("allContentfulWork", data)

    const featuredWork = []
    const recentWork = []
    const otherWork = []

    items.forEach(item => {
      if (item.featured) {
        featuredWork.unshift(item)
      } else if (item.recent) {
        recentWork.push(item)
      } else {
        otherWork.unshift(item)
      }
    })

    return [featuredWork, recentWork, otherWork]
  }, [data])

  return (
    <Layout
      showFooter
      titleContent={
        <FadeIn>
          <h1>Work</h1>
        </FadeIn>
      }
    >
      <SEO title="Work" />
      <FadeIn delay={100} className="max-w-3xl mx-auto pb-12">
        <p className="uppercase font-medium text-xs mb-4 text-gray-500">
          Featured
        </p>
        {featuredWork.map(workItem => (
          <WorkItem workItem={workItem} />
        ))}
        <p className="uppercase font-medium text-xs mt-12 mb-4 text-gray-500">
          Recent projects
        </p>
        <div className="flex flex-row flex-wrap justify-between">
          {recentWork.map(workItem => (
            <WorkItem workItem={workItem} />
          ))}
        </div>
        <p className="uppercase font-medium text-xs mt-12 mb-4 text-gray-500">
          Other
        </p>
        <div className="flex flex-row flex-wrap justify-between">
          {otherWork.map(workItem => (
            <WorkItem workItem={workItem} />
          ))}
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
          description {
            description
          }
          featured
          recent
          name
          link
          slug
        }
      }
    }
  }
`

export default Work
