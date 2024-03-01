export default {
  title: "Product Preview",
  name: "productPreview",
  type: "object",
  fields: [
    {
      title: "Product Title",
      name: "productTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Image",
      name: "productImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Icon",
      name: "productIcon",
      description: "Only used in Icon Preview",
      type: "image",
    },
  ],
};
