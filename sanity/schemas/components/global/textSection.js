import { FaParagraph } from "react-icons/fa";

export default {
  title: "Text Section",
  icon: FaParagraph,
  name: "textSection",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Text Content",
      name: "textContent",
      type: "blockContent",
    },
  ],
};
