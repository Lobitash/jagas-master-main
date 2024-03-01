require("dotenv").config({
  path: `.env.development`,
});
const path = require("path");

const isProd = process.env.GATSBY_NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: "Flight Digital Starter Project",
    description: "",
    siteUrl: process.env.GATSBY_BASE_URL,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: 'ue9m8x21',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd,
       // overlayDrafts: !isProd,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    /*
     * Alias Imports
     */
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@shared": path.resolve(__dirname, "src/components/shared"),
          "@sub": path.resolve(__dirname, "src/components/shared/sub"),
          "@lib": path.resolve(__dirname, "src/lib"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@util": path.resolve(__dirname, "src/util"),
          "@assets": path.resolve(__dirname, "assets"),
          "@graphql-types": path.resolve(__dirname, "graphql-types"),
        },
        extensions: [],
      },
    },

    /*
     * SEO
     */
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.GATSBY_BASE_URL,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.GATSBY_BASE_URL,
        sitemap: `${process.env.GATSBY_BASE_URL}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "products",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        options: {
          encode: "balance",
          tokenize: "forward",
          threshold: 21,
        },

        // Note: Only the flexsearch engine supports options.
        engineOptions: "fast",
        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allSanityBlog {
              edges {
                node {
                  pageName
                  postFeatureImage {
                    asset {
                      fluid {
                        srcWebp
                        srcSetWebp
                        srcSet
                        src
                      }
                    }
                  }
                  slug {
                    current
                  }
                }
              }
            }
              allSanityProducts {
              edges {
                node {
                  pageName
                  pageCategory
                   productPagePreview {
                    productImage {
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
                  slug {
                    current
                  }
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "pageName",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        // index: [],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: [
          "pageName",
          "pageCategory",
          "slug",
          "productPagePreview",
          "postFeatureImage",
        ],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) => {
          return data.allSanityBlog.edges
            .concat(data.allSanityProducts.edges)
            .map((item) => {
              return {
                pageName: item.node.pageName,
                slug: item.node.slug.current,
                productPagePreview: item.node.productPagePreview,
                pageCategory: item.node.pageCategory
                  ? item.node.pageCategory
                  : "blog",
                postFeatureImage: item.node.postFeatureImage,
              };
            });
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NNK67GV",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },

    /*
     * Graphql Codegen
     */
    // NOTE: uncomment when schema structure has changed to update graphql-types
    // ** make sure to comment again when new graphql-types has been generated or builds will feel very slow
    // {
    //   resolve: `gatsby-plugin-graphql-codegen`,
    //   options: {
    //     fileName: `./graphql-types.ts`,
    //     documentPaths: [],
    //   },
    // },
  ],
};
