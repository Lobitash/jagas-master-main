import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import styled from "styled-components";
import { Menu, Dropdown, message } from "antd";

import {
  icons,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  IPAD_PRO_BREAKPOINT,
  IPAD_BREAKPOINT,
  TWENTY_INCH_SCREEN,
} from "@util/constants";
import { DownOutlined } from "@ant-design/icons";
import HeaderDropDown from "@components/header/headerDropDown/headerDropDown";
import Search from "@shared/sub/search";
import { SquareButton } from "./shared.styles";
import { Query } from "@graphql-types";
import { Container } from "@util/standard";

interface Props {
  homePageHeader?: boolean;
  isProductPage?: boolean;
}

const HeaderWrapper = styled.div<{
  backgroundVisible: boolean;
  searchOpened: boolean;
}>`
  position: fixed;
  height: 100px;
  display: flex;
  justify-content: space-between;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 2;
  ${({ searchOpened }) => searchOpened && `z-index: 3;`};
  ${({ backgroundVisible }) =>
    backgroundVisible && `background-color: #3D393A;`};
  transition: background-color 0.3s;
  @media only screen and (max-width: ${IPAD_BREAKPOINT}px) {
    padding: 35px;
    padding-left: 20px;
    display: block;
  }
`;

const StyledImg = styled.img<{ searchOpened: boolean }>`
  position: relative;
  height: 100%;
  width: 250px;
  padding: 35px;
  ${({ searchOpened }) => searchOpened && `z-index: 5;`};
  cursor: pointer;
  @media only screen and (max-width: ${IPAD_BREAKPOINT}px) {
    display: none;
  }
`;

const MobileStyledImg = styled.img<{ searchOpened: boolean }>`
  position: relative;
  ${({ searchOpened }) => searchOpened && `z-index: 5;`};
  cursor: pointer;
  @media only screen and (min-width: ${IPAD_BREAKPOINT + 1}px) {
    display: none;
  }

  @media only screen and (max-width: ${IPAD_BREAKPOINT}px) {
    width: 30px;
    height: 30px;
    padding: 0px;
  }
`;

const HomePageMenu = styled.div`
  width: 20%;
  height: 100px;
  position: fixed;
  top: 0px;
  right: 15px;

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    width: 50%;
    right: 0px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    right: 10px;
    width: 70%;
  }
`;

const TopBarMenu = styled.div<{ searchOpened: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: fixed;
  top: 0px;
  right: 0px;
  width: 28%;
  max-width: 400px;
  grid-gap: 30px;
  height: 100px;

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    min-width: 400px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
    width: 35%;
    max-width: 200px;
    right: 2vw;
    ${({ searchOpened }) =>
      searchOpened && `width: 70%; right: -7%; max-width: 100%;`};
    min-width: 0px;
    grid-gap: 0px;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px auto auto auto;
  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    display: none;
  }
`;

const DesktopRightContainer = styled(Container)<{ searchOpened?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.searchOpened ? "flex-start" : "center")};
  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    display: none;
  }
`;

const MobileContainer = styled(Container)`
  display: flex;
  @media only screen and (min-width: ${IPAD_PRO_BREAKPOINT}px) {
    display: none;
  }
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
`;

const TopBarLink = styled.a`
  color: #3d393a;
  margin: auto;
  font-family: "bold";
  &:hover {
    color: black;
    opacity: 0.8;
  }
`;

const MobileButton = styled(Link)`
  @media only screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
  display: block;
  border: 1px solid white;
  text-decoration: none;
  width: 60%;
  color: white;
  margin: 30px auto 40px auto;
  text-align: center;
  padding: 10px 25px;
  &:hover {
    color: white;
  }
`;

const Hamburger = styled.img<{ isProductPage: boolean; searchOpened: boolean }>`
  margin: auto;
  cursor: pointer;
  filter: brightness(5);
  ${({ isProductPage }) => isProductPage && `filter: brightness(0);`};
  transition: all 0.2s;
  ${({ searchOpened }) =>
    searchOpened &&
    `
  z-index: 5;
  filter: brightness(0);
`}
`;

const SideMenuWrapper = styled.div<{ sideMenuOpened: boolean }>`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 40%;
  background-color: #3d393a;
  height: 100vh;
  overflow-y: scroll;
  z-index: 3;
  ${({ sideMenuOpened }) => (sideMenuOpened ? `right: 0px;` : `right: -100%;`)}
  transition: right 0.2s;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 60%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 100vh;
    width: 100%;
  }
`;

const MenuTitle = styled(Link)<{ hoverEffect: boolean }>`
  display: block;
  width: max-content;
  color: white;
  height: 20px;

  &:hover {
    color: white;
    cursor: default;
  }

  ${({ hoverEffect }) =>
    hoverEffect &&
    `&:hover {
    color: white;
    opacity: 0.5;
    cursor: pointer;
  }`}
  transition: all 0.2s;
`;

const DeskMenu = styled.a<{ productPage?: boolean }>`
  display: block;
  width: max-content;
  color: ${(props) => (props.productPage ? "black" : "white")};
  height: 20px;
  margin: 0 20px;

  &:hover {
    opacity: 0.5;
    color: ${(props) => (props.productPage ? "black" : "white")};
    cursor: pointer;
  }
  transition: all 0.2s;
`;

const DeskMenuTitle = styled(Link)<{
  hoverEffect?: boolean;
  productPage?: boolean;
}>`
  display: block;
  width: max-content;
  color: ${(props) => (props.productPage ? "black" : "white")};
  height: 20px;
  margin: 0 20px;
  &:hover {
    color: ${(props) => (props.productPage ? "black" : "white")};
    cursor: default;
  }

  ${({ hoverEffect }) =>
    hoverEffect &&
    `&:hover {
    color: ${(props) => (props.productPage ? "black" : "white")};
    opacity: 0.5;
    cursor: pointer;
  }`}
  transition: all 0.2s;
`;

const MenuItems = styled.div<{ isLastItem: boolean }>`
  width: 60%;
  margin: 0px auto 23px auto;
  padding-bottom: 23px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  ${({ isLastItem }) =>
    isLastItem && `border-bottom: none; grid-template-columns: repeat(2, 1fr);`}

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
    ${({ isLastItem }) =>
      isLastItem && `grid-template-columns: repeat(2, 1fr);`}
  }
`;

const DeskMenuItems = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const SubMenu = styled.div`
  position: relative;
  margin-top: 70px;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin-top: 0px;
  }
`;

const SocialLink = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  direction: rtl;

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: ${TWENTY_INCH_SCREEN}px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

const SocialIcon = styled.img`
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  transition: all 0.2s;
`;

const CloseSideMenu = styled.img`
  position: absolute;
  top: 35px;
  right: 6%;
  z-index: 3;
  cursor: pointer;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    right: 8%;
  }
`;

const GreyOverlay = styled.div`
  background-color: black;
  opacity: 0.5;
  top: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
`;

const Header = (props: Props) => {
  const { homePageHeader, isProductPage } = props;
  const [sideMenuOpened, toggleSideMenu] = useState(false);

  const { sanityHeader }: Query = useStaticQuery(graphql`
    {
      sanityHeader {
        menuTabs {
          menuName
          menuItems {
            title
            menuNameLink
            _key
            menuItems {
              url
              linktext
              _key
            }
          }
        }
        headerSocialLinks {
          linkTo
          _type
          _key
          socialIcon {
            asset {
              fixed {
                srcWebp
                srcSetWebp
                src
                srcSet
              }
            }
            _key
          }
        }
        headerLogo {
          asset {
            fixed {
              srcWebp
              srcSetWebp
              srcSet
              src
            }
          }
        }
        headerButton {
          linktext
          url
        }
        topBarLinks {
          url
          linktext
          _key
        }
        MobileLogo {
          asset {
            fluid {
              srcWebp
              srcSetWebp
              srcSet
              src
            }
          }
        }
      }
    }
  `);

  if (sanityHeader == null) return null;

  const {
    headerButton,
    headerLogo,
    topBarLinks,
    menuTabs,
    headerSocialLinks,
    MobileLogo,
  } = sanityHeader;
  const [userScrolled, toggleUserHasScrolled] = useState(false);
  const [searchOpened, toggleSearch] = useState(false);

  const userScrollCheck = () => {
    if (window.scrollY >= 5) {
      toggleUserHasScrolled(true);
    } else {
      toggleUserHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", userScrollCheck);

    if (typeof window !== `undefined`) {
      return;
    } else {
      userScrollCheck();
    }
  });

  return (
    <>
      <HeaderWrapper
        backgroundVisible={userScrolled}
        searchOpened={searchOpened}
      >
        <StyledImg
          searchOpened={searchOpened}
          src={headerLogo?.asset?.fixed?.src}
          onClick={() => navigate("/")}
        />
        <MobileStyledImg
          searchOpened={searchOpened}
          src={MobileLogo?.asset?.fluid?.src}
          onClick={() => navigate("/")}
        />
        <HeaderLinks>
          {menuTabs?.map((tab, index) => {
            if (tab == null) return null;
            const { menuItems } = tab;
            if (menuItems == null) return null;

            return (
              <DeskMenuItems key={index}>
                {menuItems.map((item) => {
                  if (item == null) return null;

                  const menu = (
                    <Menu>
                      {item.menuItems &&
                        item.menuItems.map((menu) => {
                          if (menu == null) return null;
                          if (menu.url == null) return null;
                          return (
                            <Menu.Item key={menu.url}>
                              <Link to={menu.url}>{menu.linktext}</Link>
                            </Menu.Item>
                          );
                        })}
                    </Menu>
                  );

                  return (
                    <div>
                      {item.menuItems!.length === 0 ? (
                        <DeskMenuTitle
                          hoverEffect={Boolean(item.menuNameLink)}
                          productPage={isProductPage && !userScrolled}
                          to={item.menuNameLink}
                        >
                          {item.title}
                        </DeskMenuTitle>
                      ) : (
                        <Dropdown overlay={menu} placement="bottomCenter">
                          <DeskMenu
                            onClick={(e) => e.preventDefault()}
                            productPage={isProductPage && !userScrolled}
                          >
                            {item.title} <DownOutlined />
                          </DeskMenu>
                        </Dropdown>
                      )}
                    </div>
                  );
                })}
              </DeskMenuItems>
            );
          })}
        </HeaderLinks>
        <DesktopRightContainer searchOpened={searchOpened}>
          <Search
            onClick={() => toggleSearch(true)}
            backgroundColor={userScrolled ? "#3D393A" : "rgba(51, 170, 51, 0)"}
            openSearch={searchOpened}
            isDesktop
            productPage={isProductPage && !userScrolled}
          />
          <SquareButton
            searchOpened={searchOpened}
            isProductPage={isProductPage && !userScrolled}
            to={headerButton?.url ?? "/"}
            margin="auto 0"
          >
            {headerButton?.linktext}
          </SquareButton>
        </DesktopRightContainer>
        {homePageHeader && (
          <HomePageMenu>
            <Links>
              {topBarLinks &&
                topBarLinks.map((link) => {
                  return (
                    <TopBarLink to={link?.url} key={link?._key}>
                      {link.linktext}
                    </TopBarLink>
                  );
                })}
            </Links>
          </HomePageMenu>
        )}
        <MobileContainer>
          {!homePageHeader && (
            <>
              <TopBarMenu searchOpened={searchOpened}>
                <div>
                  <Search
                    onClick={() => toggleSearch(true)}
                    backgroundColor={
                      userScrolled ? "#3D393A" : "rgba(51, 170, 51, 0)"
                    }
                    openSearch={searchOpened}
                    productPage={isProductPage && !userScrolled}
                  />
                </div>
                <SquareButton
                  searchOpened={searchOpened}
                  isProductPage={isProductPage && !userScrolled}
                  to={headerButton?.url ?? "/"}
                >
                  {headerButton?.linktext}
                </SquareButton>
                <Hamburger
                  searchOpened={searchOpened}
                  isProductPage={isProductPage && !userScrolled}
                  src={sideMenuOpened ? icons.cross : icons.hamburger}
                  onClick={() => toggleSideMenu(true)}
                  id="hamburgerOverride"
                />
              </TopBarMenu>
            </>
          )}
        </MobileContainer>
      </HeaderWrapper>
      <SideMenuWrapper sideMenuOpened={sideMenuOpened}>
        <SubMenu>
          <MobileButton to={headerButton?.url ?? "/"}>
            {headerButton?.linktext}
          </MobileButton>
          {menuTabs?.map((tab, index) => {
            if (tab == null) return null;
            const { menuItems } = tab;
            if (menuItems == null) return null;

            return (
              <div key={index}>
                {menuItems.map((item, index) => {
                  if (item == null) return null;

                  const isLastItem =
                    index >= menuTabs![0]!.menuItems!.length - 1;
                  return (
                    <MenuItems isLastItem={isLastItem}>
                      {item.menuItems!.length === 0 ? (
                        <MenuTitle
                          hoverEffect={Boolean(item.menuNameLink)}
                          to={item.menuNameLink}
                        >
                          {item.title}
                        </MenuTitle>
                      ) : (
                        <HeaderDropDown
                          menuTitle={item.title}
                          menuItems={item.menuItems}
                        />
                      )}
                      {isLastItem && (
                        <SocialLink>
                          {headerSocialLinks?.map((link) => {
                            return (
                              <SocialIcon
                                onClick={() => navigate(link.linkTo)}
                                src={link.socialIcon.asset.fixed.src}
                              />
                            );
                          })}
                        </SocialLink>
                      )}
                    </MenuItems>
                  );
                })}
              </div>
            );
          })}
        </SubMenu>
        <CloseSideMenu
          src={sideMenuOpened ? icons.cross : icons.hamburger}
          onClick={
            sideMenuOpened
              ? () => toggleSideMenu(false)
              : () => toggleSideMenu(true)
          }
        />
      </SideMenuWrapper>
      {(sideMenuOpened || searchOpened) && (
        <GreyOverlay
          onClick={() =>
            sideMenuOpened
              ? toggleSideMenu(false)
              : searchOpened
              ? toggleSearch(false)
              : null
          }
        ></GreyOverlay>
      )}
    </>
  );
};

export default Header;
