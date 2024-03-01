export default {
  title: "Menu Tab",
  name: "menuTab",
  type: "object",
  fields: [
    {
      title: "Menu Name",
      name: "menuName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Menu Content",
      name: "menuItems",
      type: "array",
      of: [{ type: "menu" }],
    },
  ],
};
