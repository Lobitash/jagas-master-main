import React, { useState } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { P } from '../../../util/standard'
import { icons, TABLET_BREAKPOINT, MOBILE_BREAKPOINT, IPAD_PRO_BREAKPOINT, LAPTOP_BREAKPOINT } from '../../../util/constants'
import { navigate } from 'gatsby'
import ProductPreview from './productPreview'


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
`

const PreviewCard = styled.div`
position: relative;
height: 55vh;
max-height: 700px;
width: 100%;

  @media only screen and (max-width: ${LAPTOP_BREAKPOINT}px) {
    height: 50vh;
  }

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    height: 30vh;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 30vh;
  }
`

const StyledImg = styled(Img)`
width: 100%;
height: 100%;
filter: brightness(0.6);
`

const ProductTitle = styled(P)`
color: white;
font-family: 'bold';
position: absolute;
bottom: 35px;
left: 30px;
font-weight: 700;
z-index: 1;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    left: 15px;
    bottom: 20px;
  }
`

const Arrow = styled.img<{ hoverEffect: boolean; }>`
  position: absolute;
  bottom: 50px;
  right: 40px;
  width: 50px;
  z-index: 1;
${({ hoverEffect }) => hoverEffect && `transform: translateX(10px);`};
transition: transform 0.2s;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    left: 30px;
    bottom: 25px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    left: 15px;
    bottom: 10px;
  }
  
`

const Background = styled.div<{ hoverEffect: boolean; }> `
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #D86310;
  opacity: 0;
  ${({ hoverEffect }) => hoverEffect && `opacity: 0.7;`};
  transition: opacity 0.2s;
`

function StandardPreview(props: Props) {
  const { products } = props
  const [hoverEffectIndex, setHoverEffectIndex] = useState(999)

  return (
    <Wrapper>
      {products.map((product, index) => {
        const { productPagePreview } = product

        return (
          <PreviewCard key={product._key} onClick={() => navigate(`/${product.pageCategory}/${product.slug.current}`)} onMouseEnter={() => setHoverEffectIndex(index)} onMouseLeave={() => setHoverEffectIndex(999)}>
            {productPagePreview.productImage && <StyledImg fluid={productPagePreview.productImage.asset.fluid} />}
            <ProductTitle>{productPagePreview.productTitle}</ProductTitle>
            <Arrow src={icons.submitArrowWide} hoverEffect={index === hoverEffectIndex} />
            <Background hoverEffect={index === hoverEffectIndex}></Background>
          </PreviewCard>
        )
      })}
    </Wrapper>
  )
}

export default StandardPreview
