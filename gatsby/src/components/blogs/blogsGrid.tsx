import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BlogPreview from './blogPreview'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'

const GridWrapper = styled.div`
width: 80%;
margin: 100px auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
row-gap: 40px;

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  grid-template-columns: repeat(2, 1fr);
}
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  grid-template-columns: repeat(1, 1fr);
}
`
const LoadMoreButton = styled.button`
display: block;
color: #D86310;
font-family: 'bold';
background: none;
border: none;
text-decoration:underline;
margin: 40px auto;
outline:none;
&:hover{
  cursor:pointer;
}
`


function BlogsGrid() {

  const { allSanityBlog } = useStaticQuery(graphql`
    {
      allSanityBlog {
        edges {
          node {
            _key
            blogContent {
              ... on SanityRelatedPosts {
                _key
                _type
              }
              ... on SanityBlogTextBlock {
                _key
                _type
                title
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
            pageName
            hiddenToggle
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
            blogSummary
            slug {
              current
            }
          }
        }
      }
    }
  `)
  const blogs = allSanityBlog.edges

  const initailSetting = {
    numberToShow: 12,
    loadMoreNumber: 6,
  }

  const [numberToShow, setNumberToShow] = useState(initailSetting.numberToShow);

  return (
    <>
      <GridWrapper>
        {
          blogs && blogs.slice(0, numberToShow).map((blog, index) => {
            if (blog == null) return null;
            if (blog.node.hiddenToggle !== true) {
              return <BlogPreview blog={blog.node} />
            }
            return null;
          })}

      </GridWrapper>
      {
        numberToShow < blogs.length && <LoadMoreButton
          onClick={() =>
            setNumberToShow(pre => pre + initailSetting.loadMoreNumber)
          }
        >
          Load More
        </LoadMoreButton>
      }

    </>
  )
}

export default BlogsGrid
