import styled from "styled-components";
import { Link } from "gatsby";

import { colors, MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "@util/constants";
import { A, Container, H1 } from "@util/standard";

export const FullHeightContainer = styled(Container)<{
  mobileHeight?: string | undefined;
  height?: string | undefined;
  width?: string | undefined;
}>`
  flex-direction: column;
  position: relative;
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "100vh"};
  overflow: hidden;

  h1,
  h2,
  h3,
  h4,
  p {
    color: ${colors.white};
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: ${(props) => props.mobileHeight ?? "90vh"};
  }
`;

export const SquareButton = styled(Link)<{
  isProductPage?: boolean;
  searchOpened?: boolean;
  margin?: string;
}>`
  border: 1px solid white;
  text-decoration: none;
  width: max-content;
  margin: ${(props) => props.margin ?? "auto"};
  padding: 10px 25px;
  color: white;
  opacity: 1;
  ${({ isProductPage }) =>
    isProductPage && `border: 1px solid black; color: black;`};
  ${({ searchOpened }) =>
    searchOpened && `z-index: 5; border: 1px solid black; color: black;`};

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }

  &:hover {
    color: ${colors.orange};
    background-color: ${colors.white};
    border-color: ${colors.orange};
    ${({ isProductPage }) => isProductPage && `color: black;`};
  }
  transition: opacity 0.2s;
`;

export const BackLink = styled(A)<{isProject?: boolean}>`
  color: #D86310;
  position: absolute;
  top: 0px;
  left: 0;
  display:block;
  transition: transform 0.2s;
  opacity: 1;
  font-family: 'bold';
  span {
    display: inline-block;
    margin-right: 10px;
    transition: transform 0.2s;
  } 

  &:hover {
    color: #D86310;
    opacity: 0.7;
    transform: translateX(20px);
    span {
      transform: translateX(-10px);
      
    }
  }
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
      top: ${props => props.isProject ? "-3%" : "-80%"};
      left: 0%;
    }

`

export const TitleBlockWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 200px auto 0px auto;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 80%;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
`
export const Title = styled(H1)`
  font-size: 30px;
  font-family: 'bold';
  width: 60%;
  margin: 0 auto;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
  }
`