import React from "react";
import { useStaticQuery, graphql, navigate } from 'gatsby'
import styled from 'styled-components'

import { A, P } from '../../util/standard'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, IPAD_PRO_BREAKPOINT } from '../../util/constants'
import EmailInput from '../shared/sub/EmailInput'

interface Props { }

const FooterWrapper = styled.div`
  width: 100vw;
  background-color: #3D393A;
  color: white;
`

const TopSection = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 90%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-top: 0px;
  }
`

const Wrapper = styled.div`
  width: 76%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
  width: 97%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  margin: 0;
  }

`

const SocialLinks = styled.div`
  display: grid;
  width: 40%;
  margin: 0 auto;
  min-width: 200px;
  grid-template-columns: repeat(5, 1fr);
  
  @media only screen and (max-width: ${IPAD_PRO_BREAKPOINT}px) {
    margin: 0;
    width: 50%;
  }
`

const SocialIcon = styled.img`
&:hover {
   cursor: pointer;
   opacity: 0.5;
 }
 transition: all 0.2s;
`

const BottomSection = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 70px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 90%;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 35px;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

`

const ItemWrapper = styled.div`
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  margin: 0 auto;
  width: 80%;
}
`

const MenuWrapper = styled.div`
padding-bottom: 100px;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  padding-bottom: 50px;
}

`

const StyledLink = styled(A)`
display: block;
width: max-content;
margin-bottom: 5px;
font-family: 'regular';
font-weight: 700;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 100%;
}
`

const Copyright = styled(P)`
width: 80%;
margin: 0 auto;
padding-bottom: 10px;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 90%;
}
`

const Footer = (props: Props) => {
  const { sanityFooter } = useStaticQuery(graphql`
  {
    sanityFooter {
      id
      footerSocialLinks {
        socialIcon {
          asset {
            fixed {
              srcWebp
              srcSetWebp
              srcSet
              src
            }
          }
        }
        linkTo
        _key
      }
      menus {
        _key
        menuItems {
          _key
          url
          linktext
        }
        title
      }
    }
  }
`)

  const { footerSocialLinks, menus } = sanityFooter

  return (
    <FooterWrapper>
      <TopSection>
        <Wrapper>
          <EmailInput inline id="footer-email" />
          <SocialLinks>
            {footerSocialLinks.map(link => {
              return (
                <SocialIcon onClick={() => navigate(link.linkTo)} src={link.socialIcon.asset.fixed.src} />
              )
            })}
          </SocialLinks>
        </Wrapper>
      </TopSection>
      <BottomSection>
        {menus.map(item => {
          return (
            <ItemWrapper>
              <P>{item.title}</P>
              <MenuWrapper>
                {item.menuItems.map(link => {
                  return (
                    <StyledLink onClick={() => navigate(link.url)}>{link.linktext}</StyledLink>
                  )
                })}
              </MenuWrapper>
            </ItemWrapper>
          )
        })}
      </BottomSection>
      <Copyright>Copyright 2021. Jagas.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
