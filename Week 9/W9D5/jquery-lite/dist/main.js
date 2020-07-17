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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n    constructor(htmlElements){\n        this.htmlElements = htmlElements;\n    }\n    \n    html(){\n        if(arguments.length === 1){\n            this.htmlElements.forEach(el => {\n                el.innerHTML = arguments;\n            })\n        }else{\n            return this.htmlElements[0].innerHTML;\n        }\n    };\n    \n    empty(){\n        this.html('');\n    };\n\n    append(args){\n        //args = $l(args);\n\n        //args.htmlElements.forEach(el => {\n            //debugger\n            //let outerHTML = el.outerHTML;\n            for (let i = 0; i < this.htmlElements.length; i++) {\n                //debugger\n                let currentElement = this.htmlElements[i];\n                currentElement.append(args.cloneNode(true));\n                //currentElement.innerHTML += outerHTML;\n            }\n\n        //});\n    }\n\n    attr() {\n        const attributeName = arguments[0];\n        const attributeValue = arguments[1];\n\n        if(attributeName && attributeValue){\n            this.htmlElements.forEach(el=>{\n                el.setAttribute(attributeName, attributeValue);\n            })\n        }else if(attributeName && !attributeValue){\n            return this.htmlElements[0].getAttribute(attributeName);\n        }    \n    }\n\n    addClass(classList){\n        classList = classList.split(' ');\n        this.htmlElements.forEach(el => {\n            el.classList.add(...classList);\n        });\n    }\n\n    removeClass(classList){\n        classList = classList.split(' ');\n        this.htmlElements.forEach(el => {\n            el.classList.remove(...classList);\n        });\n    }\n    \n    children() {\n        let childrenArray = [];\n\n        this.htmlElements.forEach(el => {\n            let childrenEl = el.children;\n            for (let i = 0; i < childrenEl.length; i++){\n                childrenArray.push(el.children[i])\n            }\n        });\n        return new DOMNodeCollection(childrenArray);\n    }\n\n    parent(){\n        let parentArray =  [];\n        this.htmlElements.forEach(el => {\n            let elParent = el.parentElement;\n            parentArray.push(elParent);\n        })\n        return new DOMNodeCollection(parentArray);\n    }\n\n    find(target){\n        let result = [];\n        this.htmlElements.forEach(node => {\n            let foundNodes = node.querySelectorAll(target);\n            result.push(foundNodes);\n        })\n        return new DOMNodeCollection(result);\n    }\n\n    remove(){\n        let htmlTag = document.getElementsByTagName(\"html\");\n        htmlTag[0].remove();\n    }\n    \n    //we want to append the <div>'s HTML elements to the section element\n    //iterate through the div's HTML elements & \n    // var d = document.getElementById(\"d\");\n    // console.log(d.outerHTML);\n    \n    // The string '<div id=\"d\"><p>Content</p><p>Further Elaborated</p></div>'\n    // is written to the console window\n}\n\n//     <div>\n//         <ul>\n//             <li>\n\n//             </li>\n//         </ul>\n//     </div>\n\n// <section>\n\n// </section>\n    \n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")\n\nwindow.$l = function (el) {\n    if(el instanceof HTMLElement){\n        const node = new DomNodeCollection([el]);\n        return node;\n    }else if(typeof el === 'string'){\n        let nodeList = document.querySelectorAll(el);\n        let nodeListArray = Array.from(nodeList);\n        const domNode = new DomNodeCollection(nodeListArray);\n        return domNode;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });