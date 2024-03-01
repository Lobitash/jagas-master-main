export default {
  title: "Home",
  name: "homePage",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    {
      type: "homeHero",
      name: "homeHero",
      options: { collapsible: true },
    },
    {
      type: "textSection",
      name: "textSection",
      options: { collapsible: true },
    },
    {
      title: "Home Page Menu",
      name: "homeMenu",
      type: "array",
      of: [{ type: "homeMenuTab" }],
    },
    {
      title: "Page Content",
      name: "pageContent",
      type: "array",
      of: [
        { type: "leftRightBlock" },
        { type: "slider" },
        { type: "textSection" },
        { type: "projectsPreview" },
      ],
    },
  ],
};
