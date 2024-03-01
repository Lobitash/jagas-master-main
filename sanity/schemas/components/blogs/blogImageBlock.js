export default {
  title: "Blog Image Block",
  name: "blogImageBlock",
  type: "object",
  fields: [
    {
      title: "Block Image",
      name: "blockImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
