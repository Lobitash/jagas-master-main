export default {
  title: "Our Team",
  name: "ourTeam",
  type: "object",
  fields: [
    {
      title: "Header",
      name: "header",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Team Members",
      name: "teamMembers",
      type: "array",
      of: [{ type: "teamMember" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
