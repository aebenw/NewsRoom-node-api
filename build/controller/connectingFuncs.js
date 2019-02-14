"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populateRelationships = populateRelationships;
exports.asyncMapping = asyncMapping;

function populateRelationships(source, article) {
  source.addArticle(article);
  article.source(source);
} ///       in sequence


async function asyncMapping(objects, cb) {
  let res = [];

  for (const object of objects) {
    let result = await cb(object);
    res.push(result);
  }

  return res;
} //////     in parrallel
// async function asyncMapping (objects, callback){
//   return await Promise.all(objects.map(async(obj) => {
//     debugger
//     let res = await callback(obj)
//       return res
//     }))
//   }
//# sourceMappingURL=connectingFuncs.js.map