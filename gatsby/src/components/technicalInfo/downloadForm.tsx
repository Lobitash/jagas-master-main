import React, { ReactNode } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import {
  MOBILE_BREAKPOINT,
  SMALLER_MOBILE,
  TABLET_BREAKPOINT,
  IPAD_PRO_BREAKPOINT,
  LAPTOP_BREAKPOINT,
} from "@util/constants";

interface Props {
  children: ReactNode;
  fileForDownload: object;
}

const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  width: 60vw;
  height: 80vh;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  @media only screen and (max-width: ${LAPTOP_BREAKPOINT}px) {
    height: 70vh;
  }

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    height: 30vh;
  }
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90vw;
    height: 60vh;
  }

  @media only screen and (max-width: ${SMALLER_MOBILE}px) {
    height: 70vh;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: grey;
  z-index: 2;
`;

function DownloadForm(props: Props) {
  const { children } = props;

  return (
    <>
      <Wrapper>
        {children}
        <iframe
          src="https://www.cognitoforms.com/f/sVK_2r8fgESD-9v3VAqzQg?id=3"
          frameborder="0"
          scrolling="yes"
          seamless="seamless"
          height="672"
          width="100%"
        ></iframe>

        <Helmet>
          <script src="https://www.cognitoforms.com/scripts/embed.js"></script>
        </Helmet>
      </Wrapper>
      <Background />
    </>
  );
}

export default DownloadForm;
