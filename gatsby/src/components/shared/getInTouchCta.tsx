import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { MOBILE_BREAKPOINT } from '../../util/constants'

import { P, H3, A } from '../../util/standard'

const DonateBlockWrapper = styled.div`
width: 80%;
margin: 100px auto;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px){
  margin:80px auto;
  width: 60%;
}
`

const SubText = styled(P)`
text-align: center;
`

const MainText = styled(H3)`
text-align: center;
font-size: 20px;
font-family: 'bold';
`

const ButtonLink = styled(A)`
display: block;
font-family: 'bold';
width: max-content;
padding: 10px 25px;
margin: 20px auto;
color: white;
background-color: #D86310;
&:hover {
  background-color: #F7F7F6;
  color: #D86310;
  border: 1px solid #D86310;
  padding: 9px 24px;
}
transition: background-color 0.2s;
`

function GetInTouchCta() {

  const { sanityGetInTouchCta } = useStaticQuery(graphql`
  {
    sanityGetInTouchCta {
      buttonText
      buttonLink
      mainText
      subText
    }
  }
  `)
  const { mainText, subText, buttonText, buttonLink } = sanityGetInTouchCta
  return (
    <DonateBlockWrapper>
      <SubText>{subText}</SubText>
      <MainText>{mainText}</MainText>
      <ButtonLink href={buttonLink}>{buttonText}</ButtonLink>
    </DonateBlockWrapper>
  )
}

export default GetInTouchCta
