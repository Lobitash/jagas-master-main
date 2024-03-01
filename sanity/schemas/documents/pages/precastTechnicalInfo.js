export default {
  title: "Precast Technical Info",
  name: "precastTechnicalInfo",
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
        { type: "downloadGrid" },
        { type: "landingHero" },
        { type: "leftRightBlock" },
      ],
    },
  ],
};
