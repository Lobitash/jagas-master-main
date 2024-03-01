export default {
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    {
      title: "Project Name",
      name: "projectName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "(Click Generate to auto complete) This will be the URL of the Project Post.",
      options: {
        source: "projectName",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Precast", value: "precast" },
          { title: "Paving", value: "paving" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Client",
      name: "client",
      type: "string",
      options: { collapsible: true },
    },
    {
      title: "Team",
      name: "team",
      type: "string",
      options: { collapsible: true },
    },
    {
      title: "Value",
      name: "value",
      type: "string",
      options: { collapsible: true },
    },
    {
      title: "Location",
      name: "location",
      type: "string",
      options: { collapsible: true },
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
      options: { collapsible: true },
    },
    {
      title: "End Date",
      name: "endDate",
      type: "date",
      options: { collapsible: true },
    },
    {
      title: "Old Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "New Description",
      name: "newDescription",
      type: "column",
    },
    {
      title: "Project Images",
      name: "projectImages",
      description: "The first image will be the feature image ",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Project Preview",
      name: "projectPreview",
      type: "projectsPreview",
      options: { collapsible: true },
    },
  ],
};
