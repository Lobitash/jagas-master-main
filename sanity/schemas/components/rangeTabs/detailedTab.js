export default {
  title: "Detailed Tab",
  name: "detailedTab",
  type: "object",
  fields: [
    {
      title: "Product Image",
      name: "productImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Description",
      name: "productDescription",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Details",
      name: "productDetails",
      type: "array",
      of: [{ type: "blockWithHeader" }],
      validation: (Rule) => Rule.max(2).required(),
    },
    {
      title: "Colors Available",
      name: "productColors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "textureCard" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Button Link",
      name: "buttonLink",
      type: "link",
      description: "(Optional): Leaving this empty will mean that no button will appear.",
    },
  ],
};
