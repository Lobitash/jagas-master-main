import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { P } from "@util/standard";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  SMALLER_MOBILE,
  IPAD_BREAKPOINT,
  IPAD_PRO_BREAKPOINT,
  icons,
  IMAC_BREAKPOINT,
} from "@util/constants";
import DownloadForm from "./downloadForm";

interface Props {
  content: object;
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }

  @media only screen and (max-width: ${SMALLER_MOBILE}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }
  transition: opacity 0.2s;
`;

const FileName = styled(P)`
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 12px;
  }
`;

const ImageWrapper = styled.div`
  height: 18vh;
  width: 100%;
  background-color: #d8d7d8;
  @media only screen and (min-width: ${IMAC_BREAKPOINT - 2}px) {
    height: 22vh;
  }

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    height: 10vh;
  }
  @media only screen and (max-width: ${SMALLER_MOBILE}px) {
    height: 20vh;
  }
`;
const FileImage = styled(Img)`
  width: 100%;
  height: 100%;

  img {
    object-fit: initial !important;
  }
`;

const Close = styled.img`
  position: absolute;
  top: -40px;
  right: 0%;
  cursor: pointer;
  @media only screen and(max-width: ${MOBILE_BREAKPOINT}px) {
    top: -60px;
  }
`;

function DownloadsGrid(props: Props) {
  const { content } = props;
  const { downloadableDocuments } = content;

  const [popUpVisibile, togglePopUpVisibility] = useState(false);
  const [popUpIndex, setPopUpIndex] = useState(99);

  const openPopUp = (index) => {
    togglePopUpVisibility(true);
    setPopUpIndex(index);
  };

  const handleClick = (file) => {
    if (typeof window !== "undefined") {
      const url = file?.fileObject?.asset?.url as string;
      window.open(url, "_blank")?.focus();
    }
  };
  return (
    <GridWrapper>
      {downloadableDocuments.map((file, index) => {
        return (
          <Wrapper onClick={() => handleClick(file)}>
            <ImageWrapper>
              {file.documentImage && (
                <FileImage fluid={file.documentImage.asset.fluid} />
              )}
            </ImageWrapper>
            <FileName>{file.fileName.toUpperCase()}</FileName>
          </Wrapper>
        );
      })}
      {/* {popUpVisibile && (
        <DownloadForm fileForDownload={downloadableDocuments[popUpIndex]}>
          <Close
            src={icons.cross}
            onClick={() => togglePopUpVisibility(false)}
          />
        </DownloadForm>
      )} */}
    </GridWrapper>
  );
}

export default DownloadsGrid;
