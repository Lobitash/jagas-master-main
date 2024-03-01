export default {
  title: "Top Navigation",
  name: "navigation",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      hidden: true,
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
    {
      title: "Menu Items",
      name: "menuItems",
      type: "array",
      of: [{ type: "menuItem" }],
    },
    {
      title: "Mobile Menu Items",
      name: "mobileMenuItems",
      type: "array",
      of: [{ type: "menuItem" }],
    },
  ],
};
