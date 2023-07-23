/*! For license information please see stories-Section-2-index-stories-mdx.0b0d4c42.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkdesignsystem = self.webpackChunkdesignsystem || []).push([
  [957],
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
    "./node_modules/@mdx-js/react/lib/index.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        NF: function () {
          return withMDXComponents;
        },
        Zo: function () {
          return MDXProvider;
        },
        ah: function () {
          return useMDXComponents;
        },
        pC: function () {
          return MDXContext;
        },
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/react/index.js"
      );
      const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
      function withMDXComponents(Component) {
        return function boundMDXComponent(props) {
          const allComponents = useMDXComponents(props.components);
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {
            ...props,
            allComponents: allComponents,
          });
        };
      }
      function useMDXComponents(components) {
        const contextComponents =
          react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
        return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
          () =>
            "function" == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components },
          [contextComponents, components]
        );
      }
      const emptyObject = {};
      function MDXProvider({
        components: components,
        children: children,
        disableParentContext: disableParentContext,
      }) {
        let allComponents;
        return (
          (allComponents = disableParentContext
            ? "function" == typeof components
              ? components({})
              : components || emptyObject
            : useMDXComponents(components)),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            MDXContext.Provider,
            { value: allComponents },
            children
          )
        );
      }
    },
    "./node_modules/@storybook/addon-docs/dist/index.mjs": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        h_: function () {
          return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_;
        },
        oG: function () {
          return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG;
        },
      });
      __webpack_require__(
        "./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs"
      );
      var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "./node_modules/@storybook/blocks/dist/index.mjs"
      );
    },
    "./src/stories/Section-2/index.stories.mdx": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Template: function () {
            return Template;
          },
          default: function () {
            return index_stories;
          },
          introduction: function () {
            return introduction;
          },
        });
      __webpack_require__("./node_modules/react/index.js");
      var lib = __webpack_require__(
          "./node_modules/@mdx-js/react/lib/index.js"
        ),
        dist = __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/index.mjs"
        ),
        Section_2 =
          (__webpack_require__("./src/assets/css/index.css"),
          __webpack_require__("./src/components/moleculs/Section-2/index.tsx")),
        section_2_namespaceObject =
          __webpack_require__.p + "73fd489cb61481a612ab.png",
        Button = __webpack_require__("./src/components/atom/Button/index.tsx"),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      var example_Sample = function Sample() {
        return (0, jsx_runtime.jsx)("div", {
          className: "my-20 gap-y-28 flex flex-col",
          children: (0, jsx_runtime.jsx)(Section_2.Z, {
            content: {
              preheading: "Profil Desa",
              paragraph:
                "Desa Bandung, Wonosegoro, Boyolali terletak di Kecamatan Wonosegoro, Kabupaten Boyolali, Provinsi Jawa Tengah, Indonesia. Desa ini terletak di bagian utara Kecamatan Wonosegoro, sekitar 10 kilometer dari pusat kota Boyolali. ",
            },
            image: section_2_namespaceObject,
            title: "image",
            button: (0, jsx_runtime.jsx)(Button.Z, {
              state: "primary",
              children: (0, jsx_runtime.jsx)("a", {
                href: "",
                children: "Learn More",
              }),
            }),
          }),
        });
      };
      const Template = (args) =>
        (0, jsx_runtime.jsx)(example_Sample, { ...args });
      function _createMdxContent(props) {
        const _components = Object.assign(
          { h1: "h1", p: "p", a: "a" },
          (0, lib.ah)(),
          props.components
        );
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsx)(dist.h_, { title: "Components/SectionDua" }),
            "\n",
            (0, jsx_runtime.jsx)(_components.h1, {
              id: "sectiondua",
              children: "SectionDua",
            }),
            "\n",
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                "A most import components that simply let user interact with the app,[",
                (0, jsx_runtime.jsx)(_components.a, {
                  href: "/docs/components-SectionDua-example--default",
                  children: "Default Example",
                }),
                "] if you want to see in action",
              ],
            }),
            "\n",
            "\n",
            (0, jsx_runtime.jsx)(dist.oG, {
              name: "Introduction",
              args: {},
              children: Template.bind({}),
            }),
          ],
        });
      }
      const introduction = Template.bind({});
      (introduction.storyName = "Introduction"),
        (introduction.args = {}),
        (introduction.parameters = {
          storySource: { source: "args => <SectionDua {...args} />" },
        });
      const componentMeta = {
        title: "Components/SectionDua",
        tags: ["stories-mdx"],
        includeStories: ["introduction"],
      };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: function MDXContent(props = {}) {
            const { wrapper: MDXLayout } = Object.assign(
              {},
              (0, lib.ah)(),
              props.components
            );
            return MDXLayout
              ? (0, jsx_runtime.jsx)(MDXLayout, {
                  ...props,
                  children: (0, jsx_runtime.jsx)(_createMdxContent, {
                    ...props,
                  }),
                })
              : _createMdxContent(props);
          },
        });
      var index_stories = componentMeta;
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
    "./src/components/moleculs/Section-2/index.tsx": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/react/jsx-runtime.js"
      );
      function SectionDua(_ref) {
        var content = _ref.content,
          image = _ref.image,
          title = _ref.title,
          button = _ref.button;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "container mx-auto px-4 group",
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            "div",
            {
              className:
                "flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-28 xl:gap-x-36",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  "div",
                  {
                    className:
                      "w-full md:w-4/12 2xl:w-3/12 md:group-odd:order-2 md:group-even:order-1",
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "h3",
                        {
                          className:
                            "text-[#FFDE32] uppercase font-bold mb-3 text-4xl",
                          children: content.preheading || "Pre Heading",
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "h3",
                        {
                          className: "text-black leading-8 mb-8",
                          children: content.paragraph || "Paragraph",
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        "div",
                        { children: button }
                      ),
                    ],
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className:
                    "relative md:group-odd:order-1 md:group-even:order-2",
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className:
                      "relative max-w-full w-[460px] h-[449px] xl:w-[460px] xl:h-[449px] rounded-tr-[59px] rounded-bl-[59px] rounded-tl-3xl rounded-br-3xl overflow-hidden",
                    children:
                      "string" == typeof image
                        ? (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            "img",
                            { src: image, alt: title }
                          )
                        : image,
                  }),
                }),
              ],
            }
          ),
        });
      }
      __webpack_exports__.Z = SectionDua;
      try {
        (SectionDua.displayName = "SectionDua"),
          (SectionDua.__docgenInfo = {
            description: "",
            displayName: "SectionDua",
            props: {
              content: {
                defaultValue: null,
                description: "",
                name: "content",
                required: !0,
                type: { name: "{ preheading: string; paragraph: string; }" },
              },
              button: {
                defaultValue: null,
                description: "",
                name: "button",
                required: !0,
                type: { name: "ReactNode" },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              image: {
                defaultValue: null,
                description: "",
                name: "image",
                required: !0,
                type: { name: "ReactNode" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/moleculs/Section-2/index.tsx#SectionDua"
            ] = {
              docgenInfo: SectionDua.__docgenInfo,
              name: "SectionDua",
              path: "src/components/moleculs/Section-2/index.tsx#SectionDua",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/assets/css/index.css": function () {},
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
