const path = require("path");

exports.createPages = async (params) => {
  // await Promise.all([turnBlogsIntoPages(params)]);
  await Promise.all([createProductPages(params), createBlogPages(params), createProjectPages(params)]);
};

// async function turnBlogsIntoPages({ graphql, actions }) {
//   const newsInnerTemplate = path.resolve("./src/templates/NewsInner.tsx");

//   const { data } = await graphql(`
//     query {
//       articles: allSanityNews {
//         edges {
//           node {
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `);

//   data.articles.edges.forEach((article) => {
//     actions.createPage({
//       path: `news/${article.node.slug.current}`,
//       component: newsInnerTemplate,
//       context: {
//         slug: article.node.slug.current,
//       },
//     });
//   });
// }

async function createProductPages({ graphql, actions }) {
  const productInner = path.resolve("./src/templates/productInner.tsx");

  const { data } = await graphql(`
    {
      products: allSanityProducts {
        edges {
          node {
            id
            slug {
              current
            }
            pageCategory
          }
        }
      }
    }
  `);

  data.products.edges.forEach((product) => {
    actions.createPage({
      path: `/${product.node.pageCategory}/${product.node.slug.current}`,
      component: productInner,
      context: {
        slug: product.node.slug.current,
      },
    });
  });
}

async function createBlogPages({ graphql, actions }) {
  const blogInner = path.resolve("./src/templates/blogInner.tsx");

  const { data } = await graphql(`
    {
      products: allSanityBlog {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  data.products.edges.forEach((blog) => {
    actions.createPage({
      path: `/${blog.node.slug.current}`,
      component: blogInner,
      context: {
        slug: blog.node.slug.current,
      },
    });
  });
}

async function createProjectPages({ graphql, actions }) {
  const projectInner = path.resolve("./src/templates/projectInner.tsx");

  const { data } = await graphql(`
    {
      projects: allSanityProjects {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  data.projects.edges.forEach((project) => {
    actions.createPage({
      path: `/projects/${project.node.slug.current}`,
      component: projectInner,
      context: {
        slug: project.node.slug.current,
      },
    });
  });
}
