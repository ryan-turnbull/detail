import "./index.css"

import React from "react"
import { graphql } from "gatsby"
import FadeIn from "react-fade-in"

import SEO from "../components/seo"
import { Layout } from "../components/layout"

import Leaves from "../assets/svg/leaves.svg"
import PhoneIll from "../assets/svg/phone-ill.svg"
import ComputerIll from "../assets/svg/computer-ill.svg"

const IndexPage = ({ data }) => {
  const featuredItem = data?.allContentfulWork?.edges?.[0].node

  return (
    <Layout
      showFooter
      titleContent={
        <FadeIn>
          <div className="flex items-center justify-center">
            <h1 className="relative">
              Hi, I'm Ryan
              <Leaves className="home-page-leaves" />
            </h1>
          </div>
        </FadeIn>
      }
    >
      <SEO title="Home" />
      <FadeIn delay={300} className="mx-auto max-w-4xl pb-24">
        <section className="mb-16">
          <p className="max-w-xl mx-auto mt-32 text-center sm:my-16">
            I’m a passionate engineer who enjoys building products that make an
            impact on people’s lives. I enjoy the technical challenge that
            building software brings, and how the tools we use are constantly
            changing and improving.
          </p>
        </section>
        <section className="mb-16">
          <div className="flex justify-between flex-col items-start py-6  sm:py-16 sm:flex-row sm:items-center">
            <div className="sm:w-1/2 px-4 mx-auto">
              <figure className="illustration-backing flex justify-center items-center">
                <ComputerIll />
              </figure>
            </div>
            <div className="sm:w-1/2 mx-auto sm:px-4">
              <h2 className="mb-4">Frontend Developer</h2>
              <p>
                Where it all started for me. I have been building web
                experiences for roughly 5 years, ranging from simple brochure
                sites to complex web apps. Whatever it is, I stress over the
                details and strive to bring a bit of magic to the web with
                everything I do, while always looking for ways to improve.
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col-reverse items-start py-6 sm:py-16 sm:flex-row sm:items-center">
            <div className="sm:w-1/2 sm:px-4">
              <h2 className="mb-4">Wannabe Designer</h2>
              <p>
                I'm a big believer that design is king, so I try to bring it to
                the forefront of my engineering process. The journey of taking
                ideas from design through to development is right up my alley,
                combining two very different skillsets to build applications
                that look just as good as they feel.
              </p>
            </div>
            <div className="sm:w-1/2 flex justify-end mx-auto">
              <figure className="illustration-backing illustration-backing-reverse flex justify-center items-center">
                <PhoneIll />
              </figure>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <p className="uppercase font-medium text-xs mb-4 text-gray-500">
            Check out my latest work
          </p>
          <a
            className="w-full cursor-pointer"
            key={featuredItem.slug}
            href={featuredItem.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={featuredItem.image.file.url} alt={featuredItem.name} />
          </a>
        </section>
      </FadeIn>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulWork(
      filter: { contentful_id: { eq: "3Spyq299FqmkSArMi28sX2" } }
    ) {
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

export default IndexPage
