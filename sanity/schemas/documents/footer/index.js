export default {
  title: "Footer",
  name: "footer",
  type: "document",
  fieldsets: [
    {
      title: "Footer Menu",
      name: "menus",
      options: { collapsible: true },
    },
    {
      title: "Social Links",
      name: "socials",
      options: { collapsible: true },
    },
  ],
  fields: [
    {
      title: "Footer Social Links",
      name: "footerSocialLinks",
      type: "array",
      of: [{type: "socialLink"}],
      fieldset: "socials",

    },
    {
      title: "Footer Menu",
      name: "menus",
      type: "array",
      of: [{ type: "menu" }],
      fieldset: "menus",
    },
  ],
};
