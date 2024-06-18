import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function PriceList({ services }) {
  return /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("div", { className: "col-lg-8 col-12", children: /* @__PURE__ */ jsxs("div", { className: "price-list-thumb-wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-2", children: "Price List" }),
        /* @__PURE__ */ jsx("strong", { children: "Starting at 10k" })
      ] }),
      services.map((service, k) => /* @__PURE__ */ jsx("div", { className: "price-list-thumb", children: /* @__PURE__ */ jsxs("h6", { className: "d-flex", children: [
        " ",
        service.name,
        " ",
        /* @__PURE__ */ jsx("span", { className: "price-list-thumb-divider" }),
        /* @__PURE__ */ jsxs("strong", { children: [
          service.price.slice(0, -3),
          "k"
        ] })
      ] }) }, k))
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "pt-3 mt-5 mb-5 col-lg-4 col-12 custom-block-bg-overlay-wrap mb-lg-0 mt-lg-0 pt-lg-0", children: /* @__PURE__ */ jsx("img", { src: `https://storage.googleapis.com/barbershop-raplontos/images/vintage-chair-barbershop.jpg`, className: "custom-block-bg-overlay-image img-fluid" }) })
  ] }) });
}
export {
  PriceList as default
};
