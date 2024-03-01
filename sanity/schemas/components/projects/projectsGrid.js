export default {
  title: "Projects Grid",
  name: "projectsGrid",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Projects List",
      name: "projectsList",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "projects" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
