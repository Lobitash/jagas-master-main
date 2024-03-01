import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "@components/shared/layout";
import FilterRenderedComponents from "@util/filterRenderedComponents";
import SEO from "@components/shared/seo";

const About = () => {
  const { sanityAboutPage } = useStaticQuery(graphql`
    {
      sanityAboutPage {
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
            _rawTextContent
          }
          ... on SanitySlider {
            ...sanitySlider
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
            ...sanityLeftRightBlock
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
          ... on SanityOurTeam {
            _key
            _type
            header
            teamMembers {
              memberRole
              memberName
              memberImage {
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
          ... on SanityTestimonials {
            _key
            _type
            header
            subHeader
          }
          ... on SanityHeroPlain {
            _key
            _type
            heroText
          }
        }
      }
    }
  `);

  const { pageContent } = sanityAboutPage;

  return (
    <Layout>
      <SEO seoData={sanityAboutPage?.seoBlock} slug="about" />
      <FilterRenderedComponents pageContent={pageContent} />
    </Layout>
  );
};

export default About;
