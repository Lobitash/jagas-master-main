import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { P } from "@util/standard";
import {
  TABLET_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TWENTY_INCH_SCREEN,
  IMAC_BREAKPOINT,
  icons,
} from "@util/constants";

import BlockContent from "@sanity/block-content-to-react";
import { navigate } from "gatsby";
import TextureCard from "../textureCard";
import SwatchPopUp from "../swatches/swatchPopUp";
interface Props {
  tabContent: Array<object>;
}

const StandardTabWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 77px;
  padding-bottom: 77px;
  background: #f7f7f6;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 50px;
  }
`;

const ImageWrapper = styled.div`
  width: 80%;
  height: 400px;
  margin-left: 20%;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin: 0px auto 50px auto;
    width: 90%;
    height: 400px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 250px;
  }
`;

const ContentWrapper = styled.div`
  width: 62.5%;
  margin: 0 auto;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 90%;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

const Description = styled(P)`
  margin-top: 0px;
  margin: 0 auto;
  margin-bottom: 30px;
  line-height: 20px;
`;

const ColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 60%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
  @media only screen and (min-width: ${TWENTY_INCH_SCREEN}px) {
    margin-left: -5%;
  }
  @media only screen and (min-width: ${IMAC_BREAKPOINT}px) {
    margin-left: -6%;
  }
`;

const Wrapper = styled.div`
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 65%;
  }
`;

const ButtonLink = styled.a`
  display: block;
  font-family: "bold";
  width: max-content;
  padding: 10px 25px;
  margin-top: 10px;
  color: white;
  background-color: #d86310;
  &:hover {
    background-color: #f7f7f6;
    color: #d86310;
    border: 1px solid #d86310;
    padding: 9px 24px;
  }
  transition: background-color 0.2s;
`;

const Close = styled.img`
  position: absolute;
  top: -80px;
  right: -12%;
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    top: -60px;
  }
`;

function StandardTab(props: Props) {
  const { tabContent } = props;
  const {
    productDetails,
    productImage,
    buttonLink,
    productDescription,
    productColors,
  } = tabContent[0];

  const [popUpVisible, setPopUpVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handlePopUp = (index) => {
    setSelectedIndex(index);
    setPopUpVisible(true);
  };

  return (
    <StandardTabWrapper>
      <ImageWrapper>
        <StyledImg fluid={productImage.asset.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        <Description>{productDescription}</Description>
        {productColors && (
          <ColorsWrapper>
            {productColors.map((color, index) => {
              return (
                <>
                  <Wrapper onClick={() => handlePopUp(index)}>
                    <TextureCard texture={color} />
                  </Wrapper>
                  {popUpVisible && (
                    <SwatchPopUp
                      colours={productColors}
                      swatchName={color.textureName}
                      noCta
                      initialSlide={selectedIndex}
                    >
                      <Close
                        src={icons.cross}
                        onClick={() => setPopUpVisible(false)}
                      />
                    </SwatchPopUp>
                  )}
                </>
              );
            })}
          </ColorsWrapper>
        )}
        {buttonLink && (
          <ButtonLink onClick={() => navigate(buttonLink.url)}>
            {buttonLink.linktext}
          </ButtonLink>
        )}
      </ContentWrapper>
    </StandardTabWrapper>
  );
}

export default StandardTab;
