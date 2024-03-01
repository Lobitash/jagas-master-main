import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { H1, P } from '../../../util/standard'
import { MOBILE_BREAKPOINT } from '../../../util/constants'

interface Props {
  heroText: string;
}

const HeroWrapper = styled.div`
position: relative;
height: 35vh;
background-color: #3D393A;
`


const TextWrapper = styled.div`
position: absolute;
top: 40%;
left: 0%;
width: 243px;
border-bottom: 1px solid white;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 70px;
}
`

const HeroText = styled(H1)`
display: block;
font-size: 20px;
font-weight: 700;
color: white;
transform: translate(250px, 30px);
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  transform: translate(80px, 30px);
}
`

const PlainHero = (props: Props) => {

  const { heroText } = props

  return (
    <HeroWrapper>
      <TextWrapper>
        <HeroText>{heroText.toUpperCase()}</HeroText>
      </TextWrapper>
    </HeroWrapper>
  )
}

export default PlainHero