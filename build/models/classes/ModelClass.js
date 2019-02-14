"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Attempt at super class to hold methods for all Models
// like findOrCreateBy
class ModelClass {
  constructor(model) {
    console.log(model);
    this.model = model;
  }

  static async findOrCreateByID(instance) {
    let answer = await this.model.findOne({
      id: instance
    });

    if (!answer) {
      answer = await this.model.create({
        identifier: instance
      });
    }

    return answer;
  }

  static async findOrCreate(identifier, instance) {
    let answer = await this.model.findOne({
      [identifier]: instance
    });

    if (!answer) {
      answer = await this.model.create({
        identifier: instance
      });
    }

    return answer;
  }

}

var _default = ModelClass;
exports.default = _default;
//# sourceMappingURL=ModelClass.js.map