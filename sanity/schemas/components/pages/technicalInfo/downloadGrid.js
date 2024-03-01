export default {
  title: "Downloadale Documents",
  name: "downloadGrid",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Downloadable Documents",
      name: "downloadableDocuments",
      type: "array",
      of: [{ type: "downloadableFile" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
