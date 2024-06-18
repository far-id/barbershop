import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-84ff5681.js";
import { useForm, Head } from "@inertiajs/react";
import { Label, TextInput, Textarea, Button, Breadcrumb } from "flowbite-react";
import "react";
import { BiSolidDashboard } from "react-icons/bi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./app-547f9348.js";
import "@headlessui/react";
function Edit({ branch }) {
  const { data, setData, put, processing, errors } = useForm({
    name: branch.name,
    address: branch.address
  });
  const changeHandler = (e) => {
    setData(
      {
        ...data,
        [e.target.name]: e.target.value
      }
    );
  };
  const submit = (e) => {
    e.preventDefault();
    put(route("branches.update", branch.id));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Branches" }),
    /* @__PURE__ */ jsx("div", { className: "p-4 m-1 bg-white rounded-lg md:w-1/2", children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col w-full gap-4", onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "name",
            value: "Name of Branch"
          }
        ) }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            placeholder: "Condet",
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
            htmlFor: "address",
            value: "Address of Branch"
          }
        ) }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            id: "address",
            name: "address",
            placeholder: "Jl. Pengantin Ali No.12, Kec. Ciracas, Kota Jakarta Timur.",
            required: true,
            value: data.address,
            onChange: (e) => changeHandler(e),
            shadow: true,
            rows: 3
          }
        )
      ] }),
      errors.address && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.address }),
      /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, className: "bg-blue-600", children: "Submit" })
    ] }) })
  ] });
}
Edit.layout = (page) => /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(Breadcrumb.Item, { href: route("branches.index"), children: "Branches" }),
      /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Edit" })
    ] })
  }
);
export {
  Edit as default
};
