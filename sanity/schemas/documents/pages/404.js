export default {
  title: "404 Page",
  name: "pageNotFound",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    { title: "404 Page Header", name: "pageHeader", type: "string" },
    { title: "404 Page Sub Header", name: "pageSubHeader", type: "text" },
    { title: "404 Page Image", name: "notFoundImage", type: "image" },
    {
      title: "Page Links",
      name: "pageLinks",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
