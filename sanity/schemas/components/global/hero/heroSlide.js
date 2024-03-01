export default {
  title: "Hero Slide",
  name: "heroSlide",
  type: "object",
  fields: [
    {
      title: "Slide Image",
      name: "slideImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: "slideImage.asset",
    },
    prepare({ media }) {
      return {
        title: "Slide Image",
        media: media,
      };
    },
  },
};
