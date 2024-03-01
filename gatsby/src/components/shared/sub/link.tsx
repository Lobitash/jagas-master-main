import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { FixedObject } from "gatsby-image";

import { A, P } from "@util/standard";
import { Image } from "@sub";
import { Maybe, Scalars } from "@graphql-types";
import styled from "styled-components";
import { Color, colors } from "@util/constants";

interface Props {
  linktext?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  internallink?: Maybe<Scalars["Boolean"]>;
  newwindow?: Maybe<Scalars["Boolean"]>;
  asset?: Maybe<FixedObject>;
  className?: string;
  color?: Color;
  isUnderlined?: boolean;
  isBold?: boolean;
  hoverColor?: Color;
}

const StyledGatsbyLink = styled(GatsbyLink)`
  font-family: "roboto";
  user-select: none;
`;

const ImageWrapper = styled.div`
  &:hover {
    opacity: 0.6;
  }
`;

const StyledP = styled(P)<{
  hoverColor?: Color;
  color?: Color;
}>`
  ${({ hoverColor }) =>
    hoverColor &&
    `&:hover {
      color: ${colors[hoverColor]};
    }`}
  ${({ color }) => color && `color: ${colors[color]};`};

  margin: 0;
  &:hover {
    font-weight: 600;
  }
`;

const Link = ({
  linktext,
  url,
  internallink,
  newwindow,
  asset,
  className = "",
  color,
  hoverColor,
  isUnderlined,
  isBold,
}: Props) => {
  if (internallink) {
    const to = url === "/" ? "/" : `/${url}`;
    return (
      <StyledGatsbyLink activeClassName="active" className={className} to={to}>
        {asset ? (
          <ImageWrapper>
            <Image fixed={asset} />
          </ImageWrapper>
        ) : (
          <StyledP
            hoverColor={hoverColor}
            color={color}
            underlined={isUnderlined}
            fontWeight={isBold ? "bold" : "normal"}
          >
            {linktext}
          </StyledP>
        )}
      </StyledGatsbyLink>
    );
  }

  return (
    <A
      href={url ?? "/"}
      className={className}
      target={newwindow ? "_blank" : ""}
      rel={newwindow ? "noreferrer" : ""}
      color={color}
    >
      {asset ? (
        <ImageWrapper>
          <Image fixed={asset} />
        </ImageWrapper>
      ) : (
        <StyledP color={color}>{linktext}</StyledP>
      )}
    </A>
  );
};

export default Link;
