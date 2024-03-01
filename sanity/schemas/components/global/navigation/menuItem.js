export default {
  title: "Menu Item",
  name: "menuItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      description:
        "This title isn't necessary, just keep same with the Link Text blow",
      type: "string",
    },
    {
      title: "Tag",
      name: "tag",
      description:
        "Turn it on, if you only want it to be a tag for its child links",
      type: "boolean",
    },
    {
      title: "Links",
      name: "link",
      type: "link",
    },
    {
      title: "Nested Links",
      name: "nestedlinks",
      description: "Nested link only will shown on mobile menu",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
