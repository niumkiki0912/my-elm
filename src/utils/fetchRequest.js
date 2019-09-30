import 'whatwg-fetch'
let baseUrl = 'https://elm.cangdu.org'

export default {
  post(url,data) {
    return fetch(baseUrl + url,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
  },

  get(url,params) {
    let urlSum = baseUrl + url
    let paramsArray = []
    Object.keys(params).forEach(key => {
      paramsArray.push(key+'='+params[key])
    })

    if(urlSum.search(/\?/) === -1) {
      urlSum += '?' + paramsArray.join('&')
    } else {
      urlSum += '&' + paramsArray.join('&')
    }

    return fetch(urlSum,{
      method:'GET',
    })
  }
}