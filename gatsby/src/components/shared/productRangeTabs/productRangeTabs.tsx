import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Carousel, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons';


import { P } from '@util/standard'
import ProductTab from './productTab'

import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@util/constants'

interface Props {
  rangeTabs: object;
}

const Wrapper = styled.div``

const ProductTitles = styled.div<{ gridCount: number }>`
  display: grid;
  ${({ gridCount }) => gridCount ? `grid-template-columns: repeat(${gridCount}, 1fr);` : `grid-template-columns: repeat();`};
  ${({ gridCount }) => gridCount > 3 ? 'width: 80%;' : 'width: 50%;'};
  ${({ gridCount }) => gridCount > 4 ? 'text-transform: initial' : 'text-transform: uppercase'};

  margin: 0 auto;
 
 @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
    display: none;
  }
`

const ProductName = styled(P) <{ isHighlighted: boolean; noBg: boolean }>`
 text-align: center;
 color: #D86310;
 font-family: 'bold';
 opacity: 0.4;
 background-color: none;
 cursor: pointer;
 padding-top: 13px;
 padding-bottom: 13px;
margin-bottom: 0px;
margin-top: 0px;
 ${({ isHighlighted }) => isHighlighted && `opacity: 1; background-color: #F7F7F6;`};
 ${({ noBg }) => noBg && `background-color: white; margin-top: 0px;`}

 @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
   font-size: 12px;
 }
`

const MobileDropDown = styled(Dropdown) <{ dropDownOpened: boolean }>`
display: none;
@media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
display: block;
color: #D86310;
width: 90%;
margin: 0 auto;
p {
  padding-left: 0px;
}

span.anticon.anticon-down {
  margin-left: 25px;
  transform: rotate(-90deg);
  ${({ dropDownOpened }) => dropDownOpened && `transform: rotate(0deg);`};
  transition: transform 0.2s;
}
}
`

const TabContainer = styled.div`
background-color: #F7F7F6;
`



function ProductRangeTabs(props: Props) {

  const [currentTabIndex, updateCurrentTab] = useState(0)
  const [dropdownOpened, toggleDropdown] = useState(false)


  const { rangeTabs } = props
  const { tabs } = rangeTabs

  const dropdownMenu = (
    <Menu>
      {tabs.map((tab, index) => (
        <Menu.Item>
          <ProductName noBg isHighlighted onClick={() => {
            updateCurrentTab(index)
            toggleDropdown(false)
          }}>
            {tab.productTabName.toUpperCase()}
          </ProductName>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Wrapper>
      <ProductTitles gridCount={tabs.length}>
        {tabs.map((tab, index) => {
          return (
            <ProductName onClick={() => updateCurrentTab(index)} isHighlighted={currentTabIndex === index}>{tab.productTabName}</ProductName>
          )
        })}
      </ProductTitles>

      <MobileDropDown dropDownOpened={dropdownOpened} overlay={dropdownMenu} trigger={['click']} onVisibleChange={dropdownOpened ? () => toggleDropdown(false) : () => toggleDropdown(true)}>
        <div className="ant-dropdown-link">
          <ProductName isHighlighted onClick={e => e.preventDefault()}>
            {tabs[currentTabIndex].productTabName}
            <DownOutlined />
          </ProductName>
        </div>
      </MobileDropDown>
      <TabContainer>
        <div>
          <ProductTab tab={tabs[currentTabIndex]} />
        </div>
      </TabContainer>
    </Wrapper>
  )
}

export default ProductRangeTabs
