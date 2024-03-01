export default {
  title: "Tabs Display",
  name: "tabsDisplay",
  type: "object",
  fields: [
    {
      title: "Tabs",
      name: "tabs",
      type: "array",
      of: [{ type: "tabItem" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
