import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'

import { A } from '@util/standard'
import { navigate } from 'gatsby'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'


interface Props {
  content: object;
}

const CtaWrapper = styled.div`
  width: 65%;
  max-width: 1600px;
  margin: 100px auto;
  border-left: 2px solid #D86310;
  padding: 0 3%;

  h2 {
    font-family: 'bold';
    font-size: 30px;
    margin: 0px;
  }
  h3 {
    font-family: 'bold';
    font-size: 30px;
    margin: 0px;
  }

  p {
    margin: 0px;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 80%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
`

const CtaLink = styled(A)`
  color: #D86310;
  font-family: 'bold';
  display: block;
  opacity: 1;
  transition: opacity 0.2s;
  margin-top: 30px;

  span {
    display: inline-block;
    padding-left: 15px;
    transition: transform 0.2s;
  }

  &:hover {
      color: #D86310;
      opacity: 0.7;
    span {
      transform: translateX(10px);

    }
  }
`

function Cta(props: Props) {
  const { content } = props
  return (
    <CtaWrapper>
      <BlockContent blocks={content.ctaText._rawContent} />
      <CtaLink onClick={() => navigate(content.ctaLink.url, { replace: true })}>{content.ctaLink.linktext}<span>{'>'}</span></CtaLink>
    </CtaWrapper>
  )
}

export default Cta
