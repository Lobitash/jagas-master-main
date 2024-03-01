import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import HomeMenu from "@components/shared/home/homeMenu";
import Layout from "@components/shared/layout";
import SEO from "@components/shared/seo";
import { Query } from "@graphql-types";
import HomeHero from "@components/shared/home/homeHero";
import TextSection from "@components/shared/textSection";
import FilterRenderedComponents from "@util/filterRenderedComponents";

const IndexPage = () => {
  const { sanityHomePage }: Query = useStaticQuery(graphql`
    {
      sanityHomePage {
        seoBlock {
          ...sanitySeo
        }
        homeHero {
          ...sanityHomeHero
        }
        textSection {
          ...sanityTextSection
        }
        pageContent {
          ... on SanityLeftRightBlock {
            ...sanityLeftRightBlock
          }
          ... on SanityProjectsPreview {
            ...sanityProjectsPreview
          }
          ... on SanitySlider {
            ...sanitySlider
          }
          ... on SanityTextSection {
            ...sanityTextSection
          }
        }
      }
    }
  `);

  if (sanityHomePage == null) return null;

  const { seoBlock, homeHero, textSection, pageContent } = sanityHomePage;

  return (
    <Layout>
      <SEO seoData={seoBlock} slug="/" />
      {homeHero && <HomeHero data={homeHero} />}
      {textSection && <TextSection blocks={textSection} />}
      <HomeMenu />
      {pageContent && <FilterRenderedComponents pageContent={pageContent} />}
    </Layout>
  );
};

export default IndexPage;
