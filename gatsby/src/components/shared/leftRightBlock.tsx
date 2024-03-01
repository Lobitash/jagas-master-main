import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img, { FluidObject } from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";
import { graphql, navigate, useStaticQuery } from "gatsby";

import {
  colors,
  IPAD_PRO_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "@util/constants";
import { P } from "@util/standard";

interface Props {
  content: object;
  icon?: FluidObject;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin: 100px auto;
  max-width: 1920px;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TextWrapper = styled.div<{ right?: boolean }>`
  margin: auto 0px auto 30%;
  width: 55%;
  ${({ right }) => right && `margin: auto 0px auto 20%;`};
  h1 {
    font-family: "bold";
    font-size: 30px;
    line-height: 35px;
    width: 90%;
  }
  h2 {
    font-family: "bold";
    font-size: 20px;
    line-height: 35px;
    text-transform: uppercase;
  }

  h3 {
    font-family: "bold";
    font-size: 20px;
    line-height: 35px;
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
    padding-left: 15px;
  }
  ul li:before {
    content: "-";
    position: absolute;
    margin-left: -15px;
  }

  p {
    width: 85%;
    a {
      color: ${colors.orange};
      opacity: 1;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    width: 50%;
    margin: auto 0px auto 30%;
    ${({ right }) => right && `margin: auto 0px auto 20%;`};
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 80%;
    margin: 0px auto 60px auto;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
    margin: 0px auto 60px auto;
  }
`;

const Line = styled.div`
  margin-top: 30px;
  width: 40px;
  height: 2px;
  background-color: #d86310;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 480px;
  width: 100%;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 400px;
    width: 80%;
    margin: 0 auto;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
    height: 300px;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

const TextLink = styled(P)`
  color: #d86310;
  font-family: "bold";
  text-decoration: underline;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.5;
  }
  transition: opacity 0.2s;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 6%;
  transform: translateX(-50%);
  height: 70px;
  width: 70px;
  background-color: #3d393a;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 59px;
    width: 59px;
    top: -7%;
    left: 90%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 59px;
    width: 59px;
    left: 80%;
  }
`;

const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  padding: 25%;
`;

function LeftRightBlock(props: Props) {
  const { content, icon } = props;
  const { blockImage, imageAlignRight, _rawLeftRightText, blockLink } = content;

  const [mobileWidth, toggleMobileWidth] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.innerWidth < TABLET_BREAKPOINT ? toggleMobileWidth(true) : null;
    } else {
      null;
    }
  });

  return (
    <Wrapper>
      {(imageAlignRight || mobileWidth) && (
        <TextWrapper>
          <BlockContent blocks={_rawLeftRightText.content} />
          {!blockLink && <Line></Line>}
          {blockLink && (
            <TextLink onClick={() => navigate(blockLink.url)}>
              {blockLink.linktext}
            </TextLink>
          )}
        </TextWrapper>
      )}
      <ImageWrapper>
        <StyledImg fluid={blockImage.asset.fluid} />
        {icon && (
          <IconWrapper>
            <StyledIcon src={icon.asset.fluid.src} />
          </IconWrapper>
        )}
      </ImageWrapper>
      {!imageAlignRight && !mobileWidth && (
        <TextWrapper right>
          <BlockContent blocks={_rawLeftRightText.content} />
          {!blockLink && <Line></Line>}
          {blockLink && (
            <TextLink onClick={() => navigate(blockLink.url)}>
              {blockLink.linktext}
            </TextLink>
          )}
        </TextWrapper>
      )}
    </Wrapper>
  );
}

export default LeftRightBlock;
