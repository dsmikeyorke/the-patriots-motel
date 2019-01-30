import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

import Lightbox from '../components/Lightbox'

export default ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        {node.frontmatter.title}
        <div dangerouslySetInnerHTML={{ __html: node.html }}/>
        {node.frontmatter.images.map(({ image }) => (
          <div>
            {console.log(image)}
            <Img fluid={image.childImageSharp.fluid} />
            <Lightbox />
          </div>
        ))}
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/rooms/"}}) {
    edges {
      node {
        id
        frontmatter {
          title
          images {
            image {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
        html
      }
    }
  }
}
  `
