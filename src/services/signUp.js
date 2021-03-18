import axios from "axios"

export const passToFunction = user => {
  axios({
    method: "post",
    url: "/.netlify/functions/request",
    data: user,
    timeout: 3000,
    headers: {
      "content-type": "application/json",
    },
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}
