import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-84ff5681.js";
import { useForm, Head } from "@inertiajs/react";
import { Label, TextInput, Button, Breadcrumb } from "flowbite-react";
import "react";
import { BiSolidDashboard } from "react-icons/bi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./app-547f9348.js";
import "@headlessui/react";
function Create() {
  const { data, setData, post, processing, progress, errors } = useForm({
    name: "",
    price: "",
    prime: false,
    image: null
  });
  const changeHandler = (e) => {
    setData(
      {
        ...data,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.type === "file" ? e.target.files[0] : e.target.value
      }
    );
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("services.store"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Services" }),
    /* @__PURE__ */ jsx("div", { className: "p-4 m-1 bg-white rounded-lg md:w-1/2", children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col w-full gap-4", onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "name",
            value: "Name of Service"
          }
        ) }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            placeholder: "Hair Cut",
            required: true,
            value: data.name,
            onChange: (e) => changeHandler(e),
            shadow: true,
            type: "text"
          }
        ),
        errors.name && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "price",
            value: "Price of the service"
          }
        ) }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "price",
            name: "price",
            placeholder: "20000",
            required: true,
            value: data.price,
            onChange: (e) => changeHandler(e),
            shadow: true,
            type: "number"
          }
        )
      ] }),
      errors.price && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.price }),
      /* @__PURE__ */ jsxs("div", { className: "justify-between md:flex", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-2/5", children: [
          /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
            Label,
            {
              className: "mr-4",
              htmlFor: "prime",
              value: "Prime of the service?"
            }
          ) }),
          /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-3 text-sm font-medium text-gray-900 dark:text-gray-300", children: "No" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                checked: data.prime,
                onChange: (e) => changeHandler(e),
                type: "checkbox",
                id: "prime",
                name: "prime",
                className: "sr-only peer"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[33px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300", children: "Yes" })
          ] }),
          errors.prime && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.prime })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-3/5", children: [
          /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
            Label,
            {
              htmlFor: "image",
              value: "Image of the Service"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              onChange: (e) => changeHandler(e),
              type: "file",
              name: "image",
              id: "image",
              className: "block w-full text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-blue-300 focus:ring file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 "
            }
          ),
          errors.image && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.image })
        ] })
      ] }),
      progress && /* @__PURE__ */ jsxs("progress", { value: progress.percentage, max: "100", children: [
        progress.percentage,
        "%"
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, className: "bg-blue-600", children: "Submit" })
    ] }) })
  ] });
}
Create.layout = (page) => /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Create" })
    ] })
  }
);
export {
  Create as default
};
