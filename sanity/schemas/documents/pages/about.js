export default {
  title: "About",
  name: "aboutPage",
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
        { type: "cta" },
        { type: "leftRightBlock" },
        { type: "ourTeam" },
        { type: "previewProducts" },
        { type: "rangeInformationBlock" },
        { type: "slider" },
        { type: "textSection" },
        { type: "testimonials" },
      ],
    },
  ],
};
