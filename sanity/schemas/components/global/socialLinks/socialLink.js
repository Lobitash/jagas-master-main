export default {
  title: "Social Link",
  name: "socialLink",
  type: "object",
  fields: [
    {
      title: "Social Icon",
      name: "socialIcon",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link to (url):",
      name: "linkTo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
