
function populateRelationships(source, article){
  source.articles.push(article);
  article.source = source;

  source.save()
  .then(doc => console.log(), e => console.log(e));
  article.save()
  .then(doc => console.log(), e => console.log(e));
}

function populateManyToMany(obj1, obj2){
  source.articles.push(article);
  article.source = source;

  source.save()
  .then(doc => console.log(), e => console.log(e));
  article.save()
  .then(doc => console.log(), e => console.log(e));
}

async function asyncMapping (objects, callback){
  return objects.map(async(obj) => await callback(obj))
}

module.exports = {
  populateRelationships,
  asyncMapping
};
