export default {
  title: "Product Page",
  name: "products",
  type: "document",
  fieldsets: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    {
      title: "Product Preview",
      name: "productPreview",
      description:
        "What is seen inside a Product Preview Component on other pages",
      options: { collapsible: true },
    },
    {
      title: "Product Page",
      name: "productPage",
      description: "The content of the Products page",
      options: { collapsible: true },
    },
  ],
  fields: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    {
      title: "Page Name",
      name: "pageName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Page Category",
      name: "pageCategory",
      type: "string",
      options: {
        list: [
          { title: "Paving", value: "paving" },
          { title: "Precast", value: "precast" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "(Click Generate to auto complete) This will be the URL of the article.",
      options: {
        source: "pageName",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Preview",
      name: "productPagePreview",
      type: "productPreview",
      fieldset: "productPreview",
    },
    {
      title: "Page Content",
      name: "pageContent",
      type: "array",
      of: [
        { type: "productHero" },
        { type: "landingHero" },
        { type: "leftRightBlock" },
        { type: "previewProducts" },
        { type: "customProductPreview" },
        { type: "rangeInformationBlock" },
        { type: "productSlider" },
        { type: "cta" },
        { type: "textSection" },
        { type: "projectsPreview" },
        { type: "productRangeTabs" },
      ],
      fieldset: "productPage",
    },
  ],
};
