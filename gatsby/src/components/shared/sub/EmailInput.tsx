import React, { useState } from "react";
import styled from "styled-components";

import { Container, P } from "../../../util/standard";
import {
  icons,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALLER_MOBILE,
} from "../../../util/constants";
import { useEffect } from "react";
import { navigate } from "gatsby";
import axios from "axios";

interface Props {
  inline?: boolean;
  id: string;
}

const NewsLetterSignUp = styled(Container)<{ inline?: boolean }>`
  flex-wrap: wrap;
  height: 70px;
  width: 100%;

  ${({ inline }) =>
    inline &&
    `
  width: 30%;
  min-width: 550px;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    display: block;
    margin-bottom: 50px;

  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    min-width: 0px;
  }
 `}

  @media (max-width:${MOBILE_BREAKPOINT}px) {
    grid-column-start: 1;
    grid-column-end: 4;
    margin-top: 50px;
  }
`;

const SignUpP = styled(P)<{ inline?: boolean }>`
  width: 100%;
  height: 30px;
  margin: 0px;
  color: white;

  ${({ inline }) =>
    inline &&
    `
  width: max-content;
  height: 30px;
  display: inline-grid;
  align-content: center;
  margin:5px 30px 5px 5px;
  font-weight: 700;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 80%;
    display:block;
  }
 `}
`;

const EmailTextInput = styled.input`
  background: border-box;
  outline: none;
  color: white;
  text-decoration: none;
  border: none;
  width: 86%;

  ::placeholder {
    font-family: "regular";
  }
`;
const EmailForm = styled(Container)<{ inline?: boolean }>`
  width: 90%;
  border-bottom: 1px solid white;

  ${({ inline }) =>
    inline &&
    `
  width: 60%;
  min-width: 260px;
  height: 30px;  
  `}
`;

const SubmitIcon = styled.img<{ inline?: boolean; hoverEffect: boolean }>`
  width: 30%;
  margin-left: 60%;
  ${({ hoverEffect }) => hoverEffect && `transform: translateX(10px);`};

  ${({ inline }) =>
    inline &&
    `
  width: 20%;
  min-width: 40px;
  margin-left: 30%;
 `}

  transition: transform 0.2s;
`;

const FormWrapper = styled.form<{ inline: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${({ inline }) =>
    inline &&
    `
  width: 90%;
  `}

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SubmitButton = styled.button`
  width: 70%;
  max-width: 80px;
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  opacity: 0;
`;

export default function EmailInput(props: Props) {
  const [hoverEffectOn, toggleHoverEffectOn] = useState(false);
  const [email, toggleEmail] = useState("");
  const [formSubmitted, toggleFormSubmitted] = useState(false);
  const [pageLocation, updatePageLocation] = useState("");

  const { submitArrow } = icons;
  const { inline, id } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        message: "Hello there",
      }),
    };

    fetch("/.netlify/functions/subscribe", options)
      .then(function (response) {
        toggleFormSubmitted(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    updatePageLocation(window.location.pathname);
  });

  return (
    <NewsLetterSignUp inline={inline}>
      {!formSubmitted && (
        <FormWrapper
          name="newsletter"
          data-netlify="true"
          method="POST"
          inline={inline}
        >
          <input name="form-name" type="hidden" />
          <SignUpP inline={inline}>Sign up to our Newsletter</SignUpP>
          <EmailForm
            onMouseEnter={() => toggleHoverEffectOn(true)}
            onMouseLeave={() => toggleHoverEffectOn(false)}
            inline={inline}
          >
            <Label htmlFor={id}></Label>
            <EmailTextInput
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={(e) => toggleEmail(e.target.value)}
              id={id}
            />
            <SubmitButton onClick={handleSubmit}>
              <SubmitIcon
                hoverEffect={hoverEffectOn}
                src={submitArrow}
                inline={inline}
                alt="email-sign-up-submit-button-icon"
              />
            </SubmitButton>
          </EmailForm>
        </FormWrapper>
      )}
      {formSubmitted && (
        <P marginTop={10} fontWeight={700}>
          Thank you for signing up!
        </P>
      )}
    </NewsLetterSignUp>
  );
}
