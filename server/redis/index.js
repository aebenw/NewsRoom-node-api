import { client } from '../config/config'
import {
  getMostRecent,
  callArticles
 } from '../controller/articleController'


export async function topStoryCache(req, res, next){
  await checkForNewStories()
  client.lrange("topStories", 0, 20, (err, data) => {
    if(err) throw err;
    if(data){
      // let stringed = data.map(story => JSON.stringify(story))
      res.status(200).send(data)
    } else {
      next()
    }
  })
}

export function sourceCache(req, res, next){
  client.get("sources", (err, data) => {
    if(err || !data){
      next()
    } else if(data){
      res.status(200).send(data)
    }
  })
}

export function stringifyAndAddToList(list, items){
    items.map(article => {
      client.sadd('mostRecent', article.title)
      let stringed = JSON.stringify(article);
      client.lpush(list, stringed)
    })
}


// function to see if top story cache needs to be updated
async function checkForNewStories(){
  // Calling the API for the 5 most recent stories
  let newStories = await getMostRecent();

  for(let i = 0; i < newStories.length; i++){
    let broken
    // checking to see if these 5 stories are in the redis list
    // of the 5 most recent stories
    await client.sismember(
      'mostRecent', newStories[i].title,
      async (err, reply) => {
        // if yes, then we need to see if we need to update the list at all
        if(reply === 1){
          // if its the first iteration, then we don't have to do anything
          if(i !== 0){
            //if i > 0, then we need to update the top stories list with the stories we just pulled
            let cacheAddition = newStories.splice(i);
            stringifyAndAddToList('topStories', cacheAddition)
          }
          // in both cases we can break out of the loop
          broken = true
        }
      }
    )
    // if the 5 most recent stories from the API call
    // don't match at all, then we should refresh the whole cache
    if(broken){
      break
    }  else await callArticles()
  }
}
