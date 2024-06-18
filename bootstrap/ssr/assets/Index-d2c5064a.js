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
function Index({ bookkeeping }) {
  const [bookkeepings, setQueues] = useState(bookkeeping.data);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const search = (query) => {
      if (!query)
        return setQueues(bookkeeping.data);
      return setQueues(
        [...bookkeeping.data].filter(
          (queue) => Object.keys(queue).some(
            (key) => key === "booking_id" || key === "name" || key === "created_at" ? queue[key].toString().toLowerCase().includes(query.toLowerCase()) : false
          )
        )
      );
    };
    search(searchValue);
  }, [searchValue]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Bookkeeping" }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full p-3 my-6 bg-white rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "items-center w-full", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "default-search", className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white", children: "Search" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" }) }) }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => setSearchValue(e.target.value), type: "search", id: "default-search", className: "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Search by Id or Name or Finished At", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("bookkeeping.export"),
          title: "Export to Excel",
          className: "inline p-2 mx-2 font-medium text-white bg-blue-700 rounded-full text-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: /* @__PURE__ */ jsx(HiPlus, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden overflow-x-auto rounded-lg shadow-md", children: /* @__PURE__ */ jsxs(Table, { hoverable: true, children: [
      /* @__PURE__ */ jsxs(Table.Head, { children: [
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Finished At" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Booking ID" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Name" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Email" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Arrival" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Branch" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Services" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Total Price" })
      ] }),
      /* @__PURE__ */ jsx(Table.Body, { className: "divide-y", children: bookkeepings.map((data, k) => /* @__PURE__ */ jsxs(Table.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
        /* @__PURE__ */ jsx(Table.Cell, { className: "font-medium text-gray-900 whitespace-nowrap dark:text-white", children: data.created_at }),
        /* @__PURE__ */ jsx(Table.Cell, { className: "font-medium text-gray-900 whitespace-nowrap dark:text-white", children: data.booking_id }),
        /* @__PURE__ */ jsx(Table.Cell, { children: data.name }),
        /* @__PURE__ */ jsx(Table.Cell, { children: data.email }),
        /* @__PURE__ */ jsxs(Table.Cell, { children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2", children: data.arrival_time }),
          data.arrival_date
        ] }),
        /* @__PURE__ */ jsx(Table.Cell, { children: data.branch_name }),
        /* @__PURE__ */ jsx(Table.Cell, { children: data.services }),
        /* @__PURE__ */ jsx(Table.Cell, { children: data.total_price })
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
      /* @__PURE__ */ jsx(Breadcrumb.Item, { href: route("bookkeeping.index"), children: "Bookkeeping" }),
      /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "List" })
    ] })
  }
);
export {
  Index as default
};
