import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Input from "@components/shared/sub/input";
import {
  IPAD_PRO_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "@util/constants";
import { P, H1, H2 } from "@util/standard";
import BlockContent from "@sanity/block-content-to-react";

interface Props {
  header: string;
  subHeader: string;
  thankYouMessage: Array<Object>;
}

const Header = styled(H1)`
  font-size: 20px;
  font-family: "bold";
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 5px 0px;
    row-gap: 5px;
  }
`;

const CheckBoxGrid = styled.div`
  width: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 80%;
  }
`;

const Form = styled.form`
  position: relative;
  width: 72%;
  max-width: 1200px;
  padding: 50px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    width: 80%;
    padding: 20px 5px;
    margin-top: 150px;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 90%;
    padding: 0px;
  }
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  width: 100%;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BottomGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    grid-template-columns: 65% 35%;
  }
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: 52% 48%;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Button = styled.button`
  display: block;
  font-family: "bold";
  width: max-content;
  padding: 10px 25px;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #d86310;
  &:hover {
    background-color: #f7f7f6;
    color: #d86310;
    border: 1px solid #d86310;
    padding: 9px 24px;
  }
  &:focus {
    outline: none;
  }
  transition: background-color 0.2s;
`;

const FileUpload = styled.input`
  text-align: center;
  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    content: "Upload files";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-align: center;
    padding-top: 10px;
    width: 100%;
    font-family: "bold";
    text-decoration: underline;
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.6;
  }
  transition: opacity 0.2s;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    ::before {
      text-align: left;
      margin-bottom: 30px;
      padding-top: 0px;
    }
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

function QuoteForm(props: Props) {
  const { header, subHeader, thankYouMessage } = props;
  const [formSubmitted, updateFormSubmissionStatus] = useState(false);
  const [formData, updateFormData] = useState({
    FNAME: "",
    LNAME: "",
    email_address: "",
    phone: "",
    MESSAGE: "",
    SUBJECT: "",
    COMPANY: "",
    status: "unsubscribed",
  });

  const handleSubmit = async (e) => {
    const postData = {
      email_address: formData.email_address,
      status: formData.status,
      tags: ["Quote Enquiry"],
      merge_fields: {
        FNAME: formData.FNAME,
        LNAME: formData.LNAME,
        PHONE: formData.phone,
        SUBJECT: formData.SUBJECT,
        COMPANY: formData.COMPANY,
        MESSAGE: formData.MESSAGE,
      },
    };

    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };

    fetch("/.netlify/functions/contact", options)
      .then(function (response) {
        console.log(response);
        updateFormSubmissionStatus(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Form>
        {!formSubmitted && (
          <>
            {" "}
            <Header marginBottom={0}>{header.toUpperCase()}</Header>
            <P marginTop={0}>{subHeader}</P>
            <CheckBoxGrid>
              <Input
                isCheckbox
                placeHolder="Paving"
                onChange={() =>
                  updateFormData({ ...formData, SUBJECT: "Paving" })
                }
              />
              <Input
                isCheckbox
                placeHolder="Precast"
                onChange={() =>
                  updateFormData({ ...formData, SUBJECT: "Precast" })
                }
              />
            </CheckBoxGrid>
            <GridWrapper>
              <Input
                inputType="text"
                placeHolder="First Name"
                onChange={(e) =>
                  updateFormData({ ...formData, FNAME: e.target.value })
                }
              />
              <Input
                inputType="text"
                placeHolder="Last Name"
                onChange={(e) =>
                  updateFormData({ ...formData, LNAME: e.target.value })
                }
              />
            </GridWrapper>
            <Input
              inputType="text"
              placeHolder="Company Name (Optional)"
              onChange={(e) =>
                updateFormData({ ...formData, COMPANY: e.target.value })
              }
            />
            <GridWrapper>
              <Input
                inputType="email"
                placeHolder="Email"
                onChange={(e) =>
                  updateFormData({ ...formData, email_address: e.target.value })
                }
              />
              <Input
                inputType="text"
                placeHolder="Phone (optional)"
                onChange={(e) =>
                  updateFormData({ ...formData, phone: e.target.value })
                }
              />
            </GridWrapper>
            <Input
              isTextArea
              inputType="textarea"
              placeHolder="Specify project"
              onChange={(e) =>
                updateFormData({ ...formData, MESSAGE: e.target.value })
              }
            />
            <BottomGridWrapper>
              <Input
                isCheckbox
                placeHolder="Sign up to our newsletter"
                onChange={() =>
                  formData.status === "unsubscribed"
                    ? updateFormData({ ...formData, status: "subscribed" })
                    : updateFormData({ ...formData, status: "unsubscribed" })
                }
              />
              <ButtonsWrapper>
                <FileUpload id="upload-button" type="file" />
                <Button onClick={handleSubmit}>Submit</Button>
              </ButtonsWrapper>
            </BottomGridWrapper>
          </>
        )}
        {formSubmitted && (
          <ThankYouWrapper>
            <BlockContent blocks={thankYouMessage} />
            <Line></Line>
          </ThankYouWrapper>
        )}
      </Form>
    </>
  );
}

export default QuoteForm;
