import { Source, Category } from '../'
import { getImageURL } from './Favicon'


class SourceClass {

  addArticle(article){
    this.articles.push(article);
    this.save().then(null, e => e)
  }

  static async findOrCreate(source){
    let found = await this.findOne({id: source.id})
    // console.log(found)
    if(!found || !found._doc){
      console.log("inside conditional")
      let image = await getImageURL(source.url)
      found = await this.create(source)
      found.img = image
    }
      return found;
  }

  static async findOrCreateWithCat(source){
    const {category} = source
    let cat = await Category.findOrCreateByName(category)
    delete source["category"]
    let foundSource = await Source.findOrCreate(source)


    cat.sources.push(foundSource._id);
    await cat.save()
    foundSource.category = cat
    await foundSource.save()

    return foundSource
  }
}

export default SourceClass
