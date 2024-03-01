import React, { ReactNode } from "react";
import styled from 'styled-components'
import { Collapse } from 'antd'

import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '../../util/constants'


const DropDownWrapper = styled.div <{ themeColor: string; backgroundColor: string; borderTop: boolean; borderBottom: boolean; }>`
display: block;
margin: 10px auto;
  @media only screen and (min-width: ${TABLET_BREAKPOINT}px) {
    display: none;
  }

.ant-collapse {
  border: none;
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  color: black !important;

}
.ant-collapse-content.ant-collapse-content-active {
  border: none;
}



.ant-collapse-content {
  border: none;
  font-weight: 700;
}

.ant-collapse > .ant-collapse-item {
  border: none;
}

.ant-collapse-content-box {
  padding-left: 0px;
  border: none;
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}

}

.ant-collapse-header {

  padding-left: 0px;
}

h3 .ant-collapse > .ant-collapse-item:last-child, .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
  ${({ themeColor }) => themeColor && `color: ${themeColor};`}

  font-family: 'bold';
  padding: 0px;
}

span.anticon.anticon-right.ant-collapse-arrow {
  padding: 0px;

}
margin-top: 0px;
margin-bottom: 0px;
padding-top: 10px;
padding-bottom: 10px;

${({ borderTop, themeColor }) => borderTop && `border-top: 2px solid ${themeColor};`};
${({ borderBottom, themeColor }) => borderBottom && `border-bottom: 2px solid ${themeColor};`};

`

interface Props {
  menuTitle: string;
  children: ReactNode;
  backgroundColor: string;
  themeColor: string;
  borderBottom?: boolean;
  borderTop?: boolean;
}


const DropDown = (props: Props) => {
  const { menuTitle, children, themeColor, backgroundColor, borderTop, borderBottom } = props
  const { Panel } = Collapse

  return (
    <DropDownWrapper backgroundColor={backgroundColor} themeColor={themeColor} borderBottom={borderBottom} borderTop={borderTop}>
      <Collapse expandIconPosition='right'>
        <Panel header={menuTitle}>
          {children}
        </Panel>
      </Collapse>
    </DropDownWrapper>
  )

}

export default DropDown