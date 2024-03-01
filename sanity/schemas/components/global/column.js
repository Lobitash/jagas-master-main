import { BsImage } from "react-icons/bs";

export default {
  title: "Column",
  name: "column",
  type: "object",
  fields: [
    {
      title: "Content",
      name: "columnContent",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "H6", value: "h6" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          marks: {
            decorators: [{ title: "Strong", value: "strong" }],
          },
        },
        { type: "image", icon: BsImage },
        { type: "link" },
      ],
    },
  ],
};
