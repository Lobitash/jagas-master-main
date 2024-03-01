export default {
  title: "Navigation Icon Button",
  name: "navigationIconButton",
  type: "object",
  fields: [{
      title: "Link Text",
      name: "linktext",
      type: "string",
    },
    {
      title: "Link Icon",
      name: "icon",
      type: "image",
    },
    {
      title: "URL (href)",
      name: "url",
      type: "string",
    },
    {
      title: "Internal Link",
      name: "internallink",
      description: "If the link is link to other page of this site, please turn it on and use relative path",
      type: "boolean",
    },
    {
      title: "Open in new Window",
      name: "newwindow",
      description: "Open the link in a new window, only will work when it is not a internal link",
      type: "boolean",
    },
  ],
};