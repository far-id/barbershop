import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { useEffect } from "react";
import { useForm, Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
const login = "";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { className: "form-box", children: /* @__PURE__ */ jsx("div", { className: "form-value", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsx("h2", { children: "Login" }),
    errors.email && /* @__PURE__ */ jsx("p", { className: "font-danger", children: errors.email }),
    /* @__PURE__ */ jsxs("div", { className: "inputbox", children: [
      /* @__PURE__ */ jsx("ion-icon", { name: "mail-outline" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "block w-full mt-1",
          autoComplete: "username",
          onChange: (e) => setData("email", e.target.value),
          autoFocus: true,
          required: true
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "inputbox", children: [
      /* @__PURE__ */ jsx("ion-icon", { name: "lock-closed-outline" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "password",
          type: "password",
          name: "password",
          value: data.password,
          className: "block w-full mt-1",
          autoComplete: "current-password",
          onChange: (e) => setData("password", e.target.value),
          required: true
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Password" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "forget", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "remember",
          name: "remember",
          type: "checkbox",
          checked: data.remember,
          onChange: (e) => setData("remember", e.target.checked)
        }
      ),
      /* @__PURE__ */ jsxs("label", { htmlFor: "remember", children: [
        "Remember Me  ",
        canResetPassword && /* @__PURE__ */ jsx(Link, { href: route("password.request"), children: "Forgot your password?" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { disabled: processing, children: "Log in" })
  ] }) }) }) }) });
}
export {
  Login as default
};
