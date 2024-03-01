export default {
  title: "Swatchless Tab",
  name: "swatchlessTab",
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
      title: "Button Link",
      name: "buttonLink",
      type: "link",
    },
  ],
};
