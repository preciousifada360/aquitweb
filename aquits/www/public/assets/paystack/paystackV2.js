var Paystack = function(t) { "use strict"; var e = function(t, e) { return function() { for (var n = Array(arguments.length), r = 0; n.length > r; r++) n[r] = arguments[r]; return t.apply(e, n) } };

    function n(t) { return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t) } var r = Object.prototype.toString;

    function i(t) { return "[object Array]" === r.call(t) }

    function s(t) { return null !== t && "object" == typeof t }

    function o(t) { return "[object Function]" === r.call(t) }

    function a(t, e) { if (null !== t && void 0 !== t)
            if ("object" != typeof t && (t = [t]), i(t))
                for (var n = 0, r = t.length; r > n; n++) e.call(null, t[n], n, t);
            else
                for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t) } var u = { isArray: i, isArrayBuffer: function(t) { return "[object ArrayBuffer]" === r.call(t) }, isBuffer: function(t) { return null != t && (n(t) || function(t) { return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) }(t) || !!t._isBuffer) }, isFormData: function(t) { return "undefined" != typeof FormData && t instanceof FormData }, isArrayBufferView: function(t) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer }, isString: function(t) { return "string" == typeof t }, isNumber: function(t) { return "number" == typeof t }, isObject: s, isUndefined: function(t) { return void 0 === t }, isDate: function(t) { return "[object Date]" === r.call(t) }, isFile: function(t) { return "[object File]" === r.call(t) }, isBlob: function(t) { return "[object Blob]" === r.call(t) }, isFunction: o, isStream: function(t) { return s(t) && o(t.pipe) }, isURLSearchParams: function(t) { return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams }, isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document }, forEach: a, merge: function t() { var e = {};

                function n(n, r) { e[r] = "object" == typeof e[r] && "object" == typeof n ? t(e[r], n) : n } for (var r = 0, i = arguments.length; i > r; r++) a(arguments[r], n); return e }, extend: function(t, n, r) { return a(n, function(n, i) { t[i] = r && "function" == typeof n ? e(n, r) : n }), t }, trim: function(t) { return t.replace(/^\s*/, "").replace(/\s*$/, "") } },
        c = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};

    function h() { throw Error("setTimeout has not been defined") }

    function l() { throw Error("clearTimeout has not been defined") } var f = h,
        p = l;

    function d(t) { if (f === setTimeout) return setTimeout(t, 0); if ((f === h || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0); try { return f(t, 0) } catch (e) { try { return f.call(null, t, 0) } catch (e) { return f.call(this, t, 0) } } } "function" == typeof c.setTimeout && (f = setTimeout), "function" == typeof c.clearTimeout && (p = clearTimeout); var g, m = [],
        y = !1,
        b = -1;

    function w() { y && g && (y = !1, g.length ? m = g.concat(m) : b = -1, m.length && T()) }

    function T() { if (!y) { var t = d(w);
            y = !0; for (var e = m.length; e;) { for (g = m, m = []; ++b < e;) g && g[b].run();
                b = -1, e = m.length }
            g = null, y = !1,
                function(t) { if (p === clearTimeout) return clearTimeout(t); if ((p === l || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t); try { p(t) } catch (e) { try { return p.call(null, t) } catch (e) { return p.call(this, t) } } }(t) } }

    function k(t, e) { this.fun = t, this.array = e }
    k.prototype.run = function() { this.fun.apply(null, this.array) };

    function E() {} var S = E,
        x = E,
        D = E,
        A = E,
        B = E,
        P = E,
        V = E; var R = c.performance || {},
        O = R.now || R.mozNow || R.msNow || R.oNow || R.webkitNow || function() { return (new Date).getTime() }; var I = new Date; var C = { nextTick: function(t) { var e = Array(arguments.length - 1); if (arguments.length > 1)
                    for (var n = 1; arguments.length > n; n++) e[n - 1] = arguments[n];
                m.push(new k(t, e)), 1 !== m.length || y || d(T) }, title: "browser", browser: !0, env: {}, argv: [], version: "", versions: {}, on: S, addListener: x, once: D, off: A, removeListener: B, removeAllListeners: P, emit: V, binding: function(t) { throw Error("process.binding is not supported") }, cwd: function() { return "/" }, chdir: function(t) { throw Error("process.chdir is not supported") }, umask: function() { return 0 }, hrtime: function(t) { var e = .001 * O.call(R),
                    n = Math.floor(e),
                    r = Math.floor(e % 1 * 1e9); return t && (n -= t[0], 0 > (r -= t[1]) && (n--, r += 1e9)), [n, r] }, platform: "browser", release: {}, config: {}, uptime: function() { return (new Date - I) / 1e3 } },
        N = function(t, e, n, r, i) { return function(t, e, n, r, i) { return t.config = e, n && (t.code = n), t.request = r, t.response = i, t }(Error(t), e, n, r, i) };

    function _(t) { return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") } var j = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
        q = u.isStandardBrowserEnv() ? function() { var t, e = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function r(t) { var r = t; return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } } return t = r(window.location.href),
                function(e) { var n = u.isString(e) ? r(e) : e; return n.protocol === t.protocol && n.host === t.host } }() : function() { return !0 },
        L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function U() { this.message = "String contains an invalid character" }(U.prototype = Error()).code = 5, U.prototype.name = "InvalidCharacterError"; var M = function(t) { for (var e, n, r = t + "", i = "", s = 0, o = L; r.charAt(0 | s) || (o = "=", s % 1); i += o.charAt(63 & e >> 8 - s % 1 * 8)) { if ((n = r.charCodeAt(s += .75)) > 255) throw new U;
                e = e << 8 | n } return i },
        F = u.isStandardBrowserEnv() ? { write: function(t, e, n, r, i, s) { var o = [];
                o.push(t + "=" + encodeURIComponent(e)), u.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), u.isString(r) && o.push("path=" + r), u.isString(i) && o.push("domain=" + i), !0 === s && o.push("secure"), document.cookie = o.join("; ") }, read: function(t) { var e = document.cookie.match(RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return e ? decodeURIComponent(e[3]) : null }, remove: function(t) { this.write(t, "", Date.now() - 864e5) } } : { write: function() {}, read: function() { return null }, remove: function() {} },
        z = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || M,
        H = function(t) { return new Promise(function(e, n) { var r = t.data,
                    i = t.headers;
                u.isFormData(r) && delete i["Content-Type"]; var s = new XMLHttpRequest,
                    o = "onreadystatechange",
                    a = !1;
                ("test" === C.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in s || q(t.url) || (s = new window.XDomainRequest, o = "onload", a = !0, s.onprogress = function() {}, s.ontimeout = function() {}), t.auth) && (i.Authorization = "Basic " + z((t.auth.username || "") + ":" + (t.auth.password || ""))); if (s.open(t.method.toUpperCase(), function(t, e, n) { if (!e) return t; var r; if (n) r = n(e);
                        else if (u.isURLSearchParams(e)) r = "" + e;
                        else { var i = [];
                            u.forEach(e, function(t, e) { null !== t && void 0 !== t && (u.isArray(t) && (e += "[]"), u.isArray(t) || (t = [t]), u.forEach(t, function(t) { u.isDate(t) ? t = t.toISOString() : u.isObject(t) && (t = JSON.stringify(t)), i.push(_(e) + "=" + _(t)) })) }), r = i.join("&") } return r && (t += (-1 === t.indexOf("?") ? "?" : "&") + r), t }(t.url, t.params, t.paramsSerializer), !0), s.timeout = t.timeout, s[o] = function() { if (s && (4 === s.readyState || a) && (0 !== s.status || s.responseURL && 0 === s.responseURL.indexOf("file:"))) { var r, i, o, c, h, l = "getAllResponseHeaders" in s ? (r = s.getAllResponseHeaders(), h = {}, r ? (u.forEach(r.split("\n"), function(t) { if (c = t.indexOf(":"), i = u.trim(t.substr(0, c)).toLowerCase(), o = u.trim(t.substr(c + 1)), i) { if (h[i] && j.indexOf(i) >= 0) return;
                                    h[i] = "set-cookie" === i ? (h[i] ? h[i] : []).concat([o]) : h[i] ? h[i] + ", " + o : o } }), h) : h) : null;! function(t, e, n) { var r = n.config.validateStatus;
                                n.status && r && !r(n.status) ? e(N("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n) }(e, n, { data: t.responseType && "text" !== t.responseType ? s.response : s.responseText, status: 1223 === s.status ? 204 : s.status, statusText: 1223 === s.status ? "No Content" : s.statusText, headers: l, config: t, request: s }), s = null } }, s.onerror = function() { n(N("Network Error", t, null, s)), s = null }, s.ontimeout = function() { n(N("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", s)), s = null }, u.isStandardBrowserEnv()) { var c = F,
                        h = (t.withCredentials || q(t.url)) && t.xsrfCookieName ? c.read(t.xsrfCookieName) : void 0;
                    h && (i[t.xsrfHeaderName] = h) } if ("setRequestHeader" in s && u.forEach(i, function(t, e) { void 0 === r && "content-type" === e.toLowerCase() ? delete i[e] : s.setRequestHeader(e, t) }), t.withCredentials && (s.withCredentials = !0), t.responseType) try { s.responseType = t.responseType } catch (e) { if ("json" !== t.responseType) throw e }
                "function" == typeof t.onDownloadProgress && s.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && s.upload && s.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(t) { s && (s.abort(), n(t), s = null) }), void 0 === r && (r = null), s.send(r) }) },
        K = { "Content-Type": "application/x-www-form-urlencoded" };

    function $(t, e) {!u.isUndefined(t) && u.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e) } var Z, G = { adapter: ("undefined" != typeof XMLHttpRequest ? Z = H : void 0 !== C && (Z = H), Z), transformRequest: [function(t, e) { return function(t, e) { u.forEach(t, function(n, r) { r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r]) }) }(e, "Content-Type"), u.isFormData(t) || u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) ? t : u.isArrayBufferView(t) ? t.buffer : u.isURLSearchParams(t) ? ($(e, "application/x-www-form-urlencoded;charset=utf-8"), "" + t) : u.isObject(t) ? ($(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t }], transformResponse: [function(t) { if ("string" == typeof t) try { t = JSON.parse(t) } catch (t) {}
            return t }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(t) { return t >= 200 && 300 > t } };
    G.headers = { common: { Accept: "application/json, text/plain, */*" } }, u.forEach(["delete", "get", "head"], function(t) { G.headers[t] = {} }), u.forEach(["post", "put", "patch"], function(t) { G.headers[t] = u.merge(K) }); var Y = G;

    function J() { this.handlers = [] }
    J.prototype.use = function(t, e) { return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1 }, J.prototype.eject = function(t) { this.handlers[t] && (this.handlers[t] = null) }, J.prototype.forEach = function(t) { u.forEach(this.handlers, function(e) { null !== e && t(e) }) }; var X = J,
        Q = function(t, e, n) { return u.forEach(n, function(n) { t = n(t, e) }), t },
        W = function(t) { return !(!t || !t.__CANCEL__) };

    function tt(t) { t.cancelToken && t.cancelToken.throwIfRequested() } var et = function(t) { var e, n; return tt(t), t.baseURL && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t.url) && (t.url = (e = t.baseURL, (n = t.url) ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e)), t.headers = t.headers || {}, t.data = Q(t.data, t.headers, t.transformRequest), t.headers = u.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) { delete t.headers[e] }), (t.adapter || Y.adapter)(t).then(function(e) { return tt(t), e.data = Q(e.data, e.headers, t.transformResponse), e }, function(e) { return W(e) || (tt(t), e && e.response && (e.response.data = Q(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e) }) };

    function nt(t) { this.defaults = t, this.interceptors = { request: new X, response: new X } }
    nt.prototype.request = function(t) { "string" == typeof t && (t = u.merge({ url: arguments[0] }, arguments[1])), (t = u.merge(Y, this.defaults, { method: "get" }, t)).method = t.method.toLowerCase(); var e = [et, void 0],
            n = Promise.resolve(t); for (this.interceptors.request.forEach(function(t) { e.unshift(t.fulfilled, t.rejected) }), this.interceptors.response.forEach(function(t) { e.push(t.fulfilled, t.rejected) }); e.length;) n = n.then(e.shift(), e.shift()); return n }, u.forEach(["delete", "get", "head", "options"], function(t) { nt.prototype[t] = function(e, n) { return this.request(u.merge(n || {}, { method: t, url: e })) } }), u.forEach(["post", "put", "patch"], function(t) { nt.prototype[t] = function(e, n, r) { return this.request(u.merge(r || {}, { method: t, url: e, data: n })) } }); var rt = nt;

    function it(t) { this.message = t }
    it.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, it.prototype.__CANCEL__ = !0; var st = it;

    function ot(t) { if ("function" != typeof t) throw new TypeError("executor must be a function."); var e;
        this.promise = new Promise(function(t) { e = t }); var n = this;
        t(function(t) { n.reason || (n.reason = new st(t), e(n.reason)) }) }
    ot.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, ot.source = function() { var t; return { token: new ot(function(e) { t = e }), cancel: t } }; var at = ot;

    function ut(t) { var n = new rt(t),
            r = e(rt.prototype.request, n); return u.extend(r, rt.prototype, n), u.extend(r, n), r } var ct = ut(Y);
    ct.Axios = rt, ct.create = function(t) { return ut(u.merge(Y, t)) }, ct.Cancel = st, ct.CancelToken = at, ct.isCancel = W, ct.all = function(t) { return Promise.all(t) }, ct.spread = function(t) { return function(e) { return t.apply(null, e) } }; var ht = ct;
    ht.default = ct; var lt = ht,
        ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
        pt = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
        dt = function() {
            function t(t, e) { for (var n = 0; e.length > n; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
        gt = Object.assign || function(t) { for (var e = 1; arguments.length > e; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t },
        mt = function(t, e) { var n = {}; for (var r in t) 0 > e.indexOf(r) && Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]); return n },
        vt = { cookieTestUrl: "https://crayon.paystack.co/test-iframe/start.html", publishableKey: "uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==", publicKey: "-----BEGIN PUBLIC KEY-----\r\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r\nZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r\n-----END PUBLIC KEY-----" },
        yt = gt({}, vt, { checkoutUrl: "http://localhost:8080/", paymentBaseUrl: "https://crayon.paystack.co/", paystackApiUrl: "https://studio-api.paystack.co/", pusherKey: "1c7b262ee18455815893", pusherUrl: "https://checkout-studio.paystack.com/static/vendor/pusher.min.js" }),
        bt = gt({}, vt, { checkoutUrl: "https://checkout-studio.paystack.com/", paymentBaseUrl: "https://crayon.paystack.co/", paystackApiUrl: "https://studio-api.paystack.co/", pusherKey: "1c7b262ee18455815893", pusherUrl: "https://checkout-studio.paystack.com/static/vendor/pusher.min.js" }),
        wt = gt({}, vt, { checkoutUrl: "https://checkout.paystack.com/", paymentBaseUrl: "https://standard.paystack.co/", paystackApiUrl: "https://api.paystack.co/", pusherKey: "8e4b9b7ca3418bd5cdc8", pusherUrl: "https://checkout.paystack.com/static/vendor/pusher.min.js" }),
        Tt = void 0; switch ((window || C.env).paystackEnvironment) {
        case "dev":
            Tt = yt; break;
        case "staging":
            Tt = bt; break;
        default:
            Tt = wt } var kt = Tt,
        Et = { success: function(t) { var e = t.message,
                    n = mt(t, ["message", "status", "errors"]); return { status: "success", message: e || "Successful", data: n } }, pending: function(t) { var e = t.message,
                    n = mt(t, ["message", "status", "errors"]); return { status: "pending", message: e || "Payment in progress", data: n } }, auth: function(t) { return { status: "auth", message: t.otpmessage || t.message || "Authentication required", data: { auth: t.auth } } }, requery: function(t) { return { status: "requery", message: t.message || "Requery" } }, error: function(t) { var e = { status: "failed", message: t.message || "Failed", errors: t.errors || [] }; return t.bank && (e.bank = t.bank), e }, parse: function(t) { var e = "object" === (void 0 === t ? "undefined" : ft(t)) ? t : {}; return e.data && "object" === ft(e.data) && (Object.assign(e, e.data), delete e.data), ["true", !0, "success"].indexOf(e.status) > -1 ? this.success(e) : "pending" === e.status ? this.pending(e) : "requery" === e.status ? this.requery(e) : e.auth && "none" !== e.auth ? this.auth(e) : ["true", !0, "success"].indexOf(e.status) > -1 ? this.success(e) : this.error(e) } },
        St = function(t) { return lt.get(kt.paystackApiUrl + "checkout/request_inline", { params: t }).then(function(t) { return t.data }) },
        xt = function(t) { return lt.get(kt.paystackApiUrl + "transaction/verify_access_code/" + t).then(function(t) { return t.data }) },
        Dt = function(t) { return lt.get(kt.paystackApiUrl + "transaction/verify/" + t).then(function(t) { return t.data }) },
        At = function(t) { return lt.get(kt.paymentBaseUrl + "charge/requery/" + t).then(function(t) { return Et.parse(t.data) }) }; var Bt, Pt = function(t) { for (var e, n = 0, r = !1, i = t.length - 1; i >= 0;) e = parseInt(t.charAt(i), 10), r && (e *= 2) > 9 && (e = e % 10 + 1), r = !r, n += e, i--; return n % 10 == 0 },
        Vt = {},
        Rt = {},
        Ot = ["visa", "master-card", "american-express", "diners-club", "discover", "jcb", "unionpay", "maestro"];

    function It(t) { var e; return t ? (delete(e = JSON.parse(JSON.stringify(t))).prefixPattern, delete e.exactPattern, e) : null }

    function Ct(t) { return Rt[t] || Vt[t] }

    function Nt(t) { var e, n, r = [],
            i = []; if (!("string" == typeof t || t instanceof String)) return []; for (n = 0; Bt.length > n; n++) e = Ct(Bt[n]), 0 !== t.length ? e.exactPattern.test(t) ? i.push(It(e)) : e.prefixPattern.test(t) && r.push(It(e)) : r.push(It(e)); return i.length ? i : r }

    function _t(t, e) { var n = Bt.indexOf(t); if (!e && -1 === n) throw Error('"' + t + '" is not a supported card type.'); return n }
    Bt = It(Ot), Vt.visa = { niceType: "Visa", type: "visa", prefixPattern: /^4$/, exactPattern: /^4\d*$/, gaps: [4, 8, 12], lengths: [16, 18, 19], code: { name: "CVV", size: 3 } }, Vt["master-card"] = { niceType: "Mastercard", type: "master-card", prefixPattern: /^(5|5[1-5]|2|22|222|222[1-9]|2[3-6]|27|27[0-2]|2720)$/, exactPattern: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[0-1]|2720)\d*$/, gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } }, Vt["american-express"] = { niceType: "American Express", type: "american-express", prefixPattern: /^(3|34|37)$/, exactPattern: /^3[47]\d*$/, isAmex: !0, gaps: [4, 10], lengths: [15], code: { name: "CID", size: 4 } }, Vt["diners-club"] = { niceType: "Diners Club", type: "diners-club", prefixPattern: /^(3|3[0689]|30[0-5])$/, exactPattern: /^3(0[0-5]|[689])\d*$/, gaps: [4, 10], lengths: [14, 16, 19], code: { name: "CVV", size: 3 } }, Vt.discover = { niceType: "Discover", type: "discover", prefixPattern: /^(6|60|601|6011|65|64|64[4-9])$/, exactPattern: /^(6011|65|64[4-9])\d*$/, gaps: [4, 8, 12], lengths: [16, 19], code: { name: "CID", size: 3 } }, Vt.jcb = { niceType: "JCB", type: "jcb", prefixPattern: /^(2|21|213|2131|1|18|180|1800|3|35)$/, exactPattern: /^(2131|1800|35)\d*$/, gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVV", size: 3 } }, Vt.unionpay = { niceType: "UnionPay", type: "unionpay", prefixPattern: /^((6|62|62\d|(621(?!83|88|98|99))|622(?!06)|627[02,06,07]|628(?!0|1)|629[1,2])|622018)$/, exactPattern: /^(((620|(621(?!83|88|98|99))|622(?!06|018)|62[3-6]|627[02,06,07]|628(?!0|1)|629[1,2]))\d*|622018\d{12})$/, gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVN", size: 3 } }, Vt.maestro = { niceType: "Maestro", type: "maestro", prefixPattern: /^(5|5[06-9]|6\d*)$/, exactPattern: /^(5[06-9]|6[37])\d*$/, gaps: [4, 8, 12], lengths: [12, 13, 14, 15, 16, 17, 18, 19], code: { name: "CVC", size: 3 } }, Nt.getTypeInfo = function(t) { return It(Ct(t)) }, Nt.removeCard = function(t) { var e = _t(t);
        Bt.splice(e, 1) }, Nt.addCard = function(t) { var e = _t(t.type, !0);
        Rt[t.type] = t, -1 === e && Bt.push(t.type) }, Nt.changeOrder = function(t, e) { var n = _t(t);
        Bt.splice(n, 1), Bt.splice(e, 0, t) }, Nt.resetModifications = function() { Bt = It(Ot), Rt = {} }, Nt.types = { VISA: "visa", MASTERCARD: "master-card", AMERICAN_EXPRESS: "american-express", DINERS_CLUB: "diners-club", DISCOVER: "discover", JCB: "jcb", UNIONPAY: "unionpay", MAESTRO: "maestro" }; var jt = Nt;

    function qt(t, e, n) { return { card: t, isPotentiallyValid: e, isValid: n } } var Lt = 19;

    function Ut(t, e, n) { return { isValid: t, isPotentiallyValid: e, isCurrentYear: n || !1 } } var Mt = function(t, e) { var n, r, i, s, o; return e = e || Lt, "string" != typeof t ? Ut(!1, !1) : "" === t.replace(/\s/g, "") ? Ut(!1, !0) : /^\d*$/.test(t) ? 2 > (r = t.length) ? Ut(!1, !0) : (n = (new Date).getFullYear(), 3 === r ? Ut(!1, t.slice(0, 2) === (n + "").slice(0, 2)) : r > 4 ? Ut(!1, !1) : (t = parseInt(t, 10), i = +(n + "").substr(2, 2), 2 === r ? (o = i === t, s = t >= i && i + e >= t) : 4 === r && (o = n === t, s = t >= n && n + e >= t), Ut(s, s, o))) : Ut(!1, !1) },
        Ft = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) }; var zt = function(t) { var e, n, r; return /\//.test(t) ? t = t.split(/\s*\/\s*/g) : /\s/.test(t) && (t = t.split(/ +/g)), Ft(t) ? { month: t[0], year: t.slice(1).join() } : (n = "0" === t[0] || t.length > 5 ? 2 : 1, "1" === t[0] && (r = t.substr(1), Mt(r).isPotentiallyValid || (n = 2)), { month: e = t.substr(0, n), year: t.substr(e.length) }) };

    function Ht(t, e, n) { return { isValid: t, isPotentiallyValid: e, isValidForThisYear: n || !1 } } var Kt = function(t) { var e, n, r = (new Date).getMonth() + 1; return "string" != typeof t ? Ht(!1, !1) : "" === t.replace(/\s/g, "") || "0" === t ? Ht(!1, !0) : /^\d*$/.test(t) ? (e = parseInt(t, 10), isNaN(t) ? Ht(!1, !1) : Ht(n = e > 0 && 13 > e, n, n && e >= r)) : Ht(!1, !1) };

    function $t(t, e, n, r) { return { isValid: t, isPotentiallyValid: e, month: n, year: r } } var Zt = 3;

    function Gt(t, e) { return { isValid: t, isPotentiallyValid: e } } var Yt = 3;

    function Jt(t, e) { return { isValid: t, isPotentiallyValid: e } } var Xt = { number: function(t) { var e, n, r, i, s; if ("number" == typeof t && (t += ""), "string" != typeof t) return qt(null, !1, !1); if (t = t.replace(/\-|\s/g, ""), !/^\d*$/.test(t)) return qt(null, !1, !1); if (0 === (e = jt(t)).length) return qt(null, !1, !1); if (1 !== e.length) return qt(null, !0, !1); for (r = "unionpay" === (n = e[0]).type || Pt(t), s = Math.max.apply(null, n.lengths), i = 0; n.lengths.length > i; i++)
                    if (n.lengths[i] === t.length) return qt(n, t.length !== s || r, r);
                return qt(n, s > t.length, !1) }, expirationDate: function(t, e) { var n, r, i, s; if ("string" == typeof t) t = t.replace(/^(\d\d) (\d\d(\d\d)?)$/, "$1/$2"), n = zt(t);
                else { if (null === t || "object" != typeof t) return $t(!1, !1, null, null);
                    n = { month: t.month + "", year: t.year + "" } } if (r = Kt(n.month), i = Mt(n.year, e), r.isValid) { if (i.isCurrentYear) return $t(s = r.isValidForThisYear, s, n.month, n.year); if (i.isValid) return $t(!0, !0, n.month, n.year) } return $t(!1, !(!r.isPotentiallyValid || !i.isPotentiallyValid), null, null) }, expirationMonth: Kt, expirationYear: Mt, cvv: function(t, e) { return e = (e = e || Zt) instanceof Array ? e : [e], "string" != typeof t ? Gt(!1, !1) : /^\d*$/.test(t) ? function(t, e) { for (var n = 0; t.length > n; n++)
                        if (e === t[n]) return !0;
                    return !1 }(e, t.length) ? Gt(!0, !0) : t.length < Math.min.apply(null, e) ? Gt(!1, !0) : t.length > function(t) { for (var e = Zt, n = 0; t.length > n; n++) e = t[n] > e ? t[n] : e; return e }(e) ? Gt(!1, !1) : Gt(!0, !0) : Gt(!1, !1) }, postalCode: function(t, e) { var n; return n = (e = e || {}).minLength || Yt, "string" != typeof t ? Jt(!1, !1) : Jt(t.length >= n, !0) }, creditCardType: jt },
        Qt = [{ type: "bank_auth", name: "Bank authorization", number: "4084080000000409", cvv: "000", month: "01", year: "20" }, { type: "pin", name: "Pin only validation", number: "507850785078507812", cvv: "884", month: "01", year: "20" }, { type: "pin+otp", name: "Pin and OTP validation", number: "5060666666666666666", cvv: "123", month: "01", year: "20" }, { type: "pin+phone+otp", name: "Pin, phone and OTP validation", number: "507850785078507812", cvv: "884", month: "01", year: "20" }, { type: "default", name: "No validation", number: "4084084084084081", cvv: "408", month: "01", year: "20" }]; "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self; var Wt, te, ee = (function(t, e) {! function(t) { var e = "0123456789abcdefghijklmnopqrstuvwxyz";

            function n(t) { return e.charAt(t) }

            function r(t, e) { return t & e }

            function i(t, e) { return t | e }

            function s(t, e) { return t ^ e }

            function o(t, e) { return t & ~e }

            function a(t) { if (0 == t) return -1; var e = 0; return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e }

            function u(t) { for (var e = 0; 0 != t;) t &= t - 1, ++e; return e } var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                h = "=";

            function l(t) { var e, n, r = ""; for (e = 0; t.length >= e + 3; e += 3) n = parseInt(t.substring(e, e + 3), 16), r += c.charAt(n >> 6) + c.charAt(63 & n); for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16), r += c.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16), r += c.charAt(n >> 2) + c.charAt((3 & n) << 4));
                    (3 & r.length) > 0;) r += h; return r }

            function f(t) { var e, r = "",
                    i = 0,
                    s = 0; for (e = 0; t.length > e && t.charAt(e) != h; ++e) { var o = c.indexOf(t.charAt(e));
                    0 > o || (0 == i ? (r += n(o >> 2), s = 3 & o, i = 1) : 1 == i ? (r += n(s << 2 | o >> 4), s = 15 & o, i = 2) : 2 == i ? (r += n(s), r += n(o >> 2), s = 3 & o, i = 3) : (r += n(s << 2 | o >> 4), r += n(15 & o), i = 0)) } return 1 == i && (r += n(s << 2)), r } var p, d, g = function(t, e) { return (g = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e) },
                m = { decode: function(t) { var e; if (void 0 === p) { var n = "0123456789ABCDEF",
                                r = " \f\n\r\tÂ \u2028\u2029"; for (p = {}, e = 0; 16 > e; ++e) p[n.charAt(e)] = e; for (n = n.toLowerCase(), e = 10; 16 > e; ++e) p[n.charAt(e)] = e; for (e = 0; 8 > e; ++e) p[r.charAt(e)] = -1 } var i = [],
                            s = 0,
                            o = 0; for (e = 0; t.length > e; ++e) { var a = t.charAt(e); if ("=" == a) break; if (-1 != (a = p[a])) { if (void 0 === a) throw Error("Illegal character at offset " + e);
                                s |= a, 2 > ++o ? s <<= 4 : (i[i.length] = s, s = 0, o = 0) } } if (o) throw Error("Hex encoding incomplete: 4 bits missing"); return i } },
                v = { decode: function(t) { var e; if (void 0 === d) { var n = "= \f\n\r\tÂ \u2028\u2029"; for (d = Object.create(null), e = 0; 64 > e; ++e) d["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e; for (e = 0; 9 > e; ++e) d[n.charAt(e)] = -1 } var r = [],
                            i = 0,
                            s = 0; for (e = 0; t.length > e; ++e) { var o = t.charAt(e); if ("=" == o) break; if (-1 != (o = d[o])) { if (void 0 === o) throw Error("Illegal character at offset " + e);
                                i |= o, 4 > ++s ? i <<= 6 : (r[r.length] = i >> 16, r[r.length] = i >> 8 & 255, r[r.length] = 255 & i, i = 0, s = 0) } } switch (s) {
                            case 1:
                                throw Error("Base64 encoding incomplete: at least 2 bits missing");
                            case 2:
                                r[r.length] = i >> 10; break;
                            case 3:
                                r[r.length] = i >> 16, r[r.length] = i >> 8 & 255 } return r }, re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/, unarmor: function(t) { var e = v.re.exec(t); if (e)
                            if (e[1]) t = e[1];
                            else { if (!e[2]) throw Error("RegExp out of sync");
                                t = e[2] }
                        return v.decode(t) } },
                y = function() {
                    function t(t) { this.buf = [+t || 0] } return t.prototype.mulAdd = function(t, e) { var n, r, i = this.buf,
                            s = i.length; for (n = 0; s > n; ++n) 1e13 > (r = i[n] * t + e) ? e = 0 : r -= 1e13 * (e = 0 | r / 1e13), i[n] = r;
                        e > 0 && (i[n] = e) }, t.prototype.sub = function(t) { var e, n, r = this.buf,
                            i = r.length; for (e = 0; i > e; ++e) 0 > (n = r[e] - t) ? (n += 1e13, t = 1) : t = 0, r[e] = n; for (; 0 === r[r.length - 1];) r.pop() }, t.prototype.toString = function(t) { if (10 != (t || 10)) throw Error("only base 10 is supported"); for (var e = this.buf, n = "" + e[e.length - 1], r = e.length - 2; r >= 0; --r) n += ("" + (1e13 + e[r])).substring(1); return n }, t.prototype.valueOf = function() { for (var t = this.buf, e = 0, n = t.length - 1; n >= 0; --n) e = 1e13 * e + t[n]; return e }, t.prototype.simplify = function() { var t = this.buf; return 1 == t.length ? t[0] : this }, t }(),
                b = "â€¦",
                w = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                T = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

            function k(t, e) { return t.length > e && (t = t.substring(0, e) + b), t } var E, S = function() {
                    function t(e, n) { this.hexDigits = "0123456789ABCDEF", e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = n) } return t.prototype.get = function(t) { if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length); return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t] }, t.prototype.hexByte = function(t) { return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t) }, t.prototype.hexDump = function(t, e, n) { for (var r = "", i = t; e > i; ++i)
                            if (r += this.hexByte(this.get(i)), !0 !== n) switch (15 & i) {
                                case 7:
                                    r += "  "; break;
                                case 15:
                                    r += "\n"; break;
                                default:
                                    r += " " }
                            return r }, t.prototype.isASCII = function(t, e) { for (var n = t; e > n; ++n) { var r = this.get(n); if (32 > r || r > 176) return !1 } return !0 }, t.prototype.parseStringISO = function(t, e) { for (var n = "", r = t; e > r; ++r) n += String.fromCharCode(this.get(r)); return n }, t.prototype.parseStringUTF = function(t, e) { for (var n = "", r = t; e > r;) { var i = this.get(r++);
                            n += String.fromCharCode(128 > i ? i : i > 191 && 224 > i ? (31 & i) << 6 | 63 & this.get(r++) : (15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++)) } return n }, t.prototype.parseStringBMP = function(t, e) { for (var n, r, i = "", s = t; e > s;) n = this.get(s++), r = this.get(s++), i += String.fromCharCode(n << 8 | r); return i }, t.prototype.parseTime = function(t, e, n) { var r = this.parseStringISO(t, e),
                            i = (n ? w : T).exec(r); return i ? (n && (i[1] = +i[1], i[1] += 70 > +i[1] ? 2e3 : 1900), r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4], i[5] && (r += ":" + i[5], i[6] && (r += ":" + i[6], i[7] && (r += "." + i[7]))), i[8] && (r += " UTC", "Z" != i[8] && (r += i[8], i[9] && (r += ":" + i[9]))), r) : "Unrecognized time: " + r }, t.prototype.parseInteger = function(t, e) { for (var n, r = this.get(t), i = r > 127, s = i ? 255 : 0, o = ""; r == s && ++t < e;) r = this.get(t); if (0 == (n = e - t)) return i ? -1 : 0; if (n > 4) { for (o = r, n <<= 3; 0 == (128 & (+o ^ s));) o = +o << 1, --n;
                            o = "(" + n + " bit)\n" }
                        i && (r -= 256); for (var a = new y(r), u = t + 1; e > u; ++u) a.mulAdd(256, this.get(u)); return o + "" + a }, t.prototype.parseBitString = function(t, e, n) { for (var r = this.get(t), i = (e - t - 1 << 3) - r, s = "(" + i + " bit)\n", o = "", a = t + 1; e > a; ++a) { for (var u = this.get(a), c = a == e - 1 ? r : 0, h = 7; h >= c; --h) o += u >> h & 1 ? "1" : "0"; if (o.length > n) return s + k(o, n) } return s + o }, t.prototype.parseOctetString = function(t, e, n) { if (this.isASCII(t, e)) return k(this.parseStringISO(t, e), n); var r = e - t,
                            i = "(" + r + " byte)\n";
                        r > (n /= 2) && (e = t + n); for (var s = t; e > s; ++s) i += this.hexByte(this.get(s)); return r > n && (i += b), i }, t.prototype.parseOID = function(t, e, n) { for (var r = "", i = new y, s = 0, o = t; e > o; ++o) { var a = this.get(o); if (i.mulAdd(128, 127 & a), s += 7, !(128 & a)) { if ("" === r)
                                    if ((i = i.simplify()) instanceof y) i.sub(80), r = "2." + i;
                                    else { var u = 80 > i ? 40 > i ? 0 : 1 : 2;
                                        r = u + "." + (i - 40 * u) }
                                else r += "." + i; if (r.length > n) return k(r, n);
                                i = new y, s = 0 } } return s > 0 && (r += ".incomplete"), r }, t }(),
                x = function() {
                    function t(t, e, n, r, i) { if (!(r instanceof D)) throw Error("Invalid tag value.");
                        this.stream = t, this.header = e, this.length = n, this.tag = r, this.sub = i } return t.prototype.typeName = function() { switch (this.tag.tagClass) {
                            case 0:
                                switch (this.tag.tagNumber) {
                                    case 0:
                                        return "EOC";
                                    case 1:
                                        return "BOOLEAN";
                                    case 2:
                                        return "INTEGER";
                                    case 3:
                                        return "BIT_STRING";
                                    case 4:
                                        return "OCTET_STRING";
                                    case 5:
                                        return "NULL";
                                    case 6:
                                        return "OBJECT_IDENTIFIER";
                                    case 7:
                                        return "ObjectDescriptor";
                                    case 8:
                                        return "EXTERNAL";
                                    case 9:
                                        return "REAL";
                                    case 10:
                                        return "ENUMERATED";
                                    case 11:
                                        return "EMBEDDED_PDV";
                                    case 12:
                                        return "UTF8String";
                                    case 16:
                                        return "SEQUENCE";
                                    case 17:
                                        return "SET";
                                    case 18:
                                        return "NumericString";
                                    case 19:
                                        return "PrintableString";
                                    case 20:
                                        return "TeletexString";
                                    case 21:
                                        return "VideotexString";
                                    case 22:
                                        return "IA5String";
                                    case 23:
                                        return "UTCTime";
                                    case 24:
                                        return "GeneralizedTime";
                                    case 25:
                                        return "GraphicString";
                                    case 26:
                                        return "VisibleString";
                                    case 27:
                                        return "GeneralString";
                                    case 28:
                                        return "UniversalString";
                                    case 30:
                                        return "BMPString" } return "Universal_" + this.tag.tagNumber;
                            case 1:
                                return "Application_" + this.tag.tagNumber;
                            case 2:
                                return "[" + this.tag.tagNumber + "]";
                            case 3:
                                return "Private_" + this.tag.tagNumber } }, t.prototype.content = function(t) { if (void 0 === this.tag) return null;
                        void 0 === t && (t = 1 / 0); var e = this.posContent(),
                            n = Math.abs(this.length); if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t); switch (this.tag.tagNumber) {
                            case 1:
                                return 0 === this.stream.get(e) ? "false" : "true";
                            case 2:
                                return this.stream.parseInteger(e, e + n);
                            case 3:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + n, t);
                            case 4:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                            case 6:
                                return this.stream.parseOID(e, e + n, t);
                            case 16:
                            case 17:
                                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                            case 12:
                                return k(this.stream.parseStringUTF(e, e + n), t);
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 26:
                                return k(this.stream.parseStringISO(e, e + n), t);
                            case 30:
                                return k(this.stream.parseStringBMP(e, e + n), t);
                            case 23:
                            case 24:
                                return this.stream.parseTime(e, e + n, 23 == this.tag.tagNumber) } return null }, t.prototype.toString = function() { return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]" }, t.prototype.toPrettyString = function(t) { void 0 === t && (t = ""); var e = t + this.typeName() + " @" + this.stream.pos; if (0 > this.length || (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) { t += "  "; for (var n = 0, r = this.sub.length; r > n; ++n) e += this.sub[n].toPrettyString(t) } return e }, t.prototype.posStart = function() { return this.stream.pos }, t.prototype.posContent = function() { return this.stream.pos + this.header }, t.prototype.posEnd = function() { return this.stream.pos + this.header + Math.abs(this.length) }, t.prototype.toHexString = function() { return this.stream.hexDump(this.posStart(), this.posEnd(), !0) }, t.decodeLength = function(t) { var e = t.get(),
                            n = 127 & e; if (n == e) return n; if (n > 6) throw Error("Length over 48 bits not supported at position " + (t.pos - 1)); if (0 === n) return null;
                        e = 0; for (var r = 0; n > r; ++r) e = 256 * e + t.get(); return e }, t.prototype.getHexStringValue = function() { var t = this.toHexString(),
                            e = 2 * this.header,
                            n = 2 * this.length; return t.substr(e, n) }, t.decode = function(e) { var n;
                        n = e instanceof S ? e : new S(e, 0); var r = new S(n),
                            i = new D(n),
                            s = t.decodeLength(n),
                            o = n.pos,
                            a = o - r.pos,
                            u = null,
                            c = function() { var e = []; if (null !== s) { for (var r = o + s; r > n.pos;) e[e.length] = t.decode(n); if (n.pos != r) throw Error("Content size is not correct for container starting at offset " + o) } else try { for (;;) { var i = t.decode(n); if (i.tag.isEOC()) break;
                                        e[e.length] = i }
                                    s = o - n.pos } catch (t) { throw Error("Exception while decoding undefined length content: " + t) }
                                return e }; if (i.tagConstructed) u = c();
                        else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try { if (3 == i.tagNumber && 0 != n.get()) throw Error("BIT STRINGs with unused bits cannot encapsulate.");
                            u = c(); for (var h = 0; u.length > h; ++h)
                                if (u[h].tag.isEOC()) throw Error("EOC is not supposed to be actual content.") } catch (t) { u = null }
                        if (null === u) { if (null === s) throw Error("We can't skip over an invalid tag with undefined length at offset " + o);
                            n.pos = o + Math.abs(s) } return new t(r, a, s, i, u) }, t }(),
                D = function() {
                    function t(t) { var e = t.get(); if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) { var n = new y;
                            do { e = t.get(), n.mulAdd(128, 127 & e) } while (128 & e);
                            this.tagNumber = n.simplify() } } return t.prototype.isUniversal = function() { return 0 === this.tagClass }, t.prototype.isEOC = function() { return 0 === this.tagClass && 0 === this.tagNumber }, t }(),
                A = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                B = (1 << 26) / A[A.length - 1],
                P = function() {
                    function t(t, e, n) { null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : this.fromString(t, null == e && "string" != typeof t ? 256 : e)) } return t.prototype.toString = function(t) { if (0 > this.s) return "-" + this.negate().toString(t); var e; if (16 == t) e = 4;
                        else if (8 == t) e = 3;
                        else if (2 == t) e = 1;
                        else if (32 == t) e = 5;
                        else { if (4 != t) return this.toRadix(t);
                            e = 2 } var r, i = (1 << e) - 1,
                            s = !1,
                            o = "",
                            a = this.t,
                            u = this.DB - a * this.DB % e; if (a-- > 0)
                            for (this.DB > u && (r = this[a] >> u) > 0 && (s = !0, o = n(r)); a >= 0;) e > u ? (r = (this[a] & (1 << u) - 1) << e - u, r |= this[--a] >> (u += this.DB - e)) : (r = this[a] >> (u -= e) & i, u > 0 || (u += this.DB, --a)), r > 0 && (s = !0), s && (o += n(r)); return s ? o : "0" }, t.prototype.negate = function() { var e = C(); return t.ZERO.subTo(this, e), e }, t.prototype.abs = function() { return 0 > this.s ? this.negate() : this }, t.prototype.compareTo = function(t) { var e = this.s - t.s; if (0 != e) return e; var n = this.t; if (0 != (e = n - t.t)) return 0 > this.s ? -e : e; for (; --n >= 0;)
                            if (0 != (e = this[n] - t[n])) return e;
                        return 0 }, t.prototype.bitLength = function() { return this.t > 0 ? this.DB * (this.t - 1) + M(this[this.t - 1] ^ this.s & this.DM) : 0 }, t.prototype.mod = function(e) { var n = C(); return this.abs().divRemTo(e, null, n), 0 > this.s && n.compareTo(t.ZERO) > 0 && e.subTo(n, n), n }, t.prototype.modPowInt = function(t, e) { var n; return n = 256 > t || e.isEven() ? new R(e) : new O(e), this.exp(t, n) }, t.prototype.clone = function() { var t = C(); return this.copyTo(t), t }, t.prototype.intValue = function() { if (0 > this.s) { if (1 == this.t) return this[0] - this.DV; if (0 == this.t) return -1 } else { if (1 == this.t) return this[0]; if (0 == this.t) return 0 } return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0] }, t.prototype.byteValue = function() { return 0 == this.t ? this.s : this[0] << 24 >> 24 }, t.prototype.shortValue = function() { return 0 == this.t ? this.s : this[0] << 16 >> 16 }, t.prototype.signum = function() { return 0 > this.s ? -1 : 0 >= this.t || 1 == this.t && 0 >= this[0] ? 0 : 1 }, t.prototype.toByteArray = function() { var t = this.t,
                            e = [];
                        e[0] = this.s; var n, r = this.DB - t * this.DB % 8,
                            i = 0; if (t-- > 0)
                            for (this.DB > r && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); t >= 0;) 8 > r ? (n = (this[t] & (1 << r) - 1) << 8 - r, n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255, r > 0 || (r += this.DB, --t)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (i > 0 || n != this.s) && (e[i++] = n); return e }, t.prototype.equals = function(t) { return 0 == this.compareTo(t) }, t.prototype.min = function(t) { return 0 > this.compareTo(t) ? this : t }, t.prototype.max = function(t) { return this.compareTo(t) > 0 ? this : t }, t.prototype.and = function(t) { var e = C(); return this.bitwiseTo(t, r, e), e }, t.prototype.or = function(t) { var e = C(); return this.bitwiseTo(t, i, e), e }, t.prototype.xor = function(t) { var e = C(); return this.bitwiseTo(t, s, e), e }, t.prototype.andNot = function(t) { var e = C(); return this.bitwiseTo(t, o, e), e }, t.prototype.not = function() { for (var t = C(), e = 0; this.t > e; ++e) t[e] = this.DM & ~this[e]; return t.t = this.t, t.s = ~this.s, t }, t.prototype.shiftLeft = function(t) { var e = C(); return 0 > t ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e }, t.prototype.shiftRight = function(t) { var e = C(); return 0 > t ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e }, t.prototype.getLowestSetBit = function() { for (var t = 0; this.t > t; ++t)
                            if (0 != this[t]) return t * this.DB + a(this[t]);
                        return 0 > this.s ? this.t * this.DB : -1 }, t.prototype.bitCount = function() { for (var t = 0, e = this.s & this.DM, n = 0; this.t > n; ++n) t += u(this[n] ^ e); return t }, t.prototype.testBit = function(t) { var e = Math.floor(t / this.DB); return this.t > e ? 0 != (this[e] & 1 << t % this.DB) : 0 != this.s }, t.prototype.setBit = function(t) { return this.changeBit(t, i) }, t.prototype.clearBit = function(t) { return this.changeBit(t, o) }, t.prototype.flipBit = function(t) { return this.changeBit(t, s) }, t.prototype.add = function(t) { var e = C(); return this.addTo(t, e), e }, t.prototype.subtract = function(t) { var e = C(); return this.subTo(t, e), e }, t.prototype.multiply = function(t) { var e = C(); return this.multiplyTo(t, e), e }, t.prototype.divide = function(t) { var e = C(); return this.divRemTo(t, e, null), e }, t.prototype.remainder = function(t) { var e = C(); return this.divRemTo(t, null, e), e }, t.prototype.divideAndRemainder = function(t) { var e = C(),
                            n = C(); return this.divRemTo(t, e, n), [e, n] }, t.prototype.modPow = function(t, e) { var n, r, i = t.bitLength(),
                            s = U(1); if (0 >= i) return s;
                        n = 18 > i ? 1 : 48 > i ? 3 : 144 > i ? 4 : 768 > i ? 5 : 6, r = 8 > i ? new R(e) : e.isEven() ? new I(e) : new O(e); var o = [],
                            a = 3,
                            u = n - 1,
                            c = (1 << n) - 1; if (o[1] = r.convert(this), n > 1) { var h = C(); for (r.sqrTo(o[1], h); c >= a;) o[a] = C(), r.mulTo(h, o[a - 2], o[a]), a += 2 } var l, f, p = t.t - 1,
                            d = !0,
                            g = C(); for (i = M(t[p]) - 1; p >= 0;) { for (u > i ? (l = (t[p] & (1 << i + 1) - 1) << u - i, p > 0 && (l |= t[p - 1] >> this.DB + i - u)) : l = t[p] >> i - u & c, a = n; 0 == (1 & l);) l >>= 1, --a; if (0 > (i -= a) && (i += this.DB, --p), d) o[l].copyTo(s), d = !1;
                            else { for (; a > 1;) r.sqrTo(s, g), r.sqrTo(g, s), a -= 2;
                                a > 0 ? r.sqrTo(s, g) : (f = s, s = g, g = f), r.mulTo(g, o[l], s) } for (; p >= 0 && 0 == (t[p] & 1 << i);) r.sqrTo(s, g), f = s, s = g, g = f, 0 > --i && (i = this.DB - 1, --p) } return r.revert(s) }, t.prototype.modInverse = function(e) { var n = e.isEven(); if (this.isEven() && n || 0 == e.signum()) return t.ZERO; for (var r = e.clone(), i = this.clone(), s = U(1), o = U(0), a = U(0), u = U(1); 0 != r.signum();) { for (; r.isEven();) r.rShiftTo(1, r), n ? (s.isEven() && o.isEven() || (s.addTo(this, s), o.subTo(e, o)), s.rShiftTo(1, s)) : o.isEven() || o.subTo(e, o), o.rShiftTo(1, o); for (; i.isEven();) i.rShiftTo(1, i), n ? (a.isEven() && u.isEven() || (a.addTo(this, a), u.subTo(e, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(e, u), u.rShiftTo(1, u);
                            0 > r.compareTo(i) ? (i.subTo(r, i), n && a.subTo(s, a), u.subTo(o, u)) : (r.subTo(i, r), n && s.subTo(a, s), o.subTo(u, o)) } return 0 != i.compareTo(t.ONE) ? t.ZERO : 0 > u.compareTo(e) ? 0 > u.signum() ? (u.addTo(e, u), 0 > u.signum() ? u.add(e) : u) : u : u.subtract(e) }, t.prototype.pow = function(t) { return this.exp(t, new V) }, t.prototype.gcd = function(t) { var e = 0 > this.s ? this.negate() : this.clone(),
                            n = 0 > t.s ? t.negate() : t.clone(); if (0 > e.compareTo(n)) { var r = e;
                            e = n, n = r } var i = e.getLowestSetBit(),
                            s = n.getLowestSetBit(); if (0 > s) return e; for (s > i && (s = i), s > 0 && (e.rShiftTo(s, e), n.rShiftTo(s, n)); e.signum() > 0;)(i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e), (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), 0 > e.compareTo(n) ? (n.subTo(e, n), n.rShiftTo(1, n)) : (e.subTo(n, e), e.rShiftTo(1, e)); return s > 0 && n.lShiftTo(s, n), n }, t.prototype.isProbablePrime = function(t) { var e, n = this.abs(); if (1 == n.t && A[A.length - 1] >= n[0]) { for (e = 0; A.length > e; ++e)
                                if (n[0] == A[e]) return !0;
                            return !1 } if (n.isEven()) return !1; for (e = 1; A.length > e;) { for (var r = A[e], i = e + 1; A.length > i && B > r;) r *= A[i++]; for (r = n.modInt(r); i > e;)
                                if (r % A[e++] == 0) return !1 } return n.millerRabin(t) }, t.prototype.copyTo = function(t) { for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                        t.t = this.t, t.s = this.s }, t.prototype.fromInt = function(t) { this.t = 1, this.s = 0 > t ? -1 : 0, t > 0 ? this[0] = t : -1 > t ? this[0] = t + this.DV : this.t = 0 }, t.prototype.fromString = function(e, n) { var r; if (16 == n) r = 4;
                        else if (8 == n) r = 3;
                        else if (256 == n) r = 8;
                        else if (2 == n) r = 1;
                        else if (32 == n) r = 5;
                        else { if (4 != n) return void this.fromRadix(e, n);
                            r = 2 }
                        this.t = 0, this.s = 0; for (var i = e.length, s = !1, o = 0; --i >= 0;) { var a = 8 == r ? 255 & +e[i] : L(e, i);
                            0 > a ? "-" == e.charAt(i) && (s = !0) : (s = !1, 0 == o ? this[this.t++] = a : o + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o, this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o, this.DB > (o += r) || (o -= this.DB)) }
                        8 == r && 0 != (128 & +e[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), this.clamp(), s && t.ZERO.subTo(this, this) }, t.prototype.clamp = function() { for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t }, t.prototype.dlShiftTo = function(t, e) { var n; for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n]; for (n = t - 1; n >= 0; --n) e[n] = 0;
                        e.t = this.t + t, e.s = this.s }, t.prototype.drShiftTo = function(t, e) { for (var n = t; this.t > n; ++n) e[n - t] = this[n];
                        e.t = Math.max(this.t - t, 0), e.s = this.s }, t.prototype.lShiftTo = function(t, e) { for (var n = t % this.DB, r = this.DB - n, i = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << n & this.DM, a = this.t - 1; a >= 0; --a) e[a + s + 1] = this[a] >> r | o, o = (this[a] & i) << n; for (var a = s - 1; a >= 0; --a) e[a] = 0;
                        e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp() }, t.prototype.rShiftTo = function(t, e) { e.s = this.s; var n = Math.floor(t / this.DB); if (this.t > n) { var r = t % this.DB,
                                i = this.DB - r,
                                s = (1 << r) - 1;
                            e[0] = this[n] >> r; for (var o = n + 1; this.t > o; ++o) e[o - n - 1] |= (this[o] & s) << i, e[o - n] = this[o] >> r;
                            r > 0 && (e[this.t - n - 1] |= (this.s & s) << i), e.t = this.t - n, e.clamp() } else e.t = 0 }, t.prototype.subTo = function(t, e) { for (var n = 0, r = 0, i = Math.min(t.t, this.t); i > n;) r += this[n] - t[n], e[n++] = r & this.DM, r >>= this.DB; if (this.t > t.t) { for (r -= t.s; this.t > n;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                            r += this.s } else { for (r += this.s; t.t > n;) r -= t[n], e[n++] = r & this.DM, r >>= this.DB;
                            r -= t.s }
                        e.s = 0 > r ? -1 : 0, -1 > r ? e[n++] = this.DV + r : r > 0 && (e[n++] = r), e.t = n, e.clamp() }, t.prototype.multiplyTo = function(e, n) { var r = this.abs(),
                            i = e.abs(),
                            s = r.t; for (n.t = s + i.t; --s >= 0;) n[s] = 0; for (s = 0; i.t > s; ++s) n[s + r.t] = r.am(0, i[s], n, s, 0, r.t);
                        n.s = 0, n.clamp(), this.s != e.s && t.ZERO.subTo(n, n) }, t.prototype.squareTo = function(t) { for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;) t[n] = 0; for (n = 0; e.t - 1 > n; ++n) { var r = e.am(n, e[n], t, 2 * n, 0, 1);
                            (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) < e.DV || (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1) }
                        t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)), t.s = 0, t.clamp() }, t.prototype.divRemTo = function(e, n, r) { var i = e.abs(); if (i.t > 0) { var s = this.abs(); if (i.t > s.t) return null != n && n.fromInt(0), void(null != r && this.copyTo(r));
                            null == r && (r = C()); var o = C(),
                                a = this.s,
                                u = e.s,
                                c = this.DB - M(i[i.t - 1]);
                            c > 0 ? (i.lShiftTo(c, o), s.lShiftTo(c, r)) : (i.copyTo(o), s.copyTo(r)); var h = o.t,
                                l = o[h - 1]; if (0 != l) { var f = l * (1 << this.F1) + (h > 1 ? o[h - 2] >> this.F2 : 0),
                                    p = this.FV / f,
                                    d = (1 << this.F1) / f,
                                    g = 1 << this.F2,
                                    m = r.t,
                                    v = m - h,
                                    y = null == n ? C() : n; for (o.dlShiftTo(v, y), 0 > r.compareTo(y) || (r[r.t++] = 1, r.subTo(y, r)), t.ONE.dlShiftTo(h, y), y.subTo(o, o); h > o.t;) o[o.t++] = 0; for (; --v >= 0;) { var b = r[--m] == l ? this.DM : Math.floor(r[m] * p + (r[m - 1] + g) * d); if ((r[m] += o.am(0, b, r, v, 0, h)) < b)
                                        for (o.dlShiftTo(v, y), r.subTo(y, r); r[m] < --b;) r.subTo(y, r) }
                                null != n && (r.drShiftTo(h, n), a != u && t.ZERO.subTo(n, n)), r.t = h, r.clamp(), c > 0 && r.rShiftTo(c, r), 0 > a && t.ZERO.subTo(r, r) } } }, t.prototype.invDigit = function() { if (1 > this.t) return 0; var t = this[0]; if (0 == (1 & t)) return 0; var e = 3 & t; return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e }, t.prototype.isEven = function() { return 0 == (this.t > 0 ? 1 & this[0] : this.s) }, t.prototype.exp = function(e, n) { if (e > 4294967295 || 1 > e) return t.ONE; var r = C(),
                            i = C(),
                            s = n.convert(this),
                            o = M(e) - 1; for (s.copyTo(r); --o >= 0;)
                            if (n.sqrTo(r, i), (e & 1 << o) > 0) n.mulTo(i, s, r);
                            else { var a = r;
                                r = i, i = a }
                        return n.revert(r) }, t.prototype.chunkSize = function(t) { return Math.floor(Math.LN2 * this.DB / Math.log(t)) }, t.prototype.toRadix = function(t) { if (null == t && (t = 10), 0 == this.signum() || 2 > t || t > 36) return "0"; var e = this.chunkSize(t),
                            n = Math.pow(t, e),
                            r = U(n),
                            i = C(),
                            s = C(),
                            o = ""; for (this.divRemTo(r, i, s); i.signum() > 0;) o = (n + s.intValue()).toString(t).substr(1) + o, i.divRemTo(r, i, s); return s.intValue().toString(t) + o }, t.prototype.fromRadix = function(e, n) { this.fromInt(0), null == n && (n = 10); for (var r = this.chunkSize(n), i = Math.pow(n, r), s = !1, o = 0, a = 0, u = 0; e.length > u; ++u) { var c = L(e, u);
                            0 > c ? "-" == e.charAt(u) && 0 == this.signum() && (s = !0) : (a = n * a + c, ++o < r || (this.dMultiply(i), this.dAddOffset(a, 0), o = 0, a = 0)) }
                        o > 0 && (this.dMultiply(Math.pow(n, o)), this.dAddOffset(a, 0)), s && t.ZERO.subTo(this, this) }, t.prototype.fromNumber = function(e, n, r) { if ("number" == typeof n)
                            if (2 > e) this.fromInt(1);
                            else
                                for (this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), i, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n);) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
                        else { var s = [],
                                o = 7 & e;
                            s.length = 1 + (e >> 3), n.nextBytes(s), o > 0 ? s[0] &= (1 << o) - 1 : s[0] = 0, this.fromString(s, 256) } }, t.prototype.bitwiseTo = function(t, e, n) { var r, i, s = Math.min(t.t, this.t); for (r = 0; s > r; ++r) n[r] = e(this[r], t[r]); if (this.t > t.t) { for (i = t.s & this.DM, r = s; this.t > r; ++r) n[r] = e(this[r], i);
                            n.t = this.t } else { for (i = this.s & this.DM, r = s; t.t > r; ++r) n[r] = e(i, t[r]);
                            n.t = t.t }
                        n.s = e(this.s, t.s), n.clamp() }, t.prototype.changeBit = function(e, n) { var r = t.ONE.shiftLeft(e); return this.bitwiseTo(r, n, r), r }, t.prototype.addTo = function(t, e) { for (var n = 0, r = 0, i = Math.min(t.t, this.t); i > n;) r += this[n] + t[n], e[n++] = r & this.DM, r >>= this.DB; if (this.t > t.t) { for (r += t.s; this.t > n;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                            r += this.s } else { for (r += this.s; t.t > n;) r += t[n], e[n++] = r & this.DM, r >>= this.DB;
                            r += t.s }
                        e.s = 0 > r ? -1 : 0, r > 0 ? e[n++] = r : -1 > r && (e[n++] = this.DV + r), e.t = n, e.clamp() }, t.prototype.dMultiply = function(t) { this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp() }, t.prototype.dAddOffset = function(t, e) { if (0 != t) { for (; e >= this.t;) this[this.t++] = 0; for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e < this.t || (this[this.t++] = 0), ++this[e] } }, t.prototype.multiplyLowerTo = function(t, e, n) { var r = Math.min(this.t + t.t, e); for (n.s = 0, n.t = r; r > 0;) n[--r] = 0; for (var i = n.t - this.t; i > r; ++r) n[r + this.t] = this.am(0, t[r], n, r, 0, this.t); for (var i = Math.min(t.t, e); i > r; ++r) this.am(0, t[r], n, r, 0, e - r);
                        n.clamp() }, t.prototype.multiplyUpperTo = function(t, e, n) { var r = n.t = this.t + t.t - --e; for (n.s = 0; --r >= 0;) n[r] = 0; for (r = Math.max(e - this.t, 0); t.t > r; ++r) n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
                        n.clamp(), n.drShiftTo(1, n) }, t.prototype.modInt = function(t) { if (0 >= t) return 0; var e = this.DV % t,
                            n = 0 > this.s ? t - 1 : 0; if (this.t > 0)
                            if (0 == e) n = this[0] % t;
                            else
                                for (var r = this.t - 1; r >= 0; --r) n = (e * n + this[r]) % t;
                        return n }, t.prototype.millerRabin = function(e) { var n = this.subtract(t.ONE),
                            r = n.getLowestSetBit(); if (0 >= r) return !1; var i = n.shiftRight(r);
                        (e = e + 1 >> 1) > A.length && (e = A.length); for (var s = C(), o = 0; e > o; ++o) { s.fromInt(A[Math.floor(Math.random() * A.length)]); var a = s.modPow(i, this); if (0 != a.compareTo(t.ONE) && 0 != a.compareTo(n)) { for (var u = 1; u++ < r && 0 != a.compareTo(n);)
                                    if (0 == (a = a.modPowInt(2, this)).compareTo(t.ONE)) return !1;
                                if (0 != a.compareTo(n)) return !1 } } return !0 }, t.prototype.square = function() { var t = C(); return this.squareTo(t), t }, t.prototype.gcda = function(t, e) { var n = 0 > this.s ? this.negate() : this.clone(),
                            r = 0 > t.s ? t.negate() : t.clone(); if (0 > n.compareTo(r)) { var i = n;
                            n = r, r = i } var s = n.getLowestSetBit(),
                            o = r.getLowestSetBit(); if (0 > o) e(n);
                        else { o > s && (o = s), o > 0 && (n.rShiftTo(o, n), r.rShiftTo(o, r)); var a = function() {
                                (s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n), (s = r.getLowestSetBit()) > 0 && r.rShiftTo(s, r), 0 > n.compareTo(r) ? (r.subTo(n, r), r.rShiftTo(1, r)) : (n.subTo(r, n), n.rShiftTo(1, n)), n.signum() > 0 ? setTimeout(a, 0) : (o > 0 && r.lShiftTo(o, r), setTimeout(function() { e(r) }, 0)) };
                            setTimeout(a, 10) } }, t.prototype.fromNumberAsync = function(e, n, r, s) { if ("number" == typeof n)
                            if (2 > e) this.fromInt(1);
                            else { this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), i, this), this.isEven() && this.dAddOffset(1, 0); var o = this,
                                    a = function() { o.dAddOffset(2, 0), o.bitLength() > e && o.subTo(t.ONE.shiftLeft(e - 1), o), o.isProbablePrime(n) ? setTimeout(function() { s() }, 0) : setTimeout(a, 0) };
                                setTimeout(a, 0) }
                        else { var u = [],
                                c = 7 & e;
                            u.length = 1 + (e >> 3), n.nextBytes(u), c > 0 ? u[0] &= (1 << c) - 1 : u[0] = 0, this.fromString(u, 256) } }, t }(),
                V = function() {
                    function t() {} return t.prototype.convert = function(t) { return t }, t.prototype.revert = function(t) { return t }, t.prototype.mulTo = function(t, e, n) { t.multiplyTo(e, n) }, t.prototype.sqrTo = function(t, e) { t.squareTo(e) }, t }(),
                R = function() {
                    function t(t) { this.m = t } return t.prototype.convert = function(t) { return 0 > t.s || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t }, t.prototype.revert = function(t) { return t }, t.prototype.reduce = function(t) { t.divRemTo(this.m, null, t) }, t.prototype.mulTo = function(t, e, n) { t.multiplyTo(e, n), this.reduce(n) }, t.prototype.sqrTo = function(t, e) { t.squareTo(e), this.reduce(e) }, t }(),
                O = function() {
                    function t(t) { this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t } return t.prototype.convert = function(t) { var e = C(); return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), 0 > t.s && e.compareTo(P.ZERO) > 0 && this.m.subTo(e, e), e }, t.prototype.revert = function(t) { var e = C(); return t.copyTo(e), this.reduce(e), e }, t.prototype.reduce = function(t) { for (; this.mt2 >= t.t;) t[t.t++] = 0; for (var e = 0; this.m.t > e; ++e) { var n = 32767 & t[e],
                                r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM; for (t[n = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV, t[++n]++ }
                        t.clamp(), t.drShiftTo(this.m.t, t), 0 > t.compareTo(this.m) || t.subTo(this.m, t) }, t.prototype.mulTo = function(t, e, n) { t.multiplyTo(e, n), this.reduce(n) }, t.prototype.sqrTo = function(t, e) { t.squareTo(e), this.reduce(e) }, t }(),
                I = function() {
                    function t(t) { this.m = t, this.r2 = C(), this.q3 = C(), P.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t) } return t.prototype.convert = function(t) { if (0 > t.s || t.t > 2 * this.m.t) return t.mod(this.m); if (0 > t.compareTo(this.m)) return t; var e = C(); return t.copyTo(e), this.reduce(e), e }, t.prototype.revert = function(t) { return t }, t.prototype.reduce = function(t) { for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > t.compareTo(this.r2);) t.dAddOffset(1, this.m.t + 1); for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t) }, t.prototype.mulTo = function(t, e, n) { t.multiplyTo(e, n), this.reduce(n) }, t.prototype.sqrTo = function(t, e) { t.squareTo(e), this.reduce(e) }, t }();

            function C() { return new P(null) }

            function N(t, e) { return new P(t, e) } "Microsoft Internet Explorer" == navigator.appName ? (P.prototype.am = function(t, e, n, r, i, s) { for (var o = 32767 & e, a = e >> 15; --s >= 0;) { var u = 32767 & this[t],
                        c = this[t++] >> 15,
                        h = a * u + c * o;
                    i = ((u = o * u + ((32767 & h) << 15) + n[r] + (1073741823 & i)) >>> 30) + (h >>> 15) + a * c + (i >>> 30), n[r++] = 1073741823 & u } return i }, E = 30) : "Netscape" != navigator.appName ? (P.prototype.am = function(t, e, n, r, i, s) { for (; --s >= 0;) { var o = e * this[t++] + n[r] + i;
                    i = Math.floor(o / 67108864), n[r++] = 67108863 & o } return i }, E = 26) : (P.prototype.am = function(t, e, n, r, i, s) { for (var o = 16383 & e, a = e >> 14; --s >= 0;) { var u = 16383 & this[t],
                        c = this[t++] >> 14,
                        h = a * u + c * o;
                    i = ((u = o * u + ((16383 & h) << 14) + n[r] + i) >> 28) + (h >> 14) + a * c, n[r++] = 268435455 & u } return i }, E = 28), P.prototype.DB = E, P.prototype.DM = (1 << E) - 1, P.prototype.DV = 1 << E, P.prototype.FV = Math.pow(2, 52), P.prototype.F1 = 52 - E, P.prototype.F2 = 2 * E - 52; var _, j, q = []; for (_ = 48, j = 0; 9 >= j; ++j) q[_++] = j; for (_ = 97, j = 10; 36 > j; ++j) q[_++] = j; for (_ = 65, j = 10; 36 > j; ++j) q[_++] = j;

            function L(t, e) { var n = q[t.charCodeAt(e)]; return null == n ? -1 : n }

            function U(t) { var e = C(); return e.fromInt(t), e }

            function M(t) { var e, n = 1; return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n }
            P.ZERO = U(0), P.ONE = U(1); var F, z, H = function() {
                    function t() { this.i = 0, this.j = 0, this.S = [] } return t.prototype.init = function(t) { var e, n, r; for (e = 0; 256 > e; ++e) this.S[e] = e; for (n = 0, e = 0; 256 > e; ++e) r = this.S[e], this.S[e] = this.S[n = n + this.S[e] + t[e % t.length] & 255], this.S[n] = r;
                        this.i = 0, this.j = 0 }, t.prototype.next = function() { var t; return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255] }, t }(),
                K = 256,
                $ = null; if (null == $) { $ = [], z = 0; var Z = void 0; if (window.crypto && window.crypto.getRandomValues) { var G = new Uint32Array(256); for (window.crypto.getRandomValues(G), Z = 0; G.length > Z; ++Z) $[z++] = 255 & G[Z] } var Y = function(t) { if (this.count = this.count || 0, 256 > this.count && K > z) try { var e = t.x + t.y;
                        $[z++] = 255 & e, this.count += 1 } catch (t) {} else window.removeEventListener ? window.removeEventListener("mousemove", Y, !1) : window.detachEvent && window.detachEvent("onmousemove", Y) };
                window.addEventListener ? window.addEventListener("mousemove", Y, !1) : window.attachEvent && window.attachEvent("onmousemove", Y) }

            function J() { if (null == F) { for (F = new H; K > z;) { var t = Math.floor(65536 * Math.random());
                        $[z++] = 255 & t } for (F.init($), z = 0; $.length > z; ++z) $[z] = 0;
                    z = 0 } return F.next() } var X = function() {
                    function t() {} return t.prototype.nextBytes = function(t) { for (var e = 0; t.length > e; ++e) t[e] = J() }, t }(),
                Q = function() {
                    function t() { this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null } return t.prototype.doPublic = function(t) { return t.modPowInt(this.e, this.n) }, t.prototype.doPrivate = function(t) { if (null == this.p || null == this.q) return t.modPow(this.d, this.n); for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); 0 > e.compareTo(n);) e = e.add(this.p); return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n) }, t.prototype.setPublic = function(t, e) { null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = N(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key") }, t.prototype.encrypt = function(t) { var e = function(t, e) { if (t.length + 11 > e) return console.error("Message too long for RSA"), null; for (var n = [], r = t.length - 1; r >= 0 && e > 0;) { var i = t.charCodeAt(r--);
                                128 > i ? n[--e] = i : i > 127 && 2048 > i ? (n[--e] = 63 & i | 128, n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128, n[--e] = i >> 6 & 63 | 128, n[--e] = i >> 12 | 224) }
                            n[--e] = 0; for (var s = new X, o = []; e > 2;) { for (o[0] = 0; 0 == o[0];) s.nextBytes(o);
                                n[--e] = o[0] } return n[--e] = 2, n[--e] = 0, new P(n) }(t, this.n.bitLength() + 7 >> 3); if (null == e) return null; var n = this.doPublic(e); if (null == n) return null; var r = n.toString(16); return 0 == (1 & r.length) ? r : "0" + r }, t.prototype.setPrivate = function(t, e, n) { null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = N(t, 16), this.e = parseInt(e, 16), this.d = N(n, 16)) : console.error("Invalid RSA private key") }, t.prototype.setPrivateEx = function(t, e, n, r, i, s, o, a) { null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = N(t, 16), this.e = parseInt(e, 16), this.d = N(n, 16), this.p = N(r, 16), this.q = N(i, 16), this.dmp1 = N(s, 16), this.dmq1 = N(o, 16), this.coeff = N(a, 16)) : console.error("Invalid RSA private key") }, t.prototype.generate = function(t, e) { var n = new X,
                            r = t >> 1;
                        this.e = parseInt(e, 16); for (var i = new P(e, 16);;) { for (; this.p = new P(t - r, 1, n), 0 != this.p.subtract(P.ONE).gcd(i).compareTo(P.ONE) || !this.p.isProbablePrime(10);); for (; this.q = new P(r, 1, n), 0 != this.q.subtract(P.ONE).gcd(i).compareTo(P.ONE) || !this.q.isProbablePrime(10);); if (0 >= this.p.compareTo(this.q)) { var s = this.p;
                                this.p = this.q, this.q = s } var o = this.p.subtract(P.ONE),
                                a = this.q.subtract(P.ONE),
                                u = o.multiply(a); if (0 == u.gcd(i).compareTo(P.ONE)) { this.n = this.p.multiply(this.q), this.d = i.modInverse(u), this.dmp1 = this.d.mod(o), this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p); break } } }, t.prototype.decrypt = function(t) { var e = N(t, 16),
                            n = this.doPrivate(e); return null == n ? null : function(t, e) { for (var n = t.toByteArray(), r = 0; n.length > r && 0 == n[r];) ++r; if (n.length - r != e - 1 || 2 != n[r]) return null; for (++r; 0 != n[r];)
                                if (++r >= n.length) return null;
                            for (var i = ""; ++r < n.length;) { var s = 255 & n[r];
                                128 > s ? i += String.fromCharCode(s) : s > 191 && 224 > s ? (i += String.fromCharCode((31 & s) << 6 | 63 & n[r + 1]), ++r) : (i += String.fromCharCode((15 & s) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]), r += 2) } return i }(n, this.n.bitLength() + 7 >> 3) }, t.prototype.generateAsync = function(t, e, n) { var r = new X,
                            i = t >> 1;
                        this.e = parseInt(e, 16); var s = new P(e, 16),
                            o = this,
                            a = function() { var e = function() { if (0 >= o.p.compareTo(o.q)) { var t = o.p;
                                            o.p = o.q, o.q = t } var e = o.p.subtract(P.ONE),
                                            r = o.q.subtract(P.ONE),
                                            i = e.multiply(r);
                                        0 == i.gcd(s).compareTo(P.ONE) ? (o.n = o.p.multiply(o.q), o.d = s.modInverse(i), o.dmp1 = o.d.mod(e), o.dmq1 = o.d.mod(r), o.coeff = o.q.modInverse(o.p), setTimeout(function() { n() }, 0)) : setTimeout(a, 0) },
                                    u = function() { o.q = C(), o.q.fromNumberAsync(i, 1, r, function() { o.q.subtract(P.ONE).gcda(s, function(t) { 0 == t.compareTo(P.ONE) && o.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(u, 0) }) }) },
                                    c = function() { o.p = C(), o.p.fromNumberAsync(t - i, 1, r, function() { o.p.subtract(P.ONE).gcda(s, function(t) { 0 == t.compareTo(P.ONE) && o.p.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(c, 0) }) }) };
                                setTimeout(c, 0) };
                        setTimeout(a, 0) }, t.prototype.sign = function(t, e, n) { var r = W[n] || "",
                            i = r + "" + e(t),
                            s = function(t, e) { if (t.length + 22 > e) return console.error("Message too long for RSA"), null; for (var n = e - t.length - 6, r = "", i = 0; n > i; i += 2) r += "ff"; return N("0001" + r + "00" + t, 16) }(i, this.n.bitLength() / 4); if (null == s) return null; var o = this.doPrivate(s); if (null == o) return null; var a = o.toString(16); return 0 == (1 & a.length) ? a : "0" + a }, t.prototype.verify = function(t, e, n) { var r = N(e, 16),
                            i = this.doPublic(r); if (null == i) return null; var s = i.toString(16).replace(/^1f+00/, ""),
                            o = function(t) { for (var e in W)
                                    if (W.hasOwnProperty(e)) { var n = W[e],
                                            r = n.length; if (t.substr(0, r) == n) return t.substr(r) }
                                return t }(s); return o == "" + n(t) }, t }(),
                W = { md2: "3020300c06082a864886f70d020205000410", md5: "3020300c06082a864886f70d020505000410", sha1: "3021300906052b0e03021a05000414", sha224: "302d300d06096086480165030402040500041c", sha256: "3031300d060960864801650304020105000420", sha384: "3041300d060960864801650304020205000430", sha512: "3051300d060960864801650304020305000440", ripemd160: "3021300906052b2403020105000414" },
                tt = {};
            tt.lang = { extend: function(t, e, n) { if (!e || !t) throw Error("YAHOO.lang.extend failed, please check that all dependencies are included."); var r = function() {}; if (r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), n) { var i; for (i in n) t.prototype[i] = n[i]; var s = function() {},
                            o = ["toString", "valueOf"]; try { /MSIE/.test(navigator.userAgent) && (s = function(t, e) { for (i = 0; o.length > i; i += 1) { var n = o[i],
                                        r = e[n]; "function" == typeof r && r != Object.prototype[n] && (t[n] = r) } }) } catch (t) {}
                        s(t.prototype, n) } } }; var et = {};
            void 0 !== et.asn1 && et.asn1 || (et.asn1 = {}), et.asn1.ASN1Util = new function() { this.integerToByteHex = function(t) { var e = t.toString(16); return e.length % 2 == 1 && (e = "0" + e), e }, this.bigIntToMinTwosComplementsHex = function(t) { var e = t.toString(16); if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                    else { var n = e.substr(1),
                            r = n.length;
                        r % 2 == 1 ? r += 1 : e.match(/^[0-7]/) || (r += 2); for (var i = "", s = 0; r > s; s++) i += "f"; var o = new P(i, 16),
                            a = o.xor(t).add(P.ONE);
                        e = a.toString(16).replace(/^-/, "") } return e }, this.getPEMStringFromHex = function(t, e) { return hextopem(t, e) }, this.newObject = function(t) { var e = et,
                        n = e.asn1,
                        r = n.DERBoolean,
                        i = n.DERInteger,
                        s = n.DERBitString,
                        o = n.DEROctetString,
                        a = n.DERNull,
                        u = n.DERObjectIdentifier,
                        c = n.DEREnumerated,
                        h = n.DERUTF8String,
                        l = n.DERNumericString,
                        f = n.DERPrintableString,
                        p = n.DERTeletexString,
                        d = n.DERIA5String,
                        g = n.DERUTCTime,
                        m = n.DERGeneralizedTime,
                        v = n.DERSequence,
                        y = n.DERSet,
                        b = n.DERTaggedObject,
                        w = n.ASN1Util.newObject,
                        T = Object.keys(t); if (1 != T.length) throw "key of param shall be only one."; var k = T[0]; if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + k + ":")) throw "undefined key: " + k; if ("bool" == k) return new r(t[k]); if ("int" == k) return new i(t[k]); if ("bitstr" == k) return new s(t[k]); if ("octstr" == k) return new o(t[k]); if ("null" == k) return new a(t[k]); if ("oid" == k) return new u(t[k]); if ("enum" == k) return new c(t[k]); if ("utf8str" == k) return new h(t[k]); if ("numstr" == k) return new l(t[k]); if ("prnstr" == k) return new f(t[k]); if ("telstr" == k) return new p(t[k]); if ("ia5str" == k) return new d(t[k]); if ("utctime" == k) return new g(t[k]); if ("gentime" == k) return new m(t[k]); if ("seq" == k) { for (var E = t[k], S = [], x = 0; E.length > x; x++) { var D = w(E[x]);
                            S.push(D) } return new v({ array: S }) } if ("set" == k) { for (var E = t[k], S = [], x = 0; E.length > x; x++) { var D = w(E[x]);
                            S.push(D) } return new y({ array: S }) } if ("tag" == k) { var A = t[k]; if ("[object Array]" === Object.prototype.toString.call(A) && 3 == A.length) { var B = w(A[2]); return new b({ tag: A[0], explicit: A[1], obj: B }) } var P = {}; if (void 0 !== A.explicit && (P.explicit = A.explicit), void 0 !== A.tag && (P.tag = A.tag), void 0 === A.obj) throw "obj shall be specified for 'tag'."; return P.obj = w(A.obj), new b(P) } }, this.jsonToASN1HEX = function(t) { var e = this.newObject(t); return e.getEncodedHex() } }, et.asn1.ASN1Util.oidHexToInt = function(t) { for (var e = "", n = parseInt(t.substr(0, 2), 16), r = Math.floor(n / 40), i = n % 40, e = r + "." + i, s = "", o = 2; t.length > o; o += 2) { var a = parseInt(t.substr(o, 2), 16),
                        u = ("00000000" + a.toString(2)).slice(-8); if (s += u.substr(1, 7), "0" == u.substr(0, 1)) { var c = new P(s, 2);
                        e = e + "." + c.toString(10), s = "" } } return e }, et.asn1.ASN1Util.oidIntToHex = function(t) { var e = function(t) { var e = t.toString(16); return 1 == e.length && (e = "0" + e), e },
                    n = function(t) { var n = "",
                            r = new P(t, 10),
                            i = r.toString(2),
                            s = 7 - i.length % 7;
                        7 == s && (s = 0); for (var o = "", a = 0; s > a; a++) o += "0";
                        i = o + i; for (var a = 0; i.length - 1 > a; a += 7) { var u = i.substr(a, 7);
                            a != i.length - 7 && (u = "1" + u), n += e(parseInt(u, 2)) } return n }; if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t; var r = "",
                    i = t.split("."),
                    s = 40 * parseInt(i[0]) + parseInt(i[1]);
                r += e(s), i.splice(0, 2); for (var o = 0; i.length > o; o++) r += n(i[o]); return r }, et.asn1.ASN1Object = function() { this.getLengthHexFromValue = function() { if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined."; if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV; var t = this.hV.length / 2,
                        e = t.toString(16); if (e.length % 2 == 1 && (e = "0" + e), 128 > t) return e; var n = e.length / 2; if (n > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16); var r = 128 + n; return r.toString(16) + e }, this.getEncodedHex = function() { return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV }, this.getValueHex = function() { return this.getEncodedHex(), this.hV }, this.getFreshValueHex = function() { return "" } }, et.asn1.DERAbstractString = function(t) { et.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() { return this.s }, this.setString = function(t) { this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s) }, this.setStringHex = function(t) { this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t }, this.getFreshValueHex = function() { return this.hV }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex)) }, tt.lang.extend(et.asn1.DERAbstractString, et.asn1.ASN1Object), et.asn1.DERAbstractTime = function(t) { et.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) { utc = t.getTime() + 6e4 * t.getTimezoneOffset(); var e = new Date(utc); return e }, this.formatDate = function(t, e, n) { var r = this.zeroPadding,
                        i = this.localDateToUTC(t),
                        s = i.getFullYear() + ""; "utc" == e && (s = s.substr(2, 2)); var o = r(i.getMonth() + 1 + "", 2),
                        a = r(i.getDate() + "", 2),
                        u = r(i.getHours() + "", 2),
                        c = r(i.getMinutes() + "", 2),
                        h = r(i.getSeconds() + "", 2),
                        l = s + o + a + u + c + h; if (!0 === n) { var f = i.getMilliseconds(); if (0 != f) { var p = r(f + "", 3);
                            p = p.replace(/[0]+$/, ""), l = l + "." + p } } return l + "Z" }, this.zeroPadding = function(t, e) { return e > t.length ? Array(e - t.length + 1).join("0") + t : t }, this.getString = function() { return this.s }, this.setString = function(t) { this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t) }, this.setByDateValue = function(t, e, n, r, i, s) { var o = new Date(Date.UTC(t, e - 1, n, r, i, s, 0));
                    this.setByDate(o) }, this.getFreshValueHex = function() { return this.hV } }, tt.lang.extend(et.asn1.DERAbstractTime, et.asn1.ASN1Object), et.asn1.DERAbstractStructured = function(t) { et.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) { this.hTLV = null, this.isModified = !0, this.asn1Array = t }, this.appendASN1Object = function(t) { this.hTLV = null, this.isModified = !0, this.asn1Array.push(t) }, this.asn1Array = [], void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array) }, tt.lang.extend(et.asn1.DERAbstractStructured, et.asn1.ASN1Object), et.asn1.DERBoolean = function() { et.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff" }, tt.lang.extend(et.asn1.DERBoolean, et.asn1.ASN1Object), et.asn1.DERInteger = function(t) { et.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) { this.hTLV = null, this.isModified = !0, this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t) }, this.setByInteger = function(t) { var e = new P(t + "", 10);
                    this.setByBigInteger(e) }, this.setValueHex = function(t) { this.hV = t }, this.getFreshValueHex = function() { return this.hV }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex)) }, tt.lang.extend(et.asn1.DERInteger, et.asn1.ASN1Object), et.asn1.DERBitString = function(t) { if (void 0 !== t && void 0 !== t.obj) { var e = et.asn1.ASN1Util.newObject(t.obj);
                    t.hex = "00" + e.getEncodedHex() }
                et.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) { this.hTLV = null, this.isModified = !0, this.hV = t }, this.setUnusedBitsAndHexValue = function(t, e) { if (0 > t || t > 7) throw "unused bits shall be from 0 to 7: u = " + t; var n = "0" + t;
                    this.hTLV = null, this.isModified = !0, this.hV = n + e }, this.setByBinaryString = function(t) { var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0); for (var n = 0; e >= n; n++) t += "0"; for (var r = "", n = 0; t.length - 1 > n; n += 8) { var i = t.substr(n, 8),
                            s = parseInt(i, 2).toString(16);
                        1 == s.length && (s = "0" + s), r += s }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r }, this.setByBooleanArray = function(t) { for (var e = "", n = 0; t.length > n; n++) e += 1 == t[n] ? "1" : "0";
                    this.setByBinaryString(e) }, this.newFalseArray = function(t) { for (var e = Array(t), n = 0; t > n; n++) e[n] = !1; return e }, this.getFreshValueHex = function() { return this.hV }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array)) }, tt.lang.extend(et.asn1.DERBitString, et.asn1.ASN1Object), et.asn1.DEROctetString = function(t) { if (void 0 !== t && void 0 !== t.obj) { var e = et.asn1.ASN1Util.newObject(t.obj);
                    t.hex = e.getEncodedHex() }
                et.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04" }, tt.lang.extend(et.asn1.DEROctetString, et.asn1.DERAbstractString), et.asn1.DERNull = function() { et.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500" }, tt.lang.extend(et.asn1.DERNull, et.asn1.ASN1Object), et.asn1.DERObjectIdentifier = function(t) { var e = function(t) { var e = t.toString(16); return 1 == e.length && (e = "0" + e), e },
                    n = function(t) { var n = "",
                            r = new P(t, 10),
                            i = r.toString(2),
                            s = 7 - i.length % 7;
                        7 == s && (s = 0); for (var o = "", a = 0; s > a; a++) o += "0";
                        i = o + i; for (var a = 0; i.length - 1 > a; a += 7) { var u = i.substr(a, 7);
                            a != i.length - 7 && (u = "1" + u), n += e(parseInt(u, 2)) } return n };
                et.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) { this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t }, this.setValueOidString = function(t) { if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t; var r = "",
                        i = t.split("."),
                        s = 40 * parseInt(i[0]) + parseInt(i[1]);
                    r += e(s), i.splice(0, 2); for (var o = 0; i.length > o; o++) r += n(i[o]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r }, this.setValueName = function(t) { var e = et.asn1.x509.OID.name2oid(t); if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e) }, this.getFreshValueHex = function() { return this.hV }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name)) }, tt.lang.extend(et.asn1.DERObjectIdentifier, et.asn1.ASN1Object), et.asn1.DEREnumerated = function(t) { et.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) { this.hTLV = null, this.isModified = !0, this.hV = et.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t) }, this.setByInteger = function(t) { var e = new P(t + "", 10);
                    this.setByBigInteger(e) }, this.setValueHex = function(t) { this.hV = t }, this.getFreshValueHex = function() { return this.hV }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex)) }, tt.lang.extend(et.asn1.DEREnumerated, et.asn1.ASN1Object), et.asn1.DERUTF8String = function(t) { et.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c" }, tt.lang.extend(et.asn1.DERUTF8String, et.asn1.DERAbstractString), et.asn1.DERNumericString = function(t) { et.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12" }, tt.lang.extend(et.asn1.DERNumericString, et.asn1.DERAbstractString), et.asn1.DERPrintableString = function(t) { et.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13" }, tt.lang.extend(et.asn1.DERPrintableString, et.asn1.DERAbstractString), et.asn1.DERTeletexString = function(t) { et.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14" }, tt.lang.extend(et.asn1.DERTeletexString, et.asn1.DERAbstractString), et.asn1.DERIA5String = function(t) { et.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16" }, tt.lang.extend(et.asn1.DERIA5String, et.asn1.DERAbstractString), et.asn1.DERUTCTime = function(t) { et.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) { this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s) }, this.getFreshValueHex = function() { return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date)) }, tt.lang.extend(et.asn1.DERUTCTime, et.asn1.DERAbstractTime), et.asn1.DERGeneralizedTime = function(t) { et.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function(t) { this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s) }, this.getFreshValueHex = function() { return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0)) }, tt.lang.extend(et.asn1.DERGeneralizedTime, et.asn1.DERAbstractTime), et.asn1.DERSequence = function(t) { et.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() { for (var t = "", e = 0; this.asn1Array.length > e; e++) { var n = this.asn1Array[e];
                        t += n.getEncodedHex() } return this.hV = t, this.hV } }, tt.lang.extend(et.asn1.DERSequence, et.asn1.DERAbstractStructured), et.asn1.DERSet = function(t) { et.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() { for (var t = [], e = 0; this.asn1Array.length > e; e++) { var n = this.asn1Array[e];
                        t.push(n.getEncodedHex()) } return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1) }, tt.lang.extend(et.asn1.DERSet, et.asn1.DERAbstractStructured), et.asn1.DERTaggedObject = function(t) { et.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, n) { this.hT = e, this.isExplicit = t, this.asn1Object = n, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1) }, this.getFreshValueHex = function() { return this.hV }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object))) }, tt.lang.extend(et.asn1.DERTaggedObject, et.asn1.ASN1Object); var nt = function(t) {
                    function e(n) { var r = t.call(this) || this; return n && ("string" == typeof n ? r.parseKey(n) : (e.hasPrivateKeyProperty(n) || e.hasPublicKeyProperty(n)) && r.parsePropertiesFrom(n)), r } return function(t, e) {
                        function n() { this.constructor = t }
                        g(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) }(e, t), e.prototype.parseKey = function(t) { try { var e = 0,
                                n = 0,
                                r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? m.decode(t) : v.unarmor(t),
                                i = x.decode(r); if (3 === i.sub.length && (i = i.sub[2].sub[0]), 9 === i.sub.length) { e = i.sub[1].getHexStringValue(), this.n = N(e, 16), n = i.sub[2].getHexStringValue(), this.e = parseInt(n, 16); var s = i.sub[3].getHexStringValue();
                                this.d = N(s, 16); var o = i.sub[4].getHexStringValue();
                                this.p = N(o, 16); var a = i.sub[5].getHexStringValue();
                                this.q = N(a, 16); var u = i.sub[6].getHexStringValue();
                                this.dmp1 = N(u, 16); var c = i.sub[7].getHexStringValue();
                                this.dmq1 = N(c, 16); var h = i.sub[8].getHexStringValue();
                                this.coeff = N(h, 16) } else { if (2 !== i.sub.length) return !1; var l = i.sub[1],
                                    f = l.sub[0];
                                e = f.sub[0].getHexStringValue(), this.n = N(e, 16), n = f.sub[1].getHexStringValue(), this.e = parseInt(n, 16) } return !0 } catch (t) { return !1 } }, e.prototype.getPrivateBaseKey = function() { var t = { array: [new et.asn1.DERInteger({ int: 0 }), new et.asn1.DERInteger({ bigint: this.n }), new et.asn1.DERInteger({ int: this.e }), new et.asn1.DERInteger({ bigint: this.d }), new et.asn1.DERInteger({ bigint: this.p }), new et.asn1.DERInteger({ bigint: this.q }), new et.asn1.DERInteger({ bigint: this.dmp1 }), new et.asn1.DERInteger({ bigint: this.dmq1 }), new et.asn1.DERInteger({ bigint: this.coeff })] },
                            e = new et.asn1.DERSequence(t); return e.getEncodedHex() }, e.prototype.getPrivateBaseKeyB64 = function() { return l(this.getPrivateBaseKey()) }, e.prototype.getPublicBaseKey = function() { var t = new et.asn1.DERSequence({ array: [new et.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }), new et.asn1.DERNull] }),
                            e = new et.asn1.DERSequence({ array: [new et.asn1.DERInteger({ bigint: this.n }), new et.asn1.DERInteger({ int: this.e })] }),
                            n = new et.asn1.DERBitString({ hex: "00" + e.getEncodedHex() }),
                            r = new et.asn1.DERSequence({ array: [t, n] }); return r.getEncodedHex() }, e.prototype.getPublicBaseKeyB64 = function() { return l(this.getPublicBaseKey()) }, e.wordwrap = function(t, e) { if (e = e || 64, !t) return t; var n = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})"; return t.match(RegExp(n, "g")).join("\n") }, e.prototype.getPrivateKey = function() { var t = "-----BEGIN RSA PRIVATE KEY-----\n"; return t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----" }, e.prototype.getPublicKey = function() { var t = "-----BEGIN PUBLIC KEY-----\n"; return t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----" }, e.hasPublicKeyProperty = function(t) { return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") }, e.hasPrivateKeyProperty = function(t) { return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff") }, e.prototype.parsePropertiesFrom = function(t) { this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff) }, e }(Q),
                rt = function() {
                    function t(t) { this.default_key_size = parseInt((t = t || {}).default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null } return t.prototype.setKey = function(t) { this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new nt(t) }, t.prototype.setPrivateKey = function(t) { this.setKey(t) }, t.prototype.setPublicKey = function(t) { this.setKey(t) }, t.prototype.decrypt = function(t) { try { return this.getKey().decrypt(f(t)) } catch (t) { return !1 } }, t.prototype.encrypt = function(t) { try { return l(this.getKey().encrypt(t)) } catch (t) { return !1 } }, t.prototype.sign = function(t, e, n) { try { return l(this.getKey().sign(t, e, n)) } catch (t) { return !1 } }, t.prototype.verify = function(t, e, n) { try { return this.getKey().verify(t, f(e), n) } catch (t) { return !1 } }, t.prototype.getKey = function(t) { if (!this.key) { if (this.key = new nt, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                            this.key.generate(this.default_key_size, this.default_public_exponent) } return this.key }, t.prototype.getPrivateKey = function() { return this.getKey().getPrivateKey() }, t.prototype.getPrivateKeyB64 = function() { return this.getKey().getPrivateBaseKeyB64() }, t.prototype.getPublicKey = function() { return this.getKey().getPublicKey() }, t.prototype.getPublicKeyB64 = function() { return this.getKey().getPublicBaseKeyB64() }, t.version = "3.0.0-rc.1", t }();
            window.JSEncrypt = rt, t.JSEncrypt = rt, t.default = rt, Object.defineProperty(t, "__esModule", { value: !0 }) }(e) }(Wt = { exports: {} }, Wt.exports), Wt.exports);
    (te = ee) && te.__esModule && Object.prototype.hasOwnProperty.call(te, "default"); var ne = ee.JSEncrypt;

    function re(t) { var e = new ne; return e.setPublicKey(kt.publicKey), e.encrypt(t) }
    Xt.creditCardType.addCard({ niceType: "Verve", type: "verve", prefixPattern: /^5/, exactPattern: /^(50[67]|65000[346])\d*$/, gaps: [4, 8, 12, 16], lengths: [16, 17, 18, 19], code: { name: "CVV", size: 3 } }), Xt.creditCardType.removeCard(Xt.creditCardType.types.MAESTRO), Xt.creditCardType.changeOrder("verve", 0); var ie = function() {
            function t(e) { var n = e.number,
                    r = e.cvv,
                    i = e.month,
                    s = e.year,
                    o = e.pin;
                pt(this, t), this.number = n, this.cvv = r, this.month = i, this.year = s, this.pin = o } return dt(t, [{ key: "getEncryptedPin", value: function() { return this.pin ? re(this.pin) : void 0 } }, { key: "getLast4", value: function() { return this.number.substring(this.number.length - 4) } }, { key: "tokenize", value: function() { return re(this.number + "*" + this.cvv + "*" + this.month + "*" + this.year) } }], [{ key: "getType", value: function(t) { var e = Xt.number(t); return e && e.card ? { type: e.card.type, maxLength: e.card.lengths.pop() } : { type: null, maxLength: 0 } } }, { key: "validate", value: function(e) { var n = e.cvv,
                        r = e.month,
                        i = e.year,
                        s = { number: t.isNumberValid(e.number), expiry: t.isExpiryValid({ month: r, year: i }), cvv: t.isCvvValid(n) }; return { isValid: Object.values(s).every(function(t) { return !0 === t }), result: s } } }, { key: "validateNumber", value: function(t) { return Xt.number(t) } }, { key: "isNumberValid", value: function(e) { return t.validateNumber(e).isValid } }, { key: "validateCVV", value: function(t) { return Xt.cvv(t) } }, { key: "isCvvValid", value: function(e) { return t.validateCVV(e).isValid } }, { key: "validateExpiry", value: function(t) { if ("object" === (void 0 === t ? "undefined" : ft(t))) { var e = t.year; return Xt.expirationMonth(t.month) && Xt.expirationYear(e) } return Xt.expirationDate(t) } }, { key: "isExpiryValid", value: function(e) { return t.validateExpiry(e).isValid } }, { key: "generateTestCard", value: function(e) { var n = e || "default"; return new t(Qt.find(function(t) { return t.type === n })) } }]), t }(),
        se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
        oe = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = !!e.sorted,
                r = !!e.skipIndex,
                i = !!e.ignorenull,
                s = function(t) { return (t + "").replace(/(?:[\0-\x1F"-&\+-\}\x7F-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, encodeURIComponent).replace(/ /g, "+").replace(/[!'()~\*]/g, function(t) { return "%" + t.charCodeAt().toString(16).slice(-2).toUpperCase() }) },
                o = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(t); return n ? e.sort() : e },
                a = function(t) { return t.filter(function(t) { return t }).join("&") },
                u = function(t, e) { return a(o(e).map(function(n) { return h(t + "[" + n + "]", e[n]) })) },
                c = function(t, e) { return e.length ? a(e.map(function(e, n) { return h(r ? t + "[]" : t + "[" + n + "]", e) })) : s(t + "[]") },
                h = function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0 === e ? "undefined" : se(e),
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; return e === r ? r = i ? r : s(t) + "=" + r : /string|number|boolean/.test(n) ? r = s(t) + "=" + s(e) : Array.isArray(e) ? r = c(t, e) : "object" === n && (r = u(t, e)), r }; return t && a(o(t).map(function(e) { return h(e, t[e]) })) },
        ae = function(t) { var e = t.pin,
                n = kt.paymentBaseUrl + "charge/",
                r = { clientdata: t.clientdata, last4: t.last4, trans: t.trans, device: t.device, offset: (new Date).getTimezoneOffset() };
            e && (r.handle = e); var i = oe(r); return lt.post(n, i, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).then(function(t) { return Et.parse(t.data) }) },
        ue = function(t, e) { var n = kt.paymentBaseUrl + "charge/validate",
                r = oe({ trans: t, token: e }); return lt.post(n, r).then(function(t) { return Et.parse(t.data) }) };

    function ce(t, e) { return new Promise(function(n, r) { var i = ie.validate(t); if (!i.isValid) { var s = e || t.number,
                    o = "Invalid card details: " + Object.keys(i.result).filter(function(t) { return !1 === i.result[t] }).join(", ");
                r(Error(s ? o : "Please set a valid card with Transaction.setCard()")) }
            n() }) } var he = { setCard: function(t) { var e = this; return ce(t, !0).then(function() { e.card = new ie(t) }) }, chargeCard: function() { var t = this; return ce(this.card).then(function() { t.logAttempt("card"); var e = { clientdata: t.card.tokenize(), last4: t.card.getLast4(), pin: t.card.getEncryptedPin(), trans: t.id, device: t.device }; return ae(e).then(function(e) { return t.logAPIResponse(e, "card"), e }) }) }, authenticateCard: function(t) { var e = this; return ce(this.card).then(function() { return ue(e.id, t) }).then(function(t) { return e.logAPIResponse(t, "card"), t }) }, listenFor3DSCharge: function() { return this.listenForCharge("3DS_" + this.id, "card") } },
        le = function() {
            function t(e) { var n = e.bankId,
                    r = e.accountType,
                    i = e.accountNumber;
                pt(this, t), this.bankId = n, this.accountType = r, this.accountNumber = i } return dt(t, null, [{ key: "validate", value: function(e) { var n = e.bankId,
                        r = e.accountType,
                        i = e.accountNumber,
                        s = []; return n && "number" == typeof n || s.push("Invalid bankId. Please check for supported banks with BankAccount.supportedBanks()"), t.types.indexOf(r) > -1 ? "nuban" !== r || t.isValidNubanAccount(i) || s.push("Invalid account number. Nuban accounts must be 10 digit numbers") : s.push("Invalid bank type. Please check BankAccount.types for the list of valid bank types"), { isValid: 0 === s.length, errors: s } } }, { key: "isValidNubanAccount", value: function(t) { return !!t && (("number" == typeof t || /^\d+$/.test(t)) && 10 === t.length) } }, { key: "supportedBanks", value: function() { return lt.post(kt.paymentBaseUrl + "bank?pay_with_bank=true").then(function(t) { return t.data }) } }]), t }();
    le.types = ["nuban"]; var fe = function(t) { var e = kt.paymentBaseUrl + "bank/charge_account/" + t.bankId + "/" + t.transactionId,
                n = oe({ account_number: t.accountNumber, device: t.device }); return lt.post(e, n, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).then(function(t) { return Et.parse(t.data) }) },
        pe = function(t) { var e = kt.paymentBaseUrl + "bank/charge_account/" + t.bankId + "/" + t.transactionId,
                n = oe({ account_number: t.accountNumber, birthday: t.birthday }); return lt.post(e, n, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).then(function(t) { return Et.parse(t.data) }) },
        de = function(t) { var e = kt.paymentBaseUrl + "bank/validate_token/" + t.bankId + "/" + t.transactionId,
                n = oe({ device: t.device, token: t.token }); return lt.post(e, n, { headers: { "Content-Type": "application/x-www-form-urlencoded" } }).then(function(t) { return Et.parse(t.data) }) };

    function ge(t, e) { return new Promise(function(n, r) { var i = le.validate(t);
            i.isValid || r(Error(e || t.accountNumber ? i.errors[0] : "Please set a valid bank account with Transaction.setBank()"));
            n() }) } var me = Object.assign({}, { setBankAccount: function(t) { var e = this; return ge(t, !0).then(function() { e.bankAccount = new le(t) }) }, chargeBankAccount: function() { var t = this; return ge(this.bankAccount).then(function() { return t.logAttempt("bank account"), fe({ bankId: t.bankAccount.bankId, transactionId: t.id, accountNumber: t.bankAccount.accountNumber, device: t.device }).then(function(e) { return t.logAPIResponse(e, "bank account"), e }) }) }, registerBankAccount: function(t) { var e = this; return ge(this.bankAccount).then(function() { return pe({ bankId: e.bankAccount.bankId, transactionId: e.id, accountNumber: e.bankAccount.accountNumber, birthday: t }).then(function(t) { return e.logAPIResponse(t, "bank account"), t }) }) }, authenticateBankAccount: function(t) { var e = this; return ge(this.bankAccount).then(function() { return de({ bankId: e.bankAccount.bankId, transactionId: e.id, token: t, device: e.device }).then(function(t) { return e.logAPIResponse(t, "bank account"), t }) }) } }, { getIbankUrl: function(t) { var e = this,
                    n = t.bankId; return new Promise(function(t, r) { n || r(Error("Please send bankId")), t(Et.success({ url: kt.paymentBaseUrl + "bank/ibank/" + n + "/" + e.id })) }) }, listenForIbankCharge: function() { return this.listenForCharge("IBANK_" + this.id) } }),
        ve = function(t, e) { return lt.post(kt.paystackApiUrl + "checkout/ussd/reference", { transaction: t.transaction, channel: t.channel }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return Et.parse(t.data) }) };

    function ye(t) { return new Promise(function(e, n) { var r = ["737"]; if (-1 < r.indexOf(t)) e();
            else { var i = "Invalid channel. Available channels: " + r.join(", ");
                n(Error(i)) } }) } var be = { getUSSDShortcode: function(t) { var e = this,
                    n = t.channel; return ye(n).then(function() { return e.ussd[n] ? e.ussd[n] : ve({ transaction: e.id, channel: n }, e.merchant.key).then(function(t) { return "success" === t.status && (e.ussd[n] = t), t }) }) }, listenForUSSDCharge: function(t) { var e = this,
                    n = t.channel; return ye(n).then(function() { return e.ussd[n] ? e.listenForCharge(e.ussd[n].data.channel, n) : Promise.reject(Error("Please generate ussd shortcode with Transaction.getUSSDShortcode()")) }) } },
        we = function(t, e) { return lt.post(kt.paystackApiUrl + "offline/qr/generate", { source: "checkout", reference: t.transaction, channel: t.channel }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return Et.parse(t.data) }) };

    function Te(t) { return new Promise(function(e, n) { var r = ["visa"]; if (-1 < r.indexOf(t)) e();
            else { var i = "Invalid channel. Available channels: " + r.join(", ");
                n(Error(i)) } }) } var ke = { getQRCode: function(t) { var e = this,
                    n = t.channel; return Te(n).then(function() { return e.qr[n] ? e.qr[n] : we({ transaction: e.id, channel: n }, e.merchant.key).then(function(t) { return "success" === t.status && (e.qr[n] = t), t }) }) }, listenForQRCharge: function(t) { var e = this,
                    n = t.channel,
                    r = n; return Te(n).then(function() { return e.qr[n] ? e.listenForCharge(e.qr[n].data.channel, r) : Promise.reject(Error("Please generate qr code with Transaction.getQRCode()")) }) } },
        Ee = function(t) { return lt.post(kt.paystackApiUrl + "charge/mobile_money", { transaction: t.transaction, phone: t.phone, device: t.device, channel_name: t.channel_name }).then(function(t) { return Et.parse(t.data) }) },
        Se = function() {
            function t() { pt(this, t) } return dt(t, null, [{ key: "hasCountryCode", value: function(t) { return t && "+" === t[0] } }, { key: "hasOnlyDigits", value: function(t) { var e; return t && (e = t.substring(1), /^\d+$/.test(e)) } }, { key: "isE164Number", value: function(t) { return t && 17 > t.length } }, { key: "validate", value: function(e) { var n = []; return t.hasCountryCode(e) || n.push("Number should include country code prefix"), t.hasOnlyDigits(e) || n.push("Number should contain only digits"), t.isE164Number(e) || n.push("Number should not be longer than 16 digits"), { isValid: 0 === n.length, errors: n } } }]), t }(); var xe = { chargeMobileMoney: function(t) { var e = this,
                    n = t.phoneNumber; return function(t) { return new Promise(function(e, n) { var r = Se.validate(t);
                        r.isValid || n(Error(t ? r.errors[0] : "Please start a mobile money transaction with Transaction.chargeMobileMoney()")), e(r) }) }(n).then(function() { return e.logAttempt("mobile money"), Ee({ transaction: e.id, phone: n, device: e.device, channel_name: "MOBILE_MONEY_" + e.id }).then(function(t) { return "success" === t.status && (e.mobileMoney = t), t }) }) }, listenForMobileMoneyCharge: function() { if ("success" !== this.mobileMoney.status) return Promise.reject(Error("Please start a mobile money charge with Transaction.chargeMobileMoney()")); var t = this.mobileMoney.data; return this.listenForCharge(t.channel || t.channel_name, "mobile money") } },
        De = function(t, e) { return lt.post(kt.paystackApiUrl + "checkout/pay_with_phone/verify", { phone: t }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) },
        Ae = function(t, e, n) { return lt.post(kt.paystackApiUrl + "checkout/pay_with_phone/remove_card", { phone: t, id: n }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) },
        Be = function(t, e, n, r) { return lt.post(kt.paystackApiUrl + "checkout/pay_with_phone/validate_otp", { phone: t, otp: n, transaction: r }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) },
        Pe = function(t, e, n, r) { return lt.post(kt.paystackApiUrl + "checkout/pay_with_phone/validate_pin", { phone: t, pin: n, transaction: r }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) },
        Ve = function(t, e, n, r, i) { return lt.post(kt.paystackApiUrl + "checkout/pay_with_phone/set_pin", { phone: t, token: n, transaction: r, pin: i }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) },
        Re = function(t, e, n, r, i, s) { return lt.post(kt.paystackApiUrl + "checkout/pay_with_phone/charge", { id: t, token: n, cvv: i, transaction: r, phone: s }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) },
        Oe = function(t, e, n) { return lt.post(kt.paystackApiUrl + "checkout/pay_with_phone/enroll", { phone: t, transaction: n }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) };

    function Ie(t) { return new Promise(function(e, n) { var r = Se.validate(t);
            r.isValid || n(Error(t ? r.errors[0] : "Please set a valid customer with Transaction.setCustomer()"));
            e(r) }) } var Ce = { setCustomer: function(t) { var e = this,
                    n = t.phoneNumber; return Ie(n).then(function() { e.customer = n }) }, verifyCustomer: function() { var t = this; return Ie(this.customer).then(function() { return De(t.customer, t.merchant.key) }) }, deleteSavedCard: function(t) { var e = this; return Ie(this.customer).then(function() { return Ae(e.customer, e.merchant.key, t) }) }, authenticateCustomerOtp: function(t) { var e = this; return Ie(this.customer).then(function() { return Be(e.customer, e.merchant.key, t, e.id) }) }, authenticateCustomerPin: function(t) { var e = this; return Ie(this.customer).then(function() { return Pe(e.customer, e.merchant.key, t, e.id) }) }, setCustomerPin: function(t) { var e = this,
                    n = t.pin,
                    r = t.token; return Ie(this.customer).then(function() { return Ve(e.customer, e.merchant.key, r, e.id, n) }) }, chargeSavedCard: function(t) { var e = this,
                    n = t.cardId,
                    r = t.token,
                    i = t.cvv; return Ie(this.customer).then(function() { return Re(n, e.merchant.key, r, e.id, i, e.customer) }) }, enrollPhoneNumber: function(t) { var e = this; return Ie(this.customer).then(function() { return Oe(t, e.merchant.key, e.id) }) } },
        Ne = function(t) { return lt.post(kt.paystackApiUrl + "login", { email: t.email, password: t.password }).then(function(t) { return Et.parse(t.data) }) },
        _e = function(t) { return lt.post(kt.paystackApiUrl + "directdebit/initiate", { account_code: t.account_code, transaction: t.transaction }, { headers: { Authorization: "Bearer " + t.token, "jwt-auth": !0 } }).then(function(t) { return Et.parse(t.data) }) },
        je = function(t) { return lt.post(kt.paystackApiUrl + "directdebit/validate", { otp: t.otp, transaction: t.transaction }, { headers: { Authorization: "Bearer " + t.token, "jwt-auth": !0 } }).then(function(t) { return Et.parse(t.data) }) },
        qe = function(t) { return lt.get(kt.paystackApiUrl + "directdebit/account", { headers: { Authorization: "Bearer " + t, "jwt-auth": !0 } }).then(function(t) { return t.data }) };

    function Le(t) { return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t) }

    function Ue(t) { return parseInt(t, 10) === +t && +t >= 0 }

    function Me(t) { return t && "string" == typeof t } var Fe = { loginToDirectDebitAccount: function(t) { var e = this,
                    n = t.email,
                    r = { email: n, password: t.password }; return Le(n) ? Ne(r).then(function(t) { if ("success" === t.status) { var n = t.data,
                            r = n.token,
                            i = n.user.permissions; if (!i || 1 > i.length) throw Error("You do not have the privileges to perform this action"); if (i.find(function(t) { return "directdebit-*" === t })) return e.directDebit.token = r, t; throw Error("You do not have the privileges to perform this action") } return t }) : Promise.reject(Error("Invalid email")) }, chargeDirectDebit: function(t) { var e = this; return this.directDebit.token ? (this.logAttempt("direct debit"), _e({ account_code: t, transaction: this.id, token: this.directDebit.token }).then(function(t) { return e.logAPIResponse(t, "direct debit"), t.status && (e.directDebit.chargeResponse = t), t })) : Promise.reject(Error("Please login with Transaction.loginToDirectDebitAccount() to start a Direct debit charge")) }, getProvisionedAccounts: function() { var t = this; return qe(this.directDebit.token).then(function(e) { t.logAPIResponse(e, "direct debit"); var n = e.data; if (e.status) { if (n && 1 > n.length) return Promise.reject(Error("You have not provisioned any bank account for Direct Debit yet"));
                        t.directDebit.accounts = e.data } return e }) }, authenticateAccount: function(t) { var e = this; return je({ otp: t, transaction: this.id, token: this.directDebit.token }).then(function(t) { return e.logAPIResponse(t, "direct debit"), t }) } },
        ze = { get: function(t) { var e = {}; switch (t) {
                    case "card":
                        e = he; break;
                    case "bank":
                        e = me; break;
                    case "ussd":
                        e = be; break;
                    case "qr":
                        e = ke; break;
                    case "mobile_money":
                        e = xe; break;
                    case "phone":
                        e = Ce; break;
                    case "direct_debit":
                        e = Fe } return e } },
        He = function(t) { t || "undefined" == typeof navigator || (t = navigator.userAgent);
            t && t.headers && "string" == typeof t.headers["user-agent"] && (t = t.headers["user-agent"]); return "string" == typeof t && (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) }; var Ke = function(t, e, n) { var r = { Authorization: "Bearer " + e }; return lt.post(kt.paystackApiUrl + "transaction/update_log/" + t, { payload: JSON.stringify(n) }, { headers: r }).then(function(t) { return t.data }) },
        $e = function(t, e) { return lt.post(kt.paystackApiUrl + "transaction/set_ip/" + t, null, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) },
        Ze = function(t, e, n) { return lt.post(kt.paystackApiUrl + "transaction/set_referrer/" + t, { referrer: n }, { headers: { Authorization: "Bearer " + e } }).then(function(t) { return t.data }) },
        Ge = { log: { start_time: Math.round(Date.now() / 1e3), time_spent: 0, attempts: 0, authentication: null, errors: 0, success: !1, mobile: He(), input: [], history: [] }, getTimeSpent: function() { var t = Date.now(); return this.log.time_spent = Math.round(t / 1e3) - this.log.start_time, this.log.time_spent }, logPageOpen: function() { return this.log.history = [{ type: "open", message: "Opened checkout", time: this.getTimeSpent() }], this.saveLog() }, logChannelSwitch: function(t) { return this.log.history.push({ type: "action", message: "Set payment method to: " + t, time: this.getTimeSpent() }), this.saveLog() }, logValidationErrors: function(t) { var e = this; return t.forEach(function(t) { e.log.history.push({ type: "error", message: "Invalid " + t, time: e.getTimeSpent() }) }), this.saveLog() }, logInput: function(t) { var e = this.log.history.find(function(e) { return e.message === "Filled this field: " + t }); return this.log.history.push({ type: "input", message: (e ? "Changed" : "Filled") + " this field: " + t, time: this.getTimeSpent() }), this.saveLog() }, logBankSelect: function(t) { return this.log.history.push({ type: "action", message: "Selected bank: " + t, time: this.getTimeSpent() }), this.saveLog() }, logAPIResponse: function(t, e) { switch (t.status) {
                    case "success":
                        return this.logSuccess(e);
                    case "pending":
                        return this.logPending(e);
                    case "failed":
                        return this.logError(t.message);
                    case "auth":
                        return this.logAuth(t.data.auth);
                    default:
                        return !1 } }, logAttempt: function(t) { var e = "Attempted to pay"; return t && (e += " with " + t), this.log.attempts += 1, this.log.history.push({ type: "action", message: e, time: this.getTimeSpent() }), this.saveLog() }, logError: function(t) { var e = "Error"; return t && (e += ": " + t), this.log.errors += 1, this.log.history.push({ type: "error", message: e, time: this.getTimeSpent() }), this.saveLog() }, logAuth: function(t) { return this.log.authentication = t, this.log.history.push({ type: "auth", message: "Authentication Required: " + t, time: this.getTimeSpent() }), this.saveLog() }, logSuccess: function(t) { var e = "Successfully paid"; return t && (e += " with " + t), this.log.success = !0, this.log.history.push({ type: "success", message: e, time: this.getTimeSpent() }), this.saveLog() }, logPending: function(t) { var e = "Payment in progress"; return t && (e += " with " + t), this.log.history.push({ type: "pending", message: e, time: this.getTimeSpent() }), this.saveLog() }, logPageClose: function() { return this.log.history.push({ type: "close", message: "Closed checkout", time: this.getTimeSpent() }), this.saveLog() }, saveLog: function() { return Ke(this.id, this.merchant.key, this.log) }, saveIpAddress: function() { return $e(this.id, this.merchant.key) }, saveReferrer: function(t) { return Ze(this.id, this.merchant.key, t) } }; var Ye = function() {
            function t(e) { var n = this;
                pt(this, t), this.email = e.email, this.merchant = { logo: e.merchant_logo, name: e.merchant_name, key: e.merchant_key }, this.status = e.status, this.accessCode = e.access_code, this.amount = e.amount, this.domain = e.domain, this.currency = e.currency, this.id = e.id, this.channels = e.channels, this.label = e.label, this.metadata = e.metadata || {}, this.hash = e.hash || "", this.authorizations = e.authorizations, this.card = {}, this.bankAccount = {}, this.mobileMoney = {}, this.ussd = {}, this.qr = {}, this.directDebit = {}, this.device = null, this.customer = null, this.isCharging = !1, this.isListening = !1, window ? new Promise(function(t, e) { var n = new XMLHttpRequest;
                    n.open("GET", kt.pusherUrl), n.withCredentials = !0, n.onload = function() { if (n.status >= 200 && 300 > n.status) { var r = document.createElement("script");
                            r.appendChild(document.createTextNode(n.responseText)), document.head.appendChild(r), t() } else e(n.statusText) }, n.onerror = function() { return e(n.statusText) }, n.send(null) }) : Promise.reject(Error("Window object not available")), Object.assign(this, Ge), this.saveIpAddress(), this.channels.forEach(function(t) { var e = ze.get(t);
                    Object.assign(n, e) }) } return dt(t, [{ key: "setMetadata", value: function(t, e) { this.metadata[t] = e } }, { key: "setDevice", value: function(t) { this.device = t } }, { key: "listenForCharge", value: function(t, e) { var n = this,
                        r = void 0; return window && window.Pusher && (r = new window.Pusher(kt.pusherKey, { cluster: "eu" })), new Promise(function(i, s) { r || i(Et.requery({ message: "We could not listen for charge response." })); var o = r.subscribe(t);
                        o.bind("pusher:subscription_succeeded", function() { n.isListening = !0 }), o.bind("pusher:subscription_error", function() { n.isListening = !1, s(Et.requery({ message: "We could not listen for charge response. Use transaction.requery() to check the status." })) }), o.bind("response", function(s) { var o = Et.parse(s);
                            n.logAPIResponse(o, e), r.unsubscribe(t), i(o) }) }) } }, { key: "requery", value: function() { return At(this.id) } }]), t }(),
        Je = { ref: { required: !1, isValid: Me }, key: { required: !0, isValid: function(t) { return t && "pk" === t.substring(0, 2) } }, email: { required: !0, fallback: "customer_code", isValid: Le }, customer_code: { required: !1, isValid: Me }, amount: { required: !0, fallback: "plan", isValid: Ue }, plan: { required: !1, isValid: Me }, transaction_charge: { required: !1, isValid: Ue }, bearer: { required: !1, isValid: Me }, channels: { required: !1, isValid: function(t) { return t instanceof Array } }, currency: { required: !1, isValid: Me }, firstname: { required: !1, isValid: Me }, lastname: { required: !1, isValid: Me }, phone: { required: !1, isValid: Me }, remark: { required: !1, isValid: Me }, payment_page: { required: !1, isValid: Ue }, payment_request: { required: !1, isValid: Me }, quantity: { required: !1, isValid: Me }, coupon: { required: !1, isValid: Me }, start_date: { required: !1, isValid: Me }, interval: { required: !1, isValid: Me }, invoice_limit: { required: !1, isValid: Ue }, subaccount: { required: !1, isValid: Me }, hash: { required: !1, isValid: Me }, metadata: { required: !1, isValid: Me } }; var Xe = { validate: function(t) { var e = function(t) { var e = []; return t && "object" === (void 0 === t ? "undefined" : ft(t)) ? (Object.keys(Je).forEach(function(n) { var r = Je[n],
                            i = t[n];!r.required || i || t[r.fallback] ? i && !r.isValid(i) && e.push({ field: n, message: "Invalid field: " + n }) : e.push({ field: n, message: "Required field: " + n }) }), e) : (e.push({ message: "Please supply a valid object" }), e) }(t);
                e.length && e.forEach(function(t) { throw Error(t.message) }) }, request: function(t) { return St(t).then(function(t) { return Object.seal(new Ye(t.data)) }) }, requestWithAccessCode: function(t) { return xt(t).then(function(t) { return Object.seal(new Ye(t.data)) }) }, initialize: function(t) { return Object.seal(new Ye(t)) }, verify: function(t) { return Dt(t).then(function(t) { return t.data }) } },
        Qe = function(t) { return lt.get(kt.paystackApiUrl + "bank", { params: t }).then(function(t) { return t.data }) },
        We = function() { return lt.get(kt.paystackApiUrl + "checkout/resolutions").then(function(t) { return t.data }) },
        tn = function() { return lt.get(kt.paystackApiUrl + "checkout/celebrations").then(function(t) { return t.data }) },
        en = function() {
            function t() { pt(this, t) } return dt(t, null, [{ key: "contents", value: function() { return [{ key: "banks", usage: "Returns a list of banks that can be used to complete checkout" }, { key: "resolutions", usage: "Returns a list of known errors, mapped to their suggested resolutions" }, { key: "celebrations", usage: "Returns a list of upcoming celebrations" }] } }, { key: "fetch", value: function(t, e) { if (-1 >= this.contents().map(function(t) { return t.key }).indexOf(t)) throw Error("Please provide a valid config key. Use Toolkit.contents() to see available}."); var n = void 0; switch (t) {
                        case "banks":
                            n = Qe(e || { pay_with_bank: "1" }); break;
                        case "resolutions":
                            n = We(); break;
                        case "celebrations":
                            n = tn() } return n } }]), t }();

    function nn() { for (var t = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; 5 > n; n += 1) t += e.charAt(Math.floor(62 * Math.random())); return t }

    function rn(t, e) { var n, r, i, s = { email: "email", amount: "integer", transaction_charge: "integer", invoice_limit: "integer", onClose: "function", callback: "function", metadata: "object", channels: "array" };

        function o(t) { throw Error("Attribute " + t + " must be a valid " + s[t]) } if (s[t] && e) switch (s[t]) {
            case "email":
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) || o(t); break;
            case "integer":
                (parseInt(i = e, 10) !== i || 0 > i) && o(t); break;
            case "function":
                (r = e) && r && "[object Function]" === {}.toString.call(r) || o(t); break;
            case "object":
                ((n = e) !== Object(n) || "[object Array]" === Object.prototype.toString.call(n)) && o(t); break;
            case "array":
                (function(t) { return t.constructor === Array })(e) || o(t) } } var sn = function() {
        function t(e) { pt(this, t), this.defaults = function(t) { if (void 0 === t.key) throw Error("Please provide your public key via the key attribute"); if (void 0 === t.amount && void 0 === t.plan) throw Error("Please provide transaction amount via the amount or plan attribute"); if (void 0 === t.email && void 0 === t.customer_code) throw Error("Please provide customer email via the email or customerCode attribute"); if (t.transaction_charge && t.transaction_charge >= t.amount) throw Error("Transaction charge must be less than the transaction amount"); if (t.bearer && "account" !== t.bearer && "subaccount" !== t.bearer) throw Error("Bearer should be either account or subaccount"); if (t.channels && !t.channels.length) throw Error("Channels should be an array of [card, bank] values"); return Object.keys(t).forEach(function(e) { rn(e, t[e]) }), t }({ key: e.key || "", ref: e.ref || "", label: e.label || "", email: e.email || "", amount: e.amount || "", currency: e.currency || "NGN", firstname: e.firstname || e.firstName || "", lastname: e.lastname || e.lastName || "", phone: e.phone || "", remark: e.remark || "", payment_page: e.payment_page || e.paymentPage || "", payment_request: e.payment_request || e.paymentRequest || "", plan: e.plan || "", quantity: e.quantity || "", coupon: e.coupon || "", customer_code: e.customer_code || e.customerCode || "", invoice_limit: e.invoice_limit || e.invoiceLimit || "", start_date: e.start_date || e.startDate || "", interval: e.interval || e.interval || "", subaccount: e.subaccount || "", transaction_charge: e.transaction_charge || e.transactionCharge || "", bearer: e.bearer || "", metadata: e.metadata || "", onClose: e.onClose || "", callback: e.callback || "", tlsFallback: e.tlsFallback || "", channels: e.channels || "", hash: e.hash || "" }), this.isIframeOpen = !1, this.eventListener = this.eventListener.bind(this), this.setupBackground(), this.setupIframe(), this.listenForEvents() } return dt(t, [{ key: "setupBackground", value: function() { var t = document.createElement("iframe");
                t.setAttribute("frameBorder", "0"), t.setAttribute("allowtransparency", "true"), t.id = nn(), t.name = "paystack-checkout-background-" + t.id, t.style.cssText = "\n  z-index: 999999999999999;\n  background: transparent;\n  background: rgba(0, 0, 0, 0.75);    \n  border: 0px none transparent;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: opacity 0.3s;\n  -webkit-transition: opacity 0.3s;\n  visibility: hidden;\n", t.style.display = "none", this.background = t, document.body.appendChild(t); var e = this.background.contentWindow.document;
                e.open(), e.write('\n  <!DOCTYPE html>\n  <html lang="en">\n\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Paystack Popup Loader</title>\n    <style>\n      .app-loader {\n        margin: 200px 0;\n        text-align: center;\n        color: white;\n      }      \n      @keyframes app-loader__spinner {\n        0% {\n          opacity: 1;\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n      @-webkit-keyframes app-loader__spinner {\n        0% {\n          opacity: 1;\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n      .app-loader__spinner {\n        position: relative;\n        display: inline-block;\n      }\n      .app-loader__spinner div {\n        left: 95px;\n        top: 35px;\n        position: absolute;\n        -webkit-animation: app-loader__spinner linear 1s infinite;\n        animation: app-loader__spinner linear 1s infinite;\n        background: white;\n        width: 10px;\n        height: 30px;\n        border-radius: 40%;\n        -webkit-transform-origin: 5px 65px;\n        transform-origin: 5px 65px;\n      }\n      .app-loader__spinner div:nth-child(1) {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n        -webkit-animation-delay: -0.916666666666667s;\n        animation-delay: -0.916666666666667s;\n      }\n      .app-loader__spinner div:nth-child(2) {\n        -webkit-transform: rotate(30deg);\n        transform: rotate(30deg);\n        -webkit-animation-delay: -0.833333333333333s;\n        animation-delay: -0.833333333333333s;\n      }\n      .app-loader__spinner div:nth-child(3) {\n        -webkit-transform: rotate(60deg);\n        transform: rotate(60deg);\n        -webkit-animation-delay: -0.75s;\n        animation-delay: -0.75s;\n      }\n      .app-loader__spinner div:nth-child(4) {\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg);\n        -webkit-animation-delay: -0.666666666666667s;\n        animation-delay: -0.666666666666667s;\n      }\n      .app-loader__spinner div:nth-child(5) {\n        -webkit-transform: rotate(120deg);\n        transform: rotate(120deg);\n        -webkit-animation-delay: -0.583333333333333s;\n        animation-delay: -0.583333333333333s;\n      }\n      .app-loader__spinner div:nth-child(6) {\n        -webkit-transform: rotate(150deg);\n        transform: rotate(150deg);\n        -webkit-animation-delay: -0.5s;\n        animation-delay: -0.5s;\n      }\n      .app-loader__spinner div:nth-child(7) {\n        -webkit-transform: rotate(180deg);\n        transform: rotate(180deg);\n        -webkit-animation-delay: -0.416666666666667s;\n        animation-delay: -0.416666666666667s;\n      }\n      .app-loader__spinner div:nth-child(8) {\n        -webkit-transform: rotate(210deg);\n        transform: rotate(210deg);\n        -webkit-animation-delay: -0.333333333333333s;\n        animation-delay: -0.333333333333333s;\n      }\n      .app-loader__spinner div:nth-child(9) {\n        -webkit-transform: rotate(240deg);\n        transform: rotate(240deg);\n        -webkit-animation-delay: -0.25s;\n        animation-delay: -0.25s;\n      }\n      .app-loader__spinner div:nth-child(10) {\n        -webkit-transform: rotate(270deg);\n        transform: rotate(270deg);\n        -webkit-animation-delay: -0.166666666666667s;\n        animation-delay: -0.166666666666667s;\n      }\n      .app-loader__spinner div:nth-child(11) {\n        -webkit-transform: rotate(300deg);\n        transform: rotate(300deg);\n        -webkit-animation-delay: -0.083333333333333s;\n        animation-delay: -0.083333333333333s;\n      }\n      .app-loader__spinner div:nth-child(12) {\n        -webkit-transform: rotate(330deg);\n        transform: rotate(330deg);\n        -webkit-animation-delay: 0s;\n        animation-delay: 0s;\n      }\n      .app-loader__spinner {\n        width: 40px;\n        height: 40px;\n        -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n        transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id="app-loader" class="app-loader">\n      <div id="spinner" class="app-loader__spinner">\n        <div></div><div></div><div></div><div></div><div></div><div></div><div>\n        </div><div></div><div></div><div></div><div></div><div></div>\n      </div>\n    </div>\n  </body>\n\n  </html>\n'), e.close() } }, { key: "setupIframe", value: function() { var t = document.createElement("iframe");
                t.setAttribute("frameBorder", "0"), t.setAttribute("allowtransparency", "true"), t.id = nn(), t.name = "paystack-checkout-" + t.id, t.style.cssText = "\n  z-index: 999999999999999;\n  background: transparent;\n  border: 0px none transparent;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  visibility: hidden;\n  height: 100%;\n", t.style.display = "none", t.src = this.getUrl(), this.iframe = t, document.body.appendChild(t) } }, { key: "getUrl", value: function() { var t = this.defaults,
                    e = {};
                Object.keys(t).filter(function(e) { return "" !== t[e] }).forEach(function(n) { e[n] = t[n] }), e.metadata && "string" != typeof e.metadata && (e.metadata = JSON.stringify(e.metadata)), delete e.callback, delete e.onClose; var n = function t(e, n) { var r = []; return Object.keys(e).forEach(function(i) { var s = n ? n + "[" + i + "]" : i,
                            o = e[s];
                        r.push(null !== o && "object" === ("undefined" == typeof v ? "undefined" : ft(v)) ? t(o, s) : encodeURIComponent(i) + "=" + encodeURIComponent(o)) }), r.join("&") }(e); return wt.checkoutUrl + "popup?params=" + n } }, { key: "open", value: function() { this.iframe && !this.isIframeOpen && (this.background.style.display = "", this.background.style.visibility = "visible", this.iframe.style.display = "", this.iframe.contentWindow.postMessage("render", "*"), this.isIframeOpen = !0) } }, { key: "removeLoader", value: function() { this.iframe.style.visibility = "visible", this.background.contentWindow.document.getElementById("app-loader").style.display = "none" } }, { key: "close", value: function() { var t = this; return this.background.style.opacity = 0, this.iframe.style.display = "none", this.iframe.contentWindow.postMessage("close", "*"), this.isIframeOpen = !1, new Promise(function(e) { setTimeout(function() { t.background.style.display = "none", t.background.style.opacity = 1, e() }, 300) }) } }, { key: "remove", value: function() { this.iframe.parentElement.removeChild(this.iframe), this.background.parentElement.removeChild(this.background), this.iframe = null, this.background = null, this.stopListeningForEvents() } }, { key: "eventListener", value: function(t) { var e = this; if (t.origin + "/" === wt.checkoutUrl) { var n = t.data || t.message; if ("loaded" === n && (this.removeLoader(), this.isIframeOpen && this.iframe.contentWindow.postMessage("render", "*")), "close" === n) { if (this.close(), !this.defaults.onClose) return;
                        this.defaults.onClose.call(this) } try { var r = JSON.parse(n);
                        r && "object" === (void 0 === r ? "undefined" : ft(r)) && "success" === r.status && this.close().then(function() { e.postSuccess(r), e.remove() }) } catch (t) {} } } }, { key: "postSuccess", value: function(t) { this.defaults.callback && this.defaults.callback.call(this, t) } }, { key: "listenForEvents", value: function() { window.addEventListener("message", this.eventListener) } }, { key: "stopListeningForEvents", value: function() { window.removeEventListener("message", this.eventListener, !1) } }]), t }(); return t.Transaction = Xe, t.BankAccount = le, t.Card = ie, t.PhoneNumber = Se, t.Toolkit = en, t.Popup = sn, t }({});