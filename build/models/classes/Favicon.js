"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageURL = getImageURL;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const baseURL = "https://besticon-demo.herokuapp.com/";

async function getImageURL(url) {
  let image = await _axios.default.get(`${baseURL}icon?url=${url}&size=50..150..300`);
  return image.request.res.responseUrl;
}
//# sourceMappingURL=Favicon.js.map