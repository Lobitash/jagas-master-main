export default {
  title: "Contact Card",
  name: "contactCard",
  type: "object",
  fields: [
    {
      title: "Contact Detail Name",
      name: "contactDetailName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Contact Detail Value",
      name: "contactDetailValue",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
