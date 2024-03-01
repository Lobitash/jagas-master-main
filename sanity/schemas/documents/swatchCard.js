export default {
  title: "Swatch Card",
  name: "swatchCard",
  type: "document",
  fields: [
    {
      title: "Swatch Name",
      name: "swatchName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Feature Image",
      name: "featureImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Textures",
      name: "textures",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "textureCard" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
