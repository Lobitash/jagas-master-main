export default {
  title: "Blogs",
  name: "blog",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    {
      title: "Hidden Toggle",
      name: "hiddenToggle",
      type: "boolean",
      description:
      "The default type is disabled, and enable will hide this blog",
    },
    {
      title: "Blog Post Title",
      name: "pageName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Publish Date",
      name: "publishDate",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "(Click Generate to auto complete) This will be the URL of the Blog Post.",
      options: {
        source: "blogTitle",
      },
      validation: (Rule) => Rule.required(),
    },
     {
      title: "Post Feature Image",
      name: "postFeatureImage",
      description: "What is seen in the blog post preview.",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Blog Post Summary",
      name: "blogSummary",
      description: "What is seen in the blog post preview.",
      type: "text",
      validation: (Rule) => Rule.required().max(191),
    },
    {
      title: "Blog Content",
      name: "blogContent",
      type: "array",
      of: [
        { type: "blogTextBlock" },
        { type: "blogImageBlock" },
        { type: "relatedPosts" },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
