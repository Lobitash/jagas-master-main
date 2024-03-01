export default {
  title: "Product Range Tabs",
  name: "productRangeTabs",
  type: "object",
  fields: [
    { title: "Title", name: "title", type: "string", validation: (Rule) => Rule.required(), },
    {
      title: "Tabs",
      name: "tabs",
      type: "array",
      of: [{ type: "productTab" }],
      validation: (Rule) => Rule.required(),

    },
  ],
};
