import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  videoSrcURL?: string | null;
  videoTitle?: string | null;
  layout?: string | null | undefined;
  autoPlay?: boolean;
}

const StyledVideo = styled.iframe<{ layout?: string | null }>`
  ${({ layout }) =>
    layout === "Grid/Gallery"
      ? `height: 250px;`
      : layout === "List"
      ? `height: 500px; max-width:800px;`
      : `height: 500px;`}
  width: 100%;
  /* height: 500px; */
`;

const Video = memo(
  (props: Props) => {
    const { videoSrcURL, videoTitle, layout, autoPlay } = props;
    if (videoSrcURL == null) {
      return null;
    }

    return (
      <div className="video">
        <StyledVideo
          src={`${videoSrcURL}${autoPlay ? "?autoplay=1" : ""}`}
          title={videoTitle ?? ""}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          //@ts-ignore
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          layout={layout}
        />
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.videoSrcURL === nextProps.videoSrcURL
);

export default Video;
