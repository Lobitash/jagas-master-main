export default {
  title: "Social Links",
  name: "socialLinks",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      hidden: true,
      validation: (Rule) => Rule.required(),

    },
    {
      title: "Social Links",
      name: "socialLinks",
      type: "array",
      of: [
        {type: "socialLink"}
      ],
      validation: (Rule) => Rule.required(),

    }
  ]
}