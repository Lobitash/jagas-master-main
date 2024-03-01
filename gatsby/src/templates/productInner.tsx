import React from "react";
import { graphql, PageProps } from "gatsby";
import { Query } from "../../graphql-types";

import Layout from "../components/shared/layout";
import FilterRenderedComponents from "@util/filterRenderedComponents";
import SEO from "@components/shared/seo";

export const query = graphql`
  query productsQuery($slug: String) {
    allSanityProducts(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          pageCategory
          slug {
            current
          }
          pageContent {
            ... on SanityProjectsPreview {
              ...sanityProjectsPreview
            }
            ... on SanityTextSection {
              ...sanityTextSection
            }
            ... on SanityProductSlider {
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
                  ... on SanitySwatchlessTab {
                    _key
                    _type
                    productDescription
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
                  ... on SanityStandardTab {
                    _key
                    _type
                    productDescription
                    buttonLink {
                      linktext
                      url
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
                    productColors {
                      _key
                      textureName
                      textureThumbnail {
                        asset {
                          fluid {
                            srcWebp
                            srcSetWebp
                            srcSet
                            src
                          }
                        }
                      }
                      images {
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
                  ... on SanityPlainTab {
                    _key
                    _type
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
                    productDescriptionBlock {
                      _rawContent
                    }
                  }
                  ... on SanityDetailedTab {
                    _key
                    _type
                    productDescription
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
                        asset {
                          fluid {
                            srcSetWebp
                            srcWebp
                            srcSet
                            src
                          }
                        }
                      }
                      images {
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
                }
                productTabName
              }
            }
            ... on SanityProductHero {
              _key
              _type
              heroText {
                _rawContent
              }
              heroImage {
                asset {
                  fluid {
                    srcWebp
                    srcSetWebp
                    srcSet
                    src
                  }
                }
              }
              heroIcon {
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
            ... on SanityCustomProductPreview {
              _key
              _type
              customProducts {
                productTitle
                productDescription
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
            }
            ... on SanityRangeInformationBlock {
              _key
              _type
              header
              rangeColours {
                _key
                textureName
                textureThumbnail {
                  asset {
                    fluid {
                      srcWebp
                      srcSetWebp
                      srcSet
                      src
                    }
                  }
                }
                images {
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
              infoBlocks {
                _key
                blockHeader
                textBlock {
                  _rawContent
                }
              }
            }
          }
          seoBlock {
            pageTitle
            pageKeyWords
            pageDescription
            ogImage {
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
      }
    }
  }
`;
interface Props extends PageProps {
  data: Query;
}

function ProductInner({ data }: Props) {
  const {
    allSanityProducts: {
      edges: [{ node: product }],
    },
  } = data;
  return (
    <Layout isProductPage>
      <SEO seoData={product?.seoBlock} slug={product.slug.current} />
      <FilterRenderedComponents
        pageContent={product.pageContent}
        category={product.pageCategory}
      />
    </Layout>
  );
}

export default ProductInner;
