export default {
  title: "Blog Text Block",
  name: "blogTextBlock",
  type: "object",
  fields: [
    {
      title: "Block Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Block Text",
      name: "blockText",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
};
