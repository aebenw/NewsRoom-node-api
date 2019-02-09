import { RESTDataSource } from 'apollo-datasource-rest';
import { API } from '../../constants/api'

class NewsAPI extends RESTDataSource {
  constructor(){
    super();
    this.baseURL = "https://newsapi.org/v2/"
    this.key = `apiKey=${API}`
  }

  async getSources(){
    let response = await this.get(`sources?${this.key}`)
    console.log(response.sources[0])
    return response.sources.map(source => this.sourceReducer(source))
  }

  sourceReducer(source){
    const {id, name, description, url, category} = source
    return {
      givenID: id,
      name,
      description,
      url
    }
  }

}

export default NewsAPI
