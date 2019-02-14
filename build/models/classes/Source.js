"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("../");

var _Favicon = require("./Favicon");

class SourceClass {
  addArticle(article) {
    this.articles.push(article);
    this.save().then(null, e => e);
  }

  static async findOrCreate(source) {
    let found = await this.findOne({
      id: source.id
    });

    if (!found || !found._doc) {
      let image = await (0, _Favicon.getImageURL)(source.url);
      found = await this.create(source);
      found.img = image;
    }

    return found;
  }

  static async findOrCreateWithCat(source) {
    const {
      category
    } = source;
    let cat = await _.Category.findOrCreateByName(category);
    delete source["category"];
    let foundSource = await _.Source.findOrCreate(source);

    if (!foundSource.category) {
      foundSource.category = cat._id;
      await foundSource.save();
      cat.sources.push(foundSource._id);
      await cat.save();
    }

    return foundSource;
  }

}

var _default = SourceClass;
exports.default = _default;
//# sourceMappingURL=Source.js.map