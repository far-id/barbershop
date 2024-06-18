import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-84ff5681.js";
import { Head, router } from "@inertiajs/react";
import { Card, Table, Breadcrumb } from "flowbite-react";
import { useState, useEffect } from "react";
import { BiSolidDashboard } from "react-icons/bi/index.esm.js";
import { BsCheck } from "react-icons/bs/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./app-547f9348.js";
import "@headlessui/react";
function Index({ queues: data, serves }) {
  const [queues, setQueues] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const serveQueue = (e, id) => {
    e.preventDefault();
    router.put(route("queue.status", id), {
      "status": "serving"
    });
    setQueues([...queues].filter((queue) => queue.id !== id));
  };
  const cancelQueue = (e, id) => {
    e.preventDefault();
    router.put(route("queue.status", id), {
      "status": "canceled"
    });
    setQueues([...queues].filter((queue) => queue.id !== id));
  };
  const finishServe = (e, id) => {
    e.preventDefault();
    router.put(route("queue.status", id), {
      "status": "finished"
    });
  };
  useEffect(() => {
    const search = (query) => {
      if (!query)
        return setQueues(data);
      return setQueues(
        [...data].filter(
          (queue) => Object.keys(queue).some(
            (key) => key === "booking_id" || key === "name" ? queue[key].toString().toLowerCase().includes(query.toLowerCase()) : false
          )
        )
      );
    };
    search(searchValue);
  }, [searchValue]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Queue" }),
    /* @__PURE__ */ jsx("div", { className: "justify-between block w-full md:flex gap-x-4 md:overflow-x-auto scrollbar scrollbar-thumb-indigo-400 scrollbar-h-1 scrollbar-track-gray-200 scrollbar-track-rounded-full", children: serves.map((serve, k) => /* @__PURE__ */ jsxs(Card, { className: "mb-3 md:mb-0 min-w-fit", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full gap-x-14", children: [
        /* @__PURE__ */ jsx("span", { children: serve.booking_id }),
        /* @__PURE__ */ jsx("p", { className: "min-w-fit", children: serve.name }),
        /* @__PURE__ */ jsx("button", { onClick: (e) => finishServe(e, serve.id), title: "Finish The Serve", className: "inline-flex items-center justify-center overflow-hidden text-lg font-medium text-gray-900 transition-all duration-75 ease-in border rounded-full hover:border-none group hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-400 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800", children: /* @__PURE__ */ jsx("span", { className: "relative px-4 py-2 transition-all duration-75 ease-in bg-white rounded-full dark:bg-gray-900 group-hover:bg-opacity-0", children: BsCheck() }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("ul", { children: serve.services.map((service, key) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "min-w-fit", children: service.name }),
          /* @__PURE__ */ jsx("div", { className: "w-full border-b-2 border-blue-200" }),
          /* @__PURE__ */ jsxs("span", { children: [
            service.price.slice(0, -3),
            "k"
          ] })
        ] }, key)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-3 border-t-2 border-dashed", children: [
          /* @__PURE__ */ jsx("span", { children: "Total:" }),
          /* @__PURE__ */ jsx("div", { className: "w-full border-b-2 border-gray-200" }),
          serve.total_price.toString().slice(0, -3),
          "k"
        ] })
      ] })
    ] }, k)) }),
    /* @__PURE__ */ jsx("div", { className: "flex w-full p-3 my-6 bg-white rounded-lg shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "items-center w-full", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "default-search", className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white", children: "Search" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" }) }) }),
        /* @__PURE__ */ jsx("input", { onChange: (e) => setSearchValue(e.target.value), type: "search", id: "default-search", className: "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Search by Id or Name", required: true })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden overflow-x-auto rounded-lg shadow-md", children: /* @__PURE__ */ jsxs(Table, { hoverable: true, children: [
      /* @__PURE__ */ jsxs(Table.Head, { children: [
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "#" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Name" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "Arrival" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Edit" }) })
      ] }),
      /* @__PURE__ */ jsx(Table.Body, { className: "divide-y", children: queues.map((queue, k) => /* @__PURE__ */ jsxs(Table.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
        /* @__PURE__ */ jsx(Table.Cell, { className: "font-medium text-gray-900 whitespace-nowrap dark:text-white", children: queue.booking_id }),
        /* @__PURE__ */ jsx(Table.Cell, { children: queue.name }),
        /* @__PURE__ */ jsxs(Table.Cell, { children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2", children: queue.arrival_time }),
          queue.arrival_date
        ] }),
        /* @__PURE__ */ jsxs(Table.Cell, { className: "flex justify-center -ml-6 gap-x-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: (e) => serveQueue(e, queue.id), className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500", children: "Serve" }),
          /* @__PURE__ */ jsx("button", { onClick: (e) => cancelQueue(e, queue.id), className: "font-medium text-pink-600 hover:underline dark:text-pink-500", children: "Cancel" })
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
      /* @__PURE__ */ jsx(Breadcrumb.Item, { href: route("queues.index"), children: "Queues" }),
      /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "List" })
    ] })
  }
);
export {
  Index as default
};
