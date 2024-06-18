import { j as jsxs, a as jsx } from "../ssr.js";
import { A as ApplicationLogo } from "./app-547f9348.js";
import { Link } from "@inertiajs/react";
function Authentication({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "w-50 h-50 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg", children })
  ] });
}
export {
  Authentication as A
};
