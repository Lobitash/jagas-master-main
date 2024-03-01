import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/shared/layout'
import RenderFilteredComponents from '@util/filterRenderedComponents'
import SEO from '@components/shared/seo'

function PrecastTechnicalInfo() {

  const { sanityPrecastTechnicalInfo } = useStaticQuery(graphql`
  {
    sanityPrecastTechnicalInfo {
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
      ...on SanityLeftRightBlock {
          _key
          _type
          _rawLeftRightText
          imageAlignRight
          blockTitle
          blockLink {
            url
            linktext
          }
          blockImage {
            asset {
              fluid {
                srcWebp
                srcSetWebp
                srcSet
                src
              }
            }
          }
         
        }
      ...on SanityLandingHero {
          _key
          _type
          heroTitle
          HeroLink {
            linktext
            url
          }
          landingHeroSlides {
            slideImage {
              asset {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                }
              }
            }
            _key
          }
        }
      ...on SanityDownloadGrid {
          _key
          _type
          downloadableDocuments {
            fileName
            documentImage {
              asset {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                }
              }
            }
            fileObject {
              asset {
                url
              }
            }
          }
        }
      }
    }
  }
`)

  const { pageContent } = sanityPrecastTechnicalInfo
  return (
    <Layout isProductPage>
      <SEO seoData={sanityPrecastTechnicalInfo?.seoBlock} slug='precast/technical-info' />
      <RenderFilteredComponents pageContent={pageContent} />
    </Layout>
  )
}

export default PrecastTechnicalInfo
