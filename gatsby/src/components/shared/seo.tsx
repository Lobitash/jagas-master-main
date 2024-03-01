import { Query, SanitySeo } from "../../../graphql-types";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  seoData?: SanitySeo | null;
  post?: boolean;
  overwriteTitle?: string;
  overwriteImage?: string;
  overwriteDescription?: string;
  slug?: string;
}

const SEO = (props: Props) => {
  const { sanitySiteConfig }: Query = useStaticQuery(graphql`
    query defaultSEOQuery {
      sanitySiteConfig {
        defaultSEO {
          pageDescription
          pageKeyWords
          pageTitle
          ogImage {
            asset {
              url
            }
          }
        }
      }
    }
  `);

  var urlString = "https://www.recipes.co.nz/";

  if (props.slug) {
    urlString = urlString + props.slug;
  }

  return (
    <div className="seo">
      <Helmet
        title={
          props.overwriteTitle ||
          props.seoData?.pageTitle ||
          sanitySiteConfig?.defaultSEO?.pageTitle
        }
      >
        <meta
          name="description"
          content={
            props.seoData?.pageDescription ||
            props.overwriteDescription ||
            sanitySiteConfig?.defaultSEO?.pageDescription
          }
        />
        <meta
          name="keywords"
          content={
            props.seoData?.pageKeyWords ||
            sanitySiteConfig?.defaultSEO?.pageKeyWords
          }
        />
        <html lang="en" />

        <meta
          property="og:title"
          content={
            props.overwriteTitle ||
            props.seoData?.pageTitle ||
            sanitySiteConfig?.defaultSEO?.pageTitle
          }
        />
        <meta property="og:type" content={props.post ? `article` : `website`} />
        <meta property="og:url" content={urlString} />
        <meta
          property="og:image"
          content={
            props.seoData?.ogImage?.asset?.url ||
            props.overwriteImage ||
            sanitySiteConfig?.defaultSEO?.ogImage?.asset?.url
          }
        />
        <meta
          property="og:description"
          content={
            props.seoData?.pageDescription ||
            props.overwriteDescription ||
            sanitySiteConfig?.defaultSEO?.pageDescription
          }
        />

        {/* Twitter Card tags */}
        <meta
          name="twitter:card"
          content={
            props.seoData?.pageDescription ||
            props.overwriteDescription ||
            sanitySiteConfig?.defaultSEO?.pageDescription
          }
        />
        <meta
          name="twitter:title"
          content={
            props.overwriteTitle ||
            props.seoData?.pageTitle ||
            sanitySiteConfig?.defaultSEO?.pageTitle
          }
        />
        <meta
          name="twitter:image"
          content={
            props.seoData?.ogImage?.asset?.url ||
            props.overwriteImage ||
            sanitySiteConfig?.defaultSEO?.ogImage?.asset?.url
          }
        />
        <meta property="twitter:site" content={urlString} />
        <meta
          name="twitter:description"
          content={
            props.seoData?.pageDescription ||
            props.overwriteDescription ||
            sanitySiteConfig?.defaultSEO?.pageDescription
          }
        />
      </Helmet>
    </div>
  );
};

export default SEO;
