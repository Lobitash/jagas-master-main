export default {
  title: "Menu",
  name: "menu",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Menu Name Link",
      name: "menuNameLink",
      description: "example '/precast' (Leave empty if you dont want this to be a clickable link).",
      type: "string",
    },
    {
      title: "Menu Items",
      name: "menuItems",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
