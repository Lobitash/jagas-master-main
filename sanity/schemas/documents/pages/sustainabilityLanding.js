export default {
  title: "Sustainability Page",
  name: "sustainabilityPage",
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
      of: [
        { type: "heroPlain" },
        { type: "textSection" },
        { type: "leftRightBlock" },
        { type: "cta" },
        { type: "projectsPreview" },
      ],
    },
  ],
};
