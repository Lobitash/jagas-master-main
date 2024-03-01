import React from 'react'
import { graphql, navigate, PageProps } from 'gatsby'
import styled from "styled-components";
import Img, { FluidObject } from "gatsby-image";

import { Query } from '../../graphql-types'
import Layout from '../components/shared/layout'
import SEO from '@components/shared/seo'
import ProjectsPreview from '@components/shared/projects/projectsPreview'
import { BackLink, Title, TitleBlockWrapper } from '@components/shared/shared.styles'
import { Container, P } from '@util/standard'
import { colors, MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants';
import BlocksContent from '@components/shared/sub/blocksContent';

const SubTitleContainer = styled(Container)`
  width: 60%;
  margin: 0 auto;
  flex-wrap: wrap;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
  }
`
const ImageContainer = styled(Container)`
  width: 61%;
  margin: 0 auto;
  flex-wrap: wrap;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
  }
`

const SubTitle = styled(P)`
  font-family: 'bold';
`
const Info = styled(Container)`
  width: 50%;
  flex-direction: column;
`
const Data = styled(P)`
  margin-block-start: 0;
  width: 95%;
  color: ${colors.black};
`
const StyledImg = styled(Img)`
  width: calc( 50% - 15px);
  height: 16vw;
  margin: 7.5px 7.5px;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
    height: 330px;
    margin: 10px 0;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 223px;
  }
`;

export const query = graphql`
  query projectsQuery($slug: String){
    allSanityProjects(filter: { slug: {current: { eq: $slug } } } ) {
    edges {
      node {
        client
        endDate
        location
        value
        team
        startDate
        projectName
        description
        newDescription {
          _rawColumnContent
          _key
        }
        category
        _key
        projectPreview{
          ...sanityProjectsPreview
        }
        projectImages {
          asset {
            fluid {
              srcWebp
              srcSetWebp
              srcSet
              src
            }
          }
          _key
        }
        _createdAt
        slug {
          current
        }
         seoBlock {
          pageTitle
          pageKeyWords
          pageDescription
          ogImage {
            asset {
              fluid {
                srcWebp
                srcSetWebp
                srcSet
                src
              }
            }
          }
        }
      }
    }
  }
}
`

interface Props extends PageProps {
  data: Query;
}

function ProjectInner({ data }: Props) {
  const { allSanityProjects: { edges: [{ node: project }] } } = data
  if ( project.slug == null ){
    return null;
  }
  return (
    <Layout isProductPage>
      <SEO seoData={project?.seoBlock} slug={project.slug.current as string | undefined} />
      <TitleBlockWrapper>
        <BackLink isProject onClick={() => navigate(`/projects`)}><span>{'<'}</span>Back</BackLink>
        <Title>{project.projectName}</Title>
        <SubTitleContainer>
          <Info>
            <SubTitle>Client</SubTitle>
            <Data>{project.client}</Data>
          </Info>
          <Info>
            <SubTitle>Team</SubTitle>
            <Data>{project.team}</Data>
          </Info>
          <Info>
            <SubTitle>Value</SubTitle>
            <Data>{project.value}</Data>
          </Info>
          <Info>
            <SubTitle>Location</SubTitle>
            <Data>{project.location}</Data>
          </Info>
          <Info>
            <SubTitle>Start Date</SubTitle>
            <Data>{project.startDate}</Data>
          </Info>
          <Info>
            <SubTitle>End Date</SubTitle>
            <Data>{project.endDate}</Data>
          </Info>
          <Container margin="20px auto">
            <BlocksContent blocks={project.newDescription?._rawColumnContent}/>
          </Container>
        </SubTitleContainer>
        <ImageContainer>
            {project.projectImages?.map((image) => {
              if (image == null){
                return null;
              }
              return(
                  <StyledImg fluid={image.asset?.fluid}/>
                );
              })}
          </ImageContainer>
      </TitleBlockWrapper>
      <Container margin="50px auto">
        <ProjectsPreview projects={project.projectPreview?.projectsList as Object[] | undefined} />
      </Container>
    </Layout>
  )
}

export default ProjectInner
