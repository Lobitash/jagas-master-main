import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'

import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'

interface Props {
  image: FluidObject;
}

const ImageWrapper = styled.div`
  width: 95%;
  height: 440px;
  margin: 100px auto;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 400px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 270px;
    margin: 0px auto 100px auto;
  }
`

const WideImg = styled(Img)`
  width: 100%;
  height: 100%;
`

function WideImageBlock(props: Props) {

  const { image } = props

  return (
    <ImageWrapper>
      <WideImg fluid={image.asset.fluid} />
    </ImageWrapper>
  )
}

export default WideImageBlock
