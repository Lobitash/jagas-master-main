import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { P } from "@util/standard";
import { MOBILE_BREAKPOINT } from "@util/constants";

interface Props {
  texture: object;
  rangeStyling?: boolean;
}

const Wrapper = styled.div`
  cursor: pointer;
`;

const ImageWrapper = styled.div<{ rangeStyling: boolean }>`
  display: block;
  height: 90px;
  width: 90px;
  margin: auto;

  ${({ rangeStyling }) =>
    rangeStyling &&
    `
width: 170px;
height: 170px;
padding: 10px;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 150px;
  height: 150px;
}
`};
`;

const TextureCardName = styled(P)``;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

function TextureCard(props: Props) {
  const { texture, rangeStyling } = props;

  return (
    <Wrapper>
      <ImageWrapper rangeStyling={rangeStyling}>
        <StyledImg fluid={texture.textureThumbnail.asset.fluid} />
      </ImageWrapper>
      <TextureCardName marginTop={10} fontSize={10} textAlign="center">
        {texture.textureName.toUpperCase()}
      </TextureCardName>
    </Wrapper>
  );
}

export default TextureCard;
