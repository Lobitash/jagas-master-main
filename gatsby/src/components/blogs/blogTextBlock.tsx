import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'


const TextWrapper = styled.div`
width: 48%;
margin: 0 auto;

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  width: 80%;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 90%;
}
`

interface Props {
  textContent: Array<object>;
}

function BlogTextBlock(props: Props) {

  const { textContent } = props

  return (
    <TextWrapper>
      <BlockContent blocks={textContent._rawContent} />
    </TextWrapper>
  )
}

export default BlogTextBlock
