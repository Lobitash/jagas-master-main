export default {
  title: "SEO",
  name: "seo",
  description:
    "All fields in this block are optional, seo for this target page",
  type: "object",
  fields: [
    {
      title: "Page title",
      name: "pageTitle",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      hidden: true,
    },
    {
      title: "Page description",
      name: "pageDescription",
      type: "text",
    },
    {
      title: "Image",
      description: "Used in Facebook OG share and Twitter cards",
      name: "ogImage",
      type: "image",
    },
    {
      title: "Page key words",
      name: "pageKeyWords",
      description:
        "separate by comma and space, e.g. keyword1, keyword2, key..",
      type: "string",
    },
  ],
};
