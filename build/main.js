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

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./server/config/config.js":
/*!*********************************!*\
  !*** ./server/config/config.js ***!
  \*********************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n\nvar env = \"development\" || false;\n\nif (env === 'test') {\n  process.env.MONGODB_URI = 'mongodb://localhost:27017/news-test';\n} else if (env === 'graph') {\n  process.env.MONGODB_URI = 'mongodb://localhost:27017/news-graph';\n} else if (env === 'development') {\n  process.env.MONGODB_URI = 'mongodb://localhost:27017/news';\n} // configuring Redis for Heroku/Dev\n\n\nvar client;\n\nif (process.env.REDISTOGO_URL) {\n  var rtg = __webpack_require__(/*! url */ \"url\").parse(process.env.REDISTOGO_URL);\n\n  client = redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient(rtg.port, rtg.hostname);\n  client.auth(rtg.auth.split(\":\")[1]);\n} else {\n  client = redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient();\n}\n\n\n\n//# sourceURL=webpack:///./server/config/config.js?");

/***/ }),

/***/ "./server/controller/articleController.js":
/*!************************************************!*\
  !*** ./server/controller/articleController.js ***!
  \************************************************/
/*! exports provided: callArticles, showArticle, getMostRecent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callArticles\", function() { return callArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showArticle\", function() { return showArticle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMostRecent\", function() { return getMostRecent; });\n/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! newsapi */ \"newsapi\");\n/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(newsapi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./server/config/config.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\n/* harmony import */ var _connectingFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connectingFuncs */ \"./server/controller/connectingFuncs.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar newsapi = new newsapi__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.NEWS_API);\n\n\n\nvar callArticles =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var articles, response, i, story;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return newsapi.v2.topHeadlines({\n              language: 'en',\n              country: 'us',\n              category: \"general\"\n            });\n\n          case 2:\n            articles = _context.sent;\n            _context.next = 5;\n            return Object(_connectingFuncs__WEBPACK_IMPORTED_MODULE_3__[\"asyncMapping\"])(articles.articles, _models__WEBPACK_IMPORTED_MODULE_2__[\"Article\"].findOrCreateWithSource);\n\n          case 5:\n            response = _context.sent;\n            // res.status(200).send(response)\n            //  Redis Caching\n            response.map(function (article) {\n              var stringed = JSON.stringify(article);\n              _config_config__WEBPACK_IMPORTED_MODULE_1__[\"client\"].lpush('topStories', stringed);\n            });\n\n            for (i = 0; i < 5; i++) {\n              story = response[i]._doc.title;\n              _config_config__WEBPACK_IMPORTED_MODULE_1__[\"client\"].sadd('mostRecent', story);\n            }\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function callArticles(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar showArticle =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var id, article;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            id = req.params.id;\n            _context2.next = 3;\n            return _models__WEBPACK_IMPORTED_MODULE_2__[\"Article\"].findById(id).populate('source', 'name');\n\n          case 3:\n            article = _context2.sent;\n            res.status(200).send(JSON.stringify(article, undefined, 2));\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function showArticle(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar getMostRecent =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3() {\n    var articles;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return newsapi.v2.topHeadlines({\n              language: 'en',\n              country: 'us',\n              category: \"general\",\n              pageSize: 5\n            });\n\n          case 2:\n            articles = _context3.sent;\n            return _context3.abrupt(\"return\", articles.articles);\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, this);\n  }));\n\n  return function getMostRecent() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./server/controller/articleController.js?");

/***/ }),

/***/ "./server/controller/commentController.js":
/*!************************************************!*\
  !*** ./server/controller/commentController.js ***!
  \************************************************/
/*! exports provided: postComment, showComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postComment\", function() { return postComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showComment\", function() { return showComment; });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar postComment = function postComment(req, res) {\n  _models__WEBPACK_IMPORTED_MODULE_0__[\"Comment\"].create({\n    content: req.body.content,\n    user: req.body.user\n  }).then(function (doc) {\n    res.status(200).send(doc);\n  }, function (e) {\n    return res.status(400).send(e);\n  });\n};\nvar showComment =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _models__WEBPACK_IMPORTED_MODULE_0__[\"Comment\"].findById(req.params.id).populate({\n              path: 'user',\n              select: 'name'\n            }).exec().then(function (doc) {\n              res.status(200).send(doc);\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function showComment(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./server/controller/commentController.js?");

/***/ }),

/***/ "./server/controller/connectingFuncs.js":
/*!**********************************************!*\
  !*** ./server/controller/connectingFuncs.js ***!
  \**********************************************/
/*! exports provided: populateRelationships, asyncMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateRelationships\", function() { return populateRelationships; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asyncMapping\", function() { return asyncMapping; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction populateRelationships(source, article) {\n  source.addArticle(article);\n  article.source(source);\n} ///       in sequence\n\n\nfunction asyncMapping(_x, _x2) {\n  return _asyncMapping.apply(this, arguments);\n} //////     in parrallel\n// async function asyncMapping (objects, callback){\n//   return await Promise.all(objects.map(async(obj) => {\n//     debugger\n//     let res = await callback(obj)\n//       return res\n//     }))\n//   }\n\n\nfunction _asyncMapping() {\n  _asyncMapping = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(objects, cb) {\n    var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, object, result;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            res = [];\n            _iteratorNormalCompletion = true;\n            _didIteratorError = false;\n            _iteratorError = undefined;\n            _context.prev = 4;\n            _iterator = objects[Symbol.iterator]();\n\n          case 6:\n            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n              _context.next = 15;\n              break;\n            }\n\n            object = _step.value;\n            _context.next = 10;\n            return cb(object);\n\n          case 10:\n            result = _context.sent;\n            res.push(result);\n\n          case 12:\n            _iteratorNormalCompletion = true;\n            _context.next = 6;\n            break;\n\n          case 15:\n            _context.next = 21;\n            break;\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](4);\n            _didIteratorError = true;\n            _iteratorError = _context.t0;\n\n          case 21:\n            _context.prev = 21;\n            _context.prev = 22;\n\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n              _iterator.return();\n            }\n\n          case 24:\n            _context.prev = 24;\n\n            if (!_didIteratorError) {\n              _context.next = 27;\n              break;\n            }\n\n            throw _iteratorError;\n\n          case 27:\n            return _context.finish(24);\n\n          case 28:\n            return _context.finish(21);\n\n          case 29:\n            return _context.abrupt(\"return\", res);\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28]]);\n  }));\n  return _asyncMapping.apply(this, arguments);\n}\n\n\n\n//# sourceURL=webpack:///./server/controller/connectingFuncs.js?");

/***/ }),

/***/ "./server/controller/sourceController.js":
/*!***********************************************!*\
  !*** ./server/controller/sourceController.js ***!
  \***********************************************/
/*! exports provided: callSources, showSource, searchSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callSources\", function() { return callSources; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSource\", function() { return showSource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchSources\", function() { return searchSources; });\n/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! newsapi */ \"newsapi\");\n/* harmony import */ var newsapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(newsapi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\n/* harmony import */ var _connectingFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectingFuncs */ \"./server/controller/connectingFuncs.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ \"./server/config/config.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar newsapi = new newsapi__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.NEWS_API);\n\n\n\nvar callSources =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var response, answer, cachedSources;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return newsapi.v2.sources({\n              language: 'en',\n              country: 'us',\n              category: \"general\"\n            });\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return Object(_connectingFuncs__WEBPACK_IMPORTED_MODULE_2__[\"asyncMapping\"])(response.sources, _models__WEBPACK_IMPORTED_MODULE_1__[\"Source\"].findOrCreateWithCat);\n\n          case 5:\n            answer = _context.sent;\n            res.status(200).send(answer); // Redis Caching for news sources\n            // a lot of work is done to fetch their sources\n            // and to get their pictures\n\n            cachedSources = JSON.stringify(answer);\n            _config_config__WEBPACK_IMPORTED_MODULE_3__[\"client\"].set('sources', cachedSources);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function callSources(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar showSource = function showSource(req, res) {\n  var id = req.params.id;\n  var source = _models__WEBPACK_IMPORTED_MODULE_1__[\"Source\"].findById(id);\n  source.populate({\n    path: 'articles',\n    select: \"author title description url urlToImage content\"\n  }).exec(function (err, posts) {\n    posts.articles.reverse();\n    res.status(200).send(JSON.stringify(posts, undefined, 2));\n  });\n};\nvar searchSources =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var sources;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _models__WEBPACK_IMPORTED_MODULE_1__[\"Source\"].find({\n              id: req.body.source\n            });\n\n          case 2:\n            sources = _context2.sent;\n            _config_config__WEBPACK_IMPORTED_MODULE_3__[\"client\"].hgetall(req.body.source, function (err, obj) {\n              res.status(200).send(obj);\n            });\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function searchSources(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./server/controller/sourceController.js?");

/***/ }),

/***/ "./server/controller/userController.js":
/*!*********************************************!*\
  !*** ./server/controller/userController.js ***!
  \*********************************************/
/*! exports provided: createUser, login, favArticle, followSource, savedArticles, retrieveSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favArticle\", function() { return favArticle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"followSource\", function() { return followSource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savedArticles\", function() { return savedArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retrieveSession\", function() { return retrieveSession; });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ \"./server/server.js\");\n/* harmony import */ var _connectingFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectingFuncs */ \"./server/controller/connectingFuncs.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar createUser =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var user, token, errors, key;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models__WEBPACK_IMPORTED_MODULE_0__[\"User\"].create(req.body);\n\n          case 3:\n            user = _context.sent;\n            _context.next = 6;\n            return user.generateAuthToken();\n\n          case 6:\n            token = _context.sent;\n            res.status(200).send({\n              user: user,\n              token: token\n            });\n            _context.next = 16;\n            break;\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            // ************* Not super flushed out, need to return back to.\n            errors = [];\n            if (_context.t0.errmsg) errors.push(\"Email already taken\");\n\n            if (_context.t0.errors) {\n              for (key in _context.t0.errors) {\n                if (_context.t0.errors[key].message) errors.push(_context.t0.errors[key].message);\n              }\n            }\n\n            res.send({\n              errors: errors\n            });\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 10]]);\n  }));\n\n  return function createUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar login =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _models__WEBPACK_IMPORTED_MODULE_0__[\"User\"].findOne({\n              email: req.body.email\n            });\n\n          case 3:\n            user = _context2.sent;\n\n            if (user) {\n              if (user.password === req.body.password) {\n                res.send({\n                  user: user,\n                  token: user.tokens[0].token\n                });\n              } else res.send({\n                errors: ['password is incorrect']\n              });\n            } else res.send({\n              errors: ['email does not exist']\n            });\n\n            _context2.next = 10;\n            break;\n\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            res.send(_context2.t0);\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this, [[0, 7]]);\n  }));\n\n  return function login(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar favArticle =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(req, res) {\n    var user, article;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return _models__WEBPACK_IMPORTED_MODULE_0__[\"User\"].findById(req.body.userID);\n\n          case 2:\n            user = _context3.sent;\n            _context3.next = 5;\n            return _models__WEBPACK_IMPORTED_MODULE_0__[\"Article\"].findById(req.body.articleID);\n\n          case 5:\n            article = _context3.sent;\n            user.articles.push(article);\n            article.users.push(user);\n            user.save().then(null, function (e) {\n              return e;\n            });\n            article.save().then(null, function (e) {\n              return e;\n            });\n            res.status(200).send({\n              success: true\n            });\n\n          case 11:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, this);\n  }));\n\n  return function favArticle(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar followSource =\n/*#__PURE__*/\nfunction () {\n  var _ref4 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee4(req, res) {\n    var user, source;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return _models__WEBPACK_IMPORTED_MODULE_0__[\"User\"].findById(req.body.userID).then(function (doc) {\n              return doc;\n            });\n\n          case 2:\n            user = _context4.sent;\n            _context4.next = 5;\n            return _models__WEBPACK_IMPORTED_MODULE_0__[\"Source\"].findById(req.body.sourceID).then(function (doc) {\n              return doc;\n            });\n\n          case 5:\n            source = _context4.sent;\n            user.sources.push(source);\n            source.users.push(user);\n            user.save().then(null, function (e) {\n              return e;\n            });\n            source.save().then(null, function (e) {\n              return e;\n            });\n            res.status(200).send(source);\n\n          case 11:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, this);\n  }));\n\n  return function followSource(_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar savedArticles =\n/*#__PURE__*/\nfunction () {\n  var _ref5 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee6(req, res) {\n    var articles, foundArticles;\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            articles = req.body.articles;\n            _context6.next = 3;\n            return Promise.all(articles.map(\n            /*#__PURE__*/\n            function () {\n              var _ref6 = _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee5(article) {\n                var found;\n                return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                  while (1) {\n                    switch (_context5.prev = _context5.next) {\n                      case 0:\n                        _context5.next = 2;\n                        return _models__WEBPACK_IMPORTED_MODULE_0__[\"Article\"].findById(article);\n\n                      case 2:\n                        found = _context5.sent;\n                        return _context5.abrupt(\"return\", found);\n\n                      case 4:\n                      case \"end\":\n                        return _context5.stop();\n                    }\n                  }\n                }, _callee5, this);\n              }));\n\n              return function (_x11) {\n                return _ref6.apply(this, arguments);\n              };\n            }()));\n\n          case 3:\n            foundArticles = _context6.sent;\n            res.status(200).send(JSON.stringify(foundArticles, undefined, 2));\n\n          case 5:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6, this);\n  }));\n\n  return function savedArticles(_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}();\nvar retrieveSession = function retrieveSession(req, res) {\n  res.status(200).send(req.user);\n};\n_server__WEBPACK_IMPORTED_MODULE_1__[\"passport\"].serializeUser(function (userId, done) {\n  done(null, userId);\n});\n_server__WEBPACK_IMPORTED_MODULE_1__[\"passport\"].deserializeUser(function (userId, done) {\n  done(null, userId);\n});\n\n//# sourceURL=webpack:///./server/controller/userController.js?");

/***/ }),

/***/ "./server/db/mongoose.js":
/*!*******************************!*\
  !*** ./server/db/mongoose.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI);\nvar db = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection; // db.dropDatabase()\n// db.dropCollection('sources')\n\ndb.on('error', function (err) {\n  return console.log(err);\n});\ndb.on('open', function () {\n  return console.log(\"success on \".concat(process.port));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./server/db/mongoose.js?");

/***/ }),

/***/ "./server/middleware/index.js":
/*!************************************!*\
  !*** ./server/middleware/index.js ***!
  \************************************/
/*! exports provided: authenticate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticate\", function() { return authenticate; });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./server/models/index.js\");\n\nvar authenticate = function authenticate(req, res, next) {\n  var token = req.body.token;\n  _models__WEBPACK_IMPORTED_MODULE_0__[\"User\"].findByToken(token).then(function (user) {\n    if (!user) {\n      return Promise.reject();\n    }\n\n    req.user = user;\n    req.token = token;\n    next();\n  }).catch(function (e) {\n    res.status(401).send();\n  });\n};\n\n//# sourceURL=webpack:///./server/middleware/index.js?");

/***/ }),

/***/ "./server/models/Comments.js":
/*!***********************************!*\
  !*** ./server/models/Comments.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"].Types.ObjectId;\nvar CommentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  content: {\n    type: String\n  },\n  user: {\n    type: ObjectId,\n    ref: 'User'\n  },\n  article: {\n    type: ObjectId,\n    ref: 'Articles'\n  }\n}); //*****WORK ON MIDDLEWARE FOR AUTOMATIC POPULATION***//\n// CommentSchema.post('find', async (doc) => {\n//   console.log(doc, \"________________\")\n//   await doc.populate({path: 'user', select: 'name'})\n//   .execPopulate()\n// })\n// CommentSchema.pre('find',  () => {\n//   console.log(this, \"_________________\")\n//   this.populate({path: 'user', select: 'name'})\n//   .execPopulate()\n// })\n\nvar Comment = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Comment', CommentSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\n//# sourceURL=webpack:///./server/models/Comments.js?");

/***/ }),

/***/ "./server/models/classes/Article.js":
/*!******************************************!*\
  !*** ./server/models/classes/Article.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../news */ \"./server/models/news/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ArticleClass =\n/*#__PURE__*/\nfunction () {\n  function ArticleClass() {\n    _classCallCheck(this, ArticleClass);\n  }\n\n  _createClass(ArticleClass, [{\n    key: \"setSource\",\n    // setSource(source){\n    //     this.source = source;\n    //     this.save().then(null, e => e)\n    // }\n    value: function setSource(_ref) {\n      var _id = _ref._id,\n          name = _ref.name;\n      this.source = {\n        _id: _id,\n        name: name\n      };\n      this.save().then(null, function (e) {\n        return e;\n      });\n    }\n  }, {\n    key: \"addUser\",\n    value: function addUser(user) {\n      var foundUser = this.users.find(function (follower) {\n        return follower.id === user.id;\n      });\n\n      if (!foundUser) {\n        this.users.push(user);\n      }\n    }\n  }], [{\n    key: \"findOrCreate\",\n    value: function () {\n      var _findOrCreate = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(data) {\n        var article;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.findOne({\n                  title: data.title\n                }).populate('source', 'name');\n\n              case 2:\n                article = _context.sent;\n\n                if (article) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 6;\n                return this.create(data);\n\n              case 6:\n                article = _context.sent;\n\n              case 7:\n                return _context.abrupt(\"return\", article);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function findOrCreate(_x) {\n        return _findOrCreate.apply(this, arguments);\n      }\n\n      return findOrCreate;\n    }()\n  }, {\n    key: \"findOrCreateWithSource\",\n    value: function () {\n      var _findOrCreateWithSource = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(article) {\n        var _article$source, id, name, source, articleDoc;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _article$source = article.source, id = _article$source.id, name = _article$source.name;\n                _context2.next = 3;\n                return _news__WEBPACK_IMPORTED_MODULE_0__[\"Source\"].findOne({\n                  id: id,\n                  name: name\n                });\n\n              case 3:\n                source = _context2.sent;\n                delete article[\"source\"];\n                _context2.next = 7;\n                return _news__WEBPACK_IMPORTED_MODULE_0__[\"Article\"].findOrCreate(article);\n\n              case 7:\n                articleDoc = _context2.sent;\n\n                if (!(source && !articleDoc.source)) {\n                  _context2.next = 12;\n                  break;\n                }\n\n                _context2.next = 11;\n                return source.addArticle(articleDoc);\n\n              case 11:\n                articleDoc.setSource(source);\n\n              case 12:\n                _context2.next = 14;\n                return articleDoc.populate('source', 'name');\n\n              case 14:\n                articleDoc = _context2.sent;\n                return _context2.abrupt(\"return\", articleDoc);\n\n              case 16:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function findOrCreateWithSource(_x2) {\n        return _findOrCreateWithSource.apply(this, arguments);\n      }\n\n      return findOrCreateWithSource;\n    }()\n  }]);\n\n  return ArticleClass;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleClass);\n\n//# sourceURL=webpack:///./server/models/classes/Article.js?");

/***/ }),

/***/ "./server/models/classes/Category.js":
/*!*******************************************!*\
  !*** ./server/models/classes/Category.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CategoryClass =\n/*#__PURE__*/\nfunction () {\n  function CategoryClass() {\n    _classCallCheck(this, CategoryClass);\n  }\n\n  _createClass(CategoryClass, null, [{\n    key: \"findOrCreateByName\",\n    value: function () {\n      var _findOrCreateByName = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(name) {\n        var cat;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.findOne({\n                  name: name\n                });\n\n              case 2:\n                cat = _context.sent;\n\n                if (cat) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 6;\n                return this.create({\n                  name: name\n                });\n\n              case 6:\n                cat = _context.sent;\n\n              case 7:\n                return _context.abrupt(\"return\", cat);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function findOrCreateByName(_x) {\n        return _findOrCreateByName.apply(this, arguments);\n      }\n\n      return findOrCreateByName;\n    }()\n  }]);\n\n  return CategoryClass;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryClass);\n\n//# sourceURL=webpack:///./server/models/classes/Category.js?");

/***/ }),

/***/ "./server/models/classes/Favicon.js":
/*!******************************************!*\
  !*** ./server/models/classes/Favicon.js ***!
  \******************************************/
/*! exports provided: getImageURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImageURL\", function() { return getImageURL; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar baseURL = \"https://besticon-demo.herokuapp.com/\";\n\nfunction getImageURL(_x) {\n  return _getImageURL.apply(this, arguments);\n}\n\nfunction _getImageURL() {\n  _getImageURL = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(url) {\n    var image;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(baseURL, \"icon?url=\").concat(url, \"&size=50..150..300\"));\n\n          case 2:\n            image = _context.sent;\n            return _context.abrupt(\"return\", image.request.res.responseUrl);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n  return _getImageURL.apply(this, arguments);\n}\n\n\n\n//# sourceURL=webpack:///./server/models/classes/Favicon.js?");

/***/ }),

/***/ "./server/models/classes/ModelClass.js":
/*!*********************************************!*\
  !*** ./server/models/classes/ModelClass.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Attempt at super class to hold methods for all Models\n// like findOrCreateBy\nvar ModelClass =\n/*#__PURE__*/\nfunction () {\n  function ModelClass(model) {\n    _classCallCheck(this, ModelClass);\n\n    console.log(model);\n    this.model = model;\n  }\n\n  _createClass(ModelClass, null, [{\n    key: \"findOrCreateByID\",\n    value: function () {\n      var _findOrCreateByID = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(instance) {\n        var answer;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.model.findOne({\n                  id: instance\n                });\n\n              case 2:\n                answer = _context.sent;\n\n                if (answer) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 6;\n                return this.model.create({\n                  identifier: instance\n                });\n\n              case 6:\n                answer = _context.sent;\n\n              case 7:\n                return _context.abrupt(\"return\", answer);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function findOrCreateByID(_x) {\n        return _findOrCreateByID.apply(this, arguments);\n      }\n\n      return findOrCreateByID;\n    }()\n  }, {\n    key: \"findOrCreate\",\n    value: function () {\n      var _findOrCreate = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(identifier, instance) {\n        var answer;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.model.findOne(_defineProperty({}, identifier, instance));\n\n              case 2:\n                answer = _context2.sent;\n\n                if (answer) {\n                  _context2.next = 7;\n                  break;\n                }\n\n                _context2.next = 6;\n                return this.model.create({\n                  identifier: instance\n                });\n\n              case 6:\n                answer = _context2.sent;\n\n              case 7:\n                return _context2.abrupt(\"return\", answer);\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function findOrCreate(_x2, _x3) {\n        return _findOrCreate.apply(this, arguments);\n      }\n\n      return findOrCreate;\n    }()\n  }]);\n\n  return ModelClass;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModelClass);\n\n//# sourceURL=webpack:///./server/models/classes/ModelClass.js?");

/***/ }),

/***/ "./server/models/classes/Source.js":
/*!*****************************************!*\
  !*** ./server/models/classes/Source.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./server/models/index.js\");\n/* harmony import */ var _Favicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Favicon */ \"./server/models/classes/Favicon.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar SourceClass =\n/*#__PURE__*/\nfunction () {\n  function SourceClass() {\n    _classCallCheck(this, SourceClass);\n  }\n\n  _createClass(SourceClass, [{\n    key: \"addArticle\",\n    value: function addArticle(article) {\n      this.articles.push(article);\n      this.save().then(null, function (e) {\n        return e;\n      });\n    }\n  }], [{\n    key: \"findOrCreate\",\n    value: function () {\n      var _findOrCreate = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(source) {\n        var found, image;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.findOne({\n                  id: source.id\n                });\n\n              case 2:\n                found = _context.sent;\n\n                if (!(!found || !found._doc)) {\n                  _context.next = 11;\n                  break;\n                }\n\n                _context.next = 6;\n                return Object(_Favicon__WEBPACK_IMPORTED_MODULE_1__[\"getImageURL\"])(source.url);\n\n              case 6:\n                image = _context.sent;\n                _context.next = 9;\n                return this.create(source);\n\n              case 9:\n                found = _context.sent;\n                found.img = image;\n\n              case 11:\n                return _context.abrupt(\"return\", found);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function findOrCreate(_x) {\n        return _findOrCreate.apply(this, arguments);\n      }\n\n      return findOrCreate;\n    }()\n  }, {\n    key: \"findOrCreateWithCat\",\n    value: function () {\n      var _findOrCreateWithCat = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(source) {\n        var category, cat, foundSource;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                category = source.category;\n                _context2.next = 3;\n                return ___WEBPACK_IMPORTED_MODULE_0__[\"Category\"].findOrCreateByName(category);\n\n              case 3:\n                cat = _context2.sent;\n                delete source[\"category\"];\n                _context2.next = 7;\n                return ___WEBPACK_IMPORTED_MODULE_0__[\"Source\"].findOrCreate(source);\n\n              case 7:\n                foundSource = _context2.sent;\n\n                if (foundSource.category) {\n                  _context2.next = 15;\n                  break;\n                }\n\n                foundSource.category = cat._id;\n                _context2.next = 12;\n                return foundSource.save();\n\n              case 12:\n                cat.sources.push(foundSource._id);\n                _context2.next = 15;\n                return cat.save();\n\n              case 15:\n                return _context2.abrupt(\"return\", foundSource);\n\n              case 16:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function findOrCreateWithCat(_x2) {\n        return _findOrCreateWithCat.apply(this, arguments);\n      }\n\n      return findOrCreateWithCat;\n    }()\n  }]);\n\n  return SourceClass;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SourceClass);\n\n//# sourceURL=webpack:///./server/models/classes/Source.js?");

/***/ }),

/***/ "./server/models/classes/User.js":
/*!***************************************!*\
  !*** ./server/models/classes/User.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./server/models/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar UserClass =\n/*#__PURE__*/\nfunction () {\n  function UserClass() {\n    _classCallCheck(this, UserClass);\n  }\n\n  _createClass(UserClass, [{\n    key: \"generateAuthToken\",\n    value: function generateAuthToken() {\n      var access = 'auth';\n      var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n        _id: this._id.toHexString(),\n        access: access\n      }, 'abc123').toString();\n      this.tokens.push({\n        access: access,\n        token: token\n      });\n      return this.save().then(function () {\n        return token;\n      });\n    }\n  }], [{\n    key: \"findByToken\",\n    value: function () {\n      var _findByToken = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(token) {\n        var decoded, user;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token, 'abc123');\n                _context.next = 7;\n                break;\n\n              case 4:\n                _context.prev = 4;\n                _context.t0 = _context[\"catch\"](0);\n                return _context.abrupt(\"return\", _context.t0);\n\n              case 7:\n                _context.next = 9;\n                return ___WEBPACK_IMPORTED_MODULE_0__[\"User\"].findOne({\n                  '_id': decoded._id,\n                  'tokens.token': token,\n                  'tokens.access': 'auth'\n                });\n\n              case 9:\n                user = _context.sent;\n                return _context.abrupt(\"return\", user);\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[0, 4]]);\n      }));\n\n      function findByToken(_x) {\n        return _findByToken.apply(this, arguments);\n      }\n\n      return findByToken;\n    }()\n  }]);\n\n  return UserClass;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserClass);\n\n//# sourceURL=webpack:///./server/models/classes/User.js?");

/***/ }),

/***/ "./server/models/classes/index.js":
/*!****************************************!*\
  !*** ./server/models/classes/index.js ***!
  \****************************************/
/*! exports provided: ArticleClass, CategoryClass, SourceClass, ModelClass, UserClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ \"./server/models/classes/Article.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ArticleClass\", function() { return _Article__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category */ \"./server/models/classes/Category.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CategoryClass\", function() { return _Category__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Source */ \"./server/models/classes/Source.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SourceClass\", function() { return _Source__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _ModelClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelClass */ \"./server/models/classes/ModelClass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ModelClass\", function() { return _ModelClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./server/models/classes/User.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UserClass\", function() { return _User__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./server/models/classes/index.js?");

/***/ }),

/***/ "./server/models/index.js":
/*!********************************!*\
  !*** ./server/models/index.js ***!
  \********************************/
/*! exports provided: Comment, User, Article, Source, Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ \"./server/models/news/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Article\", function() { return _news__WEBPACK_IMPORTED_MODULE_0__[\"Article\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Source\", function() { return _news__WEBPACK_IMPORTED_MODULE_0__[\"Source\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return _news__WEBPACK_IMPORTED_MODULE_0__[\"Category\"]; });\n\n/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments */ \"./server/models/Comments.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Comment\", function() { return _Comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ \"./server/models/users.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _users__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./server/models/index.js?");

/***/ }),

/***/ "./server/models/news/Articles.js":
/*!****************************************!*\
  !*** ./server/models/news/Articles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ \"./server/models/classes/index.js\");\n\n\nvar ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"].Types.ObjectId;\nvar ArticleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  author: {\n    type: String\n  },\n  title: {\n    type: String\n  },\n  description: {\n    type: String\n  },\n  url: {\n    type: String\n  },\n  urlToImage: {\n    type: String\n  },\n  content: {\n    type: String\n  },\n  source: {\n    type: ObjectId,\n    ref: 'Source'\n  },\n  users: [{\n    type: ObjectId,\n    ref: 'Users'\n  }]\n});\nArticleSchema.loadClass(_classes__WEBPACK_IMPORTED_MODULE_1__[\"ArticleClass\"]);\nvar Article = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Article', ArticleSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\n//# sourceURL=webpack:///./server/models/news/Articles.js?");

/***/ }),

/***/ "./server/models/news/Categories.js":
/*!******************************************!*\
  !*** ./server/models/news/Categories.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ \"./server/models/classes/index.js\");\n\n\nvar ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"].Types.ObjectId;\nvar CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  name: {\n    type: String\n  },\n  sources: [{\n    type: ObjectId,\n    ref: 'Sources'\n  }],\n  users: [{\n    type: ObjectId,\n    ref: 'Users'\n  }]\n});\nCategorySchema.loadClass(_classes__WEBPACK_IMPORTED_MODULE_1__[\"CategoryClass\"]);\nvar Category = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Category', CategorySchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\n\n//# sourceURL=webpack:///./server/models/news/Categories.js?");

/***/ }),

/***/ "./server/models/news/Sources.js":
/*!***************************************!*\
  !*** ./server/models/news/Sources.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ \"./server/models/classes/index.js\");\n\n\nvar ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"].Types.ObjectId;\nvar SourceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  id: {\n    type: String\n  },\n  name: {\n    type: String\n  },\n  description: {\n    type: String\n  },\n  url: {\n    type: String\n  },\n  img: {\n    type: String\n  },\n  category: {\n    type: ObjectId,\n    ref: 'Category'\n  },\n  articles: [{\n    type: ObjectId,\n    ref: 'Article'\n  }],\n  users: [{\n    type: ObjectId,\n    ref: 'Users'\n  }]\n});\nSourceSchema.loadClass(_classes__WEBPACK_IMPORTED_MODULE_1__[\"SourceClass\"]);\nvar Source = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Source', SourceSchema); // console.log(Source)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Source);\n\n//# sourceURL=webpack:///./server/models/news/Sources.js?");

/***/ }),

/***/ "./server/models/news/index.js":
/*!*************************************!*\
  !*** ./server/models/news/index.js ***!
  \*************************************/
/*! exports provided: Article, Source, Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles */ \"./server/models/news/Articles.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Article\", function() { return _Articles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sources */ \"./server/models/news/Sources.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Source\", function() { return _Sources__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories */ \"./server/models/news/Categories.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return _Categories__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./server/models/news/index.js?");

/***/ }),

/***/ "./server/models/users.js":
/*!********************************!*\
  !*** ./server/models/users.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ \"./server/models/classes/index.js\");\n\n\n\nvar ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"].Types.ObjectId;\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  name: {\n    type: String\n  },\n  email: {\n    type: String,\n    require: true,\n    unique: true,\n    validate: {\n      validator: validator__WEBPACK_IMPORTED_MODULE_1___default.a.isEmail,\n      message: \"{VALUE} is not a valid email\"\n    }\n  },\n  password: {\n    type: String,\n    required: true,\n    minlength: [5, 'password length too short']\n  },\n  tokens: [{\n    access: {\n      type: String,\n      required: true\n    },\n    token: {\n      type: String,\n      required: true\n    }\n  }],\n  articles: [{\n    type: ObjectId,\n    ref: 'Articles'\n  }],\n  sources: [{\n    type: ObjectId,\n    ref: 'Sources'\n  }],\n  comments: [{\n    type: ObjectId,\n    ref: 'Comment'\n  }]\n});\nUserSchema.loadClass(_classes__WEBPACK_IMPORTED_MODULE_2__[\"UserClass\"]);\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./server/models/users.js?");

/***/ }),

/***/ "./server/redis/index.js":
/*!*******************************!*\
  !*** ./server/redis/index.js ***!
  \*******************************/
/*! exports provided: topStoryCache, sourceCache, stringifyAndAddToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"topStoryCache\", function() { return topStoryCache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sourceCache\", function() { return sourceCache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringifyAndAddToList\", function() { return stringifyAndAddToList; });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./server/config/config.js\");\n/* harmony import */ var _controller_articleController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/articleController */ \"./server/controller/articleController.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction topStoryCache(_x, _x2, _x3) {\n  return _topStoryCache.apply(this, arguments);\n}\n\nfunction _topStoryCache() {\n  _topStoryCache = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res, next) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return checkForNewStories();\n\n          case 2:\n            _config_config__WEBPACK_IMPORTED_MODULE_0__[\"client\"].lrange(\"topStories\", 0, 20, function (err, data) {\n              if (err) throw err;\n\n              if (data) {\n                res.status(200).send(data);\n              } else {\n                next();\n              }\n            });\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n  return _topStoryCache.apply(this, arguments);\n}\n\nfunction sourceCache(req, res, next) {\n  _config_config__WEBPACK_IMPORTED_MODULE_0__[\"client\"].get(\"sources\", function (err, data) {\n    if (err || !data) {\n      next();\n    } else if (data) {\n      res.status(200).send(data);\n    }\n  });\n}\nfunction stringifyAndAddToList(list, items) {\n  console.log(list);\n  items.map(function (article) {\n    _config_config__WEBPACK_IMPORTED_MODULE_0__[\"client\"].sadd('mostRecent', article.title);\n    var stringed = JSON.stringify(article);\n    _config_config__WEBPACK_IMPORTED_MODULE_0__[\"client\"].lpush(list, stringed);\n  });\n} // function to see if top story cache needs to be updated\n\nfunction checkForNewStories() {\n  return _checkForNewStories.apply(this, arguments);\n}\n\nfunction _checkForNewStories() {\n  _checkForNewStories = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3() {\n    var newStories, _loop, i, _ret;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return Object(_controller_articleController__WEBPACK_IMPORTED_MODULE_1__[\"getMostRecent\"])();\n\n          case 2:\n            newStories = _context4.sent;\n            _loop =\n            /*#__PURE__*/\n            regeneratorRuntime.mark(function _loop(i) {\n              var broken;\n              return regeneratorRuntime.wrap(function _loop$(_context3) {\n                while (1) {\n                  switch (_context3.prev = _context3.next) {\n                    case 0:\n                      broken = void 0; // checking to see if these 5 stories are in the redis list\n                      // of the 5 most recent stories\n\n                      _context3.next = 3;\n                      return _config_config__WEBPACK_IMPORTED_MODULE_0__[\"client\"].sismember('mostRecent', newStories[i].title,\n                      /*#__PURE__*/\n                      function () {\n                        var _ref = _asyncToGenerator(\n                        /*#__PURE__*/\n                        regeneratorRuntime.mark(function _callee2(err, reply) {\n                          var cacheAddition;\n                          return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                            while (1) {\n                              switch (_context2.prev = _context2.next) {\n                                case 0:\n                                  // if yes, then we need to see if we need to update the list at all\n                                  if (reply === 1) {\n                                    // if its the first iteration, then we don't have to do anything\n                                    if (i !== 0) {\n                                      //if i > 0, then we need to update the top stories list with the stories we just pulled\n                                      cacheAddition = newStories.splice(i);\n                                      stringifyAndAddToList('topStories', cacheAddition);\n                                    } // in both cases we can break out of the loop\n\n\n                                    broken = true;\n                                  }\n\n                                case 1:\n                                case \"end\":\n                                  return _context2.stop();\n                              }\n                            }\n                          }, _callee2, this);\n                        }));\n\n                        return function (_x4, _x5) {\n                          return _ref.apply(this, arguments);\n                        };\n                      }());\n\n                    case 3:\n                      if (!broken) {\n                        _context3.next = 7;\n                        break;\n                      }\n\n                      return _context3.abrupt(\"return\", \"break\");\n\n                    case 7:\n                      _context3.next = 9;\n                      return Object(_controller_articleController__WEBPACK_IMPORTED_MODULE_1__[\"callArticles\"])();\n\n                    case 9:\n                    case \"end\":\n                      return _context3.stop();\n                  }\n                }\n              }, _loop, this);\n            });\n            i = 0;\n\n          case 5:\n            if (!(i < newStories.length)) {\n              _context4.next = 13;\n              break;\n            }\n\n            return _context4.delegateYield(_loop(i), \"t0\", 7);\n\n          case 7:\n            _ret = _context4.t0;\n\n            if (!(_ret === \"break\")) {\n              _context4.next = 10;\n              break;\n            }\n\n            return _context4.abrupt(\"break\", 13);\n\n          case 10:\n            i++;\n            _context4.next = 5;\n            break;\n\n          case 13:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee3, this);\n  }));\n  return _checkForNewStories.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/redis/index.js?");

/***/ }),

/***/ "./server/routes/articleRoutes.js":
/*!****************************************!*\
  !*** ./server/routes/articleRoutes.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redis */ \"./server/redis/index.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar article = __webpack_require__(/*! ../controller/articleController */ \"./server/controller/articleController.js\");\n\nvar articlePath = express();\n\narticlePath.route('/').get(_redis__WEBPACK_IMPORTED_MODULE_0__[\"topStoryCache\"], article.callArticles);\narticlePath.route(\"/:id\").get(article.showArticle);\nmodule.exports = articlePath;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/articleRoutes.js?");

/***/ }),

/***/ "./server/routes/commentRoutes.js":
/*!****************************************!*\
  !*** ./server/routes/commentRoutes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar comment = __webpack_require__(/*! ../controller/commentController */ \"./server/controller/commentController.js\");\n\nvar commentPath = express();\ncommentPath.route('/').post(comment.postComment);\ncommentPath.route('/:id').get(comment.showComment);\nmodule.exports = commentPath;\n\n//# sourceURL=webpack:///./server/routes/commentRoutes.js?");

/***/ }),

/***/ "./server/routes/routes.js":
/*!*********************************!*\
  !*** ./server/routes/routes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userPath = __webpack_require__(/*! ./userRoutes */ \"./server/routes/userRoutes.js\");\n\nvar sourcePath = __webpack_require__(/*! ./sourceRoutes */ \"./server/routes/sourceRoutes.js\");\n\nvar articlePath = __webpack_require__(/*! ./articleRoutes */ \"./server/routes/articleRoutes.js\");\n\nvar commentPath = __webpack_require__(/*! ./commentRoutes */ \"./server/routes/commentRoutes.js\");\n\nmodule.exports = function (app) {\n  app.get('/', function (req, res) {\n    res.status(200).send('testing');\n  });\n  app.use('/user', userPath);\n  app.use('/comments', commentPath);\n  app.use('/news/sources', sourcePath);\n  app.use('/news/articles', articlePath);\n};\n\n//# sourceURL=webpack:///./server/routes/routes.js?");

/***/ }),

/***/ "./server/routes/sourceRoutes.js":
/*!***************************************!*\
  !*** ./server/routes/sourceRoutes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redis */ \"./server/redis/index.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar source = __webpack_require__(/*! ../controller/sourceController */ \"./server/controller/sourceController.js\");\n\nvar sourcePath = express();\n\nsourcePath.route('/').get(_redis__WEBPACK_IMPORTED_MODULE_0__[\"sourceCache\"], source.callSources);\nsourcePath.route('/:id').get(source.showSource);\nsourcePath.route('/search').post(source.searchSources);\nmodule.exports = sourcePath;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/sourceRoutes.js?");

/***/ }),

/***/ "./server/routes/userRoutes.js":
/*!*************************************!*\
  !*** ./server/routes/userRoutes.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middleware */ \"./server/middleware/index.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar user = __webpack_require__(/*! ../controller/userController */ \"./server/controller/userController.js\");\n\nvar userPath = express();\n\nuserPath.route('/').post(user.createUser);\nuserPath.route(\"/articles\").post(user.savedArticles);\nuserPath.route('/favArticle').post(user.favArticle);\nuserPath.route('/followSource').post(user.followSource);\nuserPath.route('/login').post(user.login);\nuserPath.route('/session').post(_middleware__WEBPACK_IMPORTED_MODULE_0__[\"authenticate\"], user.retrieveSession);\nmodule.exports = userPath;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/userRoutes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! exports provided: app, passport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"passport\", function() { return passport__WEBPACK_IMPORTED_MODULE_2___default.a; });\n__webpack_require__(/*! ./config/config */ \"./server/config/config.js\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar mongoose = __webpack_require__(/*! ./db/mongoose */ \"./server/db/mongoose.js\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\n\n\n // ******** FEATURES NOT READY FOR PRODUCTION\n// import server from './graph'\n// const RedisStore = require('connect-redis')(session);\n\nvar PORT = process.env.PORT;\nvar app = express();\n\nvar routes = __webpack_require__(/*! ./routes/routes */ \"./server/routes/routes.js\");\n\napp.use(bodyParser.json());\nvar allowedOrigins = ['http://localhost:3000', 'https://protected-bayou-40913.herokuapp.com'];\napp.use(cors__WEBPACK_IMPORTED_MODULE_0___default()({\n  origin: function origin(_origin, callback) {\n    if (!_origin) return callback(null, true);\n\n    if (allowedOrigins.indexOf(_origin) === -1) {\n      var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';\n      return callback(new Error(msg), false);\n    }\n\n    return callback(null, true);\n  }\n}));\napp.use(passport__WEBPACK_IMPORTED_MODULE_2___default.a.initialize());\napp.use(passport__WEBPACK_IMPORTED_MODULE_2___default.a.session());\napp.use(bodyParser.json());\nroutes(app);\napp.listen(PORT || 3001, function () {\n  return console.log(\"started up on \".concat(PORT));\n});\n // ---------- WORK WITH CACHED SESSIONS FOR USERS\n// app.use(session({\n//   secret: \"worldly\",\n//   store: new RedisStore({ host: 'localhost', port: 6379, client, ttl :  260}),\n//   resave: true,\n//   saveUninitialized: false\n// }))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "newsapi":
/*!**************************!*\
  !*** external "newsapi" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"newsapi\");\n\n//# sourceURL=webpack:///external_%22newsapi%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });