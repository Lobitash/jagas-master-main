import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { P } from '../../../util/standard';
import { icons, TABLET_BREAKPOINT, MOBILE_BREAKPOINT, IPAD_PRO_BREAKPOINT, SMALLER_MOBILE, SMALL_LAPTOP_BREAKPOINT, TWENTY_INCH_SCREEN } from '../../../util/constants';
import { navigate } from 'gatsby';
interface Props {
  products: Array<Object>;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 94%;
  margin: 100px auto;
  cursor: pointer;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 90%;
  }
`;

const ContentWrapper = styled.div`
position: absolute;
width: 100%;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
z-index: 1;

`;

const PreviewCard = styled.div`
position: relative;
height: 45vh;
max-height: 700px;
width: 100%;

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    height: 30vh;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 30vh;
  }

  @media only screen and (min-width: ${TWENTY_INCH_SCREEN}px) {
    height: 55vh
  }

`;

const StyledImg = styled(Img)`
width: 100%;
height: 100%;
filter: brightness(0.6);
`;

const StyledIcon = styled.img<{ hoverEffect: boolean; }>`
display: block;
margin: 0 auto;
max-width: 32px;
${({ hoverEffect }) => hoverEffect && `transform: translateY(-15px);`};
transition: transform 0.2s;
`;

const ProductTitle = styled(P)`
color: white;
bottom: 40%;
width: 100%;
text-align: center;
font-weight: 700;
z-index: 1;
`;

const Background = styled.div<{ hoverEffect: boolean; }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #D86310;
  opacity: 0;
  ${({ hoverEffect }) => hoverEffect && `opacity: 0.7;`};
  transition: opacity 0.2s;
`;

function IconPreview(props: Props) {

  const { products } = props;
  const [hoverEffectIndex, setHoverEffectIndex] = useState(999);

  return (
    <Wrapper>
      {products.map((product, index) => {
        return (
          <PreviewCard key={product._key} onClick={() => navigate(`/${product.pageCategory}/${product.slug.current}`)} onMouseEnter={() => setHoverEffectIndex(index)} onMouseLeave={() => setHoverEffectIndex(999)}>
            <StyledImg fluid={product.productPagePreview.productImage.asset.fluid} />
            <ContentWrapper>
              {product.productPagePreview.productIcon && <StyledIcon hoverEffect={index === hoverEffectIndex} src={product.productPagePreview.productIcon.asset.fluid.src} />}
              <ProductTitle>{product.productPagePreview.productTitle}</ProductTitle>
            </ContentWrapper>
            <Background hoverEffect={index === hoverEffectIndex}></Background>
          </PreviewCard>
        );
      })}
    </Wrapper>
  );
}

export default IconPreview;
