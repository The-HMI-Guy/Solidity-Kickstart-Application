"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ortiz_Documents_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ortiz_Documents_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ortiz_Documents_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\nvar CampaignNew = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(CampaignNew, Component1);\n    var _super = _createSuper(CampaignNew);\n    function CampaignNew() {\n        _classCallCheck(this, CampaignNew);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            minimumContribution: \"\",\n            errorMessage: \"\",\n            loading: false\n        });\n        var _this1 = _assertThisInitialized(_this);\n        _defineProperty(_assertThisInitialized(_this), \"onSubmit\", function() {\n            var _ref = _asyncToGenerator(_Users_ortiz_Documents_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var accounts;\n                return _Users_ortiz_Documents_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            event.preventDefault();\n                            _this1.setState({\n                                loading: true\n                            });\n                            _ctx.prev = 2;\n                            _ctx.next = 5;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                        case 5:\n                            accounts = _ctx.sent;\n                            _ctx.next = 8;\n                            return _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.createCampaign(_this1.state.minimumContribution).send({\n                                from: accounts[0]\n                            });\n                        case 8:\n                            _ctx.next = 13;\n                            break;\n                        case 10:\n                            _ctx.prev = 10;\n                            _ctx.t0 = _ctx[\"catch\"](2);\n                            _this1.setState({\n                                errorMessage: _ctx.t0.message\n                            });\n                        case 13:\n                            _this1.setState();\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        2,\n                        10\n                    ]\n                ]);\n            }));\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    _createClass(CampaignNew, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Create a Campaign\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ortiz/Documents/kickstart/pages/campaigns/new.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                            onSubmit: this.onSubmit,\n                            error: !!this.state.errorMessage,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            children: \"Minimum Contribution\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ortiz/Documents/kickstart/pages/campaigns/new.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                            label: \"wei\",\n                                            labelPosition: \"right\",\n                                            value: this.state.minimumContribution,\n                                            onChange: function(event) {\n                                                return _this.setState({\n                                                    minimumContribution: event.target.value\n                                                });\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ortiz/Documents/kickstart/pages/campaigns/new.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ortiz/Documents/kickstart/pages/campaigns/new.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                                    error: true,\n                                    header: \"Oops!\",\n                                    content: this.state.errorMessage\n                                }, void 0, false, {\n                                    fileName: \"/Users/ortiz/Documents/kickstart/pages/campaigns/new.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    primary: true,\n                                    children: \"Create!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ortiz/Documents/kickstart/pages/campaigns/new.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ortiz/Documents/kickstart/pages/campaigns/new.js\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ortiz/Documents/kickstart/pages/campaigns/new.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return CampaignNew;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN3QjtBQUNwQjtBQUNBO0FBQ047QUFDdkMsZUFBaUIsaUJBNkNiOzs7O2FBN0NFUyxXQUFXOzs7O1FBQ2ZDLCtDQUFBQSxPQUFLLEVBQUc7WUFDTkMsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QkMsWUFBWSxFQUFFLEVBQUU7WUFDaEJDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQzs7UUFFRkMsK0NBQUFBLFVBQVE7dUJBQUcsK0tBQU9DLEtBQUssRUFBSztvQkFJbEJDLFFBQVE7Ozs7NEJBSGhCRCxLQUFLLENBQUNFLGNBQWMsRUFBRSxDQUFDOzRCQUN2QixPQUFLQyxRQUFRLENBQUM7Z0NBQUNMLE9BQU8sRUFBQyxJQUFJOzZCQUFDLENBQUMsQ0FBQzs7O21DQUVMTCxzRUFBb0IsRUFBRTs7NEJBQXZDUSxRQUFRLFlBQStCOzttQ0FDdkNULGdGQUNXLENBQUMsT0FBS0csS0FBSyxDQUFDQyxtQkFBbUIsQ0FBQyxDQUM5Q1ksSUFBSSxDQUFDO2dDQUNKQyxJQUFJLEVBQUVSLFFBQVEsQ0FBQyxDQUFDLENBQUM7NkJBQ2xCLENBQUM7Ozs7Ozs7NEJBRUosT0FBS0UsUUFBUSxDQUFDO2dDQUFFTixZQUFZLEVBQUVhLFFBQUlDLE9BQU87NkJBQUUsQ0FBQyxDQUFDOzs0QkFFL0MsT0FBS1IsUUFBUSxFQUFFOzs7Ozs7Ozs7OzthQUNoQjs0QkFkaUJILEtBQUs7OztZQWNyQjs7Ozs7WUFDRlksR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUNQLHFCQUNFLDhEQUFDckIsMERBQU07O3NDQUNMLDhEQUFDc0IsSUFBRTtzQ0FBQyxtQkFBaUI7Ozs7O2dDQUFLO3NDQUMxQiw4REFBQzFCLG1EQUFJOzRCQUFDWSxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFROzRCQUFFZSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ25CLEtBQUssQ0FBQ0UsWUFBWTs7OENBQzdELDhEQUFDVix5REFBVTs7c0RBQ1QsOERBQUM2QixPQUFLO3NEQUFDLHNCQUFvQjs7Ozs7Z0RBQVE7c0RBQ25DLDhEQUFDM0Isb0RBQUs7NENBQ0oyQixLQUFLLEVBQUMsS0FBSzs0Q0FDWEMsYUFBYSxFQUFDLE9BQU87NENBQ3JCQyxLQUFLLEVBQUUsSUFBSSxDQUFDdkIsS0FBSyxDQUFDQyxtQkFBbUI7NENBQ3JDdUIsUUFBUSxFQUFFLFNBQUNuQixLQUFLO3VEQUNkLE1BQUtHLFFBQVEsQ0FBQztvREFBRVAsbUJBQW1CLEVBQUVJLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ0YsS0FBSztpREFBRSxDQUFDOzZDQUFBOzs7OztnREFFNUQ7Ozs7Ozt3Q0FDUzs4Q0FDYiw4REFBQzVCLHNEQUFPO29DQUFDd0IsS0FBSztvQ0FBQ08sTUFBTSxFQUFDLE9BQU87b0NBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUMzQixLQUFLLENBQUNFLFlBQVk7Ozs7O3dDQUFJOzhDQUNsRSw4REFBQ1QscURBQU07b0NBQUNtQyxPQUFPOzhDQUFDLFNBQU87Ozs7O3dDQUFTOzs7Ozs7Z0NBQzNCOzs7Ozs7d0JBQ0EsQ0FDVDthQUNIOzs7O0NBQ0YsQ0E1Q3lCckMsNENBQVMsQ0E0Q2xDO0FBQ0QsK0RBQWVRLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzP2JkNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuY2xhc3MgQ2FtcGFpZ25OZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBcIlwiLFxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVDYW1wYWlnbih0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb24pXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgpXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPkNyZWF0ZSBhIENhbXBhaWduPC9oMz5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5NaW5pbXVtIENvbnRyaWJ1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxuICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtaW5pbXVtQ29udHJpYnV0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwiZXJyIiwibWVzc2FnZSIsInJlbmRlciIsImgzIiwiZXJyb3IiLCJGaWVsZCIsImxhYmVsIiwibGFiZWxQb3NpdGlvbiIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ })

});