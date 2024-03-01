import React, { ReactNode, useCallback } from "react";
import styled from "styled-components";
import { Collapse } from "antd";

import { Container, P } from "@util/standard";
import { icons } from "@util/constants";
import { usePrevious } from "../../../util/helper";

const AccordionWrapper = styled(Container)`
  flex-direction: column;
  cursor: pointer;
  user-select: none;
`;

const InternalWrapper = styled.div<{ open: boolean }>`
  padding-top: 10px;
  max-height: ${props => (props.open ? "400px" : "0")};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
`;

const Icon = styled.img`
  padding-left: 5px;
`;

interface Props {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Accordion = (props: Props) => {
  const prevIsOpen = usePrevious(props.isOpen);
  const handleClick = useCallback(() => {
    props.setIsOpen(!prevIsOpen);
  }, []);

  return (
    <AccordionWrapper>
      <Container onClick={handleClick} alignItems="center">
        <P noMargin fontFamily="roboto slab" fontSize={18} padding={4}>
          {props.title}
        </P>
        <Icon
          src={props.isOpen ? icons.upArrowOrange : icons.downArrowOrange}
          alt="arrow"
        />
      </Container>
      <InternalWrapper open={props.isOpen}>{props.children}</InternalWrapper>
    </AccordionWrapper>
  );
};

export default Accordion;
