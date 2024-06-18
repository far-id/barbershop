import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { createContext, useState, useContext, Fragment as Fragment$1 } from "react";
import { A as ApplicationLogo } from "./app-547f9348.js";
import { Link, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Flowbite } from "flowbite-react";
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
const Dropdown$1 = Dropdown;
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 text-gray-900 focus:border-indigo-700 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    }
  );
}
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function Authenticated({ header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const { user } = usePage().props.auth;
  return /* @__PURE__ */ jsx(Flowbite, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center shrink-0", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block w-auto text-gray-800 fill-current h-9" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex", children: [
            /* @__PURE__ */ jsx(NavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }),
            user.role_id == 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(NavLink, { href: route("services.index"), active: route().current("services.*"), children: "Services" }),
              /* @__PURE__ */ jsx(NavLink, { href: route("branches.index"), active: route().current("branches.*"), children: "Branches" }),
              /* @__PURE__ */ jsx(NavLink, { href: route("employees.index"), active: route().current("employees.*"), children: "Employees" }),
              /* @__PURE__ */ jsx(NavLink, { href: route("bookkeeping.index"), active: route().current("bookkeeping.*"), children: "Bookkeeping" })
            ] }),
            /* @__PURE__ */ jsx(NavLink, { href: route("queues.index"), active: route().current("queues.*"), children: "Queues" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-6", children: /* @__PURE__ */ jsx("div", { className: "relative ml-3", children: /* @__PURE__ */ jsxs(Dropdown$1, { children: [
          /* @__PURE__ */ jsx(Dropdown$1.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none",
              children: [
                user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown$1.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown$1.Link, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(Dropdown$1.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center -mr-2 sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
            className: "inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500",
            children: /* @__PURE__ */ jsxs("svg", { className: "w-6 h-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "pt-2 pb-3 space-y-1", children: [
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }),
          user.role_id == 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("services.index"), active: route().current("services.*"), children: "Services" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("branches.index"), active: route().current("branches.*"), children: "Branches" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("employees.index"), active: route().current("employees.*"), children: "Employees" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("bookkeeping.index"), active: route().current("bookkeeping.*"), children: "Bookkeeping" })
          ] }),
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("queues.index"), active: route().current("queues.*"), children: "Queues" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-800", children: user.name }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-500", children: user.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Log Out" })
          ] })
        ] })
      ] })
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children }) }) })
  ] }) });
}
export {
  Authenticated as A
};
