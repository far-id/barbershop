import { a as jsx, j as jsxs } from "../ssr.js";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Services({ services }) {
  return /* @__PURE__ */ jsx("section", { className: "services-section section-padding", id: "services_section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("div", { className: "col-lg-12 col-12", children: /* @__PURE__ */ jsx("h2", { className: "mb-5", children: "Services" }) }),
    services.filter((service) => service.prime == true).map((service, k) => /* @__PURE__ */ jsx("div", { className: "mb-4 col-lg-6 col-12", children: /* @__PURE__ */ jsxs("div", { className: "services-thumb", children: [
      /* @__PURE__ */ jsx("img", { src: `https://storage.googleapis.com/barbershop-raplontos/${service.image}`, className: "services-image img-fluid" }),
      /* @__PURE__ */ jsxs("div", { className: "services-info d-flex align-items-end", children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-0", children: service.name }),
        /* @__PURE__ */ jsxs("strong", { className: "services-thumb-price", children: [
          service.price.slice(0, -3),
          "k"
        ] })
      ] })
    ] }) }, k))
  ] }) }) });
}
export {
  Services as default
};
