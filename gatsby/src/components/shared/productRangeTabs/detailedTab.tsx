import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { P } from "@util/standard";
import BlockContent from "@sanity/block-content-to-react";
import { navigate } from "gatsby";
import TextureCard from "../textureCard";
import {
  icons,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  TWENTY_INCH_SCREEN,
} from "@util/constants";
import DropDown from "@components/rangeInformation/dropDown";
import SwatchPopUp from "../swatches/swatchPopUp";
interface Props {
  tabContent: Array<object>;
}

const DetailedTabWrapper = styled.div`
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
  line-height: 20px;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 30px auto;

  h3 {
    font-family: "bold";
  }

  p {
    width: 70%;
  }

  ul {
    list-style-type: none;
    padding-left: 15px;
    width: 70%;
  }
  li {
    width: max-content;
  }
  ul li:before {
    content: "-";
    position: absolute;
    margin-left: -15px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DesktopWrapper = styled.div`
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  @media only screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const ColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;

  grid-gap: 20px;
  row-gap: 10px;

  @media only screen and (min-width: ${TWENTY_INCH_SCREEN}px) {
    margin-left: -20px;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 60%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
`;

const ButtonLink = styled.a`
  display: block;
  font-family: "bold";
  width: max-content;
  padding: 10px 25px;
  margin-top: 20px;
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

function DetailedTab(props: Props) {
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
    <DetailedTabWrapper>
      <ImageWrapper>
        <StyledImg fluid={productImage.asset.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        <Description>{productDescription}</Description>
        <Details>
          {productDetails.map((block, index) => {
            return (
              <>
                <DesktopWrapper>
                  <h3>{block.blockHeader}</h3>
                  <BlockContent blocks={block.textBlock._rawContent} />
                </DesktopWrapper>
                {/* <MOBILE DROPDOWNS */}
                <MobileWrapper>
                  <DropDown
                    menuTitle={block.blockHeader}
                    backgroundColor="#F7F7F6"
                    themeColor="#3D393A"
                    borderBottom={index === 0}
                  >
                    <BlockContent blocks={block.textBlock._rawContent} />
                  </DropDown>
                </MobileWrapper>
              </>
            );
          })}
        </Details>
        {productColors.length >= 1 && (
          <>
            <P fontFamily="bold">COLOURS AVAILABLE</P>
            <ColorsWrapper>
              {productColors.map((color, index) => {
                return (
                  <>
                    <div onClick={() => handlePopUp(index)}>
                      <TextureCard texture={color} />
                    </div>
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
          </>
        )}
        {buttonLink && (
          <ButtonLink onClick={() => navigate(buttonLink.url)}>
            {buttonLink.linktext}
          </ButtonLink>
        )}
      </ContentWrapper>
    </DetailedTabWrapper>
  );
}

export default DetailedTab;
