export default {
  title: "File Test",
  name: "downloadableFile",
  type: "object",
  fields: [
    {
      title: "Document Name",
      name: "fileName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Document Image",
      name: "documentImage",
      type: "image",  
      validation: (Rule) => Rule.required(),
    },  
    {
      title: "File",
      name: "fileObject",
      type: "file",  
      validation: (Rule) => Rule.required(),
    },
  ],
};
