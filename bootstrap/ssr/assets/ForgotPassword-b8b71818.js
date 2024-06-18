import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { T as TextInput, I as InputError } from "./TextInput-6176fc5f.js";
import { P as PrimaryButton } from "./PrimaryButton-f6376536.js";
import { useForm, Head } from "@inertiajs/react";
import { A as Authentication } from "./AuthenticationLayout-f85a66c7.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "./app-547f9348.js";
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
ForgotPassword.layout = (page) => /* @__PURE__ */ jsx(Authentication, { children: page });
export {
  ForgotPassword as default
};
