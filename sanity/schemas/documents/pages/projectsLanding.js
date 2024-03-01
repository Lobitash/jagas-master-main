export default {
  title: "Projects Landing",
  name: "projectsLanding",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    {
      title: "Page Content",
      name: "pageContent",
      type: "array",
      of: [{ type: "heroPlain" }, { type: "textSection" }],
    },
  ],
};
