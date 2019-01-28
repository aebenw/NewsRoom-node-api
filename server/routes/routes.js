const user = require('../controller/userController');
const news = require('../controller/newsController');


module.exports = function (app) {

  app.route('/users')
    .post(user.createUser);

  app.route('/news')
    .get(news.callSources);

};

// --------------------------
// 'use strict';
//
// module.exports = function(app) {
// 	var todoList = require('../controllers/todoListController');
//
// 	// todoList Routes
// 	app.route('/tasks')
// 		.get(todoList.list_all_tasks)
// 		.post(todoList.create_a_task);
//
// 	app.route('/tasks/:taskId')
// 		.get(todoList.read_a_task)
// 		.put(todoList.update_a_task)
// 		.delete(todoList.delete_a_task);
// };
