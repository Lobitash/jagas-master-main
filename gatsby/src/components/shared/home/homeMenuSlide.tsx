import React, { useRef, useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Carousel } from "antd";
import { navigate } from "gatsby";

import { P, H2 } from "@util/standard";
import {
  MOBILE_BREAKPOINT,
  IPAD_PRO_BREAKPOINT,
  LAPTOP_BREAKPOINT,
  IMAC_BREAKPOINT,
} from "@util/constants";
import { Maybe, SanityImage } from "@graphql-types";
import { useCheckScreenWidth } from "@util/hooks";

interface Props {
  slides: Maybe<Maybe<SanityImage>[]> | undefined;
  left?: boolean;
  title: Maybe<string> | undefined;
  link: Maybe<string> | undefined;
}

const SlidesWrapper = styled.div<{ hoverEffect: boolean; left?: boolean }>`
  width: 37vw;
  height: 100%;
  margin: 0 auto 20px auto;
  position: relative;
  transform: scale(1);
  ${({ hoverEffect, left }) =>
    hoverEffect && left && `transform: scale(1.27) translateX(-76px);`};
  ${({ hoverEffect, left }) =>
    hoverEffect && !left && `transform: scale(1.27) translateX(76px);`};
  transition: all 0.2s;

  cursor: pointer;

  @media only screen and (min-width: ${IMAC_BREAKPOINT}px) {
    ${({ hoverEffect, left }) =>
      hoverEffect && left && `transform: scale(1.30) translate(-105px, 25px);`};
    ${({ hoverEffect, left }) =>
      hoverEffect && !left && `transform: scale(1.30) translate(105px, 25px);`};
  }

  @media only screen and (max-width: ${LAPTOP_BREAKPOINT}px) {
    ${({ hoverEffect, left }) =>
      hoverEffect && left && `transform: scale(1.25) translateX(-60px);`};
    ${({ hoverEffect, left }) =>
      hoverEffect && !left && `transform: scale(1.25) translateX(60px);`};
  }

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    width: 75vw;
    margin: 50px auto 30px auto;

    ${({ hoverEffect, left }) =>
      hoverEffect &&
      left &&
      `transform: scale(1.2) translateX(0) translateX(0);`};
    ${({ hoverEffect, left }) =>
      hoverEffect &&
      !left &&
      `transform: scale(1.2) translateX(0) translateY(20px);`};
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 75vw;
    margin: 0px auto 30px auto;

    ${({ hoverEffect, left }) =>
      hoverEffect &&
      left &&
      `transform: scale(1.2) translateX(0) translateX(0); margin-bottom: 50px;`};
    ${({ hoverEffect, left }) =>
      hoverEffect &&
      !left &&
      `transform: scale(1.2) translateX(0) translateY(20px);`};
  }
`;

const TitleWrapper = styled.div<{ left?: boolean }>`
  position: absolute;
  width: max-content;
  bottom: 50%;
  z-index: 1;
  right: 42px;

  ${({ left }) =>
    left &&
    `
  left: 42px;
`};
`;

const SlideTitle = styled(H2)<{ hoverEffect: boolean; left?: boolean }>`
  width: max-content;
  font-size: 30px;
  transition: all 0.2s;
  color: #d86310;
  font-family: "bold";
  /* transform: rotate(90deg) translateY(-60px) translateX(-30px); */

  @media only screen and (min-width: ${IPAD_PRO_BREAKPOINT}px) {
    ${({ hoverEffect, left }) =>
      hoverEffect &&
      left &&
      `transform: rotate(90deg) translateY(60px) translateX(30px);`}
    ${({ hoverEffect, left }) =>
      hoverEffect &&
      !left &&
      `transform: rotate(90deg) translateY(-80px) translateX(30px) ;`}
  }
`;

const Line = styled.div<{ hoverEffect: boolean; left?: boolean }>`
  height: 50px;
  width: 20%;
  border-bottom: 2px solid #d86310;
  position: absolute;
  z-index: 1;
  bottom: 52%;
  ${({ left }) => (left ? `left: 42px; right: 0px;` : `right: 42px;`)};

  @media only screen and (min-width: ${IPAD_PRO_BREAKPOINT}px) {
    ${({ hoverEffect, left }) =>
      hoverEffect && left && `transform: translateX(30px);`};
    ${({ hoverEffect, left }) =>
      hoverEffect && !left && `transform: translateX(-30px);`};
    transition: all 0.2s;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: width 0.2s;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div<{ hoverEffect: boolean }>`
  width: 100%;
  height: 50vh;
  margin: 0 auto;

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    height: 35vh;
    ${({ hoverEffect }) => hoverEffect && `height: 35vh;`};
    transition: height 0.2s;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

const CarouselNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 20%;
  position: absolute;
  bottom: 3.5%;
  left: 2%;

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    display: none;
  }
`;
const Pagination = styled(P)<{ hoverEffect: boolean; isBold: boolean }>`
  text-align: center;
  display: none;
  color: #d86310;
  ${({ isBold }) => isBold && `font-family: 'bold';`};
  cursor: pointer;
  ${({ hoverEffect }) => hoverEffect && `display: block;`};
`;

const HomeMenuSlide = (props: Props) => {
  const { slides, left, title, link } = props;
  const [hoverEffectOn, toggleHoverEffect] = useState(false);
  const [currentSlideIndex, updateSlideIndex] = useState(0);
  const carouselSlider = useRef(null);
  const { isTabletWidth } = useCheckScreenWidth();

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isTabletWidth ?? false,
    autoplaySpeed: 1500,
    draggable: false,
    afterChange: () =>
      updateSlideIndex(
        Number(carouselSlider.current.innerSlider.state.currentSlide)
      ),
  };

  const paginate = (index) => {
    updateSlideIndex(index);
    carouselSlider.current.goTo(index);
  };

  const hoverAutoPlay = () => {
    if (carouselSlider.current !== null) {
      toggleHoverEffect(true);
      carouselSlider.current.innerSlider.autoPlay();
    }
  };

  const pauseHoverAutoPlay = () => {
    if (carouselSlider.current !== null) {
      toggleHoverEffect(false);
      carouselSlider.current.innerSlider.pause();
    }
  };

  return (
    <SlidesWrapper
      left={left}
      hoverEffect={true}
      onMouseEnter={hoverAutoPlay}
      onMouseLeave={pauseHoverAutoPlay}
      onClick={() => navigate(link!)}
    >
      <TitleWrapper left={left}>
        {title && (
          <SlideTitle left={left} hoverEffect={hoverEffectOn}>
            {title.toUpperCase()}
          </SlideTitle>
        )}
      </TitleWrapper>
      <Line hoverEffect={hoverEffectOn} left={left}></Line>
      <CarouselWrapper>
        <StyledCarousel {...carouselSettings} ref={carouselSlider}>
          {slides.map((slide) => {
            return (
              <ImageWrapper hoverEffect={hoverEffectOn}>
                <StyledImg fluid={slide.asset.fluid} />
              </ImageWrapper>
            );
          })}
        </StyledCarousel>
        <CarouselNav>
          {slides.map((_slide, index) => {
            return (
              <Pagination
                isBold={currentSlideIndex === index}
                onClick={() => paginate(index)}
                hoverEffect={hoverEffectOn}
              >
                {index + 1}
              </Pagination>
            );
          })}
        </CarouselNav>
      </CarouselWrapper>
    </SlidesWrapper>
  );
};

export default HomeMenuSlide;
