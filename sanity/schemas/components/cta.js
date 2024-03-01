export default {
  title: "CTA",
  name: "cta",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "CTA Text",
      name: "ctaText",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "CTA Link",
      name: "ctaLink",
      type: "link",
      validation: (Rule) => Rule.required(),
    },
  ],
};
