export default {
  title: "Contact Us Page",
  name: "contactPage",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seoBlock",
      type: "seo",
      options: { collapsible: true },
    },
    {
      title: "PageContent",
      name: "pageContent",
      type: "array",
      of: [
        { type: "heroPlain" },
        { type: "wideImageBlock" },
        { type: "contactDetails" },
      ],
    },
    {
      title: "Contact Form Customer Types",
      name: "contactFormCustomerTypes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Contact Form Text",
      name: "contactFormText",
      type: "contactFormText",
    },
    {
      title: "Contact Form Thank You Message",
      name: "contactFormThankYouMessage",
      type: "blockContent",
    },
  ],
};
