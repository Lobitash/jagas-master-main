import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { TABLET_BREAKPOINT } from '../../util/constants'

import { P } from '../../util/standard'
import { TitleBlockWrapper, BackLink, Title } from '@components/shared/shared.styles'

interface Props {
  blogTitle: string;
  publishDate: string;
}

const Date = styled(P)`
  width: 60%;
  margin: 0 auto;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
  }
`

function BlogTitleBlock(props: Props) {

  const { blogTitle, publishDate } = props

  const dateConvert = (date: string) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    let processDate = date.split('-')
    const month = Number(processDate[1])
    let prefix = ''
    processDate[2][1] === '1' ? prefix = 'ST' : processDate[2][1] === '2' ? prefix = 'ND' : processDate[2][1] === '3' ? prefix = 'RD' : prefix = 'TH'
    processDate[2][0] === '0' ? processDate[2] = processDate[2][1] : null
    const convertedMonth = processDate[2] + prefix + " " + months[month - 1] + " " + processDate[0]
    return convertedMonth
  }

  return (
    <TitleBlockWrapper>
      <BackLink onClick={() => navigate(`/blogs`)}><span>{'<'}</span>Back</BackLink>
      <Date>{dateConvert(publishDate)}</Date>
      <Title>{blogTitle}</Title>
    </TitleBlockWrapper>
  )
}

export default BlogTitleBlock
