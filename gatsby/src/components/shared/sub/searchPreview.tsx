import React, {useState} from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { P, H3 } from '@util/standard'
import { MOBILE_BREAKPOINT } from '@util/constants'


interface Props {
  product: object;
  onClick: () => void;
}

const PreviewWrapper = styled.div`
cursor: pointer;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 30px;
width: 60%;
margin:20px auto;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 90%;
}
`

const ImageWrapper = styled.div<{ bgVisible: boolean; hoverEffect: boolean;}>`
width: 100%;
height: 150px;
opacity: 1;
${({ bgVisible }) => bgVisible && `background-color: grey;`};
${({ hoverEffect }) => hoverEffect && `opacity: 0.6;`};
transition: opacity 0.2s;
`

const TextWrapper = styled.div``

const StyledImg = styled(Img)`
width: 100%;
height: 100%;`

const GoTo = styled(P)<{hoverEffect: boolean}>`
  ${({ hoverEffect}) => hoverEffect && `
    transform: translateX(10px);
    span {
      transform: translateX(20px);
    }
  `}
  transition: transform 0.2s;
`

function SearchPreview(props: Props) {

  const { product, onClick } = props
  const [hoverEffect, toggleHoverEffect] = useState(false)

  return (
    <PreviewWrapper onClick={onClick} onMouseEnter={() => toggleHoverEffect(true)} onMouseLeave={() => toggleHoverEffect(false)}>
      <ImageWrapper hoverEffect={hoverEffect}>
        {product.productPagePreview ? <StyledImg fluid={product.productPagePreview.productImage.asset.fluid} /> : product.postFeatureImage ? <StyledImg fluid={product.postFeatureImage.asset.fluid} />: null}
      </ImageWrapper>
      <TextWrapper>
        {product.pageCategory ? <P>{product.pageCategory.toUpperCase()}</P> : <P>BLOG</P>}
        {product.pageName && <H3 fontFamily='bold' fontSize={20}>{product.pageName.toUpperCase()}</H3>}
        <GoTo hoverEffect={hoverEffect} fontFamily='bold'>Go to page <span>{'>'}</span></GoTo>
      </TextWrapper>
    </PreviewWrapper>
  )
}

export default SearchPreview
