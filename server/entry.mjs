import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{004}~.js": {
    "file": "assets/static/styles_Calendar-2d27b897.sNeX-9iT.css",
    "src": "_chunk-!~{004}~.js"
  },
  "_chunk-!~{005}~.js": {
    "file": "assets/static/styles_DatePicker-214c85bd.CizWUeoi.css",
    "src": "_chunk-!~{005}~.js"
  },
  "_chunk-!~{006}~.js": {
    "file": "assets/static/styles_tailwind-d7b83922.GwYVwlvY.css",
    "src": "_chunk-!~{006}~.js"
  },
  "_chunk-!~{007}~.js": {
    "file": "assets/static/swiper-2a04c68e.EKmKsbKj.css",
    "src": "_chunk-!~{007}~.js"
  },
  "_chunk-!~{008}~.js": {
    "file": "assets/static/swiper-e0068eea.BoW6ihGT.css",
    "src": "_chunk-!~{008}~.js"
  },
  "_chunk-!~{009}~.js": {
    "file": "assets/static/swiper-facb96ae.aOjAu50E.css",
    "src": "_chunk-!~{009}~.js"
  },
  "_chunk-!~{00a}~.js": {
    "file": "assets/static/vike-react-b64a028b.B6DZbHFi.css",
    "src": "_chunk-!~{00a}~.js"
  },
  "_chunk-BcbBGIHA.js": {
    "file": "assets/chunks/chunk-BcbBGIHA.js",
    "name": "executeHook"
  },
  "_chunk-C893zDcs.js": {
    "file": "assets/chunks/chunk-C893zDcs.js",
    "name": "_onPageTransitionStart",
    "imports": [
      "_chunk-BcbBGIHA.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.B6DZbHFi.css",
      "assets/static/styles_tailwind-d7b83922.GwYVwlvY.css"
    ]
  },
  "assets/announcement/airplane.webp": {
    "file": "assets/static/airplane.DkA5Rut-.webp",
    "src": "assets/announcement/airplane.webp"
  },
  "assets/announcement/announcement-bg.svg": {
    "file": "assets/static/announcement-bg.BxIYLYGS.svg",
    "src": "assets/announcement/announcement-bg.svg"
  },
  "assets/announcement/seoul.webp": {
    "file": "assets/static/seoul.Ci6akxgZ.webp",
    "src": "assets/announcement/seoul.webp"
  },
  "assets/announcement/window.webp": {
    "file": "assets/static/window.BuPhDfdg.webp",
    "src": "assets/announcement/window.webp"
  },
  "assets/kv/Ryo_KV.webp": {
    "file": "assets/static/Ryo_KV.Y4lztQq5.webp",
    "src": "assets/kv/Ryo_KV.webp"
  },
  "assets/kv/illiyoon_KV.webp": {
    "file": "assets/static/illiyoon_KV.V1GQ4UVi.webp",
    "src": "assets/kv/illiyoon_KV.webp"
  },
  "assets/kv/miseenscene_KV.webp": {
    "file": "assets/static/miseenscene_KV.BUw-zbEG.webp",
    "src": "assets/kv/miseenscene_KV.webp"
  },
  "assets/link.webp": {
    "file": "assets/static/link.Q4TMASXV.webp",
    "src": "assets/link.webp"
  },
  "assets/logo/Tomods-logo.webp": {
    "file": "assets/static/Tomods-logo.0rHWNtip.webp",
    "src": "assets/logo/Tomods-logo.webp"
  },
  "assets/logo/amart_logo.svg": {
    "file": "assets/static/amart_logo.dh5XI1yf.svg",
    "src": "assets/logo/amart_logo.svg"
  },
  "assets/logo/carrefour_logo.svg": {
    "file": "assets/static/carrefour_logo.DY9UFzEF.svg",
    "src": "assets/logo/carrefour_logo.svg"
  },
  "assets/logo/cosmed_logo.svg": {
    "file": "assets/static/cosmed_logo.DYKZ-D_2.svg",
    "src": "assets/logo/cosmed_logo.svg"
  },
  "assets/logo/illiyoon-logo.svg": {
    "file": "assets/static/illiyoon-logo.zB1gxmr_.svg",
    "src": "assets/logo/illiyoon-logo.svg"
  },
  "assets/logo/matsukiyo-logo.svg": {
    "file": "assets/static/matsukiyo-logo.BhNKZxMl.svg",
    "src": "assets/logo/matsukiyo-logo.svg"
  },
  "assets/logo/miseenscene-logo.svg": {
    "file": "assets/static/miseenscene-logo.HSeZQV8V.svg",
    "src": "assets/logo/miseenscene-logo.svg"
  },
  "assets/logo/momo-logo.webp": {
    "file": "assets/static/momo-logo.C2bFkriF.webp",
    "src": "assets/logo/momo-logo.webp"
  },
  "assets/logo/ryo-logo.svg": {
    "file": "assets/static/ryo-logo.DbcL111j.svg",
    "src": "assets/logo/ryo-logo.svg"
  },
  "assets/logo/shopee_logo.svg": {
    "file": "assets/static/shopee_logo.BXxpZDk7.svg",
    "src": "assets/logo/shopee_logo.svg"
  },
  "assets/logo/watsons_logo.svg": {
    "file": "assets/static/watsons_logo.BF2oxGkG.svg",
    "src": "assets/logo/watsons_logo.svg"
  },
  "assets/noise.webp": {
    "file": "assets/static/noise.CxMmyROH.webp",
    "src": "assets/noise.webp"
  },
  "assets/register/button.webp": {
    "file": "assets/static/button.BXqQbIM1.webp",
    "src": "assets/register/button.webp"
  },
  "assets/register/register-bg.webp": {
    "file": "assets/static/register-bg.DTOTkUiX.webp",
    "src": "assets/register/register-bg.webp"
  },
  "assets/ticket.svg": {
    "file": "assets/static/ticket.D7kOfn4O.svg",
    "src": "assets/ticket.svg"
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.tH7AmcYl.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-BcbBGIHA.js"
    ],
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/index"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.DOCoMmRi.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C893zDcs.js",
      "_chunk-BcbBGIHA.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.B6DZbHFi.css",
      "assets/static/styles_tailwind-d7b83922.GwYVwlvY.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.D-Zyc2KR.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C893zDcs.js",
      "_chunk-BcbBGIHA.js"
    ],
    "css": [
      "assets/static/swiper-2a04c68e.EKmKsbKj.css",
      "assets/static/swiper-facb96ae.aOjAu50E.css",
      "assets/static/swiper-e0068eea.BoW6ihGT.css",
      "assets/static/styles_Calendar-2d27b897.sNeX-9iT.css",
      "assets/static/styles_DatePicker-214c85bd.CizWUeoi.css",
      "assets/static/vike-react-b64a028b.B6DZbHFi.css",
      "assets/static/styles_tailwind-d7b83922.GwYVwlvY.css"
    ],
    "assets": [
      "assets/static/noise.CxMmyROH.webp",
      "assets/static/ryo-logo.DbcL111j.svg",
      "assets/static/miseenscene-logo.HSeZQV8V.svg",
      "assets/static/illiyoon-logo.zB1gxmr_.svg",
      "assets/static/Ryo_KV.Y4lztQq5.webp",
      "assets/static/miseenscene_KV.BUw-zbEG.webp",
      "assets/static/illiyoon_KV.V1GQ4UVi.webp",
      "assets/static/ticket.D7kOfn4O.svg",
      "assets/static/watsons_logo.BF2oxGkG.svg",
      "assets/static/cosmed_logo.DYKZ-D_2.svg",
      "assets/static/momo-logo.C2bFkriF.webp",
      "assets/static/carrefour_logo.DY9UFzEF.svg",
      "assets/static/amart_logo.dh5XI1yf.svg",
      "assets/static/shopee_logo.BXxpZDk7.svg",
      "assets/static/Tomods-logo.0rHWNtip.webp",
      "assets/static/matsukiyo-logo.BhNKZxMl.svg",
      "assets/static/window.BuPhDfdg.webp",
      "assets/static/register-bg.DTOTkUiX.webp",
      "assets/static/link.Q4TMASXV.webp",
      "assets/static/button.BXqQbIM1.webp",
      "assets/static/announcement-bg.BxIYLYGS.svg",
      "assets/static/airplane.DkA5Rut-.webp",
      "assets/static/seoul.Ci6akxgZ.webp"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.199",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
