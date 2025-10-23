!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (e.document) return t(e);
        throw new Error("jQuery requires a window with a document")
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, R) {
    "use strict";

    function v(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }

    function g(e) {
        return null != e && e === e.window
    }

    var t = [], P = Object.getPrototypeOf, a = t.slice, M = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        }, I = t.push, W = t.indexOf, F = {}, $ = F.toString, B = F.hasOwnProperty, z = B.toString, U = z.call(Object),
        m = {}, T = C.document, X = {type: !0, src: !0, nonce: !0, noModule: !0};

    function V(e, t, n) {
        var r, o, i = (n = n || T).createElement("script");
        if (i.text = e, t) for (r in X) (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }

    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? F[$.call(e)] || "object" : typeof e
    }

    var e = "3.6.4", k = function (e, t) {
        return new k.fn.init(e, t)
    };

    function G(e) {
        var t = !!e && "length" in e && e.length, n = h(e);
        return !v(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    k.fn = k.prototype = {
        jquery: e, constructor: k, length: 0, toArray: function () {
            return a.call(this)
        }, get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            e = k.merge(this.constructor(), e);
            return e.prevObject = this, e
        }, each: function (e) {
            return k.each(this, e)
        }, map: function (n) {
            return this.pushStack(k.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(a.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(k.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(k.grep(this, function (e, t) {
                return t % 2
            }))
        }, eq: function (e) {
            var t = this.length, e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: I, sort: t.sort, splice: t.splice
    }, k.extend = k.fn.extend = function () {
        var e, t, n, r, o, i = arguments[0] || {}, s = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof i && (l = i, i = arguments[s] || {}, s++), "object" == typeof i || v(i) || (i = {}), s === a && (i = this, s--); s < a; s++) if (null != (e = arguments[s])) for (t in e) n = e[t], "__proto__" !== t && i !== n && (l && n && (k.isPlainObject(n) || (r = Array.isArray(n))) ? (o = i[t], o = r && !Array.isArray(o) ? [] : r || k.isPlainObject(o) ? o : {}, r = !1, i[t] = k.extend(l, o, n)) : void 0 !== n && (i[t] = n));
        return i
    }, k.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            return !(!e || "[object Object]" !== $.call(e) || (e = P(e)) && ("function" != typeof (e = B.call(e, "constructor") && e.constructor) || z.call(e) !== U))
        }, isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            V(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
            var n, r = 0;
            if (G(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, makeArray: function (e, t) {
            t = t || [];
            return null != e && (G(Object(e)) ? k.merge(t, "string" == typeof e ? [e] : e) : I.call(t, e)), t
        }, inArray: function (e, t, n) {
            return null == t ? -1 : W.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        }, grep: function (e, t, n) {
            for (var r = [], o = 0, i = e.length, s = !n; o < i; o++) !t(e[o], o) != s && r.push(e[o]);
            return r
        }, map: function (e, t, n) {
            var r, o, i = 0, s = [];
            if (G(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o); else for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
            return M(s)
        }, guid: 1, support: m
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        F["[object " + t + "]"] = t.toLowerCase()
    });

    function r(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && k(e).is(n)) break;
            r.push(e)
        }
        return r
    }

    function Y(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }

    var e = function (R) {
            function f(e, t) {
                return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
            }

            function P(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }

            function M() {
                C()
            }

            var e, d, b, i, I, p, W, F, w, l, u, C, T, n, k, h, r, o, g, S = "sizzle" + +new Date, c = R.document, E = 0,
                $ = 0, B = q(), z = q(), U = q(), m = q(), X = function (e, t) {
                    return e === t && (u = !0), 0
                }, V = {}.hasOwnProperty, t = [], G = t.pop, Y = t.push, A = t.push, Q = t.slice, v = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                s = "[\\x20\\t\\r\\n\\f]", a = "(?:\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                K = "\\[" + s + "*(" + a + ")(?:" + s + "*([*^$|!~]?=)" + s + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + a + "))|)" + s + "*\\]",
                Z = ":(" + a + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)",
                ee = new RegExp(s + "+", "g"), y = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$", "g"),
                te = new RegExp("^" + s + "*," + s + "*"), ne = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"),
                re = new RegExp(s + "|>"), oe = new RegExp(Z), ie = new RegExp("^" + a + "$"), x = {
                    ID: new RegExp("^#(" + a + ")"),
                    CLASS: new RegExp("^\\.(" + a + ")"),
                    TAG: new RegExp("^(" + a + "|[*])"),
                    ATTR: new RegExp("^" + K),
                    PSEUDO: new RegExp("^" + Z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + s + "*(even|odd|(([+-]|)(\\d*)n|)" + s + "*(?:([+-]|)" + s + "*(\\d+)|))" + s + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + s + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + s + "*((?:-\\d)?\\d*)" + s + "*\\)|)(?=[^-]|$)", "i")
                }, se = /HTML$/i, ae = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, D = /^[^{]+\{\s*\[native \w/,
                ue = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ce = /[+~]/,
                j = new RegExp("\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\([^\\r\\n\\f])", "g"),
                fe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, de = ve(function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {dir: "parentNode", next: "legend"});
            try {
                A.apply(t = Q.call(c.childNodes), c.childNodes), t[c.childNodes.length].nodeType
            } catch (e) {
                A = {
                    apply: t.length ? function (e, t) {
                        Y.apply(e, Q.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                        e.length = n - 1
                    }
                }
            }

            function N(e, t, n, r) {
                var o, i, s, a, l, u, c = t && t.ownerDocument, f = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                if (!r && (C(t), t = t || T, k)) {
                    if (11 !== f && (a = ue.exec(e))) if (o = a[1]) {
                        if (9 === f) {
                            if (!(u = t.getElementById(o))) return n;
                            if (u.id === o) return n.push(u), n
                        } else if (c && (u = c.getElementById(o)) && g(t, u) && u.id === o) return n.push(u), n
                    } else {
                        if (a[2]) return A.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = a[3]) && d.getElementsByClassName && t.getElementsByClassName) return A.apply(n, t.getElementsByClassName(o)), n
                    }
                    if (d.qsa && !m[e + " "] && (!h || !h.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                        if (u = e, c = t, 1 === f && (re.test(e) || ne.test(e))) {
                            for ((c = ce.test(e) && me(t.parentNode) || t) === t && d.scope || ((s = t.getAttribute("id")) ? s = s.replace(fe, P) : t.setAttribute("id", s = S)), i = (l = p(e)).length; i--;) l[i] = (s ? "#" + s : ":scope") + " " + O(l[i]);
                            u = l.join(",")
                        }
                        try {
                            return A.apply(n, c.querySelectorAll(u)), n
                        } catch (t) {
                            m(e, !0)
                        } finally {
                            s === S && t.removeAttribute("id")
                        }
                    }
                }
                return F(e.replace(y, "$1"), t, n, r)
            }

            function q() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
                }
            }

            function L(e) {
                return e[S] = !0, e
            }

            function H(e) {
                var t = T.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t)
                }
            }

            function pe(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
            }

            function he(e, t) {
                var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function ge(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && de(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function _(s) {
                return L(function (i) {
                    return i = +i, L(function (e, t) {
                        for (var n, r = s([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            for (e in d = N.support = {}, I = N.isXML = function (e) {
                var t = e && e.namespaceURI, e = e && (e.ownerDocument || e).documentElement;
                return !se.test(t || e && e.nodeName || "HTML")
            }, C = N.setDocument = function (e) {
                var e = e ? e.ownerDocument || e : c;
                return e != T && 9 === e.nodeType && e.documentElement && (n = (T = e).documentElement, k = !I(T), c != T && (e = T.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", M, !1) : e.attachEvent && e.attachEvent("onunload", M)), d.scope = H(function (e) {
                    return n.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.cssHas = H(function () {
                    try {
                        return T.querySelector(":has(*,:jqfake)"), 0
                    } catch (e) {
                        return 1
                    }
                }), d.attributes = H(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = H(function (e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = D.test(T.getElementsByClassName), d.getById = H(function (e) {
                    return n.appendChild(e).id = S, !T.getElementsByName || !T.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function (e) {
                    var t = e.replace(j, f);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && k) return (t = t.getElementById(e)) ? [t] : []
                }) : (b.filter.ID = function (e) {
                    var t = e.replace(j, f);
                    return function (e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }, b.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                            for (o = t.getElementsByName(e), r = 0; i = o[r++];) if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [], o = 0, i = t.getElementsByTagName(e);
                    if ("*" !== e) return i;
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e)
                }, r = [], h = [], (d.qsa = D.test(T.querySelectorAll)) && (H(function (e) {
                    var t;
                    n.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && h.push("[*^$]=" + s + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || h.push("\\[" + s + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + S + "-]").length || h.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || h.push("\\[" + s + "*name" + s + "*=" + s + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || h.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || h.push(".#.+[+~]"), e.querySelectorAll("\\\f"), h.push("[\\r\\n\\f]")
                }), H(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && h.push("name" + s + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && h.push(":enabled", ":disabled"), n.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                })), (d.matchesSelector = D.test(o = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && H(function (e) {
                    d.disconnectedMatch = o.call(e, "*"), o.call(e, "[s!='']:x"), r.push("!=", Z)
                }), d.cssHas || h.push(":has"), h = h.length && new RegExp(h.join("|")), r = r.length && new RegExp(r.join("|")), e = D.test(n.compareDocumentPosition), g = e || D.test(n.contains) ? function (e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e, t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, X = e ? function (e, t) {
                    var n;
                    return e === t ? (u = !0, 0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == c && g(c, e) ? -1 : t == T || t.ownerDocument == c && g(c, t) ? 1 : l ? v(l, e) - v(l, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return u = !0, 0;
                    var n, r = 0, o = e.parentNode, i = t.parentNode, s = [e], a = [t];
                    if (!o || !i) return e == T ? -1 : t == T ? 1 : o ? -1 : i ? 1 : l ? v(l, e) - v(l, t) : 0;
                    if (o === i) return he(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? he(s[r], a[r]) : s[r] == c ? -1 : a[r] == c ? 1 : 0
                }), T
            }, N.matches = function (e, t) {
                return N(e, null, null, t)
            }, N.matchesSelector = function (e, t) {
                if (C(e), d.matchesSelector && k && !m[t + " "] && (!r || !r.test(t)) && (!h || !h.test(t))) try {
                    var n = o.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    m(t, !0)
                }
                return 0 < N(t, T, null, [e]).length
            }, N.contains = function (e, t) {
                return (e.ownerDocument || e) != T && C(e), g(e, t)
            }, N.attr = function (e, t) {
                (e.ownerDocument || e) != T && C(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n = n && V.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== n ? n : d.attributes || !k ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, N.escape = function (e) {
                return (e + "").replace(fe, P)
            }, N.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, N.uniqueSort = function (e) {
                var t, n = [], r = 0, o = 0;
                if (u = !d.detectDuplicates, l = !d.sortStable && e.slice(0), e.sort(X), u) {
                    for (; t = e[o++];) t === e[o] && (r = n.push(o));
                    for (; r--;) e.splice(n[r], 1)
                }
                return l = null, e
            }, i = N.getText = function (e) {
                var t, n = "", r = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else for (; t = e[r++];) n += i(t);
                return n
            }, (b = N.selectors = {
                cacheLength: 50,
                createPseudo: L,
                match: x,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(j, f), e[3] = (e[3] || e[4] || e[5] || "").replace(j, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || N.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && N.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return x.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && oe.test(n) && (t = (t = p(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(j, f).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + s + ")" + e + "(" + s + "|$)")) && B(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, n, r) {
                        return function (e) {
                            e = N.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    }, CHILD: function (h, e, t, g, m) {
                        var y = "nth" !== h.slice(0, 3), v = "last" !== h.slice(-4), x = "of-type" === e;
                        return 1 === g && 0 === m ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, o, i, s, a, l, u = y != v ? "nextSibling" : "previousSibling", c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(), d = !n && !x, p = !1;
                            if (c) {
                                if (y) {
                                    for (; u;) {
                                        for (s = e; s = s[u];) if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        l = u = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [v ? c.firstChild : c.lastChild], v && d) {
                                    for (p = (a = (r = (o = (i = (s = c)[S] || (s[S] = {}))[s.uniqueID] || (i[s.uniqueID] = {}))[h] || [])[0] === E && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (p = a = 0, l.pop());) if (1 === s.nodeType && ++p && s === e) {
                                        o[h] = [E, a, p];
                                        break
                                    }
                                } else if (!1 === (p = d ? a = (r = (o = (i = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (i[s.uniqueID] = {}))[h] || [])[0] === E && r[1] : p)) for (; (s = ++a && s && s[u] || (p = a = 0, l.pop())) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++p || (d && ((o = (i = s[S] || (s[S] = {}))[s.uniqueID] || (i[s.uniqueID] = {}))[h] = [E, p]), s !== e));) ;
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    }, PSEUDO: function (e, i) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || N.error("unsupported pseudo: " + e);
                        return s[S] ? s(i) : 1 < s.length ? (t = [e, e, "", i], b.setFilters.hasOwnProperty(e.toLowerCase()) ? L(function (e, t) {
                            for (var n, r = s(e, i), o = r.length; o--;) e[n = v(e, r[o])] = !(t[n] = r[o])
                        }) : function (e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: L(function (e) {
                        var r = [], o = [], a = W(e.replace(y, "$1"));
                        return a[S] ? L(function (e, t, n, r) {
                            for (var o, i = a(e, null, r, []), s = e.length; s--;) (o = i[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, t, n) {
                            return r[0] = e, a(r, null, n, o), r[0] = null, !o.pop()
                        }
                    }), has: L(function (t) {
                        return function (e) {
                            return 0 < N(t, e).length
                        }
                    }), contains: L(function (t) {
                        return t = t.replace(j, f), function (e) {
                            return -1 < (e.textContent || i(e)).indexOf(t)
                        }
                    }), lang: L(function (n) {
                        return ie.test(n || "") || N.error("unsupported lang: " + n), n = n.replace(j, f).toLowerCase(), function (e) {
                            var t;
                            do {
                                if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var t = R.location && R.location.hash;
                        return t && t.slice(1) === e.id
                    }, root: function (e) {
                        return e === n
                    }, focus: function (e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !b.pseudos.empty(e)
                    }, header: function (e) {
                        return le.test(e.nodeName)
                    }, input: function (e) {
                        return ae.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: _(function () {
                        return [0]
                    }), last: _(function (e, t) {
                        return [t - 1]
                    }), eq: _(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }), even: _(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }), odd: _(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }), lt: _(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }), gt: _(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
            for (e in {submit: !0, reset: !0}) b.pseudos[e] = function (n) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);

            function ye() {
            }

            function O(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function ve(s, e, t) {
                var a = e.dir, l = e.next, u = l || a, c = t && "parentNode" === u, f = $++;
                return e.first ? function (e, t, n) {
                    for (; e = e[a];) if (1 === e.nodeType || c) return s(e, t, n);
                    return !1
                } : function (e, t, n) {
                    var r, o, i = [E, f];
                    if (n) {
                        for (; e = e[a];) if ((1 === e.nodeType || c) && s(e, t, n)) return !0
                    } else for (; e = e[a];) if (1 === e.nodeType || c) if (o = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e; else {
                        if ((r = o[u]) && r[0] === E && r[1] === f) return i[2] = r[2];
                        if ((o[u] = i)[2] = s(e, t, n)) return !0
                    }
                    return !1
                }
            }

            function xe(o) {
                return 1 < o.length ? function (e, t, n) {
                    for (var r = o.length; r--;) if (!o[r](e, t, n)) return !1;
                    return !0
                } : o[0]
            }

            function be(e, t, n, r, o) {
                for (var i, s = [], a = 0, l = e.length, u = null != t; a < l; a++) !(i = e[a]) || n && !n(i, r, o) || (s.push(i), u && t.push(a));
                return s
            }

            function we(e) {
                for (var r, t, n, o = e.length, i = b.relative[e[0].type], s = i || b.relative[" "], a = i ? 1 : 0, l = ve(function (e) {
                    return e === r
                }, s, !0), u = ve(function (e) {
                    return -1 < v(r, e)
                }, s, !0), c = [function (e, t, n) {
                    e = !i && (n || t !== w) || ((r = t).nodeType ? l : u)(e, t, n);
                    return r = null, e
                }]; a < o; a++) if (t = b.relative[e[a].type]) c = [ve(xe(c), t)]; else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[S]) {
                        for (n = ++a; n < o && !b.relative[e[n].type]; n++) ;
                        return function e(p, h, g, m, y, t) {
                            return m && !m[S] && (m = e(m)), y && !y[S] && (y = e(y, t)), L(function (e, t, n, r) {
                                var o, i, s, a = [], l = [], u = t.length, c = e || function (e, t, n) {
                                        for (var r = 0, o = t.length; r < o; r++) N(e, t[r], n);
                                        return n
                                    }(h || "*", n.nodeType ? [n] : n, []), f = !p || !e && h ? c : be(c, a, p, n, r),
                                    d = g ? y || (e ? p : u || m) ? [] : t : f;
                                if (g && g(f, d, n, r), m) for (o = be(d, l), m(o, [], n, r), i = o.length; i--;) (s = o[i]) && (d[l[i]] = !(f[l[i]] = s));
                                if (e) {
                                    if (y || p) {
                                        if (y) {
                                            for (o = [], i = d.length; i--;) (s = d[i]) && o.push(f[i] = s);
                                            y(null, d = [], o, r)
                                        }
                                        for (i = d.length; i--;) (s = d[i]) && -1 < (o = y ? v(e, s) : a[i]) && (e[o] = !(t[o] = s))
                                    }
                                } else d = be(d === t ? d.splice(u, d.length) : d), y ? y(null, t, d, r) : A.apply(t, d)
                            })
                        }(1 < a && xe(c), 1 < a && O(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(y, "$1"), t, a < n && we(e.slice(a, n)), n < o && we(e = e.slice(n)), n < o && O(e))
                    }
                    c.push(t)
                }
                return xe(c)
            }

            return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, p = N.tokenize = function (e, t) {
                var n, r, o, i, s, a, l, u = z[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, a = [], l = b.preFilter; s;) {
                    for (i in n && !(r = te.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(o = [])), n = !1, (r = ne.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(y, " ")
                    }), s = s.slice(n.length)), b.filter) !(r = x[i].exec(s)) || l[i] && !(r = l[i](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: i,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? N.error(e) : z(e, a).slice(0)
            }, W = N.compile = function (e, t) {
                var n, m, y, v, x, r, o = [], i = [], s = U[e + " "];
                if (!s) {
                    for (n = (t = t || p(e)).length; n--;) ((s = we(t[n]))[S] ? o : i).push(s);
                    (s = U(e, (v = 0 < (y = o).length, x = 0 < (m = i).length, r = function (e, t, n, r, o) {
                        var i, s, a, l = 0, u = "0", c = e && [], f = [], d = w, p = e || x && b.find.TAG("*", o),
                            h = E += null == d ? 1 : Math.random() || .1, g = p.length;
                        for (o && (w = t == T || t || o); u !== g && null != (i = p[u]); u++) {
                            if (x && i) {
                                for (s = 0, t || i.ownerDocument == T || (C(i), n = !k); a = m[s++];) if (a(i, t || T, n)) {
                                    r.push(i);
                                    break
                                }
                                o && (E = h)
                            }
                            v && ((i = !a && i) && l--, e) && c.push(i)
                        }
                        if (l += u, v && u !== l) {
                            for (s = 0; a = y[s++];) a(c, f, t, n);
                            if (e) {
                                if (0 < l) for (; u--;) c[u] || f[u] || (f[u] = G.call(r));
                                f = be(f)
                            }
                            A.apply(r, f), o && !e && 0 < f.length && 1 < l + y.length && N.uniqueSort(r)
                        }
                        return o && (E = h, w = d), c
                    }, v ? L(r) : r))).selector = e
                }
                return s
            }, F = N.select = function (e, t, n, r) {
                var o, i, s, a, l, u = "function" == typeof e && e, c = !r && p(e = u.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (s = i[0]).type && 9 === t.nodeType && k && b.relative[i[1].type]) {
                        if (!(t = (b.find.ID(s.matches[0].replace(j, f), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(i.shift().value.length)
                    }
                    for (o = x.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o], !b.relative[a = s.type]);) if ((l = b.find[a]) && (r = l(s.matches[0].replace(j, f), ce.test(i[0].type) && me(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = r.length && O(i)) break;
                        return A.apply(n, r), n
                    }
                }
                return (u || W(e, c))(r, t, !k, n, !t || ce.test(e) && me(t.parentNode) || t), n
            }, d.sortStable = S.split("").sort(X).join("") === S, d.detectDuplicates = !!u, C(), d.sortDetached = H(function (e) {
                return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
            }), H(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || pe("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), d.attributes && H(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || pe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), H(function (e) {
                return null == e.getAttribute("disabled")
            }) || pe(J, function (e, t, n) {
                if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }), N
        }(C),
        Q = (k.find = e, k.expr = e.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = e.uniqueSort, k.text = e.getText, k.isXMLDoc = e.isXML, k.contains = e.contains, k.escapeSelector = e.escape, k.expr.match.needsContext);

    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var J = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function K(e, n, r) {
        return v(n) ? k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function (e) {
            return -1 < W.call(n, e) !== r
        }) : k.filter(n, e, r)
    }

    k.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function (e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
                for (t = 0; t < r; t++) if (k.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, o[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(K(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(K(this, e || [], !0))
        }, is: function (e) {
            return !!K(this, "string" == typeof e && Q.test(e) ? k(e) : e || [], !1).length
        }
    });
    var Z, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, te = ((k.fn.init = function (e, t, n) {
            if (e) {
                if (n = n || Z, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (r[1]) {
                    if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), J.test(r[1]) && k.isPlainObject(t)) for (var r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
                } else (n = T.getElementById(r[2])) && (this[0] = n, this.length = 1)
            }
            return this
        }).prototype = k.fn, Z = k(T), /^(?:parents|prev(?:Until|All))/),
        ne = {children: !0, contents: !0, next: !0, prev: !0};

    function re(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    k.fn.extend({
        has: function (e) {
            var t = k(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, o = this.length, i = [], s = "string" != typeof e && k(e);
            if (!Q.test(e)) for (; r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                i.push(n);
                break
            }
            return this.pushStack(1 < i.length ? k.uniqueSort(i) : i)
        }, index: function (e) {
            return e ? "string" == typeof e ? W.call(k(e), this[0]) : W.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function (e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (e) {
            return r(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return r(e, "parentNode", n)
        }, next: function (e) {
            return re(e, "nextSibling")
        }, prev: function (e) {
            return re(e, "previousSibling")
        }, nextAll: function (e) {
            return r(e, "nextSibling")
        }, prevAll: function (e) {
            return r(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return r(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return r(e, "previousSibling", n)
        }, siblings: function (e) {
            return Y((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Y(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && P(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function (r, o) {
        k.fn[r] = function (e, t) {
            var n = k.map(this, o, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (ne[r] || k.uniqueSort(n), te.test(r)) && n.reverse(), this.pushStack(n)
        }
    });
    var S = /[^\x20\t\r\n\f]+/g;

    function c(e) {
        return e
    }

    function oe(e) {
        throw e
    }

    function ie(e, t, n, r) {
        var o;
        try {
            e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    k.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(S) || [], function (e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);

        function o() {
            for (a = a || r.once, s = i = !0; u.length; c = -1) for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && r.stopOnFalse && (c = l.length, t = !1);
            r.memory || (t = !1), i = !1, a && (l = t ? [] : "")
        }

        var i, t, s, a, l = [], u = [], c = -1, f = {
            add: function () {
                return l && (t && !i && (c = l.length - 1, u.push(t)), function n(e) {
                    k.each(e, function (e, t) {
                        v(t) ? r.unique && f.has(t) || l.push(t) : t && t.length && "string" !== h(t) && n(t)
                    })
                }(arguments), t) && !i && o(), this
            }, remove: function () {
                return k.each(arguments, function (e, t) {
                    for (var n; -1 < (n = k.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
                }), this
            }, has: function (e) {
                return e ? -1 < k.inArray(e, l) : 0 < l.length
            }, empty: function () {
                return l = l && [], this
            }, disable: function () {
                return a = u = [], l = t = "", this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return a = u = [], t || i || (l = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i) || o(), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return f
    }, k.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                o = "pending", s = {
                    state: function () {
                        return o
                    }, always: function () {
                        return a.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return s.then(null, e)
                    }, pipe: function () {
                        var o = arguments;
                        return k.Deferred(function (r) {
                            k.each(i, function (e, t) {
                                var n = v(o[t[4]]) && o[t[4]];
                                a[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var l = 0;

                        function u(o, i, s, a) {
                            return function () {
                                function e() {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = s.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? a ? t.call(e, u(l, i, c, a), u(l, i, oe, a)) : (l++, t.call(e, u(l, i, c, a), u(l, i, oe, a), u(l, i, c, i.notifyWith))) : (s !== c && (n = void 0, r = [e]), (a || i.resolveWith)(n, r))
                                    }
                                }

                                var n = this, r = arguments, t = a ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== oe && (n = void 0, r = [e]), i.rejectWith(n, r))
                                    }
                                };
                                o ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return k.Deferred(function (e) {
                            i[0][3].add(u(0, e, v(r) ? r : c, e.notifyWith)), i[1][3].add(u(0, e, v(t) ? t : c)), i[2][3].add(u(0, e, v(n) ? n : oe))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? k.extend(e, s) : s
                    }
                }, a = {};
            return k.each(i, function (e, t) {
                var n = t[2], r = t[5];
                s[t[1]] = n.add, r && n.add(function () {
                    o = r
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        }, when: function (e) {
            function t(t) {
                return function (e) {
                    o[t] = this, i[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, i)
                }
            }

            var n = arguments.length, r = n, o = Array(r), i = a.call(arguments), s = k.Deferred();
            if (n <= 1 && (ie(e, s.done(t(r)).resolve, s.reject, !n), "pending" === s.state() || v(i[r] && i[r].then))) return s.then();
            for (; r--;) ie(i[r], t(r), s.reject);
            return s.promise()
        }
    });
    var se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        ae = (k.Deferred.exceptionHook = function (e, t) {
            C.console && C.console.warn && e && se.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, k.readyException = function (e) {
            C.setTimeout(function () {
                throw e
            })
        }, k.Deferred());

    function le() {
        T.removeEventListener("DOMContentLoaded", le), C.removeEventListener("load", le), k.ready()
    }

    k.fn.ready = function (e) {
        return ae.then(e).catch(function (e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || ae.resolveWith(T, [k])
        }
    }), k.ready.then = ae.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout(k.ready) : (T.addEventListener("DOMContentLoaded", le), C.addEventListener("load", le));

    function f(e, t, n, r, o, i, s) {
        var a = 0, l = e.length, u = null == n;
        if ("object" === h(n)) for (a in o = !0, n) f(e, t, a, n[a], !0, i, s); else if (void 0 !== r && (o = !0, v(r) || (s = !0), t = u ? s ? (t.call(e, r), null) : (u = t, function (e, t, n) {
            return u.call(k(e), n)
        }) : t)) for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
    }

    var ue = /^-ms-/, ce = /-([a-z])/g;

    function fe(e, t) {
        return t.toUpperCase()
    }

    function x(e) {
        return e.replace(ue, "ms-").replace(ce, fe)
    }

    function y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function de() {
        this.expando = k.expando + de.uid++
    }

    de.uid = 1, de.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[x(t)] = n; else for (r in t) o[x(r)] = t[r];
            return o
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][x(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(x) : (t = x(t)) in r ? [t] : t.match(S) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                void 0 !== t && !k.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            e = e[this.expando];
            return void 0 !== e && !k.isEmptyObject(e)
        }
    };
    var b = new de, u = new de, pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, he = /[A-Z]/g;

    function ge(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(he, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : pe.test(o) ? JSON.parse(o) : o)
            } catch (e) {
            }
            u.set(e, t, n)
        } else n = void 0;
        return n
    }

    k.extend({
        hasData: function (e) {
            return u.hasData(e) || b.hasData(e)
        }, data: function (e, t, n) {
            return u.access(e, t, n)
        }, removeData: function (e, t) {
            u.remove(e, t)
        }, _data: function (e, t, n) {
            return b.access(e, t, n)
        }, _removeData: function (e, t) {
            b.remove(e, t)
        }
    }), k.fn.extend({
        data: function (n, e) {
            var t, r, o, i = this[0], s = i && i.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                u.set(this, n)
            }) : f(this, function (e) {
                var t;
                if (i && void 0 === e) return void 0 !== (t = u.get(i, n)) || void 0 !== (t = ge(i, n)) ? t : void 0;
                this.each(function () {
                    u.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = u.get(i), 1 === i.nodeType) && !b.get(i, "hasDataAttrs")) {
                for (t = s.length; t--;) s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = x(r.slice(5)), ge(i, r, o[r]));
                b.set(i, "hasDataAttrs", !0)
            }
            return o
        }, removeData: function (e) {
            return this.each(function () {
                u.remove(this, e)
            })
        }
    }), k.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return r = b.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = b.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t), r = n.length, o = n.shift(), i = k._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
                k.dequeue(e, t)
            }, i)), !r && i && i.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return b.get(e, n) || b.access(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                    b.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                k.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            function n() {
                --o || i.resolveWith(s, [s])
            }

            var r, o = 1, i = k.Deferred(), s = this, a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (r = b.get(s[a], e + "queueHooks")) && r.empty && (o++, r.empty.add(n));
            return n(), i.promise(t)
        }
    });

    function me(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && E(e) && "none" === k.css(e, "display")
    }

    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ye = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        d = ["Top", "Right", "Bottom", "Left"], w = T.documentElement, E = function (e) {
            return k.contains(e.ownerDocument, e)
        }, ve = {composed: !0};
    w.getRootNode && (E = function (e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ve) === e.ownerDocument
    });

    function xe(e, t, n, r) {
        var o, i, s = 20, a = r ? function () {
                return r.cur()
            } : function () {
                return k.css(e, t, "")
            }, l = a(), u = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== u && +l) && ye.exec(k.css(e, t));
        if (c && c[3] !== u) {
            for (u = u || c[3], c = +(l /= 2) || 1; s--;) k.style(e, t, c + u), (1 - i) * (1 - (i = a() / l || .5)) <= 0 && (s = 0), c /= i;
            k.style(e, t, (c *= 2) + u), n = n || []
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r) && (r.unit = u, r.start = c, r.end = o), o
    }

    var be = {};

    function A(e, t) {
        for (var n, r, o, i, s, a, l = [], u = 0, c = e.length; u < c; u++) (r = e[u]).style && (n = r.style.display, t ? ("none" === n && (l[u] = b.get(r, "display") || null, l[u] || (r.style.display = "")), "" === r.style.display && me(r) && (l[u] = (a = i = o = void 0, i = r.ownerDocument, s = r.nodeName, (a = be[s]) || (o = i.body.appendChild(i.createElement(s)), a = k.css(o, "display"), o.parentNode.removeChild(o), be[s] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[u] = "none", b.set(r, "display", n)));
        for (u = 0; u < c; u++) null != l[u] && (e[u].style.display = l[u]);
        return e
    }

    k.fn.extend({
        show: function () {
            return A(this, !0)
        }, hide: function () {
            return A(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                me(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var we = /^(?:checkbox|radio)$/i, Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Te = /^$|^module$|\/(?:java|ecma)script/i,
        n = T.createDocumentFragment().appendChild(T.createElement("div")),
        D = ((i = T.createElement("input")).setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), n.appendChild(i), m.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, n.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, n.innerHTML = "<option></option>", m.option = !!n.lastChild, {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        });

    function j(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && l(e, t) ? k.merge([e], n) : n
    }

    function ke(e, t) {
        for (var n = 0, r = e.length; n < r; n++) b.set(e[n], "globalEval", !t || b.get(t[n], "globalEval"))
    }

    D.tbody = D.tfoot = D.colgroup = D.caption = D.thead, D.th = D.td, m.option || (D.optgroup = D.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Se = /<|&#?\w+;/;

    function Ee(e, t, n, r, o) {
        for (var i, s, a, l, u, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++) if ((i = e[d]) || 0 === i) if ("object" === h(i)) k.merge(f, i.nodeType ? [i] : i); else if (Se.test(i)) {
            for (s = s || c.appendChild(t.createElement("div")), a = (Ce.exec(i) || ["", ""])[1].toLowerCase(), a = D[a] || D._default, s.innerHTML = a[1] + k.htmlPrefilter(i) + a[2], u = a[0]; u--;) s = s.lastChild;
            k.merge(f, s.childNodes), (s = c.firstChild).textContent = ""
        } else f.push(t.createTextNode(i));
        for (c.textContent = "", d = 0; i = f[d++];) if (r && -1 < k.inArray(i, r)) o && o.push(i); else if (l = E(i), s = j(c.appendChild(i), "script"), l && ke(s), n) for (u = 0; i = s[u++];) Te.test(i.type || "") && n.push(i);
        return c
    }

    var Ae = /^([^.]*)(?:\.(.+)|)/;

    function s() {
        return !0
    }

    function p() {
        return !1
    }

    function De(e, t) {
        return e === function () {
            try {
                return T.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function je(e, t, n, r, o, i) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) je(e, a, n, r, t[a], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = p; else if (!o) return e;
        return 1 === i && (s = o, (o = function (e) {
            return k().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = k.guid++)), e.each(function () {
            k.event.add(this, t, o, r, n)
        })
    }

    function Ne(e, o, i) {
        i ? (b.set(e, o, !1), k.event.add(e, o, {
            namespace: !1, handler: function (e) {
                var t, n, r = b.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (r.length) (k.event.special[o] || {}).delegateType && e.stopPropagation(); else if (r = a.call(arguments), b.set(this, o, r), t = i(this, o), this[o](), r !== (n = b.get(this, o)) || t ? b.set(this, o, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (b.set(this, o, {value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
            }
        })) : void 0 === b.get(e, o) && k.event.add(e, o, s)
    }

    k.event = {
        global: {}, add: function (t, e, n, r, o) {
            var i, s, a, l, u, c, f, d, p, h = b.get(t);
            if (y(t)) for (n.handler && (n = (i = n).handler, o = i.selector), o && k.find.matchesSelector(w, o), n.guid || (n.guid = k.guid++), a = (a = h.events) || (h.events = Object.create(null)), s = (s = h.handle) || (h.handle = function (e) {
                return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
            }), l = (e = (e || "").match(S) || [""]).length; l--;) f = p = (d = Ae.exec(e[l]) || [])[1], d = (d[2] || "").split(".").sort(), f && (u = k.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = k.event.special[f] || {}, p = k.extend({
                type: f,
                origType: p,
                data: r,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && k.expr.match.needsContext.test(o),
                namespace: d.join(".")
            }, i), (c = a[f]) || ((c = a[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, r, d, s)) || t.addEventListener && t.addEventListener(f, s), u.add && (u.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), o ? c.splice(c.delegateCount++, 0, p) : c.push(p), k.event.global[f] = !0)
        }, remove: function (e, t, n, r, o) {
            var i, s, a, l, u, c, f, d, p, h, g, m = b.hasData(e) && b.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(S) || [""]).length; u--;) if (p = g = (a = Ae.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                    for (f = k.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || k.removeEvent(e, p, m.handle), delete l[p])
                } else for (p in l) k.event.remove(e, p + t[u], n, r, !0);
                k.isEmptyObject(l) && b.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, o, i, s = new Array(arguments.length), a = k.event.fix(e),
                e = (b.get(this, "events") || Object.create(null))[a.type] || [], l = k.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (i = k.event.handlers.call(this, a, e), t = 0; (r = i[t++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((k.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var n, r, o, i, s, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (i = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? -1 < k(o, this).index(u) : k.find(o, this, null, [u]).length), s[o] && i.push(r);
                i.length && a.push({elem: u, handlers: i})
            }
            return u = this, l < t.length && a.push({elem: u, handlers: t.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: v(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[k.expando] ? e : new k.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && Ne(e, "click", s), !1
                }, trigger: function (e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && Ne(e, "click"), !0
                }, _default: function (e) {
                    e = e.target;
                    return we.test(e.type) && e.click && l(e, "input") && b.get(e, "click") || l(e, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function (e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? s : p, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = s, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = s, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = s, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, k.event.addProp), k.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        k.event.special[t] = {
            setup: function () {
                return Ne(this, t, De), !1
            }, trigger: function () {
                return Ne(this, t), !0
            }, _default: function (e) {
                return b.get(e.target, t)
            }, delegateType: e
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, o) {
        k.event.special[e] = {
            delegateType: o, bindType: o, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), k.fn.extend({
        on: function (e, t, n, r) {
            return je(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return je(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler); else {
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = p), this.each(function () {
                    k.event.remove(this, e, n, t)
                });
                for (o in e) this.off(o, t, e[o])
            }
            return this
        }
    });
    var qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function _e(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, o, i;
        if (1 === t.nodeType) {
            if (b.hasData(e) && (i = b.get(e).events)) for (o in b.remove(t, "handle events"), i) for (n = 0, r = i[o].length; n < r; n++) k.event.add(t, o, i[o][n]);
            u.hasData(e) && (e = u.access(e), e = k.extend({}, e), u.set(t, e))
        }
    }

    function N(n, r, o, i) {
        r = M(r);
        var e, t, s, a, l, u, c = 0, f = n.length, d = f - 1, p = r[0], h = v(p);
        if (h || 1 < f && "string" == typeof p && !m.checkClone && Le.test(p)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), N(t, r, o, i)
        });
        if (f && (t = (e = Ee(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
            for (a = (s = k.map(j(e, "script"), Oe)).length; c < f; c++) l = e, c !== d && (l = k.clone(l, !0, !0), a) && k.merge(s, j(l, "script")), o.call(n[c], l, c);
            if (a) for (u = s[s.length - 1].ownerDocument, k.map(s, Re), c = 0; c < a; c++) l = s[c], Te.test(l.type || "") && !b.access(l, "globalEval") && k.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && !l.noModule && k._evalUrl(l.src, {nonce: l.nonce || l.getAttribute("nonce")}, u) : V(l.textContent.replace(He, ""), l, u))
        }
        return n
    }

    function Me(e, t, n) {
        for (var r, o = t ? k.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || k.cleanData(j(r)), r.parentNode && (n && E(r) && ke(j(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    k.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var r, o, i, s, a, l, u, c = e.cloneNode(!0), f = E(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (s = j(c), r = 0, o = (i = j(e)).length; r < o; r++) a = i[r], "input" === (u = (l = s[r]).nodeName.toLowerCase()) && we.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t) if (n) for (i = i || j(e), s = s || j(c), r = 0, o = i.length; r < o; r++) Pe(i[r], s[r]); else Pe(e, c);
            return 0 < (s = j(c, "script")).length && ke(s, !f && j(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, o = k.event.special, i = 0; void 0 !== (n = e[i]); i++) if (y(n)) {
                if (t = n[b.expando]) {
                    if (t.events) for (r in t.events) o[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                    n[b.expando] = void 0
                }
                n[u.expando] && (n[u.expando] = void 0)
            }
        }
    }), k.fn.extend({
        detach: function (e) {
            return Me(this, e, !0)
        }, remove: function (e) {
            return Me(this, e)
        }, text: function (e) {
            return f(this, function (e) {
                return void 0 === e ? k.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return N(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
            })
        }, prepend: function () {
            return N(this, arguments, function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = _e(this, e)).insertBefore(e, t.firstChild)
            })
        }, before: function () {
            return N(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return N(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(j(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return k.clone(this, e, t)
            })
        }, html: function (e) {
            return f(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !D[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(j(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return N(this, arguments, function (e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(j(this)), t) && t.replaceChild(e, this)
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, s) {
        k.fn[e] = function (e) {
            for (var t, n = [], r = k(e), o = r.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), k(r[i])[s](t), I.apply(n, t.get());
            return this.pushStack(n)
        }
    });

    function Ie(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : C).getComputedStyle(e)
    }

    function We(e, t, n) {
        var r, o = {};
        for (r in t) o[r] = e.style[r], e.style[r] = t[r];
        for (r in n = n.call(e), t) e.style[r] = o[r];
        return n
    }

    var Fe, $e, Be, ze, Ue, Xe, Ve, o, Ge = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"), Ye = /^--/,
        Qe = new RegExp(d.join("|"), "i"), i = "[\\x20\\t\\r\\n\\f]",
        Je = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g");

    function Ke(e, t, n) {
        var r, o = Ye.test(t), i = e.style;
        return (n = n || Ie(e)) && (r = n.getPropertyValue(t) || n[t], "" !== (r = o ? r && (r.replace(Je, "$1") || void 0) : r) || E(e) || (r = k.style(e, t)), !m.pixelBoxStyles()) && Ge.test(r) && Qe.test(t) && (o = i.width, e = i.minWidth, t = i.maxWidth, i.minWidth = i.maxWidth = i.width = r, r = n.width, i.width = o, i.minWidth = e, i.maxWidth = t), void 0 !== r ? r + "" : r
    }

    function Ze(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function et() {
        var e;
        o && (Ve.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", o.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", w.appendChild(Ve).appendChild(o), e = C.getComputedStyle(o), Fe = "1%" !== e.top, Xe = 12 === tt(e.marginLeft), o.style.right = "60%", ze = 36 === tt(e.right), $e = 36 === tt(e.width), o.style.position = "absolute", Be = 12 === tt(o.offsetWidth / 3), w.removeChild(Ve), o = null)
    }

    function tt(e) {
        return Math.round(parseFloat(e))
    }

    Ve = T.createElement("div"), (o = T.createElement("div")).style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === o.style.backgroundClip, k.extend(m, {
        boxSizingReliable: function () {
            return et(), $e
        }, pixelBoxStyles: function () {
            return et(), ze
        }, pixelPosition: function () {
            return et(), Fe
        }, reliableMarginLeft: function () {
            return et(), Xe
        }, scrollboxSize: function () {
            return et(), Be
        }, reliableTrDimensions: function () {
            var e, t, n;
            return null == Ue && (e = T.createElement("table"), t = T.createElement("tr"), n = T.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", w.appendChild(e).appendChild(t).appendChild(n), n = C.getComputedStyle(t), Ue = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, w.removeChild(e)), Ue
        }
    }));
    var nt = ["Webkit", "Moz", "ms"], rt = T.createElement("div").style, ot = {};

    function it(e) {
        return k.cssProps[e] || ot[e] || (e in rt ? e : ot[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;) if ((e = nt[n] + t) in rt) return e
        }(e) || e)
    }

    var st = /^(none|table(?!-c[ea]).+)/, at = {position: "absolute", visibility: "hidden", display: "block"},
        lt = {letterSpacing: "0", fontWeight: "400"};

    function ut(e, t, n) {
        var r = ye.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function ct(e, t, n, r, o, i) {
        var s = "width" === t ? 1 : 0, a = 0, l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += k.css(e, n + d[s], !0, o)), r ? ("content" === n && (l -= k.css(e, "padding" + d[s], !0, o)), "margin" !== n && (l -= k.css(e, "border" + d[s] + "Width", !0, o))) : (l += k.css(e, "padding" + d[s], !0, o), "padding" !== n ? l += k.css(e, "border" + d[s] + "Width", !0, o) : a += k.css(e, "border" + d[s] + "Width", !0, o));
        return !r && 0 <= i && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - a - .5)) || 0), l
    }

    function ft(e, t, n) {
        var r = Ie(e), o = (!m.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), i = o,
            s = Ke(e, t, r), a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ge.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && l(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === k.css(e, "boxSizing", !1, r), i = a in e) && (s = e[a]), (s = parseFloat(s) || 0) + ct(e, t, n || (o ? "border" : "content"), i, r, s) + "px"
    }

    function q(e, t, n, r, o) {
        return new q.prototype.init(e, t, n, r, o)
    }

    k.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (t = Ke(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, s, a = x(t), l = Ye.test(t), u = e.style;
                if (l || (t = it(a)), s = k.cssHooks[t] || k.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : u[t];
                "string" == (i = typeof n) && (o = ye.exec(n)) && o[1] && (n = xe(e, t, o), i = "number"), null != n && n == n && ("number" !== i || l || (n += o && o[3] || (k.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var o, i = x(t);
            return Ye.test(t) || (t = it(i)), "normal" === (o = void 0 === (o = (i = k.cssHooks[t] || k.cssHooks[i]) && "get" in i ? i.get(e, !0, n) : o) ? Ke(e, t, r) : o) && t in lt && (o = lt[t]), ("" === n || n) && (i = parseFloat(o), !0 === n || isFinite(i)) ? i || 0 : o
        }
    }), k.each(["height", "width"], function (e, s) {
        k.cssHooks[s] = {
            get: function (e, t, n) {
                if (t) return !st.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ft(e, s, n) : We(e, at, function () {
                    return ft(e, s, n)
                })
            }, set: function (e, t, n) {
                var r = Ie(e), o = !m.scrollboxSize() && "absolute" === r.position,
                    i = (o || n) && "border-box" === k.css(e, "boxSizing", !1, r), n = n ? ct(e, s, n, i, r) : 0;
                return i && o && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - ct(e, s, "border", !1, r) - .5)), n && (i = ye.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = k.css(e, s)), ut(0, t, n)
            }
        }
    }), k.cssHooks.marginLeft = Ze(m.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({margin: "", padding: "", border: "Width"}, function (o, i) {
        k.cssHooks[o + i] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + d[t] + i] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== o && (k.cssHooks[o + i].set = ut)
    }), k.fn.extend({
        css: function (e, t) {
            return f(this, function (e, t, n) {
                var r, o, i = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), o = t.length; s < o; s++) i[t[s]] = k.css(e, t[s], !1, r);
                    return i
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = q).prototype = {
        constructor: q, init: function (e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (k.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = q.propHooks[this.prop];
            return (e && e.get ? e : q.propHooks._default).get(this)
        }, run: function (e) {
            var t, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : q.propHooks._default).set(this), this
        }
    }).init.prototype = q.prototype, (q.propHooks = {
        _default: {
            get: function (e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = k.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            }, set: function (e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = q.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, k.fx = q.prototype.init, k.fx.step = {};
    var L, dt, pt = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;

    function gt() {
        dt && (!1 === T.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(gt) : C.setTimeout(gt, k.fx.interval), k.fx.tick())
    }

    function mt() {
        return C.setTimeout(function () {
            L = void 0
        }), L = Date.now()
    }

    function yt(e, t) {
        var n, r = 0, o = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = d[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function vt(e, t, n) {
        for (var r, o = (H.tweeners[t] || []).concat(H.tweeners["*"]), i = 0, s = o.length; i < s; i++) if (r = o[i].call(n, t, e)) return r
    }

    function H(o, e, t) {
        var n, i, r, s, a, l, u, c = 0, f = H.prefilters.length, d = k.Deferred().always(function () {
            delete p.elem
        }), p = function () {
            if (i) return !1;
            for (var e = L || mt(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t);
            return d.notifyWith(o, [h, t, e]), t < 1 && r ? e : (r || d.notifyWith(o, [h, 1, 0]), d.resolveWith(o, [h]), !1)
        }, h = d.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: L || mt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                t = k.Tween(o, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(t), t
            },
            stop: function (e) {
                var t = 0, n = e ? h.tweens.length : 0;
                if (!i) {
                    for (i = !0; t < n; t++) h.tweens[t].run(1);
                    e ? (d.notifyWith(o, [h, 1, 0]), d.resolveWith(o, [h, e])) : d.rejectWith(o, [h, e])
                }
                return this
            }
        }), g = h.props, m = g, y = h.opts.specialEasing;
        for (r in m) if (a = y[s = x(r)], l = m[r], Array.isArray(l) && (a = l[1], l = m[r] = l[0]), r !== s && (m[s] = l, delete m[r]), (u = k.cssHooks[s]) && "expand" in u) for (r in l = u.expand(l), delete m[s], l) r in m || (m[r] = l[r], y[r] = a); else y[s] = a;
        for (; c < f; c++) if (n = H.prefilters[c].call(h, o, g, h.opts)) return v(n.stop) && (k._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(g, vt, h), v(h.opts.start) && h.opts.start.call(o, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), k.fx.timer(k.extend(p, {
            elem: o,
            anim: h,
            queue: h.opts.queue
        })), h
    }

    k.Animation = k.extend(H, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return xe(n.elem, e, ye.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, r = 0, o = (e = v(e) ? (t = e, ["*"]) : e.match(S)).length; r < o; r++) n = e[r], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, o, i, s, a, l, u, c = "width" in t || "height" in t, f = this, d = {}, p = e.style,
                h = e.nodeType && me(e), g = b.get(e, "fxshow");
            for (r in n.queue || (null == (s = k._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, k.queue(e, "fx").length || s.empty.fire()
                })
            })), t) if (o = t[r], pt.test(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[r]) continue;
                    h = !0
                }
                d[r] = g && g[r] || k.style(e, r)
            }
            if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = b.get(e, "display")), "none" === (c = k.css(e, "display")) && (u ? c = u : (A([e], !0), u = e.style.display || u, c = k.css(e, "display"), A([e]))), "inline" === c || "inline-block" === c && null != u) && "none" === k.css(e, "float") && (l || (f.done(function () {
                p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block"), n.overflow && (p.overflow = "hidden", f.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, d) l || (g ? "hidden" in g && (h = g.hidden) : g = b.access(e, "fxshow", {display: u}), i && (g.hidden = !h), h && A([e], !0), f.done(function () {
                for (r in h || A([e]), b.remove(e, "fxshow"), d) k.style(e, r, d[r])
            })), l = vt(h ? g[r] : 0, r, f), r in g || (g[r] = l.start, h && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? H.prefilters.unshift(e) : H.prefilters.push(e)
        }
    }), k.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            v(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(me).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            function o() {
                var e = H(this, k.extend({}, t), s);
                (i || b.get(this, "finish")) && e.stop(!0)
            }

            var i = k.isEmptyObject(t), s = k.speed(e, n, r);
            return o.finish = o, i || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (o, e, i) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(i)
            }

            return "string" != typeof o && (i = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function () {
                var e = !0, t = null != o && o + "queueHooks", n = k.timers, r = b.get(this);
                if (t) r[t] && r[t].stop && s(r[t]); else for (t in r) r[t] && r[t].stop && ht.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
                !e && i || k.dequeue(this, o)
            })
        }, finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e, t = b.get(this), n = t[s + "queue"], r = t[s + "queueHooks"], o = k.timers, i = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function (e, r) {
        var o = k.fn[r];
        k.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(yt(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: yt("show"),
        slideUp: yt("hide"),
        slideToggle: yt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        k.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function () {
        var e, t = 0, n = k.timers;
        for (L = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), L = void 0
    }, k.fx.timer = function (e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function () {
        dt || (dt = !0, gt())
    }, k.fx.stop = function () {
        dt = null
    }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (r, e) {
        return r = k.fx && k.fx.speeds[r] || r, this.queue(e = e || "fx", function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, n = T.createElement("input"), e = T.createElement("select").appendChild(T.createElement("option")), n.type = "checkbox", m.checkOn = "" !== n.value, m.optSelected = e.selected, (n = T.createElement("input")).value = "t", n.type = "radio", m.radioValue = "t" === n.value;
    var xt, bt = k.expr.attrHandle, wt = (k.fn.extend({
        attr: function (e, t) {
            return f(this, k.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function (e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === i && k.isXMLDoc(e) || (o = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? xt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (r = o.get(e, t))) && null == (r = k.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    var n;
                    if (!m.radioValue && "radio" === t && l(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, o = t && t.match(S);
            if (o && 1 === e.nodeType) for (; n = o[r++];) e.removeAttribute(n)
        }
    }), xt = {
        set: function (e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var s = bt[t] || k.find.attr;
        bt[t] = function (e, t, n) {
            var r, o, i = t.toLowerCase();
            return n || (o = bt[i], bt[i] = r, r = null != s(e, t, n) ? i : null, bt[i] = o), r
        }
    }), /^(?:input|select|textarea|button)$/i), Ct = /^(?:a|area)$/i;

    function _(e) {
        return (e.match(S) || []).join(" ")
    }

    function O(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Tt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(S) || []
    }

    k.fn.extend({
        prop: function (e, t) {
            return f(this, k.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function (e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && k.isXMLDoc(e) || (t = k.propFix[t] || t, o = k.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), m.optSelected || (k.propHooks.selected = {
        get: function (e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function (t) {
            var e, n, r, o, i, s;
            return v(t) ? this.each(function (e) {
                k(this).addClass(t.call(this, e, O(this)))
            }) : (e = Tt(t)).length ? this.each(function () {
                if (r = O(this), n = 1 === this.nodeType && " " + _(r) + " ") {
                    for (i = 0; i < e.length; i++) o = e[i], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    s = _(n), r !== s && this.setAttribute("class", s)
                }
            }) : this
        }, removeClass: function (t) {
            var e, n, r, o, i, s;
            return v(t) ? this.each(function (e) {
                k(this).removeClass(t.call(this, e, O(this)))
            }) : arguments.length ? (e = Tt(t)).length ? this.each(function () {
                if (r = O(this), n = 1 === this.nodeType && " " + _(r) + " ") {
                    for (i = 0; i < e.length; i++) for (o = e[i]; -1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                    s = _(n), r !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        }, toggleClass: function (t, n) {
            var e, r, o, i, s = typeof t, a = "string" == s || Array.isArray(t);
            return v(t) ? this.each(function (e) {
                k(this).toggleClass(t.call(this, e, O(this), n), n)
            }) : "boolean" == typeof n && a ? n ? this.addClass(t) : this.removeClass(t) : (e = Tt(t), this.each(function () {
                if (a) for (i = k(this), o = 0; o < e.length; o++) r = e[o], i.hasClass(r) ? i.removeClass(r) : i.addClass(r); else void 0 !== t && "boolean" != s || ((r = O(this)) && b.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", !r && !1 !== t && b.get(this, "__className__") || ""))
            }))
        }, hasClass: function (e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++];) if (1 === t.nodeType && -1 < (" " + _(O(t)) + " ").indexOf(r)) return !0;
            return !1
        }
    });

    function kt(e) {
        e.stopPropagation()
    }

    var St = /\r/g, Et = (k.fn.extend({
        val: function (t) {
            var n, e, r, o = this[0];
            return arguments.length ? (r = v(t), this.each(function (e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, k(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = k.map(e, function (e) {
                    return null == e ? "" : e + ""
                })), (n = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : _(k.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n = e.options, r = e.selectedIndex, o = "select-one" === e.type, i = o ? null : [], s = o ? r + 1 : n.length, a = r < 0 ? s : o ? r : 0; a < s; a++) if (((t = n[a]).selected || a === r) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                        if (t = k(t).val(), o) return t;
                        i.push(t)
                    }
                    return i
                }, set: function (e, t) {
                    for (var n, r, o = e.options, i = k.makeArray(t), s = o.length; s--;) ((r = o[s]).selected = -1 < k.inArray(k.valHooks.option.get(r), i)) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, m.checkOn || (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), m.focusin = "onfocusin" in C, /^(?:focusinfocus|focusoutblur)$/), At = (k.extend(k.event, {
        trigger: function (e, t, n, r) {
            var o, i, s, a, l, u, c, f = [n || T], d = B.call(e, "type") ? e.type : e,
                p = B.call(e, "namespace") ? e.namespace.split(".") : [], h = c = i = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Et.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), a = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), u = k.event.special[d] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !g(n)) {
                    for (s = u.delegateType || d, Et.test(s + d) || (h = h.parentNode); h; h = h.parentNode) f.push(h), i = h;
                    i === (n.ownerDocument || T) && f.push(i.defaultView || i.parentWindow || C)
                }
                for (o = 0; (h = f[o++]) && !e.isPropagationStopped();) c = h, e.type = 1 < o ? s : u.bindType || d, (l = (b.get(h, "events") || Object.create(null))[e.type] && b.get(h, "handle")) && l.apply(h, t), (l = a && h[a]) && l.apply && y(h) && (e.result = l.apply(h, t), !1 === e.result) && e.preventDefault();
                return e.type = d, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !y(n) || a && v(n[d]) && !g(n) && ((i = n[a]) && (n[a] = null), k.event.triggered = d, e.isPropagationStopped() && c.addEventListener(d, kt), n[d](), e.isPropagationStopped() && c.removeEventListener(d, kt), k.event.triggered = void 0, i) && (n[a] = i), e.result
            }
        }, simulate: function (e, t, n) {
            n = k.extend(new k.Event, n, {type: e, isSimulated: !0});
            k.event.trigger(n, null, t)
        }
    }), k.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                k.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), m.focusin || k.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        function o(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        }

        k.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this, t = b.access(e, r);
                t || e.addEventListener(n, o, !0), b.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, t = b.access(e, r) - 1;
                t ? b.access(e, r, t) : (e.removeEventListener(n, o, !0), b.remove(e, r))
            }
        }
    }), C.location), Dt = {guid: Date.now()}, jt = /\?/, Nt = (k.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || k.error("Invalid XML: " + (n ? k.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    }, /\[\]$/), qt = /\r?\n/g, Lt = /^(?:submit|button|image|reset|file)$/i, Ht = /^(?:input|select|textarea|keygen)/i;
    k.param = function (e, t) {
        function n(e, t) {
            t = v(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }

        var r, o = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
            n(this.name, this.value)
        }); else for (r in e) !function n(r, e, o, i) {
            if (Array.isArray(e)) k.each(e, function (e, t) {
                o || Nt.test(r) ? i(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
            }); else if (o || "object" !== h(e)) i(r, e); else for (var t in e) n(r + "[" + t + "]", e[t], o, i)
        }(r, e[r], t, n);
        return o.join("&")
    }, k.fn.extend({
        serialize: function () {
            return k.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && Ht.test(this.nodeName) && !Lt.test(e) && (this.checked || !we.test(e))
            }).map(function (e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                    return {name: t.name, value: e.replace(qt, "\r\n")}
                }) : {name: t.name, value: n.replace(qt, "\r\n")}
            }).get()
        }
    });
    var _t = /%20/g, Ot = /#.*$/, Rt = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Mt = /^(?:GET|HEAD)$/,
        It = /^\/\//, Wt = {}, Ft = {}, $t = "*/".concat("*"), Bt = T.createElement("a");

    function zt(i) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, o = e.toLowerCase().match(S) || [];
            if (v(t)) for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
        }
    }

    function Ut(t, r, o, i) {
        var s = {}, a = t === Ft;

        function l(e) {
            var n;
            return s[e] = !0, k.each(t[e] || [], function (e, t) {
                t = t(r, o, i);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (r.dataTypes.unshift(t), l(t), !1)
            }), n
        }

        return l(r.dataTypes[0]) || !s["*"] && l("*")
    }

    function Xt(e, t) {
        var n, r, o = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r = r || {})[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }

    Bt.href = At.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Xt(Xt(e, k.ajaxSettings), t) : Xt(k.ajaxSettings, e)
        },
        ajaxPrefilter: zt(Wt),
        ajaxTransport: zt(Ft),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0);
            var l, u, c, n, f, d, p, r, o, h = k.ajaxSetup({}, t = t || {}), g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? k(g) : k.event, y = k.Deferred(),
                v = k.Callbacks("once memory"), x = h.statusCode || {}, i = {}, s = {}, a = "canceled", b = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (d) {
                            if (!n) for (n = {}; t = Pt.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return d ? c : null
                    }, setRequestHeader: function (e, t) {
                        return null == d && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, i[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == d && (h.mimeType = e), this
                    }, statusCode: function (e) {
                        if (e) if (d) b.always(e[b.status]); else for (var t in e) x[t] = [x[t], e[t]];
                        return this
                    }, abort: function (e) {
                        e = e || a;
                        return l && l.abort(e), w(0, e), this
                    }
                };
            if (y.promise(b), h.url = ((e || h.url || At.href) + "").replace(It, At.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(S) || [""], null == h.crossDomain) {
                o = T.createElement("a");
                try {
                    o.href = h.url, o.href = o.href, h.crossDomain = Bt.protocol + "//" + Bt.host != o.protocol + "//" + o.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)), Ut(Wt, h, t, b), !d) {
                for (r in (p = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), u = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(_t, "+")) : (o = h.url.slice(u.length), h.data && (h.processData || "string" == typeof h.data) && (u += (jt.test(u) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (u = u.replace(Rt, "$1"), o = (jt.test(u) ? "&" : "?") + "_=" + Dt.guid++ + o), h.url = u + o), h.ifModified && (k.lastModified[u] && b.setRequestHeader("If-Modified-Since", k.lastModified[u]), k.etag[u]) && b.setRequestHeader("If-None-Match", k.etag[u]), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]), h.headers) b.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || d)) return b.abort();
                if (a = "abort", v.add(h.complete), b.done(h.success), b.fail(h.error), l = Ut(Ft, h, t, b)) {
                    if (b.readyState = 1, p && m.trigger("ajaxSend", [b, h]), d) return b;
                    h.async && 0 < h.timeout && (f = C.setTimeout(function () {
                        b.abort("timeout")
                    }, h.timeout));
                    try {
                        d = !1, l.send(i, w)
                    } catch (e) {
                        if (d) throw e;
                        w(-1, e)
                    }
                } else w(-1, "No Transport")
            }
            return b;

            function w(e, t, n, r) {
                var o, i, s, a = t;
                d || (d = !0, f && C.clearTimeout(f), l = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var r, o, i, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (o in a) if (a[o] && a[o].test(r)) {
                        l.unshift(o);
                        break
                    }
                    if (l[0] in n) i = l[0]; else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                i = o;
                                break
                            }
                            s = s || o
                        }
                        i = i || s
                    }
                    if (i) return i !== l[0] && l.unshift(i), n[i]
                }(h, b, n)), !r && -1 < k.inArray("script", h.dataTypes) && k.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {
                }), s = function (e, t, n, r) {
                    var o, i, s, a, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (i = c.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift()) if ("*" === i) i = l; else if ("*" !== l && l !== i) {
                        if (!(s = u[l + " " + i] || u["* " + i])) for (o in u) if ((a = o.split(" "))[1] === i && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === s ? s = u[o] : !0 !== u[o] && (i = a[0], c.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t)
                        } catch (e) {
                            return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + i}
                        }
                    }
                    return {state: "success", data: t}
                }(h, s, b, r), r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (k.lastModified[u] = n), n = b.getResponseHeader("etag")) && (k.etag[u] = n), 204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, r = !(i = s.error))) : (i = a, !e && a || (a = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || a) + "", r ? y.resolveWith(g, [o, a, b]) : y.rejectWith(g, [b, a, i]), b.statusCode(x), x = void 0, p && m.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? o : i]), v.fireWith(g, [b, a]), p && (m.trigger("ajaxComplete", [b, h]), --k.active || k.event.trigger("ajaxStop")))
            }
        },
        getJSON: function (e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function (e, o) {
        k[o] = function (e, t, n, r) {
            return v(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: o,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k.ajaxPrefilter(function (e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), k._evalUrl = function (e, t, n) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                k.globalEval(e, t, n)
            }
        })
    }, k.fn.extend({
        wrapAll: function (e) {
            return this[0] && (v(e) && (e = e.call(this[0])), e = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return v(n) ? this.each(function (e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = k(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = v(t);
            return this.each(function (e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function (e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var Vt = {0: 200, 1223: 204}, Gt = k.ajaxSettings.xhr();
    m.cors = !!Gt && "withCredentials" in Gt, m.ajax = Gt = !!Gt, k.ajaxTransport(function (o) {
        var i, s;
        if (m.cors || Gt && !o.crossDomain) return {
            send: function (e, t) {
                var n, r = o.xhr();
                if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields) for (n in o.xhrFields) r[n] = o.xhrFields[n];
                for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                i = function (e) {
                    return function () {
                        i && (i = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Vt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = i(), s = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        i && s()
                    })
                }, i = i("abort");
                try {
                    r.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (i) throw e
                }
            }, abort: function () {
                i && i()
            }
        }
    }), k.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function (n) {
        var r, o;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function (e) {
                    r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), T.head.appendChild(r[0])
            }, abort: function () {
                o && o()
            }
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/, Jt = (k.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Yt.pop() || k.expando + "_" + Dt.guid++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, o, i,
            s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Qt, "$1" + r) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return i || k.error(r + " was not called"), i[0]
        }, e.dataTypes[0] = "json", o = C[r], C[r] = function () {
            i = arguments
        }, n.always(function () {
            void 0 === o ? k(C).removeProp(r) : C[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Yt.push(r)), i && v(o) && o(i[0]), i = o = void 0
        }), "script"
    }), m.createHTMLDocument = ((i = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === i.childNodes.length), k.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(r)) : t = T), r = !n && [], (n = J.exec(e)) ? [t.createElement(n[1])] : (n = Ee([e], t, r), r && r.length && k(r).remove(), k.merge([], n.childNodes)));
        var r
    }, k.fn.load = function (e, t, n) {
        var r, o, i, s = this, a = e.indexOf(" ");
        return -1 < a && (r = _(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && k.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, function (e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function (e, t, n) {
            var r, o, i, s, a = k.css(e, "position"), l = k(e), u = {};
            "static" === a && (e.style.position = "relative"), i = l.offset(), r = k.css(e, "top"), s = k.css(e, "left"), a = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(r) || 0, parseFloat(s) || 0), null != (t = v(t) ? t.call(e, n, k.extend({}, i)) : t).top && (u.top = t.top - i.top + o), null != t.left && (u.left = t.left - i.left + a), "using" in t ? t.using.call(e, u) : l.css(u)
        }
    }, k.fn.extend({
        offset: function (t) {
            var e, n;
            return arguments.length ? void 0 === t ? this : this.each(function (e) {
                k.offset.setOffset(this, t, e)
            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], o = {top: 0, left: 0};
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = k(e).offset()).top += k.css(e, "borderTopWidth", !0), o.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - k.css(r, "marginTop", !0),
                    left: t.left - o.left - k.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || w
            })
        }
    }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, o) {
        var i = "pageYOffset" === o;
        k.fn[t] = function (e) {
            return f(this, function (e, t, n) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[o] : e[t];
                r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function (e, n) {
        k.cssHooks[n] = Ze(m.pixelPosition, function (e, t) {
            if (t) return t = Ke(e, n), Ge.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({Height: "height", Width: "width"}, function (s, a) {
        k.each({padding: "inner" + s, content: a, "": "outer" + s}, function (r, i) {
            k.fn[i] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    o = r || (!0 === e || !0 === t ? "margin" : "border");
                return f(this, function (e, t, n) {
                    var r;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? k.css(e, t, o) : k.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        k.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), k.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        k.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g), Kt = (k.proxy = function (e, t) {
        var n, r;
        if ("string" == typeof t && (r = e[t], t = e, e = r), v(e)) return n = a.call(arguments, 2), (r = function () {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, r
    }, k.holdReady = function (e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = l, k.isFunction = v, k.isWindow = g, k.camelCase = x, k.type = h, k.now = Date.now, k.isNumeric = function (e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, k.trim = function (e) {
        return null == e ? "" : (e + "").replace(Jt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return k
    }), C.jQuery), Zt = C.$;
    return k.noConflict = function (e) {
        return C.$ === k && (C.$ = Zt), e && C.jQuery === k && (C.jQuery = Kt), k
    }, void 0 === R && (C.jQuery = C.$ = k), k
}), function (o) {
    o.fn.niceSelect = function (e) {
        return "string" == typeof e ? "update" == e ? this.each(function () {
            var e = o(this), t = o(this).next(".nice-select"), n = t.hasClass("open");
            t.length && (t.remove(), r(e), n) && e.next().trigger("click")
        }) : "destroy" == e ? (this.each(function () {
            var e = o(this), t = o(this).next(".nice-select");
            t.length && (t.remove(), e.css("display", ""))
        }), 0 == o(".nice-select").length && o(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.') : (this.hide(), this.each(function () {
            var e = o(this);
            e.next().hasClass("nice-select") || r(e)
        }), o(document).off(".nice_select"), o(document).on("click.nice_select", ".nice-select", function (e) {
            var t = o(this);
            o(".nice-select").not(t).removeClass("open"), t.toggleClass("open"), t.hasClass("open") ? (t.find(".option"), t.find(".focus").removeClass("focus"), t.find(".selected").addClass("focus")) : t.focus()
        }), o(document).on("click.nice_select", function (e) {
            0 === o(e.target).closest(".nice-select").length && o(".nice-select").removeClass("open").find(".option")
        }), o(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (e) {
            var t = o(this), n = t.closest(".nice-select"),
                r = (n.find(".selected").removeClass("selected"), t.addClass("selected"), t.data("display") || t.text());
            n.find(".current").text(r), n.find("span").removeClass(), n.find("span").addClass("current"), n.find(".current").addClass(t.attr("class")).removeClass("option"), n.prev("select").val(t.data("value")).trigger("click"), n.toggleClass("open")
        }), o(document).on("keydown.nice_select", ".nice-select", function (e) {
            var t, n = o(this), r = o(n.find(".focus") || n.find(".list .option.selected"));
            if (32 == e.keyCode || 13 == e.keyCode) return (n.hasClass("open") ? r : n).trigger("click"), !1;
            if (40 == e.keyCode) return n.hasClass("open") ? 0 < (t = r.nextAll(".option:not(.disabled)").first()).length && (n.find(".focus").removeClass("focus"), t.addClass("focus")) : n.trigger("click"), !1;
            if (38 == e.keyCode) return n.hasClass("open") ? 0 < (t = r.prevAll(".option:not(.disabled)").first()).length && (n.find(".focus").removeClass("focus"), t.addClass("focus")) : n.trigger("click"), !1;
            if (27 == e.keyCode) n.hasClass("open") && n.trigger("click"); else if (9 == e.keyCode && n.hasClass("open")) return !1
        }), (e = document.createElement("a").style).cssText = "pointer-events:auto", "auto" !== e.pointerEvents && o("html").addClass("no-csspointerevents")), this;

        function r(e) {
            e.after(o("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var r = e.next(), t = e.find("option"), e = e.find("option:selected");
            r.find(".current").html(e.data("display") || e.html()), r.find("span").removeClass(), r.find("span").addClass("current"), r.find(".current").addClass(e.attr("class")), t.each(function (e) {
                var t = o(this), n = t.data("display");
                r.find("ul").append(o("<li></li>").attr("data-value", t.val()).attr("data-display", n || null).addClass(t.attr("class")).addClass("option" + (t.is(":selected") ? " selected" : "") + (t.is(":disabled") ? " disabled" : "")).html(t.html()))
            })
        }
    }
}(jQuery), document.addEventListener("DOMContentLoaded", function () {
    if ($(".n-select").niceSelect(), window.innerWidth < 1e3) {
        console.log("ok");
        const r = document.querySelector(".header__burger"), o = document.querySelector(".mobile-menu");
        var e = document.querySelector(".sidebar");
        o.querySelector(".mobile-menu__inner").append(e), r.addEventListener("click", () => {
            r.classList.toggle("menu-close"), o.classList.toggle("active")
        })
    }
    if (document.querySelector("#anketPhoto")) {
        const i = document.querySelector(".anket__main-photo-img");
        i.setAttribute("src", i.getAttribute("data-placeholder")), document.querySelector("#anketPhoto").addEventListener("change", e => {
            var e = e.target, t = i, n = document.querySelector(".anket__main-photo-delete");
            if (e.files && e.files[0]) {
                const r = new FileReader;
                r.onload = function (e) {
                    n.classList.add("active"), t.setAttribute("src", e.target.result)
                }, r.readAsDataURL(e.files[0]), n.addEventListener("click", e => {
                    e.preventDefault(), r.result = "", n.classList.remove("active"), t.setAttribute("src", t.getAttribute("data-placeholder"))
                })
            }
        })
    }
    if (document.querySelector(".anket__photos")) {
        const s = document.querySelectorAll(".anket__photos-titles-item"),
            a = document.querySelectorAll(".anket__photos-content-item");
        e = document.querySelectorAll(".anket__photos-content-input input");
        document.querySelector(".anket__photos-item");
        console.log(e), s.forEach((e, t) => {
            e.addEventListener("click", () => {
                a.forEach((e, t) => {
                    e.classList.remove("active"), s[t].classList.remove("active")
                }), console.log(a[t]), e.classList.add("active"), a[t].classList.add("active")
            })
        }), e.forEach((i, e) => {
            i.addEventListener("change", e => {
                let n = [];
                for (let t = 0; t < e.target.files.length; t++) {
                    var r = new FileReader;
                    const o = document.createElement("div");
                    o.classList.add("anket__photos-content-item-item"), o.innerHTML = `
						<div class="anket__photos-content-item-item-delete"></div>
						<img src="" />
					`, console.log(e.target.parentElement.parentElement), e.target.parentElement.parentElement.append(o), r.onload = function (e) {
                        o.querySelector("img").setAttribute("src", e.target.result), n.push(i.files[t])
                    }, o.querySelector(".anket__photos-content-item-item-delete").addEventListener("click", e => {
                        e.preventDefault(), o.remove()
                    }), console.log(i.files[t]), r.readAsDataURL(i.files[t])
                }
                console.log(i.value)
            })
        })
    }
    var t;

    function n(e, t) {
        t.checked ? (e.classList.remove("selected"), t.classList.remove("active")) : (e.classList.add("selected"), t.classList.add("active"))
    }

    if (window.innerWidth <= 992 && document.querySelector(".anket__services-list") && (e = document.querySelector(".anket__info-sidebar-additom"), t = document.querySelector(".anket__info-sidebar-exit"), document.querySelector(".anket__sidebar-adapt--1").append(e), document.querySelector(".anket__sidebar-adapt--2").append(t)), document.querySelector(".ankets__item")) {
        const l = document.querySelectorAll(".ankets__item"), u = document.querySelector("#checkAll");
        u.addEventListener("change", () => {
            l.forEach(e => {
                u.checked ? e.querySelector(".ankets__item-select input").checked = !1 : e.querySelector(".ankets__item-select input").checked = !0, n(e, e.querySelector(".ankets__item-select input"))
            })
        }), l.forEach(e => {
            e.querySelector(".ankets__item-select").addEventListener("click", () => {
                console.log(), n(e, e.querySelector(".ankets__item-select input"))
            })
        })
    }
    if (document.querySelector("#anketMap")) {
        console.log("ok");
        const c = document.querySelectorAll("#anketCity, #anketMetro, #anketRegion");
        $("#anketCity").niceSelect("destroy"), $("#anketMetro").niceSelect("destroy"), $("#anketRegion").niceSelect("destroy");
        let t = [];
        ymaps.ready(() => {
            const n = new ymaps.Map("anketMap", {center: [55.753994, 37.622093], zoom: 9});
            c.forEach(e => {
                e.addEventListener("change", e => {
                    switch (console.log(e.target.getAttribute("id")), e.target.getAttribute("id")) {
                        case"anketCity":
                            t[0] = "город " + e.target.value;
                            break;
                        case"anketMetro":
                            t[1] = "станция метро " + e.target.value;
                            break;
                        case"anketRegion":
                            t[2] = "регион " + e.target.value
                    }
                    console.log(c.length), console.log(t.length), c.length === t.length && ymaps.geocode(t.join(", "), {result: 1}).then(e => {
                        console.log(e);
                        var e = e.geoObjects.get(0), t = (e.geometry.getCoordinates(), e.properties.get("boundedBy"));
                        e.options.set("preset", "islands#darkBlueDotIconWithCaption"), e.properties.set("iconCaption", e.getAddressLine()), n.geoObjects.add(e), n.setBounds(t, {checkZoomRange: !0})
                    })
                })
            })
        })
    }
});

function deleteImg(object){

    var id = $(object).attr('data-id');

    $.ajax({
        type: 'POST',
        url: '/cabinet/image/delete',
        data: 'id=' +id,
        async:false,
        dataType: "html",
        cache: false,
        success: function (data){

            $(object).closest('.anket__photos-content-item-item').remove();

        },

    })

}function delete_post(object){

    var id = $(object).attr('data-id');

    var url ='/cabinet/post/' + id;

    $.ajax({
        type: 'DELETE',
        url: url,
        async:false,
        dataType: "html",
        cache: false,
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        success: function (data){

            $(object).closest('.ankets__item').remove();

        },

    })

}

function publication(object){

    var id = $(object).attr('data-id');

    $.ajax({
        type: 'POST',
        url: '/cabinet/post/publication',
        data: 'id=' +id,
        async:false,
        dataType: "html",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        cache: false,
        success: function (data){

            $(object).html(data);

        },

    })

}

function updateAvatar(object){
    var file_data = $(object).prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);
    form_data.append('id', $(object).attr('data-id'));
    $.ajax({
        url: '/cabinet/image/add', // ваш URL для обработки
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        data: form_data,
        type: 'post',
        success: function(response){
            $('#photo-'+$(object).attr('data-id')).attr('src', response)
        },
        error: function(response){
            alert('Error:');
        }
    });
}

function deleteVideo(object){

    var id = $(object).attr('data-id');

    var type = 'video';

    $.ajax({
        type: 'POST',
        url: '/cabinet/image/delete',
        data: 'id=' +id + '&type=' + type,
        async:false,
        dataType: "html",
        cache: false,
        success: function (data){

            $(object).closest('.anket__photos-content-item-item').remove();

        },

    })

}

function setSum(object){

    var sum = $(object).attr('data-sum');

    $('#balanceReplCur').val(sum);

}

function start_all(object){

    $.ajax({
        type: 'POST',
        url: '/cabinet/post/publication/all',
        async:false,
        dataType: "html",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        cache: false,
        success: function (data){

            $(object).html('Готово');

        },

    })
}
function stop_all(object){

    $.ajax({
        type: 'POST',
        url: '/cabinet/post/publication/all/stop',
        async:false,
        dataType: "html",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        cache: false,
        success: function (data){

            $(object).html('Готово');

        },

    })
}

function set_all_selected(){

    $(".action-check").each(function () {
        $(this).prop("checked", !$(this).prop("checked"));
    });

    toggleSelectState();

}

$("#update_tarif").change(function () {

    let selectedTarif = $(this).val(); // Получаем выбранное значение из select
    let selectedIds = []; // Массив для ID отмеченных чекбоксов

    $(".action-check:checked").each(function () {
        let postId = $(this).data("id");
        selectedIds.push($(this).data("id")); // Собираем data-id чекбоксов
        $("select[data-id='" + postId + "']").val(selectedTarif);
        $(this).prop("checked", !$(this).prop("checked"));
    });

    toggleSelectState();

    if (selectedIds.length === 0) {
        alert("Выберите хотя бы один элемент!");
        return;
    }

    // Отправка POST-запроса
    $.ajax({
        url: '/cabinet/post/update-tarif-all', // Укажи свой обработчик на сервере
        type: "POST",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        data: {
            tarif: selectedTarif,
            ids: selectedIds
        },
        success: function (response) {
            alert("Тарифы успешно изменены  " + response);
        },
        error: function () {
            alert("Ошибка при отправке запроса.");
        }
    });
});

function toggleSelectState() {
    // Проверяем, есть ли хотя бы один отмеченный чекбокс
    let isChecked = $(".action-check:checked").length > 0;

    // Делаем select активным или неактивным
    $("#update_tarif").prop("disabled", !isChecked);
}

// Отслеживаем изменение состояния чекбоксов
$(".action-check").on("change", function () {
    toggleSelectState();
});

// Вызываем функцию при загрузке страницы (на случай предустановленных чекбоксов)
$(document).ready(function () {
    toggleSelectState();
});

function sendMessage(object){

    var message = $('.chatMessage').val()

    $.ajax({
        type: 'POST',
        url: '/cabinet/message',
        async:false,
        data: 'message=' + message,
        dataType: "html",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        cache: false,
        success: function (data){

            $('.chatMessage').val('')

            addMessage(data);

        },

    })
}

function addMessage(text){

    var message = '<div class="chat__dialog-list-item chat__dialog-list-item--qst">\n' +
        '                    <div class="chat__dialog-list-item-text">\n' +
        text +
        '                    </div>\n' +
        '                </div>';

    $('.chat__dialog-list').append(message);

    $('.chat__dialog-list-wrap').scrollTop($('.chat__dialog-list-wrap').height() + 99999999);

}

function send_photo(){

    var formData = new FormData($("#send-message-photo-form")[0]);

    var tmp = this;

    $.ajax({
        url: '/cabinet/message/file',
        type: 'POST',
        data: formData,
        datatype: 'json',
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        // async: false,
        beforeSend: function () {
            $(this).siblings('label').text('Загрузка');
        },
        success: function (data) {

            $('.chat__dialog-list').append(data);

            $('.chat__dialog-list-wrap').scrollTop($('.chat__dialog-list-wrap').height() + 99999999);

            setTimeout(afterDelay, 200);

        },

        complete: function () {
            // success alerts
        },

        error: function (data) {
            alert("There may a error on uploading. Try again later");
        },
        cache: false,
        contentType: false,
        processData: false
    });

}

$(document).ready(function(){
    setTimeout(afterDelay, 250);
})

function afterDelay() {
    $('.chat__dialog-list-wrap').scrollTop($('.chat__dialog-list-wrap').height() + 99999999);
}

function upPost(object) {

    var id = $(object).attr('data-id');

    $.ajax({
        type: 'POST',
        url: '/cabinet/post/up',
        async:false,
        data: 'id=' + id,
        dataType: "html",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        cache: false,
        success: function (data){

            $(object).html(data);

        },

    })

}

function updateTarif(object) {

    var id = $(object).attr('data-id');
    var tarif_id = $(object).val();

    $.ajax({
        type: 'POST',
        url: '/cabinet/post/update-tarif',
        async:false,
        data: 'id=' + id + '&tarif_id=' + tarif_id,
        dataType: "html",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        cache: false,
        success: function (data){

        },

    })

}
function updateCity(object) {

    var id = $(object).attr('data-id');
    var tarif_id = $(object).val();

    $.ajax({
        type: 'POST',
        url: '/cabinet/post/update-city',
        async:false,
        data: 'id=' + id + '&city_id=' + tarif_id,
        dataType: "html",
        headers: {
            'X-CSRF-TOKEN': $('meta[name = "csrf-token"]').attr('content')
        },
        cache: false,
        success: function (data){

        },

    })

}
function getPasteEvent() {
    var el = document.createElement('input'),
        name = 'onpaste';
    el.setAttribute(name, '');
    return (typeof el[name] === 'function')?'paste':'input';
}

var pasteEventName = getPasteEvent() + ".mask",
    ua = navigator.userAgent,
    iPhone = /iphone/i.test(ua),
    android=/android/i.test(ua),
    caretTimeoutId;

$.mask = {
    //Predefined character definitions
    definitions: {
        '9': "[0-9]",
        'a': "[A-Za-z]",
        '*': "[A-Za-z0-9]"
    },
    dataName: "rawMaskFn",
    placeholder: '_',
};

$.fn.extend({
    //Helper Function for Caret positioning
    caret: function(begin, end) {
        var range;

        if (this.length === 0 || this.is(":hidden")) {
            return;
        }

        if (typeof begin == 'number') {
            end = (typeof end === 'number') ? end : begin;
            return this.each(function() {
                if (this.setSelectionRange) {
                    this.setSelectionRange(begin, end);
                } else if (this.createTextRange) {
                    range = this.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', end);
                    range.moveStart('character', begin);
                    range.select();
                }
            });
        } else {
            if (this[0].setSelectionRange) {
                begin = this[0].selectionStart;
                end = this[0].selectionEnd;
            } else if (document.selection && document.selection.createRange) {
                range = document.selection.createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }
            return { begin: begin, end: end };
        }
    },
    unmask: function() {
        return this.trigger("unmask");
    },
    mask: function(mask, settings) {
        var input,
            defs,
            tests,
            partialPosition,
            firstNonMaskPos,
            len;

        if (!mask && this.length > 0) {
            input = $(this[0]);
            return input.data($.mask.dataName)();
        }
        settings = $.extend({
            placeholder: $.mask.placeholder, // Load default placeholder
            completed: null
        }, settings);


        defs = $.mask.definitions;
        tests = [];
        partialPosition = len = mask.length;
        firstNonMaskPos = null;

        $.each(mask.split(""), function(i, c) {
            if (c == '?') {
                len--;
                partialPosition = i;
            } else if (defs[c]) {
                tests.push(new RegExp(defs[c]));
                if (firstNonMaskPos === null) {
                    firstNonMaskPos = tests.length - 1;
                }
            } else {
                tests.push(null);
            }
        });

        return this.trigger("unmask").each(function() {
            var input = $(this),
                buffer = $.map(
                    mask.split(""),
                    function(c, i) {
                        if (c != '?') {
                            return defs[c] ? settings.placeholder : c;
                        }
                    }),
                focusText = input.val();

            function seekNext(pos) {
                while (++pos < len && !tests[pos]);
                return pos;
            }

            function seekPrev(pos) {
                while (--pos >= 0 && !tests[pos]);
                return pos;
            }

            function shiftL(begin,end) {
                var i,
                    j;

                if (begin<0) {
                    return;
                }

                for (i = begin, j = seekNext(end); i < len; i++) {
                    if (tests[i]) {
                        if (j < len && tests[i].test(buffer[j])) {
                            buffer[i] = buffer[j];
                            buffer[j] = settings.placeholder;
                        } else {
                            break;
                        }

                        j = seekNext(j);
                    }
                }
                writeBuffer();
                input.caret(Math.max(firstNonMaskPos, begin));
            }

            function shiftR(pos) {
                var i,
                    c,
                    j,
                    t;

                for (i = pos, c = settings.placeholder; i < len; i++) {
                    if (tests[i]) {
                        j = seekNext(i);
                        t = buffer[i];
                        buffer[i] = c;
                        if (j < len && tests[j].test(t)) {
                            c = t;
                        } else {
                            break;
                        }
                    }
                }
            }

            function keydownEvent(e) {
                var k = e.which,
                    pos,
                    begin,
                    end;

                //backspace, delete, and escape get special treatment
                if (k === 8 || k === 46 || (iPhone && k === 127)) {
                    pos = input.caret();
                    begin = pos.begin;
                    end = pos.end;

                    if (end - begin === 0) {
                        begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
                        end=k===46?seekNext(end):end;
                    }
                    clearBuffer(begin, end);
                    shiftL(begin, end - 1);

                    e.preventDefault();
                } else if (k == 27) {//escape
                    input.val(focusText);
                    input.caret(0, checkVal());
                    e.preventDefault();
                }
            }

            function keypressEvent(e) {
                var k = e.which,
                    pos = input.caret(),
                    p,
                    c,
                    next;

                if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
                    return;
                } else if (k) {
                    if (pos.end - pos.begin !== 0){
                        clearBuffer(pos.begin, pos.end);
                        shiftL(pos.begin, pos.end-1);
                    }

                    p = seekNext(pos.begin - 1);
                    if (p < len) {
                        c = String.fromCharCode(k);
                        if (tests[p].test(c)) {
                            shiftR(p);

                            buffer[p] = c;
                            writeBuffer();
                            next = seekNext(p);

                            if(android){
                                setTimeout($.proxy($.fn.caret,input,next),0);
                            }else{
                                input.caret(next);
                            }

                            if (settings.completed && next >= len) {
                                settings.completed.call(input);
                            }
                        }
                    }
                    e.preventDefault();
                }
            }

            function clearBuffer(start, end) {
                var i;
                for (i = start; i < end && i < len; i++) {
                    if (tests[i]) {
                        buffer[i] = settings.placeholder;
                    }
                }
            }

            function writeBuffer() { input.val(buffer.join('')); }

            function checkVal(allow) {
                //try to place characters where they belong
                var test = input.val(),
                    lastMatch = -1,
                    i,
                    c;

                for (i = 0, pos = 0; i < len; i++) {
                    if (tests[i]) {
                        buffer[i] = settings.placeholder;
                        while (pos++ < test.length) {
                            c = test.charAt(pos - 1);
                            if (tests[i].test(c)) {
                                buffer[i] = c;
                                lastMatch = i;
                                break;
                            }
                        }
                        if (pos > test.length) {
                            break;
                        }
                    } else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
                        pos++;
                        lastMatch = i;
                    }
                }
                if (allow) {
                    writeBuffer();
                } else if (lastMatch + 1 < partialPosition) {
                    input.val("");
                    clearBuffer(0, len);
                } else {
                    writeBuffer();
                    input.val(input.val().substring(0, lastMatch + 1));
                }
                return (partialPosition ? i : firstNonMaskPos);
            }

            input.data($.mask.dataName,function(){
                return $.map(buffer, function(c, i) {
                    return tests[i]&&c!=settings.placeholder ? c : null;
                }).join('');
            });

            if (!input.attr("readonly"))
                input
                    .one("unmask", function() {
                        input
                            .unbind(".mask")
                            .removeData($.mask.dataName);
                    })
                    .bind("focus.mask", function() {
                        clearTimeout(caretTimeoutId);
                        var pos,
                            moveCaret;

                        focusText = input.val();
                        pos = checkVal();

                        caretTimeoutId = setTimeout(function(){
                            writeBuffer();
                            if (pos == mask.length) {
                                input.caret(0, pos);
                            } else {
                                input.caret(pos);
                            }
                        }, 10);
                    })
                    .bind("blur.mask", function() {
                        checkVal();
                        if (input.val() != focusText)
                            input.change();
                    })
                    .bind("keydown.mask", keydownEvent)
                    .bind("keypress.mask", keypressEvent)
                    .bind(pasteEventName, function() {
                        setTimeout(function() {
                            var pos=checkVal(true);
                            input.caret(pos);
                            if (settings.completed && pos == input.val().length)
                                settings.completed.call(input);
                        }, 0);
                    });
            checkVal(); //Perform initial check for existing values
        });
    }
});


$(document).ready(function() {
    $("#phone").mask("+7(999)99-99-999");
});

