const axios = require('axios');

export default async function genericReq(method, endpoint, data, token) {
  try{
    const result = await axios({
      method,
      url: `http://localhost:3001/${endpoint}`,
      headers: { Authorization: token ? `Bearer ${token}` : '' },
      data
    })

    return result
  } catch(e) {
    return(e.response)
  }
}