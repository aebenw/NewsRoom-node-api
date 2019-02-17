import repl from "repl";
import { app } from './server'
import { User } from './models'
const article = require('./controller/articleController');

const replServer = repl.start({
  prompt: "NewsRoom "
});

replServer.context.app = app;
replServer.context.User = User;
replServer.context.article = article;
