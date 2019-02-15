# Welcome to NewsRoom

NewsRoom uses the [NewsAPI](NewsAPI.org) to compile the top headlines and news sources.

You can save articles and view them later as well. You can also see all the articles published by a news Source.

The client side uses a react frontend with a redux store.
The api uses Node.js with Express and mongoDB.

[Heroku Url](https://protected-bayou-40913.herokuapp.com/)

*Please be patient! Running on the free Dyno so it'll take a moment to boot up*


## Currently undergoing construction

### For Backend

* Currently in the process of implementing ApolloGraphQL to simplify GET requests to third party api's. Specifically the NewsAPI, in order to get only the information I need rather than sort through it all.

* Testing out Redis to cache both news sources and top headlines. I've successfully managed to cache sources in development. I'm working on creating a linked list structure for the headlines which updates when there's a new batch of stories.

### For Frontend

* CSS clean up needs to be done.

* Working on a search function for sources.
