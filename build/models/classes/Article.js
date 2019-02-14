"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _news = require("../news");

class ArticleClass {
  static async findOrCreate(data) {
    let article = await this.findOne({
      title: data.title
    }).populate('source', 'name');

    if (!article) {
      article = await this.create(data);
    }

    return article;
  }

  static async findOrCreateWithSource(article) {
    let {
      source: {
        id,
        name
      }
    } = article;
    let source = await _news.Source.findOne({
      id,
      name
    });
    delete article["source"];
    let articleDoc = await _news.Article.findOrCreate(article);

    if (source && !articleDoc.source) {
      await source.addArticle(articleDoc);
      articleDoc.setSource(source);
    }

    articleDoc = await articleDoc.populate('source', 'name');
    return articleDoc;
  } // setSource(source){
  //     this.source = source;
  //     this.save().then(null, e => e)
  // }


  setSource({
    _id,
    name
  }) {
    this.source = {
      _id,
      name
    };
    this.save().then(null, e => e);
  }

  addUser(user) {
    let foundUser = this.users.find(follower => follower.id === user.id);

    if (!foundUser) {
      this.users.push(user);
    }
  }

}

var _default = ArticleClass;
exports.default = _default;
//# sourceMappingURL=Article.js.map