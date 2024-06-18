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
function Index({ employees: data }) {
  const [employees, setEmployees] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const order = (by) => {
    let ordered = [...employees].sort((a, b) => a[by].localeCompare(b[by]));
    setEmployees(ordered);
  };
  const successDelete = (id) => setEmployees([...employees].filter((employee) => employee.id !== id));
  useEffect(() => {
    const search = (query) => {
      if (!query)
        return setEmployees(data);
      return setEmployees(
        [...data].filter(
          (employee) => Object.keys(employee).some(
            (key) => key === "name" || key === "email" || key === "address" || "branch" ? employee[key].toString().toLowerCase().includes(query.toLowerCase()) : false
          )
        )
      );
    };
    search(searchValue);
  }, [searchValue]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Employees" }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full p-3 mb-6 bg-white rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "items-center w-full", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "default-search", className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white", children: "Search" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" }) }) }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => setSearchValue(e.target.value), type: "search", id: "default-search", className: "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Search by Branch, Name, Email or Address", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("employees.create"),
          title: "Add New employee",
          className: "inline p-2 mx-2 font-medium text-white bg-blue-700 rounded-full text-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: /* @__PURE__ */ jsx(HiPlus, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto shadow-md rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxs(Table, { hoverable: true, children: [
      /* @__PURE__ */ jsxs(Table.Head, { children: [
        /* @__PURE__ */ jsx(Table.HeadCell, { children: "#" }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          "Branch",
          /* @__PURE__ */ jsx("button", { onClick: () => order("branch"), children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 ml-1.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          "Name",
          /* @__PURE__ */ jsx("button", { onClick: () => order("name"), children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 ml-1.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          "Email",
          /* @__PURE__ */ jsx("button", { onClick: () => order("email"), children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 ml-1.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          "Address",
          /* @__PURE__ */ jsx("button", { onClick: () => order("address"), children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 ml-1.5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx(Table.HeadCell, { children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Edit" }) })
      ] }),
      /* @__PURE__ */ jsx(Table.Body, { className: "divide-y", children: employees.map((employee, k) => /* @__PURE__ */ jsxs(Table.Row, { className: "bg-white dark:border-gray-700 dark:bg-gray-800", children: [
        /* @__PURE__ */ jsx(Table.Cell, { className: "font-medium text-gray-900 whitespace-nowrap dark:text-white", children: k + 1 }),
        /* @__PURE__ */ jsx(Table.Cell, { children: employee.branch_name }),
        /* @__PURE__ */ jsx(Table.Cell, { children: employee.name }),
        /* @__PURE__ */ jsx(Table.Cell, { children: employee.email }),
        /* @__PURE__ */ jsx(Table.Cell, { children: employee.address }),
        /* @__PURE__ */ jsxs(Table.Cell, { className: "flex justify-center gap-x-2 -ml-6", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              className: "font-medium text-cyan-600 hover:underline dark:text-cyan-500",
              href: route("employees.edit", employee.id),
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              className: "font-medium text-pink-600 hover:underline dark:text-pink-500",
              href: route("employees.destroy", employee.id),
              as: "button",
              method: "delete",
              onSuccess: () => successDelete(employee.id),
              children: "Delete Account"
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
      /* @__PURE__ */ jsx(Breadcrumb.Item, { href: route("employees.index"), children: "Employees" }),
      /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "List" })
    ] })
  }
);
export {
  Index as default
};
