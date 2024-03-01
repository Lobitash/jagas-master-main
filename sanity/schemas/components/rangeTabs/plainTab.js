export default {
  title: "Plain Tab",
  name: "plainTab",
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
      name: "productDescriptionBlock",
      type: "blockContent",
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
