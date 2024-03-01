import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'

import { H1, A, P } from '@util/standard'
import { IPAD_BREAKPOINT, IPAD_PRO_BREAKPOINT, MOBILE_BREAKPOINT, SMALLER_MOBILE, TABLET_BREAKPOINT } from '@util/constants'

interface Props {
  header: string;
  subHeader: string;
  links: Array<object>;
  image: FluidObject
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 89vh;
  margin-top: 100px;
`

const BackgroundImg = styled(Img)`
height: 100%;
width: 100%;
  filter: brightness(0.5);


@media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
  img {
    width: 200% !important;
    left: -800px !important;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  img {
    width: 200% !important;
    left: -75% !important;
  }
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    img {
      width: 250% !important;
      left: -125% !important;
  }
  }
  @media only screen and (max-width: ${SMALLER_MOBILE}px) {
    img {
      width: 250% !important;
      left: -140% !important;
  }
  }
}

`

const TextWrapper = styled.div`
position: absolute;
width: 80%;
top: 40%;
left: 20%;
transform: translateY(-40%);
`

const Header = styled(H1)`
color: white;
font-family: 'bold';
z-index:1;
`

const SubHeader = styled(P)`
color: white;
width: 26%;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  width: 47%;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 68%;
  }
`

const Link = styled(A)`
  display: block;
  margin-bottom: 16px;
  width: max-content;
  font-family: 'bold';
  &:hover {
    color: #D86310;
  }
`


function NotFoundContent(props: Props) {

  const { header, subHeader, links, image } = props
  return (
    <>
      <ImageWrapper>
        <BackgroundImg fluid={image.asset.fluid} />
        <TextWrapper>
          <Header>{header.toUpperCase()}</Header>
          <SubHeader>{subHeader}</SubHeader>
          {links.map(link => (
            <Link onClick={() => navigate(link.url)}>{link.linktext}</Link>
          ))}
        </TextWrapper>
      </ImageWrapper>

    </>
  )
}

export default NotFoundContent
