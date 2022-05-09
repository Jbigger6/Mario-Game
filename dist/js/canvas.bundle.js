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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/images/hills.png":
/*!******************************!*\
  !*** ./src/images/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/images/platform.png":
/*!*********************************!*\
  !*** ./src/images/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/platform.png */ "./src/images/platform.png");
/* harmony import */ var _images_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hills.png */ "./src/images/hills.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = .5;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; // PLAYER OBJECT

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: canvas.width * .1,
      y: 50
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 50;
    this.height = 50;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      context.fillStyle = 'red';
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (player.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}(); // PLATFORM OBJECT


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); // GENERIC OBJECT (background, etc.)


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function init() {
  platformImage = createImage(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: -1,
    y: 455,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 455,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 455,
    image: platformImage
  })];
  genericObject = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_images_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [new Platform({
  x: -1,
  y: 455,
  image: platformImage
}), new Platform({
  x: platformImage.width - 3,
  y: 455,
  image: platformImage
}), new Platform({
  x: platformImage.width * 2 + 100,
  y: 455,
  image: platformImage
})];
var genericObject = [new GenericObject({
  x: -1,
  y: -1,
  image: createImage(_images_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new GenericObject({
  x: -1,
  y: -1,
  image: createImage(_images_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
})];
var scrollOffset = 0; // ANIMATE GAME

function animate() {
  requestAnimationFrame(animate);
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update(); // player horizontal movement

  if (keys.right.pressed && player.position.x < canvas.width * .4) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > canvas.width * .1) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0; // moves platforms horizontally when player reaches boundaries

    if (keys.right.pressed) {
      platforms.forEach(function (platform) {
        scrollOffset += 5;
        platform.position.x -= 5;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x -= 3;
      });
    }

    if (keys.left.pressed) {
      platforms.forEach(function (platform) {
        scrollOffset -= 5;
        platform.position.x += 5;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x += 3;
      });
    }
  } // player + platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // win condition

  if (scrollOffset >= 2000) {
    console.log('You win!!');
  } //lose condition


  if (player.position.y > canvas.height) {
    init();
  }
} // KEY PRESS


window.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'KeyA':
      keys.left.pressed = true;
      break;

    case 'KeyD':
      keys.right.pressed = true;
      break;

    case 'Space':
      player.velocity.y -= 20;
      break;
  }
}); // KEY RELEASE

window.addEventListener('keyup', function (event) {
  switch (event.code) {
    case 'KeyA':
      keys.left.pressed = false;
      break;

    case 'KeyD':
      keys.right.pressed = false;
      break;
  }
});
animate();

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map