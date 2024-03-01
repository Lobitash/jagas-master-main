export default {
  title: "Paving Technical Info",
  name: "pavingTechnicalInfo",
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
    {
      title: "Download Form Thank You Message",
      description:
        "This will be the message for both precast and paving download forms",
      name: "formThankYouMessage",
      type: "blockContent",
    },
  ],
};
