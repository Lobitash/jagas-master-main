import React, { useState } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import styled from 'styled-components'
import ProjectCard from './projectCard'
import FixedPopUp from './FixedPopUp'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, icons } from '@util/constants'
import { P } from '@util/standard'


const GridWrapper = styled.div`
width: 95%;
margin: 20px auto 50px auto;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
grid-template-columns: repeat(2, 1fr);

}
`

const SortWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin-top: 20px;
margin-left: 2.5%;
width: 10%;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  
  width: 80%;
}
`

const SortButton = styled(P) <{ middle?: boolean; isBold: boolean; first: boolean; }>`
cursor: pointer;
width: max-content;
padding: 0px 20px;
${({ middle }) => middle && `border-right: 1px solid black; `};
${({ isBold }) => isBold && `font-family: 'bold';`};
${({ first }) => first && `padding-left: 0px; border-right: 1px solid black;`};

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  font-size: 12px;
  padding-right: 20%;
  padding-left: 0px;
}
`

const LoadMoreButton = styled.button`
display: block;
color: #D86310;
font-family: 'bold';
background: none;
border: none;
text-decoration:underline;
margin: 40px auto;
outline:none;
&:hover{
  cursor:pointer;
}
`

const Close = styled.img`
position: absolute;
top: -80px;
right: -12%;
cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    top: -60px;
  }
`

function ProjectsGrid() {

  const { allSanityProjects } = useStaticQuery(graphql`
  {
    allSanityProjects(sort: { fields: _createdAt, order: ASC }) {
      edges {
        node {
          projectName
          description
          category
          _key
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
        }
      }
    }
  }
`)

  const projects = allSanityProjects.edges

  const initailSetting = {
    numberToShow: 8,
    loadMoreNumber: 8,
  }

  const [popUpVisibile, togglePopUpVisibility] = useState(false)
  const [popUpIndex, setPopUpIndex] = useState(99)
  const [currentCategory, updateCurrentCategory] = useState('')
  const [numberToShow, setNumberToShow] = useState(initailSetting.numberToShow)

  const openPopUp = (index) => {
    togglePopUpVisibility(true)
    setPopUpIndex(index)
  }

  const handleClick = (link,index) => {
    if ( link == null ){
      return openPopUp(index);
    }
    return (navigate(link));
  }

  return (
    <>
      <SortWrapper>
        <SortButton isBold={currentCategory === 'paving'} first onClick={() => updateCurrentCategory('paving')}>PAVING</SortButton>
        <SortButton isBold={currentCategory === 'precast'} middle onClick={() => updateCurrentCategory('precast')}>PRECAST</SortButton>
        <SortButton isBold={currentCategory === ''} onClick={() => updateCurrentCategory('')}>RECENT PROJECTS</SortButton>
      </SortWrapper>
      { popUpVisibile && <FixedPopUp noButtons title={projects[popUpIndex].node.projectName} description={projects[popUpIndex].node.description} images={projects[popUpIndex].node.projectImages}>
        <Close src={icons.cross} onClick={() => togglePopUpVisibility(false)} />
      </FixedPopUp>}
      <GridWrapper>
        {projects.slice(0, numberToShow).map((project,index) => {
          if (project.node.category === currentCategory)
            return (
              <div onClick={() => handleClick(project?.node?.slug?.current,index)}>
                <ProjectCard project={project.node} noButtonsPopUp />
              </div>
            )
          else if (currentCategory === '')
            return (
              <div onClick={() => handleClick(project?.node?.slug?.current,index)}>
                <ProjectCard project={project.node} noButtonsPopUp/>
              </div>
            )
        })}

      </GridWrapper>
      {numberToShow < projects.length && <LoadMoreButton
        onClick={() =>
          setNumberToShow(pre => pre + initailSetting.loadMoreNumber)
        }
      >
        Load More
        </LoadMoreButton>}
    </>
  )
}

export default ProjectsGrid
