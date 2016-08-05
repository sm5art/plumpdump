/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("import { LinearSVM, Unit } from './LinearSVM';\n\nvar data = [];var labels = [];\ndata.push([1.2, 0.7]);labels.push(1);\ndata.push([-0.3, -0.5]);labels.push(-1);\ndata.push([3.0, 0.1]);labels.push(1);\ndata.push([-0.1, -1.0]);labels.push(-1);\ndata.push([-1.0, 1.1]);labels.push(-1);\ndata.push([2.1, -3]);labels.push(1);\n\nconst svm = new LinearSVM();\n\nfunction trainAccuracy() {\n  var num_correct = 0;\n  for (var i = 0; i < data.length; i++) {\n    var x = new Unit(data[i][0], 0.0);\n    var y = new Unit(data[i][1], 0.0);\n    var true_label = labels[i];\n\n    // see if the prediction matches the provided label\n    var predicted_label = svm.predict(x, y);\n    if (predicted_label === true_label) {\n      num_correct++;\n    }\n  }\n  return num_correct / data.length;\n}\n\n// the learning loop\nfor (var iter = 0; iter < 400; iter++) {\n  // pick a random data point\n  var i = Math.floor(Math.random() * data.length);\n  var x = new Unit(data[i][0], 0.0);\n  var y = new Unit(data[i][1], 0.0);\n  var label = labels[i];\n  svm.train(x, y, label);\n\n  if (iter % 25 == 0) {\n    // every 10 iterations...\n    console.log('training accuracy at iter ' + iter + ': ' + trainAccuracy());\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lYXJTVk0sIFVuaXQgfSBmcm9tICcuL0xpbmVhclNWTSc7XG5cbnZhciBkYXRhID0gW107IHZhciBsYWJlbHMgPSBbXTtcbmRhdGEucHVzaChbMS4yLCAwLjddKTsgbGFiZWxzLnB1c2goMSk7XG5kYXRhLnB1c2goWy0wLjMsIC0wLjVdKTsgbGFiZWxzLnB1c2goLTEpO1xuZGF0YS5wdXNoKFszLjAsIDAuMV0pOyBsYWJlbHMucHVzaCgxKTtcbmRhdGEucHVzaChbLTAuMSwgLTEuMF0pOyBsYWJlbHMucHVzaCgtMSk7XG5kYXRhLnB1c2goWy0xLjAsIDEuMV0pOyBsYWJlbHMucHVzaCgtMSk7XG5kYXRhLnB1c2goWzIuMSwgLTNdKTsgbGFiZWxzLnB1c2goMSk7XG5cbmNvbnN0IHN2bSA9IG5ldyBMaW5lYXJTVk0oKTtcblxuZnVuY3Rpb24gdHJhaW5BY2N1cmFjeSgpe1xuICB2YXIgbnVtX2NvcnJlY3QgPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB4ID0gbmV3IFVuaXQoZGF0YVtpXVswXSwgMC4wKTtcbiAgICB2YXIgeSA9IG5ldyBVbml0KGRhdGFbaV1bMV0sIDAuMCk7XG4gICAgdmFyIHRydWVfbGFiZWwgPSBsYWJlbHNbaV07XG5cbiAgICAvLyBzZWUgaWYgdGhlIHByZWRpY3Rpb24gbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbGFiZWxcbiAgICB2YXIgcHJlZGljdGVkX2xhYmVsID0gc3ZtLnByZWRpY3QoeCwgeSk7XG4gICAgaWYocHJlZGljdGVkX2xhYmVsID09PSB0cnVlX2xhYmVsKSB7XG4gICAgICBudW1fY29ycmVjdCsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtX2NvcnJlY3QgLyBkYXRhLmxlbmd0aDtcbn1cblxuLy8gdGhlIGxlYXJuaW5nIGxvb3BcbmZvcih2YXIgaXRlciA9IDA7IGl0ZXIgPCA0MDA7IGl0ZXIrKykge1xuICAvLyBwaWNrIGEgcmFuZG9tIGRhdGEgcG9pbnRcbiAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCk7XG4gIHZhciB4ID0gbmV3IFVuaXQoZGF0YVtpXVswXSwgMC4wKTtcbiAgdmFyIHkgPSBuZXcgVW5pdChkYXRhW2ldWzFdLCAwLjApO1xuICB2YXIgbGFiZWwgPSBsYWJlbHNbaV07XG4gIHN2bS50cmFpbih4LCB5LCBsYWJlbCk7XG5cbiAgaWYoaXRlciAlIDI1ID09IDApIHsgLy8gZXZlcnkgMTAgaXRlcmF0aW9ucy4uLlxuICAgIGNvbnNvbGUubG9nKCd0cmFpbmluZyBhY2N1cmFjeSBhdCBpdGVyICcgKyBpdGVyICsgJzogJyArIHRyYWluQWNjdXJhY3koKSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pbmRleC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);