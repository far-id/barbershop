import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Branches({ branches }) {
  return /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("div", { className: "col-lg-12 col-12", children: /* @__PURE__ */ jsx("h4", { className: "mb-4 site-footer-title", children: "Our Branches" }) }),
    branches.map((branch, k) => /* @__PURE__ */ jsx("div", { className: "col-lg-4 col-md-6 col-11", children: /* @__PURE__ */ jsxs("div", { className: "site-footer-thumb", children: [
      /* @__PURE__ */ jsx("strong", { className: "mb-1", children: branch.name }),
      /* @__PURE__ */ jsx("p", { children: branch.address })
    ] }) }, k))
  ] }) });
}
export {
  Branches as default
};
