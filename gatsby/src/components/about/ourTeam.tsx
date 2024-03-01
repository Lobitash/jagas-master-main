import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { P } from '@util/standard'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'


interface Props {
  team: object;
}

const TeamWrapper = styled.div`
 width: 85%;
 margin: 0 auto;

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {

  width: 80%;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
width: 90%;
}

`

const Members = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);

@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  grid-template-columns: repeat(2,1fr);
  row-gap: 30px;
}

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  grid-template-columns: repeat(1, 1fr);
}

`

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  margin: 0 auto;
  width: 200px;
  height: 200px;
}
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
width: 230px;
height: 230px;
}
`

const ProfileImage = styled(Img)`
width: 100%;
height: 100%;`

const MemberDetails = styled.div`
border-left: 2px solid #D86310;
padding-left: 15px;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  width: max-content;
  margin: 0 auto;
}
`

function OurTeam(props: Props) {

  const { team } = props
  return (
    <TeamWrapper>
      <P fontSize={20} fontFamily='bold'>{team.header.toUpperCase()}</P>
      <Members>
        {team.teamMembers.map(member => {
          return (
            <div>
              <ImageWrapper>
                <ProfileImage fluid={member.memberImage.asset.fluid} />
              </ImageWrapper>
              <MemberDetails>
                <P fontFamily='bold' marginBottom={0}>{member.memberName.toUpperCase()}</P>
                <P marginTop={0}>{member.memberRole}</P>
              </MemberDetails>
            </div>
          )
        })}
      </Members>
    </TeamWrapper>
  )
}

export default OurTeam
