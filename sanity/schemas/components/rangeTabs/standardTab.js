export default {
  title: "Standard Tab",
  name: "standardTab",
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
      description: "(Optional): Leaving this empty will mean that no button will appear.",
      type: "link",
    },
  ],
};
