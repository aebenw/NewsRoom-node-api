import axios from 'axios';

const baseURL = "https://besticon-demo.herokuapp.com/"

async function getImageURL (url){
  let image = await axios.get(`${baseURL}icon?url=${url}&size=50..150..300`)

  return image.request.res.responseUrl
}

export {
  getImageURL
}
