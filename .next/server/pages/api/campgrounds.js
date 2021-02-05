module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/campgrounds.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/campgrounds.js":
/*!**********************************!*\
  !*** ./pages/api/campgrounds.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mongodb */ \"./utils/mongodb.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method\n  } = req;\n  const {\n    db\n  } = await Object(_utils_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"connectToDatabase\"])();\n\n  switch (method) {\n    case 'GET':\n      try {\n        const campgrounds = await db.collection('campgrounds').find({}).sort().limit(500).toArray();\n        res.json(campgrounds);\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'POST':\n      try {\n        const campgrounds = await db.collection('campgrounds').insert({\n          title: req.body.title,\n          location: req.body.location\n        });\n        res.send(campgrounds);\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    default:\n      res.setHeader('Allow', ['GET', 'POST']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2FtcGdyb3VuZHMuanM/MzE5MSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2FtcGdyb3VuZHMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInNvcnQiLCJsaW1pdCIsInRvQXJyYXkiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzdWNjZXNzIiwiaW5zZXJ0IiwidGl0bGUiLCJib2R5IiwibG9jYXRpb24iLCJzZW5kIiwic2V0SGVhZGVyIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFZSxzRUFBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2xDLFFBQU07QUFBRUM7QUFBRixNQUFhRixHQUFuQjtBQUNBLFFBQU07QUFBRUc7QUFBRixNQUFTLE1BQU1DLHdFQUFpQixFQUF0Qzs7QUFFQSxVQUFRRixNQUFSO0FBQ0MsU0FBSyxLQUFMO0FBQ0MsVUFBSTtBQUNILGNBQU1HLFdBQVcsR0FBRyxNQUFNRixFQUFFLENBQzFCRyxVQUR3QixDQUNiLGFBRGEsRUFFeEJDLElBRndCLENBRW5CLEVBRm1CLEVBR3hCQyxJQUh3QixHQUl4QkMsS0FKd0IsQ0FJbEIsR0FKa0IsRUFLeEJDLE9BTHdCLEVBQTFCO0FBT0FULFdBQUcsQ0FBQ1UsSUFBSixDQUFTTixXQUFUO0FBQ0EsT0FURCxDQVNFLE9BQU9PLEtBQVAsRUFBYztBQUNmWCxXQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFFRyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDQTs7QUFDRDs7QUFFRCxTQUFLLE1BQUw7QUFDQyxVQUFJO0FBQ0gsY0FBTVQsV0FBVyxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLGFBQWQsRUFBNkJTLE1BQTdCLENBQW9DO0FBQzdEQyxlQUFLLEVBQUVoQixHQUFHLENBQUNpQixJQUFKLENBQVNELEtBRDZDO0FBRTdERSxrQkFBUSxFQUFFbEIsR0FBRyxDQUFDaUIsSUFBSixDQUFTQztBQUYwQyxTQUFwQyxDQUExQjtBQUtBakIsV0FBRyxDQUFDa0IsSUFBSixDQUFTZCxXQUFUO0FBQ0EsT0FQRCxDQU9FLE9BQU9PLEtBQVAsRUFBYztBQUNmWCxXQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFFRyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDQTs7QUFDRDs7QUFDRDtBQUNDYixTQUFHLENBQUNtQixTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLEtBQUQsRUFBUSxNQUFSLENBQXZCO0FBQ0FuQixTQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCUSxHQUFoQixDQUFxQixVQUFTbkIsTUFBTyxjQUFyQztBQTlCRjtBQWdDQSxDQXBDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jYW1wZ3JvdW5kcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbW9uZ29kYic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuXHRjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG5cdHN3aXRjaCAobWV0aG9kKSB7XG5cdFx0Y2FzZSAnR0VUJzpcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGNhbXBncm91bmRzID0gYXdhaXQgZGJcblx0XHRcdFx0XHQuY29sbGVjdGlvbignY2FtcGdyb3VuZHMnKVxuXHRcdFx0XHRcdC5maW5kKHt9KVxuXHRcdFx0XHRcdC5zb3J0KClcblx0XHRcdFx0XHQubGltaXQoNTAwKVxuXHRcdFx0XHRcdC50b0FycmF5KCk7XG5cblx0XHRcdFx0cmVzLmpzb24oY2FtcGdyb3VuZHMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0cmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnUE9TVCc6XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBjYW1wZ3JvdW5kcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2NhbXBncm91bmRzJykuaW5zZXJ0KHtcblx0XHRcdFx0XHR0aXRsZTogcmVxLmJvZHkudGl0bGUsXG5cdFx0XHRcdFx0bG9jYXRpb246IHJlcS5ib2R5LmxvY2F0aW9uLFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXMuc2VuZChjYW1wZ3JvdW5kcyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKTtcblx0XHRcdHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/campgrounds.js\n");

/***/ }),

/***/ "./utils/mongodb.js":
/*!**************************!*\
  !*** ./utils/mongodb.js ***!
  \**************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  MONGODB_URI,\n  MONGODB_DB\n} = process.env;\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!MONGODB_DB) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */\n\n\nlet cached = global.mongo;\n\nif (!cached) {\n  cached = global.mongo = {\n    conn: null,\n    promise: null\n  };\n}\n\nasync function connectToDatabase() {\n  if (cached.conn) {\n    return cached.conn;\n  }\n\n  if (!cached.promise) {\n    const opts = {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    };\n    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(MONGODB_URI, opts).then(client => {\n      return {\n        client,\n        db: client.db(MONGODB_DB)\n      };\n    });\n  }\n\n  cached.conn = await cached.promise;\n  return cached.conn;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9tb25nb2RiLmpzP2E4ZDYiXSwibmFtZXMiOlsiTU9OR09EQl9VUkkiLCJNT05HT0RCX0RCIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwibW9uZ28iLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsInRoZW4iLCJjbGllbnQiLCJkYiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU07QUFBRUEsYUFBRjtBQUFlQztBQUFmLElBQThCQyxPQUFPLENBQUNDLEdBQTVDOztBQUVBLElBQUksQ0FBQ0gsV0FBTCxFQUFrQjtBQUNqQixRQUFNLElBQUlJLEtBQUosQ0FDTCxzRUFESyxDQUFOO0FBR0E7O0FBRUQsSUFBSSxDQUFDSCxVQUFMLEVBQWlCO0FBQ2hCLFFBQU0sSUFBSUcsS0FBSixDQUNMLHFFQURLLENBQU47QUFHQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFwQjs7QUFFQSxJQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNaQSxRQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlO0FBQUVDLFFBQUksRUFBRSxJQUFSO0FBQWNDLFdBQU8sRUFBRTtBQUF2QixHQUF4QjtBQUNBOztBQUVNLGVBQWVDLGlCQUFmLEdBQW1DO0FBQ3pDLE1BQUlMLE1BQU0sQ0FBQ0csSUFBWCxFQUFpQjtBQUNoQixXQUFPSCxNQUFNLENBQUNHLElBQWQ7QUFDQTs7QUFFRCxNQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBWixFQUFxQjtBQUNwQixVQUFNRSxJQUFJLEdBQUc7QUFDWkMscUJBQWUsRUFBRSxJQURMO0FBRVpDLHdCQUFrQixFQUFFO0FBRlIsS0FBYjtBQUtBUixVQUFNLENBQUNJLE9BQVAsR0FBaUJLLG1EQUFXLENBQUNDLE9BQVosQ0FBb0JmLFdBQXBCLEVBQWlDVyxJQUFqQyxFQUF1Q0ssSUFBdkMsQ0FBNkNDLE1BQUQsSUFBWTtBQUN4RSxhQUFPO0FBQ05BLGNBRE07QUFFTkMsVUFBRSxFQUFFRCxNQUFNLENBQUNDLEVBQVAsQ0FBVWpCLFVBQVY7QUFGRSxPQUFQO0FBSUEsS0FMZ0IsQ0FBakI7QUFNQTs7QUFDREksUUFBTSxDQUFDRyxJQUFQLEdBQWMsTUFBTUgsTUFBTSxDQUFDSSxPQUEzQjtBQUNBLFNBQU9KLE1BQU0sQ0FBQ0csSUFBZDtBQUNBIiwiZmlsZSI6Ii4vdXRpbHMvbW9uZ29kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IHsgTU9OR09EQl9VUkksIE1PTkdPREJfREIgfSA9IHByb2Nlc3MuZW52O1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG5cdHRocm93IG5ldyBFcnJvcihcblx0XHQnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG5cdCk7XG59XG5cbmlmICghTU9OR09EQl9EQikge1xuXHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0J1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG5cdCk7XG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvO1xuXG5pZiAoIWNhY2hlZCkge1xuXHRjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuXHRpZiAoY2FjaGVkLmNvbm4pIHtcblx0XHRyZXR1cm4gY2FjaGVkLmNvbm47XG5cdH1cblxuXHRpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG5cdFx0Y29uc3Qgb3B0cyA9IHtcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcblx0XHR9O1xuXG5cdFx0Y2FjaGVkLnByb21pc2UgPSBNb25nb0NsaWVudC5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChjbGllbnQpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNsaWVudCxcblx0XHRcdFx0ZGI6IGNsaWVudC5kYihNT05HT0RCX0RCKSxcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblx0Y2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcblx0cmV0dXJuIGNhY2hlZC5jb25uO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/mongodb.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });