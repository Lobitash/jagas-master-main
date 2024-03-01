import React from "react";

import PortableText from "@sanity/block-content-to-react";
import { Link } from "@sub";
import styled from "styled-components";
import { colors } from "@util/constants";

const serializer = {
  types: {
    link: (props) =>
      props.node.kind === "button" ? (
        <Link
          {...props.node}
          className={
            props.node.buttonDisplay ? props.node.buttonDisplay : "custom-link"
          }
          hoverColor="grey"
          color="black"
        />
      ) : (
        <Link
          {...props.node}
          className={
            props.node.linkDisplay ? props.node.linkDisplay : "custom-link"
          }
          hoverColor="grey"
          color="black"
        />
      ),
    image: (props) => {
      return <div></div>;
    },
  },
};

const StyledPortableText = styled(PortableText)`
  h1 {
    font-size: 50px;
    font-family: bold;
  }

  h2 {
    font-size: 40px;
    font-weight: 500;
  }

  h3 {
    font-size: 30px;
    font-weight: 500;
  }
  h4 {
    font-size: 20px;
    font-weight: 500;
  }

  h6 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  a {
    text-decoration-line: underline;
    color: ${colors.black};
  }
`;

interface Props {
  blocks: any;
}

const BlocksContent = ({ blocks }: Props) => {
  return (
    <StyledPortableText
      blocks={blocks}
      serializers={serializer}
      imageOptions={{ auto: "format", fit: "fill" }}
      projectId={process.env.SANITY_PROJECT_ID}
      dataset="development"
    />
  );
};

export default BlocksContent;
