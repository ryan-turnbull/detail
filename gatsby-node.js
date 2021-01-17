const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const WorkItem = path.resolve(`src/components/work-item/index.tsx`)
  const result = await graphql(`
    query WorkItemQuery {
      allContentfulWork {
        edges {
          node {
            id
            slug
            name
            link
            logo {
              file {
                url
              }
            }
            description {
              description
            }
            what {
              raw
              references {
                ... on ContentfulAsset {
                  id
                  contentful_id
                  __typename
                  file {
                    url
                  }
                  title
                }
              }
            }
          }
        }
      }
    }
  `)
  result.data.allContentfulWork.edges.forEach(edge => {
    if (edge.node.description) {
      createPage({
        path: `/work/${edge.node.slug}`,
        component: WorkItem,
        context: edge.node,
      })
    }
  })
}
