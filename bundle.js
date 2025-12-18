/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@editorjs/editorjs/dist/editorjs.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@editorjs/editorjs/dist/editorjs.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Aa)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Xn(n) {
  if (n.__esModule)
    return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(n, o);
    Object.defineProperty(t, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[o];
      }
    });
  }), t;
}
function ot() {
}
Object.assign(ot, {
  default: ot,
  register: ot,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n) {
  const e = (this.document || this.ownerDocument).querySelectorAll(n);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(n) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(n))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
  const t = document.createDocumentFragment();
  Array.isArray(e) || (e = [e]), e.forEach((o) => {
    const i = o instanceof Node;
    t.appendChild(i ? o : document.createTextNode(o));
  }), this.insertBefore(t, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n) {
  n = arguments.length === 0 ? !0 : !!n;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), s = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c = s && !r;
  (s || r) && n && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || l) && n && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (s || r || a || l) && !n && this.scrollIntoView(c);
});
window.requestIdleCallback = window.requestIdleCallback || function(n) {
  const e = Date.now();
  return setTimeout(function() {
    n({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(n) {
  clearTimeout(n);
};
let Vn = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Lo = /* @__PURE__ */ ((n) => (n.VERBOSE = "VERBOSE", n.INFO = "INFO", n.WARN = "WARN", n.ERROR = "ERROR", n))(Lo || {});
const y = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, qn = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function Ie(n, e, t = "log", o, i = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const s = ["info", "log", "warn", "error"].includes(t), r = [];
  switch (Ie.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!s || n)
        return;
      break;
  }
  o && r.push(o);
  const a = "Editor.js 2.31.0", l = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
  n && (s ? (r.unshift(l, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    s ? o ? console[t](`${e} %o`, ...r) : console[t](e, ...r) : console[t](e);
  } catch {
  }
}
Ie.logLevel = "VERBOSE";
function Zn(n) {
  Ie.logLevel = n;
}
const S = Ie.bind(window, !1), X = Ie.bind(window, !0);
function le(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function A(n) {
  return le(n) === "function" || le(n) === "asyncfunction";
}
function D(n) {
  return le(n) === "object";
}
function te(n) {
  return le(n) === "string";
}
function Gn(n) {
  return le(n) === "boolean";
}
function yo(n) {
  return le(n) === "number";
}
function wo(n) {
  return le(n) === "undefined";
}
function V(n) {
  return n ? Object.keys(n).length === 0 && n.constructor === Object : !0;
}
function Po(n) {
  return n > 47 && n < 58 || // number keys
  n === 32 || n === 13 || // Space bar & return key(s)
  n === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  n > 64 && n < 91 || // letter keys
  n > 95 && n < 112 || // Numpad keys
  n > 185 && n < 193 || // ;=,-./` (in order)
  n > 218 && n < 223;
}
async function Qn(n, e = () => {
}, t = () => {
}) {
  async function o(i, s, r) {
    try {
      await i.function(i.data), await s(wo(i.data) ? {} : i.data);
    } catch {
      r(wo(i.data) ? {} : i.data);
    }
  }
  return n.reduce(async (i, s) => (await i, o(s, e, t)), Promise.resolve());
}
function No(n) {
  return Array.prototype.slice.call(n);
}
function Fe(n, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => n.apply(t, o), e);
  };
}
function Jn(n) {
  return n.name.split(".").pop();
}
function ei(n) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(n);
}
function Eo(n, e, t) {
  let o;
  return (...i) => {
    const s = this, r = () => {
      o = null, t || n.apply(s, i);
    }, a = t && !o;
    window.clearTimeout(o), o = window.setTimeout(r, e), a && n.apply(s, i);
  };
}
function dt(n, e, t = void 0) {
  let o, i, s, r = null, a = 0;
  t || (t = {});
  const l = function() {
    a = t.leading === !1 ? 0 : Date.now(), r = null, s = n.apply(o, i), r || (o = i = null);
  };
  return function() {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const d = e - (c - a);
    return o = this, i = arguments, d <= 0 || d > e ? (r && (clearTimeout(r), r = null), a = c, s = n.apply(o, i), r || (o = i = null)) : !r && t.trailing !== !1 && (r = setTimeout(l, d)), s;
  };
}
function ti() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (n[e] = !0), n;
}
function je(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function ut(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (D(n) && D(t))
    for (const o in t)
      D(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), ut(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return ut(n, ...e);
}
function vt(n) {
  const e = ti();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function oi(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function ni() {
  return Vn(10);
}
function ii(n) {
  window.open(n, "_blank");
}
function si(n = "") {
  return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function ht(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && X(o, "warn");
}
function me(n, e, t) {
  const o = t.value ? "value" : "get", i = t[o], s = `#${e}Cache`;
  if (t[o] = function(...r) {
    return this[s] === void 0 && (this[s] = i.apply(this, ...r)), this[s];
  }, o === "get" && t.set) {
    const r = t.set;
    t.set = function(a) {
      delete n[s], r.apply(this, a);
    };
  }
  return t;
}
const Ro = 650;
function be() {
  return window.matchMedia(`(max-width: ${Ro}px)`).matches;
}
const pt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function ri(n, e) {
  const t = Array.isArray(n) || D(n), o = Array.isArray(e) || D(e);
  return t || o ? JSON.stringify(n) === JSON.stringify(e) : n === e;
}
class u {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o = {}) {
    const i = document.createElement(e);
    if (Array.isArray(t)) {
      const s = t.filter((r) => r !== void 0);
      i.classList.add(...s);
    } else
      t && i.classList.add(t);
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    return i;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o) => e.appendChild(o)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o) => e.prepend(o))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o = document.createElement("div"), i = e.parentNode;
    i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return No(e.querySelectorAll(u.allInputsSelector)).reduce((t, o) => u.isNativeInput(o) || u.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...u.getDeepestBlockElements(o)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns - it can be text Node or Element Node, so that caret will able to work with it
   *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
   */
  static getDeepestNode(e, t = !1) {
    const o = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let s = e[o];
      if (u.isSingleTag(s) && !u.isNativeInput(s) && !u.isLineBreakTag(s))
        if (s[i])
          s = s[i];
        else if (s.parentNode[i])
          s = s.parentNode[i];
        else
          return s.parentNode;
      return this.getDeepestNode(s, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return yo(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return yo(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = !0;
    if (u.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else
      t = u.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e, t) {
    let o;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("​", ""), t && (o = o.replace(new RegExp(t, "g"), "")), o.length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */
  static isEmpty(e, t) {
    const o = [e];
    for (; o.length > 0; )
      if (e = o.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
          return !1;
        e.childNodes && o.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = u.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return u.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    te(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (i) => !u.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return u.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...u.getDeepestBlockElements(o)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return te(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s = t.top + i, r = t.left + o;
    return {
      top: s,
      left: r,
      bottom: s + t.height,
      right: r + t.width
    };
  }
  /**
   * Find text node and offset by total content offset
   *
   * @param {Node} root - root node to start search from
   * @param {number} totalOffset - offset relative to the root node content
   * @returns {{node: Node | null, offset: number}} - node and offset inside node
   */
  static getNodeByOffset(e, t) {
    let o = 0, i = null;
    const s = document.createTreeWalker(
      e,
      NodeFilter.SHOW_TEXT,
      null
    );
    let r = s.nextNode();
    for (; r; ) {
      const c = r.textContent, d = c === null ? 0 : c.length;
      if (i = r, o + d >= t)
        break;
      o += d, r = s.nextNode();
    }
    if (!i)
      return {
        node: null,
        offset: 0
      };
    const a = i.textContent;
    if (a === null || a.length === 0)
      return {
        node: null,
        offset: 0
      };
    const l = Math.min(t - o, a.length);
    return {
      node: i,
      offset: l
    };
  }
}
function ai(n) {
  return !/[^\t\n\r ]/.test(n);
}
function li(n) {
  const e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), s = parseFloat(e.borderTopWidth), r = parseFloat(e.marginTop), a = t * 0.8, l = (o - t) / 2;
  return r + s + i + l + a;
}
function Do(n) {
  n.dataset.empty = u.isEmpty(n) ? "true" : "false";
}
const ci = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": "",
    "Convert to": ""
  }
}, di = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, ui = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, hi = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, Fo = {
  ui: ci,
  toolNames: di,
  tools: ui,
  blockTunes: hi
}, jo = class he {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(e, t) {
    return he._t(e, t);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(e, t) {
    return he._t(e, t);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(e) {
    he.currentDictionary = e;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(e, t) {
    const o = he.getNamespace(e);
    return !o || !o[t] ? t : o[t];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(e) {
    return e.split(".").reduce((o, i) => !o || !Object.keys(o).length ? {} : o[i], he.currentDictionary);
  }
};
jo.currentDictionary = Fo;
let z = jo;
class Ho extends Error {
}
class Oe {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = (i) => {
      const s = t(i), r = this.subscribers[e].indexOf(o);
      return r !== -1 && this.subscribers[e].splice(r, 1), s;
    };
    this.subscribers[e].push(o);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i) => {
      const s = i(o);
      return s !== void 0 ? s : o;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o = 0; o < this.subscribers[e].length; o++)
      if (this.subscribers[e][o] === t) {
        delete this.subscribers[e][o];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
}
function J(n) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return n.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return n.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return n.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return n.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return n.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return n.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(t) {
      n.stretched = t;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return n.stretched;
    },
    /**
     * True if Block has inputs to be focused
     */
    get focusable() {
      return n.focusable;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(t, o) {
      return n.call(t, o);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return n.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(t) {
      return n.validate(t);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      n.dispatchChange();
    },
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    getActiveToolboxEntry() {
      return n.getActiveToolboxEntry();
    }
  });
}
class _e {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o, i = !1) {
    const s = si("l"), r = {
      id: s,
      element: e,
      eventType: t,
      handler: o,
      options: i
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(r), e.addEventListener(t, o, i), s;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, i) {
    const s = this.findAll(e, t, o);
    s.forEach((r, a) => {
      const l = this.allListeners.indexOf(s[a]);
      l > -1 && (this.allListeners.splice(l, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o) {
    const i = this.findAll(e, t, o);
    return i.length > 0 ? i[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o) {
    let i;
    const s = e ? this.findByEventTarget(e) : [];
    return e && t && o ? i = s.filter((r) => r.eventType === t && r.handler === o) : e && t ? i = s.filter((r) => r.eventType === t) : i = s, i;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
}
class E {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new _e(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, i, s, r = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, i, s, r)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o of this.mutableListenerIds)
          this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === E)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
}
class b {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? u.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(b.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!b.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection)
      return S("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return S("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("​")), t.insertNode(i), o = i.getBoundingClientRect();
        const s = i.parentNode;
        s.removeChild(i), s.normalize();
      }
    }
    return o;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o = document.createRange(), i = window.getSelection();
    return u.isNativeInput(e) ? u.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = b.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = b.range;
    if (e === null)
      return;
    const t = u.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return u.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = u.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = b.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o = 10) {
    const i = window.getSelection();
    let s = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([
      /** the Node in which the selection begins */
      i.anchorNode,
      /** the Node in which the selection ends */
      i.focusNode
    ].forEach((a) => {
      let l = o;
      for (; l > 0 && a.parentNode && !(a.tagName === e && (s = a, t && a.classList && !a.classList.contains(t) && (s = null), s)); )
        a = a.parentNode, l--;
    }), s);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
}
function pi(n, e) {
  const { type: t, target: o, addedNodes: i, removedNodes: s } = n;
  return n.type === "attributes" && n.attributeName === "data-empty" ? !1 : !!(e.contains(o) || t === "childList" && (Array.from(i).some((l) => l === e) || Array.from(s).some((l) => l === e)));
}
const ft = "redactor dom changed", $o = "block changed", zo = "fake cursor is about to be toggled", Uo = "fake cursor have been set", Te = "editor mobile layout toggled";
function gt(n, e) {
  if (!n.conversionConfig)
    return !1;
  const t = n.conversionConfig[e];
  return A(t) || te(t);
}
function He(n, e) {
  return gt(n.tool, e);
}
function Wo(n, e) {
  return Object.entries(n).some(([t, o]) => e[t] && ri(e[t], o));
}
async function Yo(n, e) {
  const o = (await n.save()).data, i = e.find((s) => s.name === n.name);
  return i !== void 0 && !gt(i, "export") ? [] : e.reduce((s, r) => {
    if (!gt(r, "import") || r.toolbox === void 0)
      return s;
    const a = r.toolbox.filter((l) => {
      if (V(l) || l.icon === void 0)
        return !1;
      if (l.data !== void 0) {
        if (Wo(l.data, o))
          return !1;
      } else if (r.name === n.name)
        return !1;
      return !0;
    });
    return s.push({
      ...r,
      toolbox: a
    }), s;
  }, []);
}
function xo(n, e) {
  return n.mergeable ? n.name === e.name ? !0 : He(e, "export") && He(n, "import") : !1;
}
function fi(n, e) {
  const t = e == null ? void 0 : e.export;
  return A(t) ? t(n) : te(t) ? n[t] : (t !== void 0 && S("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function Bo(n, e, t) {
  const o = e == null ? void 0 : e.import;
  return A(o) ? o(n, t) : te(o) ? {
    [o]: n
  } : (o !== void 0 && S("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var _ = /* @__PURE__ */ ((n) => (n.Default = "default", n.Separator = "separator", n.Html = "html", n))(_ || {}), ee = /* @__PURE__ */ ((n) => (n.APPEND_CALLBACK = "appendCallback", n.RENDERED = "rendered", n.MOVED = "moved", n.UPDATED = "updated", n.REMOVED = "removed", n.ON_PASTE = "onPaste", n))(ee || {});
class R extends Oe {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = ni(),
    data: t,
    tool: o,
    readOnly: i,
    tunesData: s
  }, r) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (a = void 0) => {
      const l = a === void 0, c = a instanceof InputEvent;
      !l && !c && this.detectToolRootChange(a);
      let d;
      l || c ? d = !0 : d = !(a.length > 0 && a.every((p) => {
        const { addedNodes: g, removedNodes: f, target: v } = p;
        return [
          ...Array.from(g),
          ...Array.from(f),
          v
        ].some((T) => (u.isElement(T) || (T = T.parentElement), T && T.closest('[data-mutation-free="true"]') !== null));
      })), d && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.editorEventBus = r || null, this.blockAPI = new J(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, i), this.tunes = o.tunes, this.composeTunes(s), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = u.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex((o) => o === e || o.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !V(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return A(this.toolInstance.merge);
  }
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable() {
    return this.inputs.length !== 0;
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = u.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var i, s;
    this.holder.classList.toggle(R.CSS.selected, e);
    const t = e === !0 && b.isRangeInsideContainer(this.holder), o = e === !1 && b.isFakeCursorInsideContainer(this.holder);
    (t || o) && ((i = this.editorEventBus) == null || i.emit(zo, { state: e }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (s = this.editorEventBus) == null || s.emit(Uo, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(R.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(R.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(R.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(R.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (A(this.toolInstance[e])) {
      e === "appendCallback" && S(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        S(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([s, r]) => {
      if (A(r.save))
        try {
          t[s] = r.save();
        } catch (a) {
          S(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
        }
    });
    const o = window.performance.now();
    let i;
    return Promise.resolve(e).then((s) => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: s,
      tunes: t,
      time: i - o
    })).catch((s) => {
      S(`Saving process for ${this.name} tool failed due to the ${s}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = !0;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in Block Tunes menu.
   * Splits block tunes into 2 groups: block specific tunes and common tunes
   */
  getTunes() {
    const e = [], t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
    return u.isElement(o) ? e.push({
      type: _.Html,
      element: o
    }) : Array.isArray(o) ? e.push(...o) : e.push(o), [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((s) => s.render()).forEach((s) => {
      u.isElement(s) ? t.push({
        type: _.Html,
        element: s
      }) : Array.isArray(s) ? t.push(...s) : t.push(s);
    }), {
      toolTunes: e,
      commonTunes: t
    };
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = u.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), A(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data, o = e;
    return o == null ? void 0 : o.find((i) => Wo(i.data, t));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return fi(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = u.make("div", R.CSS.wrapper), t = u.make("div", R.CSS.content), o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((s) => {
      if (A(s.wrap))
        try {
          i = s.wrap(i);
        } catch (r) {
          S(`Tune ${s.constructor.name} wrap method throws an Error %o`, "warn", r);
        }
    }), e.appendChild(i), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), u.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), u.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some((s) => pi(s, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(ft, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(ft, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const i = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = i;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
  /**
   * Mark inputs with 'data-empty' attribute with the empty state
   */
  toggleInputsEmptyMark() {
    this.inputs.forEach(Do);
  }
}
class gi extends E {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, s, r, a) => {
      const l = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: i,
        needToFocus: s,
        replace: r
      });
      return new J(l);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new R({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t, o) => {
      const { BlockManager: i } = this.Editor, s = i.getBlockById(e);
      if (s === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const r = await i.update(s, t, o);
      return new J(r);
    }, this.convert = async (e, t, o) => {
      var h, p;
      const { BlockManager: i, Tools: s } = this.Editor, r = i.getBlockById(e);
      if (!r)
        throw new Error(`Block with id "${e}" not found`);
      const a = s.blockTools.get(r.name), l = s.blockTools.get(t);
      if (!l)
        throw new Error(`Block Tool with type "${t}" not found`);
      const c = ((h = a == null ? void 0 : a.conversionConfig) == null ? void 0 : h.export) !== void 0, d = ((p = l.conversionConfig) == null ? void 0 : p.import) !== void 0;
      if (c && d) {
        const g = await i.convert(r, t, o);
        return new J(g);
      } else {
        const g = [
          c ? !1 : je(r.name),
          d ? !1 : je(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${r.name}" to "${t}" is not possible. ${g} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({ id: i, type: s, data: r }) => this.Editor.BlockManager.composeBlock({
        id: i,
        tool: s || this.config.defaultBlock,
        data: r
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map((i) => new J(i));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      getBlockByElement: (e) => this.getBlockByElement(e),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      X("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      X("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new J(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (X("There is no block with id `" + e + "`", "warn"), null) : new J(t);
  }
  /**
   * Get Block API object by any child html element
   *
   * @param element - html element to get Block by
   */
  getBlockByElement(e) {
    const t = this.Editor.BlockManager.getBlock(e);
    if (t === void 0) {
      X("There is no block corresponding to element `" + e + "`", "warn");
      return;
    }
    return new J(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    S(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      X(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  async clear() {
    await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  async renderFromHTML(e) {
    return await this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = !0) {
    ht(
      !0,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    S("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
function mi(n, e) {
  return typeof n == "number" ? e.BlockManager.getBlockByIndex(n) : typeof n == "string" ? e.BlockManager.getBlockById(n) : e.BlockManager.getBlockById(n.id);
}
class bi extends E {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => {
      const i = mi(e, this.Editor);
      return i === void 0 ? !1 : (this.Editor.Caret.setToBlock(i, t, o), !0);
    }, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class vi extends E {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
class kt extends E {
  /**
   * Return namespace section for tool or block tune
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  static getNamespace(e, t) {
    return t ? `blockTunes.${e}` : `tools.${e}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        X("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        t: (o) => z.t(kt.getNamespace(e, t), o)
      }
    );
  }
}
class ki extends E {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      tools: this.Editor.ToolsAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
      }
    );
  }
}
class yi extends E {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class wi extends E {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, i) => this.on(e, t, o, i),
      off: (e, t, o, i) => this.off(e, t, o, i),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o, i) {
    return this.listeners.on(e, t, o, i);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, i) {
    this.listeners.off(e, t, o, i);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var Ko = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var l in s)
            i.d(a, l, (function(c) {
              return s[c];
            }).bind(null, l));
        return a;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "/", i(i.s = 0);
    }([function(t, o, i) {
      i(1), /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */
      t.exports = function() {
        var s = i(6), r = "cdx-notify--bounce-in", a = null;
        return { show: function(l) {
          if (l.message) {
            (function() {
              if (a)
                return !0;
              a = s.getWrapper(), document.body.appendChild(a);
            })();
            var c = null, d = l.time || 8e3;
            switch (l.type) {
              case "confirm":
                c = s.confirm(l);
                break;
              case "prompt":
                c = s.prompt(l);
                break;
              default:
                c = s.alert(l), window.setTimeout(function() {
                  c.remove();
                }, d);
            }
            a.appendChild(c), c.classList.add(r);
          }
        } };
      }();
    }, function(t, o, i) {
      var s = i(2);
      typeof s == "string" && (s = [[t.i, s, ""]]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      i(4)(s, r), s.locals && (t.exports = s.locals);
    }, function(t, o, i) {
      (t.exports = i(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(i) {
        var s = [];
        return s.toString = function() {
          return this.map(function(r) {
            var a = function(l, c) {
              var d = l[1] || "", h = l[3];
              if (!h)
                return d;
              if (c && typeof btoa == "function") {
                var p = (f = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f)))) + " */"), g = h.sources.map(function(v) {
                  return "/*# sourceURL=" + h.sourceRoot + v + " */";
                });
                return [d].concat(g).concat([p]).join(`
`);
              }
              var f;
              return [d].join(`
`);
            }(r, i);
            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
          }).join("");
        }, s.i = function(r, a) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var l = {}, c = 0; c < this.length; c++) {
            var d = this[c][0];
            typeof d == "number" && (l[d] = !0);
          }
          for (c = 0; c < r.length; c++) {
            var h = r[c];
            typeof h[0] == "number" && l[h[0]] || (a && !h[2] ? h[2] = a : a && (h[2] = "(" + h[2] + ") and (" + a + ")"), s.push(h));
          }
        }, s;
      };
    }, function(t, o, i) {
      var s, r, a = {}, l = (s = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return r === void 0 && (r = s.apply(this, arguments)), r;
      }), c = function(k) {
        var m = {};
        return function(w) {
          if (typeof w == "function")
            return w();
          if (m[w] === void 0) {
            var x = (function(I) {
              return document.querySelector(I);
            }).call(this, w);
            if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
              try {
                x = x.contentDocument.head;
              } catch {
                x = null;
              }
            m[w] = x;
          }
          return m[w];
        };
      }(), d = null, h = 0, p = [], g = i(5);
      function f(k, m) {
        for (var w = 0; w < k.length; w++) {
          var x = k[w], I = a[x.id];
          if (I) {
            I.refs++;
            for (var C = 0; C < I.parts.length; C++)
              I.parts[C](x.parts[C]);
            for (; C < x.parts.length; C++)
              I.parts.push(F(x.parts[C], m));
          } else {
            var N = [];
            for (C = 0; C < x.parts.length; C++)
              N.push(F(x.parts[C], m));
            a[x.id] = { id: x.id, refs: 1, parts: N };
          }
        }
      }
      function v(k, m) {
        for (var w = [], x = {}, I = 0; I < k.length; I++) {
          var C = k[I], N = m.base ? C[0] + m.base : C[0], B = { css: C[1], media: C[2], sourceMap: C[3] };
          x[N] ? x[N].parts.push(B) : w.push(x[N] = { id: N, parts: [B] });
        }
        return w;
      }
      function O(k, m) {
        var w = c(k.insertInto);
        if (!w)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var x = p[p.length - 1];
        if (k.insertAt === "top")
          x ? x.nextSibling ? w.insertBefore(m, x.nextSibling) : w.appendChild(m) : w.insertBefore(m, w.firstChild), p.push(m);
        else if (k.insertAt === "bottom")
          w.appendChild(m);
        else {
          if (typeof k.insertAt != "object" || !k.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var I = c(k.insertInto + " " + k.insertAt.before);
          w.insertBefore(m, I);
        }
      }
      function T(k) {
        if (k.parentNode === null)
          return !1;
        k.parentNode.removeChild(k);
        var m = p.indexOf(k);
        m >= 0 && p.splice(m, 1);
      }
      function M(k) {
        var m = document.createElement("style");
        return k.attrs.type === void 0 && (k.attrs.type = "text/css"), q(m, k.attrs), O(k, m), m;
      }
      function q(k, m) {
        Object.keys(m).forEach(function(w) {
          k.setAttribute(w, m[w]);
        });
      }
      function F(k, m) {
        var w, x, I, C;
        if (m.transform && k.css) {
          if (!(C = m.transform(k.css)))
            return function() {
            };
          k.css = C;
        }
        if (m.singleton) {
          var N = h++;
          w = d || (d = M(m)), x = ie.bind(null, w, N, !1), I = ie.bind(null, w, N, !0);
        } else
          k.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (w = function(B) {
            var W = document.createElement("link");
            return B.attrs.type === void 0 && (B.attrs.type = "text/css"), B.attrs.rel = "stylesheet", q(W, B.attrs), O(B, W), W;
          }(m), x = (function(B, W, ve) {
            var se = ve.css, tt = ve.sourceMap, Yn = W.convertToAbsoluteUrls === void 0 && tt;
            (W.convertToAbsoluteUrls || Yn) && (se = g(se)), tt && (se += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(tt)))) + " */");
            var Kn = new Blob([se], { type: "text/css" }), ko = B.href;
            B.href = URL.createObjectURL(Kn), ko && URL.revokeObjectURL(ko);
          }).bind(null, w, m), I = function() {
            T(w), w.href && URL.revokeObjectURL(w.href);
          }) : (w = M(m), x = (function(B, W) {
            var ve = W.css, se = W.media;
            if (se && B.setAttribute("media", se), B.styleSheet)
              B.styleSheet.cssText = ve;
            else {
              for (; B.firstChild; )
                B.removeChild(B.firstChild);
              B.appendChild(document.createTextNode(ve));
            }
          }).bind(null, w), I = function() {
            T(w);
          });
        return x(k), function(B) {
          if (B) {
            if (B.css === k.css && B.media === k.media && B.sourceMap === k.sourceMap)
              return;
            x(k = B);
          } else
            I();
        };
      }
      t.exports = function(k, m) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (m = m || {}).attrs = typeof m.attrs == "object" ? m.attrs : {}, m.singleton || typeof m.singleton == "boolean" || (m.singleton = l()), m.insertInto || (m.insertInto = "head"), m.insertAt || (m.insertAt = "bottom");
        var w = v(k, m);
        return f(w, m), function(x) {
          for (var I = [], C = 0; C < w.length; C++) {
            var N = w[C];
            (B = a[N.id]).refs--, I.push(B);
          }
          for (x && f(v(x, m), m), C = 0; C < I.length; C++) {
            var B;
            if ((B = I[C]).refs === 0) {
              for (var W = 0; W < B.parts.length; W++)
                B.parts[W]();
              delete a[B.id];
            }
          }
        };
      };
      var H, Q = (H = [], function(k, m) {
        return H[k] = m, H.filter(Boolean).join(`
`);
      });
      function ie(k, m, w, x) {
        var I = w ? "" : x.css;
        if (k.styleSheet)
          k.styleSheet.cssText = Q(m, I);
        else {
          var C = document.createTextNode(I), N = k.childNodes;
          N[m] && k.removeChild(N[m]), N.length ? k.insertBefore(C, N[m]) : k.appendChild(C);
        }
      }
    }, function(t, o) {
      t.exports = function(i) {
        var s = typeof window < "u" && window.location;
        if (!s)
          throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string")
          return i;
        var r = s.protocol + "//" + s.host, a = r + s.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l, c) {
          var d, h = c.trim().replace(/^"(.*)"$/, function(p, g) {
            return g;
          }).replace(/^'(.*)'$/, function(p, g) {
            return g;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (d = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : a + h.replace(/^\.\//, ""), "url(" + JSON.stringify(d) + ")");
        });
      };
    }, function(t, o, i) {
      var s, r, a, l, c, d, h, p, g;
      t.exports = (s = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", d = "cdx-notify__input", h = "cdx-notify__button", p = "cdx-notify__btns-wrapper", { alert: g = function(f) {
        var v = document.createElement("DIV"), O = document.createElement("DIV"), T = f.message, M = f.style;
        return v.classList.add(r), M && v.classList.add(r + "--" + M), v.innerHTML = T, O.classList.add(a), O.addEventListener("click", v.remove.bind(v)), v.appendChild(O), v;
      }, confirm: function(f) {
        var v = g(f), O = document.createElement("div"), T = document.createElement("button"), M = document.createElement("button"), q = v.querySelector("." + a), F = f.cancelHandler, H = f.okHandler;
        return O.classList.add(p), T.innerHTML = f.okText || "Confirm", M.innerHTML = f.cancelText || "Cancel", T.classList.add(h), M.classList.add(h), T.classList.add(l), M.classList.add(c), F && typeof F == "function" && (M.addEventListener("click", F), q.addEventListener("click", F)), H && typeof H == "function" && T.addEventListener("click", H), T.addEventListener("click", v.remove.bind(v)), M.addEventListener("click", v.remove.bind(v)), O.appendChild(T), O.appendChild(M), v.appendChild(O), v;
      }, prompt: function(f) {
        var v = g(f), O = document.createElement("div"), T = document.createElement("button"), M = document.createElement("input"), q = v.querySelector("." + a), F = f.cancelHandler, H = f.okHandler;
        return O.classList.add(p), T.innerHTML = f.okText || "Ok", T.classList.add(h), T.classList.add(l), M.classList.add(d), f.placeholder && M.setAttribute("placeholder", f.placeholder), f.default && (M.value = f.default), f.inputType && (M.type = f.inputType), F && typeof F == "function" && q.addEventListener("click", F), H && typeof H == "function" && T.addEventListener("click", function() {
          H(M.value);
        }), T.addEventListener("click", v.remove.bind(v)), O.appendChild(M), O.appendChild(T), v.appendChild(O), v;
      }, getWrapper: function() {
        var f = document.createElement("DIV");
        return f.classList.add(s), f;
      } });
    }]);
  });
})(Ko);
var Ei = Ko.exports;
const xi = /* @__PURE__ */ Ke(Ei);
class Bi {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    xi.show(e);
  }
}
class Ci extends E {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new Bi();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class Ti extends E {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var Xo = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(Ce, function() {
    function t(h) {
      var p = h.tags, g = Object.keys(p), f = g.map(function(v) {
        return typeof p[v];
      }).every(function(v) {
        return v === "object" || v === "boolean" || v === "function";
      });
      if (!f)
        throw new Error("The configuration was invalid");
      this.config = h;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(h) {
      return o.indexOf(h.nodeName) !== -1;
    }
    var s = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function r(h) {
      return s.indexOf(h.nodeName) !== -1;
    }
    t.prototype.clean = function(h) {
      const p = document.implementation.createHTMLDocument(), g = p.createElement("div");
      return g.innerHTML = h, this._sanitize(p, g), g.innerHTML;
    }, t.prototype._sanitize = function(h, p) {
      var g = a(h, p), f = g.firstChild();
      if (f)
        do {
          if (f.nodeType === Node.TEXT_NODE)
            if (f.data.trim() === "" && (f.previousElementSibling && i(f.previousElementSibling) || f.nextElementSibling && i(f.nextElementSibling))) {
              p.removeChild(f), this._sanitize(h, p);
              break;
            } else
              continue;
          if (f.nodeType === Node.COMMENT_NODE) {
            p.removeChild(f), this._sanitize(h, p);
            break;
          }
          var v = r(f), O;
          v && (O = Array.prototype.some.call(f.childNodes, i));
          var T = !!p.parentNode, M = i(p) && i(f) && T, q = f.nodeName.toLowerCase(), F = l(this.config, q, f), H = v && O;
          if (H || c(f, F) || !this.config.keepNestedBlockElements && M) {
            if (!(f.nodeName === "SCRIPT" || f.nodeName === "STYLE"))
              for (; f.childNodes.length > 0; )
                p.insertBefore(f.childNodes[0], f);
            p.removeChild(f), this._sanitize(h, p);
            break;
          }
          for (var Q = 0; Q < f.attributes.length; Q += 1) {
            var ie = f.attributes[Q];
            d(ie, F, f) && (f.removeAttribute(ie.name), Q = Q - 1);
          }
          this._sanitize(h, f);
        } while (f = g.nextSibling());
    };
    function a(h, p) {
      return h.createTreeWalker(
        p,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function l(h, p, g) {
      return typeof h.tags[p] == "function" ? h.tags[p](g) : h.tags[p];
    }
    function c(h, p) {
      return typeof p > "u" ? !0 : typeof p == "boolean" ? !p : !1;
    }
    function d(h, p, g) {
      var f = h.name.toLowerCase();
      return p === !0 ? !1 : typeof p[f] == "function" ? !p[f](h.value, g) : typeof p[f] > "u" || p[f] === !1 ? !0 : typeof p[f] == "string" ? p[f] !== h.value : !1;
    }
    return t;
  });
})(Xo);
var Si = Xo.exports;
const Ii = /* @__PURE__ */ Ke(Si);
function yt(n, e) {
  return n.map((t) => {
    const o = A(e) ? e(t.tool) : e;
    return V(o) || (t.data = wt(t.data, o)), t;
  });
}
function Z(n, e = {}) {
  const t = {
    tags: e
  };
  return new Ii(t).clean(n);
}
function wt(n, e) {
  return Array.isArray(n) ? Oi(n, e) : D(n) ? _i(n, e) : te(n) ? Mi(n, e) : n;
}
function Oi(n, e) {
  return n.map((t) => wt(t, e));
}
function _i(n, e) {
  const t = {};
  for (const o in n) {
    if (!Object.prototype.hasOwnProperty.call(n, o))
      continue;
    const i = n[o], s = Ai(e[o]) ? e[o] : e;
    t[o] = wt(i, s);
  }
  return t;
}
function Mi(n, e) {
  return D(e) ? Z(n, e) : e === !1 ? Z(n, {}) : n;
}
function Ai(n) {
  return D(n) || Gn(n) || A(n);
}
class Li extends E {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return Z(e, t);
  }
}
class Pi extends E {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (X(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class Ni extends E {
  constructor() {
    super(...arguments), this.selectionUtils = new b();
  }
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e),
      save: () => this.selectionUtils.save(),
      restore: () => this.selectionUtils.restore(),
      setFakeBackground: () => this.selectionUtils.setFakeBackground(),
      removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return this.selectionUtils.findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    this.selectionUtils.expandToTag(e);
  }
}
class Ri extends E {
  /**
   * Available methods
   */
  get methods() {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
    };
  }
}
class Di extends E {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class Fi extends E {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      X("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      X("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var Vo = { exports: {} };
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var l in s)
            i.d(a, l, (function(c) {
              return s[c];
            }).bind(null, l));
        return a;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      t.exports = i(1);
    }, function(t, o, i) {
      i.r(o), i.d(o, "default", function() {
        return s;
      });
      class s {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, l, c) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const d = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c);
          if (d.hidingDelay && (this.hidingDelay = d.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string")
            this.nodes.content.appendChild(document.createTextNode(l));
          else {
            if (!(l instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof l + " given.");
            this.nodes.content.appendChild(l);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), d.placement) {
            case "top":
              this.placeTop(a, d);
              break;
            case "left":
              this.placeLeft(a, d);
              break;
            case "right":
              this.placeRight(a, d);
              break;
            case "bottom":
            default:
              this.placeBottom(a, d);
          }
          d && d.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, d.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(a = !1) {
          if (this.hidingDelay && !a)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, l, c) {
          a.addEventListener("mouseenter", () => {
            this.show(a, l, c);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a))
            return;
          const l = i(2), c = this.make("style", null, { textContent: l.toString(), id: a });
          this.prepend(document.head, c);
        }
        placeBottom(a, l) {
          const c = a.getBoundingClientRect(), d = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
          this.applyPlacement("bottom", d, h);
        }
        placeTop(a, l) {
          const c = a.getBoundingClientRect(), d = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", d, h);
        }
        placeLeft(a, l) {
          const c = a.getBoundingClientRect(), d = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", d, h);
        }
        placeRight(a, l) {
          const c = a.getBoundingClientRect(), d = c.right + this.offsetRight + l.marginRight, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", d, h);
        }
        applyPlacement(a, l, c) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = c + "px";
        }
        make(a, l = null, c = {}) {
          const d = document.createElement(a);
          Array.isArray(l) ? d.classList.add(...l) : l && d.classList.add(l);
          for (const h in c)
            c.hasOwnProperty(h) && (d[h] = c[h]);
          return d;
        }
        append(a, l) {
          Array.isArray(l) ? l.forEach((c) => a.appendChild(c)) : a.appendChild(l);
        }
        prepend(a, l) {
          Array.isArray(l) ? (l = l.reverse()).forEach((c) => a.prepend(c)) : a.prepend(l);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(Vo);
var ji = Vo.exports;
const Hi = /* @__PURE__ */ Ke(ji);
let U = null;
function Et() {
  U || (U = new Hi());
}
function $i(n, e, t) {
  Et(), U == null || U.show(n, e, t);
}
function $e(n = !1) {
  Et(), U == null || U.hide(n);
}
function ze(n, e, t) {
  Et(), U == null || U.onHover(n, e, t);
}
function zi() {
  U == null || U.destroy(), U = null;
}
class Ui extends E {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    });
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o) {
    $i(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    $e();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    ze(e, t, o);
  }
}
class Wi extends E {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function qo(n, e) {
  const t = {};
  return Object.entries(n).forEach(([o, i]) => {
    if (D(i)) {
      const s = e ? `${e}.${o}` : o;
      Object.values(i).every((a) => te(a)) ? t[o] = s : t[o] = qo(i, s);
      return;
    }
    t[o] = i;
  }), t;
}
const K = qo(Fo);
function Yi(n, e) {
  const t = {};
  return Object.keys(n).forEach((o) => {
    const i = e[o];
    i !== void 0 ? t[i] = n[o] : t[o] = n[o];
  }), t;
}
const Zo = class Ee {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(e, t) {
    this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(e) {
    e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(e) {
    this.items = e;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(Ee.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(Ee.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0)
      return this.cursor;
    let t = this.cursor;
    return t === -1 ? t = e === Ee.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === Ee.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, u.canSetCaret(this.items[t]) && Fe(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
  }
};
Zo.directions = {
  RIGHT: "right",
  LEFT: "left"
};
let ke = Zo;
class ce {
  /**
   * @param options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (!(!this.isEventReadyForHandling(t) || t.shiftKey === !0))
        switch (ce.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case y.TAB:
            this.handleTabPress(t);
            break;
          case y.LEFT:
          case y.UP:
            this.flipLeft();
            break;
          case y.RIGHT:
          case y.DOWN:
            this.flipRight();
            break;
          case y.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new ke(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || ce.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      y.TAB,
      y.LEFT,
      y.RIGHT,
      y.ENTER,
      y.UP,
      y.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? ke.directions.LEFT : ke.directions.RIGHT) {
      case ke.directions.RIGHT:
        this.flipRight();
        break;
      case ke.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), A(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
const Ki = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', Xi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', Vi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>', qi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>', Zi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', Gi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Qi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Ji = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', Co = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', es = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', ts = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', Go = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>', os = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', ns = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', is = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>', ss = "__", rs = "--";
function ne(n) {
  return (e, t) => [[n, e].filter((i) => !!i).join(ss), t].filter((i) => !!i).join(rs);
}
const ye = ne("ce-hint"), we = {
  root: ye(),
  alignedStart: ye(null, "align-left"),
  alignedCenter: ye(null, "align-center"),
  title: ye("title"),
  description: ye("description")
};
class as {
  /**
   * Constructs the hint content instance
   *
   * @param params - hint content parameters
   */
  constructor(e) {
    this.nodes = {
      root: u.make("div", [we.root, e.alignment === "center" ? we.alignedCenter : we.alignedStart]),
      title: u.make("div", we.title, { textContent: e.title })
    }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = u.make("div", we.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
  }
  /**
   * Returns the root element of the hint content
   */
  getElement() {
    return this.nodes.root;
  }
}
class xt {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    this.params = e;
  }
  /**
   * Item name if exists
   */
  get name() {
    if (this.params !== void 0 && "name" in this.params)
      return this.params.name;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    $e();
  }
  /**
   * Called when children popover is opened (if exists)
   */
  onChildrenOpen() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
  }
  /**
   * Called when children popover is closed (if exists)
   */
  onChildrenClose() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    var e, t;
    this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
  }
  /**
   * Adds hint to the item element if hint data is provided
   *
   * @param itemElement - popover item root element to add hint to
   * @param hintData - hint data
   */
  addHint(e, t) {
    const o = new as(t);
    ze(e, o.getElement(), {
      placement: t.position,
      hidingDelay: 100
    });
  }
  /**
   * Returns item children that are represented as popover items
   */
  get children() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
  }
  /**
   * Returns true if item has any type of children
   */
  get hasChildren() {
    return this.children.length > 0;
  }
  /**
   * Returns true if item children should be open instantly after popover is opened and not on item click/hover
   */
  get isChildrenOpen() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === !0;
  }
  /**
   * True if item children items should be navigatable via keyboard
   */
  get isChildrenFlippable() {
    var e;
    return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === !1);
  }
  /**
   * Returns true if item has children that should be searchable
   */
  get isChildrenSearchable() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === !0;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
  }
  /**
   * True if item is active
   */
  get isActive() {
    return this.params === void 0 || !("isActive" in this.params) ? !1 : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === !0;
  }
}
const Y = ne("ce-popover-item"), L = {
  container: Y(),
  active: Y(null, "active"),
  disabled: Y(null, "disabled"),
  focused: Y(null, "focused"),
  hidden: Y(null, "hidden"),
  confirmationState: Y(null, "confirmation"),
  noHover: Y(null, "no-hover"),
  noFocus: Y(null, "no-focus"),
  title: Y("title"),
  secondaryTitle: Y("secondary-title"),
  icon: Y("icon"),
  iconTool: Y("icon", "tool"),
  iconChevronRight: Y("icon", "chevron-right"),
  wobbleAnimation: ne("wobble")()
};
class re extends xt {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   * @param renderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e), this.params = e, this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(L.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(L.noHover);
    }, this.onErrorAnimationEnd = () => {
      var o, i;
      (o = this.nodes.icon) == null || o.classList.remove(L.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.nodes.root = this.make(e, t);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled === !0;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root === null ? !1 : this.nodes.root.classList.contains(L.focused);
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(L.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(L.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   * @param renderParams - popover item render params
   */
  make(e, t) {
    var s, r;
    const o = (t == null ? void 0 : t.wrapperTag) || "div", i = u.make(o, L.container, {
      type: o === "button" ? "button" : void 0
    });
    return e.name && (i.dataset.itemName = e.name), this.nodes.icon = u.make("div", [L.icon, L.iconTool], {
      innerHTML: e.icon || Qi
    }), i.appendChild(this.nodes.icon), e.title !== void 0 && i.appendChild(u.make("div", L.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && i.appendChild(u.make("div", L.secondaryTitle, {
      textContent: e.secondaryLabel
    })), this.hasChildren && i.appendChild(u.make("div", [L.icon, L.iconChevronRight], {
      innerHTML: qi
    })), this.isActive && i.classList.add(L.active), e.isDisabled && i.classList.add(L.disabled), e.hint !== void 0 && ((s = t == null ? void 0 : t.hint) == null ? void 0 : s.enabled) !== !1 && this.addHint(i, {
      ...e.hint,
      position: ((r = t == null ? void 0 : t.hint) == null ? void 0 : r.position) || "right"
    }), i;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    if (this.nodes.root === null)
      return;
    const t = {
      ...this.params,
      ...e,
      confirmation: "confirmation" in e ? e.confirmation : void 0
    }, o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(L.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    if (this.nodes.root === null)
      return;
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(L.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    var e, t, o;
    (e = this.nodes.root) == null || e.classList.add(L.noHover), (t = this.nodes.root) == null || t.classList.add(L.noFocus), (o = this.nodes.root) == null || o.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    var e;
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    var t;
    if (!("confirmation" in e) || e.confirmation === void 0)
      try {
        (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    var e, t, o;
    (e = this.nodes.icon) != null && e.classList.contains(L.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(L.wobbleAnimation), (o = this.nodes.icon) == null || o.addEventListener("animationend", this.onErrorAnimationEnd));
  }
}
const nt = ne("ce-popover-item-separator"), it = {
  container: nt(),
  line: nt("line"),
  hidden: nt(null, "hidden")
};
class Qo extends xt {
  /**
   * Constructs the instance
   */
  constructor() {
    super(), this.nodes = {
      root: u.make("div", it.container),
      line: u.make("div", it.line)
    }, this.nodes.root.appendChild(this.nodes.line);
  }
  /**
   * Returns popover separator root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(it.hidden, e);
  }
}
var G = /* @__PURE__ */ ((n) => (n.Closed = "closed", n.ClosedOnActivate = "closed-on-activate", n))(G || {});
const $ = ne("ce-popover"), P = {
  popover: $(),
  popoverContainer: $("container"),
  popoverOpenTop: $(null, "open-top"),
  popoverOpenLeft: $(null, "open-left"),
  popoverOpened: $(null, "opened"),
  search: $("search"),
  nothingFoundMessage: $("nothing-found-message"),
  nothingFoundMessageDisplayed: $("nothing-found-message", "displayed"),
  items: $("items"),
  overlay: $("overlay"),
  overlayHidden: $("overlay", "hidden"),
  popoverNested: $(null, "nested"),
  getPopoverNestedClass: (n) => $(null, `nested-level-${n.toString()}`),
  popoverInline: $(null, "inline"),
  popoverHeader: $("header")
};
var fe = /* @__PURE__ */ ((n) => (n.NestingLevel = "--nesting-level", n.PopoverHeight = "--popover-height", n.InlinePopoverWidth = "--inline-popover-width", n.TriggerItemLeft = "--trigger-item-left", n.TriggerItemTop = "--trigger-item-top", n))(fe || {});
const To = ne("ce-popover-item-html"), So = {
  root: To(),
  hidden: To(null, "hidden")
};
class Se extends xt {
  /**
   * Constructs the instance
   *
   * @param params – instance parameters
   * @param renderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    var o, i;
    super(e), this.nodes = {
      root: u.make("div", So.root)
    }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o = t == null ? void 0 : t.hint) == null ? void 0 : o.enabled) !== !1 && this.addHint(this.nodes.root, {
      ...e.hint,
      position: ((i = t == null ? void 0 : t.hint) == null ? void 0 : i.position) || "right"
    });
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(So.hidden, e);
  }
  /**
   * Returns list of buttons and inputs inside custom content
   */
  getControls() {
    const e = this.nodes.root.querySelectorAll(
      `button, ${u.allInputsSelector}`
    );
    return Array.from(e);
  }
}
class Jo extends Oe {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   * @param itemsRenderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t = {}) {
    super(), this.params = e, this.itemsRenderParams = t, this.listeners = new _e(), this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
      ...this.messages,
      ...e.messages
    }), this.nodes = {}, this.nodes.popoverContainer = u.make("div", [P.popoverContainer]), this.nodes.nothingFoundMessage = u.make("div", [P.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = u.make("div", [P.items]), this.items.forEach((o) => {
      const i = o.getElement();
      i !== null && this.nodes.items.appendChild(i);
    }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o) => this.handleClick(o)), this.nodes.popover = u.make("div", [
      P.popover,
      this.params.class
    ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
  }
  /**
   * List of default popover items that are searchable and may have confirmation state
   */
  get itemsDefault() {
    return this.items.filter((e) => e instanceof re);
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.popover;
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.popover.classList.add(P.popoverOpened), this.search !== void 0 && this.search.focus();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(P.popoverOpened), this.nodes.popover.classList.remove(P.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(G.Closed);
  }
  /**
   * Clears memory
   */
  destroy() {
    var e;
    this.items.forEach((t) => t.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
  }
  /**
   * Looks for the item by name and imitates click on it
   *
   * @param name - name of the item to activate
   */
  activateItemByName(e) {
    const t = this.items.find((o) => o.name === e);
    this.handleItemClick(t);
  }
  /**
   * Factory method for creating popover items
   *
   * @param items - list of items params
   */
  buildItems(e) {
    return e.map((t) => {
      switch (t.type) {
        case _.Separator:
          return new Qo();
        case _.Html:
          return new Se(t, this.itemsRenderParams[_.Html]);
        default:
          return new re(t, this.itemsRenderParams[_.Default]);
      }
    });
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(e) {
    return this.items.filter((t) => t instanceof re || t instanceof Se).find((t) => {
      const o = t.getElement();
      return o === null ? !1 : e.composedPath().includes(o);
    });
  }
  /**
   * Handles popover item click
   *
   * @param item - item to handle click of
   */
  handleItemClick(e) {
    if (!("isDisabled" in e && e.isDisabled)) {
      if (e.hasChildren) {
        this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
        return;
      }
      this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(G.ClosedOnActivate));
    }
  }
  /**
   * Handles clicks inside popover
   *
   * @param event - item to handle click of
   */
  handleClick(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.handleItemClick(t);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(e) {
    if (e instanceof re && (e.toggle === !0 && e.toggleActive(), typeof e.toggle == "string")) {
      const t = this.itemsDefault.filter((o) => o.toggle === e.toggle);
      if (t.length === 1) {
        e.toggleActive();
        return;
      }
      t.forEach((o) => {
        o.toggleActive(o === e);
      });
    }
  }
}
var Ue = /* @__PURE__ */ ((n) => (n.Search = "search", n))(Ue || {});
const st = ne("cdx-search-field"), rt = {
  wrapper: st(),
  icon: st("icon"),
  input: st("input")
};
class ls extends Oe {
  /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.placeholder - input placeholder
   */
  constructor({ items: e, placeholder: t }) {
    super(), this.listeners = new _e(), this.items = e, this.wrapper = u.make("div", rt.wrapper);
    const o = u.make("div", rt.icon, {
      innerHTML: os
    });
    this.input = u.make("input", rt.input, {
      placeholder: t,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1
    }), this.wrapper.appendChild(o), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.emit(Ue.Search, {
        query: this.searchQuery,
        items: this.foundItems
      });
    });
  }
  /**
   * Returns search field element
   */
  getElement() {
    return this.wrapper;
  }
  /**
   * Sets focus to the input
   */
  focus() {
    this.input.focus();
  }
  /**
   * Clears search query and results
   */
  clear() {
    this.input.value = "", this.searchQuery = "", this.emit(Ue.Search, {
      query: "",
      items: this.foundItems
    });
  }
  /**
   * Clears memory
   */
  destroy() {
    this.listeners.removeAll();
  }
  /**
   * Returns list of found items for the current search query
   */
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */
  checkItem(e) {
    var i, s;
    const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o = (s = this.searchQuery) == null ? void 0 : s.toLowerCase();
    return o !== void 0 ? t.includes(o) : !1;
  }
}
var cs = Object.defineProperty, ds = Object.getOwnPropertyDescriptor, us = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? ds(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && cs(e, t, i), i;
};
const en = class tn extends Jo {
  /**
   * Construct the instance
   *
   * @param params - popover params
   * @param itemsRenderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
      var o;
      super.hide(), this.destroyNestedPopoverIfExists(), (o = this.flipper) == null || o.deactivate(), this.previouslyHoveredItem = null;
    }, this.onFlip = () => {
      const o = this.itemsDefault.find((i) => i.isFocused);
      o == null || o.onFocus();
    }, this.onSearch = (o) => {
      var a;
      const i = o.query === "", s = o.items.length === 0;
      this.items.forEach((l) => {
        let c = !1;
        l instanceof re ? c = !o.items.includes(l) : (l instanceof Qo || l instanceof Se) && (c = s || !i), l.toggleHidden(c);
      }), this.toggleNothingFoundMessage(s);
      const r = o.query === "" ? this.flippableElements : o.items.map((l) => l.getElement());
      (a = this.flipper) != null && a.isActivated && (this.flipper.deactivate(), this.flipper.activate(r));
    }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(P.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o) => this.handleHover(o)), e.searchable && this.addSearch(), e.flippable !== !1 && (this.flipper = new ce({
      items: this.flippableElements,
      focusedItemClass: L.focused,
      allowedKeys: [
        y.TAB,
        y.UP,
        y.DOWN,
        y.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip));
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper === void 0 ? !1 : this.flipper.hasFocus();
  }
  /**
   * Scroll position inside items container of the popover
   */
  get scrollTop() {
    return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
  }
  /**
   * Returns visible element offset top
   */
  get offsetTop() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
  }
  /**
   * Open popover
   */
  show() {
    var e;
    this.nodes.popover.style.setProperty(fe.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(P.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(P.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.hide(), super.destroy();
  }
  /**
   * Handles displaying nested items for the item.
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
  }
  /**
   * Handles hover events inside popover items container
   *
   * @param event - hover event data
   */
  handleHover(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used for correct positioning of the nested popover
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o = t.getElement(), i = (o ? o.offsetTop : 0) - this.scrollTop, s = this.offsetTop + i;
    e.style.setProperty(fe.TriggerItemTop, s + "px");
  }
  /**
   * Destroys existing nested popover
   */
  destroyNestedPopoverIfExists() {
    var e, t;
    this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(G.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    var o;
    this.nestedPopover = new tn({
      searchable: e.isChildrenSearchable,
      items: e.children,
      nestingLevel: this.nestingLevel + 1,
      flippable: e.isChildrenFlippable,
      messages: this.messages
    }), e.onChildrenOpen(), this.nestedPopover.on(G.ClosedOnActivate, this.hide);
    const t = this.nestedPopover.getElement();
    return this.nodes.popover.appendChild(t), this.setTriggerItemPosition(t, e), t.style.setProperty(fe.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o = this.flipper) == null || o.deactivate(), this.nestedPopover;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popoverContainer.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.size.height, i = e.top + o, s = e.top - o, r = Math.min(window.innerHeight, t.bottom);
    return s < t.top || i <= r;
  }
  /**
   * Checks if popover should be opened left.
   * It should happen when there is enough space in the right or not enough space in the left
   */
  get shouldOpenRight() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.size.width, i = e.right + o, s = e.left - o, r = Math.min(window.innerWidth, t.right);
    return s < t.left || i <= r;
  }
  get size() {
    var i;
    const e = {
      height: 0,
      width: 0
    };
    if (this.nodes.popover === null)
      return e;
    const t = this.nodes.popover.cloneNode(!0);
    t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(P.popoverOpened), (i = t.querySelector("." + P.popoverNested)) == null || i.remove(), document.body.appendChild(t);
    const o = t.querySelector("." + P.popoverContainer);
    return e.height = o.offsetHeight, e.width = o.offsetWidth, t.remove(), e;
  }
  /**
   * Returns list of elements available for keyboard navigation.
   */
  get flippableElements() {
    return this.items.map((t) => {
      if (t instanceof re)
        return t.getElement();
      if (t instanceof Se)
        return t.getControls();
    }).flat().filter((t) => t != null);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new ls({
      items: this.itemsDefault,
      placeholder: this.messages.search
    }), this.search.on(Ue.Search, this.onSearch);
    const e = this.search.getElement();
    e.classList.add(P.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(e) {
    this.nodes.nothingFoundMessage.classList.toggle(P.nothingFoundMessageDisplayed, e);
  }
};
us([
  me
], en.prototype, "size", 1);
let Bt = en;
class hs extends Bt {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    const t = !be();
    super(
      {
        ...e,
        class: P.popoverInline
      },
      {
        [_.Default]: {
          /**
           * We use button instead of div here to fix bug associated with focus loss (which leads to selection change) on click in safari
           *
           * @todo figure out better way to solve the issue
           */
          wrapperTag: "button",
          hint: {
            position: "top",
            alignment: "center",
            enabled: t
          }
        },
        [_.Html]: {
          hint: {
            position: "top",
            alignment: "center",
            enabled: t
          }
        }
      }
    ), this.items.forEach((o) => {
      !(o instanceof re) && !(o instanceof Se) || o.hasChildren && o.isChildrenOpen && this.showNestedItems(o);
    });
  }
  /**
   * Returns visible element offset top
   */
  get offsetLeft() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
  }
  /**
   * Open popover
   */
  show() {
    this.nestingLevel === 0 && this.nodes.popover.style.setProperty(
      fe.InlinePopoverWidth,
      this.size.width + "px"
    ), super.show();
  }
  /**
   * Disable hover event handling.
   * Overrides parent's class behavior
   */
  handleHover() {
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used to position nested popover right below clicked item
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o = t.getElement(), i = o ? o.offsetLeft : 0, s = this.offsetLeft + i;
    e.style.setProperty(
      fe.TriggerItemLeft,
      s + "px"
    );
  }
  /**
   * Handles displaying nested items for the item.
   * Overriding in order to add toggling behaviour
   *
   * @param item – item to toggle nested popover for
   */
  showNestedItems(e) {
    if (this.nestedPopoverTriggerItem === e) {
      this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
      return;
    }
    super.showNestedItems(e);
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    const t = super.showNestedPopoverForItem(e);
    return t.getElement().classList.add(P.getPopoverNestedClass(t.nestingLevel)), t;
  }
  /**
   * Overrides default item click handling.
   * Helps to close nested popover once other item is clicked.
   *
   * @param item - clicked item
   */
  handleItemClick(e) {
    var t;
    e !== this.nestedPopoverTriggerItem && ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
  }
}
const on = class xe {
  constructor() {
    this.scrollPosition = null;
  }
  /**
   * Locks body element scroll
   */
  lock() {
    pt ? this.lockHard() : document.body.classList.add(xe.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    pt ? this.unlockHard() : document.body.classList.remove(xe.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(xe.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(xe.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
on.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
let ps = on;
const at = ne("ce-popover-header"), lt = {
  root: at(),
  text: at("text"),
  backButton: at("back-button")
};
class fs {
  /**
   * Constructs the instance
   *
   * @param params - popover header params
   */
  constructor({ text: e, onBackButtonClick: t }) {
    this.listeners = new _e(), this.text = e, this.onBackButtonClick = t, this.nodes = {
      root: u.make("div", [lt.root]),
      backButton: u.make("button", [lt.backButton]),
      text: u.make("div", [lt.text])
    }, this.nodes.backButton.innerHTML = Vi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
  }
  /**
   * Returns popover header root html element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    this.nodes.root.remove(), this.listeners.destroy();
  }
}
class gs {
  constructor() {
    this.history = [];
  }
  /**
   * Push new popover state
   *
   * @param state - new state
   */
  push(e) {
    this.history.push(e);
  }
  /**
   * Pop last popover state
   */
  pop() {
    return this.history.pop();
  }
  /**
   * Title retrieved from the current state
   */
  get currentTitle() {
    return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
  }
  /**
   * Items list retrieved from the current state
   */
  get currentItems() {
    return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
  }
  /**
   * Returns history to initial popover state
   */
  reset() {
    for (; this.history.length > 1; )
      this.pop();
  }
}
class nn extends Jo {
  /**
   * Construct the instance
   *
   * @param params - popover params
   */
  constructor(e) {
    super(e, {
      [_.Default]: {
        hint: {
          enabled: !1
        }
      },
      [_.Html]: {
        hint: {
          enabled: !1
        }
      }
    }), this.scrollLocker = new ps(), this.history = new gs(), this.isHidden = !0, this.nodes.overlay = u.make("div", [P.overlay, P.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.history.push({ items: e.items });
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.overlay.classList.remove(P.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = !1;
  }
  /**
   * Closes popover
   */
  hide() {
    this.isHidden || (super.hide(), this.nodes.overlay.classList.add(P.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = !0);
  }
  /**
   * Clears memory
   */
  destroy() {
    super.destroy(), this.scrollLocker.unlock();
  }
  /**
   * Handles displaying nested items for the item
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.updateItemsAndHeader(e.children, e.title), this.history.push({
      title: e.title,
      items: e.children
    });
  }
  /**
   * Removes rendered popover items and header and displays new ones
   *
   * @param items - new popover items
   * @param title - new popover header text
   */
  updateItemsAndHeader(e, t) {
    if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
      this.header = new fs({
        text: t,
        onBackButtonClick: () => {
          this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
        }
      });
      const o = this.header.getElement();
      o !== null && this.nodes.popoverContainer.insertBefore(o, this.nodes.popoverContainer.firstChild);
    }
    this.items.forEach((o) => {
      var i;
      return (i = o.getElement()) == null ? void 0 : i.remove();
    }), this.items = this.buildItems(e), this.items.forEach((o) => {
      var s;
      const i = o.getElement();
      i !== null && ((s = this.nodes.items) == null || s.appendChild(i));
    });
  }
}
class ms extends E {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new b(), this.popover = null, this.close = () => {
      this.opened && (this.opened = !1, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(G.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
    }, this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    if (this.popover !== null)
      return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = u.make("div", [this.CSS.settings]), this.eventsDispatcher.on(Te, this.close);
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes(), this.listeners.destroy(), this.eventsDispatcher.off(Te, this.close);
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  async open(e = this.Editor.BlockManager.currentBlock) {
    var s;
    this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const { toolTunes: t, commonTunes: o } = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened);
    const i = be() ? nn : Bt;
    this.popover = new i({
      searchable: !0,
      items: await this.getTunesItems(e, o, t),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: z.ui(K.ui.popover, "Nothing found"),
        search: z.ui(K.ui.popover, "Filter")
      }
    }), this.popover.on(G.Closed, this.onPopoverClose), (s = this.nodes.wrapper) == null || s.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns list of items to be displayed in block tunes menu.
   * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
   *
   * @param currentBlock –  block we are about to open block tunes for
   * @param commonTunes – common tunes
   * @param toolTunes - tool specific tunes
   */
  async getTunesItems(e, t, o) {
    const i = [];
    o !== void 0 && o.length > 0 && (i.push(...o), i.push({
      type: _.Separator
    }));
    const s = Array.from(this.Editor.Tools.blockTools.values()), a = (await Yo(e, s)).reduce((l, c) => (c.toolbox.forEach((d) => {
      l.push({
        icon: d.icon,
        title: z.t(K.toolNames, d.title),
        name: c.name,
        closeOnActivate: !0,
        onActivate: async () => {
          const { BlockManager: h, Caret: p, Toolbar: g } = this.Editor, f = await h.convert(e, c.name, d.data);
          g.close(), p.setToBlock(f, p.positions.END);
        }
      });
    }), l), []);
    return a.length > 0 && (i.push({
      icon: Go,
      name: "convert-to",
      title: z.ui(K.ui.popover, "Convert to"),
      children: {
        searchable: !0,
        items: a
      }
    }), i.push({
      type: _.Separator
    })), i.push(...t), i.map((l) => this.resolveTuneAliases(l));
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    if (e.type === _.Separator || e.type === _.Html)
      return e;
    const t = Yi(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
var sn = { exports: {} };
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var l in s)
            i.d(a, l, (function(c) {
              return s[c];
            }).bind(null, l));
        return a;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      function s(l, c) {
        for (var d = 0; d < c.length; d++) {
          var h = c[d];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
        }
      }
      function r(l, c, d) {
        return c && s(l.prototype, c), d && s(l, d), l;
      }
      i.r(o);
      var a = function() {
        function l(c) {
          var d = this;
          (function(h, p) {
            if (!(h instanceof p))
              throw new TypeError("Cannot call a class as a function");
          })(this, l), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function(h) {
            d.execute(h);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return r(l, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), r(l, [{ key: "parseShortcutName", value: function(c) {
          c = c.split("+");
          for (var d = 0; d < c.length; d++) {
            c[d] = c[d].toUpperCase();
            var h = !1;
            for (var p in l.supportedCommands)
              if (l.supportedCommands[p].includes(c[d])) {
                h = this.commands[p] = !0;
                break;
              }
            h || (this.keys[c[d]] = !0);
          }
          for (var g in l.supportedCommands)
            this.commands[g] || (this.commands[g] = !1);
        } }, { key: "execute", value: function(c) {
          var d, h = { CMD: c.ctrlKey || c.metaKey, SHIFT: c.shiftKey, ALT: c.altKey }, p = !0;
          for (d in this.commands)
            this.commands[d] !== h[d] && (p = !1);
          var g, f = !0;
          for (g in this.keys)
            f = f && c.keyCode === l.keyCodes[g];
          p && f && this.callback(c);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), l;
      }();
      o.default = a;
    }]).default;
  });
})(sn);
var bs = sn.exports;
const vs = /* @__PURE__ */ Ke(bs);
class ks {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const o = new vs({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), i = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...i, o]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o)
      return;
    o.remove();
    const s = this.registeredShortcuts.get(e).filter((r) => r !== o);
    if (s.length === 0) {
      this.registeredShortcuts.delete(e);
      return;
    }
    this.registeredShortcuts.set(e, s);
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === t);
  }
}
const ge = new ks();
var ys = Object.defineProperty, ws = Object.getOwnPropertyDescriptor, rn = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? ws(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && ys(e, t, i), i;
}, Le = /* @__PURE__ */ ((n) => (n.Opened = "toolbox-opened", n.Closed = "toolbox-closed", n.BlockAdded = "toolbox-block-added", n))(Le || {});
const Ct = class an extends Oe {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: e, tools: t, i18nLabels: o }) {
    super(), this.opened = !1, this.listeners = new _e(), this.popover = null, this.handleMobileLayoutToggle = () => {
      this.destroyPopover(), this.initPopover();
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = e, this.tools = t, this.i18nLabels = o, this.enableShortcuts(), this.nodes = {
      toolbox: u.make("div", an.CSS.toolbox)
    }, this.initPopover(), this.api.events.on(Te, this.handleMobileLayoutToggle);
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    if (this.popover !== null)
      return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
  }
  /**
   * Destroy Module
   */
  destroy() {
    var e;
    super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(G.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(Te, this.handleMobileLayoutToggle);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(e, t) {
    this.insertNewBlock(e, t);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var e;
    this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var e;
    (e = this.popover) == null || e.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  /**
   * Creates toolbox popover and appends it inside wrapper element
   */
  initPopover() {
    var t;
    const e = be() ? nn : Bt;
    this.popover = new e({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(G.Closed, this.onPopoverClose), (t = this.nodes.toolbox) == null || t.append(this.popover.getElement());
  }
  /**
   * Destroys popover instance and removes it from DOM
   */
  destroyPopover() {
    this.popover !== null && (this.popover.hide(), this.popover.off(G.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
  }
  get toolsToBeDisplayed() {
    const e = [];
    return this.tools.forEach((t) => {
      t.toolbox && e.push(t);
    }), e;
  }
  get toolboxItemsToBeDisplayed() {
    const e = (t, o, i = !0) => ({
      icon: t.icon,
      title: z.t(K.toolNames, t.title || je(o.name)),
      name: o.name,
      onActivate: () => {
        this.toolButtonActivated(o.name, t.data);
      },
      secondaryLabel: o.shortcut && i ? vt(o.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((t, o) => (Array.isArray(o.toolbox) ? o.toolbox.forEach((i, s) => {
      t.push(e(i, o, s === 0));
    }) : o.toolbox !== void 0 && t.push(e(o.toolbox, o)), t), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && this.enableShortcutForTool(e.name, t);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(e, t) {
    ge.add({
      name: t,
      on: this.api.ui.nodes.redactor,
      handler: async (o) => {
        o.preventDefault();
        const i = this.api.blocks.getCurrentBlockIndex(), s = this.api.blocks.getBlockByIndex(i);
        if (s)
          try {
            const r = await this.api.blocks.convert(s.id, e);
            this.api.caret.setToBlock(r, "end");
            return;
          } catch {
          }
        this.insertNewBlock(e);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && ge.remove(this.api.ui.nodes.redactor, t);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(e, t) {
    const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
    if (!i)
      return;
    const s = i.isEmpty ? o : o + 1;
    let r;
    if (t) {
      const l = await this.api.blocks.composeBlockData(e);
      r = Object.assign(l, t);
    }
    const a = this.api.blocks.insert(
      e,
      r,
      void 0,
      s,
      void 0,
      i.isEmpty
    );
    a.call(ee.APPEND_CALLBACK), this.api.caret.setToBlock(s), this.emit("toolbox-block-added", {
      block: a
    }), this.api.toolbar.close();
  }
};
rn([
  me
], Ct.prototype, "toolsToBeDisplayed", 1);
rn([
  me
], Ct.prototype, "toolboxItemsToBeDisplayed", 1);
let Es = Ct;
const ln = "block hovered";
async function xs(n, e) {
  const t = navigator.keyboard;
  if (!t)
    return e;
  try {
    return (await t.getLayoutMap()).get(n) || e;
  } catch (o) {
    return console.error(o), e;
  }
}
class Bs extends E {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null;
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          S("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          S("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
      show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, { timeout: 2e3 });
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      S("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI;
    let i;
    const s = 20, r = e.firstInput, a = t.getBoundingClientRect(), l = r !== void 0 ? r.getBoundingClientRect() : null, c = l !== null ? l.top - a.top : null, d = c !== null ? c > s : void 0;
    if (o)
      i = t.offsetTop + t.offsetHeight;
    else if (r === void 0 || d) {
      const h = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
      i = t.offsetTop + h;
    } else {
      const h = li(r), p = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10), g = 8;
      i = t.offsetTop + h - p + g + c;
    }
    this.nodes.wrapper.style.top = `${Math.floor(i)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  /**
   * Draws Toolbar elements
   */
  async make() {
    this.nodes.wrapper = u.make("div", this.CSS.toolbar), ["content", "actions"].forEach((s) => {
      this.nodes[s] = u.make("div", this.CSS[s]);
    }), u.append(this.nodes.wrapper, this.nodes.content), u.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.make("div", this.CSS.plusButton, {
      innerHTML: ts
    }), u.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      $e(!0), this.plusButtonClicked();
    }, !1);
    const e = u.make("div");
    e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(u.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), ze(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = u.make("span", this.CSS.settingsToggler, {
      innerHTML: es
    }), u.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = u.make("div"), o = u.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")), i = await xs("Slash", "/");
    t.appendChild(o), t.appendChild(u.make("div", this.CSS.plusButtonShortcut, {
      textContent: vt(`CMD + ${i}`)
    })), ze(this.nodes.settingsToggler, t, {
      hidingDelay: 400
    }), u.append(this.nodes.actions, this.makeToolbox()), u.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), u.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new Es({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: z.ui(K.ui.popover, "Filter"),
        nothingFound: z.ui(K.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(Le.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Le.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Le.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.getElement();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
      var t;
      e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), $e(!0);
    }, !0), be() || this.eventsDispatcher.on(ln, (e) => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
}
var ae = /* @__PURE__ */ ((n) => (n[n.Block = 0] = "Block", n[n.Inline = 1] = "Inline", n[n.Tune = 2] = "Tune", n))(ae || {}), Pe = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.Toolbox = "toolbox", n.EnabledInlineTools = "inlineToolbar", n.EnabledBlockTunes = "tunes", n.Config = "config", n))(Pe || {}), cn = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.SanitizeConfig = "sanitize", n))(cn || {}), pe = /* @__PURE__ */ ((n) => (n.IsEnabledLineBreaks = "enableLineBreaks", n.Toolbox = "toolbox", n.ConversionConfig = "conversionConfig", n.IsReadOnlySupported = "isReadOnlySupported", n.PasteConfig = "pasteConfig", n))(pe || {}), We = /* @__PURE__ */ ((n) => (n.IsInline = "isInline", n.Title = "title", n.IsReadOnlySupported = "isReadOnlySupported", n))(We || {}), mt = /* @__PURE__ */ ((n) => (n.IsTune = "isTune", n))(mt || {});
class Tt {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: i,
    isDefault: s,
    isInternal: r = !1,
    defaultPlaceholder: a
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = s, this.isInternal = r, this.defaultPlaceholder = a;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (A(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (A(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === ae.Inline;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === ae.Block;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === ae.Tune;
  }
}
class Cs extends E {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar"
    }, this.opened = !1, this.popover = null, this.toolbarVerticalMargin = be() ? 20 : 6, this.tools = /* @__PURE__ */ new Map(), window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   */
  async tryToShow(e = !1) {
    e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    var e, t;
    if (this.opened) {
      for (const [o, i] of this.tools) {
        const s = this.getToolShortcut(o.name);
        s !== void 0 && ge.remove(this.Editor.UI.nodes.redactor, s), A(i.clear) && i.clear();
      }
      this.tools = /* @__PURE__ */ new Map(), this.reset(), this.opened = !1, (e = this.popover) == null || e.hide(), (t = this.popover) == null || t.destroy(), this.popover = null;
    }
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    var e;
    this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = u.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), u.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Shows Inline Toolbar
   */
  async open() {
    var t;
    if (this.opened)
      return;
    this.opened = !0, this.popover !== null && this.popover.destroy(), this.createToolsInstances();
    const e = await this.getPopoverItems();
    this.popover = new hs({
      items: e,
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: z.ui(K.ui.popover, "Nothing found"),
        search: z.ui(K.ui.popover, "Filter")
      }
    }), this.move(this.popover.size.width), (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Move Toolbar to the selected text
   *
   * @param popoverWidth - width of the toolbar popover
   */
  move(e) {
    const t = b.rect, o = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), i = {
      x: t.x - o.x,
      y: t.y + t.height - // + window.scrollY
      o.top + this.toolbarVerticalMargin
    };
    i.x + e + o.x > this.Editor.UI.contentRect.right && (i.x = this.Editor.UI.contentRect.right - e - o.x), this.nodes.wrapper.style.left = Math.floor(i.x) + "px", this.nodes.wrapper.style.top = Math.floor(i.y) + "px";
  }
  /**
   * Clear orientation classes and reset position
   */
  reset() {
    this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = b.get(), o = b.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const i = u.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (i === null || t !== null && e.includes(i.tagName))
      return !1;
    const s = this.Editor.BlockManager.getBlock(t.anchorNode);
    return !s || this.getTools().some((c) => s.tool.inlineTools.has(c.name)) === !1 ? !1 : i.closest("[contenteditable]") !== null;
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Returns tools that are available for current block
   *
   * Used to check if Inline Toolbar could be shown
   * and to render tools in the Inline Toolbar
   */
  getTools() {
    const e = this.Editor.BlockManager.currentBlock;
    return e ? Array.from(e.tool.inlineTools.values()).filter((o) => !(this.Editor.ReadOnly.isEnabled && o.isReadOnlySupported !== !0)) : [];
  }
  /**
   * Constructs tools instances and saves them to this.tools
   */
  createToolsInstances() {
    this.tools = /* @__PURE__ */ new Map(), this.getTools().forEach((t) => {
      const o = t.create();
      this.tools.set(t, o);
    });
  }
  /**
   * Returns Popover Items for tools segregated by their appearance type: regular items and custom html elements.
   */
  async getPopoverItems() {
    const e = [];
    let t = 0;
    for (const [o, i] of this.tools) {
      const s = await i.render(), r = this.getToolShortcut(o.name);
      if (r !== void 0)
        try {
          this.enableShortcuts(o.name, r);
        } catch {
        }
      const a = r !== void 0 ? vt(r) : void 0, l = z.t(
        K.toolNames,
        o.title || je(o.name)
      );
      [s].flat().forEach((c) => {
        var h, p;
        const d = {
          name: o.name,
          onActivate: () => {
            this.toolClicked(i);
          },
          hint: {
            title: l,
            description: a
          }
        };
        if (u.isElement(c)) {
          const g = {
            ...d,
            element: c,
            type: _.Html
          };
          if (A(i.renderActions)) {
            const f = i.renderActions();
            g.children = {
              isOpen: (h = i.checkState) == null ? void 0 : h.call(i, b.get()),
              /** Disable keyboard navigation in actions, as it might conflict with enter press handling */
              isFlippable: !1,
              items: [
                {
                  type: _.Html,
                  element: f
                }
              ]
            };
          } else
            (p = i.checkState) == null || p.call(i, b.get());
          e.push(g);
        } else if (c.type === _.Html)
          e.push({
            ...d,
            ...c,
            type: _.Html
          });
        else if (c.type === _.Separator)
          e.push({
            type: _.Separator
          });
        else {
          const g = {
            ...d,
            ...c,
            type: _.Default
          };
          "children" in g && t !== 0 && e.push({
            type: _.Separator
          }), e.push(g), "children" in g && t < this.tools.size - 1 && e.push({
            type: _.Separator
          });
        }
      }), t++;
    }
    return e;
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][cn.Shortcut] : o == null ? void 0 : o.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param toolName - tool name
   * @param shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    ge.add({
      name: t,
      handler: (o) => {
        var s;
        const { currentBlock: i } = this.Editor.BlockManager;
        i && i.tool.enabledInlineTools && (o.preventDefault(), (s = this.popover) == null || s.activateItemByName(e));
      },
      /**
       * We need to bind shortcut to the document to make it work in read-only mode
       */
      on: document
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param tool - Tool's instance
   */
  toolClicked(e) {
    var o;
    const t = b.range;
    (o = e.surround) == null || o.call(e, t), this.checkToolsState();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    var e;
    (e = this.tools) == null || e.forEach((t) => {
      var o;
      (o = t.checkState) == null || o.call(t, b.get());
    });
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o]) => {
      e[t] = o.create();
    }), e;
  }
}
function dn() {
  const n = window.getSelection();
  if (n === null)
    return [null, 0];
  let e = n.focusNode, t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
}
function un(n, e, t, o) {
  const i = document.createRange();
  o === "left" ? (i.setStart(n, 0), i.setEnd(e, t)) : (i.setStart(e, t), i.setEnd(n, n.childNodes.length));
  const s = i.cloneContents(), r = document.createElement("div");
  r.appendChild(s);
  const a = r.textContent || "";
  return ai(a);
}
function Ne(n) {
  const e = u.getDeepestNode(n);
  if (e === null || u.isEmpty(n))
    return !0;
  if (u.isNativeInput(e))
    return e.selectionEnd === 0;
  if (u.isEmpty(n))
    return !0;
  const [t, o] = dn();
  return t === null ? !1 : un(n, t, o, "left");
}
function Re(n) {
  const e = u.getDeepestNode(n, !0);
  if (e === null)
    return !0;
  if (u.isNativeInput(e))
    return e.selectionEnd === e.value.length;
  const [t, o] = dn();
  return t === null ? !1 : un(n, t, o, "right");
}
var hn = {}, St = {}, Xe = {}, de = {}, It = {}, Ot = {};
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.allInputsSelector = Ts;
function Ts() {
  var n = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + n.map(function(e) {
    return 'input[type="'.concat(e, '"]');
  }).join(", ");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.allInputsSelector = void 0;
  var e = Ot;
  Object.defineProperty(n, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
})(It);
var ue = {}, _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.isNativeInput = Ss;
function Ss(n) {
  var e = [
    "INPUT",
    "TEXTAREA"
  ];
  return n && n.tagName ? e.includes(n.tagName) : !1;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isNativeInput = void 0;
  var e = _t;
  Object.defineProperty(n, "isNativeInput", { enumerable: !0, get: function() {
    return e.isNativeInput;
  } });
})(ue);
var pn = {}, Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.append = Is;
function Is(n, e) {
  Array.isArray(e) ? e.forEach(function(t) {
    n.appendChild(t);
  }) : n.appendChild(e);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.append = void 0;
  var e = Mt;
  Object.defineProperty(n, "append", { enumerable: !0, get: function() {
    return e.append;
  } });
})(pn);
var At = {}, Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.blockElements = Os;
function Os() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.blockElements = void 0;
  var e = Lt;
  Object.defineProperty(n, "blockElements", { enumerable: !0, get: function() {
    return e.blockElements;
  } });
})(At);
var fn = {}, Pt = {};
Object.defineProperty(Pt, "__esModule", { value: !0 });
Pt.calculateBaseline = _s;
function _s(n) {
  var e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), s = parseFloat(e.borderTopWidth), r = parseFloat(e.marginTop), a = t * 0.8, l = (o - t) / 2, c = r + s + i + l + a;
  return c;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.calculateBaseline = void 0;
  var e = Pt;
  Object.defineProperty(n, "calculateBaseline", { enumerable: !0, get: function() {
    return e.calculateBaseline;
  } });
})(fn);
var gn = {}, Nt = {}, Rt = {}, Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.isContentEditable = Ms;
function Ms(n) {
  return n.contentEditable === "true";
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isContentEditable = void 0;
  var e = Dt;
  Object.defineProperty(n, "isContentEditable", { enumerable: !0, get: function() {
    return e.isContentEditable;
  } });
})(Rt);
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.canSetCaret = Ps;
var As = ue, Ls = Rt;
function Ps(n) {
  var e = !0;
  if ((0, As.isNativeInput)(n))
    switch (n.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = !1;
        break;
    }
  else
    e = (0, Ls.isContentEditable)(n);
  return e;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.canSetCaret = void 0;
  var e = Nt;
  Object.defineProperty(n, "canSetCaret", { enumerable: !0, get: function() {
    return e.canSetCaret;
  } });
})(gn);
var Ve = {}, Ft = {};
function Ns(n, e, t) {
  const o = t.value !== void 0 ? "value" : "get", i = t[o], s = `#${e}Cache`;
  if (t[o] = function(...r) {
    return this[s] === void 0 && (this[s] = i.apply(this, r)), this[s];
  }, o === "get" && t.set) {
    const r = t.set;
    t.set = function(a) {
      delete n[s], r.apply(this, a);
    };
  }
  return t;
}
function mn() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e !== void 0 && (n[e] = !0), n;
}
function jt(n) {
  return n != null && n !== "" && (typeof n != "object" || Object.keys(n).length > 0);
}
function Rs(n) {
  return !jt(n);
}
const Ds = () => typeof window < "u" && window.navigator !== null && jt(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Fs(n) {
  const e = mn();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function js(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function Hs(n) {
  const e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-999px", e.style.bottom = "-999px", e.innerHTML = n, document.body.appendChild(e);
  const t = window.getSelection(), o = document.createRange();
  if (o.selectNode(e), t === null)
    throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(), t.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
}
function $s(n, e, t) {
  let o;
  return (...i) => {
    const s = this, r = () => {
      o = void 0, t !== !0 && n.apply(s, i);
    }, a = t === !0 && o !== void 0;
    window.clearTimeout(o), o = window.setTimeout(r, e), a && n.apply(s, i);
  };
}
function oe(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function zs(n) {
  return oe(n) === "boolean";
}
function bn(n) {
  return oe(n) === "function" || oe(n) === "asyncfunction";
}
function Us(n) {
  return bn(n) && /^\s*class\s+/.test(n.toString());
}
function Ws(n) {
  return oe(n) === "number";
}
function De(n) {
  return oe(n) === "object";
}
function Ys(n) {
  return Promise.resolve(n) === n;
}
function Ks(n) {
  return oe(n) === "string";
}
function Xs(n) {
  return oe(n) === "undefined";
}
function bt(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (De(n) && De(t))
    for (const o in t)
      De(t[o]) ? (n[o] === void 0 && Object.assign(n, { [o]: {} }), bt(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return bt(n, ...e);
}
function Vs(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && console.warn(o);
}
function qs(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function Zs(n) {
  return n > 47 && n < 58 || n === 32 || n === 13 || n === 229 || n > 64 && n < 91 || n > 95 && n < 112 || n > 185 && n < 193 || n > 218 && n < 223;
}
const Gs = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, Qs = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
let Js = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
};
function er(n, e, t = void 0) {
  let o, i, s, r = null, a = 0;
  t || (t = {});
  const l = function() {
    a = t.leading === !1 ? 0 : Date.now(), r = null, s = n.apply(o, i), r === null && (o = i = null);
  };
  return function() {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const d = e - (c - a);
    return o = this, i = arguments, d <= 0 || d > e ? (r && (clearTimeout(r), r = null), a = c, s = n.apply(o, i), r === null && (o = i = null)) : !r && t.trailing !== !1 && (r = setTimeout(l, d)), s;
  };
}
const tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: Js,
  beautifyShortcut: Fs,
  cacheable: Ns,
  capitalize: js,
  copyTextToClipboard: Hs,
  debounce: $s,
  deepMerge: bt,
  deprecationAssert: Vs,
  getUserOS: mn,
  getValidUrl: qs,
  isBoolean: zs,
  isClass: Us,
  isEmpty: Rs,
  isFunction: bn,
  isIosDevice: Ds,
  isNumber: Ws,
  isObject: De,
  isPrintableKey: Zs,
  isPromise: Ys,
  isString: Ks,
  isUndefined: Xs,
  keyCodes: Gs,
  mouseButtons: Qs,
  notEmpty: jt,
  throttle: er,
  typeOf: oe
}, Symbol.toStringTag, { value: "Module" })), Ht = /* @__PURE__ */ Xn(tr);
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.containsOnlyInlineElements = ir;
var or = Ht, nr = At;
function ir(n) {
  var e;
  (0, or.isString)(n) ? (e = document.createElement("div"), e.innerHTML = n) : e = n;
  var t = function(o) {
    return !(0, nr.blockElements)().includes(o.tagName.toLowerCase()) && Array.from(o.children).every(t);
  };
  return Array.from(e.children).every(t);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.containsOnlyInlineElements = void 0;
  var e = Ft;
  Object.defineProperty(n, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return e.containsOnlyInlineElements;
  } });
})(Ve);
var vn = {}, $t = {}, qe = {}, zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.make = sr;
function sr(n, e, t) {
  var o;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var i = document.createElement(n);
  if (Array.isArray(e)) {
    var s = e.filter(function(a) {
      return a !== void 0;
    });
    (o = i.classList).add.apply(o, s);
  } else
    e !== null && i.classList.add(e);
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
  return i;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.make = void 0;
  var e = zt;
  Object.defineProperty(n, "make", { enumerable: !0, get: function() {
    return e.make;
  } });
})(qe);
Object.defineProperty($t, "__esModule", { value: !0 });
$t.fragmentToString = ar;
var rr = qe;
function ar(n) {
  var e = (0, rr.make)("div");
  return e.appendChild(n), e.innerHTML;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.fragmentToString = void 0;
  var e = $t;
  Object.defineProperty(n, "fragmentToString", { enumerable: !0, get: function() {
    return e.fragmentToString;
  } });
})(vn);
var kn = {}, Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.getContentLength = cr;
var lr = ue;
function cr(n) {
  var e, t;
  return (0, lr.isNativeInput)(n) ? n.value.length : n.nodeType === Node.TEXT_NODE ? n.length : (t = (e = n.textContent) === null || e === void 0 ? void 0 : e.length) !== null && t !== void 0 ? t : 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getContentLength = void 0;
  var e = Ut;
  Object.defineProperty(n, "getContentLength", { enumerable: !0, get: function() {
    return e.getContentLength;
  } });
})(kn);
var Wt = {}, Yt = {}, Io = Ce && Ce.__spreadArray || function(n, e, t) {
  if (t || arguments.length === 2)
    for (var o = 0, i = e.length, s; o < i; o++)
      (s || !(o in e)) && (s || (s = Array.prototype.slice.call(e, 0, o)), s[o] = e[o]);
  return n.concat(s || Array.prototype.slice.call(e));
};
Object.defineProperty(Yt, "__esModule", { value: !0 });
Yt.getDeepestBlockElements = yn;
var dr = Ve;
function yn(n) {
  return (0, dr.containsOnlyInlineElements)(n) ? [n] : Array.from(n.children).reduce(function(e, t) {
    return Io(Io([], e, !0), yn(t), !0);
  }, []);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getDeepestBlockElements = void 0;
  var e = Yt;
  Object.defineProperty(n, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return e.getDeepestBlockElements;
  } });
})(Wt);
var wn = {}, Kt = {}, Ze = {}, Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.isLineBreakTag = ur;
function ur(n) {
  return [
    "BR",
    "WBR"
  ].includes(n.tagName);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isLineBreakTag = void 0;
  var e = Xt;
  Object.defineProperty(n, "isLineBreakTag", { enumerable: !0, get: function() {
    return e.isLineBreakTag;
  } });
})(Ze);
var Ge = {}, Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.isSingleTag = hr;
function hr(n) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(n.tagName);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isSingleTag = void 0;
  var e = Vt;
  Object.defineProperty(n, "isSingleTag", { enumerable: !0, get: function() {
    return e.isSingleTag;
  } });
})(Ge);
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.getDeepestNode = En;
var pr = ue, fr = Ze, gr = Ge;
function En(n, e) {
  e === void 0 && (e = !1);
  var t = e ? "lastChild" : "firstChild", o = e ? "previousSibling" : "nextSibling";
  if (n.nodeType === Node.ELEMENT_NODE && n[t]) {
    var i = n[t];
    if ((0, gr.isSingleTag)(i) && !(0, pr.isNativeInput)(i) && !(0, fr.isLineBreakTag)(i))
      if (i[o])
        i = i[o];
      else if (i.parentNode !== null && i.parentNode[o])
        i = i.parentNode[o];
      else
        return i.parentNode;
    return En(i, e);
  }
  return n;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getDeepestNode = void 0;
  var e = Kt;
  Object.defineProperty(n, "getDeepestNode", { enumerable: !0, get: function() {
    return e.getDeepestNode;
  } });
})(wn);
var xn = {}, qt = {}, Me = Ce && Ce.__spreadArray || function(n, e, t) {
  if (t || arguments.length === 2)
    for (var o = 0, i = e.length, s; o < i; o++)
      (s || !(o in e)) && (s || (s = Array.prototype.slice.call(e, 0, o)), s[o] = e[o]);
  return n.concat(s || Array.prototype.slice.call(e));
};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.findAllInputs = yr;
var mr = Ve, br = Wt, vr = It, kr = ue;
function yr(n) {
  return Array.from(n.querySelectorAll((0, vr.allInputsSelector)())).reduce(function(e, t) {
    return (0, kr.isNativeInput)(t) || (0, mr.containsOnlyInlineElements)(t) ? Me(Me([], e, !0), [t], !1) : Me(Me([], e, !0), (0, br.getDeepestBlockElements)(t), !0);
  }, []);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.findAllInputs = void 0;
  var e = qt;
  Object.defineProperty(n, "findAllInputs", { enumerable: !0, get: function() {
    return e.findAllInputs;
  } });
})(xn);
var Bn = {}, Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.isCollapsedWhitespaces = wr;
function wr(n) {
  return !/[^\t\n\r ]/.test(n);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCollapsedWhitespaces = void 0;
  var e = Zt;
  Object.defineProperty(n, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return e.isCollapsedWhitespaces;
  } });
})(Bn);
var Gt = {}, Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.isElement = xr;
var Er = Ht;
function xr(n) {
  return (0, Er.isNumber)(n) ? !1 : !!n && !!n.nodeType && n.nodeType === Node.ELEMENT_NODE;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isElement = void 0;
  var e = Qt;
  Object.defineProperty(n, "isElement", { enumerable: !0, get: function() {
    return e.isElement;
  } });
})(Gt);
var Cn = {}, Jt = {}, eo = {}, to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.isLeaf = Br;
function Br(n) {
  return n === null ? !1 : n.childNodes.length === 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isLeaf = void 0;
  var e = to;
  Object.defineProperty(n, "isLeaf", { enumerable: !0, get: function() {
    return e.isLeaf;
  } });
})(eo);
var oo = {}, no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.isNodeEmpty = Or;
var Cr = Ze, Tr = Gt, Sr = ue, Ir = Ge;
function Or(n, e) {
  var t = "";
  return (0, Ir.isSingleTag)(n) && !(0, Cr.isLineBreakTag)(n) ? !1 : ((0, Tr.isElement)(n) && (0, Sr.isNativeInput)(n) ? t = n.value : n.textContent !== null && (t = n.textContent.replace("​", "")), e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")), t.trim().length === 0);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isNodeEmpty = void 0;
  var e = no;
  Object.defineProperty(n, "isNodeEmpty", { enumerable: !0, get: function() {
    return e.isNodeEmpty;
  } });
})(oo);
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.isEmpty = Ar;
var _r = eo, Mr = oo;
function Ar(n, e) {
  n.normalize();
  for (var t = [n]; t.length > 0; ) {
    var o = t.shift();
    if (o) {
      if (n = o, (0, _r.isLeaf)(n) && !(0, Mr.isNodeEmpty)(n, e))
        return !1;
      t.push.apply(t, Array.from(n.childNodes));
    }
  }
  return !0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isEmpty = void 0;
  var e = Jt;
  Object.defineProperty(n, "isEmpty", { enumerable: !0, get: function() {
    return e.isEmpty;
  } });
})(Cn);
var Tn = {}, io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.isFragment = Pr;
var Lr = Ht;
function Pr(n) {
  return (0, Lr.isNumber)(n) ? !1 : !!n && !!n.nodeType && n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isFragment = void 0;
  var e = io;
  Object.defineProperty(n, "isFragment", { enumerable: !0, get: function() {
    return e.isFragment;
  } });
})(Tn);
var Sn = {}, so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.isHTMLString = Rr;
var Nr = qe;
function Rr(n) {
  var e = (0, Nr.make)("div");
  return e.innerHTML = n, e.childElementCount > 0;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isHTMLString = void 0;
  var e = so;
  Object.defineProperty(n, "isHTMLString", { enumerable: !0, get: function() {
    return e.isHTMLString;
  } });
})(Sn);
var In = {}, ro = {};
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.offset = Dr;
function Dr(n) {
  var e = n.getBoundingClientRect(), t = window.pageXOffset || document.documentElement.scrollLeft, o = window.pageYOffset || document.documentElement.scrollTop, i = e.top + o, s = e.left + t;
  return {
    top: i,
    left: s,
    bottom: i + e.height,
    right: s + e.width
  };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.offset = void 0;
  var e = ro;
  Object.defineProperty(n, "offset", { enumerable: !0, get: function() {
    return e.offset;
  } });
})(In);
var On = {}, ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.prepend = Fr;
function Fr(n, e) {
  Array.isArray(e) ? (e = e.reverse(), e.forEach(function(t) {
    return n.prepend(t);
  })) : n.prepend(e);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.prepend = void 0;
  var e = ao;
  Object.defineProperty(n, "prepend", { enumerable: !0, get: function() {
    return e.prepend;
  } });
})(On);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.prepend = n.offset = n.make = n.isLineBreakTag = n.isSingleTag = n.isNodeEmpty = n.isLeaf = n.isHTMLString = n.isFragment = n.isEmpty = n.isElement = n.isContentEditable = n.isCollapsedWhitespaces = n.findAllInputs = n.isNativeInput = n.allInputsSelector = n.getDeepestNode = n.getDeepestBlockElements = n.getContentLength = n.fragmentToString = n.containsOnlyInlineElements = n.canSetCaret = n.calculateBaseline = n.blockElements = n.append = void 0;
  var e = It;
  Object.defineProperty(n, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
  var t = ue;
  Object.defineProperty(n, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
  var o = pn;
  Object.defineProperty(n, "append", { enumerable: !0, get: function() {
    return o.append;
  } });
  var i = At;
  Object.defineProperty(n, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var s = fn;
  Object.defineProperty(n, "calculateBaseline", { enumerable: !0, get: function() {
    return s.calculateBaseline;
  } });
  var r = gn;
  Object.defineProperty(n, "canSetCaret", { enumerable: !0, get: function() {
    return r.canSetCaret;
  } });
  var a = Ve;
  Object.defineProperty(n, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return a.containsOnlyInlineElements;
  } });
  var l = vn;
  Object.defineProperty(n, "fragmentToString", { enumerable: !0, get: function() {
    return l.fragmentToString;
  } });
  var c = kn;
  Object.defineProperty(n, "getContentLength", { enumerable: !0, get: function() {
    return c.getContentLength;
  } });
  var d = Wt;
  Object.defineProperty(n, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return d.getDeepestBlockElements;
  } });
  var h = wn;
  Object.defineProperty(n, "getDeepestNode", { enumerable: !0, get: function() {
    return h.getDeepestNode;
  } });
  var p = xn;
  Object.defineProperty(n, "findAllInputs", { enumerable: !0, get: function() {
    return p.findAllInputs;
  } });
  var g = Bn;
  Object.defineProperty(n, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return g.isCollapsedWhitespaces;
  } });
  var f = Rt;
  Object.defineProperty(n, "isContentEditable", { enumerable: !0, get: function() {
    return f.isContentEditable;
  } });
  var v = Gt;
  Object.defineProperty(n, "isElement", { enumerable: !0, get: function() {
    return v.isElement;
  } });
  var O = Cn;
  Object.defineProperty(n, "isEmpty", { enumerable: !0, get: function() {
    return O.isEmpty;
  } });
  var T = Tn;
  Object.defineProperty(n, "isFragment", { enumerable: !0, get: function() {
    return T.isFragment;
  } });
  var M = Sn;
  Object.defineProperty(n, "isHTMLString", { enumerable: !0, get: function() {
    return M.isHTMLString;
  } });
  var q = eo;
  Object.defineProperty(n, "isLeaf", { enumerable: !0, get: function() {
    return q.isLeaf;
  } });
  var F = oo;
  Object.defineProperty(n, "isNodeEmpty", { enumerable: !0, get: function() {
    return F.isNodeEmpty;
  } });
  var H = Ze;
  Object.defineProperty(n, "isLineBreakTag", { enumerable: !0, get: function() {
    return H.isLineBreakTag;
  } });
  var Q = Ge;
  Object.defineProperty(n, "isSingleTag", { enumerable: !0, get: function() {
    return Q.isSingleTag;
  } });
  var ie = qe;
  Object.defineProperty(n, "make", { enumerable: !0, get: function() {
    return ie.make;
  } });
  var k = In;
  Object.defineProperty(n, "offset", { enumerable: !0, get: function() {
    return k.offset;
  } });
  var m = On;
  Object.defineProperty(n, "prepend", { enumerable: !0, get: function() {
    return m.prepend;
  } });
})(de);
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.getContenteditableSlice = Hr;
var jr = de;
function Hr(n, e, t, o, i) {
  var s;
  i === void 0 && (i = !1);
  var r = document.createRange();
  if (o === "left" ? (r.setStart(n, 0), r.setEnd(e, t)) : (r.setStart(e, t), r.setEnd(n, n.childNodes.length)), i === !0) {
    var a = r.extractContents();
    return (0, jr.fragmentToString)(a);
  }
  var l = r.cloneContents(), c = document.createElement("div");
  c.appendChild(l);
  var d = (s = c.textContent) !== null && s !== void 0 ? s : "";
  return d;
}
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.checkContenteditableSliceForEmptiness = Ur;
var $r = de, zr = Qe;
function Ur(n, e, t, o) {
  var i = (0, zr.getContenteditableSlice)(n, e, t, o);
  return (0, $r.isCollapsedWhitespaces)(i);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.checkContenteditableSliceForEmptiness = void 0;
  var e = Xe;
  Object.defineProperty(n, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return e.checkContenteditableSliceForEmptiness;
  } });
})(St);
var _n = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getContenteditableSlice = void 0;
  var e = Qe;
  Object.defineProperty(n, "getContenteditableSlice", { enumerable: !0, get: function() {
    return e.getContenteditableSlice;
  } });
})(_n);
var Mn = {}, lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.focus = Yr;
var Wr = de;
function Yr(n, e) {
  var t, o;
  if (e === void 0 && (e = !0), (0, Wr.isNativeInput)(n)) {
    n.focus();
    var i = e ? 0 : n.value.length;
    n.setSelectionRange(i, i);
  } else {
    var s = document.createRange(), r = window.getSelection();
    if (!r)
      return;
    var a = function(p) {
      var g = document.createTextNode("");
      p.appendChild(g), s.setStart(g, 0), s.setEnd(g, 0);
    }, l = function(p) {
      return p != null;
    }, c = n.childNodes, d = e ? c[0] : c[c.length - 1];
    if (l(d)) {
      for (; l(d) && d.nodeType !== Node.TEXT_NODE; )
        d = e ? d.firstChild : d.lastChild;
      if (l(d) && d.nodeType === Node.TEXT_NODE) {
        var h = (o = (t = d.textContent) === null || t === void 0 ? void 0 : t.length) !== null && o !== void 0 ? o : 0, i = e ? 0 : h;
        s.setStart(d, i), s.setEnd(d, i);
      } else
        a(n);
    } else
      a(n);
    r.removeAllRanges(), r.addRange(s);
  }
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.focus = void 0;
  var e = lo;
  Object.defineProperty(n, "focus", { enumerable: !0, get: function() {
    return e.focus;
  } });
})(Mn);
var co = {}, Je = {};
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.getCaretNodeAndOffset = Kr;
function Kr() {
  var n = window.getSelection();
  if (n === null)
    return [null, 0];
  var e = n.focusNode, t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] !== void 0 ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], e.textContent !== null && (t = e.textContent.length))), [e, t]);
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getCaretNodeAndOffset = void 0;
  var e = Je;
  Object.defineProperty(n, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return e.getCaretNodeAndOffset;
  } });
})(co);
var An = {}, et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.getRange = Xr;
function Xr() {
  var n = window.getSelection();
  return n && n.rangeCount ? n.getRangeAt(0) : null;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.getRange = void 0;
  var e = et;
  Object.defineProperty(n, "getRange", { enumerable: !0, get: function() {
    return e.getRange;
  } });
})(An);
var Ln = {}, uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.isCaretAtEndOfInput = Zr;
var Oo = de, Vr = co, qr = St;
function Zr(n) {
  var e = (0, Oo.getDeepestNode)(n, !0);
  if (e === null)
    return !0;
  if ((0, Oo.isNativeInput)(e))
    return e.selectionEnd === e.value.length;
  var t = (0, Vr.getCaretNodeAndOffset)(), o = t[0], i = t[1];
  return o === null ? !1 : (0, qr.checkContenteditableSliceForEmptiness)(n, o, i, "right");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCaretAtEndOfInput = void 0;
  var e = uo;
  Object.defineProperty(n, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return e.isCaretAtEndOfInput;
  } });
})(Ln);
var Pn = {}, ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.isCaretAtStartOfInput = Jr;
var Ae = de, Gr = Je, Qr = Xe;
function Jr(n) {
  var e = (0, Ae.getDeepestNode)(n);
  if (e === null || (0, Ae.isEmpty)(n))
    return !0;
  if ((0, Ae.isNativeInput)(e))
    return e.selectionEnd === 0;
  if ((0, Ae.isEmpty)(n))
    return !0;
  var t = (0, Gr.getCaretNodeAndOffset)(), o = t[0], i = t[1];
  return o === null ? !1 : (0, Qr.checkContenteditableSliceForEmptiness)(n, o, i, "left");
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.isCaretAtStartOfInput = void 0;
  var e = ho;
  Object.defineProperty(n, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return e.isCaretAtStartOfInput;
  } });
})(Pn);
var Nn = {}, po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.save = oa;
var ea = de, ta = et;
function oa() {
  var n = (0, ta.getRange)(), e = (0, ea.make)("span");
  if (e.id = "cursor", e.hidden = !0, !!n)
    return n.insertNode(e), function() {
      var o = window.getSelection();
      o && (n.setStartAfter(e), n.setEndAfter(e), o.removeAllRanges(), o.addRange(n), setTimeout(function() {
        e.remove();
      }, 150));
    };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.save = void 0;
  var e = po;
  Object.defineProperty(n, "save", { enumerable: !0, get: function() {
    return e.save;
  } });
})(Nn);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.save = n.isCaretAtStartOfInput = n.isCaretAtEndOfInput = n.getRange = n.getCaretNodeAndOffset = n.focus = n.getContenteditableSlice = n.checkContenteditableSliceForEmptiness = void 0;
  var e = St;
  Object.defineProperty(n, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return e.checkContenteditableSliceForEmptiness;
  } });
  var t = _n;
  Object.defineProperty(n, "getContenteditableSlice", { enumerable: !0, get: function() {
    return t.getContenteditableSlice;
  } });
  var o = Mn;
  Object.defineProperty(n, "focus", { enumerable: !0, get: function() {
    return o.focus;
  } });
  var i = co;
  Object.defineProperty(n, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return i.getCaretNodeAndOffset;
  } });
  var s = An;
  Object.defineProperty(n, "getRange", { enumerable: !0, get: function() {
    return s.getRange;
  } });
  var r = Ln;
  Object.defineProperty(n, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return r.isCaretAtEndOfInput;
  } });
  var a = Pn;
  Object.defineProperty(n, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return a.isCaretAtStartOfInput;
  } });
  var l = Nn;
  Object.defineProperty(n, "save", { enumerable: !0, get: function() {
    return l.save;
  } });
})(hn);
class na extends E {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case y.BACKSPACE:
        this.backspace(e);
        break;
      case y.DELETE:
        this.delete(e);
        break;
      case y.ENTER:
        this.enter(e);
        break;
      case y.DOWN:
      case y.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case y.UP:
      case y.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case y.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && Po(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o, Caret: i } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const s = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(s, !0);
      i.setToBlock(r, i.positions.START), t.clearSelection(e);
    });
  }
  /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */
  tabPressed(e) {
    const { InlineToolbar: t, Caret: o } = this.Editor;
    if (t.opened)
      return;
    (e.shiftKey ? o.navigatePrevious(!0) : o.navigateNext(!0)) && e.preventDefault();
  }
  /**
   * '/' + 'command' keydown inside a Block
   */
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  /**
   * '/' keydown inside a Block
   *
   * @param event - keydown
   */
  slashPressed(e) {
    !this.Editor.UI.nodes.wrapper.contains(e.target) || !this.Editor.BlockManager.currentBlock.isEmpty || (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o } = this.Editor, i = t.currentBlock;
    if (i === void 0 || i.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey && !pt)
      return;
    let s = i;
    i.currentInput !== void 0 && Ne(i.currentInput) && !i.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i.currentInput && Re(i.currentInput) ? s = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : s = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s), this.Editor.Toolbar.moveAndOpen(s), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, previousBlock: s } = t;
    if (i === void 0 || !b.isCollapsed || !i.currentInput || !Ne(i.currentInput))
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
      o.navigatePrevious();
      return;
    }
    if (s === null)
      return;
    if (s.isEmpty) {
      t.removeBlock(s);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i);
      const l = t.currentBlock;
      o.setToBlock(l, o.positions.END);
      return;
    }
    xo(s, i) ? this.mergeBlocks(s, i) : o.setToBlock(s, o.positions.END);
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, nextBlock: s } = t;
    if (!b.isCollapsed || !Re(i.currentInput))
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
      o.navigateNext();
      return;
    }
    if (s === null)
      return;
    if (s.isEmpty) {
      t.removeBlock(s);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i), o.setToBlock(s, o.positions.START);
      return;
    }
    xo(i, s) ? this.mergeBlocks(i, s) : o.setToBlock(s, o.positions.START);
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o, Toolbar: i } = this.Editor;
    e.lastInput !== void 0 && (hn.focus(e.lastInput, !1), o.mergeBlocks(e, t).then(() => {
      i.close();
    }));
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = ce.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === y.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.Toolbar.close();
    const { currentBlock: o } = this.Editor.BlockManager, s = ((o == null ? void 0 : o.currentInput) !== void 0 ? Re(o.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === y.DOWN && s) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === y.DOWN || e.keyCode === y.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    Fe(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (ce.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === y.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const { currentBlock: t } = this.Editor.BlockManager, i = ((t == null ? void 0 : t.currentInput) !== void 0 ? Ne(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === y.UP && i) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    if (e.keyCode === y.UP || e.keyCode === y.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    Fe(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === y.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === y.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === y.ENTER && this.Editor.InlineToolbar.opened, s = e.keyCode === y.TAB;
    return !(e.shiftKey || s || t || o || i);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class ct {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return No(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o = this.blocks[t];
    u.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], i = e - 1, s = Math.max(0, i), r = this.blocks[s];
    e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(ee.MOVED, a);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(ee.REMOVED));
    const i = o ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const s = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", s);
    } else {
      const s = this.blocks[e + 1];
      s ? this.insertToDOM(t, "beforebegin", s) : this.insertToDOM(t);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, t) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, t) {
    const o = new DocumentFragment();
    for (const i of e)
      o.appendChild(i.holder);
    if (this.length > 0) {
      if (t > 0) {
        const i = Math.min(t - 1, this.length - 1);
        this.blocks[i].holder.after(o);
      } else
        t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach((i) => i.call(ee.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(ee.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(ee.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(ee.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
}
const _o = "block-removed", Mo = "block-added", ia = "block-moved", Ao = "block-changed";
class sa {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
}
class ra extends E {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new ct(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: ct.set,
      get: ct.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: i = {}
  }) {
    const s = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a = new R({
      id: o,
      data: t,
      tool: r,
      api: this.Editor.API,
      readOnly: s,
      tunesData: i
    }, this.eventsDispatcher);
    return s || window.requestIdleCallback(() => {
      this.bindBlockEvents(a);
    }, { timeout: 2e3 }), a;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: i,
    needToFocus: s = !0,
    replace: r = !1,
    tunes: a = {}
  } = {}) {
    let l = i;
    l === void 0 && (l = this.currentBlockIndex + (r ? 0 : 1));
    const c = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return r && this.blockDidMutated(_o, this.getBlockByIndex(l), {
      index: l
    }), this._blocks.insert(l, c, r), this.blockDidMutated(Mo, c, {
      index: l
    }), s ? this.currentBlockIndex = l : l <= this.currentBlockIndex && this.currentBlockIndex++, c;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events.
   *
   * If neither data nor tunes is provided, return the provided block instead.
   *
   * @param block - block to update
   * @param data - (optional) new data
   * @param tunes - (optional) tune data
   */
  async update(e, t, o) {
    if (!t && !o)
      return e;
    const i = await e.data, s = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, i, t ?? {}),
      tunes: o ?? e.tunes
    }), r = this.getBlockIndex(e);
    return this._blocks.replace(r, s), this.blockDidMutated(Ao, s, {
      index: r
    }), s;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o) {
    const i = this.getBlockIndex(e);
    return this.insert({
      tool: t,
      data: o,
      index: i,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o = !1) {
    const i = this.insert({
      tool: e,
      replace: o
    });
    try {
      window.requestIdleCallback(() => {
        i.call(ee.ON_PASTE, t);
      });
    } catch (s) {
      S(`${e}: onPaste callback call is failed`, "error", s);
    }
    return i;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = !1) {
    const o = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = o, this.blockDidMutated(Mo, o, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    let o;
    if (e.name === t.name && e.mergeable) {
      const i = await t.data;
      if (V(i)) {
        console.error("Could not merge Block. Failed to extract original Block data.");
        return;
      }
      const [s] = yt([i], e.tool.sanitizeConfig);
      o = s;
    } else if (e.mergeable && He(t, "export") && He(e, "import")) {
      const i = await t.exportDataAsString(), s = Z(i, e.tool.sanitizeConfig);
      o = Bo(s, e.tool.conversionConfig);
    }
    o !== void 0 && (await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = !0) {
    return new Promise((o) => {
      const i = this._blocks.indexOf(e);
      if (!this.validateIndex(i))
        throw new Error("Can't find a Block to remove");
      this._blocks.remove(i), e.destroy(), this.blockDidMutated(_o, e, {
        index: i
      }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = u.make("div");
    t.appendChild(e);
    const o = {
      text: u.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({ data: o });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    u.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${R.CSS.wrapper}`), i = t.indexOf(o);
    if (i >= 0)
      return this._blocks[i];
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    u.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${R.CSS.wrapper}`);
    if (!t)
      return;
    const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node))
      return;
    u.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${R.CSS.wrapper}`);
    return this.blocks.find((o) => o.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      S("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      S("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(ia, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, t, o) {
    if (!await e.save())
      throw new Error("Could not convert Block. Failed to extract original Block data.");
    const s = this.Editor.Tools.blockTools.get(t);
    if (!s)
      throw new Error(`Could not convert Block. Tool «${t}» not found.`);
    const r = await e.exportDataAsString(), a = Z(
      r,
      s.sanitizeConfig
    );
    let l = Bo(a, s.conversionConfig, s.settings);
    return o && (l = Object.assign(l, o)), this.replace(e, s.name, l);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  unsetCurrentBlock() {
    this.currentBlockIndex = -1;
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const t = new sa();
    [...this.blocks].forEach((i) => {
      t.add(async () => {
        await this.removeBlock(i, !1);
      });
    }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (o) => {
      t.keydown(o);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o) => {
      t.keyup(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o) => {
      t.dragOver(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o) => {
      t.dragLeave(o);
    }), e.on("didMutated", (o) => this.blockDidMutated(Ao, o, {
      index: this.getBlockIndex(o)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o) {
    const i = new CustomEvent(e, {
      detail: {
        target: new J(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit($o, {
      event: i
    }), t;
  }
}
class aa extends E {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o) => {
      o.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === !0)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new b(), ge.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    b.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = !1) {
    const { BlockManager: o, Caret: i, RectangleSelection: s } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const r = e && e instanceof KeyboardEvent, a = r && Po(e.keyCode);
    if (this.anyBlockSelected && r && a && !b.isSelectionExists) {
      const l = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(l, !0), i.setToBlock(o.currentBlock), Fe(() => {
        const c = e.key;
        i.insertContentAtCaretPosition(c.length > 1 ? "" : c);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = u.make("div");
    this.selectedBlocks.forEach((s) => {
      const r = Z(s.holder.innerHTML, this.sanitizerConfig), a = u.make("p");
      a.innerHTML = r, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map((s) => s.textContent).join(`

`), i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((s) => s.save())).then((s) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(s));
      } catch {
      }
    });
  }
  /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor, o = t.getBlockByIndex(e);
    o !== void 0 && this.selectBlock(o);
  }
  /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */
  selectBlock(e) {
    this.selection.save(), b.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */
  unselectBlock(e) {
    e.selected = !1, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    ge.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), u.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target), o = t.inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
class Ye extends E {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the block content
   */
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    var c;
    const { BlockManager: i, BlockSelection: s } = this.Editor;
    if (s.clearSelection(), !e.focusable) {
      (c = window.getSelection()) == null || c.removeAllRanges(), s.selectBlock(e), i.currentBlock = e;
      return;
    }
    let r;
    switch (t) {
      case this.positions.START:
        r = e.firstInput;
        break;
      case this.positions.END:
        r = e.lastInput;
        break;
      default:
        r = e.currentInput;
    }
    if (!r)
      return;
    let a, l = o;
    if (t === this.positions.START)
      a = u.getDeepestNode(r, !1), l = 0;
    else if (t === this.positions.END)
      a = u.getDeepestNode(r, !0), l = u.getContentLength(a);
    else {
      const { node: d, offset: h } = u.getNodeByOffset(r, o);
      d ? (a = d, l = h) : (a = u.getDeepestNode(r, !1), l = 0);
    }
    this.set(a, l), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const { currentBlock: i } = this.Editor.BlockManager, s = u.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(s, 0);
        break;
      case this.positions.END:
        this.set(s, u.getContentLength(s));
        break;
      default:
        o && this.set(s, o);
    }
    i.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: i, bottom: s } = b.setCursor(e, t), { innerHeight: r } = window;
    i < 0 ? window.scrollBy(0, i - 30) : s > r && window.scrollBy(0, s - r + 30);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = b.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (u.isNativeInput(o)) {
          const i = o, s = document.createDocumentFragment(), r = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
          return s.textContent = a, i.value = r, s;
        } else {
          const i = t.cloneRange();
          return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigateNext(e = !1) {
    const { BlockManager: t } = this.Editor, { currentBlock: o, nextBlock: i } = t;
    if (o === void 0)
      return !1;
    const { nextInput: s, currentInput: r } = o, a = r !== void 0 ? Re(r) : void 0;
    let l = i;
    const c = e || a || !o.focusable;
    if (s && c)
      return this.setToInput(s, this.positions.START), !0;
    if (l === null) {
      if (o.tool.isDefault || !c)
        return !1;
      l = t.insertAtEnd();
    }
    return c ? (this.setToBlock(l, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigatePrevious(e = !1) {
    const { currentBlock: t, previousBlock: o } = this.Editor.BlockManager;
    if (!t)
      return !1;
    const { previousInput: i, currentInput: s } = t, r = s !== void 0 ? Ne(s) : void 0, a = e || r || !t.focusable;
    return i && a ? (this.setToInput(i, this.positions.END), !0) : o !== null && a ? (this.setToBlock(o, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(Ye.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${Ye.CSS.shadowCaret}`);
    if (!t)
      return;
    new b().expandToTag(t);
    const i = document.createRange();
    i.selectNode(t), i.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), i = b.get(), s = b.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((c) => t.appendChild(c)), t.childNodes.length === 0 && t.appendChild(new Text());
    const r = t.lastChild;
    s.deleteContents(), s.insertNode(t);
    const a = document.createRange(), l = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
    l !== null && l.textContent !== null && a.setStart(l, l.textContent.length), i.removeAllRanges(), i.addRange(a);
  }
}
class la extends E {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor;
      if (e.relatedTarget === null && e.target === null)
        return;
      const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, s = t.getBlockByChildNode(e.target);
      if (!(!i || !s) && s !== i) {
        if (i === this.firstSelectedBlock) {
          b.get().removeAllRanges(), i.selected = !0, s.selected = !0, o.clearCache();
          return;
        }
        if (s === this.firstSelectedBlock) {
          i.selected = !1, s.selected = !1, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, s), this.lastSelectedBlock = s;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== qn.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * Return boolean is cross block selection started:
   * there should be at least 2 selected blocks
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), b.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), s = t.blocks[i];
    s && (this.lastSelectedBlock.selected !== s.selected ? (s.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = s, this.Editor.InlineToolbar.close(), s.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor, s = t.blocks.indexOf(this.firstSelectedBlock), r = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && s > -1 && r > -1 && e && e instanceof KeyboardEvent)
      switch (e.keyCode) {
        case y.DOWN:
        case y.RIGHT:
          i.setToBlock(t.blocks[Math.max(s, r)], i.positions.END);
          break;
        case y.UP:
        case y.LEFT:
          i.setToBlock(t.blocks[Math.min(s, r)], i.positions.START);
          break;
        default:
          i.setToBlock(t.blocks[Math.max(s, r)], i.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: i } = this.Editor, s = o.blocks.indexOf(e), r = o.blocks.indexOf(t), a = e.selected !== t.selected;
    for (let l = Math.min(s, r); l <= Math.max(s, r); l++) {
      const c = o.blocks[l];
      c !== this.firstSelectedBlock && c !== (a ? e : t) && (o.blocks[l].selected = !o.blocks[l].selected, i.clearCache());
    }
  }
}
class ca extends E {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Paste: o,
      Caret: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((r) => {
      r.dropTarget = !1;
    }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const s = t.setCurrentBlockByChildNode(e.target);
    if (s)
      this.Editor.Caret.setToBlock(s, i.positions.END);
    else {
      const r = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(r, i.positions.END);
    }
    await o.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
const da = 180, ua = 400;
class ha extends E {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = ua, this.mutationObserver = new MutationObserver((o) => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on($o, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(zo, () => {
      this.disable();
    }), this.eventsDispatcher.on(Uo, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !A(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(ft, {
      mutations: e
    });
  }
}
const Rn = class Dn extends E {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
      try {
        const t = e.create({}, {}, !1);
        if (e.pasteConfig === !1) {
          this.exceptionList.push(e.name);
          return;
        }
        if (!A(t.onPaste))
          return;
        this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
      } catch (t) {
        S(
          `Paste handling for «${e.name}» Tool hasn't been set up because of the error`,
          "warn",
          t
        );
      }
    }, this.handlePasteEvent = async (e) => {
      const { BlockManager: t, Toolbar: o } = this.Editor, i = t.setCurrentBlockByChildNode(e.target);
      !i || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(e, t = !1) {
    const { Tools: o } = this.Editor, i = e.types;
    if ((i.includes ? i.includes("Files") : i.contains("Files")) && !V(this.toolsFiles)) {
      await this.processFiles(e.files);
      return;
    }
    const r = e.getData(this.MIME_TYPE), a = e.getData("text/plain");
    let l = e.getData("text/html");
    if (r)
      try {
        this.insertEditorJSData(JSON.parse(r));
        return;
      } catch {
      }
    t && a.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : a) + "</p>");
    const c = Object.keys(this.toolsTags).reduce((p, g) => (p[g.toLowerCase()] = this.toolsTags[g].sanitizationConfig ?? {}, p), {}), d = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), { br: {} }), h = Z(l, d);
    !h.trim() || h.trim() === a || !u.isHTMLString(h) ? await this.processText(a) : await this.processText(h, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(e, t = !1) {
    const { Caret: o, BlockManager: i } = this.Editor, s = t ? this.processHTML(e) : this.processPlain(e);
    if (!s.length)
      return;
    if (s.length === 1) {
      s[0].isBlock ? this.processSingleBlock(s.pop()) : this.processInlinePaste(s.pop());
      return;
    }
    const a = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
    s.map(
      async (l, c) => this.insertBlock(l, c === 0 && a)
    ), i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(e) {
    return te(e) ? [e] : D(e) ? Object.keys(e) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const t = e.pasteConfig.tags || [], o = [];
    t.forEach((i) => {
      const s = this.collectTagNames(i);
      o.push(...s), s.forEach((r) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, r)) {
          S(
            `Paste handler for «${e.name}» Tool on «${r}» tag is skipped because it is already used by «${this.toolsTags[r].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const a = D(i) ? i[r] : null;
        this.toolsTags[r.toUpperCase()] = {
          tool: e,
          sanitizationConfig: a
        };
      });
    }), this.tagsByTool[e.name] = o.map((i) => i.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const { files: t = {} } = e.pasteConfig;
    let { extensions: o, mimeTypes: i } = t;
    !o && !i || (o && !Array.isArray(o) && (S(`«extensions» property of the onDrop config for «${e.name}» Tool should be an array`), o = []), i && !Array.isArray(i) && (S(`«mimeTypes» property of the onDrop config for «${e.name}» Tool should be an array`), i = []), i && (i = i.filter((s) => ei(s) ? !0 : (S(`MIME type value «${s}» for the «${e.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[e.name] = {
      extensions: o || [],
      mimeTypes: i || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(e) {
    e.pasteConfig === !1 || !e.pasteConfig.patterns || V(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o]) => {
      o instanceof RegExp || S(
        `Pattern ${o} for «${e.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: t,
        pattern: o,
        tool: e
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(e) {
    return u.isNativeInput(e);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    o = await Promise.all(
      Array.from(e).map((r) => this.processFile(r))
    ), o = o.filter((r) => !!r);
    const s = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
    o.forEach(
      (r, a) => {
        t.paste(r.type, r.event, a === 0 && s);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(e) {
    const t = Jn(e), o = Object.entries(this.toolsFiles).find(([r, { mimeTypes: a, extensions: l }]) => {
      const [c, d] = e.type.split("/"), h = l.find((g) => g.toLowerCase() === t.toLowerCase()), p = a.find((g) => {
        const [f, v] = g.split("/");
        return f === c && (v === d || v === "*");
      });
      return !!h || !!p;
    });
    if (!o)
      return;
    const [i] = o;
    return {
      event: this.composePasteEvent("file", {
        file: e
      }),
      type: i
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(e) {
    const { Tools: t } = this.Editor, o = u.make("DIV");
    return o.innerHTML = e, this.getNodes(o).map((s) => {
      let r, a = t.defaultTool, l = !1;
      switch (s.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          r = u.make("div"), r.appendChild(s);
          break;
        case Node.ELEMENT_NODE:
          r = s, l = !0, this.toolsTags[r.tagName] && (a = this.toolsTags[r.tagName].tool);
          break;
      }
      const { tags: c } = a.pasteConfig || { tags: [] }, d = c.reduce((g, f) => (this.collectTagNames(f).forEach((O) => {
        const T = D(f) ? f[O] : null;
        g[O.toLowerCase()] = T || {};
      }), g), {}), h = Object.assign({}, d, a.baseSanitizeConfig);
      if (r.tagName.toLowerCase() === "table") {
        const g = Z(r.outerHTML, h);
        r = u.make("div", void 0, {
          innerHTML: g
        }).firstChild;
      } else
        r.innerHTML = Z(r.innerHTML, h);
      const p = this.composePasteEvent("tag", {
        data: r
      });
      return {
        content: r,
        isBlock: l,
        tool: a.name,
        event: p
      };
    }).filter((s) => {
      const r = u.isEmpty(s.content), a = u.isSingleTag(s.content);
      return !r || a;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(e) {
    const { defaultBlock: t } = this.config;
    if (!e)
      return [];
    const o = t;
    return e.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
      const s = u.make("div");
      s.textContent = i;
      const r = this.composePasteEvent("tag", {
        data: s
      });
      return {
        content: s,
        tool: o,
        isBlock: !1,
        event: r
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(e) {
    const { Caret: t, BlockManager: o } = this.Editor, { currentBlock: i } = o;
    if (!i || e.tool !== i.name || !u.containsOnlyInlineElements(e.content.innerHTML)) {
      this.insertBlock(e, (i == null ? void 0 : i.tool.isDefault) && i.isEmpty);
      return;
    }
    t.insertContentAtCaretPosition(e.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { content: i } = e;
    if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < Dn.PATTERN_PROCESSING_MAX_LENGTH) {
      const r = await this.processPattern(i.textContent);
      if (r) {
        const a = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, l = t.paste(r.tool, r.event, a);
        o.setToBlock(l, o.positions.END);
        return;
      }
    }
    if (t.currentBlock && t.currentBlock.currentInput) {
      const r = t.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        Z(i.innerHTML, r)
      );
    } else
      this.insertBlock(e);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(e) {
    const t = this.toolsPatterns.find((i) => {
      const s = i.pattern.exec(e);
      return s ? e === s.shift() : !1;
    });
    return t ? {
      event: this.composePasteEvent("pattern", {
        key: t.key,
        data: e
      }),
      tool: t.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(e, t = !1) {
    const { BlockManager: o, Caret: i } = this.Editor, { currentBlock: s } = o;
    let r;
    if (t && s && s.isEmpty) {
      r = o.paste(e.tool, e.event, !0), i.setToBlock(r, i.positions.END);
      return;
    }
    r = o.paste(e.tool, e.event), i.setToBlock(r, i.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(e) {
    const { BlockManager: t, Caret: o, Tools: i } = this.Editor;
    yt(
      e,
      (r) => i.blockTools.get(r).sanitizeConfig
    ).forEach(({ tool: r, data: a }, l) => {
      let c = !1;
      l === 0 && (c = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
      const d = t.insert({
        tool: r,
        data: a,
        replace: c
      });
      o.setToBlock(d, o.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(e, t, o) {
    const i = Object.keys(this.toolsTags), s = e, { tool: r } = this.toolsTags[s.tagName] || {}, a = this.tagsByTool[r == null ? void 0 : r.name] || [], l = i.includes(s.tagName), c = u.blockElements.includes(s.tagName.toLowerCase()), d = Array.from(s.children).some(
      ({ tagName: p }) => i.includes(p) && !a.includes(p)
    ), h = Array.from(s.children).some(
      ({ tagName: p }) => u.blockElements.includes(p.toLowerCase())
    );
    if (!c && !l && !d)
      return o.appendChild(s), [...t, o];
    if (l && !d || c && !h && !d)
      return [...t, o, s];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let o;
    const i = (s, r) => {
      if (u.isEmpty(r) && !u.isSingleTag(r))
        return s;
      const a = s[s.length - 1];
      let l = new DocumentFragment();
      switch (a && u.isFragment(a) && (l = s.pop()), r.nodeType) {
        case Node.ELEMENT_NODE:
          if (o = this.processElementNode(r, s, l), o)
            return o;
          break;
        case Node.TEXT_NODE:
          return l.appendChild(r), [...s, l];
        default:
          return [...s, l];
      }
      return [...s, ...Array.from(r.childNodes).reduce(i, [])];
    };
    return t.reduce(i, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
Rn.PATTERN_PROCESSING_MAX_LENGTH = 450;
let pa = Rn;
class fa extends E {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o = [];
    Array.from(t.entries()).forEach(([i, s]) => {
      s.isReadOnlySupported || o.push(i);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, !0);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param state - (optional) read-only state or toggle
   * @param isInitial - (optional) true when editor is initializing
   */
  async toggle(e = !this.readOnlyEnabled, t = !1) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const o = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const s in this.Editor)
      this.Editor[s].toggleReadOnly && this.Editor[s].toggleReadOnly(e);
    if (o === e)
      return this.readOnlyEnabled;
    if (t)
      return this.readOnlyEnabled;
    this.Editor.ModificationsObserver.disable();
    const i = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new Ho(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class Be extends E {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const s = [
      `.${R.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], r = o.closest("." + this.Editor.UI.CSS.editorWrapper), a = s.some((l) => !!o.closest(l));
    !r || a || (this.mousedown = !0, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (t) => {
      this.processMouseDown(t);
    }, !1), this.listeners.on(document.body, "mousemove", dt((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", dt((t) => {
      this.processScroll(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, !1);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    if (e.button !== this.MAIN_MOUSE_BUTTON)
      return;
    e.target.closest(u.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = u.make("div", Be.CSS.overlay, {}), i = u.make("div", Be.CSS.overlayContainer, {}), s = u.make("div", Be.CSS.rect, {});
    return i.appendChild(s), o.appendChild(i), t.appendChild(o), this.overlayRectangle = s, {
      container: t,
      overlay: o
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o, index: i } = this.genInfoForMouseSelection(), s = this.startX > t && this.mouseX > t, r = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(s || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(o);
    if (!this.rectCrossesBlocks && t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(o);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const t = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o), s = this.Editor.BlockManager.getBlockByChildNode(i);
    let r;
    s !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((h) => h.holder === s.holder));
    const a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + R.CSS.content), l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2, c = t - l, d = t + l;
    return {
      index: r,
      leftPos: c,
      rightPos: d
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, s = -1, r = 0;
    if (t)
      return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let l = r;
    o > 1 && (l = a ? i : s);
    const c = e > this.stackOfSelected[o - 1] && l === i, d = e < this.stackOfSelected[o - 1] && l === s, p = !(c || d || l === r);
    if (!p && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let v = this.stackOfSelected[o - 1] + 1 || e;
      for (v; v <= e; v++)
        this.addBlockInSelection(v);
      return;
    }
    if (!p && e < this.stackOfSelected[o - 1]) {
      for (let v = this.stackOfSelected[o - 1] - 1; v >= e; v--)
        this.addBlockInSelection(v);
      return;
    }
    if (!p)
      return;
    let g = o - 1, f;
    for (e > this.stackOfSelected[o - 1] ? f = () => e > this.stackOfSelected[g] : f = () => e < this.stackOfSelected[g]; f(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g]), this.stackOfSelected.pop(), g--;
  }
}
class ga extends E {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o, BlockManager: i } = this.Editor;
      if (e.length === 0)
        i.insert();
      else {
        const s = e.map(({ type: r, data: a, tunes: l, id: c }) => {
          o.available.has(r) === !1 && (X(`Tool «${r}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(r, a, c), r = o.stubTool);
          let d;
          try {
            d = i.composeBlock({
              id: c,
              tool: r,
              data: a,
              tunes: l
            });
          } catch (h) {
            S(`Block «${r}» skipped because of plugins error`, "error", {
              data: a,
              error: h
            }), a = this.composeStubDataForTool(r, a, c), r = o.stubTool, d = i.composeBlock({
              id: c,
              tool: r,
              data: a,
              tunes: l
            });
          }
          return d;
        });
        i.insertMany(s);
      }
      window.requestIdleCallback(() => {
        t();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, t, o) {
    const { Tools: i } = this.Editor;
    let s = e;
    if (i.unavailable.has(e)) {
      const r = i.unavailable.get(e).toolbox;
      r !== void 0 && r[0].title !== void 0 && (s = r[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: s
    };
  }
}
class ma extends E {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, i = [];
    try {
      o.forEach((a) => {
        i.push(this.getSavedData(a));
      });
      const s = await Promise.all(i), r = await yt(s, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(r);
    } catch (s) {
      X("Saving failed due to the Error %o", "error", s);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o, tool: i, data: s, tunes: r, isValid: a }) => {
      if (!a) {
        S(`Block «${i}» skipped because saved data is invalid`);
        return;
      }
      if (i === this.Editor.Tools.stubTool) {
        t.push(s);
        return;
      }
      const l = {
        id: o,
        type: i,
        data: s,
        ...!V(r) && {
          tunes: r
        }
      };
      t.push(l);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.31.0"
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const ba = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function va(n) {
  const e = document.createElement("div");
  e.innerHTML = n.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class fo {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : fo.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? !1;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const t = va(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: ba,
      title: "Text"
    };
  }
}
class go {
  constructor() {
    this.commandName = "bold";
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return {
      icon: Ki,
      name: "bold",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName)
    };
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
go.isInline = !0;
go.title = "Bold";
class mo {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Ji, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
mo.isInline = !0;
mo.title = "Italic";
class bo {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Co, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = ns, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = Co, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new b();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), S("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
    return !t && !o && !i && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
bo.isInline = !0;
bo.title = "Link";
class Fn {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
  }
  /**
   * Returns tool's UI config
   */
  async render() {
    const e = b.get(), t = this.blocksAPI.getBlockByElement(e.anchorNode);
    if (t === void 0)
      return [];
    const o = this.toolsAPI.getBlockTools(), i = await Yo(t, o);
    if (i.length === 0)
      return [];
    const s = i.reduce((c, d) => {
      var h;
      return (h = d.toolbox) == null || h.forEach((p) => {
        c.push({
          icon: p.icon,
          title: z.t(K.toolNames, p.title),
          name: d.name,
          closeOnActivate: !0,
          onActivate: async () => {
            const g = await this.blocksAPI.convert(t.id, d.name, p.data);
            this.caretAPI.setToBlock(g, "end");
          }
        });
      }), c;
    }, []), r = await t.getActiveToolboxEntry(), a = r !== void 0 ? r.icon : Go, l = !be();
    return {
      icon: a,
      name: "convert-to",
      hint: {
        title: this.i18nAPI.t("Convert to")
      },
      children: {
        searchable: l,
        items: s,
        onOpen: () => {
          l && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
        },
        onClose: () => {
          l && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
        }
      }
    };
  }
}
Fn.isInline = !0;
class jn {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = u.make("div", this.CSS.wrapper), t = is, o = u.make("div", this.CSS.info), i = u.make("div", this.CSS.title, {
      textContent: this.title
    }), s = u.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(i), o.appendChild(s), e.appendChild(o), e;
  }
}
jn.isReadOnlySupported = !0;
class ka extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[We.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Allows inline tool to be available in read-only mode
   * Can be used, for example, by comments tool
   */
  get isReadOnlySupported() {
    return this.constructable[We.IsReadOnlySupported] ?? !1;
  }
}
class ya extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block: t,
      data: e
    });
  }
}
class j extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new j(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new j(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new j(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new j(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new j(e);
  }
}
var wa = Object.defineProperty, Ea = Object.getOwnPropertyDescriptor, Hn = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Ea(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && wa(e, t, i), i;
};
class vo extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Block, this.inlineTools = new j(), this.tunes = new j();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[pe.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[pe.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[pe.Toolbox], t = this.config[Pe.Toolbox];
    if (!V(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, i) => {
        const s = e[i];
        return s ? {
          ...s,
          ...o
        } : o;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[pe.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[Pe.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[Pe.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[pe.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (V(e))
      return t;
    const o = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const s = e[i];
        D(s) ? o[i] = Object.assign({}, t, s) : o[i] = s;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
Hn([
  me
], vo.prototype, "sanitizeConfig", 1);
Hn([
  me
], vo.prototype, "baseSanitizeConfig", 1);
class xa {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o = !1, ...i } = this.config[e], s = this.getConstructor(t), r = t[mt.IsTune];
    return new s({
      name: e,
      constructable: t,
      config: i,
      api: this.api.getMethodsForTool(e, r),
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[We.IsInline]:
        return ka;
      case e[mt.IsTune]:
        return ya;
      default:
        return vo;
    }
  }
}
class $n {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Xi,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder, i = o.getBoundingClientRect();
    let s = Math.abs(window.innerHeight - o.offsetHeight);
    i.top < window.innerHeight && (s = window.scrollY + o.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
$n.isTune = !0;
class zn {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Gi,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
zn.isTune = !0;
class Un {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Zi,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o)
      throw new Error("Unable to move Block up since it is already the first");
    const i = t.holder, s = o.holder, r = i.getBoundingClientRect(), a = s.getBoundingClientRect();
    let l;
    a.top > 0 ? l = Math.abs(r.top) - Math.abs(a.top) : l = Math.abs(r.top) + a.height, window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
Un.isTune = !0;
var Ba = Object.defineProperty, Ca = Object.getOwnPropertyDescriptor, Ta = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Ca(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && Ba(e, t, i), i;
};
class Wn extends E {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new j(), this.toolsUnavailable = new j();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = ut({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new xa(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await Qn(t, (o) => {
      this.toolPrepareMethodSuccess(o);
    }, (o) => {
      this.toolPrepareMethodFallback(o);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      A(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      convertTo: {
        class: Fn,
        isInternal: !0
      },
      link: {
        class: bo,
        isInternal: !0
      },
      bold: {
        class: go,
        isInternal: !0
      },
      italic: {
        class: mo,
        isInternal: !0
      },
      paragraph: {
        class: fo,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: jn,
        isInternal: !0
      },
      moveUp: {
        class: Un,
        isInternal: !0
      },
      delete: {
        class: zn,
        isInternal: !0
      },
      moveDown: {
        class: $n,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const i = ["render"].filter((s) => !t.create()[s]);
      if (i.length) {
        S(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          i
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, i]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: A(i.class.prepare) ? i.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: i.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new j(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new j(
        /** Prepend ConvertTo Inline Tool */
        ["convertTo", ...e.enabledInlineTools].map((t) => [t, this.inlineTools.get(t)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new j(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new j([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new j(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new j([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!A(t) && !A(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      D(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
    return e;
  }
}
Ta([
  me
], Wn.prototype, "getAllInlineToolsSanitizeConfig", 1);
const Sa = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
class Ia extends E {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = null, this.resizeDebouncer = Eo(() => {
      this.windowResize();
    }, 200), this.selectionChangeDebounced = Eo(() => {
      this.selectionChanged();
    }, da), this.documentTouchedListener = (e) => {
      this.documentTouched(e);
    };
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache !== null)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${R.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.setIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.unbindReadOnlySensitiveListeners() : window.requestIdleCallback(() => {
      this.bindReadOnlySensitiveListeners();
    }, {
      timeout: 2e3
    });
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o } = this.Editor;
    return !!(t.opened || o.opened || e.toolbox.opened);
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof ce).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "", this.unbindReadOnlyInsensitiveListeners();
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o } = this.Editor;
    t.close(), o.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and save the result
   */
  setIsMobile() {
    const e = window.innerWidth < Ro;
    e !== this.isMobile && this.eventsDispatcher.emit(Te, {
      isEnabled: this.isMobile
    }), this.isMobile = e;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = u.getHolder(this.config.holder), this.nodes.wrapper = u.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = u.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper), this.bindReadOnlyInsensitiveListeners();
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (u.get(e))
      return;
    const t = u.make("style", null, {
      id: e,
      textContent: Sa.toString()
    });
    this.config.style && !V(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), u.prepend(document.head, t);
  }
  /**
   * Adds listeners that should work both in read-only and read-write modes
   */
  bindReadOnlyInsensitiveListeners() {
    this.listeners.on(document, "selectionchange", this.selectionChangeDebounced), this.listeners.on(window, "resize", this.resizeDebouncer, {
      passive: !0
    }), this.listeners.on(this.nodes.redactor, "mousedown", this.documentTouchedListener, {
      capture: !0,
      passive: !0
    }), this.listeners.on(this.nodes.redactor, "touchstart", this.documentTouchedListener, {
      capture: !0,
      passive: !0
    });
  }
  /**
   * Removes listeners that should work both in read-only and read-write modes
   */
  unbindReadOnlyInsensitiveListeners() {
    this.listeners.off(document, "selectionchange", this.selectionChangeDebounced), this.listeners.off(window, "resize", this.resizeDebouncer), this.listeners.off(this.nodes.redactor, "mousedown", this.documentTouchedListener), this.listeners.off(this.nodes.redactor, "touchstart", this.documentTouchedListener);
  }
  /**
   * Adds listeners that should work only in read-only mode
   */
  bindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (e) => {
      this.redactorClicked(e);
    }, !1), this.readOnlyMutableListeners.on(document, "keydown", (e) => {
      this.documentKeydown(e);
    }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (e) => {
      this.documentClicked(e);
    }, !0), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", dt((t) => {
      const o = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(ln, {
        block: this.Editor.BlockManager.getBlockByChildNode(o)
      }));
    }, 20), {
      passive: !0
    });
  }
  /**
   * Unbind events that should work only in read-only mode
   */
  unbindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.setIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case y.ENTER:
        this.enterPressed(e);
        break;
      case y.BACKSPACE:
      case y.DELETE:
        this.backspacePressed(e);
        break;
      case y.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && i || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      const s = t.removeSelectedBlocks(), r = t.insertDefaultBlockAtIndex(s, !0);
      i.setToBlock(r, i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    if (this.someToolbarOpened)
      return;
    const i = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const s = this.Editor.BlockManager.insert();
      e.preventDefault(), this.Editor.Caret.setToBlock(s), this.Editor.Toolbar.moveAndOpen(s);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    var a, l;
    if (!e.isTrusted)
      return;
    const t = e.target;
    this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    const i = (a = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : a.contains(t), s = (l = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : l.contains(t), r = i || s;
    if (this.Editor.BlockSettings.opened && !r) {
      this.Editor.BlockSettings.close();
      const c = this.Editor.BlockManager.getBlockByChildNode(t);
      this.Editor.Toolbar.moveAndOpen(c);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.ReadOnly.isEnabled || this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    if (!b.isCollapsed)
      return;
    const t = e.target, o = e.metaKey || e.ctrlKey;
    if (u.isAnchor(t) && o) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const i = t.getAttribute("href"), s = oi(i);
      ii(s);
      return;
    }
    this.processBottomZoneClick(e);
  }
  /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1), o = u.offset(t.holder).bottom, i = e.pageY, { BlockSelection: s } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !s.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    o < i) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: a, Caret: l, Toolbar: c } = this.Editor;
      (!a.lastBlock.tool.isDefault || !a.lastBlock.isEmpty) && a.insertAtEnd(), l.setToTheLastBlock(), c.moveAndOpen(a.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = b.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o) {
      b.range || this.Editor.InlineToolbar.close();
      return;
    }
    const i = o.closest(`.${R.CSS.content}`);
    (i === null || i.closest(`.${b.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true")) || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o), this.Editor.InlineToolbar.tryToShow(!0));
  }
  /**
   * Editor.js provides and ability to show placeholders for empty contenteditable elements
   *
   * This method watches for input and focus events and toggles 'data-empty' attribute
   * to workaroud the case, when inputs contains only <br>s and has no visible content
   * Then, CSS could rely on this attribute to show placeholders
   */
  enableInputsEmptyMark() {
    function e(t) {
      const o = t.target;
      Do(o);
    }
    this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
  }
}
const Oa = {
  // API Modules
  BlocksAPI: gi,
  CaretAPI: bi,
  EventsAPI: vi,
  I18nAPI: kt,
  API: ki,
  InlineToolbarAPI: yi,
  ListenersAPI: wi,
  NotifierAPI: Ci,
  ReadOnlyAPI: Ti,
  SanitizerAPI: Li,
  SaverAPI: Pi,
  SelectionAPI: Ni,
  ToolsAPI: Ri,
  StylesAPI: Di,
  ToolbarAPI: Fi,
  TooltipAPI: Ui,
  UiAPI: Wi,
  // Toolbar Modules
  BlockSettings: ms,
  Toolbar: Bs,
  InlineToolbar: Cs,
  // Modules
  BlockEvents: na,
  BlockManager: ra,
  BlockSelection: aa,
  Caret: Ye,
  CrossBlockSelection: la,
  DragNDrop: ca,
  ModificationsObserver: ha,
  Paste: pa,
  ReadOnly: fa,
  RectangleSelection: Be,
  Renderer: ga,
  Saver: ma,
  Tools: Wn,
  UI: Ia
};
class _a {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new Oe();
    let t, o;
    this.isReady = new Promise((i, s) => {
      t = i, o = s;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: i, Caret: s, UI: r, ModificationsObserver: a } = this.moduleInstances;
      r.checkEmptiness(), a.enable(), this.configuration.autofocus === !0 && this.configuration.readOnly !== !0 && s.setToBlock(i.blocks[0], s.positions.START), t();
    }).catch((i) => {
      S(`Editor.js is not ready because of ${i}`, "error"), o(i);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var o, i;
    D(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, ht(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = Lo.VERBOSE), Zn(this.config.logLevel), ht(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const t = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && z.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (te(t) && !u.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && D(t) && !u.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (t, o) => t.then(async () => {
        try {
          await this.moduleInstances[o].prepare();
        } catch (i) {
          if (i instanceof Ho)
            throw new Error(i.message);
          S(`Module ${o} was skipped because of %o`, "warn", i);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(Oa).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        S("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances)
      o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
class Aa {
  /** Editor version */
  static get version() {
    return "2.31.0";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    D(e) && A(e.onReady) && (t = e.onReady);
    const o = new _a(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o = () => {
      Object.values(e.moduleInstances).forEach((s) => {
        A(s.destroy) && s.destroy(), s.listeners.removeAll();
      }), zi(), e = null;
      for (const s in this)
        Object.prototype.hasOwnProperty.call(this, s) && delete this[s];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((s) => {
      this[s] = e[s];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([s, r]) => {
      Object.entries(r).forEach(([a, l]) => {
        this[l] = e.moduleInstances.API.methods[s][a];
      });
    });
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/header/dist/header.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@editorjs/header/dist/header.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ v)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
class v {
  constructor({ data: e, config: t, api: s, readOnly: r }) {
    this.api = s, this.readOnly = r, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
  }
  /**
   * Styles
   */
  get _CSS() {
    return {
      block: this.api.styles.block,
      wrapper: "ce-header"
    };
  }
  /**
   * Check if data is valid
   * 
   * @param {any} data - data to check
   * @returns {data is HeaderData}
   * @private
   */
  isHeaderData(e) {
    return e.text !== void 0;
  }
  /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */
  normalizeData(e) {
    const t = { text: "", level: this.defaultLevel.number };
    return this.isHeaderData(e) && (t.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (t.level = parseInt(e.level.toString()))), t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLHeadingElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Returns header block tunes config
   *
   * @returns {Array}
   */
  renderSettings() {
    return this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number,
      render: () => document.createElement("div")
    }));
  }
  /**
   * Callback for Block's settings buttons
   *
   * @param {number} level - level to set
   */
  setLevel(e) {
    this.data = {
      level: e,
      text: this.data.text
    };
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {HeaderData} data - saved data to merger with current block
   * @public
   */
  merge(e) {
    this._element.insertAdjacentHTML("beforeend", e.text);
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.text.trim() !== "";
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Allow Header to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      export: "text",
      // use 'text' property for other blocks
      import: "text"
      // fill 'text' property from other block's export string
    };
  }
  /**
   * Sanitizer Rules
   */
  static get sanitize() {
    return {
      level: !1,
      text: {}
    };
  }
  /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {HeaderData} Current data
   * @private
   */
  get data() {
    return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */
  set data(e) {
    if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
      const t = this.getTag();
      t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */
  getTag() {
    const e = document.createElement(this.currentLevel.tag);
    return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
  }
  /**
   * Get current level
   *
   * @returns {level}
   */
  get currentLevel() {
    let e = this.levels.find((t) => t.number === this._data.level);
    return e || (e = this.defaultLevel), e;
  }
  /**
   * Return default level
   *
   * @returns {level}
   */
  get defaultLevel() {
    if (this._settings.defaultLevel) {
      const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
      if (e)
        return e;
      console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
    }
    return this.levels[1];
  }
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */
  /**
   * Available header levels
   *
   * @returns {level[]}
   */
  get levels() {
    const e = [
      {
        number: 1,
        tag: "H1",
        svg: a
      },
      {
        number: 2,
        tag: "H2",
        svg: l
      },
      {
        number: 3,
        tag: "H3",
        svg: o
      },
      {
        number: 4,
        tag: "H4",
        svg: h
      },
      {
        number: 5,
        tag: "H5",
        svg: d
      },
      {
        number: 6,
        tag: "H6",
        svg: u
      }
    ];
    return this._settings.levels ? e.filter(
      (t) => this._settings.levels.includes(t.number)
    ) : e;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(e) {
    const t = e.detail;
    if ("data" in t) {
      const s = t.data;
      let r = this.defaultLevel.number;
      switch (s.tagName) {
        case "H1":
          r = 1;
          break;
        case "H2":
          r = 2;
          break;
        case "H3":
          r = 3;
          break;
        case "H4":
          r = 4;
          break;
        case "H5":
          r = 5;
          break;
        case "H6":
          r = 6;
          break;
      }
      this._settings.levels && (r = this._settings.levels.reduce((n, i) => Math.abs(i - r) < Math.abs(n - r) ? i : n)), this.data = {
        level: r,
        text: s.innerHTML
      };
    }
  }
  /**
   * Used by Editor.js paste handling API.
   * Provides configuration to handle H1-H6 tags.
   *
   * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
    };
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: g,
      title: "Heading"
    };
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/list/dist/editorjs-list.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@editorjs/list/dist/editorjs-list.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ G)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s)}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counters(item,".",var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"•"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list__checkbox-check--disabled{pointer-events:none}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}')),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
const Ct = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>', Ae = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', $e = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', Be = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>', St = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.2L10 7.4135C10 7.32872 9.90111 7.28241 9.83598 7.33668L7 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>', Ot = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 9.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 7.01L10 7" stroke="black" stroke-width="1.8" stroke-linecap="round"/></svg>', kt = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 7.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>', _t = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0087 14.2H16" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M7 14.2L7.78865 12M13 14.2L12.1377 12M7.78865 12C7.78865 12 9.68362 7 10 7C10.3065 7 12.1377 12 12.1377 12M7.78865 12L12.1377 12" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>', Et = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2087 14.2H14.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M11.5 14.5C11.5 14.5 11 13.281 11 12.5M7 9.5C7 9.5 7.5 8.5 9 8.5C10.5 8.5 11 9.5 11 10.5L11 11.5M11 11.5L11 12.5M11 11.5C11 11.5 7 11 7 13C7 15.3031 11 15 11 12.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>', It = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14.2L8 7.4135C8 7.32872 7.90111 7.28241 7.83598 7.33668L5 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13L16.4167 10.7778M16.4167 10.7778L14 8.5M16.4167 10.7778H11.6562" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wt(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var c = {}, V = {}, Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.allInputsSelector = Pt;
function Pt() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.allInputsSelector = void 0;
  var t = Y;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
})(V);
var k = {}, J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
J.isNativeInput = jt;
function jt(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : !1;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNativeInput = void 0;
  var t = J;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return t.isNativeInput;
  } });
})(k);
var Fe = {}, Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.append = Tt;
function Tt(e, t) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.appendChild(n);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.append = void 0;
  var t = Q;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return t.append;
  } });
})(Fe);
var Z = {}, x = {};
Object.defineProperty(x, "__esModule", { value: !0 });
x.blockElements = Lt;
function Lt() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.blockElements = void 0;
  var t = x;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return t.blockElements;
  } });
})(Z);
var Re = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.calculateBaseline = Mt;
function Mt(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r = parseFloat(t.lineHeight) || n * 1.2, i = parseFloat(t.paddingTop), a = parseFloat(t.borderTopWidth), l = parseFloat(t.marginTop), s = n * 0.8, o = (r - n) / 2, d = l + a + i + o + s;
  return d;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateBaseline = void 0;
  var t = ee;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return t.calculateBaseline;
  } });
})(Re);
var qe = {}, te = {}, ne = {}, re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.isContentEditable = Nt;
function Nt(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isContentEditable = void 0;
  var t = re;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return t.isContentEditable;
  } });
})(ne);
Object.defineProperty(te, "__esModule", { value: !0 });
te.canSetCaret = Bt;
var At = k, $t = ne;
function Bt(e) {
  var t = !0;
  if ((0, At.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = !1;
        break;
    }
  else
    t = (0, $t.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.canSetCaret = void 0;
  var t = te;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return t.canSetCaret;
  } });
})(qe);
var $ = {}, ie = {};
function Wt(e, t, n) {
  const r = n.value !== void 0 ? "value" : "get", i = n[r], a = `#${t}Cache`;
  if (n[r] = function(...l) {
    return this[a] === void 0 && (this[a] = i.apply(this, l)), this[a];
  }, r === "get" && n.set) {
    const l = n.set;
    n.set = function(s) {
      delete e[a], l.apply(this, s);
    };
  }
  return n;
}
function Ue() {
  const e = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
  return t !== void 0 && (e[t] = !0), e;
}
function ae(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function Dt(e) {
  return !ae(e);
}
const Ht = () => typeof window < "u" && window.navigator !== null && ae(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Ft(e) {
  const t = Ue();
  return e = e.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function Rt(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function qt(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n = window.getSelection(), r = document.createRange();
  if (r.selectNode(t), n === null)
    throw new Error("Cannot copy text to clipboard");
  n.removeAllRanges(), n.addRange(r), document.execCommand("copy"), document.body.removeChild(t);
}
function Ut(e, t, n) {
  let r;
  return (...i) => {
    const a = this, l = () => {
      r = void 0, n !== !0 && e.apply(a, i);
    }, s = n === !0 && r !== void 0;
    window.clearTimeout(r), r = window.setTimeout(l, t), s && e.apply(a, i);
  };
}
function S(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Kt(e) {
  return S(e) === "boolean";
}
function Ke(e) {
  return S(e) === "function" || S(e) === "asyncfunction";
}
function zt(e) {
  return Ke(e) && /^\s*class\s+/.test(e.toString());
}
function Xt(e) {
  return S(e) === "number";
}
function M(e) {
  return S(e) === "object";
}
function Gt(e) {
  return Promise.resolve(e) === e;
}
function Vt(e) {
  return S(e) === "string";
}
function Yt(e) {
  return S(e) === "undefined";
}
function X(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (M(e) && M(n))
    for (const r in n)
      M(n[r]) ? (e[r] === void 0 && Object.assign(e, { [r]: {} }), X(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return X(e, ...t);
}
function Jt(e, t, n) {
  const r = `«${t}» is deprecated and will be removed in the next major release. Please use the «${n}» instead.`;
  e && console.warn(r);
}
function Qt(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function Zt(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
const xt = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, en = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class tn {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n, r) => {
      this.completed = this.completed.then(t).then(n).catch(r);
    });
  }
}
function nn(e, t, n = void 0) {
  let r, i, a, l = null, s = 0;
  n || (n = {});
  const o = function() {
    s = n.leading === !1 ? 0 : Date.now(), l = null, a = e.apply(r, i), l === null && (r = i = null);
  };
  return function() {
    const d = Date.now();
    !s && n.leading === !1 && (s = d);
    const u = t - (d - s);
    return r = this, i = arguments, u <= 0 || u > t ? (l && (clearTimeout(l), l = null), s = d, a = e.apply(r, i), l === null && (r = i = null)) : !l && n.trailing !== !1 && (l = setTimeout(o, u)), a;
  };
}
const rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: tn,
  beautifyShortcut: Ft,
  cacheable: Wt,
  capitalize: Rt,
  copyTextToClipboard: qt,
  debounce: Ut,
  deepMerge: X,
  deprecationAssert: Jt,
  getUserOS: Ue,
  getValidUrl: Qt,
  isBoolean: Kt,
  isClass: zt,
  isEmpty: Dt,
  isFunction: Ke,
  isIosDevice: Ht,
  isNumber: Xt,
  isObject: M,
  isPrintableKey: Zt,
  isPromise: Gt,
  isString: Vt,
  isUndefined: Yt,
  keyCodes: xt,
  mouseButtons: en,
  notEmpty: ae,
  throttle: nn,
  typeOf: S
}, Symbol.toStringTag, { value: "Module" })), le = /* @__PURE__ */ wt(rn);
Object.defineProperty(ie, "__esModule", { value: !0 });
ie.containsOnlyInlineElements = sn;
var an = le, ln = Z;
function sn(e) {
  var t;
  (0, an.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n = function(r) {
    return !(0, ln.blockElements)().includes(r.tagName.toLowerCase()) && Array.from(r.children).every(n);
  };
  return Array.from(t.children).every(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.containsOnlyInlineElements = void 0;
  var t = ie;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return t.containsOnlyInlineElements;
  } });
})($);
var ze = {}, se = {}, B = {}, oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.make = on;
function on(e, t, n) {
  var r;
  t === void 0 && (t = null), n === void 0 && (n = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var a = t.filter(function(s) {
      return s !== void 0;
    });
    (r = i.classList).add.apply(r, a);
  } else
    t !== null && i.classList.add(t);
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) && (i[l] = n[l]);
  return i;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.make = void 0;
  var t = oe;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return t.make;
  } });
})(B);
Object.defineProperty(se, "__esModule", { value: !0 });
se.fragmentToString = cn;
var un = B;
function cn(e) {
  var t = (0, un.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.fragmentToString = void 0;
  var t = se;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return t.fragmentToString;
  } });
})(ze);
var Xe = {}, ue = {};
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.getContentLength = fn;
var dn = k;
function fn(e) {
  var t, n;
  return (0, dn.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContentLength = void 0;
  var t = ue;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return t.getContentLength;
  } });
})(Xe);
var ce = {}, de = {}, We = A && A.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(de, "__esModule", { value: !0 });
de.getDeepestBlockElements = Ge;
var pn = $;
function Ge(e) {
  return (0, pn.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
    return We(We([], t, !0), Ge(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestBlockElements = void 0;
  var t = de;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return t.getDeepestBlockElements;
  } });
})(ce);
var Ve = {}, fe = {}, W = {}, pe = {};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.isLineBreakTag = hn;
function hn(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLineBreakTag = void 0;
  var t = pe;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return t.isLineBreakTag;
  } });
})(W);
var D = {}, he = {};
Object.defineProperty(he, "__esModule", { value: !0 });
he.isSingleTag = mn;
function mn(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isSingleTag = void 0;
  var t = he;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return t.isSingleTag;
  } });
})(D);
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.getDeepestNode = Ye;
var gn = k, vn = W, bn = D;
function Ye(e, t) {
  t === void 0 && (t = !1);
  var n = t ? "lastChild" : "firstChild", r = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
    var i = e[n];
    if ((0, bn.isSingleTag)(i) && !(0, gn.isNativeInput)(i) && !(0, vn.isLineBreakTag)(i))
      if (i[r])
        i = i[r];
      else if (i.parentNode !== null && i.parentNode[r])
        i = i.parentNode[r];
      else
        return i.parentNode;
    return Ye(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getDeepestNode = void 0;
  var t = fe;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return t.getDeepestNode;
  } });
})(Ve);
var Je = {}, me = {}, T = A && A.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(me, "__esModule", { value: !0 });
me.findAllInputs = kn;
var yn = $, Cn = ce, Sn = V, On = k;
function kn(e) {
  return Array.from(e.querySelectorAll((0, Sn.allInputsSelector)())).reduce(function(t, n) {
    return (0, On.isNativeInput)(n) || (0, yn.containsOnlyInlineElements)(n) ? T(T([], t, !0), [n], !1) : T(T([], t, !0), (0, Cn.getDeepestBlockElements)(n), !0);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.findAllInputs = void 0;
  var t = me;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return t.findAllInputs;
  } });
})(Je);
var Qe = {}, ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.isCollapsedWhitespaces = _n;
function _n(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCollapsedWhitespaces = void 0;
  var t = ge;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(Qe);
var ve = {}, be = {};
Object.defineProperty(be, "__esModule", { value: !0 });
be.isElement = In;
var En = le;
function In(e) {
  return (0, En.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isElement = void 0;
  var t = be;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return t.isElement;
  } });
})(ve);
var Ze = {}, ye = {}, Ce = {}, Se = {};
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.isLeaf = wn;
function wn(e) {
  return e === null ? !1 : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isLeaf = void 0;
  var t = Se;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return t.isLeaf;
  } });
})(Ce);
var Oe = {}, ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.isNodeEmpty = Mn;
var Pn = W, jn = ve, Tn = k, Ln = D;
function Mn(e, t) {
  var n = "";
  return (0, Ln.isSingleTag)(e) && !(0, Pn.isLineBreakTag)(e) ? !1 : ((0, jn.isElement)(e) && (0, Tn.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("​", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isNodeEmpty = void 0;
  var t = ke;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return t.isNodeEmpty;
  } });
})(Oe);
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.isEmpty = $n;
var Nn = Ce, An = Oe;
function $n(e, t) {
  e.normalize();
  for (var n = [e]; n.length > 0; ) {
    var r = n.shift();
    if (r) {
      if (e = r, (0, Nn.isLeaf)(e) && !(0, An.isNodeEmpty)(e, t))
        return !1;
      n.push.apply(n, Array.from(e.childNodes));
    }
  }
  return !0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
  var t = ye;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return t.isEmpty;
  } });
})(Ze);
var xe = {}, _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.isFragment = Wn;
var Bn = le;
function Wn(e) {
  return (0, Bn.isNumber)(e) ? !1 : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFragment = void 0;
  var t = _e;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return t.isFragment;
  } });
})(xe);
var et = {}, Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.isHTMLString = Hn;
var Dn = B;
function Hn(e) {
  var t = (0, Dn.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHTMLString = void 0;
  var t = Ee;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return t.isHTMLString;
  } });
})(et);
var tt = {}, Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.offset = Fn;
function Fn(e) {
  var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, r = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r, a = t.left + n;
  return {
    top: i,
    left: a,
    bottom: i + t.height,
    right: a + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.offset = void 0;
  var t = Ie;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return t.offset;
  } });
})(tt);
var nt = {}, we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.prepend = Rn;
function Rn(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
    return e.prepend(n);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = void 0;
  var t = we;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return t.prepend;
  } });
})(nt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = V;
  Object.defineProperty(e, "allInputsSelector", { enumerable: !0, get: function() {
    return t.allInputsSelector;
  } });
  var n = k;
  Object.defineProperty(e, "isNativeInput", { enumerable: !0, get: function() {
    return n.isNativeInput;
  } });
  var r = Fe;
  Object.defineProperty(e, "append", { enumerable: !0, get: function() {
    return r.append;
  } });
  var i = Z;
  Object.defineProperty(e, "blockElements", { enumerable: !0, get: function() {
    return i.blockElements;
  } });
  var a = Re;
  Object.defineProperty(e, "calculateBaseline", { enumerable: !0, get: function() {
    return a.calculateBaseline;
  } });
  var l = qe;
  Object.defineProperty(e, "canSetCaret", { enumerable: !0, get: function() {
    return l.canSetCaret;
  } });
  var s = $;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return s.containsOnlyInlineElements;
  } });
  var o = ze;
  Object.defineProperty(e, "fragmentToString", { enumerable: !0, get: function() {
    return o.fragmentToString;
  } });
  var d = Xe;
  Object.defineProperty(e, "getContentLength", { enumerable: !0, get: function() {
    return d.getContentLength;
  } });
  var u = ce;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return u.getDeepestBlockElements;
  } });
  var p = Ve;
  Object.defineProperty(e, "getDeepestNode", { enumerable: !0, get: function() {
    return p.getDeepestNode;
  } });
  var g = Je;
  Object.defineProperty(e, "findAllInputs", { enumerable: !0, get: function() {
    return g.findAllInputs;
  } });
  var w = Qe;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return w.isCollapsedWhitespaces;
  } });
  var _ = ne;
  Object.defineProperty(e, "isContentEditable", { enumerable: !0, get: function() {
    return _.isContentEditable;
  } });
  var ut = ve;
  Object.defineProperty(e, "isElement", { enumerable: !0, get: function() {
    return ut.isElement;
  } });
  var ct = Ze;
  Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
    return ct.isEmpty;
  } });
  var dt = xe;
  Object.defineProperty(e, "isFragment", { enumerable: !0, get: function() {
    return dt.isFragment;
  } });
  var ft = et;
  Object.defineProperty(e, "isHTMLString", { enumerable: !0, get: function() {
    return ft.isHTMLString;
  } });
  var pt = Ce;
  Object.defineProperty(e, "isLeaf", { enumerable: !0, get: function() {
    return pt.isLeaf;
  } });
  var ht = Oe;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: !0, get: function() {
    return ht.isNodeEmpty;
  } });
  var mt = W;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: !0, get: function() {
    return mt.isLineBreakTag;
  } });
  var gt = D;
  Object.defineProperty(e, "isSingleTag", { enumerable: !0, get: function() {
    return gt.isSingleTag;
  } });
  var vt = B;
  Object.defineProperty(e, "make", { enumerable: !0, get: function() {
    return vt.make;
  } });
  var bt = tt;
  Object.defineProperty(e, "offset", { enumerable: !0, get: function() {
    return bt.offset;
  } });
  var yt = nt;
  Object.defineProperty(e, "prepend", { enumerable: !0, get: function() {
    return yt.prepend;
  } });
})(c);
const m = "cdx-list", h = {
  wrapper: m,
  item: `${m}__item`,
  itemContent: `${m}__item-content`,
  itemChildren: `${m}__item-children`
};
class v {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h,
      orderedList: `${m}-ordered`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ol wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ol element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? n = c.make("ol", [v.CSS.wrapper, v.CSS.orderedList]) : n = c.make("ol", [v.CSS.orderedList, v.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param _meta - meta of the list item unused in rendering of the ordered list
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = c.make("li", v.CSS.item), i = c.make("div", v.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    });
    return r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${v.CSS.itemContent}`);
    return !n || c.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Returns item meta, for ordered list
   * @returns item meta object
   */
  getItemMeta() {
    return {};
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return {};
  }
}
class b {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h,
      unorderedList: `${m}-unordered`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ol wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ul element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? n = c.make("ul", [b.CSS.wrapper, b.CSS.unorderedList]) : n = c.make("ul", [b.CSS.unorderedList, b.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param _meta - meta of the list item unused in rendering of the unordered list
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = c.make("li", b.CSS.item), i = c.make("div", b.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    });
    return r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${b.CSS.itemContent}`);
    return !n || c.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Returns item meta, for unordered list
   * @returns Item meta object
   */
  getItemMeta() {
    return {};
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return {};
  }
}
function O(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
var j = {}, Pe = {}, H = {}, F = {};
Object.defineProperty(F, "__esModule", { value: !0 });
F.getContenteditableSlice = Un;
var qn = c;
function Un(e, t, n, r, i) {
  var a;
  i === void 0 && (i = !1);
  var l = document.createRange();
  if (r === "left" ? (l.setStart(e, 0), l.setEnd(t, n)) : (l.setStart(t, n), l.setEnd(e, e.childNodes.length)), i === !0) {
    var s = l.extractContents();
    return (0, qn.fragmentToString)(s);
  }
  var o = l.cloneContents(), d = document.createElement("div");
  d.appendChild(o);
  var u = (a = d.textContent) !== null && a !== void 0 ? a : "";
  return u;
}
Object.defineProperty(H, "__esModule", { value: !0 });
H.checkContenteditableSliceForEmptiness = Xn;
var Kn = c, zn = F;
function Xn(e, t, n, r) {
  var i = (0, zn.getContenteditableSlice)(e, t, n, r);
  return (0, Kn.isCollapsedWhitespaces)(i);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkContenteditableSliceForEmptiness = void 0;
  var t = H;
  Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return t.checkContenteditableSliceForEmptiness;
  } });
})(Pe);
var rt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getContenteditableSlice = void 0;
  var t = F;
  Object.defineProperty(e, "getContenteditableSlice", { enumerable: !0, get: function() {
    return t.getContenteditableSlice;
  } });
})(rt);
var it = {}, je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.focus = Vn;
var Gn = c;
function Vn(e, t) {
  var n, r;
  if (t === void 0 && (t = !0), (0, Gn.isNativeInput)(e)) {
    e.focus();
    var i = t ? 0 : e.value.length;
    e.setSelectionRange(i, i);
  } else {
    var a = document.createRange(), l = window.getSelection();
    if (!l)
      return;
    var s = function(g, w) {
      w === void 0 && (w = !1);
      var _ = document.createTextNode("");
      w ? g.insertBefore(_, g.firstChild) : g.appendChild(_), a.setStart(_, 0), a.setEnd(_, 0);
    }, o = function(g) {
      return g != null;
    }, d = e.childNodes, u = t ? d[0] : d[d.length - 1];
    if (o(u)) {
      for (; o(u) && u.nodeType !== Node.TEXT_NODE; )
        u = t ? u.firstChild : u.lastChild;
      if (o(u) && u.nodeType === Node.TEXT_NODE) {
        var p = (r = (n = u.textContent) === null || n === void 0 ? void 0 : n.length) !== null && r !== void 0 ? r : 0, i = t ? 0 : p;
        a.setStart(u, i), a.setEnd(u, i);
      } else
        s(e, t);
    } else
      s(e);
    l.removeAllRanges(), l.addRange(a);
  }
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.focus = void 0;
  var t = je;
  Object.defineProperty(e, "focus", { enumerable: !0, get: function() {
    return t.focus;
  } });
})(it);
var Te = {}, R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.getCaretNodeAndOffset = Yn;
function Yn() {
  var e = window.getSelection();
  if (e === null)
    return [null, 0];
  var t = e.focusNode, n = e.focusOffset;
  return t === null ? [null, 0] : (t.nodeType !== Node.TEXT_NODE && t.childNodes.length > 0 && (t.childNodes[n] !== void 0 ? (t = t.childNodes[n], n = 0) : (t = t.childNodes[n - 1], t.textContent !== null && (n = t.textContent.length))), [t, n]);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getCaretNodeAndOffset = void 0;
  var t = R;
  Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return t.getCaretNodeAndOffset;
  } });
})(Te);
var at = {}, q = {};
Object.defineProperty(q, "__esModule", { value: !0 });
q.getRange = Jn;
function Jn() {
  var e = window.getSelection();
  return e && e.rangeCount ? e.getRangeAt(0) : null;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getRange = void 0;
  var t = q;
  Object.defineProperty(e, "getRange", { enumerable: !0, get: function() {
    return t.getRange;
  } });
})(at);
var lt = {}, Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.isCaretAtEndOfInput = xn;
var De = c, Qn = Te, Zn = Pe;
function xn(e) {
  var t = (0, De.getDeepestNode)(e, !0);
  if (t === null)
    return !0;
  if ((0, De.isNativeInput)(t))
    return t.selectionEnd === t.value.length;
  var n = (0, Qn.getCaretNodeAndOffset)(), r = n[0], i = n[1];
  return r === null ? !1 : (0, Zn.checkContenteditableSliceForEmptiness)(e, r, i, "right");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCaretAtEndOfInput = void 0;
  var t = Le;
  Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return t.isCaretAtEndOfInput;
  } });
})(lt);
var st = {}, Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.isCaretAtStartOfInput = nr;
var L = c, er = R, tr = H;
function nr(e) {
  var t = (0, L.getDeepestNode)(e);
  if (t === null || (0, L.isEmpty)(e))
    return !0;
  if ((0, L.isNativeInput)(t))
    return t.selectionEnd === 0;
  if ((0, L.isEmpty)(e))
    return !0;
  var n = (0, er.getCaretNodeAndOffset)(), r = n[0], i = n[1];
  return r === null ? !1 : (0, tr.checkContenteditableSliceForEmptiness)(e, r, i, "left");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isCaretAtStartOfInput = void 0;
  var t = Me;
  Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return t.isCaretAtStartOfInput;
  } });
})(st);
var ot = {}, Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.save = ar;
var rr = c, ir = q;
function ar() {
  var e = (0, ir.getRange)(), t = (0, rr.make)("span");
  if (t.id = "cursor", t.hidden = !0, !!e)
    return e.insertNode(t), function() {
      var r = window.getSelection();
      r && (e.setStartAfter(t), e.setEndAfter(t), r.removeAllRanges(), r.addRange(e), setTimeout(function() {
        t.remove();
      }, 150));
    };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.save = void 0;
  var t = Ne;
  Object.defineProperty(e, "save", { enumerable: !0, get: function() {
    return t.save;
  } });
})(ot);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.save = e.isCaretAtStartOfInput = e.isCaretAtEndOfInput = e.getRange = e.getCaretNodeAndOffset = e.focus = e.getContenteditableSlice = e.checkContenteditableSliceForEmptiness = void 0;
  var t = Pe;
  Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: !0, get: function() {
    return t.checkContenteditableSliceForEmptiness;
  } });
  var n = rt;
  Object.defineProperty(e, "getContenteditableSlice", { enumerable: !0, get: function() {
    return n.getContenteditableSlice;
  } });
  var r = it;
  Object.defineProperty(e, "focus", { enumerable: !0, get: function() {
    return r.focus;
  } });
  var i = Te;
  Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: !0, get: function() {
    return i.getCaretNodeAndOffset;
  } });
  var a = at;
  Object.defineProperty(e, "getRange", { enumerable: !0, get: function() {
    return a.getRange;
  } });
  var l = lt;
  Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: !0, get: function() {
    return l.isCaretAtEndOfInput;
  } });
  var s = st;
  Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: !0, get: function() {
    return s.isCaretAtStartOfInput;
  } });
  var o = ot;
  Object.defineProperty(e, "save", { enumerable: !0, get: function() {
    return o.save;
  } });
})(j);
class f {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h,
      checklist: `${m}-checklist`,
      itemChecked: `${m}__checkbox--checked`,
      noHover: `${m}__checkbox--no-hover`,
      checkbox: `${m}__checkbox-check`,
      checkboxContainer: `${m}__checkbox`,
      checkboxCheckDisabled: `${m}__checkbox-check--disabled`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n) {
    this.config = n, this.readOnly = t;
  }
  /**
   * Renders ul wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ul element
   */
  renderWrapper(t) {
    let n;
    return t === !0 ? (n = c.make("ul", [f.CSS.wrapper, f.CSS.checklist]), n.addEventListener("click", (r) => {
      const i = r.target;
      if (i) {
        const a = i.closest(`.${f.CSS.checkboxContainer}`);
        a && a.contains(i) && this.toggleCheckbox(a);
      }
    })) : n = c.make("ul", [f.CSS.checklist, f.CSS.itemChildren]), n;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param meta - meta of the list item used in rendering of the checklist
   * @returns - created html list item element
   */
  renderItem(t, n) {
    const r = c.make("li", [f.CSS.item, f.CSS.item]), i = c.make("div", f.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    }), a = c.make("span", f.CSS.checkbox), l = c.make("div", f.CSS.checkboxContainer);
    return n.checked === !0 && l.classList.add(f.CSS.itemChecked), this.readOnly && l.classList.add(f.CSS.checkboxCheckDisabled), a.innerHTML = Ct, l.appendChild(a), r.appendChild(l), r.appendChild(i), r;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n = t.querySelector(`.${f.CSS.itemContent}`);
    return !n || c.isEmpty(n) ? "" : n.innerHTML;
  }
  /**
   * Return meta object of certain element
   * @param item - will be returned meta information of this item
   * @returns Item meta object
   */
  getItemMeta(t) {
    const n = t.querySelector(`.${f.CSS.checkboxContainer}`);
    return {
      checked: n ? n.classList.contains(f.CSS.itemChecked) : !1
    };
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return { checked: !1 };
  }
  /**
   * Toggle checklist item state
   * @param checkbox - checkbox element to be toggled
   */
  toggleCheckbox(t) {
    t.classList.toggle(f.CSS.itemChecked), t.classList.add(f.CSS.noHover), t.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(t), { once: !0 });
  }
  /**
   * Removes class responsible for special hover behavior on an item
   * @param el - item wrapper
   */
  removeSpecialHoverBehavior(t) {
    t.classList.remove(f.CSS.noHover);
  }
}
function U(e, t = "after") {
  const n = [];
  let r;
  function i(a) {
    switch (t) {
      case "after":
        return a.nextElementSibling;
      case "before":
        return a.previousElementSibling;
    }
  }
  for (r = i(e); r !== null; )
    n.push(r), r = i(r);
  return n.length !== 0 ? n : null;
}
function y(e, t = !0) {
  let n = e;
  return e.classList.contains(h.item) && (n = e.querySelector(`.${h.itemChildren}`)), n === null ? [] : t ? Array.from(n.querySelectorAll(`:scope > .${h.item}`)) : Array.from(n.querySelectorAll(`.${h.item}`));
}
function lr(e) {
  return e.nextElementSibling === null;
}
function sr(e) {
  return e.querySelector(`.${h.itemChildren}`) !== null;
}
function C(e) {
  return e.querySelector(`.${h.itemChildren}`);
}
function K(e) {
  let t = e;
  e.classList.contains(h.item) && (t = C(e)), t !== null && y(t).length === 0 && t.remove();
}
function N(e) {
  return e.querySelector(`.${h.itemContent}`);
}
function E(e, t = !0) {
  const n = N(e);
  n && j.focus(n, t);
}
class z {
  /**
   * Getter method to get current item
   * @returns current list item or null if caret position is not undefined
   */
  get currentItem() {
    const t = window.getSelection();
    if (!t)
      return null;
    let n = t.anchorNode;
    return !n || (O(n) || (n = n.parentNode), !n) || !O(n) ? null : n.closest(`.${h.item}`);
  }
  /**
   * Method that returns nesting level of the current item, null if there is no selection
   */
  get currentItemLevel() {
    const t = this.currentItem;
    if (t === null)
      return null;
    let n = t.parentNode, r = 0;
    for (; n !== null && n !== this.listWrapper; )
      O(n) && n.classList.contains(h.item) && (r += 1), n = n.parentNode;
    return r + 1;
  }
  /**
   * Assign all passed params and renderer to relevant class properties
   * @param params - tool constructor options
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - Editor.js API
   * @param params.readOnly - read-only mode flag
   * @param renderer - renderer instance initialized in tool class
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }, l) {
    this.config = n, this.data = t, this.readOnly = i, this.api = r, this.block = a, this.renderer = l;
  }
  /**
   * Function that is responsible for rendering list with contents
   * @returns Filled with content wrapper element of the list
   */
  render() {
    return this.listWrapper = this.renderer.renderWrapper(!0), this.data.items.length ? this.appendItems(this.data.items, this.listWrapper) : this.appendItems(
      [
        {
          content: "",
          meta: {},
          items: []
        }
      ],
      this.listWrapper
    ), this.readOnly || this.listWrapper.addEventListener(
      "keydown",
      (t) => {
        switch (t.key) {
          case "Enter":
            t.shiftKey || this.enterPressed(t);
            break;
          case "Backspace":
            this.backspace(t);
            break;
          case "Tab":
            t.shiftKey ? this.shiftTab(t) : this.addTab(t);
            break;
        }
      },
      !1
    ), "start" in this.data.meta && this.data.meta.start !== void 0 && this.changeStartWith(this.data.meta.start), "counterType" in this.data.meta && this.data.meta.counterType !== void 0 && this.changeCounters(this.data.meta.counterType), this.listWrapper;
  }
  /**
   * Function that is responsible for list content saving
   * @param wrapper - optional argument wrapper
   * @returns whole list saved data if wrapper not passes, otherwise will return data of the passed wrapper
   */
  save(t) {
    const n = t ?? this.listWrapper, r = (l) => y(l).map((o) => {
      const d = C(o), u = this.renderer.getItemContent(o), p = this.renderer.getItemMeta(o), g = d ? r(d) : [];
      return {
        content: u,
        meta: p,
        items: g
      };
    }), i = n ? r(n) : [];
    let a = {
      style: this.data.style,
      meta: {},
      items: i
    };
    return this.data.style === "ordered" && (a.meta = {
      start: this.data.meta.start,
      counterType: this.data.meta.counterType
    }), a;
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   * @returns - config that determines tags supposted by paste handler
   * @todo - refactor and move to list instance
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Method that specified hot to merge two List blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * Content of the first item of the next List would be merged with deepest item in current list
   * Other items of the next List would be appended to the current list without any changes in nesting levels
   * @param data - data of the second list to be merged with current
   */
  merge(t) {
    const n = this.block.holder.querySelectorAll(`.${h.item}`), r = n[n.length - 1], i = N(r);
    if (r === null || i === null || (i.insertAdjacentHTML("beforeend", t.items[0].content), this.listWrapper === void 0))
      return;
    const a = y(this.listWrapper);
    if (a.length === 0)
      return;
    const l = a[a.length - 1];
    let s = C(l);
    const o = t.items.shift();
    o !== void 0 && (o.items.length !== 0 && (s === null && (s = this.renderer.renderWrapper(!1)), this.appendItems(o.items, s)), t.items.length > 0 && this.appendItems(t.items, this.listWrapper));
  }
  /**
   * On paste callback that is fired from Editor.
   * @param event - event with pasted data
   * @todo - refactor and move to list instance
   */
  onPaste(t) {
    const n = t.detail.data;
    this.data = this.pasteHandler(n);
    const r = this.listWrapper;
    r && r.parentNode && r.parentNode.replaceChild(this.render(), r);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   * @param element - html element that contains whole list
   * @todo - refactor and move to list instance
   */
  pasteHandler(t) {
    const { tagName: n } = t;
    let r = "unordered", i;
    switch (n) {
      case "OL":
        r = "ordered", i = "ol";
        break;
      case "UL":
      case "LI":
        r = "unordered", i = "ul";
    }
    const a = {
      style: r,
      meta: {},
      items: []
    };
    r === "ordered" && (this.data.meta.counterType = "numeric", this.data.meta.start = 1);
    const l = (s) => Array.from(s.querySelectorAll(":scope > li")).map((d) => {
      const u = d.querySelector(`:scope > ${i}`), p = u ? l(u) : [];
      return {
        content: d.innerHTML ?? "",
        meta: {},
        items: p
      };
    });
    return a.items = l(t), a;
  }
  /**
   * Changes ordered list start property value
   * @param index - new value of the start property
   */
  changeStartWith(t) {
    this.listWrapper.style.setProperty("counter-reset", `item ${t - 1}`), this.data.meta.start = t;
  }
  /**
   * Changes ordered list counterType property value
   * @param counterType - new value of the counterType value
   */
  changeCounters(t) {
    this.listWrapper.style.setProperty("--list-counter-type", t), this.data.meta.counterType = t;
  }
  /**
   * Handles Enter keypress
   * @param event - keydown
   */
  enterPressed(t) {
    var s;
    const n = this.currentItem;
    if (t.stopPropagation(), t.preventDefault(), t.isComposing || n === null)
      return;
    const r = ((s = this.renderer) == null ? void 0 : s.getItemContent(n).trim().length) === 0, i = n.parentNode === this.listWrapper, a = n.previousElementSibling === null, l = this.api.blocks.getCurrentBlockIndex();
    if (i && r)
      if (lr(n) && !sr(n)) {
        a ? this.convertItemToDefaultBlock(l, !0) : this.convertItemToDefaultBlock();
        return;
      } else {
        this.splitList(n);
        return;
      }
    else if (r) {
      this.unshiftItem(n);
      return;
    } else
      this.splitItem(n);
  }
  /**
   * Handle backspace
   * @param event - keydown
   */
  backspace(t) {
    var r;
    const n = this.currentItem;
    if (n !== null && j.isCaretAtStartOfInput(n) && ((r = window.getSelection()) == null ? void 0 : r.isCollapsed) !== !1) {
      if (t.stopPropagation(), n.parentNode === this.listWrapper && n.previousElementSibling === null) {
        this.convertFirstItemToDefaultBlock();
        return;
      }
      t.preventDefault(), this.mergeItemWithPrevious(n);
    }
  }
  /**
   * Reduce indentation for current item
   * @param event - keydown
   */
  shiftTab(t) {
    t.stopPropagation(), t.preventDefault(), this.currentItem !== null && this.unshiftItem(this.currentItem);
  }
  /**
   * Decrease indentation of the passed item
   * @param item - list item to be unshifted
   */
  unshiftItem(t) {
    if (!t.parentNode || !O(t.parentNode))
      return;
    const n = t.parentNode.closest(`.${h.item}`);
    if (!n)
      return;
    let r = C(t);
    if (t.parentElement === null)
      return;
    const i = U(t);
    i !== null && (r === null && (r = this.renderer.renderWrapper(!1)), i.forEach((a) => {
      r.appendChild(a);
    }), t.appendChild(r)), n.after(t), E(t, !1), K(n);
  }
  /**
   * Method that is used for list splitting and moving trailing items to the new separated list
   * @param item - current item html element
   */
  splitList(t) {
    const n = y(t), r = this.block, i = this.api.blocks.getCurrentBlockIndex();
    if (n.length !== 0) {
      const o = n[0];
      this.unshiftItem(o), E(t, !1);
    }
    if (t.previousElementSibling === null && t.parentNode === this.listWrapper) {
      this.convertItemToDefaultBlock(i);
      return;
    }
    const a = U(t);
    if (a === null)
      return;
    const l = this.renderer.renderWrapper(!0);
    a.forEach((o) => {
      l.appendChild(o);
    });
    const s = this.save(l);
    s.meta.start = this.data.style == "ordered" ? 1 : void 0, this.api.blocks.insert(r == null ? void 0 : r.name, s, this.config, i + 1), this.convertItemToDefaultBlock(i + 1), l.remove();
  }
  /**
   * Method that is used for splitting item content and moving trailing content to the new sibling item
   * @param currentItem - current item html element
   */
  splitItem(t) {
    const [n, r] = j.getCaretNodeAndOffset();
    if (n === null)
      return;
    const i = N(t);
    let a;
    i === null ? a = "" : a = j.getContenteditableSlice(i, n, r, "right", !0);
    const l = C(t), s = this.renderItem(a);
    t == null || t.after(s), l && s.appendChild(l), E(s);
  }
  /**
   * Method that is used for merging current item with previous one
   * Content of the current item would be appended to the previous item
   * Current item children would not change nesting level
   * @param item - current item html element
   */
  mergeItemWithPrevious(t) {
    const n = t.previousElementSibling, r = t.parentNode;
    if (r === null || !O(r))
      return;
    const i = r.closest(`.${h.item}`);
    if (!n && !i || n && !O(n))
      return;
    let a;
    if (n) {
      const p = y(n, !1);
      p.length !== 0 && p.length !== 0 ? a = p[p.length - 1] : a = n;
    } else
      a = i;
    const l = this.renderer.getItemContent(t);
    if (!a)
      return;
    E(a, !1);
    const s = N(a);
    if (s === null)
      return;
    s.insertAdjacentHTML("beforeend", l);
    const o = y(t);
    if (o.length === 0) {
      t.remove(), K(a);
      return;
    }
    const d = n || i, u = C(d) ?? this.renderer.renderWrapper(!1);
    n ? o.forEach((p) => {
      u.appendChild(p);
    }) : o.forEach((p) => {
      u.prepend(p);
    }), C(d) === null && a.appendChild(u), t.remove();
  }
  /**
   * Add indentation to current item
   * @param event - keydown
   */
  addTab(t) {
    var a;
    t.stopPropagation(), t.preventDefault();
    const n = this.currentItem;
    if (!n)
      return;
    if (((a = this.config) == null ? void 0 : a.maxLevel) !== void 0) {
      const l = this.currentItemLevel;
      if (l !== null && l === this.config.maxLevel)
        return;
    }
    const r = n.previousSibling;
    if (r === null || !O(r))
      return;
    const i = C(r);
    if (i)
      i.appendChild(n), y(n).forEach((s) => {
        i.appendChild(s);
      });
    else {
      const l = this.renderer.renderWrapper(!1);
      l.appendChild(n), y(n).forEach((o) => {
        l.appendChild(o);
      }), r.appendChild(l);
    }
    K(n), E(n, !1);
  }
  /**
   * Convert current item to default block with passed index
   * @param newBloxkIndex - optional parameter represents index, where would be inseted default block
   * @param removeList - optional parameter, that represents condition, if List should be removed
   */
  convertItemToDefaultBlock(t, n) {
    let r;
    const i = this.currentItem, a = i !== null ? this.renderer.getItemContent(i) : "";
    n === !0 && this.api.blocks.delete(), t !== void 0 ? r = this.api.blocks.insert(void 0, { text: a }, void 0, t) : r = this.api.blocks.insert(), i == null || i.remove(), this.api.caret.setToBlock(r, "start");
  }
  /**
   * Convert first item of the list to default block
   * This method could be called when backspace button pressed at start of the first item of the list
   * First item of the list would be converted to the paragraph and first item children would be unshifted
   */
  convertFirstItemToDefaultBlock() {
    const t = this.currentItem;
    if (t === null)
      return;
    const n = y(t);
    if (n.length !== 0) {
      const l = n[0];
      this.unshiftItem(l), E(t);
    }
    const r = U(t), i = this.api.blocks.getCurrentBlockIndex(), a = r === null;
    this.convertItemToDefaultBlock(i, a);
  }
  /**
   * Method that calls render function of the renderer with a necessary item meta cast
   * @param itemContent - content to be rendered in new item
   * @param meta - meta used in list item rendering
   * @returns html element of the rendered item
   */
  renderItem(t, n) {
    const r = n ?? this.renderer.composeDefaultMeta();
    switch (!0) {
      case this.renderer instanceof v:
        return this.renderer.renderItem(t, r);
      case this.renderer instanceof b:
        return this.renderer.renderItem(t, r);
      default:
        return this.renderer.renderItem(t, r);
    }
  }
  /**
   * Renders children list
   * @param items - list data used in item rendering
   * @param parentElement - where to append passed items
   */
  appendItems(t, n) {
    t.forEach((r) => {
      var a;
      const i = this.renderItem(r.content, r.meta);
      if (n.appendChild(i), r.items.length) {
        const l = (a = this.renderer) == null ? void 0 : a.renderWrapper(!1);
        this.appendItems(r.items, l), i.appendChild(l);
      }
    });
  }
}
const I = {
  wrapper: `${m}-start-with-field`,
  input: `${m}-start-with-field__input`,
  startWithElementWrapperInvalid: `${m}-start-with-field--invalid`
};
function or(e, { value: t, placeholder: n, attributes: r, sanitize: i }) {
  const a = c.make("div", I.wrapper), l = c.make("input", I.input, {
    placeholder: n,
    /**
     * Used to prevent focusing on the input by Tab key
     * (Popover in the Toolbar lays below the blocks,
     * so Tab in the last block will focus this hidden input if this property is not set)
     */
    tabIndex: -1,
    /**
     * Value of the start property, if it is not specified, then it is set to one
     */
    value: t
  });
  for (const s in r)
    l.setAttribute(s, r[s]);
  return a.appendChild(l), l.addEventListener("input", () => {
    i !== void 0 && (l.value = i(l.value));
    const s = l.checkValidity();
    !s && !a.classList.contains(I.startWithElementWrapperInvalid) && a.classList.add(I.startWithElementWrapperInvalid), s && a.classList.contains(I.startWithElementWrapperInvalid) && a.classList.remove(I.startWithElementWrapperInvalid), s && e(l.value);
  }), a;
}
const P = /* @__PURE__ */ new Map([
  /**
   * Value that represents default arabic numbers for counters
   */
  ["Numeric", "numeric"],
  /**
   * Value that represents lower roman numbers for counteres
   */
  ["Lower Roman", "lower-roman"],
  /**
   * Value that represents upper roman numbers for counters
   */
  ["Upper Roman", "upper-roman"],
  /**
   * Value that represents lower alpha characters for counters
   */
  ["Lower Alpha", "lower-alpha"],
  /**
   * Value that represents upper alpha characters for counters
   */
  ["Upper Alpha", "upper-alpha"]
]), He = /* @__PURE__ */ new Map([
  /**
   * Value that represents Icon for Numeric counter type
   */
  ["numeric", St],
  /**
   * Value that represents Icon for Lower Roman counter type
   */
  ["lower-roman", Ot],
  /**
   * Value that represents Icon for Upper Roman counter type
   */
  ["upper-roman", kt],
  /**
   * Value that represents Icon for Lower Alpha counter type
   */
  ["lower-alpha", Et],
  /**
   * Value that represents Icon for Upper Alpha counter type
   */
  ["upper-alpha", _t]
]);
function ur(e) {
  return e.replace(/\D+/g, "");
}
function cr(e) {
  return typeof e.items[0] == "string";
}
function dr(e) {
  return !("meta" in e);
}
function fr(e) {
  return typeof e.items[0] != "string" && "text" in e.items[0] && "checked" in e.items[0] && typeof e.items[0].text == "string" && typeof e.items[0].checked == "boolean";
}
function pr(e) {
  const t = [];
  return cr(e) ? (e.items.forEach((n) => {
    t.push({
      content: n,
      meta: {},
      items: []
    });
  }), {
    style: e.style,
    meta: {},
    items: t
  }) : fr(e) ? (e.items.forEach((n) => {
    t.push({
      content: n.text,
      meta: {
        checked: n.checked
      },
      items: []
    });
  }), {
    style: "checklist",
    meta: {},
    items: t
  }) : dr(e) ? {
    style: e.style,
    meta: {},
    items: e.items
  } : structuredClone(e);
}
class G {
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return [
      {
        icon: $e,
        title: "Unordered List",
        data: {
          style: "unordered"
        }
      },
      {
        icon: Be,
        title: "Ordered List",
        data: {
          style: "ordered"
        }
      },
      {
        icon: Ae,
        title: "Checklist",
        data: {
          style: "checklist"
        }
      }
    ];
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   * @returns - paste config object used in editor
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Convert from text to list with import and export list to text
   */
  static get conversionConfig() {
    return {
      export: (t) => G.joinRecursive(t),
      import: (t, n) => ({
        meta: {},
        items: [
          {
            content: t,
            meta: {},
            items: []
          }
        ],
        style: (n == null ? void 0 : n.defaultStyle) !== void 0 ? n.defaultStyle : "unordered"
      })
    };
  }
  /**
   * Get list style name
   */
  get listStyle() {
    return this.data.style || this.defaultListStyle;
  }
  /**
   * Set list style
   * @param style - new style to set
   */
  set listStyle(t) {
    var r;
    this.data.style = t, this.changeTabulatorByStyle();
    const n = this.list.render();
    (r = this.listElement) == null || r.replaceWith(n), this.listElement = n;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - tool constructor options
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - Editor.js API
   * @param params.readOnly - read-only mode flag
   */
  constructor({ data: t, config: n, api: r, readOnly: i, block: a }) {
    var s;
    this.api = r, this.readOnly = i, this.config = n, this.block = a, this.defaultListStyle = ((s = this.config) == null ? void 0 : s.defaultStyle) || "unordered", this.defaultCounterTypes = this.config.counterTypes || Array.from(P.values());
    const l = {
      style: this.defaultListStyle,
      meta: {},
      items: []
    };
    this.data = Object.keys(t).length ? pr(t) : l, this.listStyle === "ordered" && this.data.meta.counterType === void 0 && (this.data.meta.counterType = "numeric"), this.changeTabulatorByStyle();
  }
  /**
   * Convert from list to text for conversionConfig
   * @param data - current data of the list
   * @returns - string of the recursively merged contents of the items of the list
   */
  static joinRecursive(t) {
    return t.items.map((n) => `${n.content} ${G.joinRecursive(n)}`).join("");
  }
  /**
   * Function that is responsible for content rendering
   * @returns rendered list wrapper with all contents
   */
  render() {
    return this.listElement = this.list.render(), this.listElement;
  }
  /**
   * Function that is responsible for content saving
   * @returns formatted content used in editor
   */
  save() {
    return this.data = this.list.save(), this.data;
  }
  /**
   * Function that is responsible for mergind two lists into one
   * @param data - data of the next standing list, that should be merged with current
   */
  merge(t) {
    this.list.merge(t);
  }
  /**
   * Creates Block Tune allowing to change the list style
   * @returns array of tune configs
   */
  renderSettings() {
    const t = [
      {
        label: this.api.i18n.t("Unordered"),
        icon: $e,
        closeOnActivate: !0,
        isActive: this.listStyle == "unordered",
        onActivate: () => {
          this.listStyle = "unordered";
        }
      },
      {
        label: this.api.i18n.t("Ordered"),
        icon: Be,
        closeOnActivate: !0,
        isActive: this.listStyle == "ordered",
        onActivate: () => {
          this.listStyle = "ordered";
        }
      },
      {
        label: this.api.i18n.t("Checklist"),
        icon: Ae,
        closeOnActivate: !0,
        isActive: this.listStyle == "checklist",
        onActivate: () => {
          this.listStyle = "checklist";
        }
      }
    ];
    if (this.listStyle === "ordered") {
      const n = or(
        (a) => this.changeStartWith(Number(a)),
        {
          value: String(this.data.meta.start ?? 1),
          placeholder: "",
          attributes: {
            required: "true"
          },
          sanitize: (a) => ur(a)
        }
      ), r = [
        {
          label: this.api.i18n.t("Start with"),
          icon: It,
          children: {
            items: [
              {
                element: n,
                // @ts-expect-error ts(2820) can not use PopoverItem enum from editor.js types
                type: "html"
              }
            ]
          }
        }
      ], i = {
        label: this.api.i18n.t("Counter type"),
        icon: He.get(this.data.meta.counterType),
        children: {
          items: []
        }
      };
      P.forEach((a, l) => {
        const s = P.get(l);
        this.defaultCounterTypes.includes(s) && i.children.items.push({
          title: this.api.i18n.t(l),
          icon: He.get(s),
          isActive: this.data.meta.counterType === P.get(l),
          closeOnActivate: !0,
          onActivate: () => {
            this.changeCounters(P.get(l));
          }
        });
      }), i.children.items.length > 1 && r.push(i), t.push({ type: "separator" }, ...r);
    }
    return t;
  }
  /**
   * On paste callback that is fired from Editor.
   * @param event - event with pasted data
   */
  onPaste(t) {
    const { tagName: n } = t.detail.data;
    switch (n) {
      case "OL":
        this.listStyle = "ordered";
        break;
      case "UL":
      case "LI":
        this.listStyle = "unordered";
    }
    this.list.onPaste(t);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   * @param element - html element that contains whole list
   */
  pasteHandler(t) {
    return this.list.pasteHandler(t);
  }
  /**
   * Changes ordered list counterType property value
   * @param counterType - new value of the counterType value
   */
  changeCounters(t) {
    var n;
    (n = this.list) == null || n.changeCounters(t), this.data.meta.counterType = t;
  }
  /**
   * Changes ordered list start property value
   * @param index - new value of the start property
   */
  changeStartWith(t) {
    var n;
    (n = this.list) == null || n.changeStartWith(t), this.data.meta.start = t;
  }
  /**
   * This method allows changing tabulator respectfully to passed style
   */
  changeTabulatorByStyle() {
    switch (this.listStyle) {
      case "ordered":
        this.list = new z(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new v(this.readOnly, this.config)
        );
        break;
      case "unordered":
        this.list = new z(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new b(this.readOnly, this.config)
        );
        break;
      case "checklist":
        this.list = new z(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new f(this.readOnly, this.config)
        );
        break;
    }
  }
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ========================================
   IMPORTS
   ======================================== */

/* ========================================
   CSS VARIABLES
   ======================================== */
:root {
    --primary-color: #A0C878;
    --primary-color-light: #DDEB9D;
    --primary-color-dark: #50643c;
    --secondary-color: #143D60;
    --secondary-fade-color: #143D6070;
    --secondary-color-light: #27667B;
    --error-color: #FE4F2D;
    --error-color-light: #ef7f69;
}

body.dark-theme {
    --primary-color: #948979;
    --primary-color-light: #c9baa5;
    --primary-color-dark: #50643c;
    --secondary-color: #222831;
    --secondary-fade-color: #22283170;
    --secondary-color-light: #393E46;
    --error-color: #FE4F2D;
    --error-color-light: #ef7f69;
}

/* ========================================
   BASE ELEMENTS
   ======================================== */
* {
    box-sizing: border-box;
}

*:hover {
    transition: 0.3s;
}

body {
    font-family: "Montserrat", serif;
    padding: 0 !important;
}

a {
    color: inherit;
}

a:hover {
    font-weight: bold;
    text-decoration: none;
    color: inherit;
}

img {
    object-fit: cover;
}

th {
    white-space: nowrap;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
}

/* ========================================
   UTILITY CLASSES
   ======================================== */
.position-sticky {
    position: sticky !important;
}

.font-pacifico {
    font-family: "Pacifico", serif !important;
}

.gap-medium {
    row-gap: 0.5rem;
}

.hide-element {
    display: none !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
}

/* Text Colors */
.text-primary-my {
    color: var(--primary-color);
}

.text-secondary-my {
    color: var(--secondary-color);
}

/* Background Colors */
.bg-primary-my {
    background-color: var(--primary-color);
}

.bg-secondary-my {
    background-color: var(--secondary-color);
}

.bg-secondary-fade-my {
    background-color: var(--secondary-fade-color);
}

.bg-secondary-light-my {
    background-color: var(--secondary-color-light);
}

.bg-err-my {
    background-color: var(--error-color);
}

.bg-err-light-my {
    background-color: var(--error-color-light);
}

/* ========================================
   LAYOUT COMPONENTS
   ======================================== */
.left-navigation {
    height: 100vh;
    top: 0;
    position: sticky;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 20%;
}

.left-navigation::-webkit-scrollbar {
    display: none;
}

.main-data-body {
    overflow: scroll;
}

#div-searchbar,
#div-infobar {
    overflow: hidden;
}

.video-fullscreen {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
}

/* ========================================
   BUTTON COMPONENTS
   ======================================== */
.button-primary-my {
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.3s;
    outline: 0px solid black;
}

.button-primary-my i {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-primary-my:hover {
    background-color: var(--primary-color-light) !important;
    transition: 0.3s;
    font-weight: bold;
    color: var(--secondary-color) !important;
}

.button-primary-my:focus {
    box-shadow: 0px 0px 0.2rem 0.2rem var(--err-color-light);
    font-weight: bold;
    transition: 0.3s;
    animation-name: button-click;
    animation-duration: 0.3s;
}

.button-err-my {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.3s;
    outline: 0px solid black;
}

.button-err-my:hover,
.button-err-my *:hover {
    background-color: var(--error-color) !important;
    transition: 0.3s;
    font-weight: bold;
    color: var(--secondary-color) !important;
}

.button-err-my:focus {
    box-shadow: 0px 0px 0.2rem 0.2rem var(--primary-color-light);
    font-weight: bold;
    transition: 0.3s;
    animation-name: button-click;
    animation-duration: 0.3s;
}

.button-dropdown {
    transition: 0.3s;
}

.button-dropdown:focus~.dropdown {
    transition: 0.3s;
}

.button-delete:hover {
    color: white;
    background-color: var(--danger);
    transition: color 0.1s;
}

.button-update:hover {
    color: white;
    background-color: var(--warning);
    transition: color 0.1s;
}

.button-view:hover {
    color: white;
    background-color: var(--info);
    transition: color 0.1s;
}

.button-group-my>* {
    border: 1px solid black;
    width: 2rem;
}

.button-group-my>input {
    width: 4rem;
}

.button-group-my>*:first-child {
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
}

.button-group-my>*:last-child {
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
}

.button-group-my>button:hover {
    background-color: var(--primary-color-light);
}

.button-group-my>button:focus {
    box-shadow: 0px 0px 0.2rem 0.2rem var(--primary-color-light);
    font-weight: bold;
    transition: 0.3s;
    animation-name: button-click;
    animation-duration: 0.3s;
}

.icon-button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.icon-button span {
    display: inline-block;
    max-width: 0;
    overflow: hidden;
}

.icon-button:hover span {
    max-width: 200px;
}

/* ========================================
   LINK COMPONENTS
   ======================================== */
.link-nav {
    color: var(--primary-color);
}

.link-nav:hover {
    color: var(--primary-color);
}

.link-selected {
    background-color: var(--primary-color);
    transition: 0.3s;
    font-weight: bold;
    color: var(--secondary-color);
}

a.button-primary-my:hover:not(:has(i.no-hover)),
.link-selected {
    display: flex;
    align-items: center;
}

a.button-primary-my:hover i:not(.no-hover),
.link-selected i {
    background-color: white;
    border-radius: 20%;
}

/* ========================================
   FORM COMPONENTS
   ======================================== */
.password-group {
    position: relative;
}

.password-group input {
    padding-right: 10%;
}

.password-group button {
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
}

.input-type-2 {
    position: relative;
}

.input-type-2>label {
    position: absolute;
    top: 0;
    left: 1rem;
    transition: 0.3s;
}

.input-type-2>input:focus~label {
    top: -50%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    padding-top: 0;
    padding-bottom: 0;
    background-color: white;
    transition: 0.3s;
}

.drop-zone {
    width: 100%;
    min-height: 10rem;
    border: 0.2rem dashed black;
    position: relative;
    border-radius: 1rem;
}

.drop-zone p {
    text-align: center;
    font-size: large;
    padding-top: 1rem;
}

.drop-zone div {
    text-align: center;
}

.drop-zone label {
    padding: 0.4rem 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
}

.drop-zone label:hover {
    background-color: rgba(0, 0, 0, 0.5);
}

/* ========================================
   SPECIAL EFFECTS
   ======================================== */
.circle {
    transition: 0.5s;
}

.running-light {
    width: 130%;
    height: 50%;
    left: 50%;
    top: 50%;
    animation: running-over-card 5s infinite linear;
    background-image: linear-gradient(90deg,
            hsl(226, 81%, 64%),
            hsl(271, 81%, 64%),
            hsl(316, 81%, 64%),
            hsl(1, 81%, 64%),
            hsl(46, 81%, 64%),
            hsl(91, 81%, 64%),
            hsl(136, 81%, 64%),
            hsl(181, 81%, 64%));
    z-index: 0;
    opacity: 0;
    transition: 0.3s;
}

.button-primary-my:hover>.running-light {
    opacity: 1;
    transition: 0.3s;
}

/* ========================================
   ANIMATIONS
   ======================================== */
@keyframes button-click {
    50% {
        background-color: var(--primary-color-dark);
    }
}

@keyframes running-over-card {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

/* ========================================
   MEDIA QUERIES
   ======================================== */
@media screen and (min-width: 479px) and (max-width: 992px) {
    .left-navigation {
        top: 6rem;
        left: 0;
        position: absolute !important;
        z-index: 10;
        width: 50% !important;
    }

    .form-card {
        width: 50vw !important;
    }
}

@media screen and (max-width: 480px) {
    .form-card {
        width: 75vw !important;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;6CAE6C;;AAG7C;;6CAE6C;AAC7C;IACI,wBAAwB;IACxB,8BAA8B;IAC9B,6BAA6B;IAC7B,0BAA0B;IAC1B,iCAAiC;IACjC,gCAAgC;IAChC,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,8BAA8B;IAC9B,6BAA6B;IAC7B,0BAA0B;IAC1B,iCAAiC;IACjC,gCAAgC;IAChC,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;;6CAE6C;AAC7C;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;;6CAE6C;AAC7C;IACI,2BAA2B;AAC/B;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;IACpB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA,gBAAgB;AAChB;IACI,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA,sBAAsB;AACtB;IACI,sCAAsC;AAC1C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;;6CAE6C;AAC7C;IACI,aAAa;IACb,MAAM;IACN,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;IACxB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;;AAEA;;6CAE6C;AAC7C;IACI,sBAAsB;IACtB,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uDAAuD;IACvD,gBAAgB;IAChB,iBAAiB;IACjB,wCAAwC;AAC5C;;AAEA;IACI,wDAAwD;IACxD,iBAAiB;IACjB,gBAAgB;IAChB,4BAA4B;IAC5B,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;;IAEI,+CAA+C;IAC/C,gBAAgB;IAChB,iBAAiB;IACjB,wCAAwC;AAC5C;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,gBAAgB;IAChB,4BAA4B;IAC5B,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,gBAAgB;IAChB,4BAA4B;IAC5B,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;6CAE6C;AAC7C;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,sCAAsC;IACtC,gBAAgB;IAChB,iBAAiB;IACjB,6BAA6B;AACjC;;AAEA;;IAEI,aAAa;IACb,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;;6CAE6C;AAC7C;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,oBAAoB;IACpB,qBAAqB;IACrB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,2BAA2B;IAC3B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,SAAS;IACT,OAAO;AACX;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;6CAE6C;AAC7C;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,SAAS;IACT,QAAQ;IACR,+CAA+C;IAC/C;;;;;;;;+BAQ2B;IAC3B,UAAU;IACV,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;;6CAE6C;AAC7C;IACI;QACI,2CAA2C;IAC/C;AACJ;;AAEA;IACI;QACI,6CAA6C;IACjD;;IAEA;QACI,+CAA+C;IACnD;AACJ;;AAEA;;6CAE6C;AAC7C;IACI;QACI,SAAS;QACT,OAAO;QACP,6BAA6B;QAC7B,WAAW;QACX,qBAAqB;IACzB;;IAEA;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":["/* ========================================\r\n   IMPORTS\r\n   ======================================== */\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');\r\n\r\n/* ========================================\r\n   CSS VARIABLES\r\n   ======================================== */\r\n:root {\r\n    --primary-color: #A0C878;\r\n    --primary-color-light: #DDEB9D;\r\n    --primary-color-dark: #50643c;\r\n    --secondary-color: #143D60;\r\n    --secondary-fade-color: #143D6070;\r\n    --secondary-color-light: #27667B;\r\n    --error-color: #FE4F2D;\r\n    --error-color-light: #ef7f69;\r\n}\r\n\r\nbody.dark-theme {\r\n    --primary-color: #948979;\r\n    --primary-color-light: #c9baa5;\r\n    --primary-color-dark: #50643c;\r\n    --secondary-color: #222831;\r\n    --secondary-fade-color: #22283170;\r\n    --secondary-color-light: #393E46;\r\n    --error-color: #FE4F2D;\r\n    --error-color-light: #ef7f69;\r\n}\r\n\r\n/* ========================================\r\n   BASE ELEMENTS\r\n   ======================================== */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n*:hover {\r\n    transition: 0.3s;\r\n}\r\n\r\nbody {\r\n    font-family: \"Montserrat\", serif;\r\n    padding: 0 !important;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n}\r\n\r\na:hover {\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\nimg {\r\n    object-fit: cover;\r\n}\r\n\r\nth {\r\n    white-space: nowrap;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\ninput[type=number] {\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\n/* ========================================\r\n   UTILITY CLASSES\r\n   ======================================== */\r\n.position-sticky {\r\n    position: sticky !important;\r\n}\r\n\r\n.font-pacifico {\r\n    font-family: \"Pacifico\", serif !important;\r\n}\r\n\r\n.gap-medium {\r\n    row-gap: 0.5rem;\r\n}\r\n\r\n.hide-element {\r\n    display: none !important;\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    overflow: hidden;\r\n}\r\n\r\n/* Text Colors */\r\n.text-primary-my {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.text-secondary-my {\r\n    color: var(--secondary-color);\r\n}\r\n\r\n/* Background Colors */\r\n.bg-primary-my {\r\n    background-color: var(--primary-color);\r\n}\r\n\r\n.bg-secondary-my {\r\n    background-color: var(--secondary-color);\r\n}\r\n\r\n.bg-secondary-fade-my {\r\n    background-color: var(--secondary-fade-color);\r\n}\r\n\r\n.bg-secondary-light-my {\r\n    background-color: var(--secondary-color-light);\r\n}\r\n\r\n.bg-err-my {\r\n    background-color: var(--error-color);\r\n}\r\n\r\n.bg-err-light-my {\r\n    background-color: var(--error-color-light);\r\n}\r\n\r\n/* ========================================\r\n   LAYOUT COMPONENTS\r\n   ======================================== */\r\n.left-navigation {\r\n    height: 100vh;\r\n    top: 0;\r\n    position: sticky;\r\n    overflow-y: auto;\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n    width: 20%;\r\n}\r\n\r\n.left-navigation::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.main-data-body {\r\n    overflow: scroll;\r\n}\r\n\r\n#div-searchbar,\r\n#div-infobar {\r\n    overflow: hidden;\r\n}\r\n\r\n.video-fullscreen {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n/* ========================================\r\n   BUTTON COMPONENTS\r\n   ======================================== */\r\n.button-primary-my {\r\n    padding: 0.2rem 0.4rem;\r\n    border-radius: 0.5rem;\r\n    border: none;\r\n    transition: 0.3s;\r\n    outline: 0px solid black;\r\n}\r\n\r\n.button-primary-my i {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.button-primary-my:hover {\r\n    background-color: var(--primary-color-light) !important;\r\n    transition: 0.3s;\r\n    font-weight: bold;\r\n    color: var(--secondary-color) !important;\r\n}\r\n\r\n.button-primary-my:focus {\r\n    box-shadow: 0px 0px 0.2rem 0.2rem var(--err-color-light);\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n    animation-name: button-click;\r\n    animation-duration: 0.3s;\r\n}\r\n\r\n.button-err-my {\r\n    padding: 0.5rem 1rem;\r\n    border-radius: 0.5rem;\r\n    border: none;\r\n    transition: 0.3s;\r\n    outline: 0px solid black;\r\n}\r\n\r\n.button-err-my:hover,\r\n.button-err-my *:hover {\r\n    background-color: var(--error-color) !important;\r\n    transition: 0.3s;\r\n    font-weight: bold;\r\n    color: var(--secondary-color) !important;\r\n}\r\n\r\n.button-err-my:focus {\r\n    box-shadow: 0px 0px 0.2rem 0.2rem var(--primary-color-light);\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n    animation-name: button-click;\r\n    animation-duration: 0.3s;\r\n}\r\n\r\n.button-dropdown {\r\n    transition: 0.3s;\r\n}\r\n\r\n.button-dropdown:focus~.dropdown {\r\n    transition: 0.3s;\r\n}\r\n\r\n.button-delete:hover {\r\n    color: white;\r\n    background-color: var(--danger);\r\n    transition: color 0.1s;\r\n}\r\n\r\n.button-update:hover {\r\n    color: white;\r\n    background-color: var(--warning);\r\n    transition: color 0.1s;\r\n}\r\n\r\n.button-view:hover {\r\n    color: white;\r\n    background-color: var(--info);\r\n    transition: color 0.1s;\r\n}\r\n\r\n.button-group-my>* {\r\n    border: 1px solid black;\r\n    width: 2rem;\r\n}\r\n\r\n.button-group-my>input {\r\n    width: 4rem;\r\n}\r\n\r\n.button-group-my>*:first-child {\r\n    border-top-left-radius: 10%;\r\n    border-bottom-left-radius: 10%;\r\n}\r\n\r\n.button-group-my>*:last-child {\r\n    border-top-right-radius: 10%;\r\n    border-bottom-right-radius: 10%;\r\n}\r\n\r\n.button-group-my>button:hover {\r\n    background-color: var(--primary-color-light);\r\n}\r\n\r\n.button-group-my>button:focus {\r\n    box-shadow: 0px 0px 0.2rem 0.2rem var(--primary-color-light);\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n    animation-name: button-click;\r\n    animation-duration: 0.3s;\r\n}\r\n\r\n.icon-button {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.4rem;\r\n}\r\n\r\n.icon-button span {\r\n    display: inline-block;\r\n    max-width: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.icon-button:hover span {\r\n    max-width: 200px;\r\n}\r\n\r\n/* ========================================\r\n   LINK COMPONENTS\r\n   ======================================== */\r\n.link-nav {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.link-nav:hover {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.link-selected {\r\n    background-color: var(--primary-color);\r\n    transition: 0.3s;\r\n    font-weight: bold;\r\n    color: var(--secondary-color);\r\n}\r\n\r\na.button-primary-my:hover:not(:has(i.no-hover)),\r\n.link-selected {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\na.button-primary-my:hover i:not(.no-hover),\r\n.link-selected i {\r\n    background-color: white;\r\n    border-radius: 20%;\r\n}\r\n\r\n/* ========================================\r\n   FORM COMPONENTS\r\n   ======================================== */\r\n.password-group {\r\n    position: relative;\r\n}\r\n\r\n.password-group input {\r\n    padding-right: 10%;\r\n}\r\n\r\n.password-group button {\r\n    position: absolute;\r\n    right: 0.2rem;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.input-type-2 {\r\n    position: relative;\r\n}\r\n\r\n.input-type-2>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 1rem;\r\n    transition: 0.3s;\r\n}\r\n\r\n.input-type-2>input:focus~label {\r\n    top: -50%;\r\n    padding-left: 0.4rem;\r\n    padding-right: 0.4rem;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    background-color: white;\r\n    transition: 0.3s;\r\n}\r\n\r\n.drop-zone {\r\n    width: 100%;\r\n    min-height: 10rem;\r\n    border: 0.2rem dashed black;\r\n    position: relative;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.drop-zone p {\r\n    text-align: center;\r\n    font-size: large;\r\n    padding-top: 1rem;\r\n}\r\n\r\n.drop-zone div {\r\n    text-align: center;\r\n}\r\n\r\n.drop-zone label {\r\n    padding: 0.4rem 2rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n.drop-zone label:hover {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* ========================================\r\n   SPECIAL EFFECTS\r\n   ======================================== */\r\n.circle {\r\n    transition: 0.5s;\r\n}\r\n\r\n.running-light {\r\n    width: 130%;\r\n    height: 50%;\r\n    left: 50%;\r\n    top: 50%;\r\n    animation: running-over-card 5s infinite linear;\r\n    background-image: linear-gradient(90deg,\r\n            hsl(226, 81%, 64%),\r\n            hsl(271, 81%, 64%),\r\n            hsl(316, 81%, 64%),\r\n            hsl(1, 81%, 64%),\r\n            hsl(46, 81%, 64%),\r\n            hsl(91, 81%, 64%),\r\n            hsl(136, 81%, 64%),\r\n            hsl(181, 81%, 64%));\r\n    z-index: 0;\r\n    opacity: 0;\r\n    transition: 0.3s;\r\n}\r\n\r\n.button-primary-my:hover>.running-light {\r\n    opacity: 1;\r\n    transition: 0.3s;\r\n}\r\n\r\n/* ========================================\r\n   ANIMATIONS\r\n   ======================================== */\r\n@keyframes button-click {\r\n    50% {\r\n        background-color: var(--primary-color-dark);\r\n    }\r\n}\r\n\r\n@keyframes running-over-card {\r\n    0% {\r\n        transform: translate(-50%, -50%) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translate(-50%, -50%) rotate(360deg);\r\n    }\r\n}\r\n\r\n/* ========================================\r\n   MEDIA QUERIES\r\n   ======================================== */\r\n@media screen and (min-width: 479px) and (max-width: 992px) {\r\n    .left-navigation {\r\n        top: 6rem;\r\n        left: 0;\r\n        position: absolute !important;\r\n        z-index: 10;\r\n        width: 50% !important;\r\n    }\r\n\r\n    .form-card {\r\n        width: 50vw !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .form-card {\r\n        width: 75vw !important;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/buttons/ImageButon.ts":
/*!**********************************************!*\
  !*** ./src/components/buttons/ImageButon.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonType: () => (/* binding */ ButtonType),
/* harmony export */   "default": () => (/* binding */ ImageButton)
/* harmony export */ });
/**
 * ButtonType Enumeration
 *
 * Defines the available button types with their corresponding visual styles
 * and functional meanings within the application interface.
 */
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["create"] = 0] = "create";
    ButtonType[ButtonType["update"] = 1] = "update";
    ButtonType[ButtonType["delete"] = 2] = "delete";
    ButtonType[ButtonType["view"] = 3] = "view";
    ButtonType[ButtonType["advance"] = 4] = "advance"; // Button for advanced search functionality
})(ButtonType || (ButtonType = {}));
/**
 * ImageButton - Custom Web Component for Consistent Action Buttons
 *
 * This component creates standardized action buttons with appropriate icons
 * and styling based on the button type. It ensures consistent appearance
 * and behavior across the application for common CRUD operations and
 * navigation actions.
 *
 * Features:
 * - Type-based styling with semantic colors
 * - FontAwesome icon integration
 * - Consistent button sizing and appearance
 * - Both custom element and static factory methods
 * - Bootstrap button styling integration
 */
class ImageButton extends HTMLElement {
    /**
     * Web Component lifecycle method - renders button when added to DOM
     *
     * Reads the 'type' attribute and creates the appropriate button with
     * corresponding icon and styling based on the button type.
     */
    connectedCallback() {
        var type = this.getAttribute('type');
        let vClassName = '';
        let vIcon = '';
        // Determine button styling and icon based on type
        switch (type) {
            case 'create':
                vClassName = 'button-create bg-primary-my text-white';
                vIcon = 'fa-circle-plus'; // Plus icon for creation
                break;
            case 'update':
                vClassName = 'button-update bg-primary text-white';
                vIcon = 'fa-pen-to-square'; // Edit icon for updates
                break;
            case 'delete':
                vClassName = 'button-delete bg-danger text-white';
                vIcon = 'fa-trash'; // Trash icon for deletion
                break;
            case 'view':
                vClassName = 'button-view';
                vIcon = 'fa-magnifying-glass'; // Magnifying glass for viewing
                break;
            case 'advance':
                vClassName = 'button-advance';
                vIcon = 'fa-searchengin'; // Search engine icon for advanced search
                break;
        }
        // Create button element with appropriate styling
        const button = document.createElement('button');
        button.className = `btn ${vClassName}`;
        // Create icon element with FontAwesome classes
        const icon = document.createElement('i');
        icon.className = `fa-solid ${vIcon}`;
        // Assemble button structure
        button.appendChild(icon);
        return this.append(button);
    }
    /**
     * Static factory method for creating action buttons programmatically
     *
     * Alternative to the custom element approach, useful for dynamic
     * button creation in table rows and other programmatic contexts.
     *
     * @param type - The type of button to create from ButtonType enum
     * @returns HTMLElement button with appropriate styling and icon
     */
    static create(type) {
        let vClassName = '';
        let vIcon = '';
        // Determine button styling and icon based on type
        switch (type) {
            case 'create':
                vClassName = 'button-create bg-primary-my text-white';
                vIcon = 'fa-circle-plus';
                break;
            case 'update':
                vClassName = 'button-update';
                vIcon = 'fa-pen-to-square';
                break;
            case 'delete':
                vClassName = 'button-delete';
                vIcon = 'fa-trash';
                break;
            case 'view':
                vClassName = 'button-view';
                vIcon = 'fa-magnifying-glass';
                break;
            case 'advance':
                vClassName = 'button-view'; // Note: Uses view styling for advance buttons
                vIcon = 'fa-searchengin';
                break;
        }
        // Create and configure button element
        const button = document.createElement('button');
        button.className = `btn ${vClassName}`;
        // Create and configure icon element
        const icon = document.createElement('i');
        icon.className = `fa-solid ${vIcon}`;
        // Assemble and return complete button
        button.appendChild(icon);
        return button;
    }
}
// Register custom element if not already defined
if (customElements.get('button-image') == null) {
    customElements.define('button-image', ImageButton);
}


/***/ }),

/***/ "./src/components/card/CardSelection.ts":
/*!**********************************************!*\
  !*** ./src/components/card/CardSelection.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardSelection)
/* harmony export */ });
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/DataConstants */ "./src/constants/DataConstants.ts");

class CardSelection extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    constructor(id, text) {
        super();
        this.optionId = id;
        this.text = text;
    }
    render() {
        var vText = $("<span>").text(this.text);
        var vDeleteButton = $("<button>").addClass('btn button-card-delete')
            .text('X');
        this.classList.add(...'p-2 rounded-lg bg-primary-my text-white border d-inline-block'.split(' '));
        this.setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_ATTR_OPTION_ID, this.optionId.toString());
        this.append(vText.get()[0], vDeleteButton.get()[0]);
    }
}
if (customElements.get('card-selection') == null) {
    customElements.define('card-selection', CardSelection);
}


/***/ }),

/***/ "./src/components/card/ToastComponent.ts":
/*!***********************************************!*\
  !*** ./src/components/card/ToastComponent.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastStatus: () => (/* binding */ ToastStatus),
/* harmony export */   "default": () => (/* binding */ ToastComponent)
/* harmony export */ });
/**
 * ToastComponent - Custom Web Component for User Notifications
 *
 * This component creates Bootstrap-compatible toast notifications for providing
 * user feedback throughout the application. It supports different status types
 * with corresponding styling and provides a fluent interface for configuration.
 *
 * Features:
 * - Multiple status types (success, update, delete, error)
 * - Automatic styling based on status
 * - Fluent interface for easy configuration
 * - Bootstrap toast integration
 * - Auto-dismiss functionality
 * - Accessible ARIA attributes
 */
class ToastComponent extends HTMLElement {
    /**
     * Set the toast title and re-render
     *
     * @param title - Title text to display in toast header
     * @returns ToastComponent instance for method chaining
     */
    setTitle(title) {
        this.title = title;
        this.connectedCallback();
        return this;
    }
    /**
     * Set the toast body content and re-render
     *
     * @param body - Message content to display in toast body
     * @returns ToastComponent instance for method chaining
     */
    setBody(body) {
        this.body = body;
        this.connectedCallback();
        return this;
    }
    /**
     * Set the toast status type and re-render
     *
     * @param status - Status type determining toast styling
     * @returns ToastComponent instance for method chaining
     */
    setStatus(status) {
        this.status = status;
        this.connectedCallback();
        return this;
    }
    /**
     * Web Component lifecycle method - renders toast content
     *
     * Creates the complete toast structure with header, body, and controls.
     * Applies appropriate styling based on status type and configures
     * accessibility attributes.
     */
    connectedCallback() {
        // Clear existing content for re-rendering
        this.innerHTML = '';
        // Configure basic toast attributes and styling
        this.classList.add('toast');
        this.setAttribute('role', 'alert');
        this.setAttribute('aria-live', 'assertive');
        this.setAttribute('aria-atomic', 'true');
        this.setAttribute('data-delay', '5000'); // Auto-dismiss after 5 seconds
        this.style.transition = '0.3s';
        // Determine header styling based on toast status
        var vHeaderClass = '';
        switch (this.status) {
            case 'success':
                vHeaderClass = 'bg-primary-my text-white';
                break;
            case 'update':
                vHeaderClass = 'bg-info text-white';
                break;
            case 'delete':
                vHeaderClass = 'bg-warning text-white';
                break;
            case 'error':
                vHeaderClass = 'bg-err-my text-white';
                break;
        }
        // Create toast header with status-specific styling
        var vDivHeader = $("<div>")
            .addClass('toast-header')
            .addClass(vHeaderClass)
            .addClass(this.status);
        // Create toast icon image
        var vToastImage = $("<img>")
            .addClass('rounded mr-2')
            .css('width', '2rem')
            .attr('src', 'https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png');
        // Create toast title element
        var vTitle = $("<strong>").addClass('mr-auto').text(this.title || '');
        // Create timestamp display
        var vTime = $("<small>").text('Just now').addClass('text-white');
        // Create dismiss button with accessibility attributes
        var vButtonDismiss = $("<button>").addClass('ml-2 mb-1 close')
            .attr('data-dismiss', 'toast')
            .attr('aria-label', 'Close')
            .attr('type', 'button')
            .append($("<span>").html('&times;').attr('aria-hidden', 'true'));
        // Assemble header components
        vDivHeader.append(vToastImage, vTitle, vTime, vButtonDismiss);
        // Create toast body with message content
        var vBody = $("<div>").addClass('toast-body').html(this.body || '');
        // Append header and body to toast element
        this.append(vDivHeader.get()[0], vBody.get()[0]);
    }
}
// Register custom element if not already defined
if (customElements.get('toast-custom') == null) {
    customElements.define('toast-custom', ToastComponent);
}
/**
 * ToastStatus Enumeration
 *
 * Defines available toast status types with their display labels.
 * Each status type has corresponding styling and semantic meaning.
 */
var ToastStatus;
(function (ToastStatus) {
    ToastStatus["success"] = "Success";
    ToastStatus["update"] = "Update";
    ToastStatus["delete"] = "Delete";
    ToastStatus["error"] = "Error"; // Error messages and validation failures
})(ToastStatus || (ToastStatus = {}));


/***/ }),

/***/ "./src/components/form/ImagePicker.ts":
/*!********************************************!*\
  !*** ./src/components/form/ImagePicker.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImagePicker)
/* harmony export */ });
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/DataConstants */ "./src/constants/DataConstants.ts");

/**
 * ImagePicker - Custom Web Component for File Upload with Drag & Drop
 *
 * This component provides an intuitive image upload interface with drag-and-drop
 * functionality and multiple file selection support. It's designed for use in
 * modal forms where image uploads are required for real estate listings,
 * user profiles, and other content management scenarios.
 *
 * Features:
 * - Drag and drop file upload interface
 * - Multiple image selection support
 * - Single/multiple image mode configuration
 * - Modal context integration (CREATE/UPDATE)
 * - Visual drop zone with hover effects
 * - Image preview container for selected files
 * - Accessible file input with proper labeling
 */
class ImagePicker extends HTMLElement {
    /**
     * Set the field name for the image picker
     *
     * @param fieldName - Field name used for labeling and form identification
     * @returns ImagePicker instance for method chaining
     */
    setFieldName(fieldName) {
        this.fieldName = fieldName;
        this.render();
        return this;
    }
    /**
     * Set the modal context for proper element ID generation
     *
     * @param elementId - Modal context identifier (e.g., 'create', 'update')
     * @returns ImagePicker instance for method chaining
     */
    setElementId(elementId) {
        this.modalType = elementId;
        this.render();
        return this;
    }
    /**
     * Configure single vs multiple image selection mode
     *
     * @param singleImage - True for single image, false for multiple images
     * @returns ImagePicker instance for method chaining
     */
    isSingleImage(singleImage) {
        this.singleImage = singleImage;
        return this;
    }
    /**
     * Web Component lifecycle method - renders when added to DOM
     */
    connectedCallback() {
        this.render();
    }
    /**
     * Create a copy of the image picker component
     *
     * @returns New ImagePicker instance with copied configuration
     */
    clone() {
        const copy = new ImagePicker();
        copy.fieldName = this.fieldName;
        copy.modalType = this.modalType;
        copy.singleImage = this.singleImage;
        return copy;
    }
    /**
     * Render the complete image picker interface
     *
     * Creates the HTML structure including:
     * - Field label with proper identification
     * - Drag & drop zone with visual indicators
     * - Hidden file input with proper attributes
     * - Accessible label for file input activation
     * - Container for image preview display
     */
    render() {
        var vId = this.fieldName;
        // Generate complete image picker HTML with drag & drop interface
        var vHtml = `
        <div class="rounded-lg mb-4 px-3">
            <!-- Field label for accessibility and identification -->
            <label ${_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_ATTR_LANGUAGE}="input_photo">${this.fieldName}</label>
            
            <!-- Drag and drop zone with visual styling -->
            <div class="drop-zone mb-4">
                <p>Drag or select file in here</p>
                <div>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                
                <!-- Hidden file input with proper attributes -->
                <input id="input${this.modalType ? '-' + this.modalType : ''}-${vId}" 
                       class="d-none" 
                       type="file" 
                       accept="image/*" 
                       ${this.singleImage ? '' : 'multiple'}>
                
                <!-- Accessible label that covers the entire drop zone -->
                <label for="input${this.modalType ? '-' + this.modalType : ''}-${vId}" 
                       class="w-100 h-100 m-0 h-0"></label>
            </div>
            
            <!-- Container for displaying selected image previews -->
            <div id="images${this.modalType ? '-' + this.modalType : ''}-${this.fieldName}" 
                 class="row mx-0 mb-2" 
                 style="row-gap: 1rem;">
            </div>
        </div>`;
        this.innerHTML = vHtml;
    }
}
// Register custom element if not already defined
if (customElements.get('image-picker') == null) {
    customElements.define('image-picker', ImagePicker);
}


/***/ }),

/***/ "./src/components/form/InputComponent.ts":
/*!***********************************************!*\
  !*** ./src/components/form/InputComponent.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputDataType: () => (/* binding */ InputDataType),
/* harmony export */   "default": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/DataConstants */ "./src/constants/DataConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language */ "./src/language/index.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/MyUtilities */ "./src/utilities/MyUtilities.ts");
/**
 * InputComponent - Custom Web Component for Dynamic Form Input Generation
 *
 * This component creates flexible, reusable form input elements with consistent
 * styling and behavior. It supports multiple input types, validation states,
 * and responsive layouts with proper labeling and accessibility features.
 *
 * Features:
 * - Multiple input types (text, select, textarea, number, file, etc.)
 * - Dynamic option loading for select elements
 * - Responsive and non-responsive layout modes
 * - Required field validation indicators
 * - Disabled state support
 * - Custom styling and data attributes
 * - Fluent interface for easy configuration
 *
 * Usage:
 * ```typescript
 * const input = new InputComponent()
 *   .setName('username')
 *   .setDataType('text')
 *   .setIsRequired(true)
 *   .setElementId('login');
 * ```
 */





/**
 * InputType Enumeration
 * Defines the HTML element types that can be generated
 */
var InputType;
(function (InputType) {
    InputType[InputType["input"] = 0] = "input";
    InputType[InputType["textarea"] = 1] = "textarea";
    InputType[InputType["select"] = 2] = "select"; // Dropdown selection
})(InputType || (InputType = {}));
/**
 * InputDataType Enumeration
 * Defines the input type attributes and validation behaviors
 */
var InputDataType;
(function (InputDataType) {
    InputDataType[InputDataType["text"] = 0] = "text";
    InputDataType[InputDataType["number"] = 1] = "number";
    InputDataType[InputDataType["file"] = 2] = "file";
    InputDataType[InputDataType["checkbox"] = 3] = "checkbox";
    InputDataType[InputDataType["radio"] = 4] = "radio"; // Radio button selection
})(InputDataType || (InputDataType = {}));
class InputComponent extends HTMLElement {
    constructor() {
        super();
        this.responsive = true;
        this.inputClass = "";
        this.inputType = "input";
    }
    /**
     * Web Component lifecycle method - renders input when added to DOM
     */
    connectedCallback() {
        this.render();
    }
    /**
     * Set the field name/label for the input
     *
     * @param paramName - Display name for the input field
     * @returns InputComponent instance for method chaining
     */
    setName(paramName) {
        this.fieldName = paramName;
        const label = this.querySelector('label');
        if (label)
            label.textContent = paramName;
        return this;
    }
    /**
     * Change the input element type (input, select, textarea)
     *
     * @param paramType - The HTML element type to use
     * @returns InputComponent instance for method chaining
     */
    setInputType(paramType) {
        if (!(paramType in InputType)) {
            this.inputType = 'input';
        }
        this.inputType = paramType;
        // Replace existing input with new element type
        if (this.inputType != 'input') {
            $(this).find('input').remove();
            var vInput = $(`<${this.inputType}>`, {
                class: `${this.responsive ? 'col-sm-8' : ''} ` +
                    `form-control ${this.inputClass}`
            })
                .attr('id', this.elementId)
                .attr('placeholder', `${this.fieldName} ...`)
                .attr('type', this.dataType);
            this.append(vInput.get()[0]);
        }
        return this;
    }
    /**
     * Set whether the field is required for form submission
     *
     * @param paramRequired - True if field is mandatory
     * @returns InputComponent instance for method chaining
     */
    setIsRequired(paramRequired) {
        this.required = paramRequired;
        if (this.required) {
            // Add visual indicator for required fields
            var vSpanImportant = $('<span>', {
                html: '&nbsp;(*)',
                class: 'text-danger'
            });
            $(this).find('label').append(vSpanImportant);
        }
        return this;
    }
    setHasMultipleSelectValue(paramStatus, linkPath) {
        this.hasMultipleSelectValue = paramStatus;
        if ($(this).find('select') != null && paramStatus) {
            this.linkPath = linkPath;
            // MyLogger.log("Has multiple value", this.fieldName, $(this).find('select'))
            $(this).find('select').attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_MULTIPLE_VALUE, linkPath);
        }
        return this;
    }
    /**
     * Disable the input element
     *
     * @returns InputComponent instance for method chaining
     */
    isDisabled() {
        this.disabled = true;
        var vInput = this.querySelector('select, input, textarea');
        if (vInput == null) {
            return this;
        }
        this.querySelector('select, input, textarea')
            .setAttribute('disabled', '');
        return this;
    }
    /**
     * Use non-responsive layout (removes Bootstrap grid classes)
     *
     * @returns InputComponent instance for method chaining
     */
    notResponsive() {
        this.responsive = false;
        return this;
    }
    /**
     * Add options to select dropdown element
     *
     * @param object - Options object with {value: label} pairs
     * @returns InputComponent instance for method chaining
     */
    addOption(object) {
        if (!object)
            return this;
        if (!this.options)
            this.options = {};
        Object.assign(this.options, object);
        if (this.options == null || Object.keys(this.options).length == 0) {
            return this;
        }
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("--- option:", this.options);
        // Convert to select element if options are provided
        var vInput = $(this).find('select');
        if (vInput.length == 0) {
            this.setInputType('select');
            vInput = $(this).find('select');
        }
        // Add placeholder option for required fields
        if (this.required) {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].logElement("is required:", this.fieldName);
            var vOption = $("<option>", {
                text: '----- ' + _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_choose_option + ' -----'
            }).attr('value', '');
            vInput.append(vOption.get()[0]);
        }
        else {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Not required:", this.fieldName);
            var vOption = $("<option>", {
                text: '-----'
            }).attr('value', '');
            vInput.append(vOption.get()[0]);
        }
        // Add all provided options
        var vOptionKeys = Object.keys(this.options);
        vOptionKeys === null || vOptionKeys === void 0 ? void 0 : vOptionKeys.forEach(key => {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].logElement('---- options:', vOptionKeys, key, this.options[key]);
            var vOption = $("<option>", {
                text: this.options[key]
            }).attr('value', key);
            vInput.append(vOption.get()[0]);
        });
        return this;
    }
    /**
     * Set the unique element ID for form binding
     *
     * @param elementId - Base ID string (will be formatted with input type and field name)
     * @returns InputComponent instance for method chaining
     */
    setElementId(elementId) {
        var vElementName = _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_4__["default"]
            .convertName(this.fieldName, 'tableId');
        this.elementId = (this.inputType || 'input') +
            "-" + elementId + "-" + vElementName;
        var vInput = this.querySelector('input, select, textarea');
        if (vInput == null) {
            return this;
        }
        this.querySelector('input, select, textarea')
            .setAttribute('id', this.elementId);
        return this;
    }
    /**
     * Add custom CSS classes to the input element
     *
     * @param paramClass - Space-separated CSS class names
     * @returns InputComponent instance for method chaining
     */
    setInputClass(paramClass) {
        this.inputClass = paramClass;
        this.querySelector('input, select, textarea')
            .classList.add(...paramClass.split(' '));
        return this;
    }
    /**
     * Set the input data type for validation and behavior
     *
     * @param dataType - The input type attribute value
     * @returns InputComponent instance for method chaining
     */
    setDataType(dataType) {
        this.dataType = dataType;
        var vInput = this.querySelector("input");
        if (vInput == null) {
            return this;
        }
        this.querySelector('input').setAttribute('type', this.dataType);
        return this;
    }
    /**
     * Set custom data attributes on input and label elements
     *
     * @param inputData - Object containing data attributes {key: value}
     * @returns InputComponent instance for method chaining
     */
    setInputData(inputData) {
        if (inputData == null) {
            return this;
        }
        this.inputData = inputData;
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Set input component data:", this.inputData);
        var vInput = this.querySelector('input, textarea');
        var vLabel = this.querySelector('label');
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log('input component - label:', vLabel);
        if (this.inputData == null || Object.keys(this.inputData).length == 0) {
            return this;
        }
        if (vInput == null && vLabel == null) {
            return this;
        }
        // Apply data attributes to both label and input elements
        var vKeys = Object.keys(this.inputData);
        for (var vKey of vKeys) {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Input component:", vKey);
            if (vLabel != null) {
                $(vLabel).data(vKey, this.inputData[vKey]);
            }
            if (vInput != null) {
                $(vInput).data(vKey, this.inputData[vKey]);
            }
        }
        return this;
    }
    /**
     * Render the complete input component with label and proper styling
     *
     * Creates the HTML structure including form group container, label,
     * and input element with all configured options and attributes.
     */
    render() {
        this.innerHTML = "";
        var inputDataType = this.dataType || 'text';
        // Create label element with responsive classes
        var vLabel = $('<label>', {
            text: `${this.fieldName}`,
            class: `${this.responsive ? 'col-sm-4' : ''}` +
                ' col-form-label text-capitalize pr-1'
        }).attr('for', this.elementId);
        // Create input element with proper type and classes
        var vInput = $(`<${this.inputType}>`, {
            class: `${this.responsive ? 'col-sm-8' : ''} form-control ` +
                `${this.inputClass}`
        })
            .attr('id', this.elementId)
            .attr('placeholder', `${this.fieldName} ...`)
            .attr('type', inputDataType);
        // Create form group container with responsive layout
        const vDiv = $("<div>", {
            class: `form-group ${this.responsive ? 'row' :
                'd-flex gap-medium mb-0'} mx-0`,
        });
        // Add required field indicator
        if (this.required) {
            var vSpanImportant = $('<span>', {
                html: '&nbsp;(*)',
                class: 'text-danger'
            });
            vLabel.append(vSpanImportant);
        }
        // Apply disabled state
        if (this.disabled) {
            vInput.attr('disabled', '');
        }
        // Add options to select elements
        if (this.options != null && Object.keys(this.options).length > 0) {
            // Add placeholder option for required fields
            if (this.required) {
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].logElement("is required:", this.fieldName);
                var vOption = $("<option>", {
                    text: '----- ' + _language__WEBPACK_IMPORTED_MODULE_2__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_choose_option + ' -----'
                }).attr('value', '');
                vInput.append(vOption.get()[0]);
            }
            else {
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Not required:", this.fieldName);
                var vOption = $("<option>", {
                    text: '-----'
                }).attr('value', '');
                vInput.append(vOption.get()[0]);
            }
            // Add all provided options
            var vOptionKeys = Object.keys(this.options);
            vOptionKeys === null || vOptionKeys === void 0 ? void 0 : vOptionKeys.forEach(key => {
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].logElement('---- options:', vOptionKeys, key, this.options[key]);
                var vOption = $("<option>", {
                    text: this.options[key]
                }).attr('value', key);
                vInput.append(vOption.get()[0]);
            });
        }
        // Apply custom data attributes
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].logElement('input component - render:', this.inputData);
        if (this.inputData != null &&
            Object.keys(this.inputData).length > 0) {
            var vKeys = Object.keys(this.inputData);
            for (var vKey of vKeys) {
                vLabel.data(vKey, this.inputData[vKey]);
                if (vInput[0].tagName.toLowerCase() != 'select') {
                    vInput.data(vKey, this.inputData[vKey]);
                }
            }
        }
        if (this.hasMultipleSelectValue) {
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Has multiple value", this.fieldName);
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Has multiple - Adding attribute");
            vInput.attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_1__.DATA_MULTIPLE_VALUE, this.linkPath);
        }
        // Assemble complete component
        vDiv.append(vLabel);
        vDiv.append(vInput);
        this.appendChild(vDiv.get()[0]);
    }
    /**
     * Create a deep copy of the input component
     *
     * @returns New InputComponent instance with identical configuration
     */
    clone() {
        const copy = new InputComponent();
        copy.inputType = this.inputType;
        copy.fieldName = this.fieldName;
        copy.options = this.options;
        copy.elementId = this.elementId;
        copy.required = this.required;
        copy.disabled = this.disabled;
        copy.responsive = this.responsive;
        copy.inputClass = this.inputClass;
        copy.dataType = this.dataType;
        copy.inputData = this.inputData;
        copy.hasMultipleSelectValue = this.hasMultipleSelectValue;
        copy.linkPath = this.linkPath;
        // Deep copy options object
        copy.options = Object.assign({}, (this.options || {}));
        copy.render();
        return copy;
    }
}
// Register custom element if not already defined
if (!customElements.get('input-custom')) {
    customElements.define('input-custom', InputComponent);
}


/***/ }),

/***/ "./src/components/modal/ModalComponent.ts":
/*!************************************************!*\
  !*** ./src/components/modal/ModalComponent.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalType: () => (/* binding */ ModalType),
/* harmony export */   "default": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _form_InputComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/InputComponent */ "./src/components/form/InputComponent.ts");

/**
 * ModalType Enumeration
 *
 * Defines the available modal dialog types used throughout the application.
 * Each type has specific behavior and styling requirements.
 */
var ModalType;
(function (ModalType) {
    ModalType[ModalType["CREATE"] = 0] = "CREATE";
    ModalType[ModalType["UPDATE"] = 1] = "UPDATE";
    ModalType[ModalType["DELETE"] = 2] = "DELETE";
    ModalType[ModalType["SEARCH_ADVANCE"] = 3] = "SEARCH_ADVANCE"; // Modal for advanced search functionality
})(ModalType || (ModalType = {}));
/**
 * ModalComponent - Custom Web Component for Bootstrap Modal Dialogs
 *
 * This component creates standardized modal dialogs with consistent structure
 * and behavior across the application. It supports different modal types with
 * appropriate content and actions for each use case.
 *
 * Features:
 * - Type-specific modal generation (CREATE, UPDATE, DELETE, SEARCH_ADVANCE)
 * - Bootstrap modal integration with proper classes and attributes
 * - Automatic content generation based on modal type
 * - Consistent header, body, and footer structure
 * - Built-in cancel and confirm actions
 */
class ModalComponent extends HTMLElement {
    constructor() {
        super();
    }
    /**
     * Web Component lifecycle method - renders modal content
     *
     * Creates the complete Bootstrap modal structure based on the 'type' attribute.
     * Generates appropriate content, buttons, and event bindings for each modal type.
     */
    connectedCallback() {
        // Extract modal type from component attribute
        var vType = this.getAttribute('type');
        var vId = 'modal-' + vType;
        // Create main modal container with Bootstrap classes
        var vModal = $("<div>")
            .addClass('modal fade')
            .attr({ 'id': vId });
        // Create modal structure: dialog -> content -> header/body/footer
        var vDialog = $("<div>").addClass('modal-dialog');
        var vContent = $("<div>").addClass('modal-content');
        // Create modal header with title and close button
        var vContentHeader = $("<div>").addClass('modal-header');
        var vHeaderText = $("<h3>").addClass('mb-0');
        var vHeaderTextSub1 = $("<span>").addClass('pr-1');
        var vHeaderTextSub2 = $("<span>").addClass('text-lowercase');
        vHeaderText.append(vHeaderTextSub1, vHeaderTextSub2);
        // Create close button with proper Bootstrap attributes
        var vHeaderButton = $("<span>")
            .html(`&times;`)
            .addClass('Close h3')
            .attr('type', 'button')
            .attr('data-dismiss', 'modal');
        // Create modal body with type-specific content
        var vBody = $("<div>").addClass('modal-body');
        if (vType == 'delete') {
            // Delete modal includes an input field for record ID
            var vDeleteInput = new _form_InputComponent__WEBPACK_IMPORTED_MODULE_0__["default"]().setName('id')
                .setElementId('delete').isDisabled();
            vBody.append(vDeleteInput);
        }
        // Create modal footer with action buttons
        var vFooter = $("<div>").addClass('modal-footer');
        var vFooterConfirm = $("<button>")
            .addClass('btn btn-success')
            .attr('id', `button-${vType}-confirm`)
            .html(vType);
        var vFooterDismiss = $("<button>")
            .addClass('btn btn-secondary')
            .attr('data-dismiss', 'modal')
            .html("cancel");
        // Assemble modal structure
        vContentHeader.append(vHeaderText.get()[0], vHeaderButton.get()[0]);
        vFooter.append(vFooterDismiss.get()[0], vFooterConfirm.get()[0]);
        vModal.append(vDialog);
        vDialog.append(vContent);
        vContent.append(vContentHeader, vBody, vFooter);
        // Append completed modal to component
        this.appendChild(vModal.get()[0]);
    }
    /**
     * Static factory method for creating modal dialogs
     *
     * Alternative approach to creating modals programmatically without
     * using the custom element. Provides the same structure and functionality.
     *
     * @param paramType - The type of modal to create
     * @returns jQuery object containing the modal structure
     */
    static create(paramType) {
        var vId = 'modal-' + paramType;
        // Create main modal container
        var vModal = $("<div>")
            .addClass('modal fade')
            .attr({ 'id': vId });
        // Create modal structure
        var vDialog = $("<div>").addClass('modal-dialog');
        var vContent = $("<div>").addClass('modal-content');
        var vContentHeader = $("<div>").addClass('modal-header');
        var vHeaderText = $("<h3>");
        var vHeaderTextSub1 = $("<span>").addClass('pr-1');
        var vHeaderTextSub2 = $("<span>");
        vHeaderText.append(vHeaderTextSub1, vHeaderTextSub2);
        var vHeaderButton = $("<span>").html(`&times;`).addClass('close')
            .attr('type', 'button').data('dismiss', 'modal');
        var vBody = $("<div>").addClass('modal-body');
        if (paramType == 'DELETE') {
            // Delete modal includes ID input field
            var vDeleteInput = new _form_InputComponent__WEBPACK_IMPORTED_MODULE_0__["default"]().setName('id')
                .setElementId('delete');
            vBody.append(vDeleteInput);
        }
        // Create footer with action buttons
        var vFooter = $("<div>").addClass('modal-footer');
        var vFooterConfirm = $("<button>")
            .addClass('btn btn-success')
            .attr('id', `button-${paramType}-confirm`)
            .html(paramType);
        var vFooterDismiss = $("<button>")
            .addClass('btn btn-secondary')
            .data('dismiss', 'modal')
            .html("cancel");
        // Assemble complete modal structure
        vContentHeader.append(vHeaderText, vHeaderButton.get()[0]);
        vFooter.append(vFooterDismiss.get()[0], vFooterConfirm.get()[0]);
        vModal.append(vDialog);
        vDialog.append(vContent);
        vContent.append(vContentHeader, vBody, vFooter);
    }
}
// Register custom element if not already defined
if (!customElements.get('modal-custom')) {
    customElements.define('modal-custom', ModalComponent);
}


/***/ }),

/***/ "./src/components/table/ButtonTableAction.ts":
/*!***************************************************!*\
  !*** ./src/components/table/ButtonTableAction.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonTableAction)
/* harmony export */ });
/* harmony import */ var _buttons_ImageButon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../buttons/ImageButon */ "./src/components/buttons/ImageButon.ts");

/**
 * ButtonTableAction - Custom Web Component for Table Row Action Buttons
 *
 * This component creates a standardized set of action buttons for table rows,
 * providing consistent CRUD operations across data tables. It automatically
 * includes update and delete buttons, with an optional view button when a
 * view path is configured.
 *
 * Features:
 * - Standardized action button set for table rows
 * - Conditional view button based on view path configuration
 * - Consistent styling and spacing
 * - Integration with ImageButton component for uniform appearance
 * - Automatic rendering when added to DOM
 */
class ButtonTableAction extends HTMLElement {
    /**
     * Configure the view path for detail navigation
     *
     * @param viewPath - Base path for view/detail page navigation
     * @returns ButtonTableAction instance for method chaining
     */
    setViewPath(viewPath) {
        this.viewPath = viewPath;
        return this;
    }
    /**
     * Web Component lifecycle method - renders buttons when added to DOM
     */
    connectedCallback() {
        this.render();
    }
    /**
     * Render the complete set of action buttons
     *
     * Creates update and delete buttons (always present) plus an optional
     * view button if a view path is configured. Prevents duplicate rendering
     * if the component is re-attached to the DOM.
     */
    render() {
        // Prevent duplicate buttons if re-attached to DOM
        this.innerHTML = "";
        // Create standard CRUD action buttons
        const vButtonUpdate = _buttons_ImageButon__WEBPACK_IMPORTED_MODULE_0__["default"].create('update');
        const vButtonDelete = _buttons_ImageButon__WEBPACK_IMPORTED_MODULE_0__["default"].create('delete');
        // Add update and delete buttons (always present)
        this.appendChild(vButtonUpdate);
        this.appendChild(vButtonDelete);
        // Add view button only if view path is configured
        if (this.viewPath != null && this.viewPath.length > 0) {
            const vButtonView = _buttons_ImageButon__WEBPACK_IMPORTED_MODULE_0__["default"].create('view');
            this.appendChild(vButtonView);
        }
    }
}
// Register custom element if not already defined
if (!customElements.get('button-table-action')) {
    customElements.define('button-table-action', ButtonTableAction);
}


/***/ }),

/***/ "./src/components/table/TableNavigation.ts":
/*!*************************************************!*\
  !*** ./src/components/table/TableNavigation.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableNavigation)
/* harmony export */ });
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/DataConstants */ "./src/constants/DataConstants.ts");
/* harmony import */ var _buttons_ImageButon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/ImageButon */ "./src/components/buttons/ImageButon.ts");
/* harmony import */ var _form_InputComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/InputComponent */ "./src/components/form/InputComponent.ts");



/**
 * TableNavigation - Custom Web Component for Table Control Interface
 *
 * This component creates a comprehensive navigation and control interface for
 * data tables, providing pagination controls, record information display,
 * page size selection, and creation buttons. It integrates with the table
 * data management system to provide a complete user experience.
 *
 * Features:
 * - Complete pagination controls (first, previous, next, last)
 * - Page number input with validation
 * - Records per page selector with preset options
 * - Current record range display (showing X to Y of Z records)
 * - Create button (when user is authenticated)
 * - Responsive layout with proper spacing
 * - Internationalization support with data attributes
 */
class TableNavigation extends HTMLElement {
    /**
     * Web Component lifecycle method - renders navigation when added to DOM
     */
    connectedCallback() {
        this.render();
    }
    /**
     * Render the complete table navigation interface
     *
     * Creates a comprehensive control bar with three main sections:
     * 1. Pagination controls (page navigation buttons and current page)
     * 2. Record information display (current range and total)
     * 3. Page size selector and create button
     */
    render() {
        this.innerHTML = '';
        // Configuration for page size selector options
        var limitObject = {
            10: 10,
            20: 20,
            50: 50,
            '-1': 'All' // Special value for showing all records
        };
        // Apply main container styling for navigation bar
        this.classList.add(...'d-flex flex-wrap gap-medium align-items-center bg-light p-2 justify-content-between'
            .split(' '));
        // === PAGINATION SECTION ===
        var vDivPage = $("<div>")
            .addClass('d-flex justify-content-center align-items-center gap-medium');
        var vTextPage = $("<p>")
            .addClass('m-0 pr-1').data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, 'table_page').html('Page &nbsp;');
        // Create pagination button group with navigation controls
        var vDivPageNav = $("<div>")
            .addClass("d-flex button-group-my h-100");
        var vButtonBackBegin = $("<button>")
            .addClass("button-to-begin h3 m-0")
            .html('&lsaquo;&lsaquo;'); // First page
        var vButtonBack = $("<button>")
            .addClass("button-to-back h3 m-0").html('&lsaquo;'); // Previous page
        var vInputPage = $("<input>")
            .addClass("input-page text-center bg-white")
            .attr('type', 'number').attr('disabled', ''); // Current page (read-only)
        var vButtonForward = $("<button>")
            .addClass("button-to-forward h3 m-0").html('&rsaquo;'); // Next page
        var vButtonForwardEnd = $("<button>")
            .addClass("button-to-last h3 m-0 mr-1").html('&rsaquo;&rsaquo;'); // Last page
        var vTextTotalPage = $("<p>")
            .addClass('m-0 pr-1').data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, 'table_page_of')
            .html("of&nbsp;").append($("<span>"));
        var vTextTotalPage2 = $("<p>")
            .addClass('m-0').addClass('span-total-page'); // Total page count
        // Assemble pagination section
        vDivPageNav.append(vButtonBackBegin, vButtonBack, vInputPage, vButtonForward, vButtonForwardEnd);
        vDivPage.append(vTextPage, vDivPageNav, vTextTotalPage, vTextTotalPage2);
        // === RECORD INFORMATION SECTION ===
        var vDivRecord = $("<div>").
            addClass('d-flex justify-content-center align-items-center');
        var vTextRecords = $("<p>").
            data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, 'table_record')
            .html("Records&nbsp;").addClass('m-0 pr-1');
        var vTextRecords2 = $("<p>").
            data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, 'table_record_to')
            .html(" &nbsp;to&nbsp;").addClass('m-0 pr-1');
        var vTextRecords3 = $("<p>").
            data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE, 'table_record_of')
            .html(" &nbsp;of&nbsp;").addClass('m-0 pr-1');
        var vRecord = $("<span>").addClass('span-begin-record pr-1'); // Start record number
        var vRecordEnd = $("<span>").addClass("span-end-record pr-1"); // End record number
        var vRecordTotal = $("<span>").addClass('span-total-record pr-1'); // Total record count
        // Assemble record information display
        vDivRecord.append(vTextRecords, vRecord, vTextRecords2, vRecordEnd, vTextRecords3, vRecordTotal);
        // === PAGE SIZE SELECTOR ===
        var vInputLimit = new _form_InputComponent__WEBPACK_IMPORTED_MODULE_2__["default"]()
            .setName('limit')
            .setInputType('select')
            .notResponsive() // Use compact layout
            .setInputClass('select-limit')
            .setInputData({ [_constants_DataConstants__WEBPACK_IMPORTED_MODULE_0__.DATA_LANGUAGE]: 'input_limit' }) // Internationalization support
            .addOption(limitObject); // Add predefined page size options
        // Assemble main navigation components
        this.append(vDivPage.get()[0], vDivRecord.get()[0], vInputLimit);
        // === CREATE BUTTON ===
        var vButtonCreate = _buttons_ImageButon__WEBPACK_IMPORTED_MODULE_1__["default"].create('create');
        this.append(vButtonCreate);
    }
}
// Register custom element if not already defined
if (customElements.get('navigation-table') == null) {
    customElements.define('navigation-table', TableNavigation);
}


/***/ }),

/***/ "./src/components/table/TableRowComponent.ts":
/*!***************************************************!*\
  !*** ./src/components/table/TableRowComponent.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableRowComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/DataConstants */ "./src/constants/DataConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language */ "./src/language/index.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/MyLogger */ "./src/utilities/MyLogger.ts");






/**
 * TableRowComponent - Custom Web Component for Dynamic Table Row Generation
 *
 * This component creates flexible table rows with support for various data types
 * including text, HTML elements, and images. It provides special handling for
 * photo fields with automatic fallback to placeholder images and responsive
 * column spanning capabilities.
 *
 * Features:
 * - Dynamic data rendering with multiple data types support
 * - Special photo field handling with fallback images
 * - Column spanning for flexible table layouts
 * - Automatic null/empty value handling with user-friendly messages
 * - Data ID association for record tracking
 * - Responsive image sizing with error handling
 */
class TableRowComponent extends HTMLElement {
    constructor() {
        super();
        this.colSpan = 1;
        this.photoFields = [];
        this.dataId = -1;
    }
    /**
     * Set the data values for table cells
     *
     * @param paramFields - Variable number of data values (strings or HTML elements)
     * @returns TableRowComponent instance for method chaining
     */
    setData(...paramFields) {
        this.data = paramFields;
        this.render();
        return this;
    }
    /**
     * Configure which field indices should be treated as photo/image fields
     *
     * @param paramFields - Array of field indices to render as images
     * @returns TableRowComponent instance for method chaining
     */
    setPhotoFieldsIndex(...paramFields) {
        this.photoFields = paramFields;
        return this;
    }
    /**
     * Set the column span for table cells (useful for headers or special layouts)
     *
     * @param colSpan - Number of columns to span
     * @returns TableRowComponent instance for method chaining
     */
    setColSpan(colSpan) {
        this.colSpan = colSpan;
        this.render();
        return this;
    }
    /**
     * Associate a data record ID with this table row
     *
     * @param dataId - Database record ID for tracking
     * @returns TableRowComponent instance for method chaining
     */
    setDataId(dataId) {
        this.dataId = dataId;
        this.render();
        return this;
    }
    /**
     * Render the complete table row with all configured data and styling
     *
     * Creates table cells for each data value with special handling for:
     * - Photo fields (rendered as responsive images with fallbacks)
     * - Empty/null values (displayed with placeholder text)
     * - HTML elements (rendered directly)
     * - Column spanning for layout flexibility
     */
    render() {
        var _a;
        this.innerHTML = '';
        var vRow = $("<tr>");
        // Process each data value and create corresponding table cells
        (_a = this.data) === null || _a === void 0 ? void 0 : _a.forEach((value, index) => {
            var vTd1 = $("<td>")
                .addClass('text-capitalize')
                .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_2__.DATA_LANGUAGE, 'input_' + value)
                .html(value || _language__WEBPACK_IMPORTED_MODULE_4__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].text_info_none) // Fallback for empty values
                .attr('colspan', this.colSpan)
                .addClass(value ? '' : 'text-secondary'); // Visual styling for empty values
            _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("---- rendering table row");
            // Special handling for photo/image fields
            if (this.photoFields.length > 0 && this.photoFields.includes(index)) {
                var vPhoto = value;
                // Use fallback image if no photo provided
                if (value == null || value.trim().length == 0) {
                    vPhoto = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_NOT_FOUND;
                }
                // Clear text content and prepare for image
                vTd1.css('white-space', 'nowrap').text('');
                // Create responsive image element with error handling
                _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log("---- row photo: " + vPhoto);
                var vImage = $("<img>")
                    .attr('width', _constants_webConstants__WEBPACK_IMPORTED_MODULE_3__.IMAGE_TAB_SIZE.width + 'px')
                    .attr('height', _constants_webConstants__WEBPACK_IMPORTED_MODULE_3__.IMAGE_TAB_SIZE.height + 'px')
                    .attr('src', vPhoto)
                    .attr('error', function () {
                    // Handle image loading errors with fallback
                    _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log(this);
                    _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_5__["default"].log('--- error loading image');
                    this.remove();
                    $(this).remove();
                    var vCurrent = this;
                    // Add timestamp to prevent caching issues with fallback image
                    vCurrent.src = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_NOT_FOUND + '?t=' +
                        new Date().getTime();
                });
                vTd1.append(vImage);
            }
            vRow.append(vTd1.get()[0]);
        });
        this.append(vRow.get()[0]);
    }
}
// Register custom element if not already defined
if (customElements.get('row-custom') == null) {
    customElements.define('row-custom', TableRowComponent);
}


/***/ }),

/***/ "./src/constants/APIConstants.ts":
/*!***************************************!*\
  !*** ./src/constants/APIConstants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),
/* harmony export */   EMPLOYEE_VERIFICATION_ACTION: () => (/* binding */ EMPLOYEE_VERIFICATION_ACTION),
/* harmony export */   IMAGE_NOT_FOUND: () => (/* binding */ IMAGE_NOT_FOUND),
/* harmony export */   PATH_API_ADDRESS_MAP: () => (/* binding */ PATH_API_ADDRESS_MAP),
/* harmony export */   PATH_API_BLOG: () => (/* binding */ PATH_API_BLOG),
/* harmony export */   PATH_API_CONSTRUCTION_CONTRACTOR: () => (/* binding */ PATH_API_CONSTRUCTION_CONTRACTOR),
/* harmony export */   PATH_API_CREATE: () => (/* binding */ PATH_API_CREATE),
/* harmony export */   PATH_API_CUSTOMER: () => (/* binding */ PATH_API_CUSTOMER),
/* harmony export */   PATH_API_CUSTOMER_REQUEST: () => (/* binding */ PATH_API_CUSTOMER_REQUEST),
/* harmony export */   PATH_API_DASHBOARD: () => (/* binding */ PATH_API_DASHBOARD),
/* harmony export */   PATH_API_DELETE: () => (/* binding */ PATH_API_DELETE),
/* harmony export */   PATH_API_DESIGN_UNIT: () => (/* binding */ PATH_API_DESIGN_UNIT),
/* harmony export */   PATH_API_DISTRICT: () => (/* binding */ PATH_API_DISTRICT),
/* harmony export */   PATH_API_EMPLOYEE: () => (/* binding */ PATH_API_EMPLOYEE),
/* harmony export */   PATH_API_EMPLOYEE_VERIFICATION: () => (/* binding */ PATH_API_EMPLOYEE_VERIFICATION),
/* harmony export */   PATH_API_INVESTOR: () => (/* binding */ PATH_API_INVESTOR),
/* harmony export */   PATH_API_LOCATION: () => (/* binding */ PATH_API_LOCATION),
/* harmony export */   PATH_API_MASTER_LAYOUT: () => (/* binding */ PATH_API_MASTER_LAYOUT),
/* harmony export */   PATH_API_PAGE: () => (/* binding */ PATH_API_PAGE),
/* harmony export */   PATH_API_PROJECT: () => (/* binding */ PATH_API_PROJECT),
/* harmony export */   PATH_API_PROVINCE: () => (/* binding */ PATH_API_PROVINCE),
/* harmony export */   PATH_API_REAL_ESTATE: () => (/* binding */ PATH_API_REAL_ESTATE),
/* harmony export */   PATH_API_REGION_LINK: () => (/* binding */ PATH_API_REGION_LINK),
/* harmony export */   PATH_API_REVIEW: () => (/* binding */ PATH_API_REVIEW),
/* harmony export */   PATH_API_STREET: () => (/* binding */ PATH_API_STREET),
/* harmony export */   PATH_API_SUBSCRIPTION: () => (/* binding */ PATH_API_SUBSCRIPTION),
/* harmony export */   PATH_API_UPDATE: () => (/* binding */ PATH_API_UPDATE),
/* harmony export */   PATH_API_UTILITIES: () => (/* binding */ PATH_API_UTILITIES),
/* harmony export */   PATH_API_WARD: () => (/* binding */ PATH_API_WARD),
/* harmony export */   PATH_CHANGE_PASSWORD: () => (/* binding */ PATH_CHANGE_PASSWORD),
/* harmony export */   PATH_CHANGE_PASSWORD_SEND_EMAIL: () => (/* binding */ PATH_CHANGE_PASSWORD_SEND_EMAIL),
/* harmony export */   PATH_IMAGE: () => (/* binding */ PATH_IMAGE),
/* harmony export */   PATH_IMAGE_EXIST: () => (/* binding */ PATH_IMAGE_EXIST),
/* harmony export */   PATH_SIGN_IN: () => (/* binding */ PATH_SIGN_IN),
/* harmony export */   PATH_SIGN_UP: () => (/* binding */ PATH_SIGN_UP),
/* harmony export */   PATH_TOKEN_GET: () => (/* binding */ PATH_TOKEN_GET),
/* harmony export */   PATH_USER_GET: () => (/* binding */ PATH_USER_GET),
/* harmony export */   PATH_USER_SIGNOUT: () => (/* binding */ PATH_USER_SIGNOUT)
/* harmony export */ });
/**
 * API Constants - Central repository for all API endpoint configurations
 *
 * This module contains all API endpoints, URLs, and related constants used
 * throughout the real estate admin application. Values are loaded from
 * environment variables for better configuration management.
 */
// =============================================================================
// BASE CONFIGURATION
// =============================================================================
/** Base URL for all API requests - loaded from environment */
const BASE_URL = "http://127.0.0.1:8080/" || 0;
// =============================================================================
// ENTITY API ENDPOINTS
// =============================================================================
/** Core Entity Management Endpoints */
const PATH_API_ADDRESS_MAP = "address_map" || 0;
const PATH_API_CONSTRUCTION_CONTRACTOR = "contruction_contractor" || 0;
const PATH_API_CUSTOMER = "customers" || 0;
const PATH_API_DESIGN_UNIT = "design_units" || 0;
const PATH_API_DISTRICT = "districts" || 0;
const PATH_API_EMPLOYEE = "employees" || 0;
const PATH_API_EMPLOYEE_VERIFICATION = "verification_code" || 0;
const PATH_API_INVESTOR = "investors" || 0;
const PATH_API_LOCATION = "locations" || 0;
const PATH_API_MASTER_LAYOUT = "master_layouts" || 0;
const PATH_API_PROJECT = "projects" || 0;
const PATH_API_PROVINCE = "provinces" || 0;
const PATH_API_REAL_ESTATE = "real_estates" || 0;
const PATH_API_REGION_LINK = "region_links" || 0;
const PATH_API_STREET = "streets" || 0;
const PATH_API_SUBSCRIPTION = "subscriptions" || 0;
const PATH_API_UTILITIES = "utilities" || 0;
const PATH_API_WARD = "wards" || 0;
const PATH_API_REVIEW = "reviews" || 0;
const PATH_API_BLOG = "blogs" || 0;
const PATH_API_CUSTOMER_REQUEST = "customer_requests" || 0;
const PATH_API_DASHBOARD = "/dashboard";
// =============================================================================
// AUTHENTICATION ENDPOINTS
// =============================================================================
/** Authentication and Security Endpoints */
const PATH_SIGN_IN = "auth/sign_in" || 0;
const PATH_SIGN_UP = "auth/sign_up" || 0;
const PATH_TOKEN_GET = "auth/csrf-token";
const PATH_USER_GET = "auth/me";
const PATH_USER_SIGNOUT = "auth/logout";
// =============================================================================
// CRUD OPERATION PATHS
// =============================================================================
/** Standard CRUD Operation Suffixes */
const PATH_API_PAGE = "/page/" || 0;
const PATH_API_CREATE = "/create" || 0;
const PATH_API_UPDATE = "/update/" || 0;
const PATH_API_DELETE = "/delete/" || 0;
// =============================================================================
// PASSWORD MANAGEMENT PATHS
// =============================================================================
/** Password Change and Recovery Endpoints */
const PATH_CHANGE_PASSWORD_SEND_EMAIL = "/create_code" || 0;
const PATH_CHANGE_PASSWORD = "/change_password" || 0;
// =============================================================================
// FILE AND IMAGE HANDLING
// =============================================================================
/** Media and File Management Paths */
const PATH_IMAGE_EXIST = "images/exist" || 0;
const PATH_IMAGE = "uploads" || 0;
/** Default fallback image for missing or broken image references */
const IMAGE_NOT_FOUND = BASE_URL + PATH_IMAGE + "/other/notfoundphoto.jpg";
// =============================================================================
// CONFIGURATION OBJECTS
// =============================================================================
/** Employee Verification Action Types */
const EMPLOYEE_VERIFICATION_ACTION = {
    'sign_in': parseInt("0" || 0),
    'sign_up': parseInt("1" || 0),
    'change_password': parseInt("2" || 0)
};


/***/ }),

/***/ "./src/constants/DataConstants.ts":
/*!****************************************!*\
  !*** ./src/constants/DataConstants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATA_ATTR_CURRENT_API: () => (/* binding */ DATA_ATTR_CURRENT_API),
/* harmony export */   DATA_ATTR_ID_UPDATE: () => (/* binding */ DATA_ATTR_ID_UPDATE),
/* harmony export */   DATA_ATTR_ITEM: () => (/* binding */ DATA_ATTR_ITEM),
/* harmony export */   DATA_ATTR_LANGUAGE: () => (/* binding */ DATA_ATTR_LANGUAGE),
/* harmony export */   DATA_ATTR_LINK_NAME: () => (/* binding */ DATA_ATTR_LINK_NAME),
/* harmony export */   DATA_ATTR_OPTION_ID: () => (/* binding */ DATA_ATTR_OPTION_ID),
/* harmony export */   DATA_ATTR_PARENT_API: () => (/* binding */ DATA_ATTR_PARENT_API),
/* harmony export */   DATA_FIELD_TITLE: () => (/* binding */ DATA_FIELD_TITLE),
/* harmony export */   DATA_FIELD_VALUE: () => (/* binding */ DATA_FIELD_VALUE),
/* harmony export */   DATA_ITEM: () => (/* binding */ DATA_ITEM),
/* harmony export */   DATA_LANGUAGE: () => (/* binding */ DATA_LANGUAGE),
/* harmony export */   DATA_MULTIPLE_VALUE: () => (/* binding */ DATA_MULTIPLE_VALUE),
/* harmony export */   DATA_NAME: () => (/* binding */ DATA_NAME),
/* harmony export */   DATA_TABLE_NAME: () => (/* binding */ DATA_TABLE_NAME),
/* harmony export */   DATA_TYPE: () => (/* binding */ DATA_TYPE)
/* harmony export */ });
const DATA_NAME = "name";
const DATA_TYPE = "type";
const DATA_ITEM = "item";
const DATA_LANGUAGE = "lang-text";
const DATA_ATTR_LANGUAGE = "data-lang-text";
const DATA_ATTR_PARENT_API = "link-parent-api";
const DATA_ATTR_CURRENT_API = "link-current-api";
const DATA_ATTR_LINK_NAME = "link-path-name";
const DATA_ATTR_ITEM = "data-item";
const DATA_ATTR_ID_UPDATE = "update-id";
const DATA_FIELD_TITLE = "field-title";
const DATA_FIELD_VALUE = "field-value";
const DATA_TABLE_NAME = "name-display";
const DATA_MULTIPLE_VALUE = "multiple-value";
const DATA_ATTR_OPTION_ID = "option-id";


/***/ }),

/***/ "./src/constants/webConstants.ts":
/*!***************************************!*\
  !*** ./src/constants/webConstants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BILLION: () => (/* binding */ BILLION),
/* harmony export */   FOLDER_TEMPLATE: () => (/* binding */ FOLDER_TEMPLATE),
/* harmony export */   IMAGE_EXTENSION: () => (/* binding */ IMAGE_EXTENSION),
/* harmony export */   IMAGE_TAB_SIZE: () => (/* binding */ IMAGE_TAB_SIZE),
/* harmony export */   MILLION: () => (/* binding */ MILLION),
/* harmony export */   PAGE_ADDRESS_MAP: () => (/* binding */ PAGE_ADDRESS_MAP),
/* harmony export */   PAGE_BLOG: () => (/* binding */ PAGE_BLOG),
/* harmony export */   PAGE_CONSTRUCTION_CONTRACTOR: () => (/* binding */ PAGE_CONSTRUCTION_CONTRACTOR),
/* harmony export */   PAGE_CUSTOMER: () => (/* binding */ PAGE_CUSTOMER),
/* harmony export */   PAGE_CUSTOMER_REQUEST: () => (/* binding */ PAGE_CUSTOMER_REQUEST),
/* harmony export */   PAGE_DASHBOARD: () => (/* binding */ PAGE_DASHBOARD),
/* harmony export */   PAGE_DESIGN_UNIT: () => (/* binding */ PAGE_DESIGN_UNIT),
/* harmony export */   PAGE_DETAIL: () => (/* binding */ PAGE_DETAIL),
/* harmony export */   PAGE_DETAIL2: () => (/* binding */ PAGE_DETAIL2),
/* harmony export */   PAGE_DISTRICT: () => (/* binding */ PAGE_DISTRICT),
/* harmony export */   PAGE_EMPLOYEE: () => (/* binding */ PAGE_EMPLOYEE),
/* harmony export */   PAGE_ERROR: () => (/* binding */ PAGE_ERROR),
/* harmony export */   PAGE_INVESTOR: () => (/* binding */ PAGE_INVESTOR),
/* harmony export */   PAGE_LOCATION: () => (/* binding */ PAGE_LOCATION),
/* harmony export */   PAGE_MASTER_LAYOUT: () => (/* binding */ PAGE_MASTER_LAYOUT),
/* harmony export */   PAGE_PASSWORD_FORGOT: () => (/* binding */ PAGE_PASSWORD_FORGOT),
/* harmony export */   PAGE_PROJECT: () => (/* binding */ PAGE_PROJECT),
/* harmony export */   PAGE_PROVINCE: () => (/* binding */ PAGE_PROVINCE),
/* harmony export */   PAGE_REAL_ESTATE: () => (/* binding */ PAGE_REAL_ESTATE),
/* harmony export */   PAGE_REAL_ESTATE_VERIFY: () => (/* binding */ PAGE_REAL_ESTATE_VERIFY),
/* harmony export */   PAGE_REGION_LINK: () => (/* binding */ PAGE_REGION_LINK),
/* harmony export */   PAGE_SETTINGS: () => (/* binding */ PAGE_SETTINGS),
/* harmony export */   PAGE_SIGN_IN: () => (/* binding */ PAGE_SIGN_IN),
/* harmony export */   PAGE_SIGN_UP: () => (/* binding */ PAGE_SIGN_UP),
/* harmony export */   PAGE_STREET: () => (/* binding */ PAGE_STREET),
/* harmony export */   PAGE_SUBSCRIPTION: () => (/* binding */ PAGE_SUBSCRIPTION),
/* harmony export */   PAGE_USER: () => (/* binding */ PAGE_USER),
/* harmony export */   PAGE_UTILITY: () => (/* binding */ PAGE_UTILITY),
/* harmony export */   PAGE_VERIFICATION: () => (/* binding */ PAGE_VERIFICATION),
/* harmony export */   PAGE_WARD: () => (/* binding */ PAGE_WARD),
/* harmony export */   PATH_ADDRESS_MAP: () => (/* binding */ PATH_ADDRESS_MAP),
/* harmony export */   PATH_AUTH: () => (/* binding */ PATH_AUTH),
/* harmony export */   PATH_BLOG: () => (/* binding */ PATH_BLOG),
/* harmony export */   PATH_CONSTRUCTION_CONTRACTOR: () => (/* binding */ PATH_CONSTRUCTION_CONTRACTOR),
/* harmony export */   PATH_CUSTOMER: () => (/* binding */ PATH_CUSTOMER),
/* harmony export */   PATH_CUSTOMER_REQUEST: () => (/* binding */ PATH_CUSTOMER_REQUEST),
/* harmony export */   PATH_DEFAULT: () => (/* binding */ PATH_DEFAULT),
/* harmony export */   PATH_DESIGN_UNIT: () => (/* binding */ PATH_DESIGN_UNIT),
/* harmony export */   PATH_DISTRICT: () => (/* binding */ PATH_DISTRICT),
/* harmony export */   PATH_EMPLOYEE: () => (/* binding */ PATH_EMPLOYEE),
/* harmony export */   PATH_EMPLOYEE_VERIFICATION: () => (/* binding */ PATH_EMPLOYEE_VERIFICATION),
/* harmony export */   PATH_ERROR: () => (/* binding */ PATH_ERROR),
/* harmony export */   PATH_INVESTOR: () => (/* binding */ PATH_INVESTOR),
/* harmony export */   PATH_LOCATION: () => (/* binding */ PATH_LOCATION),
/* harmony export */   PATH_MASTER_LAYOUT: () => (/* binding */ PATH_MASTER_LAYOUT),
/* harmony export */   PATH_PASSWORD_FORGOT: () => (/* binding */ PATH_PASSWORD_FORGOT),
/* harmony export */   PATH_PROFILE: () => (/* binding */ PATH_PROFILE),
/* harmony export */   PATH_PROJECT: () => (/* binding */ PATH_PROJECT),
/* harmony export */   PATH_PROVINCE: () => (/* binding */ PATH_PROVINCE),
/* harmony export */   PATH_REAL_ESTATE: () => (/* binding */ PATH_REAL_ESTATE),
/* harmony export */   PATH_REGION_LINK: () => (/* binding */ PATH_REGION_LINK),
/* harmony export */   PATH_SETTINGS: () => (/* binding */ PATH_SETTINGS),
/* harmony export */   PATH_SIGN_IN: () => (/* binding */ PATH_SIGN_IN),
/* harmony export */   PATH_SIGN_UP: () => (/* binding */ PATH_SIGN_UP),
/* harmony export */   PATH_STREET: () => (/* binding */ PATH_STREET),
/* harmony export */   PATH_SUBSCRIPTION: () => (/* binding */ PATH_SUBSCRIPTION),
/* harmony export */   PATH_UTILITY: () => (/* binding */ PATH_UTILITY),
/* harmony export */   PATH_VERIFICATION: () => (/* binding */ PATH_VERIFICATION),
/* harmony export */   PATH_WARD: () => (/* binding */ PATH_WARD),
/* harmony export */   PUSH_NOTIFICATION_KEY: () => (/* binding */ PUSH_NOTIFICATION_KEY),
/* harmony export */   TEMPLATE_FORGOT_PASSWORD: () => (/* binding */ TEMPLATE_FORGOT_PASSWORD),
/* harmony export */   TEMPLATE_SETTING: () => (/* binding */ TEMPLATE_SETTING),
/* harmony export */   TEMPLATE_SIGN_UP: () => (/* binding */ TEMPLATE_SIGN_UP),
/* harmony export */   TEMPLATE_VERIFICATION: () => (/* binding */ TEMPLATE_VERIFICATION),
/* harmony export */   TEMPLATE_VIEW_ENTITY: () => (/* binding */ TEMPLATE_VIEW_ENTITY)
/* harmony export */ });
/**
 * Web Constants - Central repository for application routing and UI configuration
 *
 * This module contains all URL paths, template references, and page imports used
 * throughout the real estate admin application. It provides a single source of
 * truth for routing configuration and ensures consistency across the application.
 *
 * Organization:
 * - URL path constants for routing
 * - Template file references
 * - Dynamic page imports for code splitting
 * - UI configuration constants
 */
// =============================================================================
// URL PATH CONSTANTS
// =============================================================================
/**
 * Entity Management Paths
 * URL segments for main entity management pages
 */
const PATH_ADDRESS_MAP = "address_map";
const PATH_CONSTRUCTION_CONTRACTOR = "construction_contractor";
const PATH_DISTRICT = "district";
const PATH_MASTER_LAYOUT = "master_layout";
const PATH_DESIGN_UNIT = "design_unit";
const PATH_INVESTOR = "investor";
const PATH_REGION_LINK = "region_link";
const PATH_UTILITY = "utilities";
const PATH_CUSTOMER = "customer";
const PATH_EMPLOYEE = "employee";
const PATH_EMPLOYEE_VERIFICATION = "verification_code";
const PATH_PROJECT = "project";
const PATH_WARD = "ward";
const PATH_STREET = "street";
const PATH_PROVINCE = "province";
const PATH_REAL_ESTATE = "real_estate";
const PATH_SUBSCRIPTION = "subscription";
const PATH_BLOG = "blogs";
const PATH_CUSTOMER_REQUEST = "customer_request";
/**
 * System and Authentication Paths
 * URL segments for system-level pages and authentication flows
 */
const PATH_DEFAULT = "/"; // Application root/dashboard
const PATH_PASSWORD_FORGOT = "forgot_password";
const PATH_LOCATION = "location";
const PATH_SIGN_IN = "sign_in";
const PATH_SIGN_UP = "sign_up";
const PATH_VERIFICATION = "verification"; // Email/account verification
const PATH_PROFILE = "profile";
const PATH_AUTH = "auth"; // Authentication endpoints
const PATH_ERROR = "error"; // Error page display
const PATH_SETTINGS = "settings"; // Application settings
// =============================================================================
// TEMPLATE CONFIGURATION
// =============================================================================
/**
 * Template Directory and File References
 * Paths to HTML templates used for page rendering
 */
const FOLDER_TEMPLATE = "/templates/";
const TEMPLATE_VIEW_ENTITY = "page_entity.html"; // Standard CRUD page template
const TEMPLATE_FORGOT_PASSWORD = "forgot_password.html";
const TEMPLATE_SIGN_UP = "sign_up.html";
const TEMPLATE_VERIFICATION = "verification.html";
const TEMPLATE_SETTING = "page_settings.html";
// =============================================================================
// DYNAMIC PAGE IMPORTS
// =============================================================================
/**
 * Page Module Imports for Code Splitting
 * Dynamic imports enable lazy loading of page modules, improving initial load performance.
 * Each import corresponds to a specific page component that handles UI and business logic.
 */
/** Dashboard and Main Pages */
const PAGE_DASHBOARD = Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_chart_js_dist_chart_js"), __webpack_require__.e("src_pages_dashboard_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/dashboard */ "./src/pages/dashboard.ts"));
/** Entity Management Pages */
const PAGE_ADDRESS_MAP = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_address_map_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/address_map */ "./src/pages/address_map.ts"));
const PAGE_CONSTRUCTION_CONTRACTOR = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_construction_contractor_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/construction_contractor */ "./src/pages/construction_contractor.ts"));
const PAGE_DISTRICT = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_district_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/district */ "./src/pages/district.ts"));
const PAGE_MASTER_LAYOUT = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_master_layout_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/master_layout */ "./src/pages/master_layout.ts"));
const PAGE_DESIGN_UNIT = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_design_unit_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/design_unit */ "./src/pages/design_unit.ts"));
const PAGE_INVESTOR = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_investor_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/investor */ "./src/pages/investor.ts"));
const PAGE_REGION_LINK = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_region_link_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/region_link */ "./src/pages/region_link.ts"));
const PAGE_UTILITY = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_utilities_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/utilities */ "./src/pages/utilities.ts"));
const PAGE_CUSTOMER = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_customer_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/customer */ "./src/pages/customer.ts"));
const PAGE_EMPLOYEE = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_employee_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/employee */ "./src/pages/employee.ts"));
const PAGE_PROJECT = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_project_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/project */ "./src/pages/project.ts"));
const PAGE_WARD = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_ward_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/ward */ "./src/pages/ward.ts"));
const PAGE_STREET = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_street_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/street */ "./src/pages/street.ts"));
const PAGE_PROVINCE = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_province_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/province */ "./src/pages/province.ts"));
const PAGE_REAL_ESTATE = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_real_estate_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/real_estate */ "./src/pages/real_estate.ts"));
const PAGE_SUBSCRIPTION = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_subscription_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/subscription */ "./src/pages/subscription.ts"));
/** Authentication and System Pages */
const PAGE_PASSWORD_FORGOT = __webpack_require__.e(/*! import() */ "src_pages_forgot_password_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/forgot_password */ "./src/pages/forgot_password.ts"));
const PAGE_LOCATION = __webpack_require__.e(/*! import() */ "src_pages_location_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/location */ "./src/pages/location.ts"));
const PAGE_SIGN_IN = __webpack_require__.e(/*! import() */ "src_pages_sign_in_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/sign_in */ "./src/pages/sign_in.ts"));
const PAGE_SIGN_UP = __webpack_require__.e(/*! import() */ "src_pages_sign_up_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/sign_up */ "./src/pages/sign_up.ts"));
const PAGE_VERIFICATION = __webpack_require__.e(/*! import() */ "src_pages_verification_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/verification */ "./src/pages/verification.ts"));
const PAGE_USER = __webpack_require__.e(/*! import() */ "src_pages_profile_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/profile */ "./src/pages/profile.ts"));
const PAGE_ERROR = __webpack_require__.e(/*! import() */ "src_pages_page_error_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/page_error */ "./src/pages/page_error.ts"));
const PAGE_SETTINGS = __webpack_require__.e(/*! import() */ "src_pages_settings_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/settings */ "./src/pages/settings.ts"));
const PAGE_BLOG = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_blog_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/blog */ "./src/pages/blog.ts"));
const PAGE_CUSTOMER_REQUEST = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_customer_request_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/customer_request */ "./src/pages/customer_request.ts"));
/** Special Purpose Pages */
const PAGE_DETAIL = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_page_detail_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/page_detail */ "./src/pages/page_detail.ts")); // Universal detail view
const PAGE_DETAIL2 = Promise.all(/*! import() */[__webpack_require__.e("src_utilities_Interaction_ts"), __webpack_require__.e("src_pages_page_detail2_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/page_detail2 */ "./src/pages/page_detail2.ts")); // Parent-child detail view
const PAGE_REAL_ESTATE_VERIFY = __webpack_require__.e(/*! import() */ "src_pages_real_estate_verify_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/real_estate_verify */ "./src/pages/real_estate_verify.ts")); // Property verification workflow
// =============================================================================
// UI CONFIGURATION CONSTANTS
// =============================================================================
/**
 * Image Display Configuration
 * Standard dimensions for image thumbnails in table views
 */
const IMAGE_TAB_SIZE = {
    width: 100, // Pixel width for table image thumbnails
    height: 100 // Pixel height for table image thumbnails
};
const IMAGE_EXTENSION = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'];
const PUSH_NOTIFICATION_KEY = "BFHKM8PT6GLAir_zMUBH3RXboyzzsI4WJAMxAJNJszHurE6ZLpGp7wl2oTFYYnP0xON2YYAm4SSO_0aw3eKPM-s";
const MILLION = Number('1' + '0'.repeat(6));
const BILLION = Number('1' + '0'.repeat(9));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLanguage: () => (/* binding */ changeLanguage),
/* harmony export */   "default": () => (/* binding */ navigateTo),
/* harmony export */   getLanguage: () => (/* binding */ getLanguage),
/* harmony export */   loadLanguage: () => (/* binding */ loadLanguage),
/* harmony export */   setLoadingStatus: () => (/* binding */ setLoadingStatus)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/MyUtilities */ "./src/utilities/MyUtilities.ts");
/* harmony import */ var _components_table_ButtonTableAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/table/ButtonTableAction */ "./src/components/table/ButtonTableAction.ts");
/* harmony import */ var _components_form_InputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form/InputComponent */ "./src/components/form/InputComponent.ts");
/* harmony import */ var _components_modal_ModalComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/ModalComponent */ "./src/components/modal/ModalComponent.ts");
/* harmony import */ var _components_table_TableNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/table/TableNavigation */ "./src/components/table/TableNavigation.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _utilities_NavigationUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/NavigationUtils */ "./src/utilities/NavigationUtils.ts");
/* harmony import */ var _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/EventHandler */ "./src/utilities/EventHandler.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./language */ "./src/language/index.ts");
/* harmony import */ var _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/DataConstants */ "./src/constants/DataConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













// REGION 1: Global variables
var gIsDark = false;
var gLanguage = 'vn';
var gInitializationComplete = false;
$(function () {
    return __awaiter(this, void 0, void 0, function* () {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].isActive = false;
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].logLevel = 0;
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].log("Initiate secure auth");
        console.warn = () => { };
        console.error = () => { };
        console.info = () => { };
        console.debug = () => { };
        yield _utilities_SecureAuth__WEBPACK_IMPORTED_MODULE_11__["default"].init();
        yield _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_1__["default"].checkExistingUser();
        connectNavigation();
        gInitializationComplete = true;
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].log("---- initialize complete");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', (e) => {
        const anchor = e.target
            .closest('a[data-link]');
        if (anchor) {
            e.preventDefault();
            navigateTo(anchor.getAttribute('href') || '/');
        }
    });
    router();
});
window.addEventListener('resize', function () {
    ('----- resize');
    (0,_utilities_NavigationUtils__WEBPACK_IMPORTED_MODULE_7__.switchNavigation)(true);
});
function connectNavigation() {
    // Handle dropdown (Map in left navigation)
    _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].log("navigation connected");
    $(".button-dropdown").on('click', _utilities_NavigationUtils__WEBPACK_IMPORTED_MODULE_7__.switchDropdown);
    // Handle navigation
    $("#nav-left-toggle").on('click', () => (0,_utilities_NavigationUtils__WEBPACK_IMPORTED_MODULE_7__.switchNavigation)());
    $("#button-signout").on('click', _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_8__.onButtonSignOutClick);
    $("#button-subscription").on('click', _utilities_EventHandler__WEBPACK_IMPORTED_MODULE_8__.onSubscriptionButtonClick);
    // const socket = new WebSocket("ws://localhost:8080/ws/notify")
    // socket.onmessage = function(event){
    //     MyLogger.log("--- notification:", event.data);
    //     alert("Notification: " + event.data);
    // }
    // socket.onopen = function(){
    //     socket.send("Hello from client");
    // }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].log("Is using dark theme");
        gIsDark = false;
    }
    else {
        gIsDark = true;
    }
    toggleTheme();
    $("#button-theme").on('click', toggleTheme);
    _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].log("---- current system language:", navigator.language);
    if (localStorage.getItem('prefer-language') != null) {
        gLanguage = localStorage.getItem('prefer-language');
        return;
    }
    var vCurrentLanguage = navigator.language;
    if (vCurrentLanguage.includes('-')) {
        vCurrentLanguage = vCurrentLanguage.split('-')[0];
    }
    gLanguage = vCurrentLanguage;
}
function navigateTo(paramUrl) {
    if (!paramUrl.startsWith('/')) {
        paramUrl = '/' + paramUrl;
    }
    history.pushState(null, '', paramUrl);
    router();
}
const router = () => __awaiter(void 0, void 0, void 0, function* () {
    while (!gInitializationComplete) {
        yield new Promise(resolve => setTimeout(resolve, 300));
    }
    const routes = {
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_DASHBOARD,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_ADDRESS_MAP]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_ADDRESS_MAP,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_CONSTRUCTION_CONTRACTOR]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_CONSTRUCTION_CONTRACTOR,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_CUSTOMER]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_CUSTOMER,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DESIGN_UNIT]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_DESIGN_UNIT,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DISTRICT]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_DISTRICT,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_EMPLOYEE]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_EMPLOYEE,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_PASSWORD_FORGOT]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_PASSWORD_FORGOT,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_INVESTOR]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_INVESTOR,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_LOCATION]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_LOCATION,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_MASTER_LAYOUT]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_MASTER_LAYOUT,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_PROJECT]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_PROJECT,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_PROVINCE]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_PROVINCE,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_REAL_ESTATE]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_REAL_ESTATE,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_REGION_LINK]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_REGION_LINK,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_SIGN_IN]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_SIGN_IN,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_SIGN_UP]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_SIGN_UP,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_STREET]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_STREET,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_SUBSCRIPTION]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_SUBSCRIPTION,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_PROFILE]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_USER,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_UTILITY]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_UTILITY,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_VERIFICATION]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_VERIFICATION,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_WARD]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_WARD,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_ERROR]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_ERROR,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_SETTINGS]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_SETTINGS,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_BLOG]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_BLOG,
        [_constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_CUSTOMER_REQUEST]: () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_CUSTOMER_REQUEST
    };
    $("#div-loading").addClass('d-flex').removeClass('d-none');
    var path = window.location.pathname;
    if (path !== "/" && path.endsWith("/")) {
        path = path.slice(0, -1);
        history.replaceState(null, '', path);
    }
    var loadPage = routes[path];
    const main = $('#main-container');
    main.children().remove();
    $(".left-navigation a").removeClass('link-selected');
    var vSelection = $(".left-navigation").find(`a[href='${path}']`);
    vSelection.addClass('link-selected');
    if (_utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_1__["default"].validateDetailPagePath()) {
        loadPage = () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_DETAIL;
    }
    if (_utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_1__["default"].validateDetailPagePath2()) {
        loadPage = () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_DETAIL2;
    }
    if (_utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_1__["default"].validateVerifyPath()) {
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].log("Is verify page");
        loadPage = () => _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_REAL_ESTATE_VERIFY;
    }
    var vPathAuth = ["/" + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_SIGN_IN,
        '/' + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_SIGN_UP,
        '/' + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_PASSWORD_FORGOT,
        '/' + _constants_webConstants__WEBPACK_IMPORTED_MODULE_6__.PATH_VERIFICATION];
    toggleAuthPage(vPathAuth.includes(path));
    if (loadPage) {
        const module = yield loadPage();
        yield module.default();
        loadLanguage();
        updatePageName();
        _utilities_MyLogger__WEBPACK_IMPORTED_MODULE_10__["default"].log("Load page finish");
        $("#div-loading").removeClass('d-flex').addClass('d-none');
    }
});
function toggleAuthPage(isAuth) {
    if (isAuth) {
        $("#bread-crumb").addClass('hide-element');
        $(".left-navigation").addClass('hide-element');
        $("#top-navigation").addClass('hide-element');
        $("footer").addClass('hide-element');
        $("#main-container").removeClass('mt-4 mb-5');
        $("#bread-crumb").parent().removeClass('px-4');
        return;
    }
    $("#bread-crumb").removeClass('hide-element');
    $(".left-navigation").removeClass('hide-element');
    $("#top-navigation").removeClass('hide-element');
    $("footer").removeClass('hide-element');
    $("#main-container").addClass('mt-4 mb-5');
    $("#bread-crumb").parent().addClass('px-4');
}
function updatePageName() {
    var vName = $(".left-navigation .link-selected").text();
    if (vName == '') {
        var vName = _utilities_MyUtilities__WEBPACK_IMPORTED_MODULE_1__["default"]
            .convertName(window.location.pathname, 'pageTitle');
    }
    $("#span-bread-path").text(window.location.pathname);
    $("#h3-bread-title").text(vName);
    // MyLogger.log('--- location', window.location.pathname)
    document.title = vName !== null && vName !== void 0 ? vName : 'Dashboard';
}
function toggleTheme() {
    gIsDark = !gIsDark;
    if (gIsDark) {
        document.body.classList.add('dark-theme');
        $(this).find('i').removeClass('fa-solid fa-sun').addClass('fa-solid fa-moon');
    }
    else {
        document.body.classList.remove('dark-theme');
        $(this).find('i').removeClass('fa-solid fa-moon').addClass('fa-solid fa-sun');
    }
}
function loadLanguage() {
    $(`body [${_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_ATTR_LANGUAGE}]`).get().forEach(element => {
        // MyLogger.log('test', element)
        $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_LANGUAGE, element.getAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_ATTR_LANGUAGE))
            .removeAttr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_ATTR_LANGUAGE);
        // MyLogger.log('test',$(element).data('lang-text'))
    });
    const currentLang = _language__WEBPACK_IMPORTED_MODULE_9__["default"][gLanguage];
    // MyLogger.log("--- curent language:", currentLang);
    var vElements = $(document).find('body *').get();
    // var vElementsAttr = $(document).find('[data-lang-text]').get();
    // MyLogger.log("All elements:", vElements)
    // MyLogger.log("All elements with attributes:", vElementsAttr)
    vElements === null || vElements === void 0 ? void 0 : vElements.forEach(element => {
        // MyLogger.log('Current element', element);
        var vKey = $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_LANGUAGE);
        // var vKey = element.getAttribute('data-lang-text');
        // MyLogger.log("Current key:", vKey)
        if (vKey == null || !currentLang[vKey]) {
            return;
        }
        if (element.tagName.toLowerCase() == 'input') {
            // MyLogger.log("Is an input", vKey, currentLang[vKey]);
            $(element).attr('placeholder', currentLang[vKey] + ' ...');
            return;
        }
        if (element.hasAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_ATTR_LANGUAGE)) {
            $(element).removeAttr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_ATTR_LANGUAGE);
            $(element).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_12__.DATA_LANGUAGE, vKey);
        }
        var vChildren = $(element).children().get();
        var vSubText = '';
        if (vChildren.length > 0) {
            vSubText = vChildren[0].outerHTML;
        }
        $(element).html(currentLang[vKey] + vSubText);
    });
    // vElementsAttr?.forEach(element => {
    //     MyLogger.log('Current element', element);
    //     var vKey = $(element).data('lang-text');
    //     // var vKey = element.getAttribute('data-lang-text');
    //     MyLogger.log("Current key:", vKey)
    //     if (vKey == null || !currentLang[vKey]) {
    //         return;
    //     }
    //     if (element.tagName.toLowerCase() == 'input') {
    //         MyLogger.log("Is an input");
    //         $(element).data('placehodler', currentLang[vKey] + ' ...')
    //         return;
    //     }
    //     $(element).removeAttr('data-lang-text');
    //     $(element).data('lang-text', vKey);
    //     MyLogger.log('element data',$(element).data('lang-text'))
    //     $(element).text(currentLang[vKey])
    // })
}
function changeLanguage(paramLanguage) {
    gLanguage = paramLanguage;
    localStorage.setItem('prefer-language', gLanguage);
    loadLanguage();
    updatePageName();
}
function getLanguage() {
    return gLanguage;
}
function setLoadingStatus(paramStatus) {
    if (paramStatus == true) {
        // gDisabledWidget = $("input, select, textarea, button, a")
        // .not('[disabled]');
        // MyLogger.log("Widget to disabled:", gDisabledWidget);
        $("#div-loading").removeClass('d-none').addClass('d-flex');
        // gDisabledWidget.attr('disabled', '');
        return;
    }
    $("#div-loading").removeClass('d-flex').addClass('d-none');
    // gDisabledWidget?.removeAttr('disabled');
    // gDisabledWidget = null;
}
window.addEventListener('popstate', () => {
    // MyLogger.log("Pop back page");
    router();
});


/***/ }),

/***/ "./src/language/en.ts":
/*!****************************!*\
  !*** ./src/language/en.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const en = {
    input_username: "Username",
    input_password: 'Password',
    input_password_confirm: 'Confirm password',
    input_password_forgot: 'Forgot password',
    input_account_none: "You don't have an account?",
    input_account_none_button: 'Sign Up here',
    input_account_exist: "You already have an account?",
    input_account_exist_button: 'Sign In here',
    input_id: 'Id',
    input_description: 'Description',
    input_fax: 'Fax',
    input_website: 'Webstie',
    input_status: 'Trạng thái',
    input_name_first: 'F. Name',
    input_name_last: 'L. Name',
    input_apartment_list: 'Apartment list',
    input_email: "Email",
    input_verify_code: 'Verification code',
    input_limit: 'Limit',
    input_name: 'Name',
    input_project: 'Project',
    input_acreage: 'Acreage',
    input_create_date: 'Create date',
    input_update_date: 'Update date',
    input_phone: 'Phone',
    input_phone2: 'Phone (sub)',
    input_contact_name: 'Name',
    input_contact_title: 'Contact title',
    input_create_by: 'Create by',
    input_update_by: 'Update by',
    input_num_real_estates: 'Total posts',
    input_mobile: 'Phone',
    input_note: 'Note',
    input_last_name: 'L. Name',
    input_first_name: 'F. Name',
    input_title: 'Title',
    input_title_emp: 'Title',
    input_birthday: 'Birthday',
    input_city: 'City',
    input_region: 'Region',
    input_postal_code: 'Postal code',
    input_country: 'Country',
    input_home_phone: 'Phone',
    input_photo: 'Photo',
    input_activated: 'Activation',
    input_user_level: 'User level',
    input_reports_to: 'Report to',
    input_province: 'Province',
    input_district: 'District',
    input_ward: 'Ward',
    input_street: 'Street',
    input_code: 'code',
    input_prefix: 'Prefix',
    input_customer: 'Customer',
    input_user: 'Customer',
    input_address: 'Address',
    input_latitude: 'Latitude',
    input_longtitude: 'Longtitude',
    input_language: 'Language',
    input_hire_date: 'Join date',
    input_projects: 'Projects',
    input_utilities: 'Utilities',
    input_region_link: 'Region Link',
    input_profile: 'Profile',
    input_investor: 'Investor',
    input_design_unit: 'Design Unit',
    input_construction_contractor: 'Contractor',
    input_slogan: 'Slogan',
    input_construct_area: 'Const. Area',
    input_num_block: 'Num Block',
    input_num_floors: 'Num Floors',
    input_num_apartment: 'Num Apt.',
    input_apartment_area: 'Apt. Area',
    input_type: 'Type',
    input_request: 'Request',
    input_price_time: 'Price Time',
    input_price: 'Price',
    input_direction: 'Direction',
    input_bath: 'Bath',
    input_bedroom: 'Bedroom',
    input_balcony: 'Balcony',
    input_furniture_type: 'Furniture Type',
    input_width_y: 'Width Y',
    input_width_x: 'Width X',
    input_price_min: 'Price Time',
    input_total_floors: 'Total Floors',
    input_floor_number: 'Floor Number',
    input_apart_code: 'Apt. Code',
    input_wall_area: 'Wall Area',
    input_landscape_view: 'Landscape View',
    input_aprt_loca: 'Apt. Location',
    input_apart_type: 'Apt. Type',
    input_price_rent: 'Price Rent',
    input_return_rate: 'Return Rate',
    input_factor: 'Factor',
    input_street_house: 'Street House',
    input_f_s_b_o: 'FSBO',
    input_distance_to_facade: 'Dist. Facade',
    input_adjacent_facade_num: 'Adj. Dist. Facade',
    input_adjacent_road: 'Adj. Road',
    input_alley_min_width: 'Alley Min Width',
    input_adjacent_alley_min_width: 'Adj. Alley Min Width',
    input_d_t_s_x_d: 'DTSXD',
    input_price_c_t_x_d: 'Price CTXD',
    input_value_c_t_x_d: 'Value CTXD',
    input_legal_doc: 'Legal Doc',
    input_shape: 'Shape',
    input_structure: 'Structure',
    input_c_l_c_l: 'CLCL',
    input_body: 'Body',
    signin_title: 'Sign In',
    signin_button: 'Sign in',
    signup_title: "Sign Up",
    signup_button: 'Sign up',
    password_change_title: 'Change Password',
    password_change_button: 'Change password',
    password_change_button_action: 'Continue',
    verification_button: "Verify",
    password_change_back: 'Return to home page',
    text_active_location: 'City with most posts',
    text_view_location: 'City with most view',
    text_top_sell: 'Top sell',
    text_no_data: 'No info',
    text_location_data: 'Information about city',
    text_account_info: 'Account information',
    text_code_sent: 'A code has been sent to your email.',
    text_code_resent: 'Resend code',
    text_info_none: 'No information',
    text_choose_option: 'Please pick an option',
    text_customer_request_request_0: "New",
    text_customer_request_request_1: "In Progress",
    text_customer_request_request_2: "Complete",
    text_customer_request_type_0: "Support",
    text_customer_request_type_1: "Complaint",
    text_customer_request_type_2: "House visit",
    text_dashboard_request: "User require help",
    text_date_year_ago: 'year(s) ago',
    text_date_month_ago: 'month(s) ago',
    text_date_day_ago: 'day(s) ago',
    text_dashboard_customer_week: 'new Customer this week',
    text_dashboard_customer_month: 'new Customer this month',
    text_dashboard_request_day: 'request(s) today',
    text_dashboard_request_week: 'request(s) this week',
    text_dashboard_post_week: 'this week',
    text_dashboard_post_month: 'this month',
    text_dashboard_not_verify: 'real estate(s)',
    text_dashboard_not_verify_weeks: 'not verify over 2 weeks',
    text_entries_none: 'No entries match your search',
    text_customer_posts: 'Number of posts',
    tab_important: 'Important',
    tab_optional: 'Optional',
    tab_data: 'Data',
    tab_data_2: 'Data 2',
    tab_photo: 'Photo',
    tab_r1: 'P. detail',
    tab_r2: 'B. detail',
    tab_r3: 'L. Detail',
    tab_r4: 'Extra data 1',
    tab_r5: 'Extra data 2',
    tab_r6: 'Extra data 3',
    dashboard_card1: 'Customer',
    dashboard_card1_line1: 'New customers / week',
    dashboard_card1_line2: 'New customers / month',
    dashboard_card2: 'Request',
    dashboard_card2_line1: 'request / week',
    dashboard_card2_line2: 'request / month',
    dashboard_card3: 'New Real Estates',
    dashboard_card3_line1: 'in week',
    dashboard_card3_line2: 'in month',
    dashboard_card4: 'Unverified Real Estates',
    dashboard_card4_line1: 'Real Estates',
    dashboard_card4_line2: 'over 2 weeks',
    dashboard_estate_not_verify: 'Unverified Real Estates',
    modal_create: 'Create',
    modal_update: 'Update',
    modal_delete: 'Delete',
    left_navigation_title: 'HomeMag',
    nav_dashboard: 'Dashboard',
    nav_address_map: 'Address Maps',
    nav_master_layout: 'Master Layouts',
    nav_construction_contractor: 'Construction Contractors',
    nav_design_unit: 'Design units',
    nav_investor: 'Investors',
    nav_region_link: 'Region links',
    nav_utilities: 'Utilities',
    nav_customer: 'Customers',
    nav_employee: 'Users',
    nav_project: 'Projects',
    nav_group_location: 'Locations',
    nav_province: 'Provinces',
    nav_district: 'Districts',
    nav_ward: 'Wards',
    nav_street: 'Streets',
    nav_real_estate: 'Real Estate Information',
    nav_subscription: 'Subscription',
    nav_settings: 'Settings',
    nav_blog: 'Blog',
    nav_customer_request: 'Request',
    search_contain: 'Default',
    search_exact: 'Special char',
    header_address: 'Address',
    header_latitude: 'Latitude',
    header_longtitude: 'Longtityde',
    table_page: 'page',
    table_page_of: 'of',
    table_record: 'record',
    table_record_to: 'to',
    table_record_of: 'of',
    header_name: 'Name',
    header_project: 'Project',
    header_acreage: 'Acreage (m<sup>2</sup>)',
    header_create_date: 'Create date',
    header_update_date: 'Update date',
    header_phone: 'Main phone',
    header_phone2: 'Sub phone',
    header_email: 'email',
    header_contact_name: 'Contact name',
    header_num_real_estates: 'Total posts',
    header_mobile: 'Phone number',
    header_note: 'Note',
    header_create_by: 'Create by',
    header_update_by: 'Update by',
    header_last_name: 'L. Name',
    header_first_name: 'F. Name',
    header_title: 'Title',
    header_birthday: 'Birthday',
    header_city: 'City',
    header_region: 'Region',
    header_postal_code: 'Postal code',
    header_country: 'Country',
    header_home_phone: 'Home phone',
    header_photo: 'Photo',
    header_activated: 'Activation status',
    header_user_level: 'User level',
    header_reports_to: 'Report to',
    header_province: 'Province',
    header_district: 'District',
    header_ward: 'Ward',
    header_street: 'Street',
    header_code: 'Code',
    header_prefix: 'Prefix',
    header_customer: 'Customer',
    header_user: 'Customer',
    header_type: 'Type',
    header_status: 'Status',
    header_body: 'Body',
    lang_vietnamese: 'Vietnamese',
    lang_english: 'English',
    err_auth_incorrect: "Incorrect username or password",
    err_auth_empty: "Username and password must be filled",
    err_auth_code_incorrect: "Verification code not correct",
    err_auth_verify: "You have not verify your account",
    err: "Something went wrong, please try again later.",
    err_email: "Cannot find email",
    err_field: "Please fill in all required data",
    err_path: "Invalid path",
    err_image_none: "You have not picked any picture",
    api_success: 'Success',
    api_verify_success: "Verify email success",
    api_verify_err: "Verification code incorrect",
    api_create_success: "Craete success",
    api_update_success: "Update success",
    api_delete_success: "Delete success",
    api_getall_fail: "Get all data fail",
    api_create_fail: "Create fail",
    api_update_fail: "Update fail",
    api_delete_fail: "Delete fail",
    err_push_exist: "Your have already registered.",
    warn_empty: ' cannot be empty.',
    warn_format: ' wrong format.',
    warn_number_only: "must only contain number",
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (en);


/***/ }),

/***/ "./src/language/index.ts":
/*!*******************************!*\
  !*** ./src/language/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ "./src/language/en.ts");
/* harmony import */ var _vn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vn */ "./src/language/vn.ts");


const language = { en: _en__WEBPACK_IMPORTED_MODULE_0__["default"], vn: _vn__WEBPACK_IMPORTED_MODULE_1__["default"] };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (language);


/***/ }),

/***/ "./src/language/vn.ts":
/*!****************************!*\
  !*** ./src/language/vn.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const vn = {
    input_username: "Tên tài khoản",
    input_password: 'Mật khẩu',
    input_password_confirm: 'Xác nhận mật khẩu',
    input_password_forgot: 'Quên mật khẩu',
    input_account_none: "Bạn không có tài khoản?",
    input_account_none_button: 'Đăng ký tại đây',
    input_account_exist: "Bạn đã có tài khoản?",
    input_account_exist_button: 'Đăng nhập ở đây',
    input_id: 'ID',
    input_description: 'Mô tả',
    input_fax: 'Fax',
    input_website: 'Link web',
    input_status: 'Trạng thái',
    input_name_first: 'Tên',
    input_name_last: 'Họ',
    input_apartment_list: 'Danh sách phòng',
    input_email: "Email",
    input_verify_code: 'Mã xác thực',
    input_limit: 'Limit',
    input_name: 'Tên',
    input_project: 'Dự án',
    input_acreage: 'Kích thước',
    input_create_date: 'Ngày tạo',
    input_update_date: 'Ngày cập nhật',
    input_phone: 'Sđt',
    input_phone2: 'Sđt phụ',
    input_contact_name: 'Tên',
    input_contact_title: 'Giới tính',
    input_create_by: 'Tạo bởi',
    input_update_by: 'Cập nhật bởi',
    input_num_real_estates: 'Số bài đăng',
    input_mobile: 'Sđt',
    input_note: 'Ghi chú',
    input_last_name: 'Họ',
    input_first_name: 'Tên',
    input_title: 'Tiêu đề',
    input_title_emp: 'Vị trí',
    input_birthday: 'Sinh nhật',
    input_city: 'Thành phố',
    input_region: 'Khu vực',
    input_postal_code: 'Bưu điện',
    input_country: 'Nước',
    input_home_phone: 'Sđt',
    input_photo: 'Hình ảnh',
    input_activated: 'Kích hoạt',
    input_user_level: 'Cấp độ',
    input_reports_to: 'Báo cáo cho',
    input_province: 'Thành phố',
    input_district: 'Quận',
    input_ward: 'Phường',
    input_street: 'Tên đường',
    input_code: 'Mã',
    input_prefix: 'Loại',
    input_customer: 'Khách hàng',
    input_user: 'Khách hàng',
    input_address: 'Địa chỉ',
    input_latitude: 'Kinh độ',
    input_longtitude: 'Vĩ độ',
    input_language: 'Ngôn ngữ',
    input_hire_date: 'Ngày tham gia',
    input_projects: 'Các dự án',
    input_utilities: 'Các tiện ích',
    input_region_link: 'Kết nối vùng',
    input_profile: 'Thông tin',
    input_investor: 'Nhà đầu tư',
    input_design_unit: 'Nhà thiết kế',
    input_construction_contractor: 'Nhà thầu',
    input_slogan: 'Khẩu hiệu',
    input_construct_area: 'Khu vực xây dựng',
    input_num_block: 'Số tòa nhà',
    input_num_floors: 'Số tầng',
    input_num_apartment: 'Số căn hộ',
    input_apartment_area: 'Khu vực căn hộ',
    input_type: 'Loại',
    input_request: 'Yêu cầu',
    input_price_time: 'Tốc độ bán',
    input_price: 'Giá',
    input_direction: 'Hướng nhà',
    input_bath: 'Phòng tắm',
    input_bedroom: 'Phòng ngủ',
    input_balcony: 'Ban công',
    input_furniture_type: 'Loại nội thất',
    input_width_y: 'Chiều dài',
    input_width_x: 'Chiều rộng',
    input_price_min: 'Giá tối thiểu',
    input_total_floors: 'Tổng tầng',
    input_floor_number: 'Số tầng',
    input_apart_code: 'Mã căn hộ',
    input_wall_area: 'Khu vực tường',
    input_landscape_view: 'Góc nhìn cảnh',
    input_aprt_loca: 'Vị trí căn hộ',
    input_apart_type: 'Loại căn hộ',
    input_price_rent: 'Giá thuê',
    input_return_rate: 'Mức tăng trưởng',
    input_factor: 'Yếu tố',
    input_street_house: 'Đường nhà',
    input_f_s_b_o: 'FSBO',
    input_distance_to_facade: 'Khoảng cách đến mặt tiền',
    input_adjacent_facade_num: 'Số mặt liền kề',
    input_adjacent_road: 'Đường liền kề',
    input_alley_min_width: 'Hẻm nhỏ tối thiểu',
    input_adjacent_alley_min_width: 'Hẻm nhỏ liền kề',
    input_d_t_s_x_d: 'DTSXD',
    input_price_c_t_x_d: 'Giá CTXD',
    input_value_c_t_x_d: 'Giá trị CTXD',
    input_legal_doc: 'Giấy tờ pháp lý',
    input_shape: 'Hình dánh',
    input_structure: 'Cấu trúc',
    input_c_l_c_l: 'CLCL',
    input_body: 'Nội dung',
    signin_title: 'Đăng nhập',
    signin_button: 'Đăng nhập',
    signup_title: "Đăng ký",
    signup_button: 'Đăng ký',
    password_change_title: 'Đổi mật khẩu',
    password_change_button: 'Đổi mật khẩu',
    password_change_button_action: 'Tiếp tục',
    verification_button: "Xác thực",
    password_change_back: 'Quay lại trang đăng nhập',
    text_active_location: 'Thành phố nhiều bài đăng nhất',
    text_view_location: 'Thành phố có lượt xem nhiều nhất',
    text_top_sell: 'Bán nhiều nhất',
    text_no_data: 'Không có thông tin',
    text_location_data: 'Thông tin về thành phố',
    text_account_info: 'Thông tin tài khoản',
    text_code_sent: 'Mã xác nhận đã được gửi về email của bạn',
    text_code_resent: 'Gửi lại mã xác thực',
    text_info_none: 'Không có thông tin',
    text_choose_option: 'Hãy chọn mục',
    text_customer_request_status_0: "Mới",
    text_customer_request_status_1: "Đang giải quyết",
    text_customer_request_status_2: "Hoàn thành",
    text_customer_request_type_0: "Cần hỗ trợ",
    text_customer_request_type_1: "Phản ánh",
    text_customer_request_type_2: "Xem nhà",
    text_dashboard_request: "Cần trợ giúp",
    text_date_year_ago: 'năm trước',
    text_date_month_ago: 'tháng trước',
    text_date_day_ago: 'ngày trước',
    text_dashboard_customer_week: 'khách hàng mới trong tuần',
    text_dashboard_customer_month: 'khách hàng mới trong tháng',
    text_dashboard_request_day: 'yêu cầu trong ngày',
    text_dashboard_request_week: 'yêu cầu trong tuần',
    text_dashboard_post_week: 'tuần này',
    text_dashboard_post_month: 'tháng này',
    text_dashboard_not_verify: 'bđs chưa xác thực',
    text_dashboard_not_verify_weeks: 'quá 2 tuần',
    text_entries_none: 'Không có mục nào phù hợp với tìm kiếm',
    text_customer_posts: 'Các bài đăng',
    tab_important: 'Quan trọng',
    tab_optional: 'Thông tin phụ',
    tab_data: 'Thông tin',
    tab_data_2: 'Thông tin 2',
    tab_photo: 'Hình ảnh',
    tab_r1: 'TT chính',
    tab_r2: 'TT phòng',
    tab_r3: 'Địa chỉ',
    tab_r4: 'TT khác 1',
    tab_r5: 'TT khác 2',
    tab_r6: 'TT khác 3',
    dashboard_card1: 'Khách hàng',
    dashboard_card1_line1: 'khách hàng mới trong tuần',
    dashboard_card1_line2: 'khách hàng mới trong tháng',
    dashboard_card2: 'Yêu cầu',
    dashboard_card2_line1: 'yêu cầu trong tuần',
    dashboard_card2_line2: 'yêu cầu trong tháng',
    dashboard_card3: 'Bất động sản mới',
    dashboard_card3_line1: 'trong tuần',
    dashboard_card3_line2: 'trong tháng',
    dashboard_card4: 'Bđs chưa xác thức',
    dashboard_card4_line1: 'bất động sản',
    dashboard_card4_line2: 'quá 2 tuần',
    dashboard_estate_not_verify: 'Bất động sản chưa được xác thực',
    modal_create: 'Tạo',
    modal_update: 'Cập nhật',
    modal_delete: 'Xóa',
    left_navigation_title: 'HomeMag',
    nav_dashboard: 'Dashboard',
    nav_address_map: 'Địa chỉ tọa độ',
    nav_master_layout: 'Mặt bằng tầng',
    nav_construction_contractor: 'Nhà thầu xây dựng',
    nav_design_unit: 'Đơn vị thiết kế',
    nav_investor: 'Nhà đầu tư',
    nav_region_link: 'Kết nối vùng',
    nav_utilities: 'Tiện ích',
    nav_customer: 'Khách hàng',
    nav_employee: 'Người dùng',
    nav_project: 'Dự án',
    nav_group_location: 'Vị trí',
    nav_province: 'Thành phố',
    nav_district: 'Quận',
    nav_ward: 'Phường',
    nav_street: 'Tên đường',
    nav_real_estate: 'Thông tin BDS',
    nav_subscription: 'Subscription',
    nav_settings: 'Cài đặt',
    nav_blog: 'Blog',
    nav_customer_request: "Yêu cầu",
    search_contain: 'Không dấu',
    search_exact: 'Có dấu',
    header_address: 'Địa chỉ',
    header_latitude: 'Kinh độ',
    header_longtitude: 'Vĩ độ',
    table_page: 'Trang',
    table_page_of: 'trên',
    table_record: 'Mục',
    table_record_to: 'tới',
    table_record_of: 'trên',
    header_name: 'Tên',
    header_project: 'Dự án',
    header_acreage: 'Kích thước (m<sup>2</sup>)',
    header_create_date: 'Ngày tạo',
    header_update_date: 'Ngày cập nhật',
    header_phone: 'Số điện thoại chính',
    header_phone2: 'Số điện thoại phụ',
    header_email: 'email',
    header_contact_name: 'Tên liên lạc',
    header_num_real_estates: 'Số bài đăng',
    header_mobile: 'Số điện thoại',
    header_note: 'Ghi chú',
    header_create_by: 'Tạo bởi',
    header_update_by: 'Cập nhật bởi',
    header_last_name: 'Họ',
    header_first_name: 'Tên',
    header_title: 'Tiêu đề',
    header_birthday: 'Sinh nhật',
    header_city: 'Thành phố',
    header_region: 'Khu vực',
    header_postal_code: 'Mã bưu điện',
    header_country: 'Nước',
    header_home_phone: 'Số điện thoại',
    header_photo: 'Hình ảnh',
    header_activated: 'Trạng thái kích hoạt',
    header_user_level: 'Cấp độ',
    header_reports_to: 'Báo cáo cho',
    header_province: 'Thành phố',
    header_district: 'Quận',
    header_ward: 'Phường',
    header_street: 'Tên đường',
    header_code: 'Mã',
    header_prefix: 'Loại',
    header_customer: 'Khách hàng',
    header_user: 'Khách hàng',
    header_type: 'Loại',
    header_status: 'Trạng thái',
    header_body: 'Nội dung',
    lang_vietnamese: 'Tiếng Việt',
    lang_english: 'Tiếng Anh',
    err_auth_incorrect: "Nhập sai tên hoặc mật khẩu",
    err_auth_empty: "Tên đăng nhập và mật khẩu không được để trống",
    err_auth_code_incorrect: "Mã xác nhận không chính xác",
    err_auth_verify: "Bạn chưa xác thực tài khoản",
    err: "Có vấn đề trong quá trình thực hiện, vui lòng thử lại sau.",
    err_email: "Không tìm thấy email",
    err_field: "Vui lòng điền đầy đủ thông tin",
    err_path: "Đường dẫn không hợp lệ",
    err_image_none: "Bạn chưa chọn hình ảnh nào",
    api_success: 'thành công',
    api_verify_success: "Xác thực email thành công",
    api_verify_err: "Mã xác nhận không chính xác",
    api_create_success: "Khởi tạo thành công",
    api_update_success: "Cập nhật thành công",
    api_delete_success: "Xóa thành công",
    api_getall_fail: "Lấy dữ liệu thất bại",
    api_create_fail: "Khởi tạo thất bại",
    api_update_fail: "Cập nhật thất bại",
    api_delete_fail: "Xóa thất bại",
    err_push_exist: "Bạn đã đăng ký push up từ trước rồi.",
    warn_empty: ' không được để trống.',
    warn_format: 'sai định dạng.',
    warn_number_only: "chỉ được nhập số",
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vn);


/***/ }),

/***/ "./src/model/APIReponseModel.ts":
/*!**************************************!*\
  !*** ./src/model/APIReponseModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ APIReponseModel)
/* harmony export */ });
class APIReponseModel {
}


/***/ }),

/***/ "./src/model/EmployeeModel.ts":
/*!************************************!*\
  !*** ./src/model/EmployeeModel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmployeeModel),
/* harmony export */   employeeTitleCourtesy: () => (/* binding */ employeeTitleCourtesy),
/* harmony export */   employeeUserLevel: () => (/* binding */ employeeUserLevel)
/* harmony export */ });
const employeeTitleCourtesy = {
    'Mr.': 'Mr.',
    'Mrs.': 'Mrs.',
    'Ms.': 'Ms'
};
const employeeUserLevel = {
    '-2': 'Banned',
    '-1': 'Unverified',
    '0': 'User',
    '1': 'Representative',
    '2': 'Admin',
};
class EmployeeModel {
    constructor() {
        this.id = 0;
        this.lastName = "";
        this.firstName = "";
        this.title = "";
        this.titleOfCourtesy = "";
        this.birthDate = null;
        this.hireDate = null;
        this.address = "";
        this.city = "";
        this.region = "";
        this.postalCode = "";
        this.country = "";
        this.homePhone = "";
        this.extension = "";
        this.photo = "";
        this.notes = "";
        this.username = "";
        this.password = "";
        this.email = "";
        this.activated = null;
        this.profile = "";
        this.userLevel = null;
        this.reportsTo = null;
        this.customerCreated = [];
        this.customerUpdated = [];
        this.realEstateCreated = [];
        this.realEstateUpdated = [];
        this.numRealEstates = null;
        this.viewRealEstates = null;
        this.numRealEstatesToday = null;
        // uniqueCustomer: Array<Object> = []
    }
}


/***/ }),

/***/ "./src/model/PageModel.ts":
/*!********************************!*\
  !*** ./src/model/PageModel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageModel)
/* harmony export */ });
class PageModel {
    constructor() {
        this.page = 1;
        this.limit = 10;
        this.totalEntries = 0;
        this.pageEntries = 0;
        this.maxPages = 0;
    }
}


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utilities/APIRequestBuilder.ts":
/*!********************************************!*\
  !*** ./src/utilities/APIRequestBuilder.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ APIRequestBuilder)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _model_APIReponseModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/APIReponseModel */ "./src/model/APIReponseModel.ts");
/* harmony import */ var _model_EmployeeModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/EmployeeModel */ "./src/model/EmployeeModel.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _SecureAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Import navigation utility and language support

// Import API endpoint constants and paths

// Import web routing constants

// Import language localization

// Import data models for API responses and entities


// Import logging utility



/**
 * Fluent API builder for constructing and executing HTTP requests.
 * Supports authentication, file uploads, pagination, and nested resources.
 */
class APIRequestBuilder {
    constructor() {
        this.searchBody = null;
    }
    /**
     * Sets the API endpoint path with pagination parameters.
     * @param path - The API endpoint path
     * @param pageData - Pagination configuration
     * @returns Builder instance for method chaining
     */
    setPath(path, pageData) {
        this.fetchPath = path;
        this.paramGet = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_PAGE + pageData.page;
        return this;
    }
    /**
     * Configures parent path for nested resource endpoints.
     * @param path - Parent resource path
     * @param id - Parent resource ID
     * @returns Builder instance for method chaining
     */
    setParentPath(path, id) {
        if (path == null || id == null) {
            return this;
        }
        this.fetchPath = `${path}/${id}/${this.fetchPath}`;
        return this;
    }
    /**
     * Adds URL query parameters to the request.
     * @param paramExtra - URLSearchParams object
     * @returns Builder instance for method chaining
     */
    setParams(paramExtra) {
        this.searchParam = paramExtra;
        return this;
    }
    /**
     * Converts object properties to URL query parameters.
     * @param extraData - Object containing key-value pairs for parameters
     * @returns Builder instance for method chaining
     */
    setParamsFromObject(extraData) {
        if (extraData == null) {
            return this;
        }
        if (this.searchParam == null) {
            this.searchParam = new URLSearchParams();
        }
        var vKeys = Object.keys(extraData);
        vKeys.forEach(vKey => {
            this.searchParam.set(vKey, extraData[vKey]);
        });
        return this;
    }
    /**
     * Sets request body for POST-based search operations.
     * @param searchBody - Search criteria object
     * @returns Builder instance for method chaining
     */
    setSearchBody(searchBody) {
        if (searchBody == null) {
            return this;
        }
        this.searchBody = searchBody;
        return this;
    }
    /**
     * Fetches all records with configured parameters and pagination.
     * @returns Promise resolving to API response data
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Get all updated");
                var vHeader = yield getHeaders();
                // Build complete URL with parameters
                var vUrl = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + this.fetchPath + this.paramGet +
                    (this.searchParam ? '?' + this.searchParam : '');
                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: vUrl,
                        type: this.searchBody ? "POST" : "GET",
                        data: this.searchBody ? JSON.stringify(this.searchBody) : null,
                        headers: vHeader,
                        xhrFields: {
                            withCredentials: true
                        },
                        success: (result) => {
                            resolve(result);
                        },
                        error: (err) => {
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                                .api_getall_fail);
                            _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log('----------- error: ' + JSON.stringify(err));
                            (0,___WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_DEFAULT + _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_ERROR);
                            resolve(err);
                        }
                    });
                });
            }
            catch (e) {
                // Handle server unavailability
                if (e.status == 0) {
                    _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Server down");
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err);
                }
                return null;
            }
        });
    }
    /**
     * Fetches dashboard data for the currently authenticated user.
     * @returns Promise resolving to dashboard data
     */
    getDashboard() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var vUserInfo = _SecureAuth__WEBPACK_IMPORTED_MODULE_7__["default"].getUserInfo();
                _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("--- token: " + vUserInfo);
                // Build dashboard path with user ID
                let vPath = this.fetchPath + "/" + vUserInfo.id + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DASHBOARD;
                var vHeader = yield getHeaders();
                return yield new Promise((resolve, reject) => {
                    let vUrl = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + vPath;
                    $.ajax({
                        url: vUrl,
                        type: "GET",
                        headers: vHeader,
                        xhrFields: {
                            withCredentials: true
                        },
                        success: (result) => {
                            _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log('success', "Get dashboard " +
                                vPath.split("_").join(" ") + " success");
                            resolve(result);
                        },
                        error: (err) => {
                            _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log('error', "Get dashboard " +
                                vPath.split("_").join(" ") + " fail: " +
                                err.responseJSON);
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err);
                            reject(err);
                        }
                    });
                });
            }
            catch (e) {
                _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err);
                _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("--- error fetching dashboard");
                return null;
            }
        });
    }
    /**
     * Fetches a single record by its ID.
     * @param paramId - The record ID
     * @returns Promise resolving to the record data
     */
    getById(paramId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var vHeader = yield getHeaders();
                return yield new Promise((resolve, reject) => {
                    var vUrl = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + this.fetchPath + '/' + paramId;
                    $.ajax({
                        url: vUrl,
                        type: "GET",
                        headers: vHeader,
                        xhrFields: {
                            withCredentials: true
                        },
                        success: (result) => {
                            _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Get by id" + this.fetchPath.split("_")
                                .join(" ") + " success:", result);
                            resolve(result);
                        },
                        error: (err) => {
                            _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log('error', "By id " + this.fetchPath.split("_")
                                .join(" ") + " fail: " + err.responseJSON);
                            _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Error:", err);
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err);
                            reject(err);
                        }
                    });
                });
            }
            catch (e) {
                return null;
            }
        });
    }
    /**
     * Creates a new record with optional file upload support.
     * @param Object - The data object to create
     * @param dataToHeader - Fields to send as URL parameters
     * @returns Promise resolving to created record
     */
    create(Object, dataToHeader) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield createApi(this.fetchPath, Object, dataToHeader);
        });
    }
    /**
     * Updates an existing record.
     * @param data - Updated data object
     * @param id - Record ID to update
     * @param dataToHeader - Fields to send as URL parameters
     * @returns Promise resolving to updated record
     */
    update(data, id, dataToHeader) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield updateApi(this.fetchPath, id, data, dataToHeader);
        });
    }
    /**
     * Updates a single field or simple record without complex processing.
     * @param data - Updated data object
     * @param id - Record ID to update
     * @returns Promise resolving to updated record
     */
    updateSingle(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield updateSingleApi(this.fetchPath, id, data);
        });
    }
    /**
     * Deletes a record by ID.
     * @param id - Record ID to delete
     * @returns Promise resolving when deletion completes
     */
    deleteData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield deleteApi(this.fetchPath, id);
        });
    }
    /**
     * Authenticates user with credentials.
     * @param data - Login credentials object
     * @returns Promise resolving to authentication success status
     */
    signIn(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var vHeader = yield getHeaders();
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_SIGN_IN,
                    type: 'POST',
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(data),
                    headers: vHeader,
                    xhrFields: {
                        withCredentials: true
                    },
                    success: (result) => __awaiter(this, void 0, void 0, function* () {
                        resolve(true);
                    }),
                    error: (err) => {
                        var vErrObject = err.responseJSON;
                        // Handle various authentication errors
                        if (vErrObject == null ||
                            vErrObject.result == "Bad credentials") {
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_auth_incorrect);
                        }
                        if (vErrObject.result == "User not found") {
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_auth_incorrect);
                        }
                        if (vErrObject.data == true) {
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_auth_verify);
                        }
                        resolve(false);
                    }
                });
            });
        });
    }
    /**
     * Registers a new user account.
     * @param data - Registration data object
     * @returns Promise resolving to registration success status
     */
    signUp(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_SIGN_UP,
                    type: 'POST',
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(data),
                    xhrFields: {
                        withCredentials: true
                    },
                    success: (result) => {
                        var vMessage = _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].signup_title + " " +
                            _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].api_success;
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('success', vMessage);
                        resolve(true);
                    },
                    error: (err) => {
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err);
                        _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("Sign Up Failure: " + err.responseJSON);
                        reject(isApiResponseModel(err));
                    }
                });
            });
        });
    }
    /**
     * Changes the current user's password.
     * @param paramData - Object containing old and new passwords
     * @returns Promise resolving when password change completes
     */
    changePassword(paramData) {
        return __awaiter(this, void 0, void 0, function* () {
            var vHeader = yield getHeaders();
            return yield new Promise((resolve, reject) => {
                $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_AUTH + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_CHANGE_PASSWORD,
                    type: 'PUT',
                    contentType: "application/json;charset=UTF-8",
                    headers: vHeader,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: JSON.stringify(paramData),
                    success: (result) => {
                        var vMessage = _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                            .password_change_title + " " + _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                            .api_success;
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('success', vMessage);
                        resolve(result);
                    },
                    error: (err) => {
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err);
                        reject(isApiResponseModel(err));
                    }
                });
            });
        });
    }
    /**
     * Sends a verification code to the specified email address.
     * @param email - Email address to receive verification code
     * @returns Promise resolving to API response
     */
    sendCodeToEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var vObject = new _model_EmployeeModel__WEBPACK_IMPORTED_MODULE_5__["default"]();
            vObject.email = email;
            var vHeader = yield getHeaders();
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_webConstants__WEBPACK_IMPORTED_MODULE_2__.PATH_AUTH + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_CHANGE_PASSWORD_SEND_EMAIL,
                    type: 'POST',
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(vObject),
                    headers: vHeader,
                    xhrFields: {
                        withCredentials: true
                    },
                    success: (result) => {
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('success', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].api_success);
                        resolve(result);
                    },
                    error: (err) => {
                        // Handle email not found error
                        if (err != null &&
                            err.responseJSON.result == 'Email not found') {
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].err_email);
                        }
                        resolve(null);
                    }
                });
            });
        });
    }
    /**
     * Verifies a code with email and action type.
     * @param code - Verification code
     * @param email - Email address
     * @param action - Action type identifier
     * @returns Promise resolving to verification result
     */
    verification(code, email, action) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE_VERIFICATION + "/" +
                        email + '/' + code + "?action=" + action,
                    type: 'GET',
                    contentType: "application/json;charset=UTF-8",
                    xhrFields: {
                        withCredentials: true
                    },
                    success: (result) => {
                        _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("verification result:", result);
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("success", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].api_verify_success);
                        resolve(result);
                    },
                    error: (err) => {
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()].api_verify_err);
                        reject(err);
                    }
                });
            });
        });
    }
    /**
     * Verifies a code by employee ID instead of email.
     * @param code - Verification code
     * @param employeeId - Employee ID
     * @param action - Action type identifier
     * @returns Promise resolving to verification result
     */
    verificationById(code, employeeId, action) {
        return __awaiter(this, void 0, void 0, function* () {
            var vHeader = yield getHeaders(false);
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL}${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE}/${employeeId}` +
                        `/${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_EMPLOYEE_VERIFICATION}/${code}?action=${action}`,
                    type: 'GET',
                    headers: vHeader,
                    contentType: "application/json;charset=UTF-8",
                    xhrFields: {
                        withCredentials: true
                    },
                    success: (result) => {
                        _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("verification result:", result);
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("success", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                            .api_verify_success);
                        resolve(result);
                    },
                    error: (err) => {
                        _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                            .api_verify_err);
                        reject(err);
                    }
                });
            });
        });
    }
}
/**
 * Creates a new record with support for file uploads and URL parameters.
 * @param paramPath - API endpoint path
 * @param paramData - Data object to create
 * @param dataToHeader - Fields to send as URL parameters
 * @returns Promise resolving to created record
 */
function createApi(paramPath, paramData, dataToHeader) {
    return __awaiter(this, void 0, void 0, function* () {
        var vUrlSearchParams = new URLSearchParams;
        const formData = new FormData();
        var vHasFile = false;
        // Move specified fields to URL parameters
        dataToHeader === null || dataToHeader === void 0 ? void 0 : dataToHeader.forEach(name => {
            var vValue = paramData[name];
            vUrlSearchParams.set(name + "Id", vValue);
            delete paramData[name];
        });
        // Check for file uploads and prepare FormData
        Object.entries(paramData).forEach(([key, value]) => {
            if (value instanceof File || key == 'photo') {
                var vPhotoFile = value;
                delete paramData[key];
                formData.append("data", new Blob([JSON.stringify(paramData)], { type: "application/json" }));
                vHasFile = true;
                if (vPhotoFile != null) {
                    formData.append("photo", vPhotoFile);
                }
            }
        });
        var vFormDataLength = Array.from(formData.keys()).length;
        let headers = yield getHeaders(vHasFile);
        _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("----- API header: " + JSON.stringify(headers));
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL}${paramPath}${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_CREATE}${vUrlSearchParams ?
                    '?' + vUrlSearchParams : ''} `,
                type: "POST",
                data: vFormDataLength > 0 ? formData : JSON.stringify(paramData),
                headers: headers,
                processData: false,
                contentType: false,
                xhrFields: {
                    withCredentials: true
                },
                success: (result) => {
                    _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log('success', "Create " + paramPath.split("_")
                        .join(" ") + " success");
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("success", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                        .api_create_success);
                    resolve(result);
                },
                error: (err) => {
                    _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log('error', "Create " + paramPath.split("_")
                        .join(" ") + " fail: " + err.responseJSON);
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                        .api_create_fail);
                    reject(err);
                }
            });
        });
    });
}
/**
 * Updates an existing record with support for file uploads and URL parameters.
 * @param paramPath - API endpoint path
 * @param paramId - Record ID to update
 * @param paramData - Updated data object
 * @param dataToHeader - Fields to send as URL parameters
 * @returns Promise resolving to updated record
 */
function updateApi(paramPath, paramId, paramData, dataToHeader) {
    return __awaiter(this, void 0, void 0, function* () {
        var vUrlSearchParams = new URLSearchParams;
        const formData = new FormData();
        var vHasFile = false;
        _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("--- update data: ", JSON.stringify(paramData));
        // Move specified fields to URL parameters
        dataToHeader === null || dataToHeader === void 0 ? void 0 : dataToHeader.forEach((name) => {
            vUrlSearchParams.set(name, paramData[name]);
            if (!(paramData[name] instanceof File)) {
                vUrlSearchParams.set(name + "Id", paramData[name]);
                delete (paramData[name]);
            }
        });
        // Check for file uploads and prepare FormData
        Object.entries(paramData).forEach(([key, value]) => {
            if (value instanceof File || key == 'photo') {
                var vPhotoFile = value;
                delete paramData[key];
                formData.append("photo", value);
                formData.append("data", new Blob([JSON.stringify(paramData)], { type: "application/json" }));
                vHasFile = true;
                if (vPhotoFile != null) {
                    formData.append("photo", vPhotoFile);
                }
            }
        });
        var vFormDataLength = Array.from(formData.keys()).length;
        let headers = yield getHeaders(vHasFile);
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL}${paramPath}${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_UPDATE}${paramId}` +
                    `${vUrlSearchParams ? '?' + vUrlSearchParams : ''}`,
                type: "PUT",
                data: vFormDataLength > 0 ? formData : JSON.stringify(paramData),
                headers: headers,
                processData: false,
                contentType: false,
                xhrFields: {
                    withCredentials: true
                },
                success: (result) => {
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("success", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                        .api_update_success);
                    resolve(result);
                },
                error: (err) => {
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                        .api_update_fail);
                    reject(err);
                }
            });
        });
    });
}
/**
 * Updates a single field or simple record without complex processing.
 * @param paramPath - API endpoint path
 * @param paramId - Record ID to update
 * @param paramData - Updated data object
 * @returns Promise resolving to updated record
 */
function updateSingleApi(paramPath, paramId, paramData) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new FormData();
        var vHasFile = false;
        // Check for file uploads and prepare FormData
        Object.entries(paramData).forEach(([key, value]) => {
            _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("---- update value: ", key, "- ", value);
            if (value instanceof File || key == 'photo') {
                var vPhotoFile = value;
                delete paramData[key];
                formData.append("photo", value);
                formData.append("data", new Blob([JSON.stringify(paramData)], { type: "application/json" }));
                vHasFile = true;
                if (vPhotoFile != null) {
                    formData.append("photo", vPhotoFile);
                }
            }
        });
        var vFormDataLength = Array.from(formData.keys()).length;
        let headers = yield getHeaders(vHasFile);
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL}${paramPath}${_constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_UPDATE}${paramId}/single`,
                type: "PUT",
                data: vFormDataLength > 0 ? formData : JSON.stringify(paramData),
                headers: headers,
                processData: false,
                contentType: false,
                xhrFields: {
                    withCredentials: true
                },
                success: (result) => {
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("success", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                        .api_update_success);
                    resolve(result);
                },
                error: (err) => {
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                        .api_update_fail);
                    reject(err);
                }
            });
        });
    });
}
/**
 * Deletes a record by ID.
 * @param paramPath - API endpoint path
 * @param paramId - Record ID to delete
 * @returns Promise resolving when deletion completes
 */
function deleteApi(paramPath, paramId) {
    return __awaiter(this, void 0, void 0, function* () {
        var vHeader = yield getHeaders();
        return new Promise((resolve, reject) => {
            $.ajax({
                url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + paramPath + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_API_DELETE + paramId,
                type: "DELETE",
                xhrFields: {
                    withCredentials: true
                },
                headers: vHeader,
                success: (result) => {
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("success", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                        .api_delete_success);
                    resolve(result);
                },
                error: (err) => {
                    _MyUtilities__WEBPACK_IMPORTED_MODULE_8__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_0__.getLanguage)()]
                        .api_delete_fail);
                    reject(err);
                }
            });
        });
    });
}
/**
 * Generates HTTP headers with authentication token and content type.
 * @param isFormData - Whether request contains FormData
 * @returns Object containing request headers
 */
function getHeaders() {
    return __awaiter(this, arguments, void 0, function* (isFormData = false) {
        var vCsrfToken = yield _SecureAuth__WEBPACK_IMPORTED_MODULE_7__["default"].getCsrfToken();
        let headers = {};
        // Add CSRF token for authentication
        if (vCsrfToken != null) {
            headers['X-XSRF-TOKEN'] = vCsrfToken;
        }
        // Let browser set content-type for FormData to include boundary
        if (!isFormData) {
            headers["Content-Type"] = "application/json;charset=UTF-8";
        }
        _MyLogger__WEBPACK_IMPORTED_MODULE_6__["default"].log("--- request header: " + JSON.stringify(headers));
        return headers;
    });
}
/**
 * Validates and normalizes API response structure.
 * @param paramObject - Raw API response object
 * @returns Normalized APIReponseModel
 */
function isApiResponseModel(paramObject) {
    var vResponseModel = new _model_APIReponseModel__WEBPACK_IMPORTED_MODULE_4__["default"]();
    // Check for required response fields
    if (vResponseModel.data == undefined ||
        vResponseModel.entries == undefined ||
        vResponseModel.result == undefined ||
        vResponseModel.status == undefined ||
        vResponseModel.statusCode == undefined) {
        // Return error response if structure invalid
        vResponseModel.data = null;
        vResponseModel.entries = 0;
        vResponseModel.result = null;
        vResponseModel.status = "ERROR";
        vResponseModel.statusCode = 503;
        return vResponseModel;
    }
    return paramObject;
}


/***/ }),

/***/ "./src/utilities/ApiHandler.ts":
/*!*************************************!*\
  !*** ./src/utilities/ApiHandler.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllData: () => (/* binding */ getAllData),
/* harmony export */   loadDataToTable: () => (/* binding */ loadDataToTable),
/* harmony export */   requestChangePassword: () => (/* binding */ requestChangePassword),
/* harmony export */   requestCreateData: () => (/* binding */ requestCreateData),
/* harmony export */   requestDeleteData: () => (/* binding */ requestDeleteData),
/* harmony export */   requestSendEmailVerification: () => (/* binding */ requestSendEmailVerification),
/* harmony export */   requestSignIn: () => (/* binding */ requestSignIn),
/* harmony export */   requestSignUp: () => (/* binding */ requestSignUp),
/* harmony export */   requestUpdateData: () => (/* binding */ requestUpdateData),
/* harmony export */   requestUpdateDataSingle: () => (/* binding */ requestUpdateDataSingle),
/* harmony export */   requestVerifyCode: () => (/* binding */ requestVerifyCode),
/* harmony export */   requestVerifyCodeById: () => (/* binding */ requestVerifyCodeById)
/* harmony export */ });
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _model_PageModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/PageModel */ "./src/model/PageModel.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");
/* harmony import */ var _components_table_ButtonTableAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table/ButtonTableAction */ "./src/components/table/ButtonTableAction.ts");
/* harmony import */ var _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./APIRequestBuilder */ "./src/utilities/APIRequestBuilder.ts");
/* harmony import */ var _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/table/TableRowComponent */ "./src/components/table/TableRowComponent.ts");
/* harmony import */ var _ModalUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalUtils */ "./src/utilities/ModalUtils.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _SecureAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












/**
 * Centralized API request handlers for CRUD operations and data management
 */
/**
 * Fetch all data with pagination and filtering
 */
function getAllData(paramPath, paramPageData, extraParams, viewPath, noupdate, parentPath, parentId, searchBody) {
    return __awaiter(this, void 0, void 0, function* () {
        // Build query parameters
        var vParams = new URLSearchParams();
        vParams.set('limit', paramPageData.limit.toString());
        if (extraParams != null) {
            var vKeys = Object.keys(extraParams);
            vKeys === null || vKeys === void 0 ? void 0 : vKeys.forEach(key => {
                vParams.set(key, extraParams[key]);
            });
        }
        // Execute API request
        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setPath(paramPath, paramPageData)
            .setParentPath(parentPath, parentId)
            .setParams(vParams)
            .setSearchBody(searchBody);
        var vResult = yield vApi.getAll();
        if (vResult == null || vResult.statusCode != 200) {
            return;
        }
        // Update pagination and table
        paramPageData.totalEntries = vResult.entries;
        if (!noupdate) {
            loadDataToTable(vResult.data, viewPath);
        }
        return vResult;
    });
}
/**
 * Create new record with nested resource support
 */
function requestCreateData(paramData, paramPath, paramPageData, paramParentPath, paramDeleteFields, paramDatatoHeader, paramParentId) {
    return __awaiter(this, void 0, void 0, function* () {
        var vParentPathId = paramParentId;
        // Extract parent ID from data if needed
        if (paramParentPath != null) {
            var vKeys = Object.keys(paramData);
            vKeys.forEach((key) => {
                var vName = _MyUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].convertName(key, 'fieldName');
                if (paramParentPath.includes(vName)) {
                    vParentPathId = paramData[key];
                    delete paramData[key];
                }
            });
        }
        // Execute create request
        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setPath(paramPath, paramPageData)
            .setParamsFromObject(paramDeleteFields)
            .setParentPath(paramParentPath, vParentPathId);
        var vResult = yield vApi.create(paramData, paramDatatoHeader);
        (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_6__.clearModal)('CREATE');
        return vResult;
    });
}
/**
 * Update existing record
 */
function requestUpdateData(paramData, paramPath, paramId, paramPageData, paramParentPath, paramDeleteFields, paramParentId, paramDataToHeader) {
    return __awaiter(this, void 0, void 0, function* () {
        var vParentPathId = paramParentId;
        // Handle parent-child relationships
        if (paramParentPath != null) {
            var vKeys = Object.keys(paramData);
            vKeys.forEach((key) => {
                var vName = _MyUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].convertName(key, 'tableId');
                // var vName = getIdFromName(key as string);
                if (paramParentPath.includes(vName)) {
                    vParentPathId = paramData[key];
                    delete paramData[key];
                }
            });
        }
        // Execute update request
        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setPath(paramPath, paramPageData)
            .setParentPath(paramParentPath, vParentPathId)
            .setParamsFromObject(paramDeleteFields);
        var vResult = yield vApi.update(paramData, paramId, paramDataToHeader);
        (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_6__.clearModal)('UPDATE');
        return vResult;
    });
}
/**
 * Simple single record update
 */
function requestUpdateDataSingle(paramData, paramPath, paramId, paramParentPath, paramParentId) {
    return __awaiter(this, void 0, void 0, function* () {
        var vParentPathId = paramParentId;
        if (paramParentPath != null) {
            var vKeys = Object.keys(paramData);
            vKeys.forEach((key) => {
                var vName = _MyUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].convertName(key, 'tableId');
                if (paramParentPath.includes(vName)) {
                    vParentPathId = paramData[key];
                    delete paramData[key];
                }
            });
        }
        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setPath(paramPath, new _model_PageModel__WEBPACK_IMPORTED_MODULE_1__["default"]())
            .setParentPath(paramParentPath, vParentPathId);
        var vResult = yield vApi.updateSingle(paramData, paramId);
        (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_6__.clearModal)('UPDATE');
        return vResult;
    });
}
/**
 * Delete record with validation
 */
function requestDeleteData(paramPath, paramPageData) {
    return __awaiter(this, void 0, void 0, function* () {
        // Get ID from delete modal
        var vId = $("#modal-delete").find('input').val();
        if (vId == null || isNaN(Number(vId))) {
            return;
        }
        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]().setPath(paramPath, paramPageData);
        var vResult = yield vApi.deleteData(Number(vId));
        if (vResult == null) {
            return;
        }
        // Clean up modal
        $("#modal-delete").find('input').val('');
        $("#modal-delete").modal("hide");
    });
}
/**
 * User authentication
 */
function requestSignIn(paramPath, paramObject) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]().setPath(paramPath, new _model_PageModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
            var vResult = yield vApi.signIn(paramObject);
            _MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("API Handle - result:", vResult);
            return vResult;
        }
        catch (e) {
            _MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("--- Error sign in:", e);
            return null;
        }
    });
}
/**
 * User registration
 */
function requestSignUp(paramPath, paramObject) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]().setPath(paramPath, new _model_PageModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
            return yield vApi.signUp(paramObject);
        }
        catch (e) {
            _MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("--- Error sign up:", e.responseJSON);
            return null;
        }
    });
}
/**
 * Change password for authenticated user
 */
function requestChangePassword(paramObject) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
                .setPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_0__.PATH_AUTH, new _model_PageModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
            return yield vApi.changePassword(paramObject);
        }
        catch (e) {
            _MyLogger__WEBPACK_IMPORTED_MODULE_7__["default"].log("--- Error change password:", e.responseJSON);
            return null;
        }
    });
}
/**
 * Send verification code via email
 */
function requestSendEmailVerification(paramEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_0__.PATH_AUTH, new _model_PageModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
        return yield vApi.sendCodeToEmail(paramEmail);
    });
}
/**
 * Verify email confirmation code
 */
function requestVerifyCode(paramEmail, paramCode, paramAction) {
    return __awaiter(this, void 0, void 0, function* () {
        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_0__.PATH_AUTH, new _model_PageModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
        return yield vApi.verification(paramCode, paramEmail, paramAction);
    });
}
/**
 * Verify code by employee ID
 */
function requestVerifyCodeById(employeeId, paramCode, paramAction) {
    return __awaiter(this, void 0, void 0, function* () {
        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]()
            .setPath(_constants_webConstants__WEBPACK_IMPORTED_MODULE_0__.PATH_AUTH, new _model_PageModel__WEBPACK_IMPORTED_MODULE_1__["default"]());
        return yield vApi.verificationById(paramCode, employeeId, paramAction);
    });
}
/**
 * Load data into HTML table with formatted columns
 */
function loadDataToTable(paramData, viewPath) {
    $("#table-data tbody").empty();
    var vTableHeaders = $("#table-data thead th");
    // Handle empty dataset
    if (paramData.length == 0) {
        var vRow = new _components_table_TableRowComponent__WEBPACK_IMPORTED_MODULE_5__["default"]()
            .setColSpan(vTableHeaders.get().length)
            .setData(_language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_9__.getLanguage)()].text_entries_none);
        $("#table-data tbody").append(vRow.innerHTML);
        return;
    }
    // Create table rows for each data item
    paramData.forEach(item => {
        var vRow = $("<tr>").attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_11__.DATA_ATTR_ITEM, JSON.stringify(item));
        vTableHeaders.get().forEach(tableHeader => {
            var vFieldName = $(tableHeader).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_11__.DATA_NAME);
            // Action buttons column
            if (vFieldName == 'action' && _SecureAuth__WEBPACK_IMPORTED_MODULE_8__["default"].getUserInfo() != null) {
                var vButton = new _components_table_ButtonTableAction__WEBPACK_IMPORTED_MODULE_3__["default"]().setViewPath(viewPath);
                vRow.append($("<td>").html(vButton)
                    .css('white-space', 'nowrap').css('width', '1%'));
                // Photo/image column
            }
            else if ($(tableHeader).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_11__.DATA_TYPE) == 'photo') {
                var vPhoto = item[vFieldName] == null
                    ? null : item[vFieldName].slice(0, 4) == 'http'
                    ? item[vFieldName] : item[vFieldName];
                vRow.append($("<td>", {}).append($("<img>")
                    .attr('width', _constants_webConstants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_TAB_SIZE.width)
                    .attr('height', _constants_webConstants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_TAB_SIZE.height)
                    .attr('src', vPhoto)));
                // Object/relationship column
            }
            else if ($(tableHeader).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_11__.DATA_TYPE) == 'object' &&
                item[vFieldName] != null) {
                var vDataCorrect = item[vFieldName];
                var vResult = '';
                var vDataName = $(tableHeader).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_11__.DATA_TABLE_NAME);
                var vPath = $(tableHeader).data('path');
                // Handle arrays - show count with navigation button
                if (Array.isArray(vDataCorrect)) {
                    vResult = `<button ${vDataCorrect.length > 0 ? '' :
                        'disabled'} class='btn btn-outline-success'>
                        ${vDataCorrect.length} ${vFieldName}</button>`;
                    $(vResult).on('click', () => {
                        (0,___WEBPACK_IMPORTED_MODULE_9__["default"])(vPath);
                    });
                }
                // Handle objects with custom display fields
                else if (vDataName != null) {
                    if (vDataName.includes('|')) {
                        // Multiple fields - concatenate with space
                        vResult = vDataName.split('|').map(field => {
                            return vDataCorrect[field];
                        }).join(' ');
                    }
                    else {
                        vResult = vDataCorrect[vDataName];
                    }
                }
                else {
                    vResult = vDataCorrect['name'];
                }
                vRow.append($("<td>", {
                    html: vResult
                }));
            }
            // Regular data column
            else {
                var hasValue = item[vFieldName] != null &&
                    item[vFieldName].toString().length > 0;
                vRow.append($("<td>", {
                    html: hasValue ? item[vFieldName] :
                        _language__WEBPACK_IMPORTED_MODULE_10__["default"][(0,___WEBPACK_IMPORTED_MODULE_9__.getLanguage)()].text_info_none,
                }).addClass(hasValue ? 'text-dark' : 'text-secondary'));
            }
        });
        $("#table-data tbody").append(vRow);
    });
}


/***/ }),

/***/ "./src/utilities/EventHandler.ts":
/*!***************************************!*\
  !*** ./src/utilities/EventHandler.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrudHanlder: () => (/* binding */ CrudHanlder),
/* harmony export */   PaginationHandler: () => (/* binding */ PaginationHandler),
/* harmony export */   SearchHandler: () => (/* binding */ SearchHandler),
/* harmony export */   createSearchGroup: () => (/* binding */ createSearchGroup),
/* harmony export */   onButtonCreateClick: () => (/* binding */ onButtonCreateClick),
/* harmony export */   onButtonDeleteClick: () => (/* binding */ onButtonDeleteClick),
/* harmony export */   onButtonFilterClearClick: () => (/* binding */ onButtonFilterClearClick),
/* harmony export */   onButtonSignOutClick: () => (/* binding */ onButtonSignOutClick),
/* harmony export */   onButtonViewClick: () => (/* binding */ onButtonViewClick),
/* harmony export */   onButtonVisibilityClick: () => (/* binding */ onButtonVisibilityClick),
/* harmony export */   onImageFileSelected: () => (/* binding */ onImageFileSelected),
/* harmony export */   onModalDeleteCardClick: () => (/* binding */ onModalDeleteCardClick),
/* harmony export */   onModalSelectMultipleClick: () => (/* binding */ onModalSelectMultipleClick),
/* harmony export */   onModalSelectRelationClick: () => (/* binding */ onModalSelectRelationClick),
/* harmony export */   onSubscriptionButtonClick: () => (/* binding */ onSubscriptionButtonClick),
/* harmony export */   onTabModalClick: () => (/* binding */ onTabModalClick)
/* harmony export */ });
/* harmony import */ var _model_PageModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/PageModel */ "./src/model/PageModel.ts");
/* harmony import */ var _ApiHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiHandler */ "./src/utilities/ApiHandler.ts");
/* harmony import */ var _ModalUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalUtils */ "./src/utilities/ModalUtils.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");
/* harmony import */ var _TableUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableUtils */ "./src/utilities/TableUtils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./APIRequestBuilder */ "./src/utilities/APIRequestBuilder.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _components_card_CardSelection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/card/CardSelection */ "./src/components/card/CardSelection.ts");
/* harmony import */ var _SecureAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














/**
 * PaginationHandler - Manages all pagination-related functionality
 *
 * This class handles user interactions with pagination controls including
 * page navigation, page size changes, and data refresh operations.
 * Provides seamless navigation experience with real-time data updates.
 *
 * @template TModel - The model type for the paginated data
 */
class PaginationHandler {
    /**
     * Initialize PaginationHandler with page interaction context
     *
     * @param interactor - Page interaction instance containing pagination state and API configuration
     */
    constructor(interactor) {
        this.interactor = interactor;
    }
    /**
     * Handle page size limit selection change
     *
     * Updates the number of records displayed per page and refreshes the table.
     * Automatically recalculates pagination controls based on new limit.
     *
     * @param e - Change event from the limit selector dropdown
     */
    selectLimitChange(e) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log('---- limit change:', this, this.interactor);
            // Extract new limit value from dropdown selection
            this.interactor.pageData.limit = (_a = Number($(e.target).val())) !== null && _a !== void 0 ? _a : 10;
            // Fetch fresh data with the new page size
            var vResult = yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            // Update pagination metadata and rebuild controls
            this.interactor.setEntries(vResult.entries, vResult.data['length']);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
    /**
     * Navigate to the first page of results
     * Resets page counter to 1 and refreshes data display
     */
    buttonToBeginClick() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            this.interactor.pageData.page = 1;
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
    /**
     * Navigate to the previous page of results
     * Decrements page counter and refreshes data display
     */
    buttonToBackClick() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            this.interactor.pageData.page -= 1;
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
    /**
     * Navigate to the next page of results
     * Increments page counter and refreshes data display
     */
    buttonToFowardClick() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            this.interactor.pageData.page += 1;
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
    /**
     * Navigate to the last page of results
     * Sets page to maximum available and refreshes data display
     */
    buttonToEndClick() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            this.interactor.pageData.page = this.interactor.pageData.maxPages;
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
}
/**
 * SearchHandler - Manages all search and filtering functionality
 *
 * Provides comprehensive search capabilities including basic text search,
 * advanced multi-criteria filtering, and column-based sorting.
 * Supports real-time search with immediate result updates.
 *
 * @template TModel - The model type for the searchable data
 */
class SearchHandler {
    /**
     * Initialize SearchHandler with page interaction context
     *
     * @param interactor - Page interaction instance containing search state and API configuration
     */
    constructor(interactor) {
        this.interactor = interactor;
    }
    /**
     * Handle basic search button click event
     *
     * Performs text-based search using the selected search option and input text.
     * Automatically clears filters when search input is empty.
     */
    onButtonFindClick() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log($("#input-search"));
            _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log($("#select-search-option"));
            // Extract search criteria from UI elements
            var vSearchText = $("#input-search").val().toString().trim();
            var vSearchOption = $("#select-search-option").val();
            // Clear all filters if no search text provided
            if (vSearchText == null || vSearchText.length == 0) {
                onButtonFilterClearClick(this.interactor.path, this.interactor.pageData, this.interactor.viewPath);
                (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
                return;
            }
            // Apply search filter and refresh results
            this.interactor.searchParam = {
                [vSearchOption.toString()]: vSearchText !== null && vSearchText !== void 0 ? vSearchText : null
            };
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
    /**
     * Handle Enter key press in search input field
     *
     * Provides keyboard shortcut for search functionality.
     * Triggers the same search logic as clicking the search button.
     *
     * @param e - Keyboard event from the search input field
     */
    onSubmitInputSearch(e) {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            // Only process Enter key events
            if (e.key != 'Enter') {
                (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
                return;
            }
            // Extract search criteria
            var vSearchText = $("#input-search").val().toString().trim();
            var vSearchOption = $("#select-search-option").val();
            // Clear filters if search is empty
            if (vSearchText == null || vSearchText.length == 0) {
                onButtonFilterClearClick(this.interactor.path, this.interactor.pageData, this.interactor.viewPath);
                (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
                return;
            }
            // Execute search with current parameters
            this.interactor.searchParam = { [vSearchOption.toString()]: vSearchText };
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
    /**
     * Handle filter clear button click
     *
     * Resets all applied filters and shows complete unfiltered dataset.
     * Also clears the advanced search modal state.
     */
    onButtonFilterClick() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData);
            $("#button-filter-clear").addClass('d-none');
            (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.clearModal)('SEARCH_ADVANCE');
        });
    }
    /**
     * Handle advanced search confirmation
     *
     * Processes complex multi-field search criteria from the advanced search modal.
     * Supports both "contain" (partial match) and "exact" (precise match) search types.
     *
     * @param advanceSearch - Object to store processed search parameters
     */
    onButtonadvanceSearchConfirmClick(advanceSearch) {
        // Get all search group containers from the advanced search modal
        var vSearchBody = $("#div-search-advance-body").children('div').get();
        advanceSearch = {};
        // Process each search group (field-based search criteria)
        vSearchBody.forEach(card => {
            // Extract field name from container ID and convert to camelCase
            var vName = card.id.split('-').slice(3).map((item, index) => {
                if (index > 0) {
                    return item[0].toUpperCase() + item.slice(1);
                }
                return item;
            }).join('');
            // Process individual search inputs within each group
            $(card).children('div').get().forEach(item => {
                var vSearchOption = $(item).find('select').val();
                var vInputValue = $(item).find('input').val();
                // Only process non-empty search values
                if (vInputValue != null && vInputValue.length > 0) {
                    // Handle partial match searches
                    if (vSearchOption == 'contain') {
                        if (advanceSearch[`${vName}Contain`]) {
                            advanceSearch[`${vName}Contain`] += vInputValue + "|";
                        }
                        else {
                            advanceSearch[`${vName}Contain`] = vInputValue + "|";
                        }
                    }
                    // Handle exact match searches
                    if (vSearchOption == 'exact') {
                        advanceSearch[`${vName}Exact`] += vInputValue + "|";
                    }
                }
            });
        });
        // Clean up trailing pipe separators from concatenated search values
        Object.keys(advanceSearch).map(item => {
            if (advanceSearch[item].length > 0) {
                advanceSearch[item] = advanceSearch[item]
                    .slice(0, advanceSearch[item].length - 1);
            }
        });
        // Execute advanced search and update UI
        (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, advanceSearch, this.interactor.viewPath);
        // Hide modal and show clear filter button
        $("#modal-search-advance").modal('hide');
        $("#button-filter-clear").removeClass('d-none');
    }
    /**
     * Handle table column header click for data sorting
     *
     * Toggles sort order (ascending/descending) for the selected column.
     * Maintains sort state and provides visual feedback to users.
     *
     * @param event - Click event from the column header element
     */
    onButtonSortClick(event) {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            var vIsLatest = null;
            var vName = $(event.target).data('name');
            // Determine new sort direction based on current state
            if (this.interactor.searchParam != null &&
                this.interactor.searchParam['orderBy'] &&
                this.interactor.searchParam['orderBy'] != vName) {
                // Different column clicked - maintain current sort direction
                vIsLatest = this.interactor.searchParam['latest'];
            }
            else {
                // Same column clicked - toggle sort direction
                vIsLatest = this.interactor.searchParam != null &&
                    this.interactor.searchParam['latest'] != null ?
                    !this.interactor.searchParam['latest'] :
                    false;
            }
            // Build sort parameters object
            var vObject = {
                latest: vIsLatest,
                orderBy: vName
            };
            // Apply sorting and refresh data display
            this.interactor.addExtraParams(vObject);
            var vResult = yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            this.interactor.setEntries(vResult.entries, vResult.data['length']);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
}
/**
 * CrudHandler - Manages Create, Read, Update, Delete operations
 *
 * Orchestrates the complete CRUD workflow including data collection from forms,
 * validation against business rules, API communication, and user feedback.
 * Provides consistent error handling and success notifications.
 *
 * @template TModel - The model type for CRUD operations
 */
class CrudHanlder {
    /**
     * Initialize CrudHandler with required dependencies
     *
     * @param interactor - Page interaction context with API configuration
     * @param dataProcessor - Handles form data collection and validation
     * @param fieldBuilder - Contains field configuration and validation rules
     */
    constructor(interactor, dataProcessor, fieldBuilder) {
        this.interactor = interactor;
        this.dataProcessor = dataProcessor;
        this.fieldBuilder = fieldBuilder;
    }
    /**
     * Handle create record confirmation
     *
     * Orchestrates the complete record creation workflow:
     * 1. Data collection from create modal form
     * 2. Validation against required field rules
     * 3. API request submission
     * 4. Success handling with data refresh
     */
    onButtonCreateConfirmEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            // Initialize new model instance for data collection
            var vData = new this.interactor.model();
            var vPath = this.interactor.path;
            // Step 1: Extract form data from create modal
            this.dataProcessor.collectData(vData, 'CREATE');
            // Step 2: Validate collected data against business rules
            var vValidate = this.dataProcessor.validateData(vData, 'CREATE', this.fieldBuilder.requiredFields);
            if (!vValidate) {
                (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
                return; // Validation failed - user feedback already provided
            }
            // Step 3: Submit creation request to API
            var vResult = yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.requestCreateData)(vData, vPath, this.interactor.pageData, this.interactor.parentPath, this.interactor.deleteFields, this.interactor.fieldsToUrlParams, this.interactor.parentId);
            // Clean up modal state
            (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.clearModal)('CREATE');
            // Step 4: Handle API response and refresh display on success
            if (vResult == null || vResult.statusCode != 201) {
                (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
                return; // Creation failed - error handling done by API layer
            }
            // Refresh data table with new record
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.loadLanguage)();
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
    /**
     * Handle update record confirmation
     *
     * Orchestrates the complete record update workflow:
     * 1. Data collection from update modal form
     * 2. Validation with existing data considerations
     * 3. API update request with record ID
     * 4. Success handling with data refresh
     */
    onButtonUpdateConfirmClick() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            // Initialize model instance and extract record ID
            var vData = new this.interactor.model();
            var vId = $("#button-update-confirm").attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_13__.DATA_ATTR_ID_UPDATE);
            var vPath = this.interactor.path;
            // Step 1: Collect updated data from form
            this.dataProcessor.collectData(vData, 'UPDATE');
            // Step 2: Validate changes against business rules
            var vValidate = this.dataProcessor.validateData(vData, 'UPDATE', this.fieldBuilder.requiredFields);
            if (!vValidate) {
                (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
                return; // Validation failed
            }
            // Step 3: Submit update request with record identifier
            var vResult = yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.requestUpdateData)(vData, vPath, Number(vId), this.interactor.pageData, this.interactor.parentPath, this.interactor.deleteFields, this.interactor.parentId, this.interactor.fieldsToUrlParams);
            // Step 4: Handle success and refresh data display
            if (vResult == null || vResult.statusCode != 200) {
                (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
                return; // Update failed
            }
            // Refresh table to show updated data
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.loadLanguage)();
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
    /**
     * Handle delete record confirmation
     *
     * Executes record deletion and refreshes the data display.
     * The record ID is extracted from the delete confirmation modal.
     */
    onButtonDeleteConfirmClick() {
        return __awaiter(this, void 0, void 0, function* () {
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
            // Execute deletion (ID extracted within the delete function)
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.requestDeleteData)(this.interactor.path, this.interactor.pageData);
            // Refresh data display after successful deletion
            yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(this.interactor.path, this.interactor.pageData, this.interactor.searchParam, this.interactor.viewPath);
            (0,_TableUtils__WEBPACK_IMPORTED_MODULE_4__.createPagination)(this.interactor.pageData, this.interactor.transformData);
            (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
        });
    }
}
/**
 * Clear all search filters and reload original data
 * @param paramPath API endpoint path
 * @param paramPageData Pagination information
 * @param viewPath Base path for view operations
 */
function onButtonFilterClearClick(paramPath, paramPageData, viewPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(paramPath, paramPageData, viewPath);
        $("#button-filter-clear").addClass('d-none');
        (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.clearModal)('SEARCH_ADVANCE');
    });
}
/**
 * Handle image file selection in modal forms
 *
 * Processes file input changes to provide immediate image preview functionality.
 * Supports both create and update modal contexts with appropriate preview placement.
 *
 * @param e - File input change event containing selected file data
 * @param paramType - Modal context ('CREATE' or 'UPDATE') for preview targeting
 */
function onImageFileSelected(e, paramType) {
    var vSelectedFile = e.target.files[0];
    var vReader = new FileReader();
    _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("---- selected image:", vSelectedFile);
    // Configure file reader to display image preview when loaded
    vReader.onload = (paramReaderEvent) => {
        if (paramType == 'CREATE') {
            $(".create-image-selected").attr('src', paramReaderEvent.target.result.toString());
        }
        else {
            $(".update-image-selected").attr('src', paramReaderEvent.target.result.toString());
        }
    };
    // Start reading the selected file as data URL for immediate preview
    vReader.readAsDataURL(vSelectedFile);
}
/**
 * Handle sign out button click
 * Removes authentication token and redirects to sign in page
 */
function onButtonSignOutClick() {
    return __awaiter(this, void 0, void 0, function* () {
        yield _SecureAuth__WEBPACK_IMPORTED_MODULE_12__["default"].logout();
        (0,___WEBPACK_IMPORTED_MODULE_5__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_10__.PATH_SIGN_IN);
    });
}
/**
 * Handle create button click
 * Opens the create modal dialog
 */
function onButtonCreateClick() {
    (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.showModal)('CREATE');
}
/**
 * Handle delete button click from table rows
 *
 * Extracts the record ID from the table row data and prepares the delete confirmation modal.
 * Provides safe deletion workflow with user confirmation step.
 *
 * @param event - Click event from the delete button in table row
 */
function onButtonDeleteClick(event) {
    (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
    // Extract item data from the parent table row
    var vDataJSON = $(event.currentTarget).closest("tr").attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_13__.DATA_ATTR_ITEM);
    var vData = JSON.parse(vDataJSON);
    var vId = vData.id;
    _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("---- delete data:", vId);
    // Populate delete confirmation modal with record ID
    $("#input-delete-id").val(vId);
    (0,_ModalUtils__WEBPACK_IMPORTED_MODULE_2__.showModal)('DELETE');
    (0,___WEBPACK_IMPORTED_MODULE_5__.loadLanguage)();
    (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
}
/**
 * Create additional search input groups for advanced search
 *
 * Allows users to dynamically add multiple search criteria by cloning
 * existing search input groups. Provides intuitive UI for complex queries.
 */
function createSearchGroup() {
    // Clone the current search input group
    var vInputGroup = $(this).parent().clone();
    // Reset cloned group state and modify functionality
    $(vInputGroup).find('input').val(''); // Clear input values
    $(vInputGroup).find('button').removeClass('button-create-search-group')
        .addClass('remove-self').html('-'); // Change to remove button
    // Add cloned group to search container
    $(this).parent().parent().append(vInputGroup);
    // Bind removal functionality to new group
    $(".remove-self").on('click', function () {
        $(this).parent().remove();
    });
}
/**
 * Handle view button click in table rows
 * Navigates to the detail view page for the selected item
 * @param event Click event from view button
 * @param viewPath Base path for view operations
 */
function onButtonViewClick(event, viewPath) {
    // Extract item data from table row
    var vDataJSON = $(event.currentTarget).closest("tr").attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_13__.DATA_ATTR_ITEM);
    var vId = JSON.parse(vDataJSON).id;
    // Navigate to detail view page
    (0,___WEBPACK_IMPORTED_MODULE_5__["default"])(viewPath + "/" + vId);
}
/**
 * Handle tab click events in modal dialogs
 * Manages tab switching animations and content display
 * @param event Click event from tab button
 */
function onTabModalClick(event) {
    var vDiv = $(event.target).parent().siblings('div');
    // Prevent multiple simultaneous animations
    if ($(vDiv).is(':animated')) {
        return;
    }
    // Extract tab index from button ID and get tab dimensions
    var vIndex = Number($(event.target).attr('id').split('-')[3]);
    var vLength = $(event.target).siblings().length;
    var vWidth = $(event.target).parent().outerWidth();
    // Update tab button styling (inactive vs active)
    $(event.target).parent().find('button').addClass('text-dark')
        .removeClass('text-white');
    $(event.target).addClass('text-white').removeClass('text-dark');
    // Move the tab indicator to the selected tab position
    $(event.target).parent().find('div').css('left', vIndex * vWidth / vLength);
    // Hide all other tab content panels, then show the selected one
    vDiv.not(`:nth-of-type(${vIndex + 1})`).stop().animate({
        'max-height': 0
    }, 500, 'linear').promise().done(function () {
        // Show the selected tab content after hiding others
        vDiv.eq(vIndex).stop().animate({
            'max-height': '1000px'
        }, 500);
    });
}
/**
 * Handle cascading dropdown selection changes
 *
 * Manages parent-child dropdown relationships where selecting an option in one
 * dropdown dynamically loads options for a dependent dropdown via API calls.
 *
 * @param event - Change event from parent dropdown selection
 * @param affectedSelect - The dependent dropdown element to update
 */
function onModalSelectRelationClick(event, affectedSelect) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log('----');
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log($(affectedSelect));
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log($(event.target));
        // Clear existing options from dependent dropdown
        $(affectedSelect).empty();
        // Get selected value from parent dropdown
        var vValue = (_a = $(event.target).find('option:selected').val()) !== null && _a !== void 0 ? _a : null;
        // Disable dependent dropdown if no valid selection
        if (vValue == null || vValue == '') {
            $(affectedSelect).attr('disabled', '');
            return;
        }
        // Extract API configuration from dropdown attributes
        let vLinkParent = $(affectedSelect).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_13__.DATA_ATTR_PARENT_API);
        let vLinkCurrent = $(affectedSelect).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_13__.DATA_ATTR_CURRENT_API);
        let vLinkPath = $(affectedSelect).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_13__.DATA_ATTR_LINK_NAME);
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Received param:", vLinkParent, vLinkCurrent);
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("--- fetch data on select: change", vValue);
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("affected select:", affectedSelect);
        // Fetch dependent options from API based on parent selection
        var vData = yield (0,_ApiHandler__WEBPACK_IMPORTED_MODULE_1__.getAllData)(vLinkCurrent, new _model_PageModel__WEBPACK_IMPORTED_MODULE_0__["default"](), { limit: -1 }, null, true, vLinkParent, Number(vValue));
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("--- fetch data on select:", vData);
        // Add default "choose an option" placeholder
        var vOption = $("<option>").text('Please choose an option')
            .attr('value', '');
        $(affectedSelect).append(vOption);
        // Populate dropdown with fetched options
        (vData === null || vData === void 0 ? void 0 : vData.data).forEach(item => {
            var vOption = $("<option>").text(item['name'])
                .attr('value', item['id']);
            $(affectedSelect).append(vOption);
        });
        // Re-enable the dependent dropdown
        $(affectedSelect).removeAttr('disabled');
    });
}
function onModalSelectMultipleClick(event) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        var vCurrentTarget = $(event.target);
        var vDivSelectedChoice = vCurrentTarget.parent().find('div');
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log('Multiple selection selected');
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log('Div:', vDivSelectedChoice);
        if (vDivSelectedChoice == null || vDivSelectedChoice.length == 0) {
            _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Has no div - start generation");
            vCurrentTarget.parent().append($('<div>')
                .addClass('div-multi-selection mt-2'));
            vDivSelectedChoice = vCurrentTarget.parent().find('div');
        }
        var vChoices = vDivSelectedChoice.children().get().map((item) => item.getAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_13__.DATA_ATTR_OPTION_ID));
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("current choices:", vChoices);
        var vValue = (_a = $(event.target).find('option:selected').val()) !== null && _a !== void 0 ? _a : null;
        var vText = (_b = $(event.target).find('option:selected').text()) !== null && _b !== void 0 ? _b : null;
        _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Current choice:", vValue.toString().trim());
        if (vValue == null || vChoices.includes(vValue.toString().trim())) {
            _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Already chosen");
            return;
        }
        var vCardSelection = new _components_card_CardSelection__WEBPACK_IMPORTED_MODULE_11__["default"](Number(vValue), vText);
        vDivSelectedChoice.append(vCardSelection);
        $(vCardSelection).find('.button-card-delete').on('click', (e) => onModalDeleteCardClick(e));
    });
}
function onModalDeleteCardClick(event) {
    _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Delete card option click", $(event));
    $(event.currentTarget).parent().remove();
}
/**
 * Handle push notification subscription setup
 *
 * Manages the complete web push notification subscription workflow including:
 * - Permission request from user
 * - Service worker registration
 * - Push manager subscription creation
 * - Server-side subscription storage via API
 */
function onSubscriptionButtonClick() {
    return __awaiter(this, void 0, void 0, function* () {
        (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(true);
        // Request notification permission from browser
        var vPermission = yield Notification.requestPermission();
        if (vPermission == 'denied') {
            return; // User denied permission
        }
        // Check for service worker support and register if available
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(function (reg) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield navigator.serviceWorker.ready.then(function (readyReg) {
                        return __awaiter(this, void 0, void 0, function* () {
                            var _a, _b;
                            // Check for existing subscription
                            let subscription = yield readyReg.pushManager.getSubscription();
                            if (subscription) {
                                _MyUtilities__WEBPACK_IMPORTED_MODULE_3__["default"].showToast("update", _language__WEBPACK_IMPORTED_MODULE_9__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].err_push_exist);
                                return;
                            }
                            // Create new push subscription with server public key
                            var vServerKey = _MyUtilities__WEBPACK_IMPORTED_MODULE_3__["default"]
                                .getPushApplicationServerKey(_constants_webConstants__WEBPACK_IMPORTED_MODULE_10__.PUSH_NOTIFICATION_KEY);
                            subscription = yield readyReg.pushManager.subscribe({
                                userVisibleOnly: true,
                                applicationServerKey: vServerKey
                            });
                            if (!subscription) {
                                _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Subscription fail");
                                _MyUtilities__WEBPACK_IMPORTED_MODULE_3__["default"].showToast("error", _language__WEBPACK_IMPORTED_MODULE_9__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].err);
                                return;
                            }
                            // Extract subscription details for server storage
                            const subJson = subscription.toJSON();
                            _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Endpoint:", subJson.endpoint);
                            _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Public Key (p256dh):", subJson.keys.p256dh);
                            _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Auth Token:", subJson.keys.auth);
                            const contentEncoding = 'aesgcm';
                            // Store subscription on server via API
                            var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_6__["default"]()
                                .setPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_7__.PATH_API_SUBSCRIPTION, new _model_PageModel__WEBPACK_IMPORTED_MODULE_0__["default"]())
                                .setParentPath(_constants_APIConstants__WEBPACK_IMPORTED_MODULE_7__.PATH_API_EMPLOYEE, (_a = _SecureAuth__WEBPACK_IMPORTED_MODULE_12__["default"].getUserInfo()) === null || _a === void 0 ? void 0 : _a.id)
                                .deleteFields('user');
                            var vObject = {
                                id: 0,
                                user: (_b = _SecureAuth__WEBPACK_IMPORTED_MODULE_12__["default"].getUserInfo()) === null || _b === void 0 ? void 0 : _b.id.toString(),
                                endPoint: subJson.endpoint,
                                publicKey: subJson.keys.p256dh,
                                authenticationToken: subJson.keys.auth,
                                contentEncoding: contentEncoding,
                            };
                            yield vApi.create(vObject);
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_3__["default"].showToast("success", _language__WEBPACK_IMPORTED_MODULE_9__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].api_success);
                        });
                    });
                });
            }).catch(function (err) {
                _MyLogger__WEBPACK_IMPORTED_MODULE_8__["default"].log("Service worker registration fail:", err);
                _MyUtilities__WEBPACK_IMPORTED_MODULE_3__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_9__["default"][(0,___WEBPACK_IMPORTED_MODULE_5__.getLanguage)()].err);
            });
        }
        (0,___WEBPACK_IMPORTED_MODULE_5__.setLoadingStatus)(false);
    });
}
/**
 * Handle password visibility toggle functionality
 *
 * Toggles between password and text input types for password fields,
 * with corresponding icon updates for visual feedback.
 */
function onButtonVisibilityClick() {
    // Check current visibility state and toggle accordingly
    if ($(this).children("i").hasClass("fa-eye-slash")) {
        // Currently hidden - show password as text
        $(this).siblings("input").attr('type', 'text');
        $(this).children("i").removeClass("fa-eye-slash").addClass('fa-eye');
    }
    else {
        // Currently visible - hide password
        $(this).siblings("input").attr('type', 'password');
        $(this).children("i").removeClass("fa-eye").addClass('fa-eye-slash');
    }
}


/***/ }),

/***/ "./src/utilities/ImageUtils.ts":
/*!*************************************!*\
  !*** ./src/utilities/ImageUtils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayListImages: () => (/* binding */ displayListImages),
/* harmony export */   onFileDrop: () => (/* binding */ onFileDrop),
/* harmony export */   onImagesSelected: () => (/* binding */ onImagesSelected)
/* harmony export */ });
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");

/**
 * Handle file drop events for drag and drop image upload functionality
 * Processes dropped files and filters for valid image types
 * @param e jQuery drag event containing dropped files
 * @param singleImage Whether to allow only single image selection
 */
function onFileDrop(e, singleImage) {
    e.preventDefault();
    const event = e.originalEvent;
    var vFiles = [];
    // Extract dropped files that are images from the drag event
    if (event.dataTransfer.items) {
        var vItems = [...event.dataTransfer.items];
        const dataTransfer = new DataTransfer();
        vItems.forEach((item, index) => {
            if (item.kind == 'file') {
                var vFile = item.getAsFile();
                // Only accept files that are images (image/*)
                if (vFile && vFile.type.startsWith('image/')) {
                    dataTransfer.items.add(vFile);
                }
            }
        });
        var vInput = $(e.currentTarget)
            .find("input[type='file'")[0];
        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("---- file input: ", vInput);
        if (vInput) {
            vInput.files = dataTransfer.files;
            $(vInput).trigger('change');
        }
    }
    // Display the dropped images in the UI
    // displayListImages(e.target, vFiles, singleImage);
    $("#button-main").removeAttr('disabled');
}
/**
 * Handle file input selection events when users select images via file picker
 * Processes selected files and displays them in the interface
 * @param e File input change event containing selected files
 * @param singleImage Whether to allow only single image selection
 */
function onImagesSelected(e, singleImage) {
    var vData = e.target.files;
    // Display the selected images in the UI
    displayListImages(e.target, vData, singleImage);
    // Enable the main action button once images are selected
    $("#button-main").removeAttr('disabled');
}
/**
 * Display list of images in the UI with preview functionality
 * Creates image previews and appends them to the designated container
 * @param target The input element that triggered the file selection
 * @param paramData Array or FileList of image files to display
 * @param singleImage Whether to show only one image (clears existing images)
 */
function displayListImages(target, paramData, singleImage) {
    var _a;
    // Clear existing images if single image mode is enabled
    if (singleImage) {
        $(target).parent().siblings('div').empty();
    }
    // Process each selected file and create image preview
    (_a = Array.from(paramData)) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
        var vReader = new FileReader();
        // Set up file reader callback to display image when loaded
        vReader.onload = (paramReaderEvent) => {
            // Create image element with the loaded file data
            var vCard = $("<img>")
                .addClass('w-100')
                .attr('src', paramReaderEvent.target.result.toString());
            // Append the image preview to the container next to the input
            $(target).parent().siblings('div').append(vCard);
        };
        // Read the file as data URL for image preview
        vReader.readAsDataURL(item);
    });
}


/***/ }),

/***/ "./src/utilities/ModalUtils.ts":
/*!*************************************!*\
  !*** ./src/utilities/ModalUtils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearModal: () => (/* binding */ clearModal),
/* harmony export */   fillUpdateFields: () => (/* binding */ fillUpdateFields),
/* harmony export */   generateImagePicker: () => (/* binding */ generateImagePicker),
/* harmony export */   generateModalField: () => (/* binding */ generateModalField),
/* harmony export */   onButtonUpdateClick: () => (/* binding */ onButtonUpdateClick),
/* harmony export */   showModal: () => (/* binding */ showModal),
/* harmony export */   updateModalName: () => (/* binding */ updateModalName)
/* harmony export */ });
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editorjs.mjs");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_card_CardSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card/CardSelection */ "./src/components/card/CardSelection.ts");
/* harmony import */ var _components_form_ImagePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/ImagePicker */ "./src/components/form/ImagePicker.ts");
/* harmony import */ var _components_form_InputComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/InputComponent */ "./src/components/form/InputComponent.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _model_PageModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/PageModel */ "./src/model/PageModel.ts");
/* harmony import */ var _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./APIRequestBuilder */ "./src/utilities/APIRequestBuilder.ts");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventHandler */ "./src/utilities/EventHandler.ts");
/* harmony import */ var _ImageUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageUtils */ "./src/utilities/ImageUtils.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/header.mjs");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/editorjs-list.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















/**
 * Clears and hides a modal, resetting all form fields and images.
 * @param paramType - The type of modal to clear
 */
function clearModal(paramType) {
    switch (paramType) {
        case 'CREATE':
            $("#modal-create").modal("hide");
            $("#modal-create").find("input, select, textarea")
                .val('');
            $("#images-create-photo").empty();
            break;
        case 'UPDATE':
            $("#modal-update").modal("hide");
            $("#modal-update").find("input, select, textarea")
                .val('');
            $("#images-update-photo").empty();
            break;
        case 'SEARCH_ADVANCE':
            $("#modal-search-advance").modal('hide');
            $("#modal-search-advance input").val('');
            $("#modal-search-advance .remove-self").parent().parent().remove();
            break;
        case 'DELETE':
            $("#modal-delete").modal("hide");
            $("#modal-delete").find('input, select, textarea')
                .val('');
            break;
    }
}
/**
 * Generates and appends input fields to create/update modals.
 * @param paramFieldName - The field name
 * @param paramRequired - Whether the field is required
 * @param paramInputType - The HTML input type
 * @param dataType - The data type for validation
 * @param options - Options for select inputs
 * @param modalTab - Tab configuration for organizing fields
 * @param dependentOn - Parent field for dependent selects
 * @param path - API path for fetching dependent options
 * @param dependentFieldName - Field name for dependency
 * @param isMulti - Whether select allows multiple values
 */
function generateModalField(paramFieldName, paramRequired, paramInputType, dataType, options, modalTab, dependentOn, path, dependentFieldName, isMulti) {
    // Convert field name to display format
    var vInputName = _MyUtilities__WEBPACK_IMPORTED_MODULE_12__["default"].convertName(paramFieldName, 'tableHeaderName');
    // Generate language key for translations
    var vLangText = 'input_' + _MyUtilities__WEBPACK_IMPORTED_MODULE_12__["default"].convertName(paramFieldName, 'tableId')
        .split('-').join('_');
    // Create input component with configuration
    var vInputField = new _components_form_InputComponent__WEBPACK_IMPORTED_MODULE_4__["default"]()
        .setName(vInputName)
        .setInputType(paramInputType)
        .setIsRequired(paramRequired)
        .setDataType(dataType)
        .setInputData({ [_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_LANGUAGE]: vLangText })
        .setHasMultipleSelectValue(isMulti, path);
    _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("language text:", vLangText);
    // Add options if provided for select inputs
    options ? vInputField.addOption(options) : '';
    // Clone input for create and update modals
    var vCreated = vInputField.clone().setElementId('create');
    var vUpdated = vInputField.clone().setElementId('update');
    // Append to modal body if no tabs configured
    if (Object.keys(modalTab).length == 0) {
        $("#modal-create .modal-body").append(vCreated);
        $("#modal-update .modal-body").append(vUpdated);
        checkDependent(dependentOn, vCreated, vUpdated, path, dependentFieldName);
        return;
    }
    var vKeys = Object.keys(modalTab);
    var vIndex = 0;
    var vFinish = false;
    // Find correct tab for field and append
    while (vIndex < vKeys.length && !vFinish) {
        if (modalTab[vKeys[vIndex]].includes(paramFieldName)) {
            $(`#modal-create .modal-body #tab-create-${vIndex}`).append(vCreated);
            $(`#modal-update .modal-body #tab-update-${vIndex}`).append(vUpdated);
            checkDependent(dependentOn, vCreated, vUpdated, path, dependentFieldName);
            vFinish = true;
        }
        vIndex++;
    }
    if (vFinish) {
        return;
    }
    // Append to last tab if not found in specific tab
    $(`#modal-create .modal-body #tab-create-${vKeys.length - 1}`)
        .append(vCreated);
    $(`#modal-update .modal-body #tab-update-${vKeys.length - 1}`)
        .append(vUpdated);
    checkDependent(dependentOn, vCreated, vUpdated, path, dependentFieldName);
}
/**
 * Configures dependent select fields by setting data attributes and disabling initially.
 * @param paramDependentOn - Parent field name this field depends on
 * @param createdInput - Input element for create modal
 * @param updatedInput - Input element for update modal
 * @param path - API path for fetching options
 * @param fieldName - Field name for the relationship
 */
function checkDependent(paramDependentOn, createdInput, updatedInput, path, fieldName) {
    if (paramDependentOn != null) {
        // Disable inputs until parent is selected
        createdInput.isDisabled();
        updatedInput.isDisabled();
        // Set dependency attributes for create modal select
        createdInput.querySelector('select')
            .setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_PARENT_API, paramDependentOn);
        createdInput.querySelector('select')
            .setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_CURRENT_API, path);
        createdInput.querySelector('select')
            .setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_LINK_NAME, fieldName);
        // Set dependency attributes for update modal select
        updatedInput.querySelector('select')
            .setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_PARENT_API, paramDependentOn);
        updatedInput.querySelector('select')
            .setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_CURRENT_API, path);
        updatedInput.querySelector('select')
            .setAttribute(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_LINK_NAME, fieldName);
    }
    if ($(createdInput).find('select').attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_MULTIPLE_VALUE)) {
        _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("Has no div - start generation");
        $(createdInput).children().append($('<div>')
            .addClass('div-multi-selection mt-2'));
        $(updatedInput).children().append($('<div>')
            .addClass('div-multi-selection mt-2'));
    }
    if ($(createdInput).find('textarea').length > 0) {
        _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("---- is textarea");
        var vId = 'div-' + $(createdInput).find('textarea').attr('id');
        var vIdUpdate = 'div-' + $(updatedInput).find('textarea').attr('id');
        var vDivTextArea = $("<div>").attr('id', vId).addClass('col-sm-8 border')
            .css({
            'min-height': '300px',
            'resize': 'vertical',
            'overflow': 'auto'
        });
        $(createdInput).find('textarea').hide();
        $(updatedInput).find('textarea').hide();
        $(createdInput).children().append(vDivTextArea.clone());
        $(updatedInput).children().append(vDivTextArea.clone().attr('id', vIdUpdate));
        const editorCreate = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
            holder: vId, // id of the HTML element
            tools: {
                header: _editorjs_header__WEBPACK_IMPORTED_MODULE_13__["default"],
                list: _editorjs_list__WEBPACK_IMPORTED_MODULE_14__["default"]
            },
            onChange: () => __awaiter(this, void 0, void 0, function* () {
                const data = yield editorCreate.save();
                console.log('Editor data:', data);
                $(createdInput).find('textarea').val(JSON.stringify(data));
            }),
        });
        const editorUpdate = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
            holder: vIdUpdate, // id of the HTML element
            tools: {
                header: _editorjs_header__WEBPACK_IMPORTED_MODULE_13__["default"],
                list: _editorjs_list__WEBPACK_IMPORTED_MODULE_14__["default"]
            },
            onChange: () => __awaiter(this, void 0, void 0, function* () {
                const data = yield editorUpdate.save();
                _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log('Editor data:', data);
                $(updatedInput).find('textarea').val(JSON.stringify(data));
            }),
        });
        $(updatedInput).find('textarea').on('change', (e) => {
            _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("Update data change");
            var vValue = e.target.value;
            if (typeof vValue != 'object') {
                return;
            }
            _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("Current value:", vValue);
            var vData = JSON.parse(vValue);
            editorUpdate.render(vData);
        });
    }
}
/**
 * Dynamically generates and appends image picker components to modals.
 * Handles both single and multiple image selection, and tabbed modals.
 * @param fieldName - The field name for the image picker
 * @param singleImage - Whether only one image can be selected
 * @param modalTab - Tab configuration for organizing fields
 */
function generateImagePicker(fieldName, singleImage, modalTab) {
    // Create image picker component
    var vImagePicker = new _components_form_ImagePicker__WEBPACK_IMPORTED_MODULE_3__["default"]().setFieldName(fieldName);
    var vCreated = vImagePicker.clone().setElementId('create');
    var vUpdated = vImagePicker.clone().setElementId('update');
    // Append to modal body or appropriate tab
    if (Object.keys(modalTab).length == 0) {
        $("#modal-create .modal-body").append(vCreated.getHTML());
        $("#modal-update .modal-body").append(vUpdated.getHTML());
    }
    else {
        var vKeys = Object.keys(modalTab);
        vKeys.forEach((key, index) => {
            if (modalTab[key].includes(fieldName)) {
                $(`#modal-create .modal-body #tab-create-${index}`)
                    .append(vCreated);
                $(`#modal-update .modal-body #tab-update-${index}`)
                    .append(vUpdated);
            }
        });
    }
    // Attach event handlers for image selection
    $(".drop-zone").on('drop', (e) => (0,_ImageUtils__WEBPACK_IMPORTED_MODULE_10__.onFileDrop)(e, singleImage));
    $(".drop-zone").on('dragover', function (e) {
        e.preventDefault();
    });
    $("#input-create-photo").change((e) => (0,_ImageUtils__WEBPACK_IMPORTED_MODULE_10__.onImagesSelected)(e, singleImage));
    $("#input-update-photo").change((e) => (0,_ImageUtils__WEBPACK_IMPORTED_MODULE_10__.onImagesSelected)(e, singleImage));
    return this;
}
/**
 * Updates modal titles based on the resource type.
 * @param paramLangText - The language text key for the resource name
 */
function updateModalName(paramLangText) {
    _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("Modal name:", paramLangText);
    // Set language keys for create modal title
    $("#modal-create h3 span:first-of-type")
        .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_LANGUAGE, 'modal_create');
    $("#modal-create h3 span:last-of-type")
        .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_LANGUAGE, 'nav_' + paramLangText)
        .html(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_1__.getLanguage)()][paramLangText]);
    // Set language keys for update modal title
    $("#modal-update h3 span:first-of-type")
        .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_LANGUAGE, 'modal_create');
    $("#modal-update h3 span:last-of-type")
        .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_LANGUAGE, 'nav_' + paramLangText)
        .html(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_1__.getLanguage)()][paramLangText]);
    // Set language keys for delete modal title
    $("#modal-delete h3 span:first-of-type")
        .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_LANGUAGE, 'modal_delete').html("Delete ");
    $("#modal-delete h3 span:last-of-type")
        .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_LANGUAGE, 'nav_' + paramLangText)
        .html(_language__WEBPACK_IMPORTED_MODULE_6__["default"][(0,___WEBPACK_IMPORTED_MODULE_1__.getLanguage)()][paramLangText]);
}
/**
 * Displays a modal by type.
 * @param modalType - The type of modal to show
 */
function showModal(modalType) {
    const modalName = `#modal-${modalType.toLowerCase()}`;
    $(modalName).modal("show");
}
/**
 * Handles update button clicks in table rows.
 * Extracts row data, populates the update modal, and displays it.
 * @param event - The click event from the update button
 */
function onButtonUpdateClick(event) {
    return __awaiter(this, void 0, void 0, function* () {
        // Extract data from table row
        var vDataJSON = $(event.currentTarget).closest("tr").attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_ITEM);
        var vData = JSON.parse(vDataJSON);
        var vId = vData.id;
        // Store ID for update action
        $("#button-update-confirm").attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_ID_UPDATE, vId);
        // Display existing photo if available
        var vPhoto = vData.photo;
        $(".update-image-selected").attr('src', vPhoto).addClass('mb-2').show();
        // Reset and populate modal
        clearModal('UPDATE');
        yield fillUpdateFields(vData);
        $("#modal-update").modal("show");
    });
}
/**
 * Populates update modal fields with data from a selected record.
 * @param paramData - The data object containing field values
 */
function fillUpdateFields(paramData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield $("#modal-update").find('input, select, textarea')
            .get().forEach((element) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("---- name to change: " + element.id.split('-')
                .splice(2).join('-'));
            // Convert element ID to model property name
            var vModelName = _MyUtilities__WEBPACK_IMPORTED_MODULE_12__["default"].convertName(element.id.split('-')
                .splice(2).join('-').trim(), 'fieldName');
            var vInputType = element.id.split('-')[0];
            // Skip file inputs
            if ($(element).attr('type') == 'file') {
                $(element).val('');
                return;
            }
            // Format date inputs
            if ($(element).attr('type') == 'date'
                && paramData[vModelName] != null) {
                var vDateSplit = paramData[vModelName].split(/[-T]/);
                var vDate = new Date(vDateSplit[0], vDateSplit[1] - 1, vDateSplit[2], 0, 0, 0, 0);
                var vMonth = vDate.getMonth() >= 10 ? (vDate.getMonth() + 1) :
                    '0' + (vDate.getMonth() + 1);
                var vDay = vDate.getDate() >= 10 ? vDate.getDate() :
                    '0' + vDate.getDate();
                var vString = vDate.getFullYear() + "-" + vMonth + "-" + vDay;
                $(`#input-update-${vModelName}`).val(vString);
                return;
            }
            // Handle textarea elements
            if (vInputType == 'textarea') {
                _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("fill textarea data", paramData[vModelName], element);
                $(element.id.split('-').slice(0, 2).join() + `-${vModelName}`)
                    .val(paramData[vModelName]).trigger('change');
                return;
            }
            if ($(element).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_MULTIPLE_VALUE)) {
                var vPath = $(element).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_MULTIPLE_VALUE);
                _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("----- has multiple value", vPath, paramData[vModelName]);
                if (paramData[vModelName] != null &&
                    paramData[vModelName].trim().length > 0)
                    yield ((_a = paramData[vModelName]) === null || _a === void 0 ? void 0 : _a.split(',').forEach((number) => __awaiter(this, void 0, void 0, function* () {
                        _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("--- Current number:", number);
                        var vApi = new _APIRequestBuilder__WEBPACK_IMPORTED_MODULE_8__["default"]()
                            .setPath(vPath, new _model_PageModel__WEBPACK_IMPORTED_MODULE_7__["default"]());
                        var vResult = yield vApi.getById(number);
                        if (vResult != null && vResult['data'] != null) {
                            _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("Current item id:", vResult['data']);
                            var vCardSelection = new _components_card_CardSelection__WEBPACK_IMPORTED_MODULE_2__["default"](Number(vResult['data'].id), vResult['data'].name);
                            _MyLogger__WEBPACK_IMPORTED_MODULE_11__["default"].log("Putting card selection in:", $(element));
                            $(element).parent()
                                .find('.div-multi-selection').append(vCardSelection);
                            $(vCardSelection).find('.button-card-delete')
                                .off('click').on('click', (e) => (0,_EventHandler__WEBPACK_IMPORTED_MODULE_9__.onModalDeleteCardClick)(e));
                        }
                    })));
                return;
            }
            // Handle select elements
            if (vInputType == 'select' && paramData[vModelName] != null) {
                // Extract ID from nested objects
                var vField = paramData[vModelName].id ?
                    paramData[vModelName].id :
                    paramData[vModelName];
                $(element).val(vField).trigger('change');
                // Wait for dependent select options to load
                if ($(element).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_PARENT_API) != null) {
                    var vPathName = $(element).attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_5__.DATA_ATTR_LINK_NAME);
                    waitForData($(element), vField);
                }
                return;
            }
            // Set value for standard inputs
            $(element).val(paramData[vModelName]);
            return;
        }));
    });
}
/**
 * Waits for dependent select options to load before setting the value.
 * Retries every 300ms until options are available.
 * @param element - The jQuery select element
 * @param data - The value to set once options are available
 */
function waitForData(element, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (element.children().length == 0) {
            // Retry after delay if options not loaded
            setTimeout(() => {
                if (element.children().length == 0) {
                    waitForData(element, data);
                    return;
                }
                // Set value and trigger change once options are available
                element.val(data).trigger('change');
            }, 300);
        }
    });
}


/***/ }),

/***/ "./src/utilities/MyLogger.ts":
/*!***********************************!*\
  !*** ./src/utilities/MyLogger.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Centralized logging utility with configurable output control
 */
class MyLogger {
    /**
     * Configure global logging state
     * @param isActive - True to enable logging, false to disable
     */
    static setIsActive(isActive) {
        this.isActive = isActive;
    }
    /**
     * Log messages to console when logging is active
     * @param args - Arguments to log
     */
    static log(...args) {
        if (this.isActive) {
            console.log(...args);
        }
    }
    /**
     * Log element details when logging is active and level >= 1
     * @param args - Arguments to log
     */
    static logElement(...args) {
        if (this.isActive && this.logLevel >= 1) {
            console.log(...args);
        }
    }
}
/**
 * Global flag to enable/disable logging
 */
MyLogger.isActive = true;
/**
 * Logging level threshold
 */
MyLogger.logLevel = 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyLogger);


/***/ }),

/***/ "./src/utilities/MyUtilities.ts":
/*!**************************************!*\
  !*** ./src/utilities/MyUtilities.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_card_ToastComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card/ToastComponent */ "./src/components/card/ToastComponent.ts");
/* harmony import */ var _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/webConstants */ "./src/constants/webConstants.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _SecureAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SecureAuth */ "./src/utilities/SecureAuth.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * String naming convention formats.
 */
var fieldName;
(function (fieldName) {
    fieldName[fieldName["tableId"] = 0] = "tableId";
    fieldName[fieldName["tableHeaderName"] = 1] = "tableHeaderName";
    fieldName[fieldName["fieldName"] = 2] = "fieldName";
    fieldName[fieldName["pageTitle"] = 3] = "pageTitle";
})(fieldName || (fieldName = {}));
/**
 * Utility class providing common helper functions for the admin interface.
 */
class MyUtilities {
    /**
     * Converts a string between different naming conventions.
     * @param paramString - The string to convert
     * @param paramTo - The target naming convention
     * @returns The converted string or null if input is empty
     */
    static convertName(paramString, paramTo) {
        // Remove leading slash if present
        paramString = paramString[0] == '/' ? paramString.slice(1) : paramString;
        if (paramString.length == 0) {
            return null;
        }
        switch (paramTo) {
            case "tableId":
                // Convert to kebab-case for HTML element IDs
                if (paramString.split('-').length > 1) {
                    return paramString
                        .split('-')
                        .map(substring => substring.toLowerCase())
                        .join('-');
                }
                // Convert camelCase to kebab-case
                return paramString.split('').map(substring => {
                    if (substring == ' ') {
                        return '';
                    }
                    if (substring == substring.toLowerCase()) {
                        return substring;
                    }
                    return '-' + substring.toLowerCase();
                }).join('');
            case 'fieldName':
                // Convert to camelCase for JavaScript object properties
                return paramString.split(/[- ]/).map((substring, index) => {
                    if (index == 0) {
                        return substring; // First word stays lowercase
                    }
                    return substring[0].toUpperCase() + substring.slice(1);
                }).join('');
            case "tableHeaderName":
                // Convert to human-readable format for table headers
                let vString = paramString.split(/[-_]/);
                if (vString.length > 1) {
                    return vString.join(' ');
                }
                // Split camelCase into words
                return vString.join('').split('').map(substring => {
                    if (substring == substring.toLowerCase()) {
                        return substring;
                    }
                    return ' ' + substring;
                }).join('');
            case "pageTitle":
                // Convert to title case for page titles
                let vResult = paramString.split('_')
                    .map(item => item[0].toUpperCase() + item.slice(1))
                    .join(' ');
                // Handle detail pages with special formatting
                let vSplit = vResult.split('/');
                if (vSplit.length > 1) {
                    vResult = vSplit[0] + ' Detail';
                    $("#button-action").removeClass('d-none');
                    return vResult;
                }
                $("#button-action").addClass('d-none');
                return vResult;
        }
    }
    /**
     * Validates if the current URL matches the detail page pattern: /resource/id.
     * @returns Match result or null
     */
    static validateDetailPagePath() {
        let vLocation = window.location.pathname;
        return vLocation.match(this.regDetailPage);
    }
    /**
     * Validates if the current URL matches the detail page pattern: /resource/detail.
     * @returns Match result or null
     */
    static validateDetailPagePath2() {
        let vLocation = window.location.pathname;
        return vLocation.match(this.regDetailPage2);
    }
    /**
     * Validates if the current URL matches the verification page pattern.
     * @returns Match result or null
     */
    static validateVerifyPath() {
        let vLocation = window.location.pathname;
        return vLocation.match(this.regPageVerify);
    }
    /**
     * Validates a phone number format (10 digits).
     * @param paramPhone - The phone number to validate
     * @returns True if the phone number is valid
     */
    static validatePhoneNumber(paramPhone) {
        return this.regPhone.test(paramPhone);
    }
    /**
     * Validates an email address format.
     * @param paramEmail - The email to validate
     * @returns True if the email is valid
     */
    static validateEmail(paramEmail) {
        return this.regEmail.test(paramEmail);
    }
    /**
     * Displays a toast notification message.
     * @param paramTitle - The toast status type (success, error, warning, info)
     * @param paramBody - The message content to display
     */
    static showToast(paramTitle, paramBody) {
        let vToast = new _components_card_ToastComponent__WEBPACK_IMPORTED_MODULE_0__["default"]()
            .setTitle(paramTitle)
            .setBody(paramBody)
            .setStatus(paramTitle);
        $("#toast-container").append(vToast);
        $(vToast).toast('show');
        setTimeout(() => {
            vToast.remove();
        }, 5000);
    }
    /**
     * Converts a base64-encoded VAPID key to Uint8Array for Web Push API.
     * @param base64String - The base64-encoded VAPID key
     * @returns Uint8Array representation of the key
     */
    static getPushApplicationServerKey(base64String) {
        // Add padding if needed for proper base64 decoding
        let vPadding = '='.repeat((4 - base64String.length % 4) % 4);
        let vBase64 = (base64String + vPadding)
            .replace(/\-/g, '+') // Replace URL-safe characters
            .replace(/_/g, '/');
        let vRawData = window.atob(vBase64);
        let vOutputArray = new Uint8Array(vRawData.length);
        // Convert each character to byte value
        for (let i = 0; i < vRawData.length; ++i) {
            vOutputArray[i] = vRawData.charCodeAt(i);
        }
        return vOutputArray;
    }
    /**
     * Stores data in session storage.
     * @param key - The storage key
     * @param value - The value to store
     */
    static setSessionData(key, value) {
        return sessionStorage.setItem(key, value);
    }
    /**
     * Retrieves data from session storage.
     * @param key - The storage key
     * @returns The stored value or null if not found
     */
    static getSessionData(key) {
        return sessionStorage.getItem(key);
    }
    /**
     * Removes data from session storage.
     * @param key - The key to remove. If not provided, clears all session storage
     */
    static removeSessionData(key) {
        if (key == null) {
            sessionStorage.clear();
        }
        sessionStorage.removeItem(key);
    }
    /**
     * Validates user authentication and manages UI state accordingly.
     * Redirects unauthenticated users from protected pages.
     */
    static checkExistingUser() {
        return __awaiter(this, void 0, void 0, function* () {
            // Pages that don't require authentication
            var vPathNoAuth = [_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_SIGN_IN, _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_SIGN_UP, _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_ADDRESS_MAP,
                _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_PASSWORD_FORGOT, _constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_SETTINGS];
            let vUserInfo = _SecureAuth__WEBPACK_IMPORTED_MODULE_5__["default"].getUserInfo();
            // MyLogger.log("--- check token - User info:", vUserInfo);
            // if (vUserInfo == null) {
            //     MyLogger.log("No cached user");
            //     vUserInfo = await SecureAuth.getCurrentUser();
            //     MyLogger.log("Fetching user data:", JSON.stringify(vUserInfo));
            // }
            // Update UI based on authentication state
            this.updatePageLayout(vUserInfo);
            let vPathName = window.location.pathname;
            // Redirect to public area if no token and on protected page
            if (vUserInfo == null) {
                // removeSaveToken();
                if (!vPathNoAuth.includes(vPathName.slice(1))) {
                    (0,___WEBPACK_IMPORTED_MODULE_4__["default"])(_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_ADDRESS_MAP);
                }
                return;
            }
        });
    }
    /**
     * Updates the page layout based on user authentication state.
     * Shows or hides UI elements based on whether the user is logged in.
     * @param paramData - The user information model, or null if not authenticated
     */
    static updatePageLayout(paramData) {
        _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Update layout:", paramData);
        if (paramData == null) {
            _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Update layout - user not found");
            // Hide authenticated features for anonymous users
            $('.left-navigation').find('a').not(`[href='/${_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_ADDRESS_MAP}'],` +
                ` [href='/${_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_SETTINGS}']`).addClass('hide-element');
            $(".left-navigation").find("button").removeClass("d-flex")
                .addClass("hide-element");
            $("#button-signout").removeClass('d-flex').addClass("hide-element");
            // $("#button-signin")
            $("th:contains('action')").remove();
            $(".button-create").addClass('hide-element');
            $("#button-subscription").addClass('hide-element');
            $("hr:first-of-type").addClass('hide-element');
            return;
        }
        let vPhoto = paramData.photo;
        if (!paramData.photo || paramData.photo.trim().length <= 0) {
            vPhoto = _constants_APIConstants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_NOT_FOUND;
        }
        // Show authenticated features and user information
        $('.left-navigation').find('a').not(`[href='/${_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_ADDRESS_MAP}'],` +
            `[href='/${_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_SETTINGS}']`).removeClass('hide-element');
        $(".left-navigation").find("button").removeClass("hide-element");
        $("#button-signout").removeClass("hide-element");
        $("#button-signin").addClass("hide-element");
        $(".user-info").find('h4').text(paramData === null || paramData === void 0 ? void 0 : paramData.firstName);
        $(".button-create").removeClass('hide-element');
        $("#button-subscription").removeClass('hide-element');
        $("hr:first-of-type").removeClass('hide-element');
        _MyLogger__WEBPACK_IMPORTED_MODULE_3__["default"].log("----- user photo: " + JSON.stringify(paramData));
        $(".user-info").find('img').attr('src', vPhoto);
        $(".user-info").find('p').text(paramData.role.toLowerCase());
    }
}
MyUtilities.regPhone = new RegExp("[0-9]{10}");
MyUtilities.regEmail = new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]");
MyUtilities.regDetailPage = new RegExp(`^\\/([a-zA-Z_]+)\\/([\\d]+)$`);
MyUtilities.regDetailPage2 = new RegExp(`^\\/([a-zA-Z_]+)\\/detail$`);
MyUtilities.regPageVerify = new RegExp(`^\\/` +
    `${_constants_webConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_REAL_ESTATE}\\/([\\d]+)\\/verify$`);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyUtilities);


/***/ }),

/***/ "./src/utilities/NavigationUtils.ts":
/*!******************************************!*\
  !*** ./src/utilities/NavigationUtils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchDropdown: () => (/* binding */ switchDropdown),
/* harmony export */   switchNavigation: () => (/* binding */ switchNavigation)
/* harmony export */ });
var gNavigationIsOpen = true;
/**
 * Toggles the left navigation panel between open and closed states.
 * @param isResize - If true, forces the navigation to close
 */
function switchNavigation(isResize) {
    if (isResize) {
        gNavigationIsOpen = false;
        $(".left-navigation")
            .css('max-width', 0)
            .removeClass('px-2');
        return;
    }
    if (gNavigationIsOpen) {
        gNavigationIsOpen = false;
        $(".left-navigation")
            .css('max-width', 0)
            .removeClass('px-2');
        return;
    }
    gNavigationIsOpen = true;
    $(".left-navigation")
        .css('max-width', 600)
        .addClass('px-2');
}
/**
 * Toggles dropdown menu visibility and animates the arrow icon.
 * @param event - The click event from the dropdown toggle element
 */
function switchDropdown(event) {
    var vMaxHeight = $(event.currentTarget).siblings('.dropdown')
        .css("max-height");
    if (Number(vMaxHeight[0]) <= 0) {
        $(event.currentTarget).siblings('.dropdown')
            .css("max-height", 600);
        $(event.currentTarget).children("i")
            .css('transform', 'rotateZ(-90deg)');
        return;
    }
    $(event.currentTarget).siblings('.dropdown')
        .css("max-height", 0);
    $(event.currentTarget).children("i")
        .css('transform', 'rotateZ(0deg)');
}


/***/ }),

/***/ "./src/utilities/SecureAuth.ts":
/*!*************************************!*\
  !*** ./src/utilities/SecureAuth.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/APIConstants */ "./src/constants/APIConstants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language */ "./src/language/index.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * Singleton class for managing secure authentication operations.
 * Handles CSRF tokens, user sessions, sign in/out, and user information.
 */
class SecureAuth {
    constructor() {
        this.isInitialized = false;
        this.userInfo = null;
    }
    /**
     * Gets the singleton instance of SecureAuth.
     * @returns The SecureAuth singleton instance
     */
    static getInstance() {
        if (!SecureAuth.instance) {
            SecureAuth.instance = new SecureAuth();
        }
        return SecureAuth.instance;
    }
    /**
     * Initializes the authentication system by fetching CSRF token and current user data.
     * @returns A promise that resolves when initialization is complete
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isInitialized) {
                return;
            }
            this.isInitialized = true;
            var token = yield this.getCsrfToken();
            if (token) {
                // this.csrfToken = token;
                _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("Fetch token success");
                var vUserData = yield this.getCurrentUser();
                return;
            }
            _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("No token found, feting from API");
            _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("Fetching token from API fail");
        });
    }
    // getCsrfToken(): string {
    // const name = 'XSRF-TOKEN=';
    // const decodedCookie = decodeURIComponent(document.cookie);
    // const cookieArray = decodedCookie.split(';');
    // for (let i = 0; i < cookieArray.length; i++) {
    //     let cookie = cookieArray[i].trim();
    //     if (cookie.indexOf(name) === 0) {
    //         const token = cookie.substring(name.length);
    //         return token;
    //     }
    // }
    // return null;
    // }
    /**
     * Fetches the CSRF token from the API.
     * @returns A promise that resolves with the CSRF token string, or null if failed
     */
    getCsrfToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var vResult = yield $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_TOKEN_GET,
                    type: 'GET',
                    xhrFields: {
                        withCredentials: true
                    },
                    contentType: "application/json;charset=UTF-8",
                    success: (result) => {
                        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("--- fetch token result: ", result.csrfToken);
                        return result.csrfToken;
                    }, error: (e) => {
                        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("---- Generate token fail:", e);
                        return null;
                    }
                });
                _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("Result of get token:", vResult);
                return vResult === null || vResult === void 0 ? void 0 : vResult.csrfToken;
            }
            catch (e) {
                return null;
            }
        });
    }
    /**
     * Gets the current user information.
     * @returns The user information model or null if not authenticated
     */
    getUserInfo() {
        return this.userInfo;
    }
    /**
     * Signs in a user with the provided credentials.
     * @param username - The username for authentication
     * @param password - The password for authentication
     * @returns A promise that resolves with the sign in response or null if failed
     */
    signIn(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var vObject = {
                    username: username,
                    password: password
                };
                const response = yield $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_SIGN_IN,
                    type: 'POST',
                    xhrFields: {
                        withCredentials: true
                    },
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(vObject),
                    success: (result) => __awaiter(this, void 0, void 0, function* () {
                        yield this.getCurrentUser();
                        // MyLogger.logElement("---- csrf token: " + this.csrfToken);
                        return true;
                    }), error(e) {
                        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("---- error: ", e);
                        if (e.responseJSON.result == 'Bad credentials' ||
                            e.responseJSON.result == 'User not found') {
                            _MyUtilities__WEBPACK_IMPORTED_MODULE_4__["default"].showToast('error', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_2__.getLanguage)()]
                                .err_auth_incorrect);
                            $("#input-username").addClass('border-danger')
                                .attr('tooltip', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_2__.getLanguage)()].err_auth_incorrect);
                            $("#input-password").addClass('border-danger')
                                .attr('tooltip', _language__WEBPACK_IMPORTED_MODULE_3__["default"][(0,___WEBPACK_IMPORTED_MODULE_2__.getLanguage)()].err_auth_incorrect);
                            return;
                        }
                        $("#input-username").removeClass('border-danger')
                            .removeAttr('tooltip');
                        $("#input-password").removeClass('border-danger')
                            .removeAttr('tooltip');
                    }
                });
                return response;
            }
            catch (e) {
                return null;
            }
        });
    }
    /**
     * Fetches the current authenticated user's information from the API.
     * @returns A promise that resolves with the user information model or null if failed
     */
    getCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // TODO: Fetch current user
                return yield $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_USER_GET,
                    type: "GET",
                    xhrFields: {
                        withCredentials: true
                    },
                    headers: {
                        'X-XSRF-TOKEN': yield this.getCsrfToken()
                    },
                    success: (result) => {
                        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("Fetch user", result['data']);
                        this.userInfo = result['data'];
                        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("User info:", this.userInfo);
                        return this.userInfo;
                    },
                    error: (err) => {
                        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log('error', "Fetch user: " + err.responseJSON);
                        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("Error:", err);
                        // showToast("error", language[getLanguage()].err);
                        return null;
                    }
                });
            }
            catch (e) {
                return null;
            }
        });
    }
    /**
     * Logs out the current user and resets the authentication state.
     * @returns A promise that resolves when logout is complete
     */
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield $.ajax({
                    url: _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + _constants_APIConstants__WEBPACK_IMPORTED_MODULE_1__.PATH_USER_SIGNOUT,
                    type: "GET",
                    xhrFields: {
                        withCredentials: true
                    },
                });
            }
            catch (_a) {
                // Ignore errors
            }
            finally {
                this.userInfo = null;
                this.isInitialized = false;
                yield this.getCsrfToken();
                this.isInitialized = true;
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecureAuth.getInstance());


/***/ }),

/***/ "./src/utilities/TableUtils.ts":
/*!*************************************!*\
  !*** ./src/utilities/TableUtils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   beginTransform: () => (/* binding */ beginTransform),
/* harmony export */   createPagination: () => (/* binding */ createPagination),
/* harmony export */   setTableHeaders: () => (/* binding */ setTableHeaders)
/* harmony export */ });
/* harmony import */ var _MyLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyLogger */ "./src/utilities/MyLogger.ts");
/* harmony import */ var _SecureAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecureAuth */ "./src/utilities/SecureAuth.ts");
/* harmony import */ var _MyUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyUtilities */ "./src/utilities/MyUtilities.ts");
/* harmony import */ var _constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/DataConstants */ "./src/constants/DataConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * TableUtils - Utility functions for dynamic table generation and management
 *
 * This module provides comprehensive table functionality including:
 * - Dynamic header generation with type safety
 * - Data transformation and formatting
 * - Pagination controls and navigation
 * - Interactive elements (links, checkboxes, custom formatting)
 * - Responsive table behavior
 */
/**
 * Generate table headers dynamically based on model fields
 *
 * Creates a complete table header row with proper styling, data attributes,
 * and interactive features. Automatically includes action and ID columns
 * when appropriate permissions exist.
 *
 * @template TModel - The model type for type-safe field names
 * @param paramFieldNames - Array of model field names to display as columns
 */
function setTableHeaders(...paramFieldNames) {
    return __awaiter(this, void 0, void 0, function* () {
        var vRow = $("<tr>");
        // Add action column if user is authenticated
        if (yield _SecureAuth__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentUser()) {
            $("<th>")
                .text('action')
                .addClass('text-primary-my')
                .css('cursor', 'pointer')
                .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_NAME, 'action')
                .appendTo(vRow);
        }
        // Always include ID column for record identification
        $("<th>")
            .text('id')
            .addClass('text-capitalize')
            .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_NAME, 'id')
            .css('cursor', 'pointer')
            .appendTo(vRow);
        // Generate headers for each specified model field
        paramFieldNames.forEach((fieldName) => {
            // Convert field name to human-readable header format
            var vTableHeaderName = _MyUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].convertName(fieldName, 'tableHeaderName');
            // Convert to ID format for language localization
            var vTableLangText = 'header_' +
                _MyUtilities__WEBPACK_IMPORTED_MODULE_2__["default"].convertName(fieldName, 'tableId')
                    .split('-').join('_');
            $("<th>")
                .text(vTableHeaderName)
                .addClass('text-capitalize')
                .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_LANGUAGE, vTableLangText) // For i18n support
                .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_NAME, fieldName) // Store original field name for sorting/filtering
                .css('cursor', 'pointer') // Indicate clickable for sorting
                .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_TYPE, vTableHeaderName == 'photo' ? 'photo' : '')
                .appendTo(vRow);
            _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].logElement("Table header generated with lang text:", vTableLangText);
        });
        // Append completed header row to table
        $("#table-data thead").append(vRow);
    });
}
/**
 * Apply data transformations to table cells for enhanced display
 *
 * Processes transformation rules to convert raw data into user-friendly formats
 * including links, checkboxes, formatted text, and custom displays.
 * Supports various transformation types for flexible data presentation.
 *
 * @param transformData - Array of transformation configuration objects
 */
function beginTransform(transformData) {
    _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("---- Begin table data Transformation:", transformData);
    // Skip transformation if no data or empty table
    if (transformData == null ||
        transformData.length == 0 ||
        $("#table-data tbody tr").length === 0 ||
        $("#table-data tbody tr").data('item') == null)
        return;
    _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("--- Has data to transform");
    // Process each transformation rule
    transformData === null || transformData === void 0 ? void 0 : transformData.forEach(transform => {
        _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("---- Current transform item:", transform);
        var vColumnName = transform['name'];
        // Find the column position in table headers
        var vPosition = $("#table-data thead").find('th').filter(function () {
            return vColumnName == $(this).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_NAME);
        }).index() + 1;
        // Handle link transformations - disable sorting for link columns
        if (transform['to'] == 'link') {
            $("th").find(`td:nth-child(${vPosition})`)
                .off('click').addClass('text-primary-my').css('cursor', '');
            // $("th").get().forEach(item => {
            //     if (item.innerHTML == MyUtilities.convertName(transform['name'],
            //         'tableHeaderName')) {
            //         $(item).off('click') // Remove click handler
            //         $(item).addClass('text-primary-my')
            //             .css('cursor', ''); // Update styling
            //     }
            // })
        }
        // Apply transformation to each table row
        var vRows = $("#table-data tbody tr").get();
        vRows.forEach(row => {
            var _a;
            var vData = $(row).data('item');
            _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].logElement("----- transform:", vData);
            _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].logElement("----- transform value:", vData[transform['name']]);
            // Skip if no data exists for this field
            if (vData == null || vData[transform['name']] == null) {
                _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("Data not exist");
                return;
            }
            var vCell = $(row).find(`td:nth-child(${vPosition})`);
            vCell.empty(); // Clear existing content
            var vSuffix = transform['suffix'] ? ' ' + transform['suffix'] : '';
            // Apply transformation based on type
            switch (transform['to']) {
                case 'link':
                    // Create navigation link with count badge
                    var vButtonNavigate = $("<a>")
                        .text(transform['fields'] + vSuffix)
                        .addClass('btn btn-outline-primary')
                        .attr('href', `/${transform['pathName']}` +
                        `/detail?${transform['fieldName']}=` +
                        `${$(row).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_ITEM)['id']}`);
                    var vNumber = $("<span>")
                        .addClass('mb-0 bg-primary px-2 rounded-lg text-white ml-2')
                        .text($(row).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_ITEM)[transform['name']] + vSuffix);
                    vButtonNavigate.append(vNumber);
                    $(row).find(`td:nth-child(${vPosition})`)
                        .css('white-space', 'nowrap').append(vButtonNavigate);
                    break;
                case 'checkbox':
                    // Create disabled checkbox showing boolean state
                    var vInput = $("<input>").attr('type', 'checkbox')
                        .attr('disabled', '');
                    var vIsCheck = vData[transform['name']] == 0;
                    _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("---- check status: " + vData[transform['name']]);
                    if (vIsCheck) {
                        vInput.attr('checked', 'true');
                    }
                    $(row).find(`td:nth-child(${vPosition})`).append(vInput);
                    break;
                case 'text':
                    // Display mapped text based on field value
                    // MyLogger.log("--- text extracted: " + transform['name'])
                    // MyLogger.log("--- text extracted: " + vData[transform['name']])
                    // MyLogger.log("--- text extracted: " + transform['fields'])
                    var vLangTextName = 'text_' +
                        window.location.pathname.slice(1) + "_" +
                        $(`#table-data th:nth-of-type(${vPosition})`)
                            .data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_NAME)
                        + "_" + vData[transform['name']];
                    _MyLogger__WEBPACK_IMPORTED_MODULE_0__["default"].log("Table data lang text:", vLangTextName);
                    var vText = $("<span>")
                        .attr(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_ATTR_LANGUAGE, vLangTextName)
                        .html(transform['fields'] ?
                        transform['fields'][vData[transform['name']]] +
                            vSuffix : vData[transform['name']] + vSuffix);
                    $(row).find(`td:nth-child(${vPosition})`)
                        .css('white-space', 'nowrap')
                        .append(vText);
                    // .attr('data-lang-text', model)
                    break;
                default:
                    // Handle object field concatenation with custom separators
                    var vObject = $(row).data(_constants_DataConstants__WEBPACK_IMPORTED_MODULE_3__.DATA_ITEM)[transform['name']];
                    if (vObject == null) {
                        return;
                    }
                    // Extract and join specified fields from object
                    var vValue = (_a = transform['fields']) === null || _a === void 0 ? void 0 : _a.split(',').map((name) => {
                        return vObject[name.trim()];
                    }).join(transform['separator']);
                    $(row).find(`td:nth-child(${vPosition})`)
                        .html(vValue + vSuffix);
            }
        });
    });
}
/**
 * Generate and update pagination controls with current data state
 *
 * Creates comprehensive pagination interface including:
 * - Record count displays (total, current range)
 * - Page navigation controls with proper state management
 * - Navigation button enable/disable logic
 * - Current page indicator
 *
 * @param pageData - Pagination model containing current state
 * @param transformedData - Data transformation rules to apply
 */
function createPagination(pageData, transformedData) {
    // Apply data transformations first
    beginTransform(transformedData);
    // Update total record count display
    $(".span-total-record").html(pageData.totalEntries.toString());
    // Calculate and display maximum pages
    pageData.maxPages = Math.ceil(pageData.totalEntries / pageData.limit);
    $(".span-total-page").html(pageData.maxPages.toString());
    // Update current page input field
    $(".input-page").val(pageData.page + "");
    // Calculate and display current record range
    var vStartRecord = (pageData.page - 1) * pageData.limit + 1;
    var vEndRecord = (vStartRecord - 1) + pageData.pageEntries;
    // Ensure record numbers don't exceed total
    vStartRecord = vStartRecord > pageData.totalEntries ?
        pageData.totalEntries : vStartRecord;
    vEndRecord = vEndRecord > pageData.totalEntries ?
        pageData.totalEntries : vEndRecord;
    $(".span-begin-record").html(vStartRecord.toString());
    $(".span-end-record").html(vEndRecord.toString());
    // Enable/disable previous navigation buttons based on current page
    if (pageData.page == 1) {
        $(".button-to-back").attr('disabled', '');
        $(".button-to-begin").attr('disabled', '');
    }
    else {
        $(".button-to-back").removeAttr('disabled');
        $(".button-to-begin").removeAttr('disabled');
    }
    // Enable/disable next navigation buttons based on current page
    if (pageData.page >= pageData.maxPages) {
        $(".button-to-forward").attr('disabled', '');
        $(".button-to-last").attr('disabled', '');
    }
    else {
        $(".button-to-forward").removeAttr('disabled');
        $(".button-to-last").removeAttr('disabled');
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "admin:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/real_estate_admin/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkadmin"] = self["webpackChunkadmin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map