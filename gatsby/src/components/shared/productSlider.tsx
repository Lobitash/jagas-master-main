import React, { useRef, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';
import { Carousel } from "antd";

import { P, A, H3 } from '../../util/standard';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, icons, TWENTY_INCH_SCREEN, IMAC_BREAKPOINT } from "../../util/constants";

interface Props {
  sliderContent?: Array<FluidObject>;
  sliderTitle?: string;
}

const CarouselWrapper = styled.div`
position: relative;
width: 81%;
margin: 150px auto;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 90%;
  margin: 50px auto;
}
`;

const TextWrapper = styled.div`
display: grid;
grid-template-columns: 90% 10%;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
grid-template-columns: 80% 20%;


}
`;


const ImageWrapper = styled.div`
width: 260px;
height: 200px;
padding: 10px;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  height: 130px;
}

`;
const StyledImg = styled(Img)`
width: 100%;
height: 100%;

`;

const Title = styled(H3)`
font-size: 20px;
font-family: 'bold';
margin-left: 10px;
margin-bottom: 20px;

`;

const StyledCarousel = styled(Carousel)`
width: 100%;
height: 100%;
`;
const CarouselNav = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);`;

const NavArrowLeft = styled.img`
/* position: absolute;
top: 50%;
left: -20px; */
cursor: pointer;
`;

const NavArrowRight = styled.img`
/* position: absolute;
top: 50%;
right: -20px; */
cursor: pointer;
`;

function ProductSlider(props: Props) {

  const { sliderContent, sliderTitle } = props;
  const carouselSlider = useRef(null);

  const [windowWidth, setWindowWidth] = useState(0);

  const checkForMobileWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', checkForMobileWidth);
    } else {
      return;
    }
  });

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: true,
  };

  return (
    <CarouselWrapper>
      <TextWrapper>
        <Title>{sliderTitle?.toUpperCase()}</Title>
        {sliderContent.length > 4 &&
          <CarouselNav>
            <NavArrowLeft onClick={() => carouselSlider.current.prev()} src={icons.leftArrow} />
            <NavArrowRight onClick={() => carouselSlider.current.next()} src={icons.rightArrow} />
          </CarouselNav>
        }
      </TextWrapper>
      <StyledCarousel {...carouselSettings} ref={carouselSlider} slidesToShow={windowWidth <= MOBILE_BREAKPOINT ? 2 : windowWidth >= IMAC_BREAKPOINT ? 6 : 4}>
        {sliderContent.map(slide => {
          return (
            <ImageWrapper>
              <StyledImg fluid={slide.slideContent.asset.fluid} />
            </ImageWrapper>
          );
        })}
      </StyledCarousel>
    </CarouselWrapper>
  );
}

export default ProductSlider;
