import repl from "repl";
import { app } from './server'
import { User } from './models'

const replServer = repl.start({
  prompt: "NewsRoom "
});

replServer.context.app = app;
replServer.context.User = User;
