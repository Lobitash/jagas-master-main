import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { H2, P, A } from '@util/standard'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, IPAD_PRO_BREAKPOINT, icons } from '@util/constants'

import TextureCard from '../textureCard'
import { navigate } from 'gatsby'
import SwatchPopUp from './swatchPopUp'

interface Props {
  swatch: object;
  bgVisible: boolean;
}

const Wrapper = styled.div<{ bgVisible: boolean; }>`
width: 100%;
${({ bgVisible }) => bgVisible && `background-color: #F7F7F6;`}

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
padding-top: 50px;
}
`

const SwatchWrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: 40% 60%;
max-width: 1400px;
margin: 0 auto;

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  display: block;
 
}
`

const ImageWrapper = styled.div`
width: 334px;
height: 128px;
margin: auto;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 245px;
  height: 94px;
}
`

const SwatchImg = styled(Img)`
width: 100%;
height: 100%;

img {
  object-fit: initial !important;
}`

const ContentWrapper = styled.div`
width: 67%;
line-height: 30px;
@media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
  width: 90%;
}
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  margin: 0 auto;
}
`

const SwatchName = styled(H2)`
font-size: 30px;
font-family: 'bold';
margin-top: 80px;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  margin-top: 50px;
}

`

const Description = styled(P)`
margin-bottom: 30px;
margin-top: 30px;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  margin-top: 10px;
  margin-bottom: 10px;

}

`

const ColoursWrapper = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
margin-top: 40px;
margin-left: -2%;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  grid-template-columns: repeat(3,1fr);
  margin-left: -6%;
  width: 110%;

}

`

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  width: 40%;
  margin-top: 50px;
  margin-bottom: 80px;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 70%;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  margin-top: 30px;
}
`

const Link = styled(A) <{ isOrange?: boolean; }>`
font-family: 'bold';
text-decoration: underline;
${({ isOrange }) => isOrange ? `color: #D86310;` : `color: black;`};
opacity: 1;
&:hover {
  ${({ isOrange }) => isOrange ? `color: #D86310;` : `color: black;`};
  text-decoration: underline;
  opacity: 0.5;
}
transition: opacity 0.2s;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  margin-bottom: 50px;
}
`

const Close = styled.img`
position: absolute;
top: -80px;
right: -12%;
cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    top: -60px;
  }
`




function SwatchCard(props: Props) {

  const { swatch, bgVisible } = props

  const [popUpVisible, togglePopUpVisibility] = useState(false)

  const openPopUp = (index) => {
    togglePopUpVisibility(true)
  }

  return (
    <Wrapper bgVisible={bgVisible}>
      <SwatchWrapper >
        <ImageWrapper>
          <SwatchImg fluid={swatch.featureImage.asset.fluid} />
        </ImageWrapper>
        <ContentWrapper>
          <SwatchName>{swatch.swatchName}</SwatchName>
          <Description>{swatch.description}</Description>
          <ColoursWrapper>
            {swatch.textures.map(texture => {
              return (
                <div>
                  <TextureCard texture={texture} />
                </div>
              )
            })}
          </ColoursWrapper>
          <Links>
            <Link isOrange onClick={() => togglePopUpVisibility(true)}>View Gallery</Link>
            <Link onClick={() => navigate('/contact')}>Enquire Now</Link>
          </Links>
        </ContentWrapper>
      </SwatchWrapper>
      {popUpVisible &&
        <SwatchPopUp colours={swatch.textures} swatchName={swatch.swatchName}>
          <Close src={icons.cross} onClick={() => togglePopUpVisibility(false)} />
        </SwatchPopUp>
      }
    </Wrapper>
  )
}

export default SwatchCard
