import React, { useRef, useState } from "react";

import { SanityHomeHero, Maybe } from "@graphql-types";
import {
  HeroWrapper,
  CarouselWrapper,
  TextWrapper,
  StyledCarousel,
  ImageWrapper,
  HeroImageSlide,
  CarouselNav,
  NavSquare,
} from "@shared/hero/hero.styles";
import { BlocksContent } from "@sub";
import { Container } from "@util/standard";
import { SquareButton } from "../shared.styles";

interface Props {
  data: Maybe<SanityHomeHero>;
}

const HomeHero = ({ data }: Props) => {
  if (data == null) return null;
  const { heroSlides, heroText, links } = data;
  const [currentSlideIndex, updateSlideIndex] = useState(0);

  const carouselSlider = useRef<any>(null);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    afterChange: () =>
      updateSlideIndex(
        Number(carouselSlider.current?.innerSlider.state.currentSlide)
      ),
  };

  const paginate = (index: number) => {
    updateSlideIndex(index);
    carouselSlider.current?.goTo(index);
  };

  return (
    <HeroWrapper height="100vh">
      <CarouselWrapper>
        <TextWrapper>
          <BlocksContent blocks={heroText?._rawContent} />
          {links && (
            <Container width="fit-content" margin="20x 0 0 0">
              {links.map((link) => {
                if (link == null) return null;

                return (
                  <SquareButton
                    key={link.url}
                    to={link.url!}
                    margin="0 20px 0 0"
                  >
                    {link.linktext}
                  </SquareButton>
                );
              })}
            </Container>
          )}
        </TextWrapper>
        {heroSlides && (
          <StyledCarousel {...carouselSettings} ref={carouselSlider}>
            {heroSlides.map((slide, index) => {
              if (slide == null) return null;
              return (
                <ImageWrapper key={index} height="100vh">
                  <HeroImageSlide fluid={slide.slideImage?.asset?.fluid} />
                </ImageWrapper>
              );
            })}
          </StyledCarousel>
        )}
        {heroSlides && (
          <CarouselNav>
            {heroSlides.map((_slide, index) => {
              return (
                <NavSquare
                  onClick={() => paginate(index)}
                  focussed={index === currentSlideIndex}
                />
              );
            })}
          </CarouselNav>
        )}
      </CarouselWrapper>
    </HeroWrapper>
  );
};

export default HomeHero;
