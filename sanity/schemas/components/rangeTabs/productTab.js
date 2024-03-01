export default {
  title: "Product Tab",
  name: "productTab",
  type: "object",
  fields: [
    {
      title: "Product Name",
      name: "productTabName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tab Content",
      name: "tabContent",
      type: "array",
      of: [
        { type: "standardTab" },
        { type: "detailedTab" },
        { type: "swatchlessTab" },
        { type: "plainTab" },
      ],
      validation: (Rule) => Rule.max(1).required(),
    },
  ],
};
