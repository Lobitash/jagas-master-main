import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'

interface Props {
  image: FluidObject;
}

const ImageWrapper = styled.div`
width: 48%;
height: 400px;
margin: 40px auto;

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  width: 80%;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 90%;
  height: 300px;
}
`

const StyledImg = styled(Img)`
width: 100%;
height: 100%;`

function BlogImageBlock(props: Props) {

  const { image } = props

  return (
    <ImageWrapper>
      <StyledImg fluid={image.asset.fluid} />
    </ImageWrapper>
  )
}

export default BlogImageBlock
