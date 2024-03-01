import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { P, H3 } from '@util/standard'
import { icons, TWENTY_INCH_SCREEN } from '@util/constants'


interface Props {
  blog: object;
}

const BlogCard = styled.div`
display: grid;
grid-template-columns: (1, 1fr);
cursor: pointer;
`

const ImageWrapper = styled.div`
position: relative;
width: 100%;
height: 200px;
@media only screen and (min-width: ${TWENTY_INCH_SCREEN}px) {
height: 300px;
}
`
const StyledImg = styled(Img)`
width: 100%;
height: 100%;
`

const ReadMore = styled(P) <{ hoverEffect: boolean }>`
position: absolute;
bottom: 20px;
font-family: 'bold';
left: 30px;
color: white;
opacity: 0;
${({ hoverEffect }) => hoverEffect && `opacity: 1;`};
transition: opacity 0.2s;
z-index: 2;
`
const Arrow = styled.img<{ hoverEffect: boolean; }>`
  position: absolute;
  bottom: 40px;
  right: 30px;
  width: 50px;
  z-index: 1;
  opacity: 0;
${({ hoverEffect }) => hoverEffect && `opacity: 1;`};
transition: transform 0.2s;
  
`

const TextWrapper = styled.div`
`

const BlogTitle = styled(H3)`
font-size: 20px;
font-family: 'bold';
`

const Background = styled.div<{ hoverEffect: boolean; }> `
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #D86310;
  opacity: 0;
  ${({ hoverEffect }) => hoverEffect && `opacity: 0.7;`};
  transition: opacity 0.2s;
`


function BlogPreview(props: Props) {

  const { blog } = props
  const { blogContent, pageName, publishDate, blogSummary, slug, postFeatureImage } = blog
  const [firstImage, setFirstImage] = useState({})
  const [hoverEffect, toggleHoverEffect] = useState(false)


  useEffect(() => {
    blogContent.map(component => {
      if (component._type === 'blogImageBlock') {
        setFirstImage(component.blockImage)
      }
    })
  })

  const dateConvert = (date: string) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    let processDate = date.split('-')
    const month = Number(processDate[1])
    let prefix = ''
    processDate[2][1] === '1' ? prefix = 'ST' : processDate[2][1] === '2' ? prefix = 'ND' : processDate[2][1] === '3' ? prefix = 'RD' : prefix = 'TH'
    processDate[2][0] === '0' ? processDate[2] = processDate[2][1] : null
    const convertedMonth = processDate[2] + prefix + " " + months[month - 1] + " " + processDate[0]
    return convertedMonth
  }

  return (
    <>
      <BlogCard onMouseEnter={() => toggleHoverEffect(true)} onMouseLeave={() => toggleHoverEffect(false)} onClick={() => navigate(`/${slug.current}`)}>
        <ImageWrapper hoverEffect={hoverEffect}>
          <StyledImg fluid={postFeatureImage.asset.fluid} />
          <ReadMore hoverEffect={hoverEffect}>READ MORE</ReadMore>
          <Arrow hoverEffect={hoverEffect} src={icons.submitArrowWide} />
          <Background hoverEffect={hoverEffect}></Background>
        </ImageWrapper>
        <TextWrapper>
          <P>{dateConvert(publishDate)}</P>
          <BlogTitle>{pageName.toUpperCase()}</BlogTitle>
          <P>{blogSummary}</P>
        </TextWrapper>
      </BlogCard>
    </>
  )
}

export default BlogPreview
