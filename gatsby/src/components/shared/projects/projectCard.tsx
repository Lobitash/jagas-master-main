import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { P } from "@util/standard";
import {
  icons,
  IPAD_PRO_BREAKPOINT,
  LAPTOP_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "@util/constants";

interface Props {
  project: object;
}

const Card = styled.div`
  position: relative;
  cursor: pointer;
`;

const ImageWrapper = styled.div<{ hoverEffect: boolean }>`
  height: 55vh;
  max-height: 700px;
  width: 100%;

  @media only screen and (max-width: ${LAPTOP_BREAKPOINT}px) {
    height: 45vh;
  }

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    height: 30vh;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 23vh;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 25vh;
  }
`;

const Arrow = styled.img`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;
const Title = styled(P)<{ hoverEffect: boolean }>`
  margin-bottom: 0px;
  width: 80%;
  ${({ hoverEffect }) => hoverEffect && `color: #D86310; font-family: 'bold';`};
`;

function ProjectCard(props: Props) {
  const { project } = props;
  const [hoverEffectOn, toggleHoverEffect] = useState(false);

  return (
    <Card
      onMouseEnter={() => toggleHoverEffect(true)}
      onMouseLeave={() => toggleHoverEffect(false)}
    >
      <ImageWrapper hoverEffect={hoverEffectOn}>
        <StyledImg fluid={project.projectImages[0].asset.fluid} />
      </ImageWrapper>
      <Title hoverEffect={hoverEffectOn}>
        {project.projectName.toUpperCase()}
      </Title>
      {hoverEffectOn && <Arrow src={icons.submitArrowOrange} />}
    </Card>
  );
}

export default ProjectCard;
