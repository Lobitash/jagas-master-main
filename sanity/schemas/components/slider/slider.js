import { BsThreeDots } from "react-icons/bs";

export default {
  title: "Slider",
  name: "slider",
  icon: BsThreeDots,
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
      validation: (Rule) => Rule.required(),
    },
  ],
};
