import React from "react";
import styled from "styled-components";

import { P } from "@util/standard";
import { MOBILE_BREAKPOINT } from "@util/constants";

const StyledLabel = styled.label<{
  padding?: string;
  mobilePadding?: string;
}>`
  ${({ mobilePadding }) =>
    mobilePadding &&
    `@media only screen and (max-width:${MOBILE_BREAKPOINT}px) {
  padding: ${mobilePadding};
}`}
  ${({ padding }) => padding && `padding: ${padding};`}
  display: flex;
  align-items: center;
`;

interface Props {
  onChange?: (arg?: any) => void;
  text?: string;
  checked?: boolean;
  name?: string;
  padding?: string;
  mobilePadding?: string;
}

const Checkbox = (props: Props) => {
  return (
    <StyledLabel padding={props.padding} mobilePadding={props.mobilePadding}>
      <input
        name={props.name}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <P style={{ margin: 0, paddingLeft: 5 }}>{` ${props.text}`}</P>
    </StyledLabel>
  );
};

export default Checkbox;
