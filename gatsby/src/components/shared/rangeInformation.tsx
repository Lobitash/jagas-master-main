import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";

import { P, H2 } from "@util/standard";
import {
  MOBILE_BREAKPOINT,
  IPAD_PRO_BREAKPOINT,
  TABLET_BREAKPOINT,
  colors,
  icons,
} from "@util/constants";
import DropDown from "../rangeInformation/dropDown";
import TextureCard from "./textureCard";
import SwatchPopUp from "./swatches/swatchPopUp";

interface Props {
  header: string;
  infoBlocks: object;
  colors: object;
}

const RangeWrapper = styled.div`
  width: 70%;
  max-width: 1340px;
  margin: 100px auto;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 80%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
`;
const Header = styled.h2`
  margin-bottom: 30px;
  font-family: "bold";
`;

const Title = styled.h3`
  color: #d86310;
  font-family: "bold";
  font-size: 14px;
`;

const BlocksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  p {
    width: 100%;
    a {
      color: ${colors.orange};
      opacity: 1;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  ul {
    list-style-type: none;
    padding-left: 15px;
    width: 100%;
  }
  ul li:before {
    content: "-";
    position: absolute;
    margin-left: -15px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;

    p {
      width: 100%;
    }
  }
`;

const DesktopBlocks = styled.div`
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const MobileBlocks = styled.div`
  display: none;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

const ColoursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  max-width: 800px;
  margin-left: -10px;
  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  p {
    font-size: 14px;
  }
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

function RangeInformation(props: Props) {
  const { header, infoBlocks, colours } = props;

  const [popUpVisible, setPopUpVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setPopUpVisible(true);
  };

  return (
    <RangeWrapper>
      <Header>{header}</Header>
      <BlocksWrapper>
        {infoBlocks.map((block, index) => {
          return (
            <>
              <DesktopBlocks>
                <Title>{block.blockHeader.toUpperCase()}</Title>
                <BlockContent blocks={block.textBlock._rawContent} />
              </DesktopBlocks>
              <MobileBlocks>
                <DropDown
                  themeColor="#D86310"
                  backgroundColor="white"
                  menuTitle={block.blockHeader}
                  borderTop={index === infoBlocks.length - 1}
                  borderBottom={index === 0}
                >
                  <BlockContent blocks={block.textBlock._rawContent} />
                </DropDown>
              </MobileBlocks>
            </>
          );
        })}
      </BlocksWrapper>
      {colours && (
        <>
          {colours.length > 0 && (
            <P marginTop={50} fontFamily="bold">
              COLOURS AVAILABLE
            </P>
          )}
          <ColoursGrid>
            {colours.map((colour, index) => {
              return (
                <>
                  <div onClick={() => handleSelect(index)}>
                    <TextureCard texture={colour} rangeStyling />
                  </div>
                  {popUpVisible && (
                    <SwatchPopUp
                      colours={colours}
                      swatchName={colour.textureName}
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
          </ColoursGrid>
        </>
      )}
    </RangeWrapper>
  );
}

export default RangeInformation;
