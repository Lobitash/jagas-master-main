import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "@components/shared/layout";
import FilterRenderedComponents from "@util/filterRenderedComponents";
import SEO from "@components/shared/seo";

const Sustainability = () => {
  const { sanitySustainabilityPage } = useStaticQuery(graphql`
    {
      sanitySustainabilityPage {
        seoBlock {
          ...sanitySeo
        }
        pageContent {
          ... on SanityTextSection {
            ...sanityTextSection
          }
          ... on SanityLeftRightBlock {
            ...sanityLeftRightBlock
          }
          ... on SanityCta {
            _key
            _type
            ctaText {
              _rawContent
            }
            ctaLink {
              linktext
              url
            }
          }
          ... on SanityHeroPlain {
            _key
            _type
            heroText
          }         
          ... on SanityProjectsPreview {
            ...sanityProjectsPreview
          }

        }
      }
    }
  `);

  const { pageContent } = sanitySustainabilityPage;

  return (
    <Layout>
      <SEO seoData={sanitySustainabilityPage?.seoBlock} slug="jagas-sustainability" />
      <FilterRenderedComponents pageContent={pageContent} />
    </Layout>
  );
};

export default Sustainability;
