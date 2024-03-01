export default {
  title: "Home Menu",
  name: "homeMenuTab",
  type: "object",
  fields: [
    {
      title: "Tab Title",
      name: "tabTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    
    {
      title: "Tab Link Url",
      name: "tabLinkUrl",
      description: "example '/paving'",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    
    {
      title: "Tab Images",
      name: "tabImages",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    },
    
  ],
};
