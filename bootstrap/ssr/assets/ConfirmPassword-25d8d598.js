import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useEffect } from "react";
import { A as Authentication } from "./AuthenticationLayout-f85a66c7.js";
import { T as TextInput, I as InputError } from "./TextInput-6176fc5f.js";
import { I as InputLabel } from "./InputLabel-164e4edc.js";
import { P as PrimaryButton } from "./PrimaryButton-f6376536.js";
import { useForm, Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./app-547f9348.js";
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
ConfirmPassword.layout = (page) => /* @__PURE__ */ jsx(Authentication, { children: page });
export {
  ConfirmPassword as default
};
