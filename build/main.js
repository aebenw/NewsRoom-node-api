/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/config/config.js":
/*!*********************************!*\
  !*** ./server/config/config.js ***!
  \*********************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(/*! dotenv */ "dotenv").config();


process.env.MONGODB_URI = 'mongodb://localhost:27017/news'; // const env = process.env.NODE_ENV || 'development';
//
// if(env === 'test'){
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/news-test'
// } else if(env === 'graph') {
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/news-graph'
// } else if(env === 'development') {
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/news'
// }
// configuring Redis for Heroku/Dev

var client;

if (process.env.REDISTOGO_URL) {
  var rtg = __webpack_require__(/*! url */ "url").parse(process.env.REDISTOGO_URL);

  client = redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(":")[1]);
} else {
  client = redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient();
}



/***/ }),

/***/ "./server/controller/articleController.js":
/*!************************************************!*\
  !*** ./server/controller/articleController.js ***!
  \************************************************/
/*! exports provided: callArticles, showArticle, getMostRecent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callArticles", function() { return callArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArticle", function() { return showArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMostRecent", function() { return getMostRecent; });
/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! newsapi */ "newsapi");
/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(newsapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./server/config/config.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./server/models/index.js");
/* harmony import */ var _connectingFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connectingFuncs */ "./server/controller/connectingFuncs.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var newsapi = new newsapi__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.NEWS_API);



var callArticles =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var articles, response, i, story;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return newsapi.v2.topHeadlines({
              language: 'en',
              country: 'us',
              category: "general"
            });

          case 2:
            articles = _context.sent;
            _context.next = 5;
            return Object(_connectingFuncs__WEBPACK_IMPORTED_MODULE_3__["asyncMapping"])(articles.articles, _models__WEBPACK_IMPORTED_MODULE_2__["Article"].findOrCreateWithSource);

          case 5:
            response = _context.sent;
            // res.status(200).send(response)
            //  Redis Caching
            response.map(function (article) {
              var stringed = JSON.stringify(article);
              _config_config__WEBPACK_IMPORTED_MODULE_1__["client"].lpush('topStories', stringed);
            });

            for (i = 0; i < 5; i++) {
              story = response[i]._doc.title;
              _config_config__WEBPACK_IMPORTED_MODULE_1__["client"].sadd('mostRecent', story);
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function callArticles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var showArticle =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, article;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _models__WEBPACK_IMPORTED_MODULE_2__["Article"].findById(id).populate('source', 'name');

          case 3:
            article = _context2.sent;
            res.status(200).send(JSON.stringify(article, undefined, 2));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function showArticle(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getMostRecent =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var articles;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return newsapi.v2.topHeadlines({
              language: 'en',
              country: 'us',
              category: "general",
              pageSize: 5
            });

          case 2:
            articles = _context3.sent;
            return _context3.abrupt("return", articles.articles);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getMostRecent() {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./server/controller/commentController.js":
/*!************************************************!*\
  !*** ./server/controller/commentController.js ***!
  \************************************************/
/*! exports provided: postComment, showComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postComment", function() { return postComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showComment", function() { return showComment; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./server/models/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var postComment = function postComment(req, res) {
  _models__WEBPACK_IMPORTED_MODULE_0__["Comment"].create({
    content: req.body.content,
    user: req.body.user
  }).then(function (doc) {
    res.status(200).send(doc);
  }, function (e) {
    return res.status(400).send(e);
  });
};
var showComment =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _models__WEBPACK_IMPORTED_MODULE_0__["Comment"].findById(req.params.id).populate({
              path: 'user',
              select: 'name'
            }).exec().then(function (doc) {
              res.status(200).send(doc);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function showComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./server/controller/connectingFuncs.js":
/*!**********************************************!*\
  !*** ./server/controller/connectingFuncs.js ***!
  \**********************************************/
/*! exports provided: populateRelationships, asyncMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateRelationships", function() { return populateRelationships; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncMapping", function() { return asyncMapping; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function populateRelationships(source, article) {
  source.addArticle(article);
  article.source(source);
} ///       in sequence


function asyncMapping(_x, _x2) {
  return _asyncMapping.apply(this, arguments);
} //////     in parrallel
// async function asyncMapping (objects, callback){
//   return await Promise.all(objects.map(async(obj) => {
//     debugger
//     let res = await callback(obj)
//       return res
//     }))
//   }


function _asyncMapping() {
  _asyncMapping = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(objects, cb) {
    var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, object, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = objects[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 15;
              break;
            }

            object = _step.value;
            _context.next = 10;
            return cb(object);

          case 10:
            result = _context.sent;
            res.push(result);

          case 12:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 21:
            _context.prev = 21;
            _context.prev = 22;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 24:
            _context.prev = 24;

            if (!_didIteratorError) {
              _context.next = 27;
              break;
            }

            throw _iteratorError;

          case 27:
            return _context.finish(24);

          case 28:
            return _context.finish(21);

          case 29:
            return _context.abrupt("return", res);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28]]);
  }));
  return _asyncMapping.apply(this, arguments);
}



/***/ }),

/***/ "./server/controller/sourceController.js":
/*!***********************************************!*\
  !*** ./server/controller/sourceController.js ***!
  \***********************************************/
/*! exports provided: callSources, showSource, searchSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callSources", function() { return callSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSource", function() { return showSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSources", function() { return searchSources; });
/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! newsapi */ "newsapi");
/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(newsapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./server/models/index.js");
/* harmony import */ var _connectingFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectingFuncs */ "./server/controller/connectingFuncs.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./server/config/config.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var newsapi = new newsapi__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.NEWS_API);



var callSources =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var response, answer, cachedSources;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return newsapi.v2.sources({
              language: 'en',
              country: 'us',
              category: "general"
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return Object(_connectingFuncs__WEBPACK_IMPORTED_MODULE_2__["asyncMapping"])(response.sources, _models__WEBPACK_IMPORTED_MODULE_1__["Source"].findOrCreateWithCat);

          case 5:
            answer = _context.sent;
            res.status(200).send(answer); // Redis Caching for news sources
            // a lot of work is done to fetch their sources
            // and to get their pictures

            cachedSources = JSON.stringify(answer);
            _config_config__WEBPACK_IMPORTED_MODULE_3__["client"].set('sources', cachedSources);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function callSources(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var showSource = function showSource(req, res) {
  var id = req.params.id;
  var source = _models__WEBPACK_IMPORTED_MODULE_1__["Source"].findById(id);
  source.populate({
    path: 'articles',
    select: "author title description url urlToImage content"
  }).exec(function (err, posts) {
    posts.articles.reverse();
    res.status(200).send(JSON.stringify(posts, undefined, 2));
  });
};
var searchSources =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var sources;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _models__WEBPACK_IMPORTED_MODULE_1__["Source"].find({
              id: new RegExp(req.body.source)
            });

          case 2:
            sources = _context2.sent;
            res.status(200).send(sources);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function searchSources(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./server/controller/userController.js":
/*!*********************************************!*\
  !*** ./server/controller/userController.js ***!
  \*********************************************/
/*! exports provided: createUser, login, favArticle, followSource, savedArticles, retrieveSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favArticle", function() { return favArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followSource", function() { return followSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savedArticles", function() { return savedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveSession", function() { return retrieveSession; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./server/models/index.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./server/server.js");
/* harmony import */ var _connectingFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectingFuncs */ "./server/controller/connectingFuncs.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var createUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var user, token, errors, key;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models__WEBPACK_IMPORTED_MODULE_0__["User"].create(req.body);

          case 3:
            user = _context.sent;
            _context.next = 6;
            return user.generateAuthToken();

          case 6:
            token = _context.sent;
            res.status(200).send({
              user: user,
              token: token
            });
            _context.next = 16;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            // ************* Not super flushed out, need to return back to.
            errors = [];
            if (_context.t0.errmsg) errors.push("Email already taken");

            if (_context.t0.errors) {
              for (key in _context.t0.errors) {
                if (_context.t0.errors[key].message) errors.push(_context.t0.errors[key].message);
              }
            }

            res.send({
              errors: errors
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var login =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models__WEBPACK_IMPORTED_MODULE_0__["User"].findOne({
              email: req.body.email
            });

          case 3:
            user = _context2.sent;

            if (user) {
              if (user.password === req.body.password) {
                res.send({
                  user: user,
                  token: user.tokens[0].token
                });
              } else res.send({
                errors: ['password is incorrect']
              });
            } else res.send({
              errors: ['email does not exist']
            });

            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.send(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var favArticle =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var user, article;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _models__WEBPACK_IMPORTED_MODULE_0__["User"].findById(req.body.userID);

          case 2:
            user = _context3.sent;
            _context3.next = 5;
            return _models__WEBPACK_IMPORTED_MODULE_0__["Article"].findById(req.body.articleID);

          case 5:
            article = _context3.sent;
            user.articles.push(article);
            article.users.push(user);
            user.save().then(null, function (e) {
              return e;
            });
            article.save().then(null, function (e) {
              return e;
            });
            res.status(200).send({
              success: true
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function favArticle(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var followSource =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var user, source;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models__WEBPACK_IMPORTED_MODULE_0__["User"].findById(req.body.userID).then(function (doc) {
              return doc;
            });

          case 2:
            user = _context4.sent;
            _context4.next = 5;
            return _models__WEBPACK_IMPORTED_MODULE_0__["Source"].findById(req.body.sourceID).then(function (doc) {
              return doc;
            });

          case 5:
            source = _context4.sent;
            user.sources.push(source);
            source.users.push(user);
            user.save().then(null, function (e) {
              return e;
            });
            source.save().then(null, function (e) {
              return e;
            });
            res.status(200).send(source);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function followSource(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var savedArticles =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var articles, foundArticles;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            articles = req.body.articles;
            _context6.next = 3;
            return Promise.all(articles.map(
            /*#__PURE__*/
            function () {
              var _ref6 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee5(article) {
                var found;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _models__WEBPACK_IMPORTED_MODULE_0__["Article"].findById(article);

                      case 2:
                        found = _context5.sent;
                        return _context5.abrupt("return", found);

                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));

              return function (_x11) {
                return _ref6.apply(this, arguments);
              };
            }()));

          case 3:
            foundArticles = _context6.sent;
            res.status(200).send(JSON.stringify(foundArticles, undefined, 2));

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function savedArticles(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var retrieveSession = function retrieveSession(req, res) {
  res.status(200).send(req.user);
};
_server__WEBPACK_IMPORTED_MODULE_1__["passport"].serializeUser(function (userId, done) {
  done(null, userId);
});
_server__WEBPACK_IMPORTED_MODULE_1__["passport"].deserializeUser(function (userId, done) {
  done(null, userId);
});

/***/ }),

/***/ "./server/db/mongoose.js":
/*!*******************************!*\
  !*** ./server/db/mongoose.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.promise = global.Promise;
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI);
var db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection; // db.dropDatabase()
// db.dropCollection('sources')

db.on('error', function (err) {
  return console.log(err);
});
db.on('open', function () {
  return console.log("success on ".concat(process.port));
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./server/middleware/index.js":
/*!************************************!*\
  !*** ./server/middleware/index.js ***!
  \************************************/
/*! exports provided: authenticate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./server/models/index.js");

var authenticate = function authenticate(req, res, next) {
  var token = req.body.token;
  _models__WEBPACK_IMPORTED_MODULE_0__["User"].findByToken(token).then(function (user) {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch(function (e) {
    res.status(401).send();
  });
};

/***/ }),

/***/ "./server/models/Comments.js":
/*!***********************************!*\
  !*** ./server/models/Comments.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId;
var CommentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  content: {
    type: String
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  article: {
    type: ObjectId,
    ref: 'Articles'
  }
}); //*****WORK ON MIDDLEWARE FOR AUTOMATIC POPULATION***//
// CommentSchema.post('find', async (doc) => {
//   console.log(doc, "________________")
//   await doc.populate({path: 'user', select: 'name'})
//   .execPopulate()
// })
// CommentSchema.pre('find',  () => {
//   console.log(this, "_________________")
//   this.populate({path: 'user', select: 'name'})
//   .execPopulate()
// })

var Comment = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Comment', CommentSchema);
/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./server/models/classes/Article.js":
/*!******************************************!*\
  !*** ./server/models/classes/Article.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../news */ "./server/models/news/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ArticleClass =
/*#__PURE__*/
function () {
  function ArticleClass() {
    _classCallCheck(this, ArticleClass);
  }

  _createClass(ArticleClass, [{
    key: "setSource",
    // setSource(source){
    //     this.source = source;
    //     this.save().then(null, e => e)
    // }
    value: function setSource(_ref) {
      var _id = _ref._id,
          name = _ref.name;
      this.source = {
        _id: _id,
        name: name
      };
      this.save().then(null, function (e) {
        return e;
      });
    }
  }, {
    key: "addUser",
    value: function addUser(user) {
      var foundUser = this.users.find(function (follower) {
        return follower.id === user.id;
      });

      if (!foundUser) {
        this.users.push(user);
      }
    }
  }], [{
    key: "findOrCreate",
    value: function () {
      var _findOrCreate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(data) {
        var article;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.findOne({
                  title: data.title
                }).populate('source', 'name');

              case 2:
                article = _context.sent;

                if (article) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this.create(data);

              case 6:
                article = _context.sent;

              case 7:
                return _context.abrupt("return", article);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findOrCreate(_x) {
        return _findOrCreate.apply(this, arguments);
      }

      return findOrCreate;
    }()
  }, {
    key: "findOrCreateWithSource",
    value: function () {
      var _findOrCreateWithSource = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(article) {
        var _article$source, id, name, source, articleDoc;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _article$source = article.source, id = _article$source.id, name = _article$source.name;
                _context2.next = 3;
                return _news__WEBPACK_IMPORTED_MODULE_0__["Source"].findOne({
                  id: id,
                  name: name
                });

              case 3:
                source = _context2.sent;
                delete article["source"];
                _context2.next = 7;
                return _news__WEBPACK_IMPORTED_MODULE_0__["Article"].findOrCreate(article);

              case 7:
                articleDoc = _context2.sent;

                if (!(source && !articleDoc.source)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 11;
                return source.addArticle(articleDoc);

              case 11:
                articleDoc.setSource(source);

              case 12:
                _context2.next = 14;
                return articleDoc.populate('source', 'name');

              case 14:
                articleDoc = _context2.sent;
                return _context2.abrupt("return", articleDoc);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findOrCreateWithSource(_x2) {
        return _findOrCreateWithSource.apply(this, arguments);
      }

      return findOrCreateWithSource;
    }()
  }]);

  return ArticleClass;
}();

/* harmony default export */ __webpack_exports__["default"] = (ArticleClass);

/***/ }),

/***/ "./server/models/classes/Category.js":
/*!*******************************************!*\
  !*** ./server/models/classes/Category.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CategoryClass =
/*#__PURE__*/
function () {
  function CategoryClass() {
    _classCallCheck(this, CategoryClass);
  }

  _createClass(CategoryClass, null, [{
    key: "findOrCreateByName",
    value: function () {
      var _findOrCreateByName = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(name) {
        var cat;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.findOne({
                  name: name
                });

              case 2:
                cat = _context.sent;

                if (cat) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this.create({
                  name: name
                });

              case 6:
                cat = _context.sent;

              case 7:
                return _context.abrupt("return", cat);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findOrCreateByName(_x) {
        return _findOrCreateByName.apply(this, arguments);
      }

      return findOrCreateByName;
    }()
  }]);

  return CategoryClass;
}();

/* harmony default export */ __webpack_exports__["default"] = (CategoryClass);

/***/ }),

/***/ "./server/models/classes/Favicon.js":
/*!******************************************!*\
  !*** ./server/models/classes/Favicon.js ***!
  \******************************************/
/*! exports provided: getImageURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageURL", function() { return getImageURL; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var baseURL = "https://besticon-demo.herokuapp.com/";

function getImageURL(_x) {
  return _getImageURL.apply(this, arguments);
}

function _getImageURL() {
  _getImageURL = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    var image;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(baseURL, "icon?url=").concat(url, "&size=50..150..300"));

          case 2:
            image = _context.sent;
            return _context.abrupt("return", image.request.res.responseUrl);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getImageURL.apply(this, arguments);
}



/***/ }),

/***/ "./server/models/classes/ModelClass.js":
/*!*********************************************!*\
  !*** ./server/models/classes/ModelClass.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Attempt at super class to hold methods for all Models
// like findOrCreateBy
var ModelClass =
/*#__PURE__*/
function () {
  function ModelClass(model) {
    _classCallCheck(this, ModelClass);

    console.log(model);
    this.model = model;
  }

  _createClass(ModelClass, null, [{
    key: "findOrCreateByID",
    value: function () {
      var _findOrCreateByID = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(instance) {
        var answer;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.model.findOne({
                  id: instance
                });

              case 2:
                answer = _context.sent;

                if (answer) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this.model.create({
                  identifier: instance
                });

              case 6:
                answer = _context.sent;

              case 7:
                return _context.abrupt("return", answer);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findOrCreateByID(_x) {
        return _findOrCreateByID.apply(this, arguments);
      }

      return findOrCreateByID;
    }()
  }, {
    key: "findOrCreate",
    value: function () {
      var _findOrCreate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(identifier, instance) {
        var answer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.model.findOne(_defineProperty({}, identifier, instance));

              case 2:
                answer = _context2.sent;

                if (answer) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return this.model.create({
                  identifier: instance
                });

              case 6:
                answer = _context2.sent;

              case 7:
                return _context2.abrupt("return", answer);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findOrCreate(_x2, _x3) {
        return _findOrCreate.apply(this, arguments);
      }

      return findOrCreate;
    }()
  }]);

  return ModelClass;
}();

/* harmony default export */ __webpack_exports__["default"] = (ModelClass);

/***/ }),

/***/ "./server/models/classes/Source.js":
/*!*****************************************!*\
  !*** ./server/models/classes/Source.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./server/models/index.js");
/* harmony import */ var _Favicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Favicon */ "./server/models/classes/Favicon.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SourceClass =
/*#__PURE__*/
function () {
  function SourceClass() {
    _classCallCheck(this, SourceClass);
  }

  _createClass(SourceClass, [{
    key: "addArticle",
    value: function addArticle(article) {
      this.articles.push(article);
      this.save().then(null, function (e) {
        return e;
      });
    }
  }], [{
    key: "findOrCreate",
    value: function () {
      var _findOrCreate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(source) {
        var found, image;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.findOne({
                  id: source.id
                });

              case 2:
                found = _context.sent;

                if (!(!found || !found._doc)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 6;
                return Object(_Favicon__WEBPACK_IMPORTED_MODULE_1__["getImageURL"])(source.url);

              case 6:
                image = _context.sent;
                _context.next = 9;
                return this.create(source);

              case 9:
                found = _context.sent;
                found.img = image;

              case 11:
                return _context.abrupt("return", found);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findOrCreate(_x) {
        return _findOrCreate.apply(this, arguments);
      }

      return findOrCreate;
    }()
  }, {
    key: "findOrCreateWithCat",
    value: function () {
      var _findOrCreateWithCat = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(source) {
        var category, cat, foundSource;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                category = source.category;
                _context2.next = 3;
                return ___WEBPACK_IMPORTED_MODULE_0__["Category"].findOrCreateByName(category);

              case 3:
                cat = _context2.sent;
                delete source["category"];
                _context2.next = 7;
                return ___WEBPACK_IMPORTED_MODULE_0__["Source"].findOrCreate(source);

              case 7:
                foundSource = _context2.sent;

                if (foundSource.category) {
                  _context2.next = 15;
                  break;
                }

                foundSource.category = cat._id;
                _context2.next = 12;
                return foundSource.save();

              case 12:
                cat.sources.push(foundSource._id);
                _context2.next = 15;
                return cat.save();

              case 15:
                return _context2.abrupt("return", foundSource);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findOrCreateWithCat(_x2) {
        return _findOrCreateWithCat.apply(this, arguments);
      }

      return findOrCreateWithCat;
    }()
  }]);

  return SourceClass;
}();

/* harmony default export */ __webpack_exports__["default"] = (SourceClass);

/***/ }),

/***/ "./server/models/classes/User.js":
/*!***************************************!*\
  !*** ./server/models/classes/User.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./server/models/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var UserClass =
/*#__PURE__*/
function () {
  function UserClass() {
    _classCallCheck(this, UserClass);
  }

  _createClass(UserClass, [{
    key: "generateAuthToken",
    value: function generateAuthToken() {
      var access = 'auth';
      var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({
        _id: this._id.toHexString(),
        access: access
      }, 'abc123').toString();
      this.tokens.push({
        access: access,
        token: token
      });
      return this.save().then(function () {
        return token;
      });
    }
  }], [{
    key: "findByToken",
    value: function () {
      var _findByToken = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(token) {
        var decoded, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token, 'abc123');
                _context.next = 7;
                break;

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 7:
                _context.next = 9;
                return ___WEBPACK_IMPORTED_MODULE_0__["User"].findOne({
                  '_id': decoded._id,
                  'tokens.token': token,
                  'tokens.access': 'auth'
                });

              case 9:
                user = _context.sent;
                return _context.abrupt("return", user);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 4]]);
      }));

      function findByToken(_x) {
        return _findByToken.apply(this, arguments);
      }

      return findByToken;
    }()
  }]);

  return UserClass;
}();

/* harmony default export */ __webpack_exports__["default"] = (UserClass);

/***/ }),

/***/ "./server/models/classes/index.js":
/*!****************************************!*\
  !*** ./server/models/classes/index.js ***!
  \****************************************/
/*! exports provided: ArticleClass, CategoryClass, SourceClass, ModelClass, UserClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./server/models/classes/Article.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleClass", function() { return _Article__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category */ "./server/models/classes/Category.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryClass", function() { return _Category__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Source */ "./server/models/classes/Source.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SourceClass", function() { return _Source__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ModelClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelClass */ "./server/models/classes/ModelClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelClass", function() { return _ModelClass__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./server/models/classes/User.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserClass", function() { return _User__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./server/models/index.js":
/*!********************************!*\
  !*** ./server/models/index.js ***!
  \********************************/
/*! exports provided: Comment, User, Article, Source, Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ "./server/models/news/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _news__WEBPACK_IMPORTED_MODULE_0__["Article"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _news__WEBPACK_IMPORTED_MODULE_0__["Source"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _news__WEBPACK_IMPORTED_MODULE_0__["Category"]; });

/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments */ "./server/models/Comments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _Comments__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ "./server/models/users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _users__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./server/models/news/Articles.js":
/*!****************************************!*\
  !*** ./server/models/news/Articles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ "./server/models/classes/index.js");


var ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId;
var ArticleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  author: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  urlToImage: {
    type: String
  },
  content: {
    type: String
  },
  source: {
    type: ObjectId,
    ref: 'Source'
  },
  users: [{
    type: ObjectId,
    ref: 'Users'
  }]
});
ArticleSchema.loadClass(_classes__WEBPACK_IMPORTED_MODULE_1__["ArticleClass"]);
var Article = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Article', ArticleSchema);
/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./server/models/news/Categories.js":
/*!******************************************!*\
  !*** ./server/models/news/Categories.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ "./server/models/classes/index.js");


var ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId;
var CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  name: {
    type: String
  },
  sources: [{
    type: ObjectId,
    ref: 'Sources'
  }],
  users: [{
    type: ObjectId,
    ref: 'Users'
  }]
});
CategorySchema.loadClass(_classes__WEBPACK_IMPORTED_MODULE_1__["CategoryClass"]);
var Category = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Category', CategorySchema);
/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./server/models/news/Sources.js":
/*!***************************************!*\
  !*** ./server/models/news/Sources.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ "./server/models/classes/index.js");


var ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId;
var SourceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  id: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  img: {
    type: String
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  },
  articles: [{
    type: ObjectId,
    ref: 'Article'
  }],
  users: [{
    type: ObjectId,
    ref: 'Users'
  }]
});
SourceSchema.loadClass(_classes__WEBPACK_IMPORTED_MODULE_1__["SourceClass"]);
var Source = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Source', SourceSchema); // console.log(Source)

/* harmony default export */ __webpack_exports__["default"] = (Source);

/***/ }),

/***/ "./server/models/news/index.js":
/*!*************************************!*\
  !*** ./server/models/news/index.js ***!
  \*************************************/
/*! exports provided: Article, Source, Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles */ "./server/models/news/Articles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _Articles__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sources */ "./server/models/news/Sources.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _Sources__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories */ "./server/models/news/Categories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _Categories__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./server/models/users.js":
/*!********************************!*\
  !*** ./server/models/users.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./server/models/classes/index.js");



var ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId;
var UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  name: {
    type: String
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: validator__WEBPACK_IMPORTED_MODULE_1___default.a.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [5, 'password length too short']
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }],
  articles: [{
    type: ObjectId,
    ref: 'Articles'
  }],
  sources: [{
    type: ObjectId,
    ref: 'Sources'
  }],
  comments: [{
    type: ObjectId,
    ref: 'Comment'
  }]
});
UserSchema.loadClass(_classes__WEBPACK_IMPORTED_MODULE_2__["UserClass"]);
var User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./server/redis/index.js":
/*!*******************************!*\
  !*** ./server/redis/index.js ***!
  \*******************************/
/*! exports provided: topStoryCache, sourceCache, stringifyAndAddToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topStoryCache", function() { return topStoryCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceCache", function() { return sourceCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyAndAddToList", function() { return stringifyAndAddToList; });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ "./server/config/config.js");
/* harmony import */ var _controller_articleController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/articleController */ "./server/controller/articleController.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function topStoryCache(_x, _x2, _x3) {
  return _topStoryCache.apply(this, arguments);
}

function _topStoryCache() {
  _topStoryCache = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return checkForNewStories();

          case 2:
            _config_config__WEBPACK_IMPORTED_MODULE_0__["client"].lrange("topStories", 0, 20, function (err, data) {
              if (err) throw err;

              if (data) {
                res.status(200).send(data);
              } else {
                next();
              }
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _topStoryCache.apply(this, arguments);
}

function sourceCache(req, res, next) {
  _config_config__WEBPACK_IMPORTED_MODULE_0__["client"].get("sources", function (err, data) {
    if (err || !data) {
      next();
    } else if (data) {
      res.status(200).send(data);
    }
  });
}
function stringifyAndAddToList(list, items) {
  console.log(list);
  items.map(function (article) {
    _config_config__WEBPACK_IMPORTED_MODULE_0__["client"].sadd('mostRecent', article.title);
    var stringed = JSON.stringify(article);
    _config_config__WEBPACK_IMPORTED_MODULE_0__["client"].lpush(list, stringed);
  });
} // function to see if top story cache needs to be updated

function checkForNewStories() {
  return _checkForNewStories.apply(this, arguments);
}

function _checkForNewStories() {
  _checkForNewStories = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var newStories, _loop, i, _ret;

    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Object(_controller_articleController__WEBPACK_IMPORTED_MODULE_1__["getMostRecent"])();

          case 2:
            newStories = _context4.sent;
            _loop =
            /*#__PURE__*/
            regeneratorRuntime.mark(function _loop(i) {
              var broken;
              return regeneratorRuntime.wrap(function _loop$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      broken = void 0; // checking to see if these 5 stories are in the redis list
                      // of the 5 most recent stories

                      _context3.next = 3;
                      return _config_config__WEBPACK_IMPORTED_MODULE_0__["client"].sismember('mostRecent', newStories[i].title,
                      /*#__PURE__*/
                      function () {
                        var _ref = _asyncToGenerator(
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee2(err, reply) {
                          var cacheAddition;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  // if yes, then we need to see if we need to update the list at all
                                  if (reply === 1) {
                                    // if its the first iteration, then we don't have to do anything
                                    if (i !== 0) {
                                      //if i > 0, then we need to update the top stories list with the stories we just pulled
                                      cacheAddition = newStories.splice(i);
                                      stringifyAndAddToList('topStories', cacheAddition);
                                    } // in both cases we can break out of the loop


                                    broken = true;
                                  }

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));

                        return function (_x4, _x5) {
                          return _ref.apply(this, arguments);
                        };
                      }());

                    case 3:
                      if (!broken) {
                        _context3.next = 7;
                        break;
                      }

                      return _context3.abrupt("return", "break");

                    case 7:
                      _context3.next = 9;
                      return Object(_controller_articleController__WEBPACK_IMPORTED_MODULE_1__["callArticles"])();

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _loop, this);
            });
            i = 0;

          case 5:
            if (!(i < newStories.length)) {
              _context4.next = 13;
              break;
            }

            return _context4.delegateYield(_loop(i), "t0", 7);

          case 7:
            _ret = _context4.t0;

            if (!(_ret === "break")) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("break", 13);

          case 10:
            i++;
            _context4.next = 5;
            break;

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3, this);
  }));
  return _checkForNewStories.apply(this, arguments);
}

/***/ }),

/***/ "./server/routes/articleRoutes.js":
/*!****************************************!*\
  !*** ./server/routes/articleRoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redis */ "./server/redis/index.js");
var express = __webpack_require__(/*! express */ "express");

var article = __webpack_require__(/*! ../controller/articleController */ "./server/controller/articleController.js");

var articlePath = express();

articlePath.route('/').get(_redis__WEBPACK_IMPORTED_MODULE_0__["topStoryCache"], article.callArticles);
articlePath.route("/:id").get(article.showArticle);
/* harmony default export */ __webpack_exports__["default"] = (articlePath);

/***/ }),

/***/ "./server/routes/commentRoutes.js":
/*!****************************************!*\
  !*** ./server/routes/commentRoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var express = __webpack_require__(/*! express */ "express");

var comment = __webpack_require__(/*! ../controller/commentController */ "./server/controller/commentController.js");

var commentPath = express();
commentPath.route('/').post(comment.postComment);
commentPath.route('/:id').get(comment.showComment);
/* harmony default export */ __webpack_exports__["default"] = (commentPath);

/***/ }),

/***/ "./server/routes/routes.js":
/*!*********************************!*\
  !*** ./server/routes/routes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userPath = __webpack_require__(/*! ./userRoutes */ "./server/routes/userRoutes.js");

var sourcePath = __webpack_require__(/*! ./sourceRoutes */ "./server/routes/sourceRoutes.js");

var articlePath = __webpack_require__(/*! ./articleRoutes */ "./server/routes/articleRoutes.js");

var commentPath = __webpack_require__(/*! ./commentRoutes */ "./server/routes/commentRoutes.js");

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.status(200).send('testing');
  });
  app.use('/user', userPath);
  app.use('/comments', commentPath);
  app.use('/news/sources', sourcePath);
  app.use('/news/articles', articlePath);
};

/***/ }),

/***/ "./server/routes/sourceRoutes.js":
/*!***************************************!*\
  !*** ./server/routes/sourceRoutes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redis */ "./server/redis/index.js");
var express = __webpack_require__(/*! express */ "express");

var source = __webpack_require__(/*! ../controller/sourceController */ "./server/controller/sourceController.js");

var sourcePath = express();

sourcePath.route('/').get(_redis__WEBPACK_IMPORTED_MODULE_0__["sourceCache"], source.callSources);
sourcePath.route('/search').post(source.searchSources);
sourcePath.route('/:id').get(source.showSource);
/* harmony default export */ __webpack_exports__["default"] = (sourcePath);

/***/ }),

/***/ "./server/routes/userRoutes.js":
/*!*************************************!*\
  !*** ./server/routes/userRoutes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middleware */ "./server/middleware/index.js");
var express = __webpack_require__(/*! express */ "express");

var user = __webpack_require__(/*! ../controller/userController */ "./server/controller/userController.js");

var userPath = express();

userPath.route('/').post(user.createUser);
userPath.route("/articles").post(user.savedArticles);
userPath.route('/favArticle').post(user.favArticle);
userPath.route('/followSource').post(user.followSource);
userPath.route('/login').post(user.login);
userPath.route('/session').post(_middleware__WEBPACK_IMPORTED_MODULE_0__["authenticate"], user.retrieveSession);
/* harmony default export */ __webpack_exports__["default"] = (userPath);

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! exports provided: app, passport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "passport", function() { return passport__WEBPACK_IMPORTED_MODULE_2___default.a; });
__webpack_require__(/*! ./config/config */ "./server/config/config.js");

var express = __webpack_require__(/*! express */ "express");

var mongoose = __webpack_require__(/*! ./db/mongoose */ "./server/db/mongoose.js");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");



 // ******** FEATURES NOT READY FOR PRODUCTION
// import server from './graph'
// const RedisStore = require('connect-redis')(session);

var PORT = process.env.PORT;
var app = express();

var routes = __webpack_require__(/*! ./routes/routes */ "./server/routes/routes.js");

app.use(bodyParser.json());
var allowedOrigins = ['http://localhost:3000', 'https://protected-bayou-40913.herokuapp.com'];
app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()({
  origin: function origin(_origin, callback) {
    if (!_origin) return callback(null, true);

    if (allowedOrigins.indexOf(_origin) === -1) {
      var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
}));
app.use(passport__WEBPACK_IMPORTED_MODULE_2___default.a.initialize());
app.use(passport__WEBPACK_IMPORTED_MODULE_2___default.a.session());
app.use(bodyParser.json());
routes(app);
app.listen(PORT || 3001, function () {
  return console.log("started up on ".concat(PORT));
});
 // ---------- WORK WITH CACHED SESSIONS FOR USERS
// app.use(session({
//   secret: "worldly",
//   store: new RedisStore({ host: 'localhost', port: 6379, client, ttl :  260}),
//   resave: true,
//   saveUninitialized: false
// }))

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi @babel/polyfill ./server/server.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./server/server.js */"./server/server.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "newsapi":
/*!**************************!*\
  !*** external "newsapi" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("newsapi");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXIvYXJ0aWNsZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXIvY29tbWVudENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXIvY29ubmVjdGluZ0Z1bmNzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVyL3NvdXJjZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXIvdXNlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RiL21vbmdvb3NlLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9taWRkbGV3YXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9jbGFzc2VzL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9jbGFzc2VzL0NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvY2xhc3Nlcy9GYXZpY29uLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvY2xhc3Nlcy9Nb2RlbENsYXNzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvY2xhc3Nlcy9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9uZXdzL0FydGljbGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvbmV3cy9DYXRlZ29yaWVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvbmV3cy9Tb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvbmV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yZWRpcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL2FydGljbGVSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9jb21tZW50Um91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvc291cmNlUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvdXNlclJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV3c2FwaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0b3JcIiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY2xpZW50IiwiUkVESVNUT0dPX1VSTCIsInJ0ZyIsInBhcnNlIiwicmVkaXMiLCJjcmVhdGVDbGllbnQiLCJwb3J0IiwiaG9zdG5hbWUiLCJhdXRoIiwic3BsaXQiLCJuZXdzYXBpIiwiTmV3c0FQSSIsIk5FV1NfQVBJIiwiY2FsbEFydGljbGVzIiwicmVxIiwicmVzIiwidjIiLCJ0b3BIZWFkbGluZXMiLCJsYW5ndWFnZSIsImNvdW50cnkiLCJjYXRlZ29yeSIsImFydGljbGVzIiwiYXN5bmNNYXBwaW5nIiwiQXJ0aWNsZSIsImZpbmRPckNyZWF0ZVdpdGhTb3VyY2UiLCJyZXNwb25zZSIsIm1hcCIsImFydGljbGUiLCJzdHJpbmdlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJscHVzaCIsImkiLCJzdG9yeSIsIl9kb2MiLCJ0aXRsZSIsInNhZGQiLCJzaG93QXJ0aWNsZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJwb3B1bGF0ZSIsInN0YXR1cyIsInNlbmQiLCJ1bmRlZmluZWQiLCJnZXRNb3N0UmVjZW50IiwicGFnZVNpemUiLCJwb3N0Q29tbWVudCIsIkNvbW1lbnQiLCJjcmVhdGUiLCJjb250ZW50IiwiYm9keSIsInVzZXIiLCJ0aGVuIiwiZG9jIiwiZSIsInNob3dDb21tZW50IiwicGF0aCIsInNlbGVjdCIsImV4ZWMiLCJwb3B1bGF0ZVJlbGF0aW9uc2hpcHMiLCJzb3VyY2UiLCJhZGRBcnRpY2xlIiwib2JqZWN0cyIsImNiIiwib2JqZWN0IiwicmVzdWx0IiwicHVzaCIsImNhbGxTb3VyY2VzIiwic291cmNlcyIsIlNvdXJjZSIsImZpbmRPckNyZWF0ZVdpdGhDYXQiLCJhbnN3ZXIiLCJjYWNoZWRTb3VyY2VzIiwic2V0Iiwic2hvd1NvdXJjZSIsImVyciIsInBvc3RzIiwicmV2ZXJzZSIsInNlYXJjaFNvdXJjZXMiLCJmaW5kIiwiUmVnRXhwIiwiY3JlYXRlVXNlciIsIlVzZXIiLCJnZW5lcmF0ZUF1dGhUb2tlbiIsInRva2VuIiwiZXJyb3JzIiwiZXJybXNnIiwia2V5IiwibWVzc2FnZSIsImxvZ2luIiwiZmluZE9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbnMiLCJmYXZBcnRpY2xlIiwidXNlcklEIiwiYXJ0aWNsZUlEIiwidXNlcnMiLCJzYXZlIiwic3VjY2VzcyIsImZvbGxvd1NvdXJjZSIsInNvdXJjZUlEIiwic2F2ZWRBcnRpY2xlcyIsIlByb21pc2UiLCJhbGwiLCJmb3VuZCIsImZvdW5kQXJ0aWNsZXMiLCJyZXRyaWV2ZVNlc3Npb24iLCJwYXNzcG9ydCIsInNlcmlhbGl6ZVVzZXIiLCJ1c2VySWQiLCJkb25lIiwiZGVzZXJpYWxpemVVc2VyIiwibW9uZ29vc2UiLCJwcm9taXNlIiwiZ2xvYmFsIiwiY29ubmVjdCIsImRiIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImxvZyIsImF1dGhlbnRpY2F0ZSIsIm5leHQiLCJmaW5kQnlUb2tlbiIsInJlamVjdCIsImNhdGNoIiwiT2JqZWN0SWQiLCJTY2hlbWEiLCJUeXBlcyIsIkNvbW1lbnRTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVmIiwibW9kZWwiLCJBcnRpY2xlQ2xhc3MiLCJfaWQiLCJuYW1lIiwiZm91bmRVc2VyIiwiZm9sbG93ZXIiLCJkYXRhIiwiZmluZE9yQ3JlYXRlIiwiYXJ0aWNsZURvYyIsInNldFNvdXJjZSIsIkNhdGVnb3J5Q2xhc3MiLCJjYXQiLCJiYXNlVVJMIiwiZ2V0SW1hZ2VVUkwiLCJ1cmwiLCJheGlvcyIsImdldCIsImltYWdlIiwicmVxdWVzdCIsInJlc3BvbnNlVXJsIiwiTW9kZWxDbGFzcyIsImluc3RhbmNlIiwiaWRlbnRpZmllciIsIlNvdXJjZUNsYXNzIiwiaW1nIiwiQ2F0ZWdvcnkiLCJmaW5kT3JDcmVhdGVCeU5hbWUiLCJmb3VuZFNvdXJjZSIsIlVzZXJDbGFzcyIsImFjY2VzcyIsImp3dCIsInNpZ24iLCJ0b0hleFN0cmluZyIsInRvU3RyaW5nIiwiZGVjb2RlZCIsInZlcmlmeSIsIkFydGljbGVTY2hlbWEiLCJhdXRob3IiLCJkZXNjcmlwdGlvbiIsInVybFRvSW1hZ2UiLCJsb2FkQ2xhc3MiLCJDYXRlZ29yeVNjaGVtYSIsIlNvdXJjZVNjaGVtYSIsIlVzZXJTY2hlbWEiLCJ1bmlxdWUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRvciIsImlzRW1haWwiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImNvbW1lbnRzIiwidG9wU3RvcnlDYWNoZSIsImNoZWNrRm9yTmV3U3RvcmllcyIsImxyYW5nZSIsInNvdXJjZUNhY2hlIiwic3RyaW5naWZ5QW5kQWRkVG9MaXN0IiwibGlzdCIsIml0ZW1zIiwibmV3U3RvcmllcyIsImJyb2tlbiIsInNpc21lbWJlciIsInJlcGx5IiwiY2FjaGVBZGRpdGlvbiIsInNwbGljZSIsImxlbmd0aCIsImV4cHJlc3MiLCJhcnRpY2xlUGF0aCIsInJvdXRlIiwiY29tbWVudCIsImNvbW1lbnRQYXRoIiwicG9zdCIsInVzZXJQYXRoIiwic291cmNlUGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcHAiLCJ1c2UiLCJib2R5UGFyc2VyIiwiUE9SVCIsInJvdXRlcyIsImpzb24iLCJhbGxvd2VkT3JpZ2lucyIsImNvcnMiLCJvcmlnaW4iLCJjYWxsYmFjayIsImluZGV4T2YiLCJtc2ciLCJFcnJvciIsImluaXRpYWxpemUiLCJzZXNzaW9uIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtC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QUFDRDs7QUFDRCxXQUFPRixRQUFRLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBZjtBQUNEO0FBVFUsQ0FBRCxDQUFaO0FBWUFULEdBQUcsQ0FBQ0MsR0FBSixDQUFRdEcsK0NBQVEsQ0FBQ2tILFVBQVQsRUFBUjtBQUNBYixHQUFHLENBQUNDLEdBQUosQ0FBUXRHLCtDQUFRLENBQUNtSCxPQUFULEVBQVI7QUFDQWQsR0FBRyxDQUFDQyxHQUFKLENBQVFDLFVBQVUsQ0FBQ0csSUFBWCxFQUFSO0FBRUFELE1BQU0sQ0FBQ0osR0FBRCxDQUFOO0FBRUFBLEdBQUcsQ0FBQ2UsTUFBSixDQUFXWixJQUFJLElBQUksSUFBbkIsRUFBeUI7QUFBQSxTQUFNNUYsT0FBTyxDQUFDQyxHQUFSLHlCQUE2QjJGLElBQTdCLEVBQU47QUFBQSxDQUF6QjtDQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcbmltcG9ydCByZWRpcyBmcm9tICdyZWRpcydcblxuXG4gIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbmV3cydcblxuLy8gY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50Jztcbi8vXG4vLyBpZihlbnYgPT09ICd0ZXN0Jyl7XG4vLyAgIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbmV3cy10ZXN0J1xuLy8gfSBlbHNlIGlmKGVudiA9PT0gJ2dyYXBoJykge1xuLy8gICAgIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbmV3cy1ncmFwaCdcbi8vIH0gZWxzZSBpZihlbnYgPT09ICdkZXZlbG9wbWVudCcpIHtcbi8vICAgcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9uZXdzJ1xuLy8gfVxuXG4vLyBjb25maWd1cmluZyBSZWRpcyBmb3IgSGVyb2t1L0RldlxuXG5sZXQgY2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuUkVESVNUT0dPX1VSTCkge1xuICBjb25zdCBydGcgICA9IHJlcXVpcmUoXCJ1cmxcIikucGFyc2UocHJvY2Vzcy5lbnYuUkVESVNUT0dPX1VSTCk7XG4gIGNsaWVudCA9IHJlZGlzLmNyZWF0ZUNsaWVudChydGcucG9ydCwgcnRnLmhvc3RuYW1lKTtcbiAgY2xpZW50LmF1dGgocnRnLmF1dGguc3BsaXQoXCI6XCIpWzFdKTtcbn0gZWxzZSB7XG4gIGNsaWVudCA9IHJlZGlzLmNyZWF0ZUNsaWVudCgpO1xufVxuXG5leHBvcnQge1xuICBjbGllbnRcbn1cbiIsImltcG9ydCBOZXdzQVBJIGZyb20gJ25ld3NhcGknO1xuY29uc3QgbmV3c2FwaSA9IG5ldyBOZXdzQVBJKHByb2Nlc3MuZW52Lk5FV1NfQVBJKTtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnXG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAnLi4vbW9kZWxzJ1xuaW1wb3J0IHsgYXN5bmNNYXBwaW5nIH0gIGZyb20gJy4vY29ubmVjdGluZ0Z1bmNzJ1xuXG5leHBvcnQgY29uc3QgY2FsbEFydGljbGVzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBhcnRpY2xlcyA9IGF3YWl0IG5ld3NhcGkudjIudG9wSGVhZGxpbmVzKHtcbiAgICBsYW5ndWFnZTogJ2VuJyxcbiAgICBjb3VudHJ5OiAndXMnLFxuICAgIGNhdGVnb3J5OiBcImdlbmVyYWxcIixcbiAgfSlcblxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBhc3luY01hcHBpbmcoYXJ0aWNsZXMuYXJ0aWNsZXMsIEFydGljbGUuZmluZE9yQ3JlYXRlV2l0aFNvdXJjZSlcbiAgLy8gcmVzLnN0YXR1cygyMDApLnNlbmQocmVzcG9uc2UpXG5cbiAgLy8gIFJlZGlzIENhY2hpbmdcbiAgcmVzcG9uc2UubWFwKGFydGljbGUgPT4ge1xuICAgIGxldCBzdHJpbmdlZCA9IEpTT04uc3RyaW5naWZ5KGFydGljbGUpO1xuICAgIGNsaWVudC5scHVzaCgndG9wU3RvcmllcycsIHN0cmluZ2VkKVxuICB9KVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xuICAgIGxldCBzdG9yeSA9IHJlc3BvbnNlW2ldLl9kb2MudGl0bGVcbiAgICBjbGllbnQuc2FkZCgnbW9zdFJlY2VudCcsIHN0b3J5KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaG93QXJ0aWNsZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XG4gIGxldCBhcnRpY2xlID0gYXdhaXQgQXJ0aWNsZS5maW5kQnlJZChpZCkucG9wdWxhdGUoJ3NvdXJjZScsICduYW1lJylcbiAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoYXJ0aWNsZSwgdW5kZWZpbmVkLCAyKSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNb3N0UmVjZW50ID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgYXJ0aWNsZXMgPSBhd2FpdCBuZXdzYXBpLnYyLnRvcEhlYWRsaW5lcyh7XG4gICAgbGFuZ3VhZ2U6ICdlbicsXG4gICAgY291bnRyeTogJ3VzJyxcbiAgICBjYXRlZ29yeTogXCJnZW5lcmFsXCIsXG4gICAgcGFnZVNpemU6IDVcbiAgfSlcblxuICByZXR1cm4gYXJ0aWNsZXMuYXJ0aWNsZXNcbn1cbiIsImltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgcG9zdENvbW1lbnQgPSAocmVxLCByZXMpID0+IHtcbiAgICBDb21tZW50LmNyZWF0ZSh7Y29udGVudDogcmVxLmJvZHkuY29udGVudCwgdXNlcjogcmVxLmJvZHkudXNlcn0pLnRoZW4oZG9jID0+IHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRvYylcbiAgICB9LCBlID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGUpKVxufTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb21tZW50ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIENvbW1lbnQuZmluZEJ5SWQocmVxLnBhcmFtcy5pZClcbiAgLnBvcHVsYXRlKHtwYXRoOiAndXNlcicsIHNlbGVjdDogJ25hbWUnfSlcbiAgLmV4ZWMoKVxuICAudGhlbihkb2MgPT4ge1xuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZG9jKVxuICB9KVxuXG59XG4iLCJcbmZ1bmN0aW9uIHBvcHVsYXRlUmVsYXRpb25zaGlwcyhzb3VyY2UsIGFydGljbGUpe1xuICBzb3VyY2UuYWRkQXJ0aWNsZShhcnRpY2xlKTtcbiAgYXJ0aWNsZS5zb3VyY2Uoc291cmNlKTtcbn1cblxuLy8vICAgICAgIGluIHNlcXVlbmNlXG5hc3luYyBmdW5jdGlvbiBhc3luY01hcHBpbmcgKG9iamVjdHMsIGNiKXtcbiAgbGV0IHJlcyA9IFtdO1xuICBmb3IoY29uc3Qgb2JqZWN0IG9mIG9iamVjdHMpe1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBjYihvYmplY3QpXG4gICAgcmVzLnB1c2gocmVzdWx0KVxuICB9XG4gIHJldHVybiByZXNcbn1cbi8vLy8vLyAgICAgaW4gcGFycmFsbGVsXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGFzeW5jTWFwcGluZyAob2JqZWN0cywgY2FsbGJhY2spe1xuLy8gICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwob2JqZWN0cy5tYXAoYXN5bmMob2JqKSA9PiB7XG4vLyAgICAgZGVidWdnZXJcbi8vICAgICBsZXQgcmVzID0gYXdhaXQgY2FsbGJhY2sob2JqKVxuLy8gICAgICAgcmV0dXJuIHJlc1xuLy8gICAgIH0pKVxuLy8gICB9XG5cblxuXG5leHBvcnQge1xuICBwb3B1bGF0ZVJlbGF0aW9uc2hpcHMsXG4gIGFzeW5jTWFwcGluZ1xufTtcbiIsImltcG9ydCBOZXdzQVBJIGZyb20gJ25ld3NhcGknO1xuY29uc3QgbmV3c2FwaSA9IG5ldyBOZXdzQVBJKHByb2Nlc3MuZW52Lk5FV1NfQVBJKTtcbmltcG9ydCB7IFNvdXJjZSB9ICBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgYXN5bmNNYXBwaW5nIH0gZnJvbSAnLi9jb25uZWN0aW5nRnVuY3MnXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9jb25maWcvY29uZmlnJ1xuXG5cbmV4cG9ydCBjb25zdCBjYWxsU291cmNlcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBuZXdzYXBpLnYyLnNvdXJjZXMoe1xuICAgIGxhbmd1YWdlOiAnZW4nLFxuICAgIGNvdW50cnk6ICd1cycsXG4gICAgY2F0ZWdvcnk6IFwiZ2VuZXJhbFwiXG4gIH0pXG5cbiAgbGV0IGFuc3dlciA9IGF3YWl0IGFzeW5jTWFwcGluZyhyZXNwb25zZS5zb3VyY2VzLCBTb3VyY2UuZmluZE9yQ3JlYXRlV2l0aENhdClcblxuICByZXMuc3RhdHVzKDIwMCkuc2VuZChhbnN3ZXIpXG5cbiAgLy8gUmVkaXMgQ2FjaGluZyBmb3IgbmV3cyBzb3VyY2VzXG4gIC8vIGEgbG90IG9mIHdvcmsgaXMgZG9uZSB0byBmZXRjaCB0aGVpciBzb3VyY2VzXG4gIC8vIGFuZCB0byBnZXQgdGhlaXIgcGljdHVyZXNcblxuXG4gIGxldCBjYWNoZWRTb3VyY2VzID0gSlNPTi5zdHJpbmdpZnkoYW5zd2VyKVxuICBjbGllbnQuc2V0KCdzb3VyY2VzJywgY2FjaGVkU291cmNlcylcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93U291cmNlID0gKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcbiAgbGV0IHNvdXJjZSA9IFNvdXJjZS5maW5kQnlJZChpZClcbiAgc291cmNlXG4gIC5wb3B1bGF0ZSh7cGF0aDogJ2FydGljbGVzJywgc2VsZWN0OiBcImF1dGhvciB0aXRsZSBkZXNjcmlwdGlvbiB1cmwgdXJsVG9JbWFnZSBjb250ZW50XCJ9KVxuICAuZXhlYygoZXJyLCBwb3N0cykgPT4ge1xuICAgIHBvc3RzLmFydGljbGVzLnJldmVyc2UoKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHBvc3RzLCB1bmRlZmluZWQsIDIpKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0IGNvbnN0IHNlYXJjaFNvdXJjZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgbGV0IHNvdXJjZXMgPSBhd2FpdCBTb3VyY2UuZmluZCh7aWQ6IG5ldyBSZWdFeHAocmVxLmJvZHkuc291cmNlKX0pXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHNvdXJjZXMpXG59XG4iLCJpbXBvcnQgeyBVc2VyLCBBcnRpY2xlLCBTb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgcGFzc3BvcnQgfSBmcm9tICcuLi9zZXJ2ZXInXG5pbXBvcnQgeyBhc3luY01hcHBpbmcgfSBmcm9tICcuL2Nvbm5lY3RpbmdGdW5jcydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHJlcS5ib2R5KTtcbiAgICBsZXQgdG9rZW4gPSBhd2FpdCB1c2VyLmdlbmVyYXRlQXV0aFRva2VuKClcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7dXNlciwgdG9rZW59KTtcbiAgfSBjYXRjaCAoZSkge1xuLy8gKioqKioqKioqKioqKiBOb3Qgc3VwZXIgZmx1c2hlZCBvdXQsIG5lZWQgdG8gcmV0dXJuIGJhY2sgdG8uXG4gICAgbGV0IGVycm9ycyA9IFtdXG4gICAgaWYoZS5lcnJtc2cpZXJyb3JzLnB1c2goXCJFbWFpbCBhbHJlYWR5IHRha2VuXCIpXG4gICAgaWYoZS5lcnJvcnMpe1xuICAgICAgZm9yKGxldCBrZXkgaW4gZS5lcnJvcnMpe1xuICAgICAgICBpZihlLmVycm9yc1trZXldLm1lc3NhZ2UpIGVycm9ycy5wdXNoKGUuZXJyb3JzW2tleV0ubWVzc2FnZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzLnNlbmQoe2Vycm9yc30pXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtlbWFpbDogcmVxLmJvZHkuZW1haWx9KVxuICAgIGlmKHVzZXIpe1xuICAgICAgaWYodXNlci5wYXNzd29yZCA9PT0gcmVxLmJvZHkucGFzc3dvcmQpe1xuICAgICAgICByZXMuc2VuZCh7dXNlciwgdG9rZW46IHVzZXIudG9rZW5zWzBdLnRva2VufSlcbiAgICAgIH0gZWxzZSByZXMuc2VuZCh7ZXJyb3JzOiBbJ3Bhc3N3b3JkIGlzIGluY29ycmVjdCddfSlcbiAgICB9IGVsc2UgcmVzLnNlbmQoe2Vycm9yczogWydlbWFpbCBkb2VzIG5vdCBleGlzdCddfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcy5zZW5kKGUpXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmYXZBcnRpY2xlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChyZXEuYm9keS51c2VySUQpXG4gIGxldCBhcnRpY2xlID0gYXdhaXQgQXJ0aWNsZS5maW5kQnlJZChyZXEuYm9keS5hcnRpY2xlSUQpXG4gIHVzZXIuYXJ0aWNsZXMucHVzaChhcnRpY2xlKVxuICBhcnRpY2xlLnVzZXJzLnB1c2godXNlcilcbiAgdXNlci5zYXZlKCkudGhlbihudWxsLCAoZSkgPT4gZSlcbiAgYXJ0aWNsZS5zYXZlKCkudGhlbihudWxsLCAoZSkgPT4gZSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtzdWNjZXNzOiB0cnVlfSlcbn07XG5cbmV4cG9ydCBjb25zdCBmb2xsb3dTb3VyY2UgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHJlcS5ib2R5LnVzZXJJRCkudGhlbihkb2MgPT4gZG9jKVxuICBsZXQgc291cmNlID0gYXdhaXQgU291cmNlLmZpbmRCeUlkKHJlcS5ib2R5LnNvdXJjZUlEKS50aGVuKGRvYyA9PiBkb2MpXG4gIHVzZXIuc291cmNlcy5wdXNoKHNvdXJjZSlcbiAgc291cmNlLnVzZXJzLnB1c2godXNlcilcbiAgdXNlci5zYXZlKCkudGhlbihudWxsLCAoZSkgPT4gZSlcbiAgc291cmNlLnNhdmUoKS50aGVuKG51bGwsIChlKSA9PiBlKTtcbiAgcmVzLnN0YXR1cygyMDApLnNlbmQoc291cmNlKVxufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVkQXJ0aWNsZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBhcnRpY2xlcyB9ID0gcmVxLmJvZHk7XG5cbiAgbGV0IGZvdW5kQXJ0aWNsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChhcnRpY2xlcy5tYXAoYXN5bmMgKGFydGljbGUpID0+IHtcbiAgICAgbGV0IGZvdW5kID0gYXdhaXQgQXJ0aWNsZS5maW5kQnlJZChhcnRpY2xlKVxuICAgICByZXR1cm4gZm91bmRcbiAgIH0pKVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KGZvdW5kQXJ0aWNsZXMsIHVuZGVmaW5lZCwgMikpO1xufVxuXG5leHBvcnQgY29uc3QgcmV0cmlldmVTZXNzaW9uID0gKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlcS51c2VyKVxufVxuXG5wYXNzcG9ydC5zZXJpYWxpemVVc2VyKGZ1bmN0aW9uKHVzZXJJZCwgZG9uZSkge1xuICBkb25lKG51bGwsIHVzZXJJZCk7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKGZ1bmN0aW9uKHVzZXJJZCwgZG9uZSkge1xuICAgIGRvbmUobnVsbCwgdXNlcklkKTtcbn0pO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xubW9uZ29vc2UucHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG5tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcbmNvbnN0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbi8vIGRiLmRyb3BEYXRhYmFzZSgpXG4vLyBkYi5kcm9wQ29sbGVjdGlvbignc291cmNlcycpXG5kYi5vbignZXJyb3InLCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5kYi5vbignb3BlbicsICgpID0+IGNvbnNvbGUubG9nKGBzdWNjZXNzIG9uICR7cHJvY2Vzcy5wb3J0fWApKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2VcbiIsImltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB2YXIgdG9rZW4gPSByZXEuYm9keS50b2tlbjtcblxuICBVc2VyLmZpbmRCeVRva2VuKHRva2VuKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG5cbiAgICByZXEudXNlciA9IHVzZXI7XG4gICAgcmVxLnRva2VuID0gdG9rZW47XG4gICAgbmV4dCgpO1xuICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5jb25zdCB7IFR5cGVzOiB7T2JqZWN0SWR9IH0gPSBTY2hlbWFcblxuY29uc3QgQ29tbWVudFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjb250ZW50OiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIHVzZXI6IHtcbiAgICB0eXBlOiBPYmplY3RJZCxcbiAgICByZWY6ICdVc2VyJ1xuICB9LFxuICBhcnRpY2xlOiB7XG4gICAgdHlwZTogT2JqZWN0SWQsXG4gICAgcmVmOiAnQXJ0aWNsZXMnXG4gIH1cbn0pO1xuXG4gIC8vKioqKipXT1JLIE9OIE1JRERMRVdBUkUgRk9SIEFVVE9NQVRJQyBQT1BVTEFUSU9OKioqLy9cbi8vIENvbW1lbnRTY2hlbWEucG9zdCgnZmluZCcsIGFzeW5jIChkb2MpID0+IHtcbi8vICAgY29uc29sZS5sb2coZG9jLCBcIl9fX19fX19fX19fX19fX19cIilcbi8vICAgYXdhaXQgZG9jLnBvcHVsYXRlKHtwYXRoOiAndXNlcicsIHNlbGVjdDogJ25hbWUnfSlcbi8vICAgLmV4ZWNQb3B1bGF0ZSgpXG4vLyB9KVxuLy8gQ29tbWVudFNjaGVtYS5wcmUoJ2ZpbmQnLCAgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyh0aGlzLCBcIl9fX19fX19fX19fX19fX19fXCIpXG4vLyAgIHRoaXMucG9wdWxhdGUoe3BhdGg6ICd1c2VyJywgc2VsZWN0OiAnbmFtZSd9KVxuLy8gICAuZXhlY1BvcHVsYXRlKClcbi8vIH0pXG5cbmNvbnN0IENvbW1lbnQgPSBtb25nb29zZS5tb2RlbCgnQ29tbWVudCcsIENvbW1lbnRTY2hlbWEpXG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iLCJpbXBvcnQgeyBBcnRpY2xlLCBTb3VyY2UgfSBmcm9tICcuLi9uZXdzJ1xuXG5jbGFzcyBBcnRpY2xlQ2xhc3Mge1xuXG4gIHN0YXRpYyBhc3luYyBmaW5kT3JDcmVhdGUoZGF0YSl7XG4gICAgbGV0IGFydGljbGUgPSBhd2FpdCB0aGlzLmZpbmRPbmUoe3RpdGxlOiBkYXRhLnRpdGxlfSkucG9wdWxhdGUoJ3NvdXJjZScsICduYW1lJylcbiAgICBpZighYXJ0aWNsZSl7XG4gICAgICBhcnRpY2xlID0gYXdhaXQgdGhpcy5jcmVhdGUoZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIGFydGljbGVcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBmaW5kT3JDcmVhdGVXaXRoU291cmNlKGFydGljbGUpe1xuICAgIGxldCB7IHNvdXJjZToge2lkLCBuYW1lfX0gPSBhcnRpY2xlXG4gICAgbGV0IHNvdXJjZSA9IGF3YWl0IFNvdXJjZS5maW5kT25lKHtpZCwgbmFtZX0pO1xuICAgIGRlbGV0ZSBhcnRpY2xlW1wic291cmNlXCJdXG5cbiAgICBsZXQgYXJ0aWNsZURvYyA9IGF3YWl0IEFydGljbGUuZmluZE9yQ3JlYXRlKGFydGljbGUpO1xuICAgIGlmKHNvdXJjZSAmJiAhYXJ0aWNsZURvYy5zb3VyY2UpIHtcbiAgICAgICAgYXdhaXQgc291cmNlLmFkZEFydGljbGUoYXJ0aWNsZURvYyk7XG4gICAgICAgIGFydGljbGVEb2Muc2V0U291cmNlKHNvdXJjZSk7XG4gICAgfVxuICAgIGFydGljbGVEb2MgPSBhd2FpdCBhcnRpY2xlRG9jLnBvcHVsYXRlKCdzb3VyY2UnLCAnbmFtZScpXG4gICAgcmV0dXJuIGFydGljbGVEb2NcbiAgfVxuXG4gIC8vIHNldFNvdXJjZShzb3VyY2Upe1xuICAvLyAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIC8vICAgICB0aGlzLnNhdmUoKS50aGVuKG51bGwsIGUgPT4gZSlcbiAgLy8gfVxuXG4gIHNldFNvdXJjZSh7X2lkLCBuYW1lfSl7XG4gICAgICB0aGlzLnNvdXJjZSA9IHtfaWQsIG5hbWV9O1xuICAgICAgdGhpcy5zYXZlKCkudGhlbihudWxsLCBlID0+IGUpXG4gIH1cblxuICBhZGRVc2VyKHVzZXIpe1xuICAgIGxldCBmb3VuZFVzZXIgPSB0aGlzLnVzZXJzLmZpbmQoZm9sbG93ZXIgPT4gIGZvbGxvd2VyLmlkID09PSB1c2VyLmlkKVxuICAgIGlmKCFmb3VuZFVzZXIpe1xuICAgICAgdGhpcy51c2Vycy5wdXNoKHVzZXIpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVDbGFzc1xuIiwiY2xhc3MgQ2F0ZWdvcnlDbGFzcyAge1xuXG4gIHN0YXRpYyBhc3luYyBmaW5kT3JDcmVhdGVCeU5hbWUobmFtZSl7XG4gICAgbGV0IGNhdCA9IGF3YWl0IHRoaXMuZmluZE9uZSh7bmFtZX0pXG4gICAgICBpZighY2F0KXtcbiAgICAgICAgY2F0ID0gYXdhaXQgdGhpcy5jcmVhdGUoe25hbWV9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNhdFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlDbGFzcztcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGJhc2VVUkwgPSBcImh0dHBzOi8vYmVzdGljb24tZGVtby5oZXJva3VhcHAuY29tL1wiXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEltYWdlVVJMICh1cmwpe1xuICBsZXQgaW1hZ2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH1pY29uP3VybD0ke3VybH0mc2l6ZT01MC4uMTUwLi4zMDBgKVxuXG4gIHJldHVybiBpbWFnZS5yZXF1ZXN0LnJlcy5yZXNwb25zZVVybFxufVxuXG5leHBvcnQge1xuICBnZXRJbWFnZVVSTFxufVxuIiwiLy8gQXR0ZW1wdCBhdCBzdXBlciBjbGFzcyB0byBob2xkIG1ldGhvZHMgZm9yIGFsbCBNb2RlbHNcbi8vIGxpa2UgZmluZE9yQ3JlYXRlQnlcblxuXG5jbGFzcyBNb2RlbENsYXNzIHtcbiAgY29uc3RydWN0b3IobW9kZWwpe1xuICAgIGNvbnNvbGUubG9nKG1vZGVsKVxuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGZpbmRPckNyZWF0ZUJ5SUQoaW5zdGFuY2Upe1xuICBsZXQgYW5zd2VyID0gYXdhaXQgdGhpcy5tb2RlbC5maW5kT25lKHtpZDogaW5zdGFuY2V9KVxuICAgIGlmKCFhbnN3ZXIpe1xuICAgICAgYW5zd2VyID0gYXdhaXQgdGhpcy5tb2RlbC5jcmVhdGUoe2lkZW50aWZpZXI6IGluc3RhbmNlfSlcbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlclxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGZpbmRPckNyZWF0ZShpZGVudGlmaWVyLCBpbnN0YW5jZSl7XG4gIGxldCBhbnN3ZXIgPSAgYXdhaXQgdGhpcy5tb2RlbC5maW5kT25lKHtbaWRlbnRpZmllcl06IGluc3RhbmNlfSlcbiAgICBpZighYW5zd2VyKXtcbiAgICAgIGFuc3dlciA9ICBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZSh7aWRlbnRpZmllcjogaW5zdGFuY2V9KVxuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbENsYXNzXG4iLCJpbXBvcnQgeyBTb3VyY2UsIENhdGVnb3J5IH0gZnJvbSAnLi4vJ1xuaW1wb3J0IHsgZ2V0SW1hZ2VVUkwgfSBmcm9tICcuL0Zhdmljb24nXG5cblxuY2xhc3MgU291cmNlQ2xhc3Mge1xuXG4gIGFkZEFydGljbGUoYXJ0aWNsZSl7XG4gICAgdGhpcy5hcnRpY2xlcy5wdXNoKGFydGljbGUpO1xuICAgIHRoaXMuc2F2ZSgpLnRoZW4obnVsbCwgZSA9PiBlKVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGZpbmRPckNyZWF0ZShzb3VyY2Upe1xuICAgIGxldCBmb3VuZCA9IGF3YWl0IHRoaXMuZmluZE9uZSh7aWQ6IHNvdXJjZS5pZH0pXG4gICAgaWYoIWZvdW5kIHx8ICFmb3VuZC5fZG9jKXtcbiAgICAgIGxldCBpbWFnZSA9IGF3YWl0IGdldEltYWdlVVJMKHNvdXJjZS51cmwpXG4gICAgICBmb3VuZCA9IGF3YWl0IHRoaXMuY3JlYXRlKHNvdXJjZSlcbiAgICAgIGZvdW5kLmltZyA9IGltYWdlXG4gICAgfVxuICAgICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGZpbmRPckNyZWF0ZVdpdGhDYXQoc291cmNlKXtcbiAgICBjb25zdCB7Y2F0ZWdvcnl9ID0gc291cmNlXG4gICAgbGV0IGNhdCA9IGF3YWl0IENhdGVnb3J5LmZpbmRPckNyZWF0ZUJ5TmFtZShjYXRlZ29yeSlcbiAgICBkZWxldGUgc291cmNlW1wiY2F0ZWdvcnlcIl1cbiAgICBsZXQgZm91bmRTb3VyY2UgPSBhd2FpdCBTb3VyY2UuZmluZE9yQ3JlYXRlKHNvdXJjZSlcblxuICAgIGlmKCFmb3VuZFNvdXJjZS5jYXRlZ29yeSl7XG4gICAgICBmb3VuZFNvdXJjZS5jYXRlZ29yeSA9IGNhdC5faWRcbiAgICAgIGF3YWl0IGZvdW5kU291cmNlLnNhdmUoKVxuICAgICAgY2F0LnNvdXJjZXMucHVzaChmb3VuZFNvdXJjZS5faWQpO1xuICAgICAgYXdhaXQgY2F0LnNhdmUoKVxuICAgIH1cblxuICAgIHJldHVybiBmb3VuZFNvdXJjZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdXJjZUNsYXNzXG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vJ1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5cbmNsYXNzIFVzZXJDbGFzcyB7XG5cblxuICBnZW5lcmF0ZUF1dGhUb2tlbigpe1xuICAgIGNvbnN0IGFjY2VzcyA9ICdhdXRoJztcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHtfaWQ6IHRoaXMuX2lkLnRvSGV4U3RyaW5nKCksIGFjY2Vzc30sICdhYmMxMjMnKS50b1N0cmluZygpO1xuXG4gICAgdGhpcy50b2tlbnMucHVzaCh7YWNjZXNzLCB0b2tlbn0pO1xuXG4gICAgcmV0dXJuIHRoaXMuc2F2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGZpbmRCeVRva2VuKHRva2VuKXtcbiAgICBsZXQgZGVjb2RlZDtcblxuICAgIHRyeSB7XG4gICAgICBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgJ2FiYzEyMycpO1xuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgJ19pZCc6IGRlY29kZWQuX2lkLFxuICAgICAgJ3Rva2Vucy50b2tlbic6IHRva2VuLFxuICAgICAgJ3Rva2Vucy5hY2Nlc3MnOiAnYXV0aCdcbiAgICB9KTtcbiAgICByZXR1cm4gdXNlclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDbGFzc1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnRpY2xlQ2xhc3MgfSBmcm9tICcuL0FydGljbGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3J5Q2xhc3MgfSBmcm9tICcuL0NhdGVnb3J5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb3VyY2VDbGFzcyB9IGZyb20gJy4vU291cmNlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RlbENsYXNzIH0gZnJvbSAnLi9Nb2RlbENsYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQ2xhc3MgfSBmcm9tICcuL1VzZXInXG4iLCJleHBvcnQgKiBmcm9tICcuL25ld3MnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21tZW50IH0gZnJvbSAnLi9Db21tZW50cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlciB9IGZyb20gJy4vdXNlcnMnXG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgQXJ0aWNsZUNsYXNzIH0gZnJvbSAnLi4vY2xhc3NlcydcbmNvbnN0IHsgVHlwZXM6IHtPYmplY3RJZH0gfSA9IFNjaGVtYVxuXG5jb25zdCBBcnRpY2xlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGF1dGhvcjp7dHlwZTogU3RyaW5nfSxcbiAgdGl0bGU6IHt0eXBlOiBTdHJpbmd9LFxuICBkZXNjcmlwdGlvbjoge3R5cGU6IFN0cmluZ30sXG4gIHVybDoge3R5cGU6IFN0cmluZ30sXG4gIHVybFRvSW1hZ2U6IHt0eXBlOiBTdHJpbmd9LFxuICBjb250ZW50OiB7dHlwZTogU3RyaW5nfSxcbiAgc291cmNlOiB7dHlwZTogT2JqZWN0SWQsIHJlZjogJ1NvdXJjZSd9LFxuICB1c2VyczogW3t0eXBlOiBPYmplY3RJZCwgcmVmOiAnVXNlcnMnfV1cbn0pO1xuXG5cbkFydGljbGVTY2hlbWEubG9hZENsYXNzKEFydGljbGVDbGFzcylcbmNvbnN0IEFydGljbGUgPSBtb25nb29zZS5tb2RlbCgnQXJ0aWNsZScsIEFydGljbGVTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIiwiaW1wb3J0IG1vbmdvb3NlLCB7U2NoZW1hfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBDYXRlZ29yeUNsYXNzIH0gZnJvbSAnLi4vY2xhc3NlcydcblxuY29uc3Qge1R5cGVzIDoge09iamVjdElkfX0gPSBTY2hlbWFcblxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZ1xuICB9LFxuICBzb3VyY2VzOiBbe3R5cGU6IE9iamVjdElkLCByZWY6ICdTb3VyY2VzJ31dLFxuICB1c2VyczogW3t0eXBlOiBPYmplY3RJZCwgcmVmOiAnVXNlcnMnfV1cblxufSk7XG5cbkNhdGVnb3J5U2NoZW1hLmxvYWRDbGFzcyhDYXRlZ29yeUNsYXNzKVxuY29uc3QgQ2F0ZWdvcnkgPSBtb25nb29zZS5tb2RlbCgnQ2F0ZWdvcnknLCBDYXRlZ29yeVNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIiwiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IFNvdXJjZUNsYXNzIH0gZnJvbSAnLi4vY2xhc3NlcydcbmNvbnN0IHsgVHlwZXM6IHtPYmplY3RJZH0gfSA9IFNjaGVtYVxuXG5cbmNvbnN0IFNvdXJjZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBpZDoge1xuICAgIHR5cGU6IFN0cmluZ1xuICB9LFxuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIHVybDoge1xuICAgIHR5cGU6IFN0cmluZ1xuICB9LFxuICBpbWc6IHtcbiAgICB0eXBlOiBTdHJpbmdcbiAgfSxcbiAgY2F0ZWdvcnk6IHsgdHlwZTogT2JqZWN0SWQsIHJlZjogJ0NhdGVnb3J5J30sXG4gIGFydGljbGVzOiBbe3R5cGU6IE9iamVjdElkLCByZWY6ICdBcnRpY2xlJ31dLFxuICB1c2VyczogW3t0eXBlOiBPYmplY3RJZCwgcmVmOiAnVXNlcnMnfV1cblxufSk7XG5cblxuU291cmNlU2NoZW1hLmxvYWRDbGFzcyhTb3VyY2VDbGFzcylcbmNvbnN0IFNvdXJjZSA9IG1vbmdvb3NlLm1vZGVsKCdTb3VyY2UnLCBTb3VyY2VTY2hlbWEpO1xuLy8gY29uc29sZS5sb2coU291cmNlKVxuZXhwb3J0IGRlZmF1bHQgU291cmNlXG4iLCJleHBvcnQge2RlZmF1bHQgYXMgQXJ0aWNsZX0gZnJvbSAnLi9BcnRpY2xlcydcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTb3VyY2V9IGZyb20gJy4vU291cmNlcydcbmV4cG9ydCB7ZGVmYXVsdCBhcyBDYXRlZ29yeX0gZnJvbSAnLi9DYXRlZ29yaWVzJ1xuIiwiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJ1xuaW1wb3J0IHtVc2VyQ2xhc3N9IGZyb20gJy4vY2xhc3NlcydcbmNvbnN0IHsgVHlwZXM6IHsgT2JqZWN0SWQgfSB9ID0gU2NoZW1hXG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgdmFsaWRhdG9yOiB2YWxpZGF0b3IuaXNFbWFpbCxcbiAgICAgIG1lc3NhZ2U6IGB7VkFMVUV9IGlzIG5vdCBhIHZhbGlkIGVtYWlsYFxuICAgIH1cbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbWlubGVuZ3RoOiBbNSwgJ3Bhc3N3b3JkIGxlbmd0aCB0b28gc2hvcnQnXVxuICB9LFxuICB0b2tlbnM6IFt7XG4gICAgYWNjZXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdG9rZW46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9XSxcbiAgYXJ0aWNsZXM6IFt7XG4gICAgdHlwZTogT2JqZWN0SWQsXG4gICAgcmVmOiAnQXJ0aWNsZXMnXG4gIH1dLFxuICBzb3VyY2VzOiBbe1xuICAgIHR5cGU6IE9iamVjdElkLFxuICAgIHJlZjogJ1NvdXJjZXMnXG4gIH1dLFxuICBjb21tZW50czogW3tcbiAgICB0eXBlOiBPYmplY3RJZCxcbiAgICByZWY6ICdDb21tZW50J1xuICB9XVxufSk7XG5cblxuVXNlclNjaGVtYS5sb2FkQ2xhc3MoVXNlckNsYXNzKVxuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnXG5pbXBvcnQge1xuICBnZXRNb3N0UmVjZW50LFxuICBjYWxsQXJ0aWNsZXNcbiB9IGZyb20gJy4uL2NvbnRyb2xsZXIvYXJ0aWNsZUNvbnRyb2xsZXInXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvcFN0b3J5Q2FjaGUocmVxLCByZXMsIG5leHQpe1xuICBhd2FpdCBjaGVja0Zvck5ld1N0b3JpZXMoKVxuICBjbGllbnQubHJhbmdlKFwidG9wU3Rvcmllc1wiLCAwLCAyMCwgKGVyciwgZGF0YSkgPT4ge1xuICAgIGlmKGVycikgdGhyb3cgZXJyO1xuICAgIGlmKGRhdGEpe1xuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCgpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc291cmNlQ2FjaGUocmVxLCByZXMsIG5leHQpe1xuICBjbGllbnQuZ2V0KFwic291cmNlc1wiLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgaWYoZXJyIHx8ICFkYXRhKXtcbiAgICAgIG5leHQoKVxuICAgIH0gZWxzZSBpZihkYXRhKXtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5QW5kQWRkVG9MaXN0KGxpc3QsIGl0ZW1zKXtcbiAgY29uc29sZS5sb2cobGlzdClcbiAgICBpdGVtcy5tYXAoYXJ0aWNsZSA9PiB7XG4gICAgICBjbGllbnQuc2FkZCgnbW9zdFJlY2VudCcsIGFydGljbGUudGl0bGUpXG4gICAgICBsZXQgc3RyaW5nZWQgPSBKU09OLnN0cmluZ2lmeShhcnRpY2xlKTtcbiAgICAgIGNsaWVudC5scHVzaChsaXN0LCBzdHJpbmdlZClcbiAgICB9KVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHNlZSBpZiB0b3Agc3RvcnkgY2FjaGUgbmVlZHMgdG8gYmUgdXBkYXRlZFxuYXN5bmMgZnVuY3Rpb24gY2hlY2tGb3JOZXdTdG9yaWVzKCl7XG4gIC8vIENhbGxpbmcgdGhlIEFQSSBmb3IgdGhlIDUgbW9zdCByZWNlbnQgc3Rvcmllc1xuICBsZXQgbmV3U3RvcmllcyA9IGF3YWl0IGdldE1vc3RSZWNlbnQoKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgbmV3U3Rvcmllcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGJyb2tlblxuICAgIC8vIGNoZWNraW5nIHRvIHNlZSBpZiB0aGVzZSA1IHN0b3JpZXMgYXJlIGluIHRoZSByZWRpcyBsaXN0XG4gICAgLy8gb2YgdGhlIDUgbW9zdCByZWNlbnQgc3Rvcmllc1xuICAgIGF3YWl0IGNsaWVudC5zaXNtZW1iZXIoXG4gICAgICAnbW9zdFJlY2VudCcsIG5ld1N0b3JpZXNbaV0udGl0bGUsXG4gICAgICBhc3luYyAoZXJyLCByZXBseSkgPT4ge1xuICAgICAgICAvLyBpZiB5ZXMsIHRoZW4gd2UgbmVlZCB0byBzZWUgaWYgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGxpc3QgYXQgYWxsXG4gICAgICAgIGlmKHJlcGx5ID09PSAxKXtcbiAgICAgICAgICAvLyBpZiBpdHMgdGhlIGZpcnN0IGl0ZXJhdGlvbiwgdGhlbiB3ZSBkb24ndCBoYXZlIHRvIGRvIGFueXRoaW5nXG4gICAgICAgICAgaWYoaSAhPT0gMCl7XG4gICAgICAgICAgICAvL2lmIGkgPiAwLCB0aGVuIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSB0b3Agc3RvcmllcyBsaXN0IHdpdGggdGhlIHN0b3JpZXMgd2UganVzdCBwdWxsZWRcbiAgICAgICAgICAgIGxldCBjYWNoZUFkZGl0aW9uID0gbmV3U3Rvcmllcy5zcGxpY2UoaSk7XG4gICAgICAgICAgICBzdHJpbmdpZnlBbmRBZGRUb0xpc3QoJ3RvcFN0b3JpZXMnLCBjYWNoZUFkZGl0aW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpbiBib3RoIGNhc2VzIHdlIGNhbiBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICBicm9rZW4gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgLy8gaWYgdGhlIDUgbW9zdCByZWNlbnQgc3RvcmllcyBmcm9tIHRoZSBBUEkgY2FsbFxuICAgIC8vIGRvbid0IG1hdGNoIGF0IGFsbCwgdGhlbiB3ZSBzaG91bGQgcmVmcmVzaCB0aGUgd2hvbGUgY2FjaGVcbiAgICBpZihicm9rZW4pe1xuICAgICAgYnJlYWtcbiAgICB9ICBlbHNlIGF3YWl0IGNhbGxBcnRpY2xlcygpXG4gIH1cbn1cbiIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBhcnRpY2xlID0gcmVxdWlyZSgnLi4vY29udHJvbGxlci9hcnRpY2xlQ29udHJvbGxlcicpO1xuY29uc3QgYXJ0aWNsZVBhdGggPSBleHByZXNzKCk7XG5pbXBvcnQgeyB0b3BTdG9yeUNhY2hlIH0gZnJvbSAnLi4vcmVkaXMnXG5cbiAgYXJ0aWNsZVBhdGgucm91dGUoJy8nKVxuICAgIC5nZXQodG9wU3RvcnlDYWNoZSwgYXJ0aWNsZS5jYWxsQXJ0aWNsZXMpO1xuXG4gIGFydGljbGVQYXRoLnJvdXRlKGAvOmlkYClcbiAgICAuZ2V0KGFydGljbGUuc2hvd0FydGljbGUpO1xuXG5leHBvcnQgZGVmYXVsdCAgYXJ0aWNsZVBhdGhcbiIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBjb21tZW50ID0gcmVxdWlyZSgnLi4vY29udHJvbGxlci9jb21tZW50Q29udHJvbGxlcicpO1xuY29uc3QgY29tbWVudFBhdGggPSBleHByZXNzKCk7XG5cbiAgY29tbWVudFBhdGgucm91dGUoJy8nKVxuICAgIC5wb3N0KGNvbW1lbnQucG9zdENvbW1lbnQpO1xuICBjb21tZW50UGF0aC5yb3V0ZSgnLzppZCcpXG4gICAgLmdldChjb21tZW50LnNob3dDb21tZW50KTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50UGF0aFxuIiwiY29uc3QgdXNlclBhdGggPSByZXF1aXJlKCcuL3VzZXJSb3V0ZXMnKTtcbmNvbnN0IHNvdXJjZVBhdGggPSByZXF1aXJlKCcuL3NvdXJjZVJvdXRlcycpO1xuY29uc3QgYXJ0aWNsZVBhdGggPSByZXF1aXJlKCcuL2FydGljbGVSb3V0ZXMnKTtcbmNvbnN0IGNvbW1lbnRQYXRoID0gcmVxdWlyZSgnLi9jb21tZW50Um91dGVzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gIGFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgndGVzdGluZycpO1xuICB9KTtcbiAgYXBwLnVzZSgnL3VzZXInLCB1c2VyUGF0aCk7XG4gIGFwcC51c2UoJy9jb21tZW50cycsIGNvbW1lbnRQYXRoKTtcbiAgYXBwLnVzZSgnL25ld3Mvc291cmNlcycsIHNvdXJjZVBhdGgpO1xuICBhcHAudXNlKCcvbmV3cy9hcnRpY2xlcycsIGFydGljbGVQYXRoKTtcblxufTtcbiIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBzb3VyY2UgPSByZXF1aXJlKCcuLi9jb250cm9sbGVyL3NvdXJjZUNvbnRyb2xsZXInKTtcbmNvbnN0IHNvdXJjZVBhdGggPSBleHByZXNzKCk7XG5pbXBvcnQgeyBzb3VyY2VDYWNoZSB9IGZyb20gJy4uL3JlZGlzJ1xuXG5cbiAgc291cmNlUGF0aC5yb3V0ZSgnLycpXG4gICAgLmdldChzb3VyY2VDYWNoZSwgc291cmNlLmNhbGxTb3VyY2VzKTtcblxuICBzb3VyY2VQYXRoLnJvdXRlKCcvc2VhcmNoJylcbiAgLnBvc3Qoc291cmNlLnNlYXJjaFNvdXJjZXMpO1xuXG4gIHNvdXJjZVBhdGgucm91dGUoJy86aWQnKVxuICAuZ2V0KHNvdXJjZS5zaG93U291cmNlKTtcblxuXG5leHBvcnQgZGVmYXVsdCBzb3VyY2VQYXRoXG4iLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgdXNlciA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXIvdXNlckNvbnRyb2xsZXInKTtcbmNvbnN0IHVzZXJQYXRoID0gZXhwcmVzcygpO1xuaW1wb3J0IHsgYXV0aGVudGljYXRlIH0gZnJvbSAnLi4vbWlkZGxld2FyZSdcblxuXG4gIHVzZXJQYXRoLnJvdXRlKCcvJylcbiAgICAucG9zdCh1c2VyLmNyZWF0ZVVzZXIpO1xuXG4gIHVzZXJQYXRoLnJvdXRlKGAvYXJ0aWNsZXNgKVxuICAgIC5wb3N0KHVzZXIuc2F2ZWRBcnRpY2xlcyk7XG5cbiAgdXNlclBhdGgucm91dGUoJy9mYXZBcnRpY2xlJylcbiAgICAucG9zdCh1c2VyLmZhdkFydGljbGUpO1xuXG4gIHVzZXJQYXRoLnJvdXRlKCcvZm9sbG93U291cmNlJylcbiAgICAucG9zdCh1c2VyLmZvbGxvd1NvdXJjZSk7XG5cbiAgdXNlclBhdGgucm91dGUoJy9sb2dpbicpXG4gICAgLnBvc3QodXNlci5sb2dpbik7XG5cbiAgdXNlclBhdGgucm91dGUoJy9zZXNzaW9uJylcbiAgICAucG9zdChhdXRoZW50aWNhdGUsIHVzZXIucmV0cmlldmVTZXNzaW9uKVxuXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJQYXRoXG4iLCJyZXF1aXJlKCcuL2NvbmZpZy9jb25maWcnKVxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IG1vbmdvb3NlICA9IHJlcXVpcmUoJy4vZGIvbW9uZ29vc2UnKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuXG4vLyAqKioqKioqKiBGRUFUVVJFUyBOT1QgUkVBRFkgRk9SIFBST0RVQ1RJT05cbi8vIGltcG9ydCBzZXJ2ZXIgZnJvbSAnLi9ncmFwaCdcbi8vIGNvbnN0IFJlZGlzU3RvcmUgPSByZXF1aXJlKCdjb25uZWN0LXJlZGlzJykoc2Vzc2lvbik7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9yb3V0ZXMnKTtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5jb25zdCBhbGxvd2VkT3JpZ2lucyA9IFtcbiAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICdodHRwczovL3Byb3RlY3RlZC1iYXlvdS00MDkxMy5oZXJva3VhcHAuY29tJ1xuXTtcblxuYXBwLnVzZShjb3JzKHtcbiAgb3JpZ2luOiBmdW5jdGlvbihvcmlnaW4sIGNhbGxiYWNrKXtcbiAgICBpZighb3JpZ2luKSByZXR1cm4gY2FsbGJhY2sobnVsbCwgdHJ1ZSk7XG4gICAgaWYoYWxsb3dlZE9yaWdpbnMuaW5kZXhPZihvcmlnaW4pID09PSAtMSl7XG4gICAgICBjb25zdCBtc2cgPSAnVGhlIENPUlMgcG9saWN5IGZvciB0aGlzIHNpdGUgZG9lcyBub3QgJyArXG4gICAgICAgICAgICAgICAgJ2FsbG93IGFjY2VzcyBmcm9tIHRoZSBzcGVjaWZpZWQgT3JpZ2luLic7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKG1zZyksIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHRydWUpO1xuICB9XG59KSk7XG5cbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKVxuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuXG5yb3V0ZXMoYXBwKTtcblxuYXBwLmxpc3RlbihQT1JUIHx8IDMwMDEsICgpID0+IGNvbnNvbGUubG9nKGBzdGFydGVkIHVwIG9uICR7UE9SVH1gKSk7XG5cbmV4cG9ydCB7XG4gIGFwcCxcbiAgcGFzc3BvcnRcbn07XG5cbi8vIC0tLS0tLS0tLS0gV09SSyBXSVRIIENBQ0hFRCBTRVNTSU9OUyBGT1IgVVNFUlNcbi8vIGFwcC51c2Uoc2Vzc2lvbih7XG4vLyAgIHNlY3JldDogXCJ3b3JsZGx5XCIsXG4vLyAgIHN0b3JlOiBuZXcgUmVkaXNTdG9yZSh7IGhvc3Q6ICdsb2NhbGhvc3QnLCBwb3J0OiA2Mzc5LCBjbGllbnQsIHR0bCA6ICAyNjB9KSxcbi8vICAgcmVzYXZlOiB0cnVlLFxuLy8gICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2Vcbi8vIH0pKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXdzYXBpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZGlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0b3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==