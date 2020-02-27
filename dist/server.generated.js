module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Users = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _SignUp = __webpack_require__(/*! ./user/SignUp */ \"./client/user/SignUp.js\");\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _SingIn = __webpack_require__(/*! ./auth/SingIn */ \"./client/auth/SingIn.js\");\n\nvar _SingIn2 = _interopRequireDefault(_SingIn);\n\nvar _Profile = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _EditProfile = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n\nvar _EditProfile2 = _interopRequireDefault(_EditProfile);\n\nvar _PrivateRoute = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n\nvar _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);\n\nvar _Menu = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar MainRouter = function MainRouter() {\n\n  (0, _react.useEffect)(function () {\n    var jssStyles = document.getElementById(\"jss-server-side\");\n\n    if (jssStyles && jssStyles.parentNode) {\n      jssStyles.parentNode.removeChild(jssStyles);\n    }\n  }, []);\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(_Menu2.default, null),\n    _react2.default.createElement(\n      _reactRouterDom.Switch,\n      null,\n      _react2.default.createElement(_PrivateRoute2.default, { path: \"/user/edit/:userId\", component: _EditProfile2.default }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/user/:userId\", component: _Profile2.default }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/users\", component: _Users2.default }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/signup\", component: _SignUp2.default }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/signin\", component: _SingIn2.default }),\n      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: \"/\", component: _Home2.default })\n    )\n  );\n};\n\n__signature__(MainRouter, \"useEffect{}\");\n\nvar _default = MainRouter;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"C:/Users/PC/Documents/Projects/vcontacte/client/MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/assets/images/default-pic.png":
/*!**********************************************!*\
  !*** ./client/assets/images/default-pic.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4bd9afa13a2804bba240f2cf9b012817.png\");\n\n//# sourceURL=webpack:///./client/assets/images/default-pic.png?");

/***/ }),

/***/ "./client/assets/images/mern.webp":
/*!****************************************!*\
  !*** ./client/assets/images/mern.webp ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0e79da8c0e3094c0941cf0e87bef3fb4.webp\");\n\n//# sourceURL=webpack:///./client/assets/images/mern.webp?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var Component = _ref.component,\n      rest = _objectWithoutProperties(_ref, [\"component\"]);\n\n  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {\n      return _authHelper2.default.isAuthenticated() ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, {\n        to: {\n          pathname: \"/signin\",\n          state: { from: props.location }\n        }\n      });\n    } }));\n};\n\nvar _default = PrivateRoute;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, \"PrivateRoute\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/PrivateRoute.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/PrivateRoute.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/SingIn.js":
/*!*******************************!*\
  !*** ./client/auth/SingIn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.js\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar useStyles = (0, _styles.makeStyles)(function (theme) {\n  return {\n    title: {\n      padding: theme.spacing(3) + \"px \" + theme.spacing(2.5) + \"px\\n    \" + theme.spacing(2) + \"px\",\n      color: theme.palette.text.secondary\n    }\n  };\n});\n\nvar SignIn = function SignIn(props) {\n  var _useState = (0, _react.useState)(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = (0, _react.useState)(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  var _useState5 = (0, _react.useState)(\"\"),\n      _useState6 = _slicedToArray(_useState5, 2),\n      error = _useState6[0],\n      setError = _useState6[1];\n\n  var _useState7 = (0, _react.useState)(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      redirectTo = _useState8[0],\n      setRedirectTo = _useState8[1];\n\n  var classes = useStyles();\n\n  var handleSubmit = function handleSubmit() {\n    var user = {\n      email: email || undefined,\n      password: password || undefined\n    };\n\n    (0, _apiAuth.signin)(user).then(function (data) {\n\n      if (data.error) {\n        setError(data.error);\n      } else {\n        _authHelper2.default.authenticate(data, function () {\n          setRedirectTo(true);\n        });\n      }\n    });\n  };\n\n  var handleChange = function handleChange(field) {\n    return function (event) {\n      switch (field) {\n        case \"email\":\n          setEmail(event.target.value);\n          break;\n        case \"password\":\n          setPassword(event.target.value);\n          break;\n        default:\n          break;\n      }\n    };\n  };\n\n  var _ref = props.location.state || {\n    from: {\n      pathname: \"/\"\n    }\n  },\n      from = _ref.from;\n\n  if (redirectTo) {\n    return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n  }\n\n  return _react2.default.createElement(\n    _core.Card,\n    null,\n    _react2.default.createElement(\n      _core.CardContent,\n      null,\n      _react2.default.createElement(\n        _core.Typography,\n        {\n          type: \"headline\",\n          component: \"h2\",\n          className: classes.title\n        },\n        \"Sign In\"\n      ),\n      _react2.default.createElement(_core.TextField, {\n        id: \"email\",\n        type: \"email\",\n        label: \"Email\",\n        value: email,\n        onChange: handleChange(\"email\"),\n        margin: \"normal\" }),\n      _react2.default.createElement(\"br\", null),\n      _react2.default.createElement(_core.TextField, {\n        id: \"password\",\n        type: \"password\",\n        label: \"Password\",\n        value: password,\n        onChange: handleChange(\"password\"),\n        margin: \"normal\"\n      }),\n      _react2.default.createElement(\"br\", null),\n      error && _react2.default.createElement(\n        _core.Typography,\n        { component: \"p\", color: \"error\" },\n        _react2.default.createElement(\n          _core.Icon,\n          { color: \"error\" },\n          \"error\"\n        ),\n        error\n      )\n    ),\n    _react2.default.createElement(\n      _core.CardActions,\n      null,\n      _react2.default.createElement(\n        _core.Button,\n        {\n          color: \"primary\",\n          variant: \"contained\",\n          onClick: handleSubmit\n        },\n        \"Submit\"\n      )\n    )\n  );\n};\n\n__signature__(SignIn, \"useState{[email, setEmail](\\\"\\\")}\\nuseState{[password, setPassword](\\\"\\\")}\\nuseState{[error, setError](\\\"\\\")}\\nuseState{[redirectTo, setRedirectTo](false)}\\nuseStyles{classes}\", function () {\n  return [useStyles];\n});\n\nvar _default = SignIn;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/SingIn.js\");\n  reactHotLoader.register(SignIn, \"SignIn\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/SingIn.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/SingIn.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/SingIn.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar signin = function signin(user) {\n  return fetch(\"/auth/signin/\", {\n    method: \"POST\",\n    headers: {\n      \"Accept\": \"application/json\",\n      \"Content-Type\": \"application/json\"\n    },\n    credentials: \"include\",\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar signout = function signout() {\n  return fetch(\"/auth/signout/\", {\n    method: \"GET\"\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.signin = signin;\nexports.signout = signout;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/api-auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/api-auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar auth = {\n  isAuthenticated: function isAuthenticated() {\n\n    if (typeof window == \"undefined\") return false;\n\n    if (sessionStorage.getItem(\"jwt\")) return JSON.parse(sessionStorage.getItem(\"jwt\"));else return false;\n  },\n  authenticate: function authenticate(jwt, cb) {\n\n    if (typeof window !== \"undefined\") sessionStorage.setItem(\"jwt\", JSON.stringify(jwt));\n\n    cb();\n  },\n  signout: function signout(cb) {\n\n    if (typeof window !== \"undefined\") sessionStorage.removeItem(\"jwt\");\n\n    cb();\n\n    (0, _apiAuth.signout)().then(function (data) {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\n\nvar _default = auth;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/auth/auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _mern = __webpack_require__(/*! ./../assets/images/mern.webp */ \"./client/assets/images/mern.webp\");\n\nvar _mern2 = _interopRequireDefault(_mern);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar useStyles = (0, _styles.makeStyles)(function (theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: \"auto\",\n      marginTop: theme.spacing(5)\n    },\n    title: {\n      padding: theme.spacing(3) + \"px \" + theme.spacing(2.5) + \"px\\n    \" + theme.spacing(2) + \"px\",\n      color: theme.palette.text.secondary\n    },\n    media: {\n      minHeight: 330\n    }\n  };\n});\n\nvar Home = function Home() {\n\n  var classes = useStyles();\n\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      _core.Card,\n      { className: classes.card },\n      _react2.default.createElement(\n        _core.Typography,\n        {\n          type: \"headline\",\n          component: \"h2\",\n          className: classes.title\n        },\n        \"Main Page\"\n      ),\n      _react2.default.createElement(_core.CardMedia, {\n        className: classes.media,\n        image: _mern2.default,\n        title: \"Welcome\" }),\n      _react2.default.createElement(\n        _core.CardContent,\n        null,\n        _react2.default.createElement(\n          _core.Typography,\n          { type: \"body1\", component: \"p\" },\n          \"Welcome to the My boiler code home page\"\n        )\n      )\n    )\n  );\n};\n\n__signature__(Home, \"useStyles{classes}\", function () {\n  return [useStyles];\n});\n\nvar _default = Home;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:/Users/PC/Documents/Projects/vcontacte/client/core/Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"C:/Users/PC/Documents/Projects/vcontacte/client/core/Home.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/core/Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _icons = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n\nvar _authHelper = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar useStyles = (0, _styles.makeStyles)({\n  link: {\n    fontWeight: \"bold\",\n    textDecoration: \"none\"\n  }\n});\n\nvar Menu = function Menu() {\n\n  var classes = useStyles();\n  var history = (0, _reactRouterDom.useHistory)();\n\n  var isActive = function isActive(history, path) {\n\n    if (history.location.pathname == path) return { color: \"#ff3d00\" };else return { color: \"#ffffff\" };\n  };\n\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      _core.AppBar,\n      { position: \"static\" },\n      _react2.default.createElement(\n        _core.Toolbar,\n        null,\n        _react2.default.createElement(\n          _core.Typography,\n          { type: \"title\", color: \"inherit\" },\n          \"React-node boilerplate\"\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/\" },\n          _react2.default.createElement(\n            _core.IconButton,\n            {\n              \"aria-label\": \"Home\",\n              style: isActive(history, \"/\")\n            },\n            _react2.default.createElement(_icons.Home, null)\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: classes.link, to: \"/users\" },\n          _react2.default.createElement(\n            _core.Button,\n            {\n              style: isActive(history, \"/users\")\n            },\n            \"Users\"\n          )\n        ),\n        !_authHelper2.default.isAuthenticated() && _react2.default.createElement(\n          \"span\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { className: classes.link, to: \"/signup\" },\n            _react2.default.createElement(\n              _core.Button,\n              {\n                style: isActive(history, \"/signup\")\n              },\n              \"Sign Up\"\n            )\n          ),\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { className: classes.link, to: \"/signin\" },\n            _react2.default.createElement(\n              _core.Button,\n              {\n                style: isActive(history, \"/signin\")\n              },\n              \"Sign In\"\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\n__signature__(Menu, \"useStyles{classes}\\nuseHistory{history}\", function () {\n  return [useStyles, _reactRouterDom.useHistory];\n});\n\nvar _default = Menu;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:/Users/PC/Documents/Projects/vcontacte/client/core/Menu.js\");\n  reactHotLoader.register(Menu, \"Menu\", \"C:/Users/PC/Documents/Projects/vcontacte/client/core/Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/core/Menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _icons = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nvar _authHelper = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar DeleteUser = function DeleteUser(props) {\n  var _useState = (0, _react.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      redirect = _useState2[0],\n      setRedirect = _useState2[1];\n\n  var _useState3 = (0, _react.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      open = _useState4[0],\n      setOpen = _useState4[1];\n\n  var handleClick = function handleClick() {\n    return setOpen(true);\n  };\n\n  var handleRequestClose = function handleRequestClose() {\n    return setOpen(false);\n  };\n\n  var deleteAccount = function deleteAccount() {\n    var jwt = _authHelper2.default.isAuthenticated();\n    (0, _apiUser.remove)({\n      userId: props.userId\n    }, { t: jwt.token }).then(function (data) {\n\n      if (data.error) {\n        console.log(data.error);\n      } else {\n        _authHelper2.default.signout(function () {\n          return console.log(\"deleted\");\n        });\n        setRedirect(true);\n      }\n    });\n  };\n\n  if (redirect) {\n    return _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/\" });\n  }\n\n  return _react2.default.createElement(\n    \"span\",\n    null,\n    _react2.default.createElement(\n      _core.IconButton,\n      {\n        \"aria-label\": \"Delete\",\n        onClick: handleClick,\n        color: \"secondary\"\n      },\n      _react2.default.createElement(_icons.Delete, null)\n    ),\n    _react2.default.createElement(\n      _core.Dialog,\n      { open: open, onClose: handleRequestClose },\n      _react2.default.createElement(\n        _core.DialogTitle,\n        null,\n        \"Delete Account\"\n      ),\n      _react2.default.createElement(\n        _core.DialogContent,\n        null,\n        _react2.default.createElement(\n          _core.DialogContentText,\n          null,\n          \"Confirm to delete your account.\"\n        )\n      ),\n      _react2.default.createElement(\n        _core.DialogActions,\n        null,\n        _react2.default.createElement(\n          _core.Button,\n          {\n            onClick: handleRequestClose,\n            color: \"primary\",\n            variant: \"contained\"\n          },\n          \"Cancel\"\n        ),\n        _react2.default.createElement(\n          _core.Button,\n          {\n            onClick: deleteAccount,\n            color: \"secondary\",\n            autoFocus: \"autoFocus\",\n            variant: \"outlined\"\n          },\n          \"Confirm\"\n        )\n      )\n    )\n  );\n};\n\n__signature__(DeleteUser, \"useState{[redirect, setRedirect](false)}\\nuseState{[open, setOpen](false)}\");\n\nvar _default = DeleteUser;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, \"DeleteUser\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/DeleteUser.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/DeleteUser.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _FileCopy = __webpack_require__(/*! @material-ui/icons/FileCopy */ \"@material-ui/icons/FileCopy\");\n\nvar _FileCopy2 = _interopRequireDefault(_FileCopy);\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nvar _authHelper = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar useStyles = (0, _styles.makeStyles)(function (theme) {\n  return {\n    title: {\n      padding: theme.spacing(3) + \"px \" + theme.spacing(2.5) + \"px\\n    \" + theme.spacing(2) + \"px\",\n      color: theme.palette.text.secondary\n    }\n  };\n});\n\nvar EditProfile = function EditProfile(props) {\n  var _useState = (0, _react.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      redirectToProfile = _useState2[0],\n      setRedirectToProfile = _useState2[1];\n\n  var _useState3 = (0, _react.useState)(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = (0, _react.useState)(\"\"),\n      _useState6 = _slicedToArray(_useState5, 2),\n      userId = _useState6[0],\n      setUserId = _useState6[1];\n\n  var _useState7 = (0, _react.useState)(\"\"),\n      _useState8 = _slicedToArray(_useState7, 2),\n      password = _useState8[0],\n      setPassword = _useState8[1];\n\n  var _useState9 = (0, _react.useState)(\"\"),\n      _useState10 = _slicedToArray(_useState9, 2),\n      email = _useState10[0],\n      setEmail = _useState10[1];\n\n  var _useState11 = (0, _react.useState)(\"\"),\n      _useState12 = _slicedToArray(_useState11, 2),\n      error = _useState12[0],\n      setError = _useState12[1];\n\n  var _useState13 = (0, _react.useState)(\"\"),\n      _useState14 = _slicedToArray(_useState13, 2),\n      about = _useState14[0],\n      setAbout = _useState14[1];\n\n  var _useState15 = (0, _react.useState)(\"\"),\n      _useState16 = _slicedToArray(_useState15, 2),\n      photo = _useState16[0],\n      setPhoto = _useState16[1];\n\n  var _useState17 = (0, _react.useState)(null),\n      _useState18 = _slicedToArray(_useState17, 2),\n      photoFile = _useState18[0],\n      setPhotoFile = _useState18[1];\n\n  var classes = useStyles();\n\n  var init = function init(userId) {\n    var jwt = _authHelper2.default.isAuthenticated();\n    (0, _apiUser.read)({\n      userId: userId\n    }, { t: jwt.token }).then(function (data) {\n\n      if (data.error) {\n        setError(data.error);\n      } else {\n        setUserId(data._id);\n        setName(data.name);\n        setEmail(data.email);\n        setAbout(data.about);\n      }\n    });\n  };\n\n  (0, _react.useEffect)(function () {\n    init(props.match.params.userId);\n  }, []);\n\n  var handleSubmit = function handleSubmit() {\n    var jwt = _authHelper2.default.isAuthenticated();\n    var userData = new FormData();\n    userData.set(\"name\", name);\n    userData.set(\"email\", email);\n    userData.set(\"password\", password);\n    userData.set(\"about\", about);\n    userData.set(\"photo\", photoFile);\n    (0, _apiUser.update)({\n      userId: props.match.params.userId\n    }, {\n      t: jwt.token\n    }, userData).then(function (data) {\n\n      if (data.error) {\n        setError(data.error);\n      } else {\n        setUserId(data._id);\n        setRedirectToProfile(true);\n      }\n    });\n  };\n\n  var handleChange = function handleChange(field) {\n    return function (event) {\n      switch (field) {\n        case \"name\":\n          setName(event.target.value);\n          break;\n        case \"email\":\n          setEmail(event.target.value);\n          break;\n        case \"password\":\n          setPassword(event.target.value);\n          break;\n        case \"about\":\n          setAbout(event.target.value);\n        case \"photo\":\n          setPhoto(event.target.value);\n          setPhotoFile(event.target.files[0]);\n        default:\n          break;\n      }\n    };\n  };\n\n  if (redirectToProfile) {\n    return _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/user/\" + userId });\n  }\n\n  return _react2.default.createElement(\n    _core.Card,\n    null,\n    _react2.default.createElement(\n      _core.CardContent,\n      null,\n      _react2.default.createElement(\n        _core.Typography,\n        {\n          type: \"headline\",\n          component: \"h2\",\n          className: classes.title\n        },\n        \"Edit Profile\"\n      ),\n      _react2.default.createElement(\"input\", { accept: \"image/*\", onChange: handleChange('photo'), id: \"icon-button-file\", type: \"file\" }),\n      _react2.default.createElement(\n        \"label\",\n        { htmlFor: \"icon-button-file\" },\n        _react2.default.createElement(\n          _core.Button,\n          { variant: \"contained\", color: \"default\", component: \"span\" },\n          \"Upload\",\n          _react2.default.createElement(_FileCopy2.default, null)\n        )\n      ),\n      _react2.default.createElement(\n        \"span\",\n        null,\n        photo ? photo.name : \"\"\n      ),\n      _react2.default.createElement(\"br\", null),\n      _react2.default.createElement(_core.TextField, {\n        id: \"name\",\n        label: \"Name\",\n        value: name,\n        onChange: handleChange(\"name\"),\n        margin: \"normal\"\n      }),\n      _react2.default.createElement(\"br\", null),\n      _react2.default.createElement(_core.TextField, {\n        id: \"email\",\n        type: \"email\",\n        label: \"Email\",\n        value: email,\n        onChange: handleChange(\"email\"),\n        margin: \"normal\"\n      }),\n      _react2.default.createElement(\"br\", null),\n      _react2.default.createElement(_core.TextField, {\n        id: \"multiline-flexible\",\n        label: \"About\",\n        multiline: true,\n        rows: \"2\",\n        value: about,\n        onChange: handleChange(\"about\"),\n        margin: \"normal\"\n      }),\n      _react2.default.createElement(\"br\", null),\n      _react2.default.createElement(_core.TextField, {\n        id: \"password\",\n        type: \"password\",\n        label: \"Password\",\n        value: password,\n        onChange: handleChange(\"password\"),\n        margin: \"normal\",\n        required: true\n      }),\n      _react2.default.createElement(\"br\", null),\n      error && _react2.default.createElement(\n        _core.Typography,\n        { component: \"p\", color: \"error\" },\n        _react2.default.createElement(\n          _core.Icon,\n          { color: \"error\" },\n          \"error\"\n        ),\n        error\n      )\n    ),\n    _react2.default.createElement(\n      _core.CardActions,\n      null,\n      _react2.default.createElement(\n        _core.Button,\n        {\n          color: \"primary\",\n          variant: \"contained\",\n          onClick: handleSubmit\n        },\n        \"Submit\"\n      )\n    )\n  );\n};\n\n__signature__(EditProfile, \"useState{[redirectToProfile, setRedirectToProfile](false)}\\nuseState{[name, setName](\\\"\\\")}\\nuseState{[userId, setUserId](\\\"\\\")}\\nuseState{[password, setPassword](\\\"\\\")}\\nuseState{[email, setEmail](\\\"\\\")}\\nuseState{[error, setError](\\\"\\\")}\\nuseState{[about, setAbout](\\\"\\\")}\\nuseState{[photo, setPhoto](\\\"\\\")}\\nuseState{[photoFile, setPhotoFile](null)}\\nuseStyles{classes}\\nuseEffect{}\", function () {\n  return [useStyles];\n});\n\nvar _default = EditProfile;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/EditProfile.js\");\n  reactHotLoader.register(EditProfile, \"EditProfile\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/EditProfile.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/EditProfile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _icons = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nvar _authHelper = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _DeleteUser = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n\nvar _DeleteUser2 = _interopRequireDefault(_DeleteUser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar useStyles = (0, _styles.makeStyles)(function (theme) {\n  return {\n    title: {\n      padding: theme.spacing(3) + \"px \" + theme.spacing(2.5) + \"px\\n    \" + theme.spacing(2) + \"px\",\n      color: theme.palette.text.secondary\n    }\n  };\n});\n\nvar Profile = function Profile(props) {\n  var _useState = (0, _react.useState)(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var _useState3 = (0, _react.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      redirectToSignIn = _useState4[0],\n      setRedirectToSignIn = _useState4[1];\n\n  var photoUrl = user._id ? \"/api/users/photo/\" + user._id + \"?\" + new Date().getTime() : '/api/users/defaultphoto';\n  var classes = useStyles();\n\n  var init = function init(userId) {\n    var jwt = _authHelper2.default.isAuthenticated();\n    (0, _apiUser.read)({\n      userId: userId\n    }, { t: jwt.token }).then(function (data) {\n\n      if (data.error) {\n        setRedirectToSignIn(true);\n      } else {\n        setUser(data);\n      }\n    });\n  };\n\n  (0, _react.useEffect)(function () {\n    init(props.match.params.userId);\n  }, [props.match.params.userId]);\n\n  if (redirectToSignIn) {\n    return _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/signin\" });\n  }\n\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      _core.Paper,\n      { className: classes.root, elevation: 4 },\n      _react2.default.createElement(\n        _core.Typography,\n        { type: \"title\", className: classes.title },\n        \"Profile\"\n      ),\n      _react2.default.createElement(\n        _core.List,\n        { dense: true },\n        _react2.default.createElement(\n          _core.ListItem,\n          null,\n          _react2.default.createElement(\n            _core.ListItemAvatar,\n            null,\n            _react2.default.createElement(\n              _core.Avatar,\n              null,\n              _react2.default.createElement(_core.Avatar, { src: photoUrl })\n            )\n          ),\n          _react2.default.createElement(_core.ListItemText, {\n            primary: user.name,\n            secondary: user.email\n          }),\n          _authHelper2.default.isAuthenticated().user && _authHelper2.default.isAuthenticated().user._id == user._id && _react2.default.createElement(\n            _core.ListItemSecondaryAction,\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: \"/user/edit/\" + user._id },\n              _react2.default.createElement(\n                _core.IconButton,\n                { color: \"primary\" },\n                _react2.default.createElement(_icons.Edit, null)\n              )\n            ),\n            _react2.default.createElement(_DeleteUser2.default, { userId: user._id })\n          )\n        ),\n        _react2.default.createElement(_core.Divider, null),\n        _react2.default.createElement(\n          _core.ListItem,\n          null,\n          _react2.default.createElement(_core.ListItemText, {\n            primary: \"Joined: \" + new Date(user.created).toDateString()\n          })\n        ),\n        _react2.default.createElement(\n          _core.ListItem,\n          null,\n          _react2.default.createElement(_core.ListItemText, { primary: user.about })\n        )\n      )\n    )\n  );\n};\n\n__signature__(Profile, \"useState{[user, setUser](\\\"\\\")}\\nuseState{[redirectToSignIn, setRedirectToSignIn](false)}\\nuseStyles{classes}\\nuseEffect{}\", function () {\n  return [useStyles];\n});\n\nvar _default = Profile;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/Profile.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/Profile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/SignUp.js":
/*!*******************************!*\
  !*** ./client/user/SignUp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar useStyles = (0, _styles.makeStyles)(function (theme) {\n  return {\n    title: {\n      padding: theme.spacing(3) + \"px \" + theme.spacing(2.5) + \"px\\n    \" + theme.spacing(2) + \"px\",\n      color: theme.palette.text.secondary\n    }\n  };\n});\n\nvar SignUp = function SignUp() {\n  var _useState = (0, _react.useState)(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var _useState3 = (0, _react.useState)(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  var _useState5 = (0, _react.useState)(\"\"),\n      _useState6 = _slicedToArray(_useState5, 2),\n      email = _useState6[0],\n      setEmail = _useState6[1];\n\n  var _useState7 = (0, _react.useState)(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      open = _useState8[0],\n      setOpen = _useState8[1];\n\n  var _useState9 = (0, _react.useState)(\"\"),\n      _useState10 = _slicedToArray(_useState9, 2),\n      error = _useState10[0],\n      setError = _useState10[1];\n\n  var classes = useStyles();\n\n  var handleChange = function handleChange(field) {\n    return function (event) {\n      switch (field) {\n        case \"name\":\n          setName(event.target.value);\n          break;\n        case \"email\":\n          setEmail(event.target.value);\n          break;\n        case \"password\":\n          setPassword(event.target.value);\n          break;\n        default:\n          break;\n      }\n    };\n  };\n\n  var handleSubmit = function handleSubmit() {\n    var user = {\n      name: name || undefined,\n      email: email || undefined,\n      password: password || undefined\n    };\n    (0, _apiUser.create)(user).then(function (data) {\n\n      if (data.error) {\n        setError(data.error);\n      } else {\n        setError(\"\");\n        setOpen(true);\n      }\n    });\n  };\n\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      _core.Card,\n      null,\n      _react2.default.createElement(\n        _core.CardContent,\n        null,\n        _react2.default.createElement(\n          _core.Typography,\n          {\n            type: \"headline\",\n            component: \"h2\",\n            className: classes.title\n          },\n          \"Sign Up\"\n        ),\n        _react2.default.createElement(_core.TextField, {\n          id: \"name\",\n          label: \"Name\",\n          value: name,\n          onChange: handleChange(\"name\"),\n          margin: \"normal\"\n        }),\n        _react2.default.createElement(\"br\", null),\n        _react2.default.createElement(_core.TextField, {\n          id: \"email\",\n          type: \"email\",\n          label: \"Email\",\n          value: email,\n          onChange: handleChange(\"email\"),\n          margin: \"normal\"\n        }),\n        _react2.default.createElement(\"br\", null),\n        _react2.default.createElement(_core.TextField, {\n          id: \"password\",\n          type: \"password\",\n          label: \"Password\",\n          value: password,\n          onChange: handleChange(\"password\"),\n          margin: \"normal\"\n        }),\n        _react2.default.createElement(\"br\", null),\n        error && _react2.default.createElement(\n          _core.Typography,\n          { component: \"p\", color: \"error\" },\n          _react2.default.createElement(\n            _core.Icon,\n            {\n              color: \"error\"\n            },\n            \"error\"\n          ),\n          error\n        )\n      ),\n      _react2.default.createElement(\n        _core.CardActions,\n        null,\n        _react2.default.createElement(\n          _core.Button,\n          {\n            color: \"primary\",\n            variant: \"contained\",\n            onClick: handleSubmit\n          },\n          \"Submit\"\n        )\n      )\n    ),\n    _react2.default.createElement(\n      _core.Dialog,\n      { open: open, disableBackdropClick: true },\n      _react2.default.createElement(\n        _core.DialogTitle,\n        null,\n        \"New Account\"\n      ),\n      _react2.default.createElement(\n        _core.DialogContent,\n        null,\n        _react2.default.createElement(\n          _core.DialogContentText,\n          null,\n          \"New account successfully created.\"\n        )\n      ),\n      _react2.default.createElement(\n        _core.DialogActions,\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/signin\" },\n          _react2.default.createElement(\n            _core.Button,\n            {\n              color: \"primary\",\n              autoFocus: \"autoFocus\",\n              variant: \"contained\"\n            },\n            \"Sign In\"\n          )\n        )\n      )\n    )\n  );\n};\n\n__signature__(SignUp, \"useState{[name, setName](\\\"\\\")}\\nuseState{[password, setPassword](\\\"\\\")}\\nuseState{[email, setEmail](\\\"\\\")}\\nuseState{[open, setOpen](false)}\\nuseState{[error, setError](\\\"\\\")}\\nuseStyles{classes}\", function () {\n  return [useStyles];\n});\n\nvar _default = SignUp;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/SignUp.js\");\n  reactHotLoader.register(SignUp, \"SignUp\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/SignUp.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/SignUp.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/SignUp.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _core = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _icons = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar useStyles = (0, _styles.makeStyles)(function (theme) {\n  return {\n    title: {\n      padding: theme.spacing(3) + \"px \" + theme.spacing(2.5) + \"px\\n    \" + theme.spacing(2) + \"px\",\n      color: theme.palette.text.secondary\n    }\n  };\n});\n\nvar Users = function Users() {\n  var _useState = (0, _react.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      users = _useState2[0],\n      setUsers = _useState2[1];\n\n  var classes = useStyles();\n\n  (0, _react.useEffect)(function () {\n    (0, _apiUser.list)().then(function (data) {\n      if (data.error) {\n        console.log(data.error);\n      } else {\n        setUsers(data);\n      }\n    });\n  }, []);\n\n  return _react2.default.createElement(\n    _core.Paper,\n    { elevation: 4 },\n    _react2.default.createElement(\n      _core.Typography,\n      { type: \"title\", className: classes.title },\n      \"All Users\"\n    ),\n    _react2.default.createElement(\n      _core.List,\n      { dense: true },\n      users.map(function (item, i) {\n        return _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/user/\" + item._id, key: i },\n          _react2.default.createElement(\n            _core.ListItem,\n            { button: \"button\" },\n            _react2.default.createElement(\n              _core.ListItemAvatar,\n              null,\n              _react2.default.createElement(\n                _core.Avatar,\n                null,\n                _react2.default.createElement(_icons.Person, null)\n              )\n            ),\n            _react2.default.createElement(_core.ListItemText, { primary: item.name }),\n            _react2.default.createElement(\n              _core.ListItemSecondaryAction,\n              null,\n              _react2.default.createElement(\n                _core.IconButton,\n                null,\n                _react2.default.createElement(_icons.ArrowForward, null)\n              )\n            )\n          )\n        );\n      })\n    )\n  );\n};\n\n__signature__(Users, \"useState{[users, setUsers]([])}\\nuseStyles{classes}\\nuseEffect{}\", function () {\n  return [useStyles];\n});\n\nvar _default = Users;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/Users.js\");\n  reactHotLoader.register(Users, \"Users\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/Users.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/Users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar create = function create(user) {\n  return fetch(\"/api/users/\", {\n    method: \"POST\",\n    headers: {\n      \"Accept\": \"application/json\",\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar list = function list() {\n  return fetch(\"/api/users/\", {\n    method: \"GET\"\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar read = function read(params, credentials) {\n  return fetch(\"/api/users/\" + params.userId, {\n    method: \"GET\",\n    headers: {\n      \"Accept\": \"application/json\",\n      \"Content-Type\": \"application/json\",\n      \"Authorization\": \"Bearer \" + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar update = function update(params, credentials, user) {\n  return fetch(\"/api/users/\" + params.userId, {\n    method: \"PUT\",\n    headers: {\n      \"Accept\": \"application/json\",\n      \"Authorization\": \"Bearer \" + credentials.t\n    },\n    body: user\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar remove = function remove(params, credentials) {\n  return fetch(\"/api/users/\" + params.userId, {\n    method: \"DELETE\",\n    headers: {\n      \"Accept\": \"application/json\",\n      \"Content-Type\": \"application/json\",\n      \"Authorization\": \"Bearer \" + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/api-user.js\");\n  reactHotLoader.register(list, \"list\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/api-user.js\");\n  reactHotLoader.register(read, \"read\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/api-user.js\");\n  reactHotLoader.register(update, \"update\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/api-user.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:/Users/PC/Documents/Projects/vcontacte/client/user/api-user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || \"mongodb://\" + (process.env.IP || \"localhost\") + \":\" + (process.env.MONGO_PORT || \"27017\") + \"/mernproject\"\n};\n\nvar _default = config;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:/Users/PC/Documents/Projects/vcontacte/config/config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/config/config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar _default = function _default(_ref) {\n  var markup = _ref.markup,\n      css = _ref.css;\n\n  return \"<!doctype html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"utf-8\\\">\\n        <title>React-node boilerplate</title>\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\\">\\n        <link href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\" rel=\\\"stylesheet\\\">\\n      </head>\\n\\n      <body>\\n        <div id=\\\"root\\\">\" + markup + \"</div>\\n        <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n        <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \";\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar signin = function signin(req, res) {\n  _user2.default.findOne({ \"email\": req.body.email }, function (err, user) {\n\n    if (err || !user) return res.status(\"401\").json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(\"401\").send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    var token = _jsonwebtoken2.default.sign({\n      _id: user._id\n    }, _config2.default.jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n\n    return res.json({\n      token: token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  });\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status(\"200\").json({\n    message: \"signed out\"\n  });\n};\n\nvar requireSignin = (0, _expressJwt2.default)({\n  secret: _config2.default.jwtSecret,\n  userProperty: \"auth\"\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nvar _default = { signin: signin, signout: signout, requireSignin: requireSignin, hasAuthorization: hasAuthorization };\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _dbErrorHandler = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _defaultPic = __webpack_require__(/*! ./../../client/assets/images/default-pic.png */ \"./client/assets/images/default-pic.png\");\n\nvar _defaultPic2 = _interopRequireDefault(_defaultPic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar create = function create(req, res, next) {\n  var user = new _user2.default(req.body);\n  user.save(function (err, result) {\n\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n\nvar list = function list(req, res) {\n  _user2.default.find(function (err, users) {\n\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n\n    res.json(users);\n  }).select(\"name email updated created\");\n};\n\nvar userByID = function userByID(req, res, next, id) {\n  _user2.default.findById(id).exec(function (err, user) {\n\n    if (err || !user) {\n      return res.status(\"400\").json({\n        error: \"User not found\"\n      });\n    }\n\n    req.profile = user;\n    next();\n  });\n};\n\nvar read = function read(req, res) {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nvar update = function update(req, res, next) {\n  var form = new _formidable2.default.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, function (err, fields, files) {\n\n    if (err) {\n      return res.status(400).json({\n        error: \"Photo could not be uploaded\"\n      });\n    }\n\n    var user = req.profile;\n    user = _lodash2.default.extend(user, fields);\n    user.updated = Date.now();\n\n    if (files.photo) {\n      user.photo.data = _fs2.default.readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n\n    user.save(function (err, result) {\n\n      if (err) {\n        return res.status(400).json({\n          error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n      }\n\n      user.hashed_password = undefined;\n      user.salt = undefined;\n      res.json(user);\n    });\n  });\n};\n\nvar remove = function remove(req, res, next) {\n  var user = req.profile;\n  user.remove(function (err, deletedUser) {\n\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\nvar photo = function photo(req, res, next) {\n\n  if (req.profile.photo.data) {\n    res.set(\"Content-Type\", req.profile.photo.contentType);\n    return res.send(req.profile.photo.data);\n  }\n\n  next();\n};\n\nvar defaultPhoto = function defaultPhoto(req, res) {\n  return res.sendFile(process.cwd() + _defaultPic2.default);\n};\n\nvar _default = {\n  create: create,\n  userByID: userByID,\n  read: read,\n  list: list,\n  remove: remove,\n  update: update,\n  photo: photo,\n  defaultPhoto: defaultPhoto\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n  reactHotLoader.register(photo, \"photo\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n  reactHotLoader.register(defaultPhoto, \"defaultPhoto\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/server/controllers/user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundel.js":
/*!*****************************!*\
  !*** ./server/devBundel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar compile = function compile(app) {\n\n  if (_config2.default.env == \"development\") {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nvar _default = { compile: compile };\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:/Users/PC/Documents/Projects/vcontacte/server/devBundel.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/server/devBundel.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundel.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _colors = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n\nvar _MainRouter = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n\nvar _MainRouter2 = _interopRequireDefault(_MainRouter);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _index = __webpack_require__(/*! ../index */ \"./index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _devBundel = __webpack_require__(/*! ./devBundel */ \"./server/devBundel.js\");\n\nvar _devBundel2 = _interopRequireDefault(_devBundel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar app = (0, _express2.default)();\n_devBundel2.default.compile(app);\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\napp.use((0, _helmet2.default)());\napp.use((0, _cors2.default)());\n\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(\"/dist\", _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, \"dist\")));\n\napp.use(\"/\", _user2.default);\napp.use(\"/\", _auth2.default);\n\napp.get(\"*\", function (req, res) {\n\n  var sheets = new _styles.ServerStyleSheets();\n  var theme = (0, _styles.createMuiTheme)({\n    palette: {\n      primary: {\n        light: _colors.blue[\"300\"],\n        main: _colors.blue[\"400\"],\n        dark: _colors.blue[\"500\"],\n        contrastText: \"#fff\"\n      },\n      secondary: {\n        light: _colors.deepOrange[\"300\"],\n        main: _colors.deepOrange[\"400\"],\n        dark: _colors.deepOrange[\"500\"],\n        contrastText: \"#000\"\n      },\n      openTitle: _colors.blue[\"400\"],\n      protectedTitle: _colors.deepOrange[\"400\"],\n      type: \"light\"\n    }\n  });\n  var context = {};\n  var markup = _server2.default.renderToString(sheets.collect(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.url, context: context },\n    _react2.default.createElement(\n      _styles.ThemeProvider,\n      {\n        theme: theme\n      },\n      _react2.default.createElement(_MainRouter2.default, null)\n    )\n  )));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  var css = sheets.toString();\n  res.status(200).send((0, _index2.default)({\n    markup: markup,\n    css: css\n  }));\n});\n\napp.use(function (err, req, res, next) {\n\n  if (err.name === \"UnauthorizedError\") {\n    res.status(401).json({ \"error\": err.name + \": \" + err.message });\n  }\n});\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:/Users/PC/Documents/Projects/vcontacte/server/express.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:/Users/PC/Documents/Projects/vcontacte/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/server/express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar getErrorMessage = function getErrorMessage(err) {\n  var message = \"\";\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n      default:\n        message = \"Something went wrong\";\n    }\n  } else {\n\n    for (var errName in err.errors) {\n\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n  return message;\n};\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n  var output = void 0;\n\n  try {\n    var fieldName = err.message.substring(err.message.lastIndexOf(\".$\") + 2, err.message.lastIndexOf(\"_1\"));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + \" already exists\";\n  } catch (ex) {\n    output = \"Unique field already exists\";\n  }\n\n  return output;\n};\n\nvar _default = { getErrorMessage: getErrorMessage };\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"C:/Users/PC/Documents/Projects/vcontacte/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:/Users/PC/Documents/Projects/vcontacte/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/server/helpers/dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar UserSchema = new _mongoose2.default.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    match: [/.+\\@.+\\..+/, \"Please fill a valid email address\"],\n    required: \"Email is required\"\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  about: {\n    type: String,\n    trim: true\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  }\n});\n\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"Password must be at least 6 characters.\");\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"Password is required\");\n  }\n}, null);\n\nUserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return \"\";\n    try {\n      return _crypto2.default.createHmac(\"sha1\", this.salt).update(password).digest(\"hex\");\n    } catch (err) {\n      return \"\";\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + \"\";\n  }\n};\n\nvar _default = _mongoose2.default.model(\"User\", UserSchema);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"C:/Users/PC/Documents/Projects/vcontacte/server/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/server/models/user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar router = _express2.default.Router();\nrouter.route(\"/auth/signin\").post(_auth2.default.signin);\nrouter.route(\"/auth/signout\").get(_auth2.default.signout);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:/Users/PC/Documents/Projects/vcontacte/server/routes/auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/server/routes/auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar router = _express2.default.Router();\nrouter.route(\"/api/users\").get(_user2.default.list).post(_user2.default.create);\n\nrouter.param(\"userId\", _user2.default.userByID);\n\nrouter.route(\"/api/users/:userId\").get(_user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.route(\"/api/users/photo/:userId\").get(_user2.default.photo, _user2.default.defaultPhoto);\nrouter.route(\"/api/users/defaultphoto\").get(_user2.default.defaultPhoto);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:/Users/PC/Documents/Projects/vcontacte/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:/Users/PC/Documents/Projects/vcontacte/server/routes/user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _config = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n_express2.default.listen(_config2.default.port, function (err) {\n\n  if (err) {\n    console.log(err);\n  }\n  console.info(\"Server started on port %s.\", _config2.default.port);\n});\n\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(_config2.default.mongoUri);\n\n_mongoose2.default.connection.on(\"error\", function () {\n  throw new Error(\"unable to connect to database: \" + mongoUri);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\"react-hot-loader/patch\", \"webpack-hot-middleware/client?reload=true\", path.join(CURRENT_WORKING_DIR, \"client/main.js\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png|webp)(\\?[\\s\\S]+)?$/,\n      use: \"file-loader\"\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:/Users/PC/Documents/Projects/vcontacte/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:/Users/PC/Documents/Projects/vcontacte/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\PC\\Documents\\Projects\\vcontacte\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons%22?");

/***/ }),

/***/ "@material-ui/icons/FileCopy":
/*!**********************************************!*\
  !*** external "@material-ui/icons/FileCopy" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/FileCopy\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/FileCopy%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });