import React, { useState } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { P } from '../../../util/standard'
import { icons, MOBILE_BREAKPOINT, TABLET_BREAKPOINT, IPAD_PRO_BREAKPOINT, TWENTY_INCH_SCREEN, SMALL_LAPTOP_BREAKPOINT, IMAC_BREAKPOINT } from '../../../util/constants'
import FixedPopUp from '../projects/FixedPopUp'
interface Props {
  products: Array<Object>;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  width: 94%;
  margin: 100px auto;
  cursor: pointer;
  @media only screen and (max-width: ${SMALL_LAPTOP_BREAKPOINT}px) {
    grid-template-columns: repeat(3, 1fr);

  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 90%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }
`

const PreviewCard = styled.div`
position: relative;
height: 40vh;
max-height: 700px;
width: 100%;

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    height: 30vh;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 30vh;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 250px;
  }
`

const StyledImg = styled(Img) < { hoverEffect: boolean }>`
width: 100%;
height: 100%;
filter: brightness(0.6);
${({ hoverEffect }) => hoverEffect && `filter: brightness(0.4);`};
transition: filter 0.2s;
`

const StyledIcon = styled.img`
position: absolute;
left: 50%;
top: 48%;
transform: translate(-48%,-50%);
z-index: 1;


`

const ProductTitle = styled(P) <{ hoverEffect: boolean }>`
color: white;
position: absolute;
left: 50%;
top: 45%;
transform: translate(-50%,-45%);
width: 40%;
text-align: center;
font-weight: 700;
z-index: 1;
opacity: 1;
  ${({ hoverEffect }) => hoverEffect && `opacity: 0;`};
  transition: opacity 0.2s;
`

const Description = styled(P) <{ hoverEffect: boolean }>`
  color: white;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-40%);
  width: 80%;
  line-height: 20px;
  text-align: center;
  opacity: 0;
  ${({ hoverEffect }) => hoverEffect && `opacity: 1;`};
  transition: opacity 0.2s;

  @media only screen and (min-width: ${IMAC_BREAKPOINT}px) {
    font-size: 14px;
    top: 40%;
  }


  @media only screen and (max-width: ${SMALL_LAPTOP_BREAKPOINT}px) {
    line-height: 20px;
    top: 35%;
    transform: translate(-50%, -35%);
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    line-height: 20px;
    top: 20%;
    transform: translate(-50%,-20%);
  }
`

const Arrow = styled.img<{ hoverEffect: boolean }>`
position: absolute;
left: 50%;
top: 80%;
transform: translate(-50%, -80%);
width: 50px;
z-index: 1;
opacity: 0;
  ${({ hoverEffect }) => hoverEffect && `opacity: 1;`};
  transition: opacity 0.2s;

  @media only screen and (max-width: ${TWENTY_INCH_SCREEN}px) {
    left: 50%;
    top: 90%;
    transform: translate(-50%, -90%);
  }
`

const Background = styled.div`
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
background-color: #D86310;
opacity: 0;

transition: opacity 0.2s;
`

const Close = styled.img`
position: absolute;
top: -80px;
right: -12%;
cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    top: -60px;
  }
`


function CustomPreview(props: Props) {

  const { products } = props
  const [hoverEffectIndex, toggleHoverEffect] = useState(999)
  const [popUpVisible, togglePopUpVisibility] = useState(false)
  const [popUpIndex, setPopUpIndex] = useState(99)

  const openPopUp = (index) => {
    togglePopUpVisibility(true)
    setPopUpIndex(index)

  }

  return (
    <Wrapper >
      {products.customProducts.map((product, index) => {
        return (
          <>
            <PreviewCard key={product._key} onMouseEnter={() => toggleHoverEffect(index)} onMouseLeave={() => toggleHoverEffect(999)} onClick={() => openPopUp(index)}>
              <StyledImg fluid={product.productImage[0].asset.fluid} hoverEffect={hoverEffectIndex === index} />
              {product.productIcon && <StyledIcon src={product.productIcon.asset.fluid.src} />}
              <ProductTitle hoverEffect={hoverEffectIndex === index}>{product.productTitle}</ProductTitle>
              <Description hoverEffect={hoverEffectIndex === index}>{product.productDescription}</Description>
              <Arrow src={icons.submitArrowWide} hoverEffect={hoverEffectIndex === index} />
              <Background></Background>
            </PreviewCard>

            {popUpVisible && <FixedPopUp title={products.customProducts[popUpIndex].productTitle} description={products.customProducts[popUpIndex].productDescription} images={products.customProducts[popUpIndex].productImage}>
              <Close src={icons.cross} onClick={() => togglePopUpVisibility(false)} />
            </FixedPopUp>}
          </>
        )
      })}
    </Wrapper>
  )
}

export default CustomPreview
