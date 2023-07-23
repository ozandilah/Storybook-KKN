/*! For license information please see stories-atom-Button-example-Default-stories.f5aebce9.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkdesignsystem = self.webpackChunkdesignsystem || []).push([
  [872],
  {
    "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      function _typeof(obj) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function _toPropertyKey(arg) {
        var key = (function _toPrimitive(input, hint) {
          if ("object" !== _typeof(input) || null === input) return input;
          var prim = input[Symbol.toPrimitive];
          if (void 0 !== prim) {
            var res = prim.call(input, hint || "default");
            if ("object" !== _typeof(res)) return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === hint ? String : Number)(input);
        })(arg, "string");
        return "symbol" === _typeof(key) ? key : String(key);
      }
      function _defineProperty(obj, key, value) {
        return (
          (key = _toPropertyKey(key)) in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return _objectSpread2;
        },
      });
    },
    "./src/stories/atom/Button/example/Default.stories.tsx": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Alternative: function () {
            return Alternative;
          },
          Primary: function () {
            return Primary;
          },
          Secondary: function () {
            return Secondary;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Default_stories;
          },
        });
      var _path,
        _path2,
        _path3,
        _path4,
        _path5,
        _path6,
        objectSpread2 = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        Button = __webpack_require__("./src/components/atom/Button/index.tsx"),
        _excluded = ["title", "titleId"];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function SvgGroup(_ref, svgRef) {
        var title = _ref.title,
          titleId = _ref.titleId,
          props = _objectWithoutProperties(_ref, _excluded);
        return react.createElement(
          "svg",
          _extends(
            {
              width: 20,
              height: 20,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: svgRef,
              "aria-labelledby": titleId,
            },
            props
          ),
          title ? react.createElement("title", { id: titleId }, title) : null,
          _path ||
            (_path = react.createElement("path", {
              d: "M4.6875 10C4.6875 9.00913 4.96051 8.08088 5.4348 7.28608V3.91467H2.0634C0.725313 5.65249 0 7.77041 0 10C0 12.2296 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.9909 4.6875 10Z",
              fill: "#FBBD00",
            })),
          _path2 ||
            (_path2 = react.createElement("path", {
              d: "M10 15.3126L7.65625 17.6563L10 20.0001C12.2296 20.0001 14.3475 19.2747 16.0854 17.9367V14.5688H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z",
              fill: "#0F9D58",
            })),
          _path3 ||
            (_path3 = react.createElement("path", {
              d: "M5.43488 12.714L2.06348 16.0854C2.3284 16.4295 2.61687 16.7589 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.36269 14.2688 5.43488 12.714Z",
              fill: "#31AA52",
            })),
          _path4 ||
            (_path4 = react.createElement("path", {
              d: "M20 10C20 9.39164 19.9449 8.78211 19.8363 8.18844L19.7483 7.70801H10V12.3955H14.7442C14.2835 13.312 13.5752 14.0596 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10Z",
              fill: "#3C79E6",
            })),
          _path5 ||
            (_path5 = react.createElement("path", {
              d: "M13.7565 6.24348L14.1708 6.65777L17.4854 3.34324L17.0711 2.92895C15.1823 1.0402 12.6711 0 10 0L7.65625 2.34375L10 4.6875C11.419 4.6875 12.7531 5.24008 13.7565 6.24348Z",
              fill: "#CF2D48",
            })),
          _path6 ||
            (_path6 = react.createElement("path", {
              d: "M9.99987 4.6875V0C7.32878 0 4.81757 1.0402 2.92878 2.92891C2.61663 3.24105 2.32815 3.57055 2.06323 3.91465L5.43464 7.28605C6.36249 5.73125 8.06144 4.6875 9.99987 4.6875Z",
              fill: "#EB4132",
            }))
        );
      }
      var _Primary$parameters,
        _Primary$parameters2,
        _Primary$parameters2$,
        _Secondary$parameters,
        _Secondary$parameters2,
        _Secondary$parameters3,
        _Alternative$paramete,
        _Alternative$paramete2,
        _Alternative$paramete3,
        ForwardRef = react.forwardRef(SvgGroup),
        jsx_runtime =
          (__webpack_require__.p,
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        Default_stories = {
          title: "Components/Button/Example",
          component: Button.Z,
        },
        Primary = function Primary(args) {
          return (0, jsx_runtime.jsx)(
            Button.Z,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, args),
              {},
              {
                children: (0, jsx_runtime.jsx)("button", {
                  children: "Get Started",
                }),
              }
            )
          );
        };
      Primary.args = { state: "primary" };
      var Secondary = function Secondary(args) {
        return (0, jsx_runtime.jsx)(
          Button.Z,
          (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, args),
            {},
            {
              children: (0, jsx_runtime.jsx)("button", { children: "Sign In" }),
            }
          )
        );
      };
      Secondary.args = { state: "secondary" };
      var Alternative = function Alternative(args) {
        return (0, jsx_runtime.jsx)(
          Button.Z,
          (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, args),
            {},
            {
              children: (0, jsx_runtime.jsxs)("a", {
                href: "https://www.google.com",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  (0, jsx_runtime.jsx)(ForwardRef, {}),
                  (0, jsx_runtime.jsx)("span", {
                    className: "ml-2",
                    children: "Sign In with Google",
                  }),
                ],
              }),
            }
          )
        );
      };
      (Alternative.args = {
        state: "alternative",
        className: "border-2 border-[#E7E5F4]",
      }),
        (Primary.parameters = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Primary.parameters),
          {},
          {
            docs: (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {},
                null === (_Primary$parameters = Primary.parameters) ||
                  void 0 === _Primary$parameters
                  ? void 0
                  : _Primary$parameters.docs
              ),
              {},
              {
                source: (0, objectSpread2.Z)(
                  {
                    originalSource:
                      "(args: any) => <Button {...args}>\r\n    <button>Get Started</button>\r\n  </Button>",
                  },
                  null === (_Primary$parameters2 = Primary.parameters) ||
                    void 0 === _Primary$parameters2 ||
                    null ===
                      (_Primary$parameters2$ = _Primary$parameters2.docs) ||
                    void 0 === _Primary$parameters2$
                    ? void 0
                    : _Primary$parameters2$.source
                ),
              }
            ),
          }
        )),
        (Secondary.parameters = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Secondary.parameters),
          {},
          {
            docs: (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {},
                null === (_Secondary$parameters = Secondary.parameters) ||
                  void 0 === _Secondary$parameters
                  ? void 0
                  : _Secondary$parameters.docs
              ),
              {},
              {
                source: (0, objectSpread2.Z)(
                  {
                    originalSource:
                      "(args: any) => <Button {...args}>\r\n    <button>Sign In</button>\r\n  </Button>",
                  },
                  null === (_Secondary$parameters2 = Secondary.parameters) ||
                    void 0 === _Secondary$parameters2 ||
                    null ===
                      (_Secondary$parameters3 = _Secondary$parameters2.docs) ||
                    void 0 === _Secondary$parameters3
                    ? void 0
                    : _Secondary$parameters3.source
                ),
              }
            ),
          }
        )),
        (Alternative.parameters = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Alternative.parameters),
          {},
          {
            docs: (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {},
                null === (_Alternative$paramete = Alternative.parameters) ||
                  void 0 === _Alternative$paramete
                  ? void 0
                  : _Alternative$paramete.docs
              ),
              {},
              {
                source: (0, objectSpread2.Z)(
                  {
                    originalSource:
                      '(args: any) => <Button {...args}>\r\n    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">\r\n      <Group />\r\n      <span className="ml-2">Sign In with Google</span>\r\n    </a>\r\n  </Button>',
                  },
                  null === (_Alternative$paramete2 = Alternative.parameters) ||
                    void 0 === _Alternative$paramete2 ||
                    null ===
                      (_Alternative$paramete3 = _Alternative$paramete2.docs) ||
                    void 0 === _Alternative$paramete3
                    ? void 0
                    : _Alternative$paramete3.source
                ),
              }
            ),
          }
        ));
      var __namedExportsOrder = ["Primary", "Secondary", "Alternative"];
      try {
        (Primary.displayName = "Primary"),
          (Primary.__docgenInfo = {
            description: "",
            displayName: "Primary",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/stories/atom/Button/example/Default.stories.tsx#Primary"
            ] = {
              docgenInfo: Primary.__docgenInfo,
              name: "Primary",
              path: "src/stories/atom/Button/example/Default.stories.tsx#Primary",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Secondary.displayName = "Secondary"),
          (Secondary.__docgenInfo = {
            description: "",
            displayName: "Secondary",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/stories/atom/Button/example/Default.stories.tsx#Secondary"
            ] = {
              docgenInfo: Secondary.__docgenInfo,
              name: "Secondary",
              path: "src/stories/atom/Button/example/Default.stories.tsx#Secondary",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Alternative.displayName = "Alternative"),
          (Alternative.__docgenInfo = {
            description: "",
            displayName: "Alternative",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/stories/atom/Button/example/Default.stories.tsx#Alternative"
            ] = {
              docgenInfo: Alternative.__docgenInfo,
              name: "Alternative",
              path: "src/stories/atom/Button/example/Default.stories.tsx#Alternative",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/components/atom/Button/index.tsx": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return atom_Button;
        },
      });
      var objectSpread2 = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
        ),
        config = {
          state: {
            primary:
              "border-2 border-transparent bg-orange hover:bg-orange focus:bg-orange active:bg-orange text-white",
            secondary:
              "border-2 border-soft-yellow hover:border-transparent bg-soft-yellow hover:bg-yellow focus:bg-yellow active:bg-yellow text-white",
            alternative: "",
            disabled: "border-2 border-transparent bg-soft-gray text-grey",
            loading: "border-2 border-transparent bg-soft-gray text-grey",
          },
        },
        react = __webpack_require__("./node_modules/react/index.js"),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      function Button(props) {
        var _configs$state,
          _props$children,
          state = props.state;
        props.isDisabled && (state = "disabled"),
          props.isLoading && (state = "loading");
        var className = [
            "py-2 px-6  font-medium rounded-full relative appearance-none focus:outline-none transition-all duration-300 inline-flex items-center select-none overflow-hidden",
            (null == config ||
            null === (_configs$state = config.state) ||
            void 0 === _configs$state
              ? void 0
              : _configs$state[state]) || "",
            props.className || "",
          ],
          returnChildren = props.children,
          returnContent = props.children.props.children;
        "object" ==
          typeof (null === (_props$children = props.children) ||
          void 0 === _props$children
            ? void 0
            : _props$children.type) &&
          ((returnChildren = props.children.props.children),
          (returnContent = props.children.props.children.props.children));
        var children = (0, react.cloneElement)(
          returnChildren,
          (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, props.children.props),
            {},
            {
              disabled: props.isDisabled || props.isLoading,
              children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  (0, jsx_runtime.jsx)("span", {
                    className: [
                      "transition-all duration-300 inline-flex items-center",
                      props.isLoading
                        ? "-top-full opacity-0 invisible"
                        : "top-0 opacity-100 visible",
                    ].join(" "),
                    children: returnContent,
                  }),
                  (0, jsx_runtime.jsx)("span", {
                    className: [
                      "transition-all duration-300 absolute left-0 right-0 bottom-0 z-10 inline-flex items-center justify-center",
                      props.isLoading
                        ? "top-0 opacity-100"
                        : "-top-full opacity-0",
                    ].join(" "),
                    children: (0, jsx_runtime.jsxs)("svg", {
                      className: "animate-spin w-5 h-5",
                      viewBox: "0 0 28 28",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, jsx_runtime.jsx)("circle", {
                          opacity: "0.2",
                          cx: "14",
                          cy: "14",
                          r: "13",
                          className: "stroke-white",
                          strokewidth: "2",
                        }),
                        (0, jsx_runtime.jsx)("path", {
                          d: "M14 1C21.1797 1 27 6.8203 27 14C27 18.0209 25.1745 21.6154 22.3071 24",
                          className: "stroke-white",
                          strokewidth: "2",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }
          )
        );
        return (0, react.cloneElement)(children, {
          className: className.join(" "),
          state: state,
        });
      }
      var atom_Button = Button;
      try {
        (Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              state: {
                defaultValue: null,
                description: "",
                name: "state",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"disabled"' },
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"alternative"' },
                    { value: '"loading"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              isDisabled: {
                defaultValue: null,
                description: "",
                name: "isDisabled",
                required: !1,
                type: { name: "boolean" },
              },
              isLoading: {
                defaultValue: null,
                description: "",
                name: "isLoading",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/atom/Button/index.tsx#Button"
            ] = {
              docgenInfo: Button.__docgenInfo,
              name: "Button",
              path: "src/components/atom/Button/index.tsx#Button",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./node_modules/react/cjs/react-jsx-runtime.production.min.js": function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      var f = __webpack_require__("./node_modules/react/index.js"),
        k = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        m = Object.prototype.hasOwnProperty,
        n =
          f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        for (b in (void 0 !== g && (e = "" + g),
        void 0 !== a.key && (e = "" + a.key),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps)
          for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return {
          $$typeof: k,
          type: c,
          key: e,
          ref: h,
          props: d,
          _owner: n.current,
        };
      }
      (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
    },
    "./node_modules/react/jsx-runtime.js": function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      module.exports = __webpack_require__(
        "./node_modules/react/cjs/react-jsx-runtime.production.min.js"
      );
    },
  },
]);
