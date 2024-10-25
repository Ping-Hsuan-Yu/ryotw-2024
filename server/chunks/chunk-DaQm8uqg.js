import { jsx, Fragment } from "react/jsx-runtime";
/* empty css               */
function LayoutDefault({ children }) {
  return /* @__PURE__ */ jsx("div", { children });
}
function HeadDefault() {
  return /* @__PURE__ */ jsx(Fragment, {});
}
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HeadDefault
}, Symbol.toStringTag, { value: "Module" }));
export {
  LayoutDefault as L,
  import4 as i
};
