import { a as jsx, j as jsxs } from "../ssr.js";
import { usePage, useForm, router } from "@inertiajs/react";
import "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function Booking({ branches, services }) {
  const { errors } = usePage().props;
  let currentDate = new Date(Date.now());
  const { data, setData, processing } = useForm({
    name: "",
    email: "",
    services: [],
    arrival_time: `${(/* @__PURE__ */ new Date()).getHours().toString().padStart(2, "0")}:${(/* @__PURE__ */ new Date()).getMinutes().toString().padStart(2, "0")}`,
    arrival_date: currentDate.toISOString().substring(0, 10),
    branch: branches[0].id,
    comment: ""
  });
  const changeMultiSelectHandler = (newValue) => {
    setData("services", newValue);
  };
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    router.post(route("booking"), {
      ...data,
      services: data.services.map((service) => service.value)
    });
  };
  const options = services.map((service) => ({ value: service.id, label: service.name }));
  return /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "mx-auto col-lg-10 col-12", children: /* @__PURE__ */ jsxs("form", { className: "custom-form booking-form", onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-1", children: "Book a seat" }),
      /* @__PURE__ */ jsx("p", { children: "Please fill out the form and we get back to you" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "booking-form-body", children: [
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-lg-6 col-12", children: [
          errors.name && /* @__PURE__ */ jsx("span", { children: errors.name }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "name",
              name: "name",
              required: true,
              value: data.name,
              onChange: (e) => changeHandler(e),
              type: "text",
              className: "form-control",
              placeholder: "Full name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-lg-6 col-12", children: [
          errors.services && /* @__PURE__ */ jsx("span", { children: errors.services }),
          /* @__PURE__ */ jsx(
            Select,
            {
              id: "services",
              name: "services",
              value: data.services,
              onChange: changeMultiSelectHandler,
              placeholder: "Services You Want",
              closeMenuOnSelect: false,
              components: makeAnimated(),
              isMulti: true,
              options,
              className: "basic-multi-select",
              classNamePrefix: "select"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-lg-6 col-12", children: [
          errors.email && /* @__PURE__ */ jsx("span", { children: errors.email }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              name: "email",
              placeholder: "email",
              required: true,
              value: data.email,
              onChange: (e) => changeHandler(e),
              type: "email",
              className: "form-control"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-lg-6 col-12", children: [
          errors.arrival_time && /* @__PURE__ */ jsx("span", { children: errors.arrival_time }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "arrival_time",
              name: "arrival_time",
              required: true,
              value: data.arrival_time,
              onChange: (e) => changeHandler(e),
              className: "form-control",
              type: "time"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-lg-6 col-12", children: [
          errors.branch && /* @__PURE__ */ jsx("span", { children: errors.branch }),
          /* @__PURE__ */ jsx(
            "select",
            {
              className: "form-select form-control",
              id: "branch",
              required: true,
              name: "branch",
              onChange: (e) => setData("branch", e.target.value),
              children: branches.map((branch, k) => /* @__PURE__ */ jsx("option", { value: branch.id, children: branch.name }, k))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-lg-6 col-12", children: [
          errors.arrival_date && /* @__PURE__ */ jsx("span", { children: errors.arrival_date }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "arrival_date",
              name: "arrival_date",
              required: true,
              value: data.arrival_date,
              onChange: (e) => changeHandler(e),
              type: "date",
              className: "form-control",
              placeholder: "Date"
            }
          )
        ] })
      ] }),
      errors.comment && /* @__PURE__ */ jsx("span", { children: errors.comment }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "comment",
          name: "comment",
          value: data.comment,
          onChange: (e) => changeHandler(e),
          rows: 3,
          className: "form-control",
          placeholder: "Comment (Optionals)"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-auto col-lg-4 col-md-10 col-8", children: /* @__PURE__ */ jsx("button", { type: "submit", disabled: processing, className: "form-control", children: "Submit" }) })
    ] })
  ] }) }) }) });
}
export {
  Booking as default
};
