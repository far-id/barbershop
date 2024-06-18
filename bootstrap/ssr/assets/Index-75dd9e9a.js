import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-84ff5681.js";
import { Head, Link } from "@inertiajs/react";
import { Table, Breadcrumb } from "flowbite-react";
import { useState, useEffect } from "react";
import { BiSolidDashboard } from "react-icons/bi/index.esm.js";
import { HiPlus } from "react-icons/hi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./app-547f9348.js";
import "@headlessui/react";
function Index({ services: data }) {
  const [services, setServices] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const order = (by) => {
    let ordered = [...services].sort((a, b) => a[by].localeCompare(b[by]));
    setServices(ordered);
  };
  const successDelete = (id) => setServices([...services].filter((service) => service.id !== id));
  useEffect(() => {
    const search = (query) => {
      if (!query)
        return setServices(data);
      return setServices(
        [...data].filter(
          (service) => Object.keys(service).some(
            (key) => key === "name" || key === "price" ? service[key].toString().toLowerCase().includes(query.toLowerCase()) : false
          )
        )
      );
    };
    search(searchValue);
  }, [searchValue]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Services" }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full p-3 mb-6 bg-white rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "items-center w-full", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "default-search", className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white", children: "Search" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" }) }) }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => setSearchValue(e.target.value), type: "search", id: "default-search", className: "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Search by Name or Price", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("services.create"),
          title: "Add New Service",
          className: "inline p-2 mx-2 font-medium text-white bg-blue-700 rounded-full text-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: /* @__PURE__ */ jsx(HiPlus, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden overflow-x-auto rounded-lg shadow-md", children: /* @__PURE__ */ jsxs(Table, { hoverable: true, children: [
      /* @__PURE__ */ jsxs(Table.Head, { children: [
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "#" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Image" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          "Name",
          /* @__PURE__ */ jsx("button", { onClick: () => order("name"), children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 ml-1.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          "Price",
          /* @__PURE__ */ jsx("button", { onClick: () => order("price"), children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 ml-1.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Edit" }) })
      ] }),
      /* @__PURE__ */ jsx(Table.Body, { className: "divide-y", children: services.map((service, k) => /* @__PURE__ */ jsxs(Table.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
        /* @__PURE__ */ jsx(Table.Cell, { className: "font-medium text-gray-900 whitespace-nowrap dark:text-white", children: k + 1 }),
        /* @__PURE__ */ jsx(Table.Cell, { children: service.image ? /* @__PURE__ */ jsx("img", { src: `https://storage.googleapis.com/barbershop-raplontos/${service.image}`, className: "w-32 rounded-3xl", alt: service.name + " Image" }) : /* @__PURE__ */ jsx("div", { className: "w-32 rounded-3xl", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 500 500", children: /* @__PURE__ */ jsxs("g", { id: "freepik--404--inject-4", children: [
          /* @__PURE__ */ jsx("path", { d: "M147.68,287.64H86.83V260.17l60.85-72.34H176.8v73.9h15.09v25.91H176.8v22.48H147.68Zm0-25.91V223.89l-32.16,37.84Z", style: { fill: "#407BFF" } }),
          /* @__PURE__ */ jsx("path", { d: "M202.3,249.51q0-34.29,12.34-48t37.61-13.7q12.13,0,19.93,3a36.79,36.79,0,0,1,12.71,7.79,41.59,41.59,0,0,1,7.75,10.09,52.38,52.38,0,0,1,4.55,12.34,115.36,115.36,0,0,1,3.36,28q0,32.72-11.07,47.89t-38.13,15.18q-15.18,0-24.53-4.84a39.76,39.76,0,0,1-15.33-14.19q-4.35-6.64-6.77-18.17A124.33,124.33,0,0,1,202.3,249.51Zm33.14.08q0,23,4.05,31.37t11.77,8.41a12.34,12.34,0,0,0,8.82-3.57q3.74-3.57,5.5-11.28t1.76-24q0-23.94-4.06-32.19t-12.18-8.24q-8.28,0-12,8.41T235.44,249.59Z", style: { fill: "#407BFF" } }),
          /* @__PURE__ */ jsx("path", { d: "M371.74,287.64H310.89V260.17l60.85-72.34h29.12v73.9H416v25.91H400.86v22.48H371.74Zm0-25.91V223.89l-32.15,37.84Z", style: { fill: "#407BFF" } })
        ] }) }) }) }),
        /* @__PURE__ */ jsx(Table.Cell, { children: service.name }),
        /* @__PURE__ */ jsx(Table.Cell, { children: service.price }),
        /* @__PURE__ */ jsxs(Table.Cell, { className: "flex justify-center -ml-6 gap-x-2", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
              href: route("services.edit", service.id),
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              className: "font-medium text-pink-600 hover:underline dark:text-pink-500",
              href: route("services.destroy", service.id),
              method: "delete",
              onSuccess: () => successDelete(service.id),
              children: "Delete"
            }
          )
        ] })
      ] }, k)) })
    ] }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(
  Authenticated,
  {
    children: page,
    header: /* @__PURE__ */ jsxs(Breadcrumb, { "aria-label": "breadcrumb", children: [
      /* @__PURE__ */ jsx(
        Breadcrumb.Item,
        {
          href: route("dashboard"),
          icon: BiSolidDashboard,
          children: /* @__PURE__ */ jsx("p", { children: "Dashboard" })
        }
      ),
      /* @__PURE__ */ jsx(Breadcrumb.Item, { href: route("services.index"), children: "Services" }),
      /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "List" })
    ] })
  }
);
export {
  Index as default
};
