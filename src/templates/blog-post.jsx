/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './blog-post.css'

import TechTag from '../components/tags/TechTag'
import CustomShareBlock from '../components/CustomShareBlock'

const BlogPost = (props) => {
  const post = props.data.markdownRemark
  const { labels } = props.data.site.siteMetadata
  const siteName = props.data.site.siteMetadata.title
  const siteUrl = props.data.site.siteMetadata.url
  const url = `${siteUrl}${props.pageContext.slug}`;
  const { tags } = post.frontmatter

  const getTechTags = (tags) => {
    const techTags = []
    tags.forEach((tag) => {
      labels.forEach((label) => {
        if (tag === label.tag) {
          // eslint-disable-next-line max-len
          techTags.push(<TechTag key={label.name} tag={label.tag} tech={label.tech} name={label.name} size={label.size} color={label.color} />)
        }
      })
    })
    return techTags
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post-main-wrap">
        <div className="post-main">
          <SEO title={post.frontmatter.title} />
          <div className="mt-3">
            <h2 className="heading">{post.frontmatter.title}</h2>
            <div className="d-block">
              {getTechTags(tags)}
            </div>
            <br />
            <small>
              <i>Published on </i>
              {' '}
              {post.frontmatter.date}
            </small>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            <CustomShareBlock title={post.frontmatter.title} siteName={siteName} url={url} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
      site {
        siteMetadata {
          url
          title
          labels {
              tag
              tech 
              name 
              size 
              color
          }
        }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

export default BlogPost
