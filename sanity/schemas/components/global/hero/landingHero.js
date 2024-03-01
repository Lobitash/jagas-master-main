import { ImImages } from "react-icons/im";

export default {
  title: "Landing Hero",
  name: "landingHero",
  icon: ImImages,
  type: "object",
  fields: [
    {
      title: "Hero Title",
      name: "heroTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hero Link",
      name: "HeroLink",
      type: "link",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hero Slides",
      name: "landingHeroSlides",
      type: "array",
      of: [{ type: "heroSlide" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
