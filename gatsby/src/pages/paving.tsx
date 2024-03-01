import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "@components/shared/layout";
import FilterRenderedComponents from "@util/filterRenderedComponents";
import SEO from "@components/shared/seo";

function Paving() {
  const { sanityPavingLanding } = useStaticQuery(graphql`
    {
      sanityPavingLanding {
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
                ...sanityFluidImage
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
                ...sanityFluidImage
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
                  ...sanityFluidImage
                }
                productImage {
                  ...sanityFluidImage
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
              ...sanityFluidImage
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
                ...sanityFluidImage
              }
            }
          }
          ... on SanityCta {
            _key
            _type
            ctaText {
              _rawContent
            }
            ctaLink {
              linktext
              url
            }
          }

          ... on SanityProductRangeTabs {
            _key
            _type
            title
            tabs {
              tabContent {
                ... on SanityStandardTab {
                  _key
                  _type
                  productDescription
                  buttonLink {
                    linktext
                    url
                  }
                  productImage {
                    ...sanityFluidImage
                  }
                  productColors {
                    _key
                    textureName
                    textureThumbnail {
                      ...sanityFluidImage
                    }
                    images {
                      ...sanityFluidImage
                    }
                  }
                }
                ... on SanityPlainTab {
                  _key
                  _type
                  productImage {
                    ...sanityFluidImage
                  }
                  productDescriptionBlock {
                    _rawContent
                  }
                }
                ... on SanityDetailedTab {
                  _key
                  _type
                  productDescription
                  productImage {
                    ...sanityFluidImage
                  }
                  productDetails {
                    blockHeader
                    textBlock {
                      _rawContent
                    }
                  }
                  buttonLink {
                    url
                    linktext
                  }
                  productColors {
                    textureName
                    _key
                    textureThumbnail {
                      ...sanityFluidImage
                    }
                    images {
                      ...sanityFluidImage
                    }
                  }
                }
              }
              productTabName
            }
          }
        }
      }
    }
  `);

  const { pageContent } = sanityPavingLanding;

  return (
    <Layout>
      <SEO seoData={sanityPavingLanding?.seoBlock} slug="paving" />
      <FilterRenderedComponents pageContent={pageContent} />
    </Layout>
  );
}

export default Paving;
