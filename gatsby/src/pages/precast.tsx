import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "@components/shared/layout";
import FilterRenderedComponents from '@util/filterRenderedComponents';
import SEO from '@components/shared/seo';


function Precast() {

  const { sanityPrecastLanding } = useStaticQuery(graphql`
  {
    sanityPrecastLanding {
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
        ... on SanityProjectsPreview {
          _key
          _type
          title
          projectsList {
            _key
            projectName
            description
            projectImages {
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
        }
        ... on SanityTextSection {
          _key
          _type
          title
          _rawTextContent
        }
        ... on SanitySlider {
          _key
          _type
          sliderTitle
          slides {
            _key
            slideContent {
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
        }
        ... on SanityPreviewProducts {
          _key
          _type
          previewStyle
          title
          productsArray {
            productPagePreview {
            productTitle
            _key
            productIcon {
              asset {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                }
              }
            }
            productImage {
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
          pageCategory
          slug {
            current
          }
          }
        }
        ... on SanityLeftRightBlock {
          _key
          _type
          _rawLeftRightText
          blockTitle
          imageAlignRight
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
        ... on SanityLandingHero {
          _key
          _type
          heroTitle
          HeroLink {
            linktext
            url
          }
          landingHeroSlides {
            _key
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
          }
        }
        ... on SanityCta {
          _key
          _type
          ctaLink {
            linktext
            url
          }
        }
        ... on SanityRangeInformationBlock {
        _key
        _type
        header
        infoBlocks {
          _key
          blockHeader
          textBlock {
            _rawContent
          }
        }
        }
      }
    }
  }
  `)

  const { pageContent } = sanityPrecastLanding

  return (
    <Layout>
      <SEO seoData={sanityPrecastLanding?.seoBlock} slug='precast' />
      <FilterRenderedComponents pageContent={pageContent} />
    </Layout>
  )
}

export default Precast
