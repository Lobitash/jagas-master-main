import React, { ReactNode, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'
import { Carousel } from 'antd'

import { P, A, H2 } from '../../../util/standard'
import { icons, MOBILE_BREAKPOINT, TABLET_BREAKPOINT, IPAD_PRO_BREAKPOINT, LAPTOP_BREAKPOINT } from '../../../util/constants'


interface Props {
  title: string;
  description: string;
  images: Array<FluidObject>;
  children: ReactNode;
  noButtons?: boolean;
}

const ContentWrapper = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 79vw;
height: 86vh;
background-color: white;
z-index: 3;

@media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
  height: 60vh;
  
}

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  height: 70vh;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
width:85vw;
height: 85vh;
top: 65%;
left: 50%;
transform: translate(-50%, -65%);
}
`

const TextWrapper = styled.div`
position: relative;
width: 80%;
margin: 50px auto 20px auto;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 25px auto 20px auto;
}
`

const Title = styled(H2)`
  font-family: 'bold';
  margin-bottom: 0px;
`

const Description = styled(P)`
  width: 65%;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 12px;
  }  
`


const LinksWrapper = styled.div`
position: absolute;
top: 50px;
right: 40px;
display: grid;
grid-template-columns: 60% 40%;
width: 250px;

@media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
  position: initial;
    margin: 20px 0px 20px 0px;

}
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 12px;
    width: 85%;
  }

`

const TextLink = styled(A)`
color: #D86310;
font-family: 'bold';
width: max-content;
padding: 10px 0px;
text-decoration: underline;

&:hover {
  color: #D86310;
  text-decoration: underline;
  opacity: 0.7;
}
transition: opacity 0.2s;
`

const ButtonLink = styled(A)`   
  font-family: 'bold';
  width: max-content;
  padding: 10px 25px;
  height: 40px;
  background-color: #D86310;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 10px 15px;
} 

&:hover {
  background-color: #F7F7F6;
  color: #D86310;
  border: 1px solid #D86310;
  padding: 9px 24px;
}

transition: background-color 0.2s;
`

const CarouselWrapper = styled.div`
position: relative;
width: 80%;
margin: 0 auto;
`

const StyledCarousel = styled(Carousel)`
width: 100%;
height: 100%;`

const ImageWrapper = styled.div`
height: 60vh;
width: 100%;

@media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
  height: 40vh;
}

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  height: 35vh;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  height: 30vh;
}
`

const StyledImg = styled(Img)`
width: 100%;
height: 100%;`

const NavArrowLeft = styled.img`
position: absolute;
top: 50%;
left: -30px;
cursor: pointer;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  left: -20px;
}

`

const NavArrowRight = styled.img`
position: absolute;
top: 50%;
right: -30px;
cursor: pointer;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  right: -20px;
}

`

const Background = styled.div`
position: fixed;
background-color: #666666;
width: 100vw;
height: 100vh;
top: 0px;
opacity: 0.9;
left: 0px;
z-index: 2;
`

function FixedPopUp(props: Props) {

  const { title, description, images, children, noButtons } = props

  const carouselSlider = useRef(null)
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: true,
  }

  return (
    <>
      <ContentWrapper>
        <TextWrapper>
          {children}
          <div>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
          {!noButtons && <LinksWrapper>
            <TextLink>Technical Docs</TextLink>
            <ButtonLink href='/contact'>Enquire Now</ButtonLink>
          </LinksWrapper> }
        </TextWrapper>
        <CarouselWrapper>
          {images.length > 1 && <NavArrowLeft onClick={() => carouselSlider.current.prev()} src={icons.leftArrow} />}
          <StyledCarousel {...carouselSettings} ref={carouselSlider}>
            {images.map(image => {
              return (
                <ImageWrapper>
                  <StyledImg fluid={image.asset.fluid} />
                </ImageWrapper>
              )
            })}
          </StyledCarousel>
          {images.length > 1 && <NavArrowRight onClick={() => carouselSlider.current.next()} src={icons.rightArrow} />}
        </CarouselWrapper>
      </ContentWrapper>
      <Background></Background>
    </>
  )
}

export default FixedPopUp