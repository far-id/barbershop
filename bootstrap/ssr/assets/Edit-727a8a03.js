import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-84ff5681.js";
import { useForm, Head, router } from "@inertiajs/react";
import { Label, TextInput, Button, Breadcrumb } from "flowbite-react";
import "react";
import { BiSolidDashboard } from "react-icons/bi/index.esm.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./app-547f9348.js";
import "@headlessui/react";
function Edit({ service }) {
  const { data, setData, put, processing, progress, errors } = useForm({
    name: service.name,
    price: service.price,
    prime: service.prime === 0 ? false : true,
    image: ""
  });
  const changeHandler = (e) => {
    console.log(e.target.name, "changed");
    setData(
      {
        ...data,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.type === "file" ? e.target.files[0] : e.target.value
      }
    );
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    router.post(
      route("services.update", service.id),
      {
        _method: "put",
        ...data
      }
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Services" }),
    /* @__PURE__ */ jsxs("div", { className: "block md:flex", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 m-1 bg-white rounded-lg h-fit md:w-1/2", children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col w-full gap-4", onSubmit: submit, children: [
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
              onChange: changeHandler,
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
              onChange: changeHandler,
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
                  onChange: changeHandler,
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
                onChange: changeHandler,
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
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-4 m-1 bg-white rounded-lg md:w-1/2", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 font-semibold", children: "Previous Image" }),
        service.image ? /* @__PURE__ */ jsx("img", { src: `https://storage.googleapis.com/barbershop-raplontos/${service.image}`, className: "w-fit rounded-3xl", alt: service.name + " Image" }) : /* @__PURE__ */ jsx("div", { className: "top-0 w-full -my-36 rounded-3xl", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 500 500", children: /* @__PURE__ */ jsxs("g", { id: "freepik--404--inject-4", children: [
          /* @__PURE__ */ jsx("path", { d: "M147.68,287.64H86.83V260.17l60.85-72.34H176.8v73.9h15.09v25.91H176.8v22.48H147.68Zm0-25.91V223.89l-32.16,37.84Z", style: { fill: "#407BFF" } }),
          /* @__PURE__ */ jsx("path", { d: "M202.3,249.51q0-34.29,12.34-48t37.61-13.7q12.13,0,19.93,3a36.79,36.79,0,0,1,12.71,7.79,41.59,41.59,0,0,1,7.75,10.09,52.38,52.38,0,0,1,4.55,12.34,115.36,115.36,0,0,1,3.36,28q0,32.72-11.07,47.89t-38.13,15.18q-15.18,0-24.53-4.84a39.76,39.76,0,0,1-15.33-14.19q-4.35-6.64-6.77-18.17A124.33,124.33,0,0,1,202.3,249.51Zm33.14.08q0,23,4.05,31.37t11.77,8.41a12.34,12.34,0,0,0,8.82-3.57q3.74-3.57,5.5-11.28t1.76-24q0-23.94-4.06-32.19t-12.18-8.24q-8.28,0-12,8.41T235.44,249.59Z", style: { fill: "#407BFF" } }),
          /* @__PURE__ */ jsx("path", { d: "M371.74,287.64H310.89V260.17l60.85-72.34h29.12v73.9H416v25.91H400.86v22.48H371.74Zm0-25.91V223.89l-32.15,37.84Z", style: { fill: "#407BFF" } })
        ] }) }) })
      ] })
    ] })
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
      /* @__PURE__ */ jsx(Breadcrumb.Item, { href: route("services.index"), children: "Services" }),
      /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Edit" })
    ] })
  }
);
export {
  Edit as default
};
