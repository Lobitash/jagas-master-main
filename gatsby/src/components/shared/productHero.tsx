import LeftRightBlock from '@components/shared/leftRightBlock'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { A } from '@util/standard'
import { navigate } from 'gatsby'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'

interface Props {
  content: object;
  category: string;
}

const Wrapper = styled.div`
position: relative;
margin: 200px auto 100px auto;
h1 {
  font-family: 'bold';
  font-size: 30px;
}
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {

margin-top:170px;
  }
`

const BackLink = styled(A)`
color: #D86310;
position: absolute;
top: 0px;
left: 10%;
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

    top: -10%;
    left: 10%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {

    top: -10%;
    left: 5%;
  }
`

const IconWrapper = styled.div`
position: absolute;
left: 50%;
bottom: 6%;
transform:translateX(-50%);
height: 70px;
width: 70px;
background-color: #3D393A;

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 59px;
    width: 59px;
    top: 35%;
    left: 80%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
height: 59px;
    width: 59px;
    top: 45%;
  }
`

const StyledImg = styled.img`
width: 100%;
height: 100%;
padding: 25%;
`

function ProductHero(props: Props) {

  const { content, category } = props
  const repackagedContent = {
    blockImage: content.heroImage,
    _rawLeftRightText: { content: content.heroText._rawContent },
    imageAlignRight: true
  }
  return (
    <Wrapper>
      <BackLink onClick={() => navigate(`/${category}`)}><span>{'<'}</span>Back</BackLink>
      <LeftRightBlock content={repackagedContent} icon={content.heroIcon}/>
    </Wrapper >
  )
}

export default ProductHero
