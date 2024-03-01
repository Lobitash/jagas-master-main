export default {
  title: "Range Information Block",
  name: "rangeInformationBlock",
  type: "object",
  fields: [
    {
      title: "Header",
      name: "header",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Info Blocks",
      name: "infoBlocks",
      type: "array",
      of: [{ type: "blockWithHeader" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Colours (Optional: Wont be displayed if left empty)",
      name: "rangeColours",
      type: "array",
      of: [{ type: "reference", to: [{ type: "textureCard" }] }],
    },
  ],
};
