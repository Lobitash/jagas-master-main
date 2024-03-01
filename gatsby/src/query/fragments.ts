import { graphql } from "gatsby";

export const sanityFluidImage = graphql`
  fragment sanityFluidImage on SanityImage {
    _type
    _key
    asset {
      fluid {
        srcWebp
        srcSetWebp
        srcSet
        src
      }
    }
  }
`;

export const sanitySeo = graphql`
  fragment sanitySeo on SanitySeo {
    pageTitle
    pageKeyWords
    pageDescription
    slug {
      current
    }
    ogImage {
      asset {
        fluid {
          src
        }
      }
    }
  }
`;

export const sanityHomeHero = graphql`
  fragment sanityHomeHero on SanityHomeHero {
    _key
    _type
    links {
      url
      linktext
      _key
    }
    heroText {
      _rawContent
    }
    heroSlides {
      slideImage {
        ...sanityFluidImage
      }
    }
  }
`;

export const sanityLeftRightBlock = graphql`
  fragment sanityLeftRightBlock on SanityLeftRightBlock {
    _key
    _type
    _rawLeftRightText
    blockTitle
    imageAlignRight
    blockLink {
      url
      linktext
    }
    blockImage {
      ...sanityFluidImage
    }
  }
`;

export const sanityProjectsPreview = graphql`
  fragment sanityProjectsPreview on SanityProjectsPreview {
    _key
    _type
    title
    projectsList {
      _key
      projectName
      description
      slug {
        current
      }
      projectImages {
        ...sanityFluidImage
      }
    }
  }
`;

export const sanityTextSection = graphql`
  fragment sanityTextSection on SanityTextSection {
    _key
    _type
    title
    _rawTextContent
  }
`;

export const sanitySlider = graphql`
  fragment sanitySlider on SanitySlider {
    _key
    _type
    sliderTitle
    slides {
      _key
      slideContent {
        ...sanityFluidImage
      }
    }
  }
`;
