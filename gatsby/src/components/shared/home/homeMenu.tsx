import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import HomeMenuSlide from "./homeMenuSlide";
import { MOBILE_BREAKPOINT, IPAD_PRO_BREAKPOINT } from "@util/constants";
import { Query } from "@graphql-types";

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 77%;
  margin: 175px auto;

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 100px auto;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 120px auto;
  }
`;

const HomeMenu = () => {
  const { sanityHomePage }: Query = useStaticQuery(graphql`
    {
      sanityHomePage {
        homeMenu {
          tabTitle
          tabLinkUrl
          tabImages {
            ...sanityFluidImage
          }
          _key
        }
      }
    }
  `);

  if (sanityHomePage == null) return null;
  const { homeMenu } = sanityHomePage;

  return (
    <MenuWrapper>
      {homeMenu &&
        homeMenu.map((menuItem, index) => {
          if (menuItem == null) return null;

          return (
            <HomeMenuSlide
              left={index === 0}
              title={menuItem.tabTitle}
              link={menuItem.tabLinkUrl}
              slides={menuItem.tabImages}
            />
          );
        })}
    </MenuWrapper>
  );
};

export default HomeMenu;
