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

  async getLatestArticles(){
    console.log("inside function")
    let response = await this.get(`top-headlines?language=en&country=us&category=general&pageSize=5&` + `${this.key}`)
    console.log(response)
    return response.articles.map(article => this.articleReducer(article))
  }

  sourceReducer(source){
    const {id, name, description, url} = source
    return {
      givenID: id,
      name,
      description,
      url
    }
  }

  articleReducer(article){
    const { title } = article
    return {
      title
    }
  }

}

export default NewsAPI
