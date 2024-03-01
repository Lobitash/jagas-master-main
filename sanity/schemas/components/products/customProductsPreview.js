export default {
  title: "Custom Products Preview",
  name: "customProductPreview",
  type: "object",
  fields: [
    {
      title: "Product Title",
      name: "productTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Products",
      name: "customProducts",
      type: "array",
      of: [
        {
          type: "customProduct",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
