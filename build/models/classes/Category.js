"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CategoryClass {
  static async findOrCreateByName(name) {
    let cat = await this.findOne({
      name
    });

    if (!cat) {
      cat = await this.create({
        name
      });
    }

    return cat;
  }

}

var _default = CategoryClass;
exports.default = _default;
//# sourceMappingURL=Category.js.map