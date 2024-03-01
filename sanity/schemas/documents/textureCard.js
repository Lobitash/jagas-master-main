export default {
  title: "Texture",
  name: "textureCard",
  type: "document",
  fields: [
    {
      title: "Texture Name",
      name: "textureName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Texture Thumbnail",
      name: "textureThumbnail",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Texture Product Images",
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
