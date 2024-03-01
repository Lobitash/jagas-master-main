export default {
  title: "Contact Form",
  name: "contactFormText",
  type: "object",
  fields: [
    {
      title: "Form Header",
      name: "formHeader",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Form Description",
      name: "formDescription",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
