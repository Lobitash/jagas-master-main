import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Collapse } from "antd";

const DropDownWrapper = styled.div`
  display: block;
  .ant-collapse {
    background-color: #3d393a;
    border: none;
    color: white !important;
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
    background-color: #3d393a;
    border: none;
  }
  .ant-collapse-header {
    background-color: #3d393a;
    padding-left: 0px;
  }
  .ant-collapse > .ant-collapse-item:last-child,
  .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
    color: white;
    padding: 0px;
  }
  span.anticon.anticon-right.ant-collapse-arrow {
    padding: 0px;
  }
`;

const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  font-weight: 700;
  padding: 10px;
  padding-top: 0px;
  margin: auto;
  width: 60%;
  :hover {
    color: white;
    opacity: 0.5;
  }
`;

interface Props {
  menuTitle: string;
  menuItems: Array<Object>;
}

const HeaderDropDown = (props: Props) => {
  const { menuItems, menuTitle } = props;
  const { Panel } = Collapse;

  return (
    <DropDownWrapper>
      <Collapse expandIconPosition="right">
        <Panel header={menuTitle}>
          {menuItems.map((item) => {
            if (item == null) return null;

            return (
              <MenuLink to={item.url} key={item._key}>
                {item.linktext}
              </MenuLink>
            );
          })}
        </Panel>
      </Collapse>
    </DropDownWrapper>
  );
};

export default HeaderDropDown;