export default {
  title: "Kitchen Sink (Hide before Prod)",
  name: "kitchenSink",
  type: "document",
  fields: [
    {
      title: "The sink",
      description: "A collection of all default schema components",
      name: "sink",
      type: "array",
      of: [{ type: "column" }, { type: "link" }, { type: "seo" }],
      options: { collapsible: true },
    },
  ],
};
