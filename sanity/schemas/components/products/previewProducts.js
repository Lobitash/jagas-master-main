export default {
  title: "Preview Products",
  name: "previewProducts",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Preview Style",
      name: "previewStyle",
      description: "How the product previews are displayed on the front end",
      type: "string",
      options: {
        list: [
          { title: "Standard", value: "standard" },
          { title: "Icon", value: "icon" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Products to Preview",
      name: "productsArray",
      type: "array",
      of: [{ type: "reference", to: [{ type: "products" }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
