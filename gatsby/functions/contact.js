const axios = require("axios");
const API_ENDPOINT =
  "https://us19.api.mailchimp.com/3.0/lists/4ec8626238/members";
const querystring = require("querystring");
const apiService = require("./api.service.js");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Content-Type": "application/json",
  Authorization:
    "Basic dXNlcjplMDFjMTUwZWYwOWFlNzU4ZGI4YTE5NTRmMDAxM2E3NC11czE5",
};

exports.handler = async (event, context) => {
  let response;
  try {
    response = await apiService.post(API_ENDPOINT, event.body, headers);
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
