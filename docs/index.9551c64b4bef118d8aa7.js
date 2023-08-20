/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
 // ------------------Panel相關-------------------

var plusBtn = document.getElementById("plus-btn");
var msgBtn = document.getElementById("msg-btn");
var notificationBtn = document.getElementById("notification-btn");
var moreBtn = document.getElementById("more-btn");
var plusPanel = document.getElementById("plus-panel");
var msgPanel = document.getElementById("msg-panel");
var notificationPanel = document.getElementById("notification-panel");
var morePanel = document.getElementById("more-panel");
var panels = [plusPanel, msgPanel, notificationPanel, morePanel];

function opoenPanel(index) {
  panels.forEach(function (p, idx) {
    if (index === idx) {
      p.classList.remove("hidden");
      return;
    }

    if (p.classList.contains("hidden")) {
      return;
    }

    p.classList.add("hidden");
  });
}

window.addEventListener("click", function () {
  opoenPanel(-1);
});
plusBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  opoenPanel(0);
});
msgBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  opoenPanel(1);
});
notificationBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  opoenPanel(2);
});
moreBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  opoenPanel(3);
}); //點到上方面板，不可以隱藏

plusPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});
msgPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});
notificationPanel.addEventListener("click", function (event) {
  event.stopPropagation();
});
morePanel.addEventListener("click", function (event) {
  event.stopPropagation();
}); // ------------------左側相關-------------------

var leftBlock = document.getElementById("left-block");

function renderLeftItem(name, imageUrl) {
  var item = "\n    <div\n        class=\"\n        flex\n        items-center\n        justify-items-center\n        w-full\n        p-2\n        mb-1\n        rounded\n        hover:bg-fb-input\n        cursor-pointer\n        \"\n    >\n        <div class=\"w-[32px] overflow-hidden rounded-full mr-4\">\n            <img src=\"".concat(imageUrl, "\" alt=\"\" />\n        </div>\n        <p class=\"text-white text-[.9rem]\">").concat(name, "</p>\n    </div>\n    ");
  return item;
}

function renderLeftBlock() {
  var leftArr = [{
    name: "郭小胖",
    img: "https://bruce-fe-fb.web.app/image/avator.png"
  }, {
    name: "活動",
    img: "https://bruce-fe-fb.web.app/image/left/activity.svg"
  }, {
    name: "天氣",
    img: "https://bruce-fe-fb.web.app/image/left/cloudy.png"
  }, {
    name: "災害應變中心",
    img: "https://bruce-fe-fb.web.app/image/left/dynamic.svg"
  }, {
    name: "新冠病毒資訊中心",
    img: "https://bruce-fe-fb.web.app/image/left/facemask.svg"
  }, {
    name: "社團",
    img: "https://bruce-fe-fb.web.app/image/left/friend.svg"
  }, {
    name: "企業管理平台",
    img: "https://bruce-fe-fb.web.app/image/left/job.png"
  }, {
    name: "Messenger",
    img: "https://bruce-fe-fb.web.app/image/left/messenger.svg"
  }, {
    name: "近期廣告動態",
    img: "https://bruce-fe-fb.web.app/image/left/pay.png"
  }, {
    name: "朋友名單",
    img: "https://bruce-fe-fb.web.app/image/left/sale.png"
  }, {
    name: "最愛",
    img: "https://bruce-fe-fb.web.app/image/left/star.svg"
  }, {
    name: "Marketplace",
    img: "https://bruce-fe-fb.web.app/image/left/store.svg"
  }, {
    name: "Watch",
    img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg"
  }];
  var htmStr = ""; // for (let i = 0; i < 5; i++) {
  //   htmStr = htmStr + renderLeftItem('郭小元','https://bruce-fe-fb.web.app/image/avator.png')
  // }

  leftArr.forEach(function (obj) {
    htmStr = htmStr + renderLeftItem(obj.name, obj.img);
  });
  leftBlock.innerHTML = htmStr;
}

renderLeftBlock(); // ------------------右側相關-------------------

var rightBlock = document.getElementById("right-block");

function renderRightBlock() {
  var rightItem = "\n    <div\n      class=\"\n        flex\n        items-center\n        justify-items-center\n        w-full\n        py-2\n        px-1\n        rounded\n        hover:bg-fb-input\n        cursor-pointer\n      \"\n      >\n      <div class=\"w-[45px]\">\n        <div class=\"relative w-[32px] cursor-pointer\">\n          <div class=\"overflow-hidden rounded-full\">\n            <img src=\"https://bruce-fe-fb.web.app/image/avator.png\" alt=\"\" />\n          </div>\n          <div\n            class=\"\n            w-[8px]            \n            h-[8px] \n            rounded-full\n            bg-green-500\n            absolute\n            bottom-0\n            right-0\n            ring-gray-900 ring\n          \">\n          </div>\n        </div>\n      </div>\n      <p class=\"text-white text-[.9rem]\">\u90ED\u5C0F\u80D6</p>\n    </div>\n  ";
  var htmStr = "<p class='mb-2 text-lg text-gray-400'>聯絡人</p>";

  for (var i = 0; i < 5; i++) {
    htmStr = htmStr + rightItem;
  }

  rightBlock.innerHTML = htmStr;
}

renderRightBlock(); //  ------------- 限時動態相關 -------------

var storyList = document.getElementById("story-list");

function renderStoryItem() {
  var _loop = function _loop(i) {
    var divBox = document.createElement("div");
    divBox.classList.add("flex-1", "px-[4px]", "min-w-[120px]", "cursor-pointer");
    divBox.innerHTML = "\n      <div class=\"relative overflow-hidden\" id=\"story-".concat(i, "\">\n        <div id=\"story-mask-").concat(i, "\" class=\"hidden absolute w-full h-full top-0 left-0 bg-black/20 z-20\"></div>\n        <div class=\"w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-30\">\n          <p class=\"text-white text-sm\">\u5E03</p>\n        </div>\n        <div class=\"absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20\"></div>\n        <img id=\"story-image-").concat(i, "\" class=\"w-full h-full duration-200\" src=\"https://bruce-fe-fb.web.app/image/story.png\" />\n        <p class=\"absolute bottom-2 left-2 text-white\">\u5E03\u9B6F\u65AF</p>\n      </div>\n    ");
    divBox.addEventListener("mouseover", function () {
      var mask = document.getElementById("story-mask-".concat(i));
      var image = document.getElementById("story-image-".concat(i));
      image.classList.add("scale-105");
      mask.classList.remove("hidden");
    });
    divBox.addEventListener("mouseout", function () {
      var mask = document.getElementById("story-mask-".concat(i));
      var image = document.getElementById("story-image-".concat(i));
      image.classList.remove("scale-105");
      mask.classList.add("hidden");
    });
    storyList.appendChild(divBox);
  };

  for (var i = 0; i < 14; i++) {
    _loop(i);
  }
}

renderStoryItem(); //  ------------- 包廂輪播相關 -------------

function renderLiveItem() {
  var swiperWrapperLive = document.getElementById("swiper-wrapper-live");

  for (var i = 0; i < 20; i++) {
    var divBox = document.createElement("div");
    divBox.classList.add("swiper-slide");
    var item = "\n    <div class=\"w-[55px]\">\n      <div class=\"relative w-[40px] cursor-pointer\">\n        <div class=\"overflow-hidden rounded-full\">\n          <img\n            src=\"https://bruce-fe-fb.web.app/image/avator.png\"\n            alt=\"\"\n          />\n        </div>\n        <div\n          class=\"\n            w-[10px]\n            h-[10px]\n            rounded-full\n            bg-green-500\n            absolute\n            bottom-0\n            right-0\n            ring-gray-900 ring\n          \"\n        ></div>\n      </div>\n    </div>\n    ";
    divBox.innerHTML = item;
    swiperWrapperLive.appendChild(divBox);
  }

  var swiper = new Swiper(".fb-live", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: "auto"
  });
}

renderLiveItem();
})();

/******/ })()
;
//# sourceMappingURL=index.9551c64b4bef118d8aa7.js.map