import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import FilterRenderedComponents from '@util/filterRenderedComponents'
import Layout from '../components/shared/layout'
import BlogsGrid from '@components/blogs/blogsGrid'
import SEO from '@components/shared/seo'

function Blogs() {

  const { sanityBlogsLanding } = useStaticQuery(graphql`
  {
    sanityBlogsLanding {
      seoBlock {
        pageTitle
        pageKeyWords
        pageDescription
        slug {
          current
        }
        
       ogImage {
          asset {
            fluid {
              src
            }
          }
        }
      }
      pageContent {
        ... on SanityTextSection {
          _key
          _type
          title
          textContent {
            _rawContent
          }
        }
        ... on SanityHeroPlain {
          _key
          _type
          heroText
        }
      }
    }
  }
  `)

  const { pageContent } = sanityBlogsLanding
  return (
    <Layout >
      <SEO seoData={sanityBlogsLanding?.seoBlock} slug='blogs' />
      <FilterRenderedComponents pageContent={pageContent} />
      <BlogsGrid />
    </Layout>
  )
}

export default Blogs
