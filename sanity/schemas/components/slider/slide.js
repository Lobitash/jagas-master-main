export default {
  title: "Slider Item",
  name: "sliderItem",
  type: "object",
  fields: [
    {
      title: "Slide Content",
      name: "slideContent",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: "slideContent.asset",
    },
    prepare({ media }) {
      return {
        title: "Slide Image",
        media: media,
      };
    },
  },
};
