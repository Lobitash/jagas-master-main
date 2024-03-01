export default {
  title: "Statement",
  name: "statement",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "statementName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Role or Compnany",
      name: "statementRole",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Testimonial Statement",
      name: "statementText",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
