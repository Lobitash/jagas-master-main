import FilterRenderedComponents from '@util/filterRenderedComponents';
import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Query } from '../../graphql-types';
import styled from 'styled-components';

import Layout from '../components/shared/layout';
import BlogTitleBlock from '../components/blogs/blogTitleBlock';
import Blogs from '@pages/blogs';
import SEO from '@components/shared/seo';
import { Container, P } from '@util/standard';


export const query = graphql`
  query blogsQuery($slug: String){
    allSanityBlog(filter: { slug: {current: { eq: $slug } } } ) {
    edges {
      node {
        publishDate
        postFeatureImage {
          asset {
            fluid {
              srcWebp
              srcSetWebp
              srcSet
              src
            }
          }
        }
        pageName
        blogSummary
        blogContent {
          ... on SanityRelatedPosts {
            _key
            _type
            header
            posts {
              pageName
              blogSummary
              postFeatureImage {
                asset {
                  fluid {
                    srcWebp
                    srcSetWebp
                    srcSet
                    src
                  }
                }
              }
              blogContent {
                ... on SanityRelatedPosts {
                  _key
                  _type
                  header
                  posts {
                    pageName
                    blogSummary
                    postFeatureImage {
                      asset {
                        fluid {
                          srcWebp
                          srcSetWebp
                          srcSet
                          src
                        }
                      }
                    }
                    publishDate
                    slug {
                      current
                    }
                  }
                }
                ... on SanityBlogTextBlock {
                  _key
                  _type
                  blockText {
                    _rawContent
                  }
                }
                ... on SanityBlogImageBlock {
                  _key
                  _type
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
              }
              publishDate
              slug {
                current
              }
            }
          }
          ... on SanityBlogTextBlock {
            _key
            _type
            blockText {
              _rawContent
            }
          }
          ... on SanityBlogImageBlock {
            _key
            _type
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
        }
        slug {
          current
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


function BlogInner({ data }: Props) {
  const { allSanityBlog: { edges: [{ node: blog }] } } = data;

  return (
    <Layout isProductPage>
      <SEO seoData={blog?.seoBlock} slug={blog.slug.current} />
      <BlogTitleBlock blogTitle={blog.pageName} publishDate={blog.publishDate} />
      <FilterRenderedComponents pageContent={blog.blogContent} />
    </Layout>
  );
}

export default BlogInner;
