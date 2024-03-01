import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import BlockContent from "@sanity/block-content-to-react";

import { P } from "@util/standard";
import { IPAD_PRO_BREAKPOINT, MOBILE_BREAKPOINT } from "@util/constants";

interface Props {
  header: string;
  subHeader: string;
  customerTypes: Array<string>;
  thankYouMessage: Array<Object>;
}

const Wrapper = styled.div`
  position: relative;
  width: 72%;
  max-width: 1200px;
  padding: 50px;
  margin: 0 auto 100px auto;

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    width: 80%;
    padding: 20px 5px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
    padding: 0px;
  }
`;

const ThankYouWrapper = styled.div`
  width: 72%;
  max-width: 1200px;
  padding: 0px 50px 50px 0px;
  height: 300px;
  h2 {
    font-size: 20px;
    font-family: "bold";
  }
  h3 {
    font-size: 20px;
    font-family: "bold";
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

function ContactForm(props: Props) {
  const { header, subHeader, thankYouMessage } = props;
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Wrapper class="cognito">
      <P marginBottom={0}>{header}</P>
      <P marginTop={0}>{subHeader}</P>
      <iframe
        src="https://www.cognitoforms.com/f/sVK_2r8fgESD-9v3VAqzQg?id=1"
        frameborder="0"
        scrolling="yes"
        seamless="seamless"
        height="664"
        width="100%"
      />
      {formSubmitted && (
        <ThankYouWrapper>
          <BlockContent blocks={thankYouMessage} />
          <Line></Line>
        </ThankYouWrapper>
      )}
      <Helmet>
        <script src="https://www.cognitoforms.com/scripts/embed.js" />
      </Helmet>
    </Wrapper>
  );
}

export default ContactForm;
