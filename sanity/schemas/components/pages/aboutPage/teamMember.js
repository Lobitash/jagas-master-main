export default {
  title: "Team Member",
  name: "teamMember",
  type: "object",
  fields: [
    {
      title: "Team Member Name",
      name: "memberName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Team Member Image",
      name: "memberImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Team Member Role",
      name: "memberRole",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
