import BlockContent from '@sanity/block-content-to-react'
import React from 'react'
import styled from 'styled-components'

import { P } from '@util/standard'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'

interface Props {
  details: object;
}

const DetailsWrapper = styled.div`
  width: 65%;
  max-width: 1200px;
  margin: 100px auto;
  display: grid; 
  grid-template-columns: 53% 47%;
  grid-gap: 120px;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 90%;
    grid-gap: 10px;
    grid-template-columns: repeat(2,1fr);
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1,1fr);
  }
`

const Wrapper = styled.div`  
  width: 100%;
  h2 {
    font-family: 'bold';
    font-size: 30px;
  }

  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 80%;
    margin: 0px auto 0px auto;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    margin: 0px auto 50px auto;

  }
`

const Line = styled.div`
  margin-top: 30px;
  width: 40px;
  height: 2px;
  background-color:#D86310;
`


const ContactCards = styled.div`
`

const DetailName = styled(P)`
font-family: 'bold';
display: inline-block;
margin-top: 0px;
margin-bottom: 25px;


`

const DetailValue = styled(P)`
display: inline-block;
margin-left: 5px;
margin-bottom: 25px;
margin-top: 0px;

`

function ContactDetails(props: Props) {

  const { details } = props
  const { getInTouchTextBlock, contactCards } = details

  return (
    <DetailsWrapper>
      <Wrapper>
        <BlockContent blocks={getInTouchTextBlock._rawContent} />
        <Line></Line>
      </Wrapper>
      <ContactCards>
        {contactCards.map(card => {
          return (
            <div>
              <DetailName>{card.contactDetailName}:</DetailName>
              <DetailValue>{card.contactDetailValue}</DetailValue>
            </div>
          )
        })}
      </ContactCards>
    </DetailsWrapper>
  )
}

export default ContactDetails
