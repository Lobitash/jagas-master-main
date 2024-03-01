export default {
  title: "Header",
  name: "header",
  type: "document",
  fieldsets: [
    {
      title: "Top Bar",
      name: "topBar",
      options: { collapsible: true },
    },
    {
      title: "Menus",
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
      title: "Header Logo",
      name: "headerLogo",
      type: "image",
      fieldset: "topBar",
    },
    {
      title: "Mobile Logo",
      name: "MobileLogo",
      type: "image",
      fieldset: "topBar",
    },
    {
      title: "Header Button",
      name: "headerButton",
      type: "link",
      fieldset: "topBar",
    },
    {
      title: "Top Bar Links",
      name: "topBarLinks",
      type: "array",
      of: [{ type: "link" }],
      fieldset: "topBar",
    },
    {
      title: "Menu Tabs",
      name: "menuTabs",
      type: "array",
      of: [{ type: "menuTab" }],
      fieldset: "menus",
      validation: (Rule) => Rule.max(1),
    },
    {
      title: "Social Links",
      name: "headerSocialLinks",
      type: "array",
      of: [{ type: "socialLink" }],
      fieldset: "socials",
    },
  ],
};
