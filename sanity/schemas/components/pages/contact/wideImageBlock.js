export default {
  title: "Wide Image Block",
  name: "wideImageBlock",
  type: "object",
  fields: [
    {
      title: "Block Image",
      name: "wideImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
