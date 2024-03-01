import React from "react";
import styled from "styled-components";

import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "@util/constants";
import { BlocksContent } from "@sub";

interface Props {
  blocks: any;
}

const Wrapper = styled.div`
  width: 70%;
  margin: 100px auto;
  h2 {
    font-family: "bold";
    font-size: 30px;
  }

  p {
    margin-bottom: 0px;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 80%;
    margin: 100px auto 50px auto;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
  }
`;

const Line = styled.div`
  margin-top: 30px;
  width: 40px;
  height: 2px;
  background-color: #d86310;
`;

function TextSection(props: Props) {
  const { blocks } = props;

  return (
    <Wrapper>
      <BlocksContent blocks={blocks._rawTextContent.content} />
      <Line />
    </Wrapper>
  );
}

export default TextSection;
