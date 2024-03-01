export default {
  title: "Product Slider",
  name: "productSlider",
  type: "object",
  fields: [
    {
      title: "Slider Title",
      name: "sliderTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slides",
      name: "slides",
      type: "array",
      of: [{ type: "sliderItem" }],
      validation: (Rule) => Rule.required().min(4),
    },
  ],
};
