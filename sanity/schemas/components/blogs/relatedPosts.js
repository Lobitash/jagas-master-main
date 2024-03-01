export default {
  title: "Related Posts",
  name: "relatedPosts",
  type: "object",
  fields: [
    {
      title: "Header",
      name: "header",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Displayed Posts (Max display of 3)",
      name: "posts",
      type: "array",
      of: [{ type: "reference", to: { type: "blog" } }],
      validation: (Rule) => Rule.max(3).required(),
    },
  ],
};
