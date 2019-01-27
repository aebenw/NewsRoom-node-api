const express = require('express');
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');

const{User} = require('./models/users');
// const {userPost} = require('./routes/userRoutes');
const app = express();
const routes = require('./routes/userRoutes');

app.use(bodyParser.json());
app.on('mount', (p) => {
  console.log(p, "on mount, p");
});

routes(app);


app.listen(3001, () => console.log("started up on port 3001"));

module.exports = {app};
