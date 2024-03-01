export default {
  title: "Product Hero",
  name: "productHero",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hero Text",
      name: "heroText",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
     {
      title: "Hero Image",
      name: "heroImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: " Hero Icon  (optional)",
      name: "heroIcon",
      type: "image",
    },
  ],
};
