// import {client} from '../server'


// export function topStoryCache(req, res, next){
  // client.get("topStories", (err, data) => {
  //   if(err) throw err;
  //   // console.log(data, "in cache function")
  //   if(data){
  //     // console.log(data)
  //     res.status(200).send(data)
  //   } else {
      // next()
  //   }
  // })
// }
// export function sourceCache(req, res, next){
//   client.get("sources", (err, data) => {
//     if(err || !data){
//       next()
//     } else if(data){
//       res.status(200).send(data)
//     }
//   })
// }

// class Redis {
//   constructor(){
//     this.client = redis.createClient();
//   }
//
//   sourceCache = () => {
//
//   }
//
//
// }
