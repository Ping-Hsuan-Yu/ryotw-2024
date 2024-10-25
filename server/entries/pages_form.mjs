import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as LayoutDefault, i as import4 } from "../chunks/chunk-DaQm8uqg.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import DatePicker from "react-date-picker";
/* empty css                       */
/* empty css                       */
/* empty css                       */
function Form() {
  const [value, onChange] = useState(/* @__PURE__ */ new Date());
  const [formData, setFormData] = useState({
    userName: "",
    userId: "",
    phone: "",
    email: "",
    invoiceNum: "",
    date: "",
    randomCode: ""
  });
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 items-end", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "userName" }),
      /* @__PURE__ */ jsx("input", { className: "border rounded", type: "text", required: true, value: formData.userName, autoComplete: "name" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "userId" }),
      /* @__PURE__ */ jsx("input", { className: "border rounded", type: "text", required: true, value: formData.userId })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "phone" }),
      /* @__PURE__ */ jsx("input", { className: "border rounded", type: "text", required: true, value: formData.phone, autoComplete: "phone", inputMode: "tel" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "email" }),
      /* @__PURE__ */ jsx("input", { className: "border rounded", type: "email", required: true, value: formData.email, autoComplete: "email", inputMode: "email" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "invoiceNum" }),
      /* @__PURE__ */ jsx("input", { className: "border rounded", type: "text", required: true, value: formData.invoiceNum })
    ] }),
    /* @__PURE__ */ jsx(DatePicker, { onChange, value, maxDate: /* @__PURE__ */ new Date(), calendarIcon: null, clearIcon: null, required: true }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "date" }),
      /* @__PURE__ */ jsx("input", { className: "border rounded", type: "text", required: true, value: formData.date })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "randomCode" }),
      /* @__PURE__ */ jsx("input", { className: "border rounded", type: "text", value: formData.randomCode, inputMode: "numeric" })
    ] })
  ] });
}
const import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Form
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["Loading"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/components/Loading", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: import1
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: onRenderHtml
    }
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["_configFromHook"]
    }]
  },
  ["Layout"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/layouts/LayoutDefault.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "pointer-import",
      value: LayoutDefault
    }]
  },
  ["Head"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/pages/+Head.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "plus-file",
      exportValues: import4
    }]
  },
  ["title"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
    valueSerialized: {
      type: "js-serialized",
      value: "登錄發票就抽韓國首爾雙人機票"
    }
  },
  ["description"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "description"] },
    valueSerialized: {
      type: "js-serialized",
      value: "登錄發票就抽韓國首爾雙人機票"
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/form/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  }
};
export {
  configValuesSerialized
};
