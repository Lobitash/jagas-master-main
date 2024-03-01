const sanityClient = require("@sanity/client")

const client = sanityClient({
  projectId: "za0f67w0",
  dataset: "production",
  token:
    "sk2U7MMKZz7i402J5MimVA1ASBpW8ng7ZnPwOhS9hz3Z0cbugiI3h03buqNYZNlKDApq6oKAMRoLHd5dnAgB2oobC96FGefmA8YAJ8eJuCm1U27ioK5H2XwTGawqClrAWFeUXNQIZI5ho4TJAlL47cMKRTFl7YYfkxNZOW0zRkQGnDmVA5Rv", // we need this to get write access
  useCdn: flase, // We can't use the CDN for writing
})

  return client.assets.upload("file", buffer).then((asset) => {

    const fileUploadRefernce = {
      _type: "file",
      asset: {
        _type: "reference",
        _ref: asset._id,
      },
    }

    const enquiryObject = {
      _type: "enquiry",
      email: email,
      file: fileUploadRefernce,
    }

    return transaction.createOrReplace(enquiryObject);
  })