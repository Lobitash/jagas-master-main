import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@components/shared/layout'
import FilterRenderedComponents from '@util/filterRenderedComponents'
import ProjectsGrid from '@components/shared/projects/projectsGrid'
import SEO from '@components/shared/seo'

function Projects() {

  const { sanityProjectsLanding } = useStaticQuery(graphql`
  {
    sanityProjectsLanding {
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
        ... on SanityHeroPlain {
          _key
          _type
          heroText
        }
      }
    }
  }
  `)

  const { pageContent } = sanityProjectsLanding

  return (
    <Layout >
      <SEO seoData={sanityProjectsLanding?.seoBlock} slug='projects' />
      <FilterRenderedComponents pageContent={pageContent} />
      <ProjectsGrid />
    </Layout >
  )
}

export default Projects
