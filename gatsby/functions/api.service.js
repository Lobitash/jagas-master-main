const axios = require("axios");
//Logger

function fetch(path, headers) {
  return axios
    .get(path, {
      headers: headers,
    })
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      // log.info('GET INFO:', response.data, 'INFO at', new Date()
      // 	.toJSON());

      // console.log(response.headers);
      // console.log(request.headers);

      return response.data;
    })
    .catch(function (error) {
      // console.log("fetch error" + error);
      // log.error("GET ERROR:", path, "error at", new Date().toJSON());
      return error;
    });
}

function post(path, params, headers) {
  return axios
    .post(path, params, {
      headers: headers,
    })
    .then(function (response) {
      // console.log(response.data);
      // log.info('POST INFO:', response.data, 'INFO at', new Date()
      // 	.toJSON());

      return response.data;
    })
    .catch(function (error) {
      // log.error("POST ERROR:", error, "error at", new Date().toJSON());
      return error;
    });
}

function patch(path, params, headers) {
  return axios
    .patch(path, params, {
      headers: headers,
    })
    .then(function (response) {
      // console.log(response.data);

      // log.info("PATCH INFO:", response.status, "INFO at", new Date().toJSON());

      return response.data;
    })
    .catch(function (error) {
      // log.error("PATCH ERROR:", error, "error at", new Date().toJSON());
      return error;
    });
}

function put(path, params, headers) {
  return axios
    .put(path, params, {
      headers: headers,
    })
    .then(function (response) {
      // console.log(response.data);

      // log.info("PATCH INFO:", response.status, "INFO at", new Date().toJSON());

      return response.data;
    })
    .catch(function (error) {
      // log.error("PATCH ERROR:", error, "error at", new Date().toJSON());
      return error;
    });
}

module.exports = { fetch, post, patch, put };
