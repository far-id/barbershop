import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import "react";
import { Link } from "react-scroll";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Nav({ navItems }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("button", { className: "navbar-toggler d-md-none collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#sidebarMenu", "aria-controls": "sidebarMenu", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("span", { className: "navbar-toggler-icon" }) }),
    /* @__PURE__ */ jsx("nav", { id: "sidebarMenu", className: "p-0 col-md-4 col-lg-3 d-md-block sidebar collapse", children: /* @__PURE__ */ jsxs("div", { className: "position-sticky sidebar-sticky d-flex flex-column justify-content-center align-items-center", children: [
      /* @__PURE__ */ jsx(Link, { className: "navbar-brand", to: "section_1", spy: true, smooth: true, offset: 0, duration: 500, children: /* @__PURE__ */ jsx("img", { src: `https://storage.googleapis.com/barbershop-raplontos/images/templatemo-barber-logo.png`, className: "logo-image img-fluid" }) }),
      /* @__PURE__ */ jsx("ul", { className: "nav flex-column", children: navItems.map((nav, k) => /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link click-scroll", to: nav.to, spy: true, smooth: true, offset: nav.offset, duration: 500, children: nav.text }) }, k)) })
    ] }) })
  ] }) });
}
export {
  Nav as default
};
