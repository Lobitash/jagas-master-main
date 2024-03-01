import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { P } from '@util/standard'
import BlockContent from '@sanity/block-content-to-react'
import { navigate } from 'gatsby'
import { MOBILE_BREAKPOINT } from '@util/constants'


interface Props {
  tabContent: Array<object>;
}


const PlainTabWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding-top: 77px;
  padding-bottom: 77px;
  background: #F7F7F6;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1,1fr);
    padding-top: 50px;
  }
  `

const ImageWrapper = styled.div`
width: 80%;
height: 400px;
margin-left: 20%;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 0px auto 50px auto;
    width: 90%;
    height: 250px;
  }
`

const ContentWrapper = styled.div`
  width: 62.5%;
  margin: auto;

h3 {
  font-size: 20px;
  font-family: 'bold';
}

 @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
`

const ButtonLink = styled.a`
display: block;
font-family: 'bold';
width: max-content;
padding: 10px 25px;
margin-top: 20px;
color: white;
background-color: #D86310;
&:hover {
  background-color: #F7F7F6;
  color: #D86310;
  border: 1px solid #D86310;
  padding: 9px 24px;
}
transition: background-color 0.2s;
`

const StyledImg = styled(Img)`width: 100%;
height: 100%;`
function PlainTab(props: Props) {

  const { tabContent } = props
  const { productDescriptionBlock, productImage, buttonLink } = tabContent[0]

  return (
    <PlainTabWrapper>
      <ImageWrapper>
        <StyledImg fluid={productImage.asset.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        <BlockContent blocks={productDescriptionBlock._rawContent} />
        {/* <ButtonLink onClick={() => navigate(buttonLink.url)}>{buttonLink.linktext}</ButtonLink> */}
      </ContentWrapper>
      
    </PlainTabWrapper>

  )
}

export default PlainTab
