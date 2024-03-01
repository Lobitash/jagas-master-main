export default {
  title: "Testimonials",
  name: "testimonials",
  type: "object",
  fields: [
    {
      title: "Header",
      name: "header",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Sub Header",
      name: "subHeader",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Testimonial Statements",
      name: "statements",
      description:
        "Edit testimonials under > Categories > Testimonials. This component will use those statements.",
      type: "string",
      readOnly: true,
    },
  ],
};
