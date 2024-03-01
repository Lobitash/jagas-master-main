export default {
  title: "Plain Hero",
  name: "heroPlain",
  type: "object",
  fields: [
    {
      title: "Hero Text",
      name: "heroText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ]
}