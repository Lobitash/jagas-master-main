const axios = require("axios");
const API_ENDPOINT =
  "https://us19.api.mailchimp.com/3.0/lists/4ec8626238/members";
const querystring = require("querystring");
const apiService = require("./api.service.js");
const sanityClient = require("@sanity/client");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Content-Type": "application/json",
  Authorization:
    "Basic dXNlcjplMDFjMTUwZWYwOWFlNzU4ZGI4YTE5NTRmMDAxM2E3NC11czE5",
};

exports.handler = async (event, context) => {
  const client = sanityClient({
    projectId: "za0f67w0",
    dataset: "production",
    token:
      "sk2U7MMKZz7i402J5MimVA1ASBpW8ng7ZnPwOhS9hz3Z0cbugiI3h03buqNYZNlKDApq6oKAMRoLHd5dnAgB2oobC96FGefmA8YAJ8eJuCm1U27ioK5H2XwTGawqClrAWFeUXNQIZI5ho4TJAlL47cMKRTFl7YYfkxNZOW0zRkQGnDmVA5Rv", // we need this to get write access
    useCdn: false, // We can't use the CDN for writing
  });

  let response;

  try {
    response = await client.assets
      .upload("file", event.body.file)
      .then((asset) => {
        const fileUploadRefernce = {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        };

        const enquiryObject = {
          _type: "enquiry",
          email: "jsssgshurley07@gmail.com",
          file: fileUploadRefernce,
        };

        return transaction.createOrReplace(enquiryObject);
      })
      .then((sanityResponse) => {
        sanityResponse;
        // FIND URL LINK OF FILE AND CONNECT IT TO DATA BEING POSTED TO MAILCHIMP
        apiService.post(API_ENDPOINT, event.body, headers);
      });
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      "Access-Control-Allow-Origin": "*",
      /* Required for cookies, authorization headers with HTTPS */
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      data: response.data,
    }),
  };
};
