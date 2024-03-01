import { ImImages } from "react-icons/im";

export default {
  title: "Hero",
  name: "homeHero",
  icon: ImImages,
  type: "object",
  fields: [
    {
      name: "heroText",
      type: "blockContent",
    },
    {
      name: "links",
      type: "array",
      of: [{ type: "link" }],
    },
    {
      name: "heroSlides",
      type: "array",
      of: [{ type: "heroSlide" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
