export default {
  title: "Contact Details",
  name: "contactDetails",
  type: "object",
  fields: [
    {
      title: "Block Title",
      name: "blockTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Get in Touch Text Block",
      name: "getInTouchTextBlock",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Contact Cards",
      name: "contactCards",
      type: "array",
      of: [{ type: "contactCard" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
