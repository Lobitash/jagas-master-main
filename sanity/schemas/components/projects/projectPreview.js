import { AiFillDollarCircle } from "react-icons/ai";

export default {
  title: "Projects Preview",
  name: "projectsPreview",
  icon: AiFillDollarCircle,
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Projects List (A max of 4 Projects can be displayed)",
      name: "projectsList",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "projects" }],
        },
      ],
      validation: (Rule) => Rule.required().max(4),
    },
  ],
};
