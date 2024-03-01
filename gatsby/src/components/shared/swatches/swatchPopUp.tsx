import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img, { FluidObject } from "gatsby-image";
import { Carousel, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { P, A, H2 } from "../../../util/standard";
import {
  icons,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  IPAD_PRO_BREAKPOINT,
  SMALL_LAPTOP_BREAKPOINT,
  SMALLER_MOBILE,
} from "../../../util/constants";

interface Props {
  colours: Array<object>;
  children: ReactNode;
  swatchName: string;
  noCta?: boolean;
  initialSlide?: number;
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
    width: 85vw;
    height: 65vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const TextWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 50px auto 10px auto;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 25px auto 20px auto;
  }
`;

const Title = styled(H2)`
  font-family: "bold";
  margin-bottom: 0px;
`;

const ColoursWrapper = styled.div`
  display: inline;
  text-align: center;
  width: 80%;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    display: none;
    width: 80%;
    text-align: left;
  }
`;
const ColourName = styled(P)<{
  isBold?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
  colour?: string;
}>`
  cursor: pointer;
  padding: 0px 12px;
  margin-bottom: 0px;

  ${({ isBold }) => isBold && `font-family: 'bold';`};
  border-right: 1px solid black;
  ${({ isLast }) => isLast && `border: none;`};
  ${({ isFirst }) => isFirst && `padding-left: 0px;`}
  ${({ colour }) => (colour ? `color: ${colour};` : "colour: black;")};
  display: inline-block;
`;

const MobileDropDown = styled(Dropdown)<{ visibleOnDesktop: boolean }>`
  ${({ visibleOnDesktop }) =>
    visibleOnDesktop
      ? `display: block;   
      color: #d86310;
      p {
        padding-left: 0px;
      }`
      : `display:none ;`};

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    display: block;
    color: #d86310;
    p {
      padding-left: 0px;
      /* padding-right: 50px; */
    }
  }
`;

const LinksWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 0px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media only screen and (max-width: ${SMALL_LAPTOP_BREAKPOINT}px) {
    top: 0px;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    top: 40px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    top: 50vh;
  }
`;

const ButtonLink = styled(A)`
  font-family: "bold";
  width: max-content;
  padding: 10px 25px;
  height: 40px;
  background-color: #d86310;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 10px 15px;
  }

  &:hover {
    background-color: #f7f7f6;
    color: #d86310;
    border: 1px solid #d86310;
    padding: 9px 24px;
  }
  transition: background-color 0.2s;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
`;

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
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

const NavArrowLeft = styled.img`
  position: absolute;
  top: 50%;
  left: -30px;
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    left: -20px;
  }
`;

const NavArrowRight = styled.img`
  position: absolute;
  top: 50%;
  right: -30px;
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    right: -20px;
  }
`;

const Background = styled.div`
  position: fixed;
  background-color: #666666;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  opacity: 0.9;
  z-index: 2;
`;

function SwatchPopUp(props: Props) {
  const { swatchName, colours, children, noCta, initialSlide } = props;
  const [currentColourIndex, setCurrentColourIndex] = useState(0);

  const carouselSlider = useRef(null);
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: true,
    initialSlide: initialSlide,
  };

  useEffect(() => {
    if (initialSlide) {
      setCurrentColourIndex(initialSlide);
    }
  }, []);

  const currentColour = colours[currentColourIndex];

  const dropdownMenu = (
    <Menu>
      {colours.map((colour, index) => (
        <Menu.Item onClick={() => setCurrentColourIndex(index)}>
          <ColourName isLast>{colour.textureName.toUpperCase()}</ColourName>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <ContentWrapper>
        <TextWrapper>
          {children}
          <div>
            <Title>{currentColour.textureName}</Title>
            {colours.length < 5 && (
              <ColoursWrapper>
                {colours.map((colour, index) => (
                  <ColourName
                    isBold={index === currentColourIndex}
                    isFirst={index === 0}
                    isLast={index === colours.length - 1}
                    isShortList={colours.length < 3}
                    isOddNumber={index % 2 !== 0}
                    onClick={() => setCurrentColourIndex(index)}
                  >
                    {colour.textureName.toUpperCase()}
                  </ColourName>
                ))}
              </ColoursWrapper>
            )}
            <MobileDropDown
              overlay={dropdownMenu}
              trigger={["click"]}
              visibleOnDesktop={colours.length > 4}
            >
              <div className="ant-dropdown-link">
                <ColourName
                  colour="#D86310"
                  isBold
                  isLast
                  onClick={(e) => e.preventDefault()}
                >
                  {currentColour.textureName}
                </ColourName>
                <DownOutlined />
              </div>
            </MobileDropDown>
          </div>
          <LinksWrapper>
            {!noCta && <ButtonLink href="/contact">Enquire Now</ButtonLink>}
          </LinksWrapper>
        </TextWrapper>
        <CarouselWrapper>
          {currentColour.images.length > 1 && (
            <NavArrowLeft
              onClick={() => carouselSlider.current.prev()}
              src={icons.leftArrow}
            />
          )}
          <StyledCarousel {...carouselSettings} ref={carouselSlider}>
            {currentColour.images.map((image) => {
              return (
                <ImageWrapper>
                  <StyledImg fluid={image.asset.fluid} />
                </ImageWrapper>
              );
            })}
          </StyledCarousel>
          {currentColour.images.length > 1 && (
            <NavArrowRight
              onClick={() => carouselSlider.current.next()}
              src={icons.rightArrow}
            />
          )}
        </CarouselWrapper>
      </ContentWrapper>
      <Background></Background>
    </>
  );
}

export default SwatchPopUp;
