export default {
  title: "Precast Landing",
  name: "precastLanding",
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
        { type: "landingHero" },
        { type: "leftRightBlock" },
        { type: "previewProducts" },
        { type: "rangeInformationBlock" },
        { type: "slider" },
        { type: "cta" },
        { type: "textSection" },
        { type: "projectsPreview" },
      ],
    },
  ],
};
