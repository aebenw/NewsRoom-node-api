"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("../");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserClass {
  generateAuthToken() {
    const access = 'auth';

    const token = _jsonwebtoken.default.sign({
      _id: this._id.toHexString(),
      access
    }, 'abc123').toString();

    this.tokens.push({
      access,
      token
    });
    return this.save().then(() => {
      return token;
    });
  }

  static async findByToken(token) {
    let decoded;

    try {
      decoded = _jsonwebtoken.default.verify(token, 'abc123');
    } catch (e) {
      return e;
    }

    let user = await _.User.findOne({
      '_id': decoded._id,
      'tokens.token': token,
      'tokens.access': 'auth'
    });
    return user;
  }

}

var _default = UserClass;
exports.default = _default;
//# sourceMappingURL=User.js.map