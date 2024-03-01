export default {
  title: "Free Quote Page",
  name: "freeQuotePage",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    {
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Sub Header",
      name: "subHeader",
      type: "text",
    },
    {
      title: "Thank You Message",
      name: "thankYouMessage",
      type: "blockContent",
    },
  ],
};
