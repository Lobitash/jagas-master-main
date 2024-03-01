import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '@components/shared/seo'
import Layout from '@components/shared/layout'
import NotFoundContent from '@components/shared/404/notFoundContent'


function NotFoundPage() {

  const { sanityPageNotFound } = useStaticQuery(graphql`
  {
    sanityPageNotFound {
      pageSubHeader
      pageHeader
      pageLinks {
        _key
        url
        linktext
      }
      notFoundImage {
        asset {
          fluid {
            srcWebp
            srcSetWebp
            srcSet
            src
          }
        }
      }
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
    }
  }
`)

  const { pageSubHeader, pageHeader, notFoundImage, pageLinks } = sanityPageNotFound

  return (
    <Layout isProductPage noCta>
      <SEO seoData={sanityPageNotFound?.seoBlock} slug='page-not-found' />
      <NotFoundContent header={pageHeader} subHeader={pageSubHeader} image={notFoundImage} links={pageLinks} />
    </Layout>
  )
}

export default NotFoundPage
