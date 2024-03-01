import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Carousel } from "antd"

import { Container, P, H2 } from '@util/standard'
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT, icons } from '@util/constants'

interface Props {
  header: string;
  subHeader: string;
}


const Wrapper = styled(Container)`
  width: 100%;
  background-color: #F7F7F6;
  margin: 100px 0px;
`

const TestimonialsWrapper = styled(Container)`
  width: 80%;
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 0 auto;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    display: block;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 90%;
  }
`

const StyledH2 = styled(H2)`
  font-size: 20px;
  font-family: 'bold';
  margin-left: 50%;
  margin-bottom: 30px;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin-left: 0px;
  }
`

const TextWrapper = styled.div`
 margin: 90px auto 60px auto;
 width: 100%;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
    margin: 0px;
  }
`

const SubHeader = styled(P)`
margin-left: 50%;
margin-bottom: 10px;
width: 100%;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`

const CarouselWrapper = styled.div`
 margin: 50px auto;
 width: 100%;
 position: relative;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
    margin: 20px auto;
  }
`

const CarouselNav = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
margin-left: 50%;
width: 20%;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin-left: 0px;
  }
`

const LeftArrow = styled.img`
cursor: pointer;

`

const RightArrow = styled.img`
cursor: pointer;
`

const Statement = styled(P)`
padding-top: 40px;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    padding-top: 0px;
    width: 100%;
  }
`

const QuoteWrapper = styled.div`
display: block !important;
position:relative;
width: 70% !important;
height: 200px;
margin: 0 auto;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
   width: 100% !important;

  }
`
const StyledCarousel = styled(Carousel)`
`

const Testimonials = (props: Props) => {

  const { header, subHeader } = props

  const carouselSlider = useRef(null)

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
  }


  const { allSanityStatement } = useStaticQuery(graphql`
  {
    allSanityStatement {
      edges {
        node {
          statementRole
          statementText
          statementName
        }
      }
    }
  }
  `)

  const statements = allSanityStatement.edges

  return (
    <Wrapper>
      <TestimonialsWrapper>
        <TextWrapper>
          <SubHeader>{subHeader.toUpperCase()}</SubHeader>
          <StyledH2>{header.toUpperCase()}</StyledH2>
          <CarouselNav>
            <LeftArrow src={icons.leftArrow} onClick={() => { carouselSlider.current.prev() }} />
            <RightArrow src={icons.rightArrow} onClick={() => { carouselSlider.current.next() }} />
          </CarouselNav>
        </TextWrapper>
        <CarouselWrapper>
          <StyledCarousel {...carouselSettings} ref={carouselSlider} >
            {statements.map((testimonial, index) => {
              const { statementText, statementRole, statementName } = testimonial.node
              return (
                <QuoteWrapper key={index} >
                  <Statement>{statementText}</Statement>
                  <P fontFamily="bold">{statementName.toUpperCase()}, {statementRole.toUpperCase()}</P>
                </QuoteWrapper>
              )
            })}
          </StyledCarousel>
        </CarouselWrapper>
      </TestimonialsWrapper>
    </Wrapper >
  )
}

export default Testimonials
