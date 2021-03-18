const axios = require("axios")

exports.handler = async function (event, context) {
  return axios({
    method: "post",
    url:
      "https://n8n.bastiankroggel.com/webhook-test/feadc093-b57f-4bd8-826c-cdb626c26e4b",
    data: event.body,
    timeout: 2000,
    headers: {
      "content-type": "application/json",
    },
  })
    .then(response => {
      let body = response.data
      return {
        statusCode: 200,
        // body: JSON.stringify({ return: body }),
        // body: JSON.stringify({ body }),
        body: JSON.stringify(body),
      }
    })
    .catch(error => {
      //console.log("error")
    })
}
