import React, { useState } from "react";
import styled from "styled-components";

import { A, H2 } from "@util/standard";
import { icons, MOBILE_BREAKPOINT } from "@util/constants";
import ProjectCard from "./projectCard";
import FixedPopUp from "./FixedPopUp";
import { navigate } from "gatsby";

interface Props {
  projects?: Array<Object>;
}

const Wrapper = styled.div`
  position: relative;

  width: 94%;
  margin: 0 auto;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    row-gap: 30px;
  }
`;

const Title = styled(H2)`
  font-family: "bold";
  margin: 0 auto 20px auto;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 5px;
  }
`;

const ButtonLink = styled(A)`
  position: absolute;
  top: 0px;
  right: 0px;
  font-family: "bold";
  width: max-content;
  padding: 10px 25px;
  margin-left: 80%;
  min-width: 168px;
  color: white;
  background-color: #d86310;
  &:hover {
    background-color: #f7f7f6;
    color: #d86310;
    border: 1px solid #d86310;
  }
  transition: background-color 0.2s;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 10px 7%;
  }
`;

const Close = styled.img`
  position: absolute;
  top: -80px;
  right: -12%;
  cursor: pointer;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    top: -60px;
  }
`;

function ProjectsPreview(props: Props) {
  const { projects } = props;

  const [popUpVisibile, togglePopUpVisibility] = useState(false);
  const [popUpIndex, setPopUpIndex] = useState(99);

  const openPopUp = (index) => {
    togglePopUpVisibility(true);
    setPopUpIndex(index);
  };

  const handleClick = (link,index) => {
    if ( link == null ){
      return openPopUp(index);
    }
    return (navigate(`/projects/${link}`));
  }

  return (
    <Wrapper>
      <Title>PROJECTS</Title>
      <ButtonLink href="/projects">View More Work</ButtonLink>
      {popUpVisibile && (
        <FixedPopUp
          title={projects[popUpIndex].projectName}
          description={projects[popUpIndex].description}
          images={projects[popUpIndex].projectImages}
        >
          <Close
            src={icons.cross}
            onClick={() => togglePopUpVisibility(false)}
          />
        </FixedPopUp>
      )}
      <ProjectsWrapper>
        {projects && projects.map((project, index) => {
          return (
            <div onClick={() => handleClick(project?.slug?.current,index)}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </ProjectsWrapper>
    </Wrapper>
  );
}

export default ProjectsPreview;
