import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-84ff5681.js";
import { useForm, Head } from "@inertiajs/react";
import { Label, TextInput, Textarea, Select, Button, Breadcrumb } from "flowbite-react";
import { useEffect } from "react";
import { BiSolidDashboard } from "react-icons/bi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./app-547f9348.js";
import "@headlessui/react";
function Create({ branches }) {
  const { data, setData, post, reset, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    address: ""
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
    post(route("employees.store"));
  };
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Employees" }),
    /* @__PURE__ */ jsx("div", { className: "p-4 m-1 bg-white rounded-lg md:w-1/2", children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col w-full gap-4", onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "name",
            value: "Employee Name"
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
            htmlFor: "email",
            value: "Employee Email"
          }
        ) }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            name: "email",
            placeholder: "@mail.com",
            required: true,
            value: data.email,
            onChange: (e) => changeHandler(e),
            shadow: true,
            type: "email"
          }
        ),
        errors.email && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "address",
            value: "Employee Address"
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
        ),
        errors.address && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.address })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "Branch",
            value: "Branch"
          }
        ) }),
        /* @__PURE__ */ jsx(
          Select,
          {
            id: "branch",
            required: true,
            name: "branch",
            onChange: (e) => changeHandler(e),
            shadow: true,
            children: branches.map((branch, k) => /* @__PURE__ */ jsxs("option", { value: branch.id, children: [
              branch.name,
              " (",
              branch.address,
              ")"
            ] }, k))
          }
        ),
        errors.branch && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.branch })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "password",
            value: "Employee Account Password"
          }
        ) }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            name: "password",
            placeholder: "Password",
            required: true,
            value: data.password,
            onChange: (e) => changeHandler(e),
            shadow: true,
            type: "password"
          }
        ),
        errors.password && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.password })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "block mb-2", children: /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "password_confirmation",
            value: "Confirm Password"
          }
        ) }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            name: "password_confirmation",
            placeholder: "Confirm Password",
            required: true,
            value: data.password_confirmation,
            onChange: (e) => changeHandler(e),
            shadow: true,
            type: "password"
          }
        ),
        errors.password_confirmation && /* @__PURE__ */ jsx("p", { className: "text-xs italic text-red-500", children: errors.password_confirmation })
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
      /* @__PURE__ */ jsx(Breadcrumb.Item, { href: route("employees.index"), children: "employees" }),
      /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Create" })
    ] })
  }
);
export {
  Create as default
};
