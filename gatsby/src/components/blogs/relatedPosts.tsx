import React from 'react';
import styled from 'styled-components';

import { A, Container, H3, P } from '@util/standard';
import BlogPreview from './blogPreview';
import { MOBILE_BREAKPOINT } from '@util/constants';
import { navigate } from 'gatsby';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { icons } from '@util/constants';

interface Props {
  header: string;
  posts: Array<object>;
}

const ShareContainer = styled(Container)`
  width: 48%;
  height: 100%;
  margin: 0 auto;
`;

const ShareIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: auto 10px;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`;

const RelatedPostsWrapper = styled.div`
width: 80%;
margin: 100px auto;
position: relative;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  width: 90%;
}
`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
  grid-template-columns: repeat(1, 1fr);
}
`;

const Header = styled(H3)`
font-size: 20px;
font-family: 'bold';
margin-bottom: 25px;
`;

const BackLink = styled(A)`
color: #D86310;
text-decoration: underline;
font-family: 'bold';
position: absolute;
right: 0px;
top: 10px;

opacity: 1;
cursor: pointer;
&:hover {
  opacity: 0.7;
  color: #D86310;
  text-decoration: underline;
}
transition: opacity 0.2s;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
 top: 0px;
}
`;


function RelatedPosts(props: Props) {

  const { posts, header } = props;
  const { GATSBY_BASE_URL } = process.env;
  let pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const postUrl = GATSBY_BASE_URL + pathname;

  return (
    <>
      <ShareContainer>
        <P>Share with:</P>
        <LinkedinShareButton url={postUrl}>
          <ShareIcon src={icons.linkedin} />
        </LinkedinShareButton>
        <FacebookShareButton url={postUrl}>
          <ShareIcon src={icons.facebook} />
        </FacebookShareButton>
        <TwitterShareButton url={postUrl}>
          <ShareIcon src={icons.twitter} />
        </TwitterShareButton >
      </ShareContainer>
      <RelatedPostsWrapper>
        <Header>{header}</Header>
        <BackLink onClick={() => navigate('/blogs')}>Back to Blog</BackLink>
        <Wrapper>
          {posts.map((post, index) => {
            if (index < 3) {
              return (
                <BlogPreview blog={post} />
              );
            }
          })}
        </Wrapper>
      </RelatedPostsWrapper>
    </>
  );
}

export default RelatedPosts;
