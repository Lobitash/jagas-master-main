export default {
  title: "Block with Header",
  name: "blockWithHeader",
  type: "object",
  fields: [
    {
      title: "Block Header",
      name: "blockHeader",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Text Block",
      name: "textBlock",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
};
