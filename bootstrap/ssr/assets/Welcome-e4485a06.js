import { a as jsx, j as jsxs } from "../ssr.js";
import Nav from "./Nav-b86f111d.js";
import Services from "./Services-4b3dd585.js";
import Booking from "./Booking-e63eaf70.js";
import PriceList from "./PriceList-4080c4ee.js";
import Branches from "./Branches-27ae2c4f.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "react-scroll";
import "react-select";
import "react-select/animated";
/*!
  * Bootstrap v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(globalThis, function(t) {
  function e(t2) {
    if (t2 && t2.__esModule)
      return t2;
    const e2 = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (t2) {
      for (const i2 in t2)
        if ("default" !== i2) {
          const s2 = Object.getOwnPropertyDescriptor(t2, i2);
          Object.defineProperty(e2, i2, s2.get ? s2 : { enumerable: true, get: () => t2[i2] });
        }
    }
    return e2.default = t2, Object.freeze(e2);
  }
  const i = e(t), s = "transitionend", n = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let i2 = t2.getAttribute("href");
      if (!i2 || !i2.includes("#") && !i2.startsWith("."))
        return null;
      i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
    }
    return e2;
  }, o = (t2) => {
    const e2 = n(t2);
    return e2 && document.querySelector(e2) ? e2 : null;
  }, r = (t2) => {
    const e2 = n(t2);
    return e2 ? document.querySelector(e2) : null;
  }, a = (t2) => {
    t2.dispatchEvent(new Event(s));
  }, l = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), c = (t2) => l(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(t2) : null, h = (t2) => {
    if (!l(t2) || 0 === t2.getClientRects().length)
      return false;
    const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
    if (!i2)
      return e2;
    if (i2 !== t2) {
      const e3 = t2.closest("summary");
      if (e3 && e3.parentNode !== i2)
        return false;
      if (null === e3)
        return false;
    }
    return e2;
  }, d = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), u = (t2) => {
    if (!document.documentElement.attachShadow)
      return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? u(t2.parentNode) : null;
  }, _ = () => {
  }, g = (t2) => {
    t2.offsetHeight;
  }, f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, p = [], m = () => "rtl" === document.documentElement.dir, b = (t2) => {
    var e2;
    e2 = () => {
      const e3 = f();
      if (e3) {
        const i2 = t2.NAME, s2 = e3.fn[i2];
        e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = s2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", () => {
      for (const t3 of p)
        t3();
    }), p.push(e2)) : e2();
  }, v = (t2) => {
    "function" == typeof t2 && t2();
  }, y = (t2, e2, i2 = true) => {
    if (!i2)
      return void v(t2);
    const n2 = ((t3) => {
      if (!t3)
        return 0;
      let { transitionDuration: e3, transitionDelay: i3 } = window.getComputedStyle(t3);
      const s2 = Number.parseFloat(e3), n3 = Number.parseFloat(i3);
      return s2 || n3 ? (e3 = e3.split(",")[0], i3 = i3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i3))) : 0;
    })(e2) + 5;
    let o2 = false;
    const r2 = ({ target: i3 }) => {
      i3 === e2 && (o2 = true, e2.removeEventListener(s, r2), v(t2));
    };
    e2.addEventListener(s, r2), setTimeout(() => {
      o2 || a(e2);
    }, n2);
  }, w = (t2, e2, i2, s2) => {
    const n2 = t2.length;
    let o2 = t2.indexOf(e2);
    return -1 === o2 ? !i2 && s2 ? t2[n2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, s2 && (o2 = (o2 + n2) % n2), t2[Math.max(0, Math.min(o2, n2 - 1))]);
  }, A = /[^.]*(?=\..*)\.|.*/, E = /\..*/, C = /::\d+$/, T = {};
  let k = 1;
  const L = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function I(t2, e2) {
    return e2 && `${e2}::${k++}` || t2.uidEvent || k++;
  }
  function S(t2) {
    const e2 = I(t2);
    return t2.uidEvent = e2, T[e2] = T[e2] || {}, T[e2];
  }
  function D(t2, e2, i2 = null) {
    return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
  }
  function N(t2, e2, i2) {
    const s2 = "string" == typeof e2, n2 = s2 ? i2 : e2 || i2;
    let o2 = j(t2);
    return O.has(o2) || (o2 = t2), [s2, n2, o2];
  }
  function P(t2, e2, i2, s2, n2) {
    if ("string" != typeof e2 || !t2)
      return;
    let [o2, r2, a2] = N(e2, i2, s2);
    if (e2 in L) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
          return t4.call(this, e3);
      };
      r2 = t3(r2);
    }
    const l2 = S(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = D(c2, r2, o2 ? i2 : null);
    if (h2)
      return void (h2.oneOff = h2.oneOff && n2);
    const d2 = I(r2, e2.replace(A, "")), u2 = o2 ? function(t3, e3, i3) {
      return function s3(n3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = n3; r3 && r3 !== this; r3 = r3.parentNode)
          for (const a3 of o3)
            if (a3 === r3)
              return F(n3, { delegateTarget: r3 }), s3.oneOff && $.off(t3, n3.type, e3, i3), i3.apply(r3, [n3]);
      };
    }(t2, i2, r2) : function(t3, e3) {
      return function i3(s3) {
        return F(s3, { delegateTarget: t3 }), i3.oneOff && $.off(t3, s3.type, e3), e3.apply(t3, [s3]);
      };
    }(t2, r2);
    u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = n2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function x(t2, e2, i2, s2, n2) {
    const o2 = D(e2[i2], s2, n2);
    o2 && (t2.removeEventListener(i2, o2, Boolean(n2)), delete e2[i2][o2.uidEvent]);
  }
  function M(t2, e2, i2, s2) {
    const n2 = e2[i2] || {};
    for (const o2 of Object.keys(n2))
      if (o2.includes(s2)) {
        const s3 = n2[o2];
        x(t2, e2, i2, s3.callable, s3.delegationSelector);
      }
  }
  function j(t2) {
    return t2 = t2.replace(E, ""), L[t2] || t2;
  }
  const $ = { on(t2, e2, i2, s2) {
    P(t2, e2, i2, s2, false);
  }, one(t2, e2, i2, s2) {
    P(t2, e2, i2, s2, true);
  }, off(t2, e2, i2, s2) {
    if ("string" != typeof e2 || !t2)
      return;
    const [n2, o2, r2] = N(e2, i2, s2), a2 = r2 !== e2, l2 = S(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
    if (void 0 === o2) {
      if (h2)
        for (const i3 of Object.keys(l2))
          M(t2, l2, i3, e2.slice(1));
      for (const i3 of Object.keys(c2)) {
        const s3 = i3.replace(C, "");
        if (!a2 || e2.includes(s3)) {
          const e3 = c2[i3];
          x(t2, l2, r2, e3.callable, e3.delegationSelector);
        }
      }
    } else {
      if (!Object.keys(c2).length)
        return;
      x(t2, l2, r2, o2, n2 ? i2 : null);
    }
  }, trigger(t2, e2, i2) {
    if ("string" != typeof e2 || !t2)
      return null;
    const s2 = f();
    let n2 = null, o2 = true, r2 = true, a2 = false;
    e2 !== j(e2) && s2 && (n2 = s2.Event(e2, i2), s2(t2).trigger(n2), o2 = !n2.isPropagationStopped(), r2 = !n2.isImmediatePropagationStopped(), a2 = n2.isDefaultPrevented());
    let l2 = new Event(e2, { bubbles: o2, cancelable: true });
    return l2 = F(l2, i2), a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && n2 && n2.preventDefault(), l2;
  } };
  function F(t2, e2) {
    for (const [i2, s2] of Object.entries(e2 || {}))
      try {
        t2[i2] = s2;
      } catch (e3) {
        Object.defineProperty(t2, i2, { configurable: true, get: () => s2 });
      }
    return t2;
  }
  const z = /* @__PURE__ */ new Map(), H = { set(t2, e2, i2) {
    z.has(t2) || z.set(t2, /* @__PURE__ */ new Map());
    const s2 = z.get(t2);
    s2.has(e2) || 0 === s2.size ? s2.set(e2, i2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s2.keys())[0]}.`);
  }, get: (t2, e2) => z.has(t2) && z.get(t2).get(e2) || null, remove(t2, e2) {
    if (!z.has(t2))
      return;
    const i2 = z.get(t2);
    i2.delete(e2), 0 === i2.size && z.delete(t2);
  } };
  function q(t2) {
    if ("true" === t2)
      return true;
    if ("false" === t2)
      return false;
    if (t2 === Number(t2).toString())
      return Number(t2);
    if ("" === t2 || "null" === t2)
      return null;
    if ("string" != typeof t2)
      return t2;
    try {
      return JSON.parse(decodeURIComponent(t2));
    } catch (e2) {
      return t2;
    }
  }
  function B(t2) {
    return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
  }
  const W = { setDataAttribute(t2, e2, i2) {
    t2.setAttribute(`data-bs-${B(e2)}`, i2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute(`data-bs-${B(e2)}`);
  }, getDataAttributes(t2) {
    if (!t2)
      return {};
    const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
    for (const s2 of i2) {
      let i3 = s2.replace(/^bs/, "");
      i3 = i3.charAt(0).toLowerCase() + i3.slice(1, i3.length), e2[i3] = q(t2.dataset[s2]);
    }
    return e2;
  }, getDataAttribute: (t2, e2) => q(t2.getAttribute(`data-bs-${B(e2)}`)) };
  class R {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2;
    }
    _mergeConfigObj(t2, e2) {
      const i2 = l(e2) ? W.getDataAttribute(e2, "config") : {};
      return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...l(e2) ? W.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
    }
    _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
      for (const s2 of Object.keys(e2)) {
        const n2 = e2[s2], o2 = t2[s2], r2 = l(o2) ? "element" : null == (i2 = o2) ? `${i2}` : Object.prototype.toString.call(i2).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(n2).test(r2))
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s2}" provided type "${r2}" but expected type "${n2}".`);
      }
      var i2;
    }
  }
  class V extends R {
    constructor(t2, e2) {
      super(), (t2 = c(t2)) && (this._element = t2, this._config = this._getConfig(e2), H.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY);
      for (const t2 of Object.getOwnPropertyNames(this))
        this[t2] = null;
    }
    _queueCallback(t2, e2, i2 = true) {
      y(t2, e2, i2);
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    static getInstance(t2) {
      return H.get(c(t2), this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.2.2";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t2) {
      return `${t2}${this.EVENT_KEY}`;
    }
  }
  const K = (t2, e2 = "hide") => {
    const i2 = `click.dismiss${t2.EVENT_KEY}`, s2 = t2.NAME;
    $.on(document, i2, `[data-bs-dismiss="${s2}"]`, function(i3) {
      if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), d(this))
        return;
      const n2 = r(this) || this.closest(`.${s2}`);
      t2.getOrCreateInstance(n2)[e2]();
    });
  };
  class Q extends V {
    static get NAME() {
      return "alert";
    }
    close() {
      if ($.trigger(this._element, "close.bs.alert").defaultPrevented)
        return;
      this._element.classList.remove("show");
      const t2 = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t2);
    }
    _destroyElement() {
      this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Q.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
            throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  K(Q, "close"), b(Q);
  const X = '[data-bs-toggle="button"]';
  class Y extends V {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Y.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      });
    }
  }
  $.on(document, "click.bs.button.data-api", X, (t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest(X);
    Y.getOrCreateInstance(e2).toggle();
  }), b(Y);
  const U = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
    const i2 = [];
    let s2 = t2.parentNode.closest(e2);
    for (; s2; )
      i2.push(s2), s2 = s2.parentNode.closest(e2);
    return i2;
  }, prev(t2, e2) {
    let i2 = t2.previousElementSibling;
    for (; i2; ) {
      if (i2.matches(e2))
        return [i2];
      i2 = i2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let i2 = t2.nextElementSibling;
    for (; i2; ) {
      if (i2.matches(e2))
        return [i2];
      i2 = i2.nextElementSibling;
    }
    return [];
  }, focusableChildren(t2) {
    const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
    return this.find(e2, t2).filter((t3) => !d(t3) && h(t3));
  } }, G = { endCallback: null, leftCallback: null, rightCallback: null }, J = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
  class Z extends R {
    constructor(t2, e2) {
      super(), this._element = t2, t2 && Z.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
    }
    static get Default() {
      return G;
    }
    static get DefaultType() {
      return J;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      $.off(this._element, ".bs.swipe");
    }
    _start(t2) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
    }
    _end(t2) {
      this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback);
    }
    _move(t2) {
      this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t2 = Math.abs(this._deltaX);
      if (t2 <= 40)
        return;
      const e2 = t2 / this._deltaX;
      this._deltaX = 0, e2 && v(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? ($.on(this._element, "pointerdown.bs.swipe", (t2) => this._start(t2)), $.on(this._element, "pointerup.bs.swipe", (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.swipe", (t2) => this._start(t2)), $.on(this._element, "touchmove.bs.swipe", (t2) => this._move(t2)), $.on(this._element, "touchend.bs.swipe", (t2) => this._end(t2)));
    }
    _eventIsPointerPenTouch(t2) {
      return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const tt = "next", et = "prev", it = "left", st = "right", nt = "slid.bs.carousel", ot = "carousel", rt = "active", at = { ArrowLeft: st, ArrowRight: it }, lt = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, ct = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
  class ht extends V {
    constructor(t2, e2) {
      super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === ot && this.cycle();
    }
    static get Default() {
      return lt;
    }
    static get DefaultType() {
      return ct;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(tt);
    }
    nextWhenVisible() {
      !document.hidden && h(this._element) && this.next();
    }
    prev() {
      this._slide(et);
    }
    pause() {
      this._isSliding && a(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? $.one(this._element, nt, () => this.cycle()) : this.cycle());
    }
    to(t2) {
      const e2 = this._getItems();
      if (t2 > e2.length - 1 || t2 < 0)
        return;
      if (this._isSliding)
        return void $.one(this._element, nt, () => this.to(t2));
      const i2 = this._getItemIndex(this._getActive());
      if (i2 === t2)
        return;
      const s2 = t2 > i2 ? tt : et;
      this._slide(s2, e2[t2]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.defaultInterval = t2.interval, t2;
    }
    _addEventListeners() {
      this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (t2) => this._keydown(t2)), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", () => this.pause()), $.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && Z.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t3 of U.find(".carousel-item img", this._element))
        $.on(t3, "dragstart.bs.carousel", (t4) => t4.preventDefault());
      const t2 = { leftCallback: () => this._slide(this._directionToOrder(it)), rightCallback: () => this._slide(this._directionToOrder(st)), endCallback: () => {
        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
      } };
      this._swipeHelper = new Z(this._element, t2);
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName))
        return;
      const e2 = at[t2.key];
      e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
    }
    _getItemIndex(t2) {
      return this._getItems().indexOf(t2);
    }
    _setActiveIndicatorElement(t2) {
      if (!this._indicatorsElement)
        return;
      const e2 = U.findOne(".active", this._indicatorsElement);
      e2.classList.remove(rt), e2.removeAttribute("aria-current");
      const i2 = U.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
      i2 && (i2.classList.add(rt), i2.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t2 = this._activeElement || this._getActive();
      if (!t2)
        return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      this._config.interval = e2 || this._config.defaultInterval;
    }
    _slide(t2, e2 = null) {
      if (this._isSliding)
        return;
      const i2 = this._getActive(), s2 = t2 === tt, n2 = e2 || w(this._getItems(), i2, s2, this._config.wrap);
      if (n2 === i2)
        return;
      const o2 = this._getItemIndex(n2), r2 = (e3) => $.trigger(this._element, e3, { relatedTarget: n2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
      if (r2("slide.bs.carousel").defaultPrevented)
        return;
      if (!i2 || !n2)
        return;
      const a2 = Boolean(this._interval);
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = n2;
      const l2 = s2 ? "carousel-item-start" : "carousel-item-end", c2 = s2 ? "carousel-item-next" : "carousel-item-prev";
      n2.classList.add(c2), g(n2), i2.classList.add(l2), n2.classList.add(l2), this._queueCallback(() => {
        n2.classList.remove(l2, c2), n2.classList.add(rt), i2.classList.remove(rt, c2, l2), this._isSliding = false, r2(nt);
      }, i2, this._isAnimated()), a2 && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return U.findOne(".active.carousel-item", this._element);
    }
    _getItems() {
      return U.find(".carousel-item", this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(t2) {
      return m() ? t2 === it ? et : tt : t2 === it ? tt : et;
    }
    _orderToDirection(t2) {
      return m() ? t2 === et ? it : st : t2 === et ? st : it;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = ht.getOrCreateInstance(this, t2);
        if ("number" != typeof t2) {
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
              throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        } else
          e2.to(t2);
      });
    }
  }
  $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(t2) {
    const e2 = r(this);
    if (!e2 || !e2.classList.contains(ot))
      return;
    t2.preventDefault();
    const i2 = ht.getOrCreateInstance(e2), s2 = this.getAttribute("data-bs-slide-to");
    return s2 ? (i2.to(s2), void i2._maybeEnableCycle()) : "next" === W.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
  }), $.on(window, "load.bs.carousel.data-api", () => {
    const t2 = U.find('[data-bs-ride="carousel"]');
    for (const e2 of t2)
      ht.getOrCreateInstance(e2);
  }), b(ht);
  const dt = "show", ut = "collapse", _t = "collapsing", gt = '[data-bs-toggle="collapse"]', ft = { parent: null, toggle: true }, pt = { parent: "(null|element)", toggle: "boolean" };
  class mt extends V {
    constructor(t2, e2) {
      super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
      const i2 = U.find(gt);
      for (const t3 of i2) {
        const e3 = o(t3), i3 = U.find(e3).filter((t4) => t4 === this._element);
        null !== e3 && i3.length && this._triggerArray.push(t3);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return ft;
    }
    static get DefaultType() {
      return pt;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown())
        return;
      let t2 = [];
      if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => mt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning)
        return;
      if ($.trigger(this._element, "show.bs.collapse").defaultPrevented)
        return;
      for (const e3 of t2)
        e3.hide();
      const e2 = this._getDimension();
      this._element.classList.remove(ut), this._element.classList.add(_t), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(_t), this._element.classList.add(ut, dt), this._element.style[e2] = "", $.trigger(this._element, "shown.bs.collapse");
      }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown())
        return;
      if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented)
        return;
      const t2 = this._getDimension();
      this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, g(this._element), this._element.classList.add(_t), this._element.classList.remove(ut, dt);
      for (const t3 of this._triggerArray) {
        const e2 = r(t3);
        e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
      }
      this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(_t), this._element.classList.add(ut), $.trigger(this._element, "hidden.bs.collapse");
      }, this._element, true);
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(dt);
    }
    _configAfterMerge(t2) {
      return t2.toggle = Boolean(t2.toggle), t2.parent = c(t2.parent), t2;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent)
        return;
      const t2 = this._getFirstLevelChildren(gt);
      for (const e2 of t2) {
        const t3 = r(e2);
        t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
      }
    }
    _getFirstLevelChildren(t2) {
      const e2 = U.find(":scope .collapse .collapse", this._config.parent);
      return U.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
    }
    _addAriaAndCollapsedClass(t2, e2) {
      if (t2.length)
        for (const i2 of t2)
          i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
    }
    static jQueryInterface(t2) {
      const e2 = {};
      return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
        const i2 = mt.getOrCreateInstance(this, e2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2])
            throw new TypeError(`No method named "${t2}"`);
          i2[t2]();
        }
      });
    }
  }
  $.on(document, "click.bs.collapse.data-api", gt, function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    const e2 = o(this), i2 = U.find(e2);
    for (const t3 of i2)
      mt.getOrCreateInstance(t3, { toggle: false }).toggle();
  }), b(mt);
  const bt = "dropdown", vt = "ArrowUp", yt = "ArrowDown", wt = "click.bs.dropdown.data-api", At = "keydown.bs.dropdown.data-api", Et = "show", Ct = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Tt = `${Ct}.show`, kt = ".dropdown-menu", Lt = m() ? "top-end" : "top-start", Ot = m() ? "top-start" : "top-end", It = m() ? "bottom-end" : "bottom-start", St = m() ? "bottom-start" : "bottom-end", Dt = m() ? "left-start" : "right-start", Nt = m() ? "right-start" : "left-start", Pt = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, xt = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
  class Mt extends V {
    constructor(t2, e2) {
      super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = U.next(this._element, kt)[0] || U.prev(this._element, kt)[0] || U.findOne(kt, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return Pt;
    }
    static get DefaultType() {
      return xt;
    }
    static get NAME() {
      return bt;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (d(this._element) || this._isShown())
        return;
      const t2 = { relatedTarget: this._element };
      if (!$.trigger(this._element, "show.bs.dropdown", t2).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
          for (const t3 of [].concat(...document.body.children))
            $.on(t3, "mouseover", _);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Et), this._element.classList.add(Et), $.trigger(this._element, "shown.bs.dropdown", t2);
      }
    }
    hide() {
      if (d(this._element) || !this._isShown())
        return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(t2) {
      if (!$.trigger(this._element, "hide.bs.dropdown", t2).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t3 of [].concat(...document.body.children))
            $.off(t3, "mouseover", _);
        this._popper && this._popper.destroy(), this._menu.classList.remove(Et), this._element.classList.remove(Et), this._element.setAttribute("aria-expanded", "false"), W.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t2);
      }
    }
    _getConfig(t2) {
      if ("object" == typeof (t2 = super._getConfig(t2)).reference && !l(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect)
        throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t2;
    }
    _createPopper() {
      if (void 0 === i)
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t2 = this._element;
      "parent" === this._config.reference ? t2 = this._parent : l(this._config.reference) ? t2 = c(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
      const e2 = this._getPopperConfig();
      this._popper = i.createPopper(t2, this._menu, e2);
    }
    _isShown() {
      return this._menu.classList.contains(Et);
    }
    _getPlacement() {
      const t2 = this._parent;
      if (t2.classList.contains("dropend"))
        return Dt;
      if (t2.classList.contains("dropstart"))
        return Nt;
      if (t2.classList.contains("dropup-center"))
        return "top";
      if (t2.classList.contains("dropdown-center"))
        return "bottom";
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? Ot : Lt : e2 ? St : It;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return (this._inNavbar || "static" === this._config.display) && (W.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t2) : this._config.popperConfig };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const i2 = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => h(t3));
      i2.length && w(i2, e2, t2 === yt, !i2.includes(e2)).focus();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Mt.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2])
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
    static clearMenus(t2) {
      if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)
        return;
      const e2 = U.find(Tt);
      for (const i2 of e2) {
        const e3 = Mt.getInstance(i2);
        if (!e3 || false === e3._config.autoClose)
          continue;
        const s2 = t2.composedPath(), n2 = s2.includes(e3._menu);
        if (s2.includes(e3._element) || "inside" === e3._config.autoClose && !n2 || "outside" === e3._config.autoClose && n2)
          continue;
        if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName)))
          continue;
        const o2 = { relatedTarget: e3._element };
        "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
      }
    }
    static dataApiKeydownHandler(t2) {
      const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, s2 = [vt, yt].includes(t2.key);
      if (!s2 && !i2)
        return;
      if (e2 && !i2)
        return;
      t2.preventDefault();
      const n2 = this.matches(Ct) ? this : U.prev(this, Ct)[0] || U.next(this, Ct)[0] || U.findOne(Ct, t2.delegateTarget.parentNode), o2 = Mt.getOrCreateInstance(n2);
      if (s2)
        return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
      o2._isShown() && (t2.stopPropagation(), o2.hide(), n2.focus());
    }
  }
  $.on(document, At, Ct, Mt.dataApiKeydownHandler), $.on(document, At, kt, Mt.dataApiKeydownHandler), $.on(document, wt, Mt.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", Mt.clearMenus), $.on(document, wt, Ct, function(t2) {
    t2.preventDefault(), Mt.getOrCreateInstance(this).toggle();
  }), b(Mt);
  const jt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", $t = ".sticky-top", Ft = "padding-right", zt = "margin-right";
  class Ht {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, Ft, (e2) => e2 + t2), this._setElementAttributes(jt, Ft, (e2) => e2 + t2), this._setElementAttributes($t, zt, (e2) => e2 - t2);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ft), this._resetElementAttributes(jt, Ft), this._resetElementAttributes($t, zt);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, i2) {
      const s2 = this.getWidth();
      this._applyManipulationCallback(t2, (t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + s2)
          return;
        this._saveInitialAttribute(t3, e2);
        const n2 = window.getComputedStyle(t3).getPropertyValue(e2);
        t3.style.setProperty(e2, `${i2(Number.parseFloat(n2))}px`);
      });
    }
    _saveInitialAttribute(t2, e2) {
      const i2 = t2.style.getPropertyValue(e2);
      i2 && W.setDataAttribute(t2, e2, i2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, (t3) => {
        const i2 = W.getDataAttribute(t3, e2);
        null !== i2 ? (W.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
      });
    }
    _applyManipulationCallback(t2, e2) {
      if (l(t2))
        e2(t2);
      else
        for (const i2 of U.find(t2, this._element))
          e2(i2);
    }
  }
  const qt = "show", Bt = "mousedown.bs.backdrop", Wt = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Rt = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
  class Vt extends R {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return Wt;
    }
    static get DefaultType() {
      return Rt;
    }
    static get NAME() {
      return "backdrop";
    }
    show(t2) {
      if (!this._config.isVisible)
        return void v(t2);
      this._append();
      const e2 = this._getElement();
      this._config.isAnimated && g(e2), e2.classList.add(qt), this._emulateAnimation(() => {
        v(t2);
      });
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove(qt), this._emulateAnimation(() => {
        this.dispose(), v(t2);
      })) : v(t2);
    }
    dispose() {
      this._isAppended && ($.off(this._element, Bt), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _configAfterMerge(t2) {
      return t2.rootElement = c(t2.rootElement), t2;
    }
    _append() {
      if (this._isAppended)
        return;
      const t2 = this._getElement();
      this._config.rootElement.append(t2), $.on(t2, Bt, () => {
        v(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(t2) {
      y(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const Kt = ".bs.focustrap", Qt = "backward", Xt = { autofocus: true, trapElement: null }, Yt = { autofocus: "boolean", trapElement: "element" };
  class Ut extends R {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return Xt;
    }
    static get DefaultType() {
      return Yt;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), $.off(document, Kt), $.on(document, "focusin.bs.focustrap", (t2) => this._handleFocusin(t2)), $.on(document, "keydown.tab.bs.focustrap", (t2) => this._handleKeydown(t2)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, $.off(document, Kt));
    }
    _handleFocusin(t2) {
      const { trapElement: e2 } = this._config;
      if (t2.target === document || t2.target === e2 || e2.contains(t2.target))
        return;
      const i2 = U.focusableChildren(e2);
      0 === i2.length ? e2.focus() : this._lastTabNavDirection === Qt ? i2[i2.length - 1].focus() : i2[0].focus();
    }
    _handleKeydown(t2) {
      "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? Qt : "forward");
    }
  }
  const Gt = "hidden.bs.modal", Jt = "show.bs.modal", Zt = "modal-open", te = "show", ee = "modal-static", ie = { backdrop: true, focus: true, keyboard: true }, se = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
  class ne extends V {
    constructor(t2, e2) {
      super(t2, e2), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new Ht(), this._addEventListeners();
    }
    static get Default() {
      return ie;
    }
    static get DefaultType() {
      return se;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || $.trigger(this._element, Jt, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Zt), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
    }
    hide() {
      this._isShown && !this._isTransitioning && ($.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(te), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }
    dispose() {
      for (const t2 of [window, this._dialog])
        $.off(t2, ".bs.modal");
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Vt({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new Ut({ trapElement: this._element });
    }
    _showElement(t2) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e2 = U.findOne(".modal-body", this._dialog);
      e2 && (e2.scrollTop = 0), g(this._element), this._element.classList.add(te), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, $.trigger(this._element, "shown.bs.modal", { relatedTarget: t2 });
      }, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      $.on(this._element, "keydown.dismiss.bs.modal", (t2) => {
        if ("Escape" === t2.key)
          return this._config.keyboard ? (t2.preventDefault(), void this.hide()) : void this._triggerBackdropTransition();
      }), $.on(window, "resize.bs.modal", () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), $.on(this._element, "mousedown.dismiss.bs.modal", (t2) => {
        $.one(this._element, "click.dismiss.bs.modal", (e2) => {
          this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove(Zt), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(this._element, Gt);
      });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
      "hidden" === e2 || this._element.classList.contains(ee) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(ee), this._queueCallback(() => {
        this._element.classList.remove(ee), this._queueCallback(() => {
          this._element.style.overflowY = e2;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
      if (i2 && !t2) {
        const t3 = m() ? "paddingLeft" : "paddingRight";
        this._element.style[t3] = `${e2}px`;
      }
      if (!i2 && t2) {
        const t3 = m() ? "paddingRight" : "paddingLeft";
        this._element.style[t3] = `${e2}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each(function() {
        const i2 = ne.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2])
            throw new TypeError(`No method named "${t2}"`);
          i2[t2](e2);
        }
      });
    }
  }
  $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t2) {
    const e2 = r(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), $.one(e2, Jt, (t3) => {
      t3.defaultPrevented || $.one(e2, Gt, () => {
        h(this) && this.focus();
      });
    });
    const i2 = U.findOne(".modal.show");
    i2 && ne.getInstance(i2).hide(), ne.getOrCreateInstance(e2).toggle(this);
  }), K(ne), b(ne);
  const oe = "show", re = "showing", ae = "hiding", le = ".offcanvas.show", ce = "hidePrevented.bs.offcanvas", he = "hidden.bs.offcanvas", de = { backdrop: true, keyboard: true, scroll: false }, ue = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
  class _e extends V {
    constructor(t2, e2) {
      super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return de;
    }
    static get DefaultType() {
      return ue;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || $.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new Ht().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(re), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(oe), this._element.classList.remove(re), $.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t2 });
      }, this._element, true));
    }
    hide() {
      this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(ae), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove(oe, ae), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ht().reset(), $.trigger(this._element, he);
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t2 = Boolean(this._config.backdrop);
      return new Vt({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
        "static" !== this._config.backdrop ? this.hide() : $.trigger(this._element, ce);
      } : null });
    }
    _initializeFocusTrap() {
      return new Ut({ trapElement: this._element });
    }
    _addEventListeners() {
      $.on(this._element, "keydown.dismiss.bs.offcanvas", (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : $.trigger(this._element, ce));
      });
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = _e.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
            throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t2) {
    const e2 = r(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), d(this))
      return;
    $.one(e2, he, () => {
      h(this) && this.focus();
    });
    const i2 = U.findOne(le);
    i2 && i2 !== e2 && _e.getInstance(i2).hide(), _e.getOrCreateInstance(e2).toggle(this);
  }), $.on(window, "load.bs.offcanvas.data-api", () => {
    for (const t2 of U.find(le))
      _e.getOrCreateInstance(t2).show();
  }), $.on(window, "resize.bs.offcanvas", () => {
    for (const t2 of U.find("[aria-modal][class*=show][class*=offcanvas-]"))
      "fixed" !== getComputedStyle(t2).position && _e.getOrCreateInstance(t2).hide();
  }), K(_e), b(_e);
  const ge = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), fe = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, pe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, me = (t2, e2) => {
    const i2 = t2.nodeName.toLowerCase();
    return e2.includes(i2) ? !ge.has(i2) || Boolean(fe.test(t2.nodeValue) || pe.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
  }, be = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, ve = { allowList: be, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, ye = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, we = { entry: "(string|element|function|null)", selector: "(string|element)" };
  class Ae extends R {
    constructor(t2) {
      super(), this._config = this._getConfig(t2);
    }
    static get Default() {
      return ve;
    }
    static get DefaultType() {
      return ye;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t2) {
      return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
    }
    toHtml() {
      const t2 = document.createElement("div");
      t2.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e3, i3] of Object.entries(this._config.content))
        this._setContent(t2, i3, e3);
      const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
      return i2 && e2.classList.add(...i2.split(" ")), e2;
    }
    _typeCheckConfig(t2) {
      super._typeCheckConfig(t2), this._checkContent(t2.content);
    }
    _checkContent(t2) {
      for (const [e2, i2] of Object.entries(t2))
        super._typeCheckConfig({ selector: e2, entry: i2 }, we);
    }
    _setContent(t2, e2, i2) {
      const s2 = U.findOne(i2, t2);
      s2 && ((e2 = this._resolvePossibleFunction(e2)) ? l(e2) ? this._putElementInTemplate(c(e2), s2) : this._config.html ? s2.innerHTML = this._maybeSanitize(e2) : s2.textContent = e2 : s2.remove());
    }
    _maybeSanitize(t2) {
      return this._config.sanitize ? function(t3, e2, i2) {
        if (!t3.length)
          return t3;
        if (i2 && "function" == typeof i2)
          return i2(t3);
        const s2 = new window.DOMParser().parseFromString(t3, "text/html"), n2 = [].concat(...s2.body.querySelectorAll("*"));
        for (const t4 of n2) {
          const i3 = t4.nodeName.toLowerCase();
          if (!Object.keys(e2).includes(i3)) {
            t4.remove();
            continue;
          }
          const s3 = [].concat(...t4.attributes), n3 = [].concat(e2["*"] || [], e2[i3] || []);
          for (const e3 of s3)
            me(e3, n3) || t4.removeAttribute(e3.nodeName);
        }
        return s2.body.innerHTML;
      }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
    }
    _resolvePossibleFunction(t2) {
      return "function" == typeof t2 ? t2(this) : t2;
    }
    _putElementInTemplate(t2, e2) {
      if (this._config.html)
        return e2.innerHTML = "", void e2.append(t2);
      e2.textContent = t2.textContent;
    }
  }
  const Ee = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Ce = "fade", Te = "show", ke = ".modal", Le = "hide.bs.modal", Oe = "hover", Ie = "focus", Se = { AUTO: "auto", TOP: "top", RIGHT: m() ? "left" : "right", BOTTOM: "bottom", LEFT: m() ? "right" : "left" }, De = { allowList: be, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 0], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, Ne = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
  class Pe extends V {
    constructor(t2, e2) {
      if (void 0 === i)
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return De;
    }
    static get DefaultType() {
      return Ne;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout), $.off(this._element.closest(ke), Le, this._hideModalHandler), this.tip && this.tip.remove(), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled)
        return;
      const t2 = $.trigger(this._element, this.constructor.eventName("show")), e2 = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t2.defaultPrevented || !e2)
        return;
      this.tip && (this.tip.remove(), this.tip = null);
      const i2 = this._getTipElement();
      this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
      const { container: s2 } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (s2.append(i2), $.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i2), i2.classList.add(Te), "ontouchstart" in document.documentElement)
        for (const t3 of [].concat(...document.body.children))
          $.on(t3, "mouseover", _);
      this._queueCallback(() => {
        $.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
      }, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown())
        return;
      if ($.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented)
        return;
      const t2 = this._getTipElement();
      if (t2.classList.remove(Te), "ontouchstart" in document.documentElement)
        for (const t3 of [].concat(...document.body.children))
          $.off(t3, "mouseover", _);
      this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false, this._isHovered = null, this._queueCallback(() => {
        this._isWithActiveTrigger() || (this._isHovered || t2.remove(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper());
      }, this.tip, this._isAnimated());
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }
    _createTipElement(t2) {
      const e2 = this._getTemplateFactory(t2).toHtml();
      if (!e2)
        return null;
      e2.classList.remove(Ce, Te), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i2 = ((t3) => {
        do {
          t3 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t3));
        return t3;
      })(this.constructor.NAME).toString();
      return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(Ce), e2;
    }
    setContent(t2) {
      this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t2) {
      return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new Ae({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(t2) {
      return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(Ce);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(Te);
    }
    _createPopper(t2) {
      const e2 = "function" == typeof this._config.placement ? this._config.placement.call(this, t2, this._element) : this._config.placement, s2 = Se[e2.toUpperCase()];
      return i.createPopper(this._element, t2, this._getPopperConfig(s2));
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _resolvePossibleFunction(t2) {
      return "function" == typeof t2 ? t2.call(this._element) : t2;
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
        this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
      } }] };
      return { ...e2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e2) : this._config.popperConfig };
    }
    _setListeners() {
      const t2 = this._config.trigger.split(" ");
      for (const e2 of t2)
        if ("click" === e2)
          $.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
            this._initializeOnDelegatedTarget(t3).toggle();
          });
        else if ("manual" !== e2) {
          const t3 = e2 === Oe ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === Oe ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
          $.on(this._element, t3, this._config.selector, (t4) => {
            const e3 = this._initializeOnDelegatedTarget(t4);
            e3._activeTrigger["focusin" === t4.type ? Ie : Oe] = true, e3._enter();
          }), $.on(this._element, i2, this._config.selector, (t4) => {
            const e3 = this._initializeOnDelegatedTarget(t4);
            e3._activeTrigger["focusout" === t4.type ? Ie : Oe] = e3._element.contains(t4.relatedTarget), e3._leave();
          });
        }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, $.on(this._element.closest(ke), Le, this._hideModalHandler);
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title");
      t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }
    _setTimeout(t2, e2) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(t2) {
      const e2 = W.getDataAttributes(this._element);
      for (const t3 of Object.keys(e2))
        Ee.has(t3) && delete e2[t3];
      return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2.container = false === t2.container ? document.body : c(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      for (const e2 in this._config)
        this.constructor.Default[e2] !== this._config[e2] && (t2[e2] = this._config[e2]);
      return t2.selector = false, t2.trigger = "manual", t2;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Pe.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2])
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  b(Pe);
  const xe = { ...Pe.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, Me = { ...Pe.DefaultType, content: "(null|string|element|function)" };
  class je extends Pe {
    static get Default() {
      return xe;
    }
    static get DefaultType() {
      return Me;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = je.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2])
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  b(je);
  const $e = "click.bs.scrollspy", Fe = "active", ze = "[href]", He = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, qe = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
  class Be extends V {
    constructor(t2, e2) {
      super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
    }
    static get Default() {
      return He;
    }
    static get DefaultType() {
      return qe;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const t2 of this._observableSections.values())
        this._observer.observe(t2);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.target = c(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && ($.off(this._config.target, $e), $.on(this._config.target, $e, ze, (t2) => {
        const e2 = this._observableSections.get(t2.target.hash);
        if (e2) {
          t2.preventDefault();
          const i2 = this._rootElement || window, s2 = e2.offsetTop - this._element.offsetTop;
          if (i2.scrollTo)
            return void i2.scrollTo({ top: s2, behavior: "smooth" });
          i2.scrollTop = s2;
        }
      }));
    }
    _getNewObserver() {
      const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
      return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
    }
    _observerCallback(t2) {
      const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
        this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
      }, s2 = (this._rootElement || document.documentElement).scrollTop, n2 = s2 >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = s2;
      for (const o2 of t2) {
        if (!o2.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e2(o2));
          continue;
        }
        const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (n2 && t3) {
          if (i2(o2), !s2)
            return;
        } else
          n2 || t3 || i2(o2);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const t2 = U.find(ze, this._config.target);
      for (const e2 of t2) {
        if (!e2.hash || d(e2))
          continue;
        const t3 = U.findOne(e2.hash, this._element);
        h(t3) && (this._targetLinks.set(e2.hash, e2), this._observableSections.set(e2.hash, t3));
      }
    }
    _process(t2) {
      this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(Fe), this._activateParents(t2), $.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: t2 }));
    }
    _activateParents(t2) {
      if (t2.classList.contains("dropdown-item"))
        U.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(Fe);
      else
        for (const e2 of U.parents(t2, ".nav, .list-group"))
          for (const t3 of U.prev(e2, ".nav-link, .nav-item > .nav-link, .list-group-item"))
            t3.classList.add(Fe);
    }
    _clearActiveClass(t2) {
      t2.classList.remove(Fe);
      const e2 = U.find("[href].active", t2);
      for (const t3 of e2)
        t3.classList.remove(Fe);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Be.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  $.on(window, "load.bs.scrollspy.data-api", () => {
    for (const t2 of U.find('[data-bs-spy="scroll"]'))
      Be.getOrCreateInstance(t2);
  }), b(Be);
  const We = "ArrowLeft", Re = "ArrowRight", Ve = "ArrowUp", Ke = "ArrowDown", Qe = "active", Xe = "fade", Ye = "show", Ue = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Ge = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ue}`;
  class Je extends V {
    constructor(t2) {
      super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), $.on(this._element, "keydown.bs.tab", (t3) => this._keydown(t3)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t2 = this._element;
      if (this._elemIsActive(t2))
        return;
      const e2 = this._getActiveElem(), i2 = e2 ? $.trigger(e2, "hide.bs.tab", { relatedTarget: t2 }) : null;
      $.trigger(t2, "show.bs.tab", { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
    }
    _activate(t2, e2) {
      t2 && (t2.classList.add(Qe), this._activate(r(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), $.trigger(t2, "shown.bs.tab", { relatedTarget: e2 })) : t2.classList.add(Ye);
      }, t2, t2.classList.contains(Xe)));
    }
    _deactivate(t2, e2) {
      t2 && (t2.classList.remove(Qe), t2.blur(), this._deactivate(r(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), $.trigger(t2, "hidden.bs.tab", { relatedTarget: e2 })) : t2.classList.remove(Ye);
      }, t2, t2.classList.contains(Xe)));
    }
    _keydown(t2) {
      if (![We, Re, Ve, Ke].includes(t2.key))
        return;
      t2.stopPropagation(), t2.preventDefault();
      const e2 = [Re, Ke].includes(t2.key), i2 = w(this._getChildren().filter((t3) => !d(t3)), t2.target, e2, true);
      i2 && (i2.focus({ preventScroll: true }), Je.getOrCreateInstance(i2).show());
    }
    _getChildren() {
      return U.find(Ge, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
    }
    _setInitialAttributes(t2, e2) {
      this._setAttributeIfNotExists(t2, "role", "tablist");
      for (const t3 of e2)
        this._setInitialAttributesOnChild(t3);
    }
    _setInitialAttributesOnChild(t2) {
      t2 = this._getInnerElement(t2);
      const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
      t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
    }
    _setInitialAttributesOnTargetPanel(t2) {
      const e2 = r(t2);
      e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `#${t2.id}`));
    }
    _toggleDropDown(t2, e2) {
      const i2 = this._getOuterElement(t2);
      if (!i2.classList.contains("dropdown"))
        return;
      const s2 = (t3, s3) => {
        const n2 = U.findOne(t3, i2);
        n2 && n2.classList.toggle(s3, e2);
      };
      s2(".dropdown-toggle", Qe), s2(".dropdown-menu", Ye), i2.setAttribute("aria-expanded", e2);
    }
    _setAttributeIfNotExists(t2, e2, i2) {
      t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
    }
    _elemIsActive(t2) {
      return t2.classList.contains(Qe);
    }
    _getInnerElement(t2) {
      return t2.matches(Ge) ? t2 : U.findOne(Ge, t2);
    }
    _getOuterElement(t2) {
      return t2.closest(".nav-item, .list-group-item") || t2;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Je.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  $.on(document, "click.bs.tab", Ue, function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), d(this) || Je.getOrCreateInstance(this).show();
  }), $.on(window, "load.bs.tab", () => {
    for (const t2 of U.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
      Je.getOrCreateInstance(t2);
  }), b(Je);
  const Ze = "hide", ti = "show", ei = "showing", ii = { animation: "boolean", autohide: "boolean", delay: "number" }, si = { animation: true, autohide: true, delay: 5e3 };
  class ni extends V {
    constructor(t2, e2) {
      super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return si;
    }
    static get DefaultType() {
      return ii;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ze), g(this._element), this._element.classList.add(ti, ei), this._queueCallback(() => {
        this._element.classList.remove(ei), $.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this.isShown() && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ei), this._queueCallback(() => {
        this._element.classList.add(Ze), this._element.classList.remove(ei, ti), $.trigger(this._element, "hidden.bs.toast");
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(ti), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(ti);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2)
        return void this._clearTimeout();
      const i2 = t2.relatedTarget;
      this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
    }
    _setListeners() {
      $.on(this._element, "mouseover.bs.toast", (t2) => this._onInteraction(t2, true)), $.on(this._element, "mouseout.bs.toast", (t2) => this._onInteraction(t2, false)), $.on(this._element, "focusin.bs.toast", (t2) => this._onInteraction(t2, true)), $.on(this._element, "focusout.bs.toast", (t2) => this._onInteraction(t2, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = ni.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2])
            throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  return K(ni), b(ni), { Alert: Q, Button: Y, Carousel: ht, Collapse: mt, Dropdown: Mt, Modal: ne, Offcanvas: _e, Popover: je, ScrollSpy: Be, Tab: Je, Toast: ni, Tooltip: Pe };
});
const bootstrap_min = "";
const bootstrapIcons = "";
const barbershop = "";
function Welcome({ services, branches }) {
  const navItems = [
    {
      to: "home_section",
      text: "Home",
      offset: 0
    },
    {
      to: "about_us_section",
      text: "Our Story",
      offset: 60
    },
    {
      to: "services_section",
      text: "Services",
      offset: 60
    },
    {
      to: "booking_section",
      text: "Book a Seat",
      offset: 60
    },
    {
      to: "price_section",
      text: "Price List",
      offset: 60
    },
    {
      to: "contact_section",
      text: "Contact",
      offset: 60
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "container-fluid", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Nav, { ...{ navItems } }),
    /* @__PURE__ */ jsxs("div", { className: "p-0 col-md-8 ms-sm-auto col-lg-9", children: [
      /* @__PURE__ */ jsxs("section", { className: "hero-section d-flex justify-content-center align-items-center", id: "home_section", children: [
        /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-lg-8 col-12", children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-4 text-white mb-lg-3", children: /* @__PURE__ */ jsxs("strong", { children: [
            "Barber ",
            /* @__PURE__ */ jsx("em", { children: "Shop" })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-black", children: "Get the most professional haircut for you" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("a", { className: "mb-2 btn custom-btn custom-border-btn custom-btn-bg-white smoothscroll me-2", href: "#about_us_section", children: "About Us" }),
          /* @__PURE__ */ jsx("a", { className: "mb-2 btn custom-btn smoothscroll", href: "#services_section", children: "What we do" })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "custom-block d-lg-flex flex-column justify-content-center align-items-center", children: [
          /* @__PURE__ */ jsx("img", { src: `https://storage.googleapis.com/barbershop-raplontos/images/vintage-chair-barbershop.jpg`, className: "custom-block-image img-fluid" }),
          /* @__PURE__ */ jsx("h4", { children: /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Hurry Up! Get good haircut." }) }),
          /* @__PURE__ */ jsx("a", { href: "#booking_section", className: "mt-3 smoothscroll btn custom-btn custom-btn-italic", children: "Book a seat" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "about-section section-padding", id: "about_us_section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto col-lg-12 col-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-4", children: "Best hairdressers" }),
          /* @__PURE__ */ jsx("div", { className: "pb-3 mb-5 border-bottom", children: /* @__PURE__ */ jsx("p", { children: "Di mana Kualitas Bertemu dengan Kenyamanan. Lihat Mengapa Barbershop kami adalah Pilihan Utama bagi Pria yang Cerdas." }) })
        ] }),
        /* @__PURE__ */ jsx("h6", { className: "mb-5", children: "Meet Babers" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-5 col-lg-5 col-12 custom-block-bg-overlay-wrap me-lg-5 mb-lg-0", children: [
          /* @__PURE__ */ jsx("img", { src: `https://storage.googleapis.com/barbershop-raplontos/images/vintage-chair-barbershop.jpg`, className: "custom-block-bg-overlay-image img-fluid" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-wrap team-info d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-0", children: "Jordan" }),
            /* @__PURE__ */ jsxs("ul", { className: "social-icon ms-auto", children: [
              /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link bi-facebook" }) }),
              /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link bi-instagram" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-5 col-lg-5 col-12 custom-block-bg-overlay-wrap mt-lg-0 mb-lg-0", children: [
          /* @__PURE__ */ jsx("img", { src: `https://storage.googleapis.com/barbershop-raplontos/images/barber/portrait-mid-adult-bearded-male-barber-with-folded-arms.jpg`, className: "custom-block-bg-overlay-image img-fluid" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-wrap team-info d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-0", children: "Mike" }),
            /* @__PURE__ */ jsxs("ul", { className: "social-icon ms-auto", children: [
              /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link bi-facebook" }) }),
              /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link bi-instagram" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h6", { className: "mt-5 mb-3", children: "Result" }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 mb-5 col-lg-5 col-12 custom-block-bg-overlay-wrap me-lg-5 mb-lg-0", children: /* @__PURE__ */ jsx("video", { controls: true, src: `https://storage.googleapis.com/barbershop-raplontos/images/1.mp4`, type: "video/mp4", className: "custom-block-bg-overlay-image img-fluid" }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 mb-5 col-lg-5 col-12 custom-block-bg-overlay-wrap me-lg-5 mb-lg-0", children: /* @__PURE__ */ jsx("video", { controls: true, src: `https://storage.googleapis.com/barbershop-raplontos/images/2.mp4`, type: "video/mp4", className: "custom-block-bg-overlay-image img-fluid" }) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "featured-section section-padding", children: [
        /* @__PURE__ */ jsx("div", { className: "section-overlay" }),
        /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto col-lg-10 col-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-3", children: "Get 20% Discount" }),
          /* @__PURE__ */ jsx("p", { children: "on every second week of the month" }),
          /* @__PURE__ */ jsx("strong", { children: "Promo Code: CukurGanteng" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx(Services, { ...{ services } }),
      /* @__PURE__ */ jsx("section", { className: "booking-section section-padding", id: "booking_section", children: /* @__PURE__ */ jsx(Booking, { ...{ branches, services } }) }),
      /* @__PURE__ */ jsx("section", { className: "price-list-section section-padding", id: "price_section", children: /* @__PURE__ */ jsx(PriceList, { ...{ services } }) }),
      /* @__PURE__ */ jsx("section", { className: "contact-section", id: "contact_section", children: /* @__PURE__ */ jsx("div", { className: "section-padding", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-lg-6 col-12", children: [
          /* @__PURE__ */ jsxs("h5", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("strong", { children: "Contact" }),
            " Information"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mb-1 text-white d-flex", children: /* @__PURE__ */ jsx("a", { href: "tel: 120-240-3600", className: "site-footer-link", children: " (+62) 777-666-555 " }) }),
          /* @__PURE__ */ jsx("p", { className: "text-white d-flex", children: /* @__PURE__ */ jsx("a", { href: "mailto:info@yourgmail.com", className: "site-footer-link", children: "Gentlemen@gmail.com " }) }),
          /* @__PURE__ */ jsxs("ul", { className: "social-icon", children: [
            /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link", children: /* @__PURE__ */ jsxs("svg", { width: "30px", fill: "#ffffff", viewBox: "-2.4 -1.2 28.80 28.80", xmlns: "http://www.w3.org/2000/svg", stroke: "#ffffff", transform: "matrix(1, 0, 0, 1, 0, 0)", strokeWidth: "0.00024000000000000003", children: [
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round", stroke: "#CCCCCC", strokeWidth: "0.192" }),
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_iconCarrier", children: /* @__PURE__ */ jsx("path", { d: "M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link", children: /* @__PURE__ */ jsxs("svg", { width: "30px", viewBox: "-5.3 -5.3 28.80 28.80", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xlink: "http://www.w3.org/1999/xlink", fill: "#ffffff", stroke: "#ffffff", children: [
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
                /* @__PURE__ */ jsx("title", { children: "twitter [#154]" }),
                /* @__PURE__ */ jsx("defs", { children: " " }),
                /* @__PURE__ */ jsx("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ jsx("g", { id: "Dribbble-Light-Preview", transform: "translate(-60.000000, -7521.000000)", fill: "#ffffff", children: /* @__PURE__ */ jsx("g", { id: "icons", transform: "translate(56.000000, 160.000000)", children: /* @__PURE__ */ jsx("path", { d: "M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705", id: "twitter-[#154]" }) }) }) })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link", children: /* @__PURE__ */ jsxs("svg", { width: "30px", viewBox: "-4.3 -3.4 28.80 28.80", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xlink: "http://www.w3.org/1999/xlink", fill: "#ffffff", children: [
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
                " ",
                /* @__PURE__ */ jsx("title", { children: "instagram [#167]" }),
                " ",
                /* @__PURE__ */ jsx("desc", { children: "Created with Sketch." }),
                " ",
                /* @__PURE__ */ jsx("defs", { children: " " }),
                " ",
                /* @__PURE__ */ jsxs("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: [
                  " ",
                  /* @__PURE__ */ jsxs("g", { id: "Dribbble-Light-Preview", transform: "translate(-340.000000, -7439.000000)", fill: "#ffffff", children: [
                    " ",
                    /* @__PURE__ */ jsxs("g", { id: "icons", transform: "translate(56.000000, 160.000000)", children: [
                      " ",
                      /* @__PURE__ */ jsx("path", { d: "M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792", id: "instagram-[#167]", children: " " }),
                      " "
                    ] }),
                    " "
                  ] }),
                  " "
                ] }),
                " "
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link", children: /* @__PURE__ */ jsxs("svg", { width: "30px", viewBox: "-5 -6.4 28.80 28.80", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xlink: "http://www.w3.org/1999/xlink", fill: "#ffffff", children: [
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
                " ",
                /* @__PURE__ */ jsx("title", { children: "youtube [#168]" }),
                " ",
                /* @__PURE__ */ jsx("desc", { children: "Created with Sketch." }),
                " ",
                /* @__PURE__ */ jsx("defs", { children: " " }),
                " ",
                /* @__PURE__ */ jsxs("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd", children: [
                  " ",
                  /* @__PURE__ */ jsxs("g", { id: "Dribbble-Light-Preview", transform: "translate(-300.000000, -7442.000000)", fill: "#ffffff", children: [
                    " ",
                    /* @__PURE__ */ jsxs("g", { id: "icons", transform: "translate(56.000000, 160.000000)", children: [
                      " ",
                      /* @__PURE__ */ jsx("path", { d: "M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289", id: "youtube-[#168]", children: " " }),
                      " "
                    ] }),
                    " "
                  ] }),
                  " "
                ] }),
                " "
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "social-icon-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "social-icon-link", children: /* @__PURE__ */ jsxs("svg", { width: "30px", viewBox: "-2.6 -0.4 28.80 28.80", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
                " ",
                /* @__PURE__ */ jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z", fill: "#ffffff" }),
                " "
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 mx-auto mt-5 col-lg-5 col-12 contact-block-wrap mt-lg-0 pt-lg-0", children: /* @__PURE__ */ jsx("div", { className: "contact-block", children: /* @__PURE__ */ jsxs("h6", { className: "mb-0", children: [
          /* @__PURE__ */ jsx("i", { className: "custom-icon me-3", children: /* @__PURE__ */ jsxs("svg", { width: "30px", viewBox: "0 0 64 64", version: 1, id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xlink: "http://www.w3.org/1999/xlink", enableBackground: "new 0 0 64 64", space: "preserve", fill: "#ffffff", children: [
            /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }),
            /* @__PURE__ */ jsx("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
              " ",
              /* @__PURE__ */ jsxs("g", { children: [
                " ",
                /* @__PURE__ */ jsx("path", { fill: "#000000", d: "M59,0H5C2.789,0,1,1.789,1,4v20c0,2.22,1.208,4.152,3,5.19V60c0,2.211,1.789,4,4,4h48c2.211,0,4-1.789,4-4 V29.19c1.792-1.038,3-2.971,3-5.19V4C63,1.789,61.211,0,59,0z M51,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H51z M41,2v22 c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H41z M31,2v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V2H31z M21,2v22c0,2.209-1.791,4-4,4 s-4-1.791-4-4V2H21z M3,4c0-1.104,0.896-2,2-2h6v22c0,2.209-1.791,4-4,4s-4-1.791-4-4V4z M12,62V38h12v10h-1c-0.553,0-1,0.447-1,1 s0.447,1,1,1h1v12H12z M58,60c0,1.104-0.896,2-2,2H26V37c0-0.516-0.447-1-1-1H11c-0.553,0-1,0.447-1,1v25H8c-1.104,0-2-0.896-2-2 V29.91C6.326,29.965,6.658,30,7,30c2.088,0,3.926-1.068,5-2.687C13.074,28.932,14.912,30,17,30s3.926-1.068,5-2.687 C23.074,28.932,24.912,30,27,30s3.926-1.068,5-2.687C33.074,28.932,34.912,30,37,30s3.926-1.068,5-2.687 C43.074,28.932,44.912,30,47,30s3.926-1.068,5-2.687C53.074,28.932,54.912,30,57,30c0.342,0,0.674-0.035,1-0.09V60z M57,28 c-2.209,0-4-1.791-4-4V2h6c1.104,0,2,0.896,2,2v20C61,26.209,59.209,28,57,28z" }),
                " ",
                /* @__PURE__ */ jsx("path", { fill: "#000000", d: "M53,36H29c-0.553,0-1,0.447-1,1v20c0,0.553,0.447,1,1,1h24c0.553,0,1-0.447,1-1V37 C54,36.447,53.553,36,53,36z M52,56H30V38h22V56z" }),
                " ",
                /* @__PURE__ */ jsx("path", { fill: "#000000", d: "M48.293,42.707C48.488,42.902,48.744,43,49,43s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 l-1-1c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L48.293,42.707z" }),
                " ",
                /* @__PURE__ */ jsx("path", { fill: "#000000", d: "M48.293,47.707C48.488,47.902,48.744,48,49,48s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 l-6-6c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L48.293,47.707z" }),
                " "
              ] }),
              " "
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("strong", { className: "text-black", children: "Open Daily" }),
          /* @__PURE__ */ jsx("span", { className: "text-white ms-auto", children: "10:00 AM - 8:00 PM" })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "pt-5 mx-auto mt-5 col-lg-12 col-12", children: /* @__PURE__ */ jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7748191292394!2d106.8557246!3d-6.293297499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3205ba0194b%3A0x3efcb2ee07a02a00!2sCaptain%20Barbershop%20Condet!5e0!3m2!1sid!2sid!4v1687399973544!5m2!1sid!2sid", width: "100%", height: 300, style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
      ] }) }) }) }),
      /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
        /* @__PURE__ */ jsx(Branches, { ...{ branches } }),
        /* @__PURE__ */ jsx("div", { className: "site-footer-bottom", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row align-items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-4 col-lg-8 col-12", children: /* @__PURE__ */ jsx("p", { className: "mb-0 copyright-text", children: "Destinasi Perawatan Terbaik Anda" }) }),
          /* @__PURE__ */ jsx("div", { className: "col-lg-2 col-md-3 col-3 mt-lg-4 ms-auto", children: /* @__PURE__ */ jsx("a", { href: "#home_section", className: "back-top-icon smoothscroll", title: "Back Top", children: /* @__PURE__ */ jsx("i", { className: "bi-arrow-up-circle" }) }) })
        ] }) }) })
      ] })
    ] })
  ] }) });
}
export {
  Welcome as default
};
