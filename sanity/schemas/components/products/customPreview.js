export default {
  title: "Custom Product Preview",
  name: "customProduct",
  type: "object",
  fields: [
    {
      title: "Product Title",
      name: "productTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Description",
      name: "productDescription",
      description: "Only used in Detailed Preview",
      type: "text",
    },
    {
      title: "Product Images",
      name: "productImage",
      description:
        "The first image will be the featured image in custom preview",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
