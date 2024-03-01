import { FaColumns } from "react-icons/fa";

export default {
  title: "Left Right Content Block",
  icon: FaColumns,
  name: "leftRightBlock",
  type: "object",
  fields: [
    {
      title: "Block Title",
      name: "blockTitle",
      type: "string",
    },
    {
      title: "Block Text",
      name: "leftRightText",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Block Image",
      name: "blockImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Align Image to the right?",
      name: "imageAlignRight",
      type: "boolean",
    },
    { title: "Block Link", name: "blockLink", type: "link" },
  ],
};
