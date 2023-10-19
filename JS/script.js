(function() {
    if (typeof window.BX === "function") {
        return
    }
    /**
 * Babel external helpers
 * (c) 2018 Babel
 * @license MIT
 */
    (function(e) {
        var t = e.babelHelpers = {};
        function r(e) {
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                t.typeof = r = function(e) {
                    return typeof e
                }
            } else {
                t.typeof = r = function(e) {
                    return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
            }
            return r(e)
        }
        t.typeof = r;
        var n;
        function i(e, t, r, i) {
            if (!n) {
                n = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103
            }
            var a = e && e.defaultProps;
            var s = arguments.length - 3;
            if (!t && s !== 0) {
                t = {
                    children: void 0
                }
            }
            if (t && a) {
                for (var o in a) {
                    if (t[o] === void 0) {
                        t[o] = a[o]
                    }
                }
            } else if (!t) {
                t = a || {}
            }
            if (s === 1) {
                t.children = i
            } else if (s > 1) {
                var u = new Array(s);
                for (var l = 0; l < s; l++) {
                    u[l] = arguments[l + 3]
                }
                t.children = u
            }
            return {
                $$typeof: n,
                type: e,
                key: r === undefined ? null : "" + r,
                ref: null,
                props: t,
                _owner: null
            }
        }
        t.jsx = i;
        function a(e) {
            var t;
            if (typeof Symbol === "function") {
                if (Symbol.asyncIterator) {
                    t = e[Symbol.asyncIterator];
                    if (t != null)
                        return t.call(e)
                }
                if (Symbol.iterator) {
                    t = e[Symbol.iterator];
                    if (t != null)
                        return t.call(e)
                }
            }
            throw new TypeError("Object is not async iterable")
        }
        t.asyncIterator = a;
        function s(e) {
            this.wrapped = e
        }
        t.AwaitValue = s;
        function o(e) {
            var r, n;
            function i(e, t) {
                return new Promise((function(i, s) {
                    var o = {
                        key: e,
                        arg: t,
                        resolve: i,
                        reject: s,
                        next: null
                    };
                    if (n) {
                        n = n.next = o
                    } else {
                        r = n = o;
                        a(e, t)
                    }
                }
                ))
            }
            function a(r, n) {
                try {
                    var i = e[r](n);
                    var o = i.value;
                    var u = o instanceof t.AwaitValue;
                    Promise.resolve(u ? o.wrapped : o).then((function(e) {
                        if (u) {
                            a("next", e);
                            return
                        }
                        s(i.done ? "return" : "normal", e)
                    }
                    ), (function(e) {
                        a("throw", e)
                    }
                    ))
                } catch (e) {
                    s("throw", e)
                }
            }
            function s(e, t) {
                switch (e) {
                case "return":
                    r.resolve({
                        value: t,
                        done: true
                    });
                    break;
                case "throw":
                    r.reject(t);
                    break;
                default:
                    r.resolve({
                        value: t,
                        done: false
                    });
                    break
                }
                r = r.next;
                if (r) {
                    a(r.key, r.arg)
                } else {
                    n = null
                }
            }
            this._invoke = i;
            if (typeof e.return !== "function") {
                this.return = undefined
            }
        }
        if (typeof Symbol === "function" && Symbol.asyncIterator) {
            o.prototype[Symbol.asyncIterator] = function() {
                return this
            }
        }
        o.prototype.next = function(e) {
            return this._invoke("next", e)
        }
        ;
        o.prototype.throw = function(e) {
            return this._invoke("throw", e)
        }
        ;
        o.prototype.return = function(e) {
            return this._invoke("return", e)
        }
        ;
        t.AsyncGenerator = o;
        function u(e) {
            return function() {
                return new t.AsyncGenerator(e.apply(this, arguments))
            }
        }
        t.wrapAsyncGenerator = u;
        function l(e) {
            return new t.AwaitValue(e)
        }
        t.awaitAsyncGenerator = l;
        function c(e, t) {
            var r = {}
              , n = false;
            function i(r, i) {
                n = true;
                i = new Promise((function(t) {
                    t(e[r](i))
                }
                ));
                return {
                    done: false,
                    value: t(i)
                }
            }
            if (typeof Symbol === "function" && Symbol.iterator) {
                r[Symbol.iterator] = function() {
                    return this
                }
            }
            r.next = function(e) {
                if (n) {
                    n = false;
                    return e
                }
                return i("next", e)
            }
            ;
            if (typeof e.throw === "function") {
                r.throw = function(e) {
                    if (n) {
                        n = false;
                        throw e
                    }
                    return i("throw", e)
                }
            }
            if (typeof e.return === "function") {
                r.return = function(e) {
                    return i("return", e)
                }
            }
            return r
        }
        t.asyncGeneratorDelegate = c;
        function f(e, t, r, n, i, a, s) {
            try {
                var o = e[a](s);
                var u = o.value
            } catch (e) {
                r(e);
                return
            }
            if (o.done) {
                t(u)
            } else {
                Promise.resolve(u).then(n, i)
            }
        }
        function d(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function s(e) {
                        f(a, n, i, s, o, "next", e)
                    }
                    function o(e) {
                        f(a, n, i, s, o, "throw", e)
                    }
                    s(undefined)
                }
                ))
            }
        }
        t.asyncToGenerator = d;
        function p(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        t.classCallCheck = p;
        function h(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || false;
                n.configurable = true;
                if ("value"in n)
                    n.writable = true;
                Object.defineProperty(e, n.key, n)
            }
        }
        function v(e, t, r) {
            if (t)
                h(e.prototype, t);
            if (r)
                h(e, r);
            return e
        }
        t.createClass = v;
        function y(e, t) {
            for (var r in t) {
                var n = t[r];
                n.configurable = n.enumerable = true;
                if ("value"in n)
                    n.writable = true;
                Object.defineProperty(e, r, n)
            }
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (var a = 0; a < i.length; a++) {
                    var s = i[a];
                    var n = t[s];
                    n.configurable = n.enumerable = true;
                    if ("value"in n)
                        n.writable = true;
                    Object.defineProperty(e, s, n)
                }
            }
            return e
        }
        t.defineEnumerableProperties = y;
        function m(e, t) {
            var r = Object.getOwnPropertyNames(t);
            for (var n = 0; n < r.length; n++) {
                var i = r[n];
                var a = Object.getOwnPropertyDescriptor(t, i);
                if (a && a.configurable && e[i] === undefined) {
                    Object.defineProperty(e, i, a)
                }
            }
            return e
        }
        t.defaults = m;
        function g(e, t, r) {
            if (t in e) {
                Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                })
            } else {
                e[t] = r
            }
            return e
        }
        t.defineProperty = g;
        function b() {
            t.extends = b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) {
                        if (Object.prototype.hasOwnProperty.call(r, n)) {
                            e[n] = r[n]
                        }
                    }
                }
                return e
            }
            ;
            return b.apply(this, arguments)
        }
        t.extends = b;
        function w(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r] != null ? arguments[r] : {};
                var i = Object.keys(n);
                if (typeof Object.getOwnPropertySymbols === "function") {
                    i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))
                }
                i.forEach((function(r) {
                    t.defineProperty(e, r, n[r])
                }
                ))
            }
            return e
        }
        t.objectSpread = w;
        function x(e, r) {
            if (typeof r !== "function" && r !== null) {
                throw new TypeError("Super expression must either be null or a function")
            }
            e.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                }
            });
            if (r)
                t.setPrototypeOf(e, r)
        }
        t.inherits = x;
        function S(e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
            e.__proto__ = t
        }
        t.inheritsLoose = S;
        function E(e) {
            t.getPrototypeOf = E = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ;
            return E(e)
        }
        t.getPrototypeOf = E;
        function T(e, r) {
            t.setPrototypeOf = T = Object.setPrototypeOf || function e(t, r) {
                t.__proto__ = r;
                return t
            }
            ;
            return T(e, r)
        }
        t.setPrototypeOf = T;
        function B() {
            if (typeof Reflect === "undefined" || !Reflect.construct)
                return false;
            if (Reflect.construct.sham)
                return false;
            if (typeof Proxy === "function")
                return true;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                )));
                return true
            } catch (e) {
                return false
            }
        }
        function j(e, r, n) {
            if (B()) {
                t.construct = j = Reflect.construct
            } else {
                t.construct = j = function e(r, n, i) {
                    var a = [null];
                    a.push.apply(a, n);
                    var s = Function.bind.apply(r, a);
                    var o = new s;
                    if (i)
                        t.setPrototypeOf(o, i.prototype);
                    return o
                }
            }
            return j.apply(null, arguments)
        }
        t.construct = j;
        function O(e) {
            return Function.toString.call(e).indexOf("[native code]") !== -1
        }
        t.isNativeFunction = O;
        function X(e) {
            var r = typeof Map === "function" ? new Map : undefined;
            t.wrapNativeSuper = X = function e(n) {
                if (n === null || !t.isNativeFunction(n))
                    return n;
                if (typeof n !== "function") {
                    throw new TypeError("Super expression must either be null or a function")
                }
                if (typeof r !== "undefined") {
                    if (r.has(n))
                        return r.get(n);
                    r.set(n, i)
                }
                function i() {
                    return t.construct(n, arguments, t.getPrototypeOf(this).constructor)
                }
                i.prototype = Object.create(n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                return t.setPrototypeOf(i, n)
            }
            ;
            return X(e)
        }
        t.wrapNativeSuper = X;
        function k(e, t) {
            if (t != null && typeof Symbol !== "undefined" && t[Symbol.hasInstance]) {
                return t[Symbol.hasInstance](e)
            } else {
                return e instanceof t
            }
        }
        t.instanceof = k;
        function A(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.interopRequireDefault = A;
        function N(e) {
            if (e && e.__esModule) {
                return e
            } else {
                var t = {};
                if (e != null) {
                    for (var r in e) {
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                            if (n.get || n.set) {
                                Object.defineProperty(t, r, n)
                            } else {
                                t[r] = e[r]
                            }
                        }
                    }
                }
                t.default = e;
                return t
            }
        }
        t.interopRequireWildcard = N;
        function C(e, t) {
            if (e !== t) {
                throw new TypeError("Cannot instantiate an arrow function")
            }
        }
        t.newArrowCheck = C;
        function P(e) {
            if (e == null)
                throw new TypeError("Cannot destructure undefined")
        }
        t.objectDestructuringEmpty = P;
        function _(e, t) {
            if (e == null)
                return {};
            var r = {};
            var n = Object.keys(e);
            var i, a;
            for (a = 0; a < n.length; a++) {
                i = n[a];
                if (t.indexOf(i) >= 0)
                    continue;
                r[i] = e[i]
            }
            return r
        }
        t.objectWithoutPropertiesLoose = _;
        function I(e, r) {
            if (e == null)
                return {};
            var n = t.objectWithoutPropertiesLoose(e, r);
            var i, a;
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (a = 0; a < s.length; a++) {
                    i = s[a];
                    if (r.indexOf(i) >= 0)
                        continue;
                    if (!Object.prototype.propertyIsEnumerable.call(e, i))
                        continue;
                    n[i] = e[i]
                }
            }
            return n
        }
        t.objectWithoutProperties = I;
        function L(e) {
            if (e === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return e
        }
        t.assertThisInitialized = L;
        function M(e, r) {
            if (r && (typeof r === "object" || typeof r === "function")) {
                return r
            }
            return t.assertThisInitialized(e)
        }
        t.possibleConstructorReturn = M;
        function D(e, r) {
            while (!Object.prototype.hasOwnProperty.call(e, r)) {
                e = t.getPrototypeOf(e);
                if (e === null)
                    break
            }
            return e
        }
        t.superPropBase = D;
        function F(e, r, n) {
            if (typeof Reflect !== "undefined" && Reflect.get) {
                t.get = F = Reflect.get
            } else {
                t.get = F = function e(r, n, i) {
                    var a = t.superPropBase(r, n);
                    if (!a)
                        return;
                    var s = Object.getOwnPropertyDescriptor(a, n);
                    if (s.get) {
                        return s.get.call(i)
                    }
                    return s.value
                }
            }
            return F(e, r, n || e)
        }
        t.get = F;
        function R(e, r, n, i) {
            if (typeof Reflect !== "undefined" && Reflect.set) {
                R = Reflect.set
            } else {
                R = function e(r, n, i, a) {
                    var s = t.superPropBase(r, n);
                    var o;
                    if (s) {
                        o = Object.getOwnPropertyDescriptor(s, n);
                        if (o.set) {
                            o.set.call(a, i);
                            return true
                        } else if (!o.writable) {
                            return false
                        }
                    }
                    o = Object.getOwnPropertyDescriptor(a, n);
                    if (o) {
                        if (!o.writable) {
                            return false
                        }
                        o.value = i;
                        Object.defineProperty(a, n, o)
                    } else {
                        t.defineProperty(a, n, i)
                    }
                    return true
                }
            }
            return R(e, r, n, i)
        }
        function H(e, t, r, n, i) {
            var a = R(e, t, r, n || e);
            if (!a && i) {
                throw new Error("failed to set property")
            }
            return r
        }
        t.set = H;
        function W(e, t) {
            if (!t) {
                t = e.slice(0)
            }
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        t.taggedTemplateLiteral = W;
        function z(e, t) {
            if (!t) {
                t = e.slice(0)
            }
            e.raw = t;
            return e
        }
        t.taggedTemplateLiteralLoose = z;
        function G(e, r) {
            if (e === t.temporalUndefined) {
                throw new ReferenceError(r + " is not defined - temporal dead zone")
            } else {
                return e
            }
        }
        t.temporalRef = G;
        function U(e) {
            throw new Error('"' + e + '" is read-only')
        }
        t.readOnlyError = U;
        function $(e) {
            throw new Error('Class "' + e + '" cannot be referenced in computed property keys.')
        }
        t.classNameTDZError = $;
        t.temporalUndefined = {};
        function V(e, r) {
            return t.arrayWithHoles(e) || t.iterableToArrayLimit(e, r) || t.nonIterableRest()
        }
        t.slicedToArray = V;
        function Y(e, r) {
            return t.arrayWithHoles(e) || t.iterableToArrayLimitLoose(e, r) || t.nonIterableRest()
        }
        t.slicedToArrayLoose = Y;
        function q(e) {
            return t.arrayWithHoles(e) || t.iterableToArray(e) || t.nonIterableRest()
        }
        t.toArray = q;
        function J(e) {
            return t.arrayWithoutHoles(e) || t.iterableToArray(e) || t.nonIterableSpread()
        }
        t.toConsumableArray = J;
        function Z(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = new Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                return r
            }
        }
        t.arrayWithoutHoles = Z;
        function K(e) {
            if (Array.isArray(e))
                return e
        }
        t.arrayWithHoles = K;
        function Q(e) {
            if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
                return Array.from(e)
        }
        t.iterableToArray = Q;
        function ee(e, t) {
            var r = [];
            var n = true;
            var i = false;
            var a = undefined;
            try {
                for (var s = e[Symbol.iterator](), o; !(n = (o = s.next()).done); n = true) {
                    r.push(o.value);
                    if (t && r.length === t)
                        break
                }
            } catch (e) {
                i = true;
                a = e
            } finally {
                try {
                    if (!n && s["return"] != null)
                        s["return"]()
                } finally {
                    if (i)
                        throw a
                }
            }
            return r
        }
        t.iterableToArrayLimit = ee;
        function te(e, t) {
            var r = [];
            for (var n = e[Symbol.iterator](), i; !(i = n.next()).done; ) {
                r.push(i.value);
                if (t && r.length === t)
                    break
            }
            return r
        }
        t.iterableToArrayLimitLoose = te;
        function re() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        t.nonIterableSpread = re;
        function ne() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
        t.nonIterableRest = ne;
        function ie(e) {
            return function() {
                var t = e.apply(this, arguments);
                t.next();
                return t
            }
        }
        t.skipFirstGeneratorNext = ie;
        function ae(e) {
            if (typeof e === "symbol") {
                return e
            } else {
                return String(e)
            }
        }
        t.toPropertyKey = ae;
        function se(e, t) {
            throw new Error("Decorating class property failed. Please ensure that " + "proposal-class-properties is enabled and set to use loose mode. " + "To use proposal-class-properties in spec mode with decorators, wait for " + "the next major version of decorators in stage 2.")
        }
        t.initializerWarningHelper = se;
        function oe(e, t, r, n) {
            if (!r)
                return;
            Object.defineProperty(e, t, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        t.initializerDefineProperty = oe;
        function ue(e, t, r, n, i) {
            var a = {};
            Object["ke" + "ys"](n).forEach((function(e) {
                a[e] = n[e]
            }
            ));
            a.enumerable = !!a.enumerable;
            a.configurable = !!a.configurable;
            if ("value"in a || a.initializer) {
                a.writable = true
            }
            a = r.slice().reverse().reduce((function(r, n) {
                return n(e, t, r) || r
            }
            ), a);
            if (i && a.initializer !== void 0) {
                a.value = a.initializer ? a.initializer.call(i) : void 0;
                a.initializer = undefined
            }
            if (a.initializer === void 0) {
                Object["define" + "Property"](e, t, a);
                a = null
            }
            return a
        }
        t.applyDecoratedDescriptor = ue;
        var le = 0;
        function ce(e) {
            return "__private_" + le++ + "_" + e
        }
        t.classPrivateFieldLooseKey = ce;
        function fe(e, t) {
            if (!Object.prototype.hasOwnProperty.call(e, t)) {
                throw new TypeError("attempted to use private field on non-instance")
            }
            return e
        }
        t.classPrivateFieldLooseBase = fe;
        function de(e, t) {
            if (!t.has(e)) {
                throw new TypeError("attempted to get private field on non-instance")
            }
            return t.get(e).value
        }
        t.classPrivateFieldGet = de;
        function pe(e, t, r) {
            if (!t.has(e)) {
                throw new TypeError("attempted to set private field on non-instance")
            }
            var n = t.get(e);
            if (!n.writable) {
                throw new TypeError("attempted to set read only private field")
            }
            n.value = r;
            return r
        }
        t.classPrivateFieldSet = pe
    }
    )(typeof global === "undefined" ? window : global);
    !function(e) {
        "use strict";
        var t = Object.prototype;
        var r = t.hasOwnProperty;
        var n;
        var i = typeof Symbol === "function" ? Symbol : {};
        var a = i.iterator || "@@iterator";
        var s = i.asyncIterator || "@@asyncIterator";
        var o = i.toStringTag || "@@toStringTag";
        var u = e.regeneratorRuntime = {};
        function l(e, t, r, n) {
            var i = t && t.prototype instanceof y ? t : y;
            var a = Object.create(i.prototype);
            var s = new k(n || []);
            a._invoke = B(e, r, s);
            return a
        }
        u.wrap = l;
        function c(e, t, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, r)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        var f = "suspendedStart";
        var d = "suspendedYield";
        var p = "executing";
        var h = "completed";
        var v = {};
        function y() {}
        function m() {}
        function g() {}
        var b = {};
        b[a] = function() {
            return this
        }
        ;
        var w = Object.getPrototypeOf;
        var x = w && w(w(A([])));
        if (x && x !== t && r.call(x, a)) {
            b = x
        }
        var S = g.prototype = y.prototype = Object.create(b);
        m.prototype = S.constructor = g;
        g.constructor = m;
        g[o] = m.displayName = "GeneratorFunction";
        function E(e) {
            ["next", "throw", "return"].forEach((function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            }
            ))
        }
        u.isGeneratorFunction = function(e) {
            var t = typeof e === "function" && e.constructor;
            return t ? t === m || (t.displayName || t.name) === "GeneratorFunction" : false
        }
        ;
        u.mark = function(e) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(e, g)
            } else {
                e.__proto__ = g;
                if (!(o in e)) {
                    e[o] = "GeneratorFunction"
                }
            }
            e.prototype = Object.create(S);
            return e
        }
        ;
        u.awrap = function(e) {
            return {
                __await: e
            }
        }
        ;
        function T(e) {
            function t(n, i, a, s) {
                var o = c(e[n], e, i);
                if (o.type === "throw") {
                    s(o.arg)
                } else {
                    var u = o.arg;
                    var l = u.value;
                    if (l && typeof l === "object" && r.call(l, "__await")) {
                        return Promise.resolve(l.__await).then((function(e) {
                            t("next", e, a, s)
                        }
                        ), (function(e) {
                            t("throw", e, a, s)
                        }
                        ))
                    }
                    return Promise.resolve(l).then((function(e) {
                        u.value = e;
                        a(u)
                    }
                    ), s)
                }
            }
            var n;
            function i(e, r) {
                function i() {
                    return new Promise((function(n, i) {
                        t(e, r, n, i)
                    }
                    ))
                }
                return n = n ? n.then(i, i) : i()
            }
            this._invoke = i
        }
        E(T.prototype);
        T.prototype[s] = function() {
            return this
        }
        ;
        u.AsyncIterator = T;
        u.async = function(e, t, r, n) {
            var i = new T(l(e, t, r, n));
            return u.isGeneratorFunction(t) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next()
            }
            ))
        }
        ;
        function B(e, t, r) {
            var n = f;
            return function i(a, s) {
                if (n === p) {
                    throw new Error("Generator is already running")
                }
                if (n === h) {
                    if (a === "throw") {
                        throw s
                    }
                    return N()
                }
                r.method = a;
                r.arg = s;
                while (true) {
                    var o = r.delegate;
                    if (o) {
                        var u = j(o, r);
                        if (u) {
                            if (u === v)
                                continue;
                            return u
                        }
                    }
                    if (r.method === "next") {
                        r.sent = r._sent = r.arg
                    } else if (r.method === "throw") {
                        if (n === f) {
                            n = h;
                            throw r.arg
                        }
                        r.dispatchException(r.arg)
                    } else if (r.method === "return") {
                        r.abrupt("return", r.arg)
                    }
                    n = p;
                    var l = c(e, t, r);
                    if (l.type === "normal") {
                        n = r.done ? h : d;
                        if (l.arg === v) {
                            continue
                        }
                        return {
                            value: l.arg,
                            done: r.done
                        }
                    } else if (l.type === "throw") {
                        n = h;
                        r.method = "throw";
                        r.arg = l.arg
                    }
                }
            }
        }
        function j(e, t) {
            var r = e.iterator[t.method];
            if (r === n) {
                t.delegate = null;
                if (t.method === "throw") {
                    if (e.iterator.return) {
                        t.method = "return";
                        t.arg = n;
                        j(e, t);
                        if (t.method === "throw") {
                            return v
                        }
                    }
                    t.method = "throw";
                    t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return v
            }
            var i = c(r, e.iterator, t.arg);
            if (i.type === "throw") {
                t.method = "throw";
                t.arg = i.arg;
                t.delegate = null;
                return v
            }
            var a = i.arg;
            if (!a) {
                t.method = "throw";
                t.arg = new TypeError("iterator result is not an object");
                t.delegate = null;
                return v
            }
            if (a.done) {
                t[e.resultName] = a.value;
                t.next = e.nextLoc;
                if (t.method !== "return") {
                    t.method = "next";
                    t.arg = n
                }
            } else {
                return a
            }
            t.delegate = null;
            return v
        }
        E(S);
        S[o] = "Generator";
        S[a] = function() {
            return this
        }
        ;
        S.toString = function() {
            return "[object Generator]"
        }
        ;
        function O(e) {
            var t = {
                tryLoc: e[0]
            };
            if (1 in e) {
                t.catchLoc = e[1]
            }
            if (2 in e) {
                t.finallyLoc = e[2];
                t.afterLoc = e[3]
            }
            this.tryEntries.push(t)
        }
        function X(e) {
            var t = e.completion || {};
            t.type = "normal";
            delete t.arg;
            e.completion = t
        }
        function k(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }];
            e.forEach(O, this);
            this.reset(true)
        }
        u.keys = function(e) {
            var t = [];
            for (var r in e) {
                t.push(r)
            }
            t.reverse();
            return function r() {
                while (t.length) {
                    var n = t.pop();
                    if (n in e) {
                        r.value = n;
                        r.done = false;
                        return r
                    }
                }
                r.done = true;
                return r
            }
        }
        ;
        function A(e) {
            if (e) {
                var t = e[a];
                if (t) {
                    return t.call(e)
                }
                if (typeof e.next === "function") {
                    return e
                }
                if (!isNaN(e.length)) {
                    var i = -1
                      , s = function t() {
                        while (++i < e.length) {
                            if (r.call(e, i)) {
                                t.value = e[i];
                                t.done = false;
                                return t
                            }
                        }
                        t.value = n;
                        t.done = true;
                        return t
                    };
                    return s.next = s
                }
            }
            return {
                next: N
            }
        }
        u.values = A;
        function N() {
            return {
                value: n,
                done: true
            }
        }
        k.prototype = {
            constructor: k,
            reset: function(e) {
                this.prev = 0;
                this.next = 0;
                this.sent = this._sent = n;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = n;
                this.tryEntries.forEach(X);
                if (!e) {
                    for (var t in this) {
                        if (t.charAt(0) === "t" && r.call(this, t) && !isNaN(+t.slice(1))) {
                            this[t] = n
                        }
                    }
                }
            },
            stop: function() {
                this.done = true;
                var e = this.tryEntries[0];
                var t = e.completion;
                if (t.type === "throw") {
                    throw t.arg
                }
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) {
                    throw e
                }
                var t = this;
                function i(r, i) {
                    o.type = "throw";
                    o.arg = e;
                    t.next = r;
                    if (i) {
                        t.method = "next";
                        t.arg = n
                    }
                    return !!i
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var s = this.tryEntries[a];
                    var o = s.completion;
                    if (s.tryLoc === "root") {
                        return i("end")
                    }
                    if (s.tryLoc <= this.prev) {
                        var u = r.call(s, "catchLoc");
                        var l = r.call(s, "finallyLoc");
                        if (u && l) {
                            if (this.prev < s.catchLoc) {
                                return i(s.catchLoc, true)
                            } else if (this.prev < s.finallyLoc) {
                                return i(s.finallyLoc)
                            }
                        } else if (u) {
                            if (this.prev < s.catchLoc) {
                                return i(s.catchLoc, true)
                            }
                        } else if (l) {
                            if (this.prev < s.finallyLoc) {
                                return i(s.finallyLoc)
                            }
                        } else {
                            throw new Error("try statement without catch or finally")
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var a = i;
                        break
                    }
                }
                if (a && (e === "break" || e === "continue") && a.tryLoc <= t && t <= a.finallyLoc) {
                    a = null
                }
                var s = a ? a.completion : {};
                s.type = e;
                s.arg = t;
                if (a) {
                    this.method = "next";
                    this.next = a.finallyLoc;
                    return v
                }
                return this.complete(s)
            },
            complete: function(e, t) {
                if (e.type === "throw") {
                    throw e.arg
                }
                if (e.type === "break" || e.type === "continue") {
                    this.next = e.arg
                } else if (e.type === "return") {
                    this.rval = this.arg = e.arg;
                    this.method = "return";
                    this.next = "end"
                } else if (e.type === "normal" && t) {
                    this.next = t
                }
                return v
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e) {
                        this.complete(r.completion, r.afterLoc);
                        X(r);
                        return v
                    }
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                        var n = r.completion;
                        if (n.type === "throw") {
                            var i = n.arg;
                            X(r)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, r) {
                this.delegate = {
                    iterator: A(e),
                    resultName: t,
                    nextLoc: r
                };
                if (this.method === "next") {
                    this.arg = n
                }
                return v
            }
        }
    }(function() {
        return this
    }() || Function("return this")());
    (function(e) {
        "use strict";
        var t = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
        function r(e, t) {
            return t = {
                exports: {}
            },
            e(t, t.exports),
            t.exports
        }
        var n = function(e) {
            return e && e.Math == Math && e
        };
        var i = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof t == "object" && t) || function() {
            return this
        }() || Function("return this")();
        var a = function(e) {
            try {
                return !!e()
            } catch (e) {
                return true
            }
        };
        var s = !a((function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }
        ));
        var o = Function.prototype.call;
        var u = o.bind ? o.bind(o) : function() {
            return o.apply(o, arguments)
        }
        ;
        var l = {}.propertyIsEnumerable;
        var c = Object.getOwnPropertyDescriptor;
        var f = c && !l.call({
            1: 2
        }, 1);
        var d = f ? function e(t) {
            var r = c(this, t);
            return !!r && r.enumerable
        }
        : l;
        var p = {
            f: d
        };
        var h = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        };
        var v = Function.prototype;
        var y = v.bind;
        var m = v.call;
        var g = y && y.bind(m);
        var b = y ? function(e) {
            return e && g(m, e)
        }
        : function(e) {
            return e && function() {
                return m.apply(e, arguments)
            }
        }
        ;
        var w = b({}.toString);
        var x = b("".slice);
        var S = function(e) {
            return x(w(e), 8, -1)
        };
        var E = i.Object;
        var T = b("".split);
        var B = a((function() {
            return !E("z").propertyIsEnumerable(0)
        }
        )) ? function(e) {
            return S(e) == "String" ? T(e, "") : E(e)
        }
        : E;
        var j = i.TypeError;
        var O = function(e) {
            if (e == undefined)
                throw j("Can't call method on " + e);
            return e
        };
        var X = function(e) {
            return B(O(e))
        };
        var k = function(e) {
            return typeof e == "function"
        };
        var A = function(e) {
            return typeof e == "object" ? e !== null : k(e)
        };
        var N = function(e) {
            return k(e) ? e : undefined
        };
        var C = function(e, t) {
            return arguments.length < 2 ? N(i[e]) : i[e] && i[e][t]
        };
        var P = b({}.isPrototypeOf);
        var _ = C("navigator", "userAgent") || "";
        var I = i.process;
        var L = i.Deno;
        var M = I && I.versions || L && L.version;
        var D = M && M.v8;
        var F, R;
        if (D) {
            F = D.split(".");
            R = F[0] > 0 && F[0] < 4 ? 1 : +(F[0] + F[1])
        }
        if (!R && _) {
            F = _.match(/Edge\/(\d+)/);
            if (!F || F[1] >= 74) {
                F = _.match(/Chrome\/(\d+)/);
                if (F)
                    R = +F[1]
            }
        }
        var H = R;
        var W = !!Object.getOwnPropertySymbols && !a((function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && H && H < 41
        }
        ));
        var z = W && !Symbol.sham && typeof Symbol.iterator == "symbol";
        var G = i.Object;
        var U = z ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = C("Symbol");
            return k(t) && P(t.prototype, G(e))
        }
        ;
        var $ = i.String;
        var V = function(e) {
            try {
                return $(e)
            } catch (e) {
                return "Object"
            }
        };
        var Y = i.TypeError;
        var q = function(e) {
            if (k(e))
                return e;
            throw Y(V(e) + " is not a function")
        };
        var J = function(e, t) {
            var r = e[t];
            return r == null ? undefined : q(r)
        };
        var Z = i.TypeError;
        var K = function(e, t) {
            var r, n;
            if (t === "string" && k(r = e.toString) && !A(n = u(r, e)))
                return n;
            if (k(r = e.valueOf) && !A(n = u(r, e)))
                return n;
            if (t !== "string" && k(r = e.toString) && !A(n = u(r, e)))
                return n;
            throw Z("Can't convert object to primitive value")
        };
        var Q = false;
        var ee = Object.defineProperty;
        var te = function(e, t) {
            try {
                ee(i, e, {
                    value: t,
                    configurable: true,
                    writable: true
                })
            } catch (r) {
                i[e] = t
            }
            return t
        };
        var re = "__core-js_shared__";
        var ne = i[re] || te(re, {});
        var ie = ne;
        var ae = r((function(e) {
            (e.exports = function(e, t) {
                return ie[e] || (ie[e] = t !== undefined ? t : {})
            }
            )("versions", []).push({
                version: "3.19.2",
                mode: "global",
                copyright: "(c) 2021 Denis Pushkarev (zloirock.ru)"
            })
        }
        ));
        var se = i.Object;
        var oe = function(e) {
            return se(O(e))
        };
        var ue = b({}.hasOwnProperty);
        var le = Object.hasOwn || function e(t, r) {
            return ue(oe(t), r)
        }
        ;
        var ce = 0;
        var fe = Math.random();
        var de = b(1..toString);
        var pe = function(e) {
            return "Symbol(" + (e === undefined ? "" : e) + ")_" + de(++ce + fe, 36)
        };
        var he = ae("wks");
        var ve = i.Symbol;
        var ye = ve && ve["for"];
        var me = z ? ve : ve && ve.withoutSetter || pe;
        var ge = function(e) {
            if (!le(he, e) || !(W || typeof he[e] == "string")) {
                var t = "Symbol." + e;
                if (W && le(ve, e)) {
                    he[e] = ve[e]
                } else if (z && ye) {
                    he[e] = ye(t)
                } else {
                    he[e] = me(t)
                }
            }
            return he[e]
        };
        var be = i.TypeError;
        var we = ge("toPrimitive");
        var xe = function(e, t) {
            if (!A(e) || U(e))
                return e;
            var r = J(e, we);
            var n;
            if (r) {
                if (t === undefined)
                    t = "default";
                n = u(r, e, t);
                if (!A(n) || U(n))
                    return n;
                throw be("Can't convert object to primitive value")
            }
            if (t === undefined)
                t = "number";
            return K(e, t)
        };
        var Se = function(e) {
            var t = xe(e, "string");
            return U(t) ? t : t + ""
        };
        var Ee = i.document;
        var Te = A(Ee) && A(Ee.createElement);
        var Be = function(e) {
            return Te ? Ee.createElement(e) : {}
        };
        var je = !s && !a((function() {
            return Object.defineProperty(Be("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }
        ));
        var Oe = Object.getOwnPropertyDescriptor;
        var Xe = s ? Oe : function e(t, r) {
            t = X(t);
            r = Se(r);
            if (je)
                try {
                    return Oe(t, r)
                } catch (e) {}
            if (le(t, r))
                return h(!u(p.f, t, r), t[r])
        }
        ;
        var ke = {
            f: Xe
        };
        var Ae = i.String;
        var Ne = i.TypeError;
        var Ce = function(e) {
            if (A(e))
                return e;
            throw Ne(Ae(e) + " is not an object")
        };
        var Pe = i.TypeError;
        var _e = Object.defineProperty;
        var Ie = s ? _e : function e(t, r, n) {
            Ce(t);
            r = Se(r);
            Ce(n);
            if (je)
                try {
                    return _e(t, r, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw Pe("Accessors not supported");
            if ("value"in n)
                t[r] = n.value;
            return t
        }
        ;
        var Le = {
            f: Ie
        };
        var Me = s ? function(e, t, r) {
            return Le.f(e, t, h(1, r))
        }
        : function(e, t, r) {
            e[t] = r;
            return e
        }
        ;
        var De = b(Function.toString);
        if (!k(ie.inspectSource)) {
            ie.inspectSource = function(e) {
                return De(e)
            }
        }
        var Fe = ie.inspectSource;
        var Re = i.WeakMap;
        var He = k(Re) && /native code/.test(Fe(Re));
        var We = ae("keys");
        var ze = function(e) {
            return We[e] || (We[e] = pe(e))
        };
        var Ge = {};
        var Ue = "Object already initialized";
        var $e = i.TypeError;
        var Ve = i.WeakMap;
        var Ye, qe, Je;
        var Ze = function(e) {
            return Je(e) ? qe(e) : Ye(e, {})
        };
        var Ke = function(e) {
            return function(t) {
                var r;
                if (!A(t) || (r = qe(t)).type !== e) {
                    throw $e("Incompatible receiver, " + e + " required")
                }
                return r
            }
        };
        if (He || ie.state) {
            var Qe = ie.state || (ie.state = new Ve);
            var et = b(Qe.get);
            var tt = b(Qe.has);
            var rt = b(Qe.set);
            Ye = function(e, t) {
                if (tt(Qe, e))
                    throw new $e(Ue);
                t.facade = e;
                rt(Qe, e, t);
                return t
            }
            ;
            qe = function(e) {
                return et(Qe, e) || {}
            }
            ;
            Je = function(e) {
                return tt(Qe, e)
            }
        } else {
            var nt = ze("state");
            Ge[nt] = true;
            Ye = function(e, t) {
                if (le(e, nt))
                    throw new $e(Ue);
                t.facade = e;
                Me(e, nt, t);
                return t
            }
            ;
            qe = function(e) {
                return le(e, nt) ? e[nt] : {}
            }
            ;
            Je = function(e) {
                return le(e, nt)
            }
        }
        var it = {
            set: Ye,
            get: qe,
            has: Je,
            enforce: Ze,
            getterFor: Ke
        };
        var at = Function.prototype;
        var st = s && Object.getOwnPropertyDescriptor;
        var ot = le(at, "name");
        var ut = ot && function e() {}
        .name === "something";
        var lt = ot && (!s || s && st(at, "name").configurable);
        var ct = {
            EXISTS: ot,
            PROPER: ut,
            CONFIGURABLE: lt
        };
        var ft = r((function(e) {
            var t = ct.CONFIGURABLE;
            var r = it.get;
            var n = it.enforce;
            var a = String(String).split("String");
            (e.exports = function(e, r, s, o) {
                var u = o ? !!o.unsafe : false;
                var l = o ? !!o.enumerable : false;
                var c = o ? !!o.noTargetGet : false;
                var f = o && o.name !== undefined ? o.name : r;
                var d;
                if (k(s)) {
                    if (String(f).slice(0, 7) === "Symbol(") {
                        f = "[" + String(f).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"
                    }
                    if (!le(s, "name") || t && s.name !== f) {
                        Me(s, "name", f)
                    }
                    d = n(s);
                    if (!d.source) {
                        d.source = a.join(typeof f == "string" ? f : "")
                    }
                }
                if (e === i) {
                    if (l)
                        e[r] = s;
                    else
                        te(r, s);
                    return
                } else if (!u) {
                    delete e[r]
                } else if (!c && e[r]) {
                    l = true
                }
                if (l)
                    e[r] = s;
                else
                    Me(e, r, s)
            }
            )(Function.prototype, "toString", (function e() {
                return k(this) && r(this).source || Fe(this)
            }
            ))
        }
        ));
        var dt = Math.ceil;
        var pt = Math.floor;
        var ht = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? pt : dt)(t)
        };
        var vt = Math.max;
        var yt = Math.min;
        var mt = function(e, t) {
            var r = ht(e);
            return r < 0 ? vt(r + t, 0) : yt(r, t)
        };
        var gt = Math.min;
        var bt = function(e) {
            return e > 0 ? gt(ht(e), 9007199254740991) : 0
        };
        var wt = function(e) {
            return bt(e.length)
        };
        var xt = function(e) {
            return function(t, r, n) {
                var i = X(t);
                var a = wt(i);
                var s = mt(n, a);
                var o;
                if (e && r != r)
                    while (a > s) {
                        o = i[s++];
                        if (o != o)
                            return true
                    }
                else
                    for (; a > s; s++) {
                        if ((e || s in i) && i[s] === r)
                            return e || s || 0
                    }
                return !e && -1
            }
        };
        var St = {
            includes: xt(true),
            indexOf: xt(false)
        };
        var Et = St.indexOf;
        var Tt = b([].push);
        var Bt = function(e, t) {
            var r = X(e);
            var n = 0;
            var i = [];
            var a;
            for (a in r)
                !le(Ge, a) && le(r, a) && Tt(i, a);
            while (t.length > n)
                if (le(r, a = t[n++])) {
                    ~Et(i, a) || Tt(i, a)
                }
            return i
        };
        var jt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        var Ot = jt.concat("length", "prototype");
        var Xt = Object.getOwnPropertyNames || function e(t) {
            return Bt(t, Ot)
        }
        ;
        var kt = {
            f: Xt
        };
        var At = Object.getOwnPropertySymbols;
        var Nt = {
            f: At
        };
        var Ct = b([].concat);
        var Pt = C("Reflect", "ownKeys") || function e(t) {
            var r = kt.f(Ce(t));
            var n = Nt.f;
            return n ? Ct(r, n(t)) : r
        }
        ;
        var _t = function(e, t) {
            var r = Pt(t);
            var n = Le.f;
            var i = ke.f;
            for (var a = 0; a < r.length; a++) {
                var s = r[a];
                if (!le(e, s))
                    n(e, s, i(t, s))
            }
        };
        var It = /#|\.prototype\./;
        var Lt = function(e, t) {
            var r = Dt[Mt(e)];
            return r == Rt ? true : r == Ft ? false : k(t) ? a(t) : !!t
        };
        var Mt = Lt.normalize = function(e) {
            return String(e).replace(It, ".").toLowerCase()
        }
        ;
        var Dt = Lt.data = {};
        var Ft = Lt.NATIVE = "N";
        var Rt = Lt.POLYFILL = "P";
        var Ht = Lt;
        var Wt = ke.f;
        var zt = function(e, t) {
            var r = e.target;
            var n = e.global;
            var a = e.stat;
            var s, o, u, l, c, f;
            if (n) {
                o = i
            } else if (a) {
                o = i[r] || te(r, {})
            } else {
                o = (i[r] || {}).prototype
            }
            if (o)
                for (u in t) {
                    c = t[u];
                    if (e.noTargetGet) {
                        f = Wt(o, u);
                        l = f && f.value
                    } else
                        l = o[u];
                    s = Ht(n ? u : r + (a ? "." : "#") + u, e.forced);
                    if (!s && l !== undefined) {
                        if (typeof c == typeof l)
                            continue;
                        _t(c, l)
                    }
                    if (e.sham || l && l.sham) {
                        Me(c, "sham", true)
                    }
                    ft(o, u, c, e)
                }
        };
        var Gt = !a((function() {
            function e() {}
            e.prototype.constructor = null;
            return Object.getPrototypeOf(new e) !== e.prototype
        }
        ));
        var Ut = ze("IE_PROTO");
        var $t = i.Object;
        var Vt = $t.prototype;
        var Yt = Gt ? $t.getPrototypeOf : function(e) {
            var t = oe(e);
            if (le(t, Ut))
                return t[Ut];
            var r = t.constructor;
            if (k(r) && t instanceof r) {
                return r.prototype
            }
            return t instanceof $t ? Vt : null
        }
        ;
        var qt = i.String;
        var Jt = i.TypeError;
        var Zt = function(e) {
            if (typeof e == "object" || k(e))
                return e;
            throw Jt("Can't set " + qt(e) + " as a prototype")
        };
        var Kt = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var e = false;
            var t = {};
            var r;
            try {
                r = b(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
                r(t, []);
                e = t instanceof Array
            } catch (e) {}
            return function t(n, i) {
                Ce(n);
                Zt(i);
                if (e)
                    r(n, i);
                else
                    n.__proto__ = i;
                return n
            }
        }() : undefined);
        var Qt = Object.keys || function e(t) {
            return Bt(t, jt)
        }
        ;
        var er = s ? Object.defineProperties : function e(t, r) {
            Ce(t);
            var n = X(r);
            var i = Qt(r);
            var a = i.length;
            var s = 0;
            var o;
            while (a > s)
                Le.f(t, o = i[s++], n[o]);
            return t
        }
        ;
        var tr = C("document", "documentElement");
        var rr = ">";
        var nr = "<";
        var ir = "prototype";
        var ar = "script";
        var sr = ze("IE_PROTO");
        var or = function() {};
        var ur = function(e) {
            return nr + ar + rr + e + nr + "/" + ar + rr
        };
        var lr = function(e) {
            e.write(ur(""));
            e.close();
            var t = e.parentWindow.Object;
            e = null;
            return t
        };
        var cr = function() {
            var e = Be("iframe");
            var t = "java" + ar + ":";
            var r;
            e.style.display = "none";
            tr.appendChild(e);
            e.src = String(t);
            r = e.contentWindow.document;
            r.open();
            r.write(ur("document.F=Object"));
            r.close();
            return r.F
        };
        var fr;
        var dr = function() {
            try {
                fr = new ActiveXObject("htmlfile")
            } catch (e) {}
            dr = typeof document != "undefined" ? document.domain && fr ? lr(fr) : cr() : lr(fr);
            var e = jt.length;
            while (e--)
                delete dr[ir][jt[e]];
            return dr()
        };
        Ge[sr] = true;
        var pr = Object.create || function e(t, r) {
            var n;
            if (t !== null) {
                or[ir] = Ce(t);
                n = new or;
                or[ir] = null;
                n[sr] = t
            } else
                n = dr();
            return r === undefined ? n : er(n, r)
        }
        ;
        var hr = function(e, t, r) {
            var n = Se(t);
            if (n in e)
                Le.f(e, n, h(0, r));
            else
                e[n] = r
        };
        var vr = i.Array;
        var yr = Math.max;
        var mr = function(e, t, r) {
            var n = wt(e);
            var i = mt(t, n);
            var a = mt(r === undefined ? n : r, n);
            var s = vr(yr(a - i, 0));
            for (var o = 0; i < a; i++,
            o++)
                hr(s, o, e[i]);
            s.length = o;
            return s
        };
        var gr = b("".replace);
        var br = b("".split);
        var wr = b([].join);
        var xr = function(e) {
            return String(Error(e).stack)
        }("zxcasd");
        var Sr = /\n\s*at [^:]*:[^\n]*/;
        var Er = Sr.test(xr);
        var Tr = /@[^\n]*\n/.test(xr) && !/zxcasd/.test(xr);
        var Br = function(e, t) {
            if (typeof e != "string")
                return e;
            if (Er) {
                while (t--)
                    e = gr(e, Sr, "")
            } else if (Tr) {
                return wr(mr(br(e, "\n"), t), "\n")
            }
            return e
        };
        var jr = function(e, t) {
            if (A(t) && "cause"in t) {
                Me(e, "cause", t.cause)
            }
        };
        var Or = b(b.bind);
        var Xr = function(e, t) {
            q(e);
            return t === undefined ? e : Or ? Or(e, t) : function() {
                return e.apply(t, arguments)
            }
        };
        var kr = {};
        var Ar = ge("iterator");
        var Nr = Array.prototype;
        var Cr = function(e) {
            return e !== undefined && (kr.Array === e || Nr[Ar] === e)
        };
        var Pr = ge("toStringTag");
        var _r = {};
        _r[Pr] = "z";
        var Ir = String(_r) === "[object z]";
        var Lr = ge("toStringTag");
        var Mr = i.Object;
        var Dr = S(function() {
            return arguments
        }()) == "Arguments";
        var Fr = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
        var Rr = Ir ? S : function(e) {
            var t, r, n;
            return e === undefined ? "Undefined" : e === null ? "Null" : typeof (r = Fr(t = Mr(e), Lr)) == "string" ? r : Dr ? S(t) : (n = S(t)) == "Object" && k(t.callee) ? "Arguments" : n
        }
        ;
        var Hr = ge("iterator");
        var Wr = function(e) {
            if (e != undefined)
                return J(e, Hr) || J(e, "@@iterator") || kr[Rr(e)]
        };
        var zr = i.TypeError;
        var Gr = function(e, t) {
            var r = arguments.length < 2 ? Wr(e) : t;
            if (q(r))
                return Ce(u(r, e));
            throw zr(V(e) + " is not iterable")
        };
        var Ur = function(e, t, r) {
            var n, i;
            Ce(e);
            try {
                n = J(e, "return");
                if (!n) {
                    if (t === "throw")
                        throw r;
                    return r
                }
                n = u(n, e)
            } catch (e) {
                i = true;
                n = e
            }
            if (t === "throw")
                throw r;
            if (i)
                throw n;
            Ce(n);
            return r
        };
        var $r = i.TypeError;
        var Vr = function(e, t) {
            this.stopped = e;
            this.result = t
        };
        var Yr = Vr.prototype;
        var qr = function(e, t, r) {
            var n = r && r.that;
            var i = !!(r && r.AS_ENTRIES);
            var a = !!(r && r.IS_ITERATOR);
            var s = !!(r && r.INTERRUPTED);
            var o = Xr(t, n);
            var l, c, f, d, p, h, v;
            var y = function(e) {
                if (l)
                    Ur(l, "normal", e);
                return new Vr(true,e)
            };
            var m = function(e) {
                if (i) {
                    Ce(e);
                    return s ? o(e[0], e[1], y) : o(e[0], e[1])
                }
                return s ? o(e, y) : o(e)
            };
            if (a) {
                l = e
            } else {
                c = Wr(e);
                if (!c)
                    throw $r(V(e) + " is not iterable");
                if (Cr(c)) {
                    for (f = 0,
                    d = wt(e); d > f; f++) {
                        p = m(e[f]);
                        if (p && P(Yr, p))
                            return p
                    }
                    return new Vr(false)
                }
                l = Gr(e, c)
            }
            h = l.next;
            while (!(v = u(h, l)).done) {
                try {
                    p = m(v.value)
                } catch (e) {
                    Ur(l, "throw", e)
                }
                if (typeof p == "object" && p && P(Yr, p))
                    return p
            }
            return new Vr(false)
        };
        var Jr = i.String;
        var Zr = function(e) {
            if (Rr(e) === "Symbol")
                throw TypeError("Cannot convert a Symbol value to a string");
            return Jr(e)
        };
        var Kr = function(e, t) {
            return e === undefined ? arguments.length < 2 ? "" : t : Zr(e)
        };
        var Qr = !a((function() {
            var e = Error("a");
            if (!("stack"in e))
                return true;
            Object.defineProperty(e, "stack", h(1, 7));
            return e.stack !== 7
        }
        ));
        var en = ge("toStringTag");
        var tn = i.Error;
        var rn = [].push;
        var nn = function e(t, r) {
            var n = arguments.length > 2 ? arguments[2] : undefined;
            var i = P(an, this);
            var a;
            if (Kt) {
                a = Kt(new tn(undefined), i ? Yt(this) : an)
            } else {
                a = i ? this : pr(an);
                Me(a, en, "Error")
            }
            Me(a, "message", Kr(r, ""));
            if (Qr)
                Me(a, "stack", Br(a.stack, 1));
            jr(a, n);
            var s = [];
            qr(t, rn, {
                that: s
            });
            Me(a, "errors", s);
            return a
        };
        if (Kt)
            Kt(nn, tn);
        else
            _t(nn, tn);
        var an = nn.prototype = pr(tn.prototype, {
            constructor: h(1, nn),
            message: h(1, ""),
            name: h(1, "AggregateError")
        });
        zt({
            global: true
        }, {
            AggregateError: nn
        });
        var sn = ge("unscopables");
        var on = Array.prototype;
        if (on[sn] == undefined) {
            Le.f(on, sn, {
                configurable: true,
                value: pr(null)
            })
        }
        var un = function(e) {
            on[sn][e] = true
        };
        zt({
            target: "Array",
            proto: true
        }, {
            at: function e(t) {
                var r = oe(this);
                var n = wt(r);
                var i = ht(t);
                var a = i >= 0 ? i : n + i;
                return a < 0 || a >= n ? undefined : r[a]
            }
        });
        un("at");
        var ln = Array.isArray || function e(t) {
            return S(t) == "Array"
        }
        ;
        var cn = b([].reverse);
        var fn = [1, 2];
        zt({
            target: "Array",
            proto: true,
            forced: String(fn) === String(fn.reverse())
        }, {
            reverse: function e() {
                if (ln(this))
                    this.length = this.length;
                return cn(this)
            }
        });
        var dn = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
        var pn = function(e, t, r) {
            for (var n in t)
                ft(e, n, t[n], r);
            return e
        };
        var hn = i.TypeError;
        var vn = function(e, t) {
            if (P(t, e))
                return e;
            throw hn("Incorrect invocation")
        };
        var yn = i.RangeError;
        var mn = function(e) {
            if (e === undefined)
                return 0;
            var t = ht(e);
            var r = bt(t);
            if (t !== r)
                throw yn("Wrong length or index");
            return r
        };
        var gn = i.Array;
        var bn = Math.abs;
        var wn = Math.pow;
        var xn = Math.floor;
        var Sn = Math.log;
        var En = Math.LN2;
        var Tn = function(e, t, r) {
            var n = gn(r);
            var i = r * 8 - t - 1;
            var a = (1 << i) - 1;
            var s = a >> 1;
            var o = t === 23 ? wn(2, -24) - wn(2, -77) : 0;
            var u = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
            var l = 0;
            var c, f, d;
            e = bn(e);
            if (e != e || e === Infinity) {
                f = e != e ? 1 : 0;
                c = a
            } else {
                c = xn(Sn(e) / En);
                d = wn(2, -c);
                if (e * d < 1) {
                    c--;
                    d *= 2
                }
                if (c + s >= 1) {
                    e += o / d
                } else {
                    e += o * wn(2, 1 - s)
                }
                if (e * d >= 2) {
                    c++;
                    d /= 2
                }
                if (c + s >= a) {
                    f = 0;
                    c = a
                } else if (c + s >= 1) {
                    f = (e * d - 1) * wn(2, t);
                    c = c + s
                } else {
                    f = e * wn(2, s - 1) * wn(2, t);
                    c = 0
                }
            }
            while (t >= 8) {
                n[l++] = f & 255;
                f /= 256;
                t -= 8
            }
            c = c << t | f;
            i += t;
            while (i > 0) {
                n[l++] = c & 255;
                c /= 256;
                i -= 8
            }
            n[--l] |= u * 128;
            return n
        };
        var Bn = function(e, t) {
            var r = e.length;
            var n = r * 8 - t - 1;
            var i = (1 << n) - 1;
            var a = i >> 1;
            var s = n - 7;
            var o = r - 1;
            var u = e[o--];
            var l = u & 127;
            var c;
            u >>= 7;
            while (s > 0) {
                l = l * 256 + e[o--];
                s -= 8
            }
            c = l & (1 << -s) - 1;
            l >>= -s;
            s += t;
            while (s > 0) {
                c = c * 256 + e[o--];
                s -= 8
            }
            if (l === 0) {
                l = 1 - a
            } else if (l === i) {
                return c ? NaN : u ? -Infinity : Infinity
            } else {
                c = c + wn(2, t);
                l = l - a
            }
            return (u ? -1 : 1) * c * wn(2, l - t)
        };
        var jn = {
            pack: Tn,
            unpack: Bn
        };
        var On = function e(t) {
            var r = oe(this);
            var n = wt(r);
            var i = arguments.length;
            var a = mt(i > 1 ? arguments[1] : undefined, n);
            var s = i > 2 ? arguments[2] : undefined;
            var o = s === undefined ? n : mt(s, n);
            while (o > a)
                r[a++] = t;
            return r
        };
        var Xn = Le.f;
        var kn = ge("toStringTag");
        var An = function(e, t, r) {
            if (e && !le(e = r ? e : e.prototype, kn)) {
                Xn(e, kn, {
                    configurable: true,
                    value: t
                })
            }
        };
        var Nn = kt.f;
        var Cn = Le.f;
        var Pn = ct.PROPER;
        var _n = ct.CONFIGURABLE;
        var In = it.get;
        var Ln = it.set;
        var Mn = "ArrayBuffer";
        var Dn = "DataView";
        var Fn = "prototype";
        var Rn = "Wrong length";
        var Hn = "Wrong index";
        var Wn = i[Mn];
        var zn = Wn;
        var Gn = zn && zn[Fn];
        var Un = i[Dn];
        var $n = Un && Un[Fn];
        var Vn = Object.prototype;
        var Yn = i.Array;
        var qn = i.RangeError;
        var Jn = b(On);
        var Zn = b([].reverse);
        var Kn = jn.pack;
        var Qn = jn.unpack;
        var ei = function(e) {
            return [e & 255]
        };
        var ti = function(e) {
            return [e & 255, e >> 8 & 255]
        };
        var ri = function(e) {
            return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        };
        var ni = function(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        };
        var ii = function(e) {
            return Kn(e, 23, 4)
        };
        var ai = function(e) {
            return Kn(e, 52, 8)
        };
        var si = function(e, t) {
            Cn(e[Fn], t, {
                get: function() {
                    return In(this)[t]
                }
            })
        };
        var oi = function(e, t, r, n) {
            var i = mn(r);
            var a = In(e);
            if (i + t > a.byteLength)
                throw qn(Hn);
            var s = In(a.buffer).bytes;
            var o = i + a.byteOffset;
            var u = mr(s, o, o + t);
            return n ? u : Zn(u)
        };
        var ui = function(e, t, r, n, i, a) {
            var s = mn(r);
            var o = In(e);
            if (s + t > o.byteLength)
                throw qn(Hn);
            var u = In(o.buffer).bytes;
            var l = s + o.byteOffset;
            var c = n(+i);
            for (var f = 0; f < t; f++)
                u[l + f] = c[a ? f : t - f - 1]
        };
        if (!dn) {
            zn = function e(t) {
                vn(this, Gn);
                var r = mn(t);
                Ln(this, {
                    bytes: Jn(Yn(r), 0),
                    byteLength: r
                });
                if (!s)
                    this.byteLength = r
            }
            ;
            Gn = zn[Fn];
            Un = function e(t, r, n) {
                vn(this, $n);
                vn(t, Gn);
                var i = In(t).byteLength;
                var a = ht(r);
                if (a < 0 || a > i)
                    throw qn("Wrong offset");
                n = n === undefined ? i - a : bt(n);
                if (a + n > i)
                    throw qn(Rn);
                Ln(this, {
                    buffer: t,
                    byteLength: n,
                    byteOffset: a
                });
                if (!s) {
                    this.buffer = t;
                    this.byteLength = n;
                    this.byteOffset = a
                }
            }
            ;
            $n = Un[Fn];
            if (s) {
                si(zn, "byteLength");
                si(Un, "buffer");
                si(Un, "byteLength");
                si(Un, "byteOffset")
            }
            pn($n, {
                getInt8: function e(t) {
                    return oi(this, 1, t)[0] << 24 >> 24
                },
                getUint8: function e(t) {
                    return oi(this, 1, t)[0]
                },
                getInt16: function e(t) {
                    var r = oi(this, 2, t, arguments.length > 1 ? arguments[1] : undefined);
                    return (r[1] << 8 | r[0]) << 16 >> 16
                },
                getUint16: function e(t) {
                    var r = oi(this, 2, t, arguments.length > 1 ? arguments[1] : undefined);
                    return r[1] << 8 | r[0]
                },
                getInt32: function e(t) {
                    return ni(oi(this, 4, t, arguments.length > 1 ? arguments[1] : undefined))
                },
                getUint32: function e(t) {
                    return ni(oi(this, 4, t, arguments.length > 1 ? arguments[1] : undefined)) >>> 0
                },
                getFloat32: function e(t) {
                    return Qn(oi(this, 4, t, arguments.length > 1 ? arguments[1] : undefined), 23)
                },
                getFloat64: function e(t) {
                    return Qn(oi(this, 8, t, arguments.length > 1 ? arguments[1] : undefined), 52)
                },
                setInt8: function e(t, r) {
                    ui(this, 1, t, ei, r)
                },
                setUint8: function e(t, r) {
                    ui(this, 1, t, ei, r)
                },
                setInt16: function e(t, r) {
                    ui(this, 2, t, ti, r, arguments.length > 2 ? arguments[2] : undefined)
                },
                setUint16: function e(t, r) {
                    ui(this, 2, t, ti, r, arguments.length > 2 ? arguments[2] : undefined)
                },
                setInt32: function e(t, r) {
                    ui(this, 4, t, ri, r, arguments.length > 2 ? arguments[2] : undefined)
                },
                setUint32: function e(t, r) {
                    ui(this, 4, t, ri, r, arguments.length > 2 ? arguments[2] : undefined)
                },
                setFloat32: function e(t, r) {
                    ui(this, 4, t, ii, r, arguments.length > 2 ? arguments[2] : undefined)
                },
                setFloat64: function e(t, r) {
                    ui(this, 8, t, ai, r, arguments.length > 2 ? arguments[2] : undefined)
                }
            })
        } else {
            var li = Pn && Wn.name !== Mn;
            if (!a((function() {
                Wn(1)
            }
            )) || !a((function() {
                new Wn(-1)
            }
            )) || a((function() {
                new Wn;
                new Wn(1.5);
                new Wn(NaN);
                return li && !_n
            }
            ))) {
                zn = function e(t) {
                    vn(this, Gn);
                    return new Wn(mn(t))
                }
                ;
                zn[Fn] = Gn;
                for (var ci = Nn(Wn), fi = 0, di; ci.length > fi; ) {
                    if (!((di = ci[fi++])in zn)) {
                        Me(zn, di, Wn[di])
                    }
                }
                Gn.constructor = zn
            } else if (li && _n) {
                Me(Wn, "name", Mn)
            }
            if (Kt && Yt($n) !== Vn) {
                Kt($n, Vn)
            }
            var pi = new Un(new zn(2));
            var hi = b($n.setInt8);
            pi.setInt8(0, 2147483648);
            pi.setInt8(1, 2147483649);
            if (pi.getInt8(0) || !pi.getInt8(1))
                pn($n, {
                    setInt8: function e(t, r) {
                        hi(this, t, r << 24 >> 24)
                    },
                    setUint8: function e(t, r) {
                        hi(this, t, r << 24 >> 24)
                    }
                }, {
                    unsafe: true
                })
        }
        An(zn, Mn);
        An(Un, Dn);
        var vi = {
            ArrayBuffer: zn,
            DataView: Un
        };
        var yi = function() {};
        var mi = [];
        var gi = C("Reflect", "construct");
        var bi = /^\s*(?:class|function)\b/;
        var wi = b(bi.exec);
        var xi = !bi.exec(yi);
        var Si = function(e) {
            if (!k(e))
                return false;
            try {
                gi(yi, mi, e);
                return true
            } catch (e) {
                return false
            }
        };
        var Ei = function(e) {
            if (!k(e))
                return false;
            switch (Rr(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return false
            }
            return xi || !!wi(bi, Fe(e))
        };
        var Ti = !gi || a((function() {
            var e;
            return Si(Si.call) || !Si(Object) || !Si((function() {
                e = true
            }
            )) || e
        }
        )) ? Ei : Si;
        var Bi = i.TypeError;
        var ji = function(e) {
            if (Ti(e))
                return e;
            throw Bi(V(e) + " is not a constructor")
        };
        var Oi = ge("species");
        var Xi = function(e, t) {
            var r = Ce(e).constructor;
            var n;
            return r === undefined || (n = Ce(r)[Oi]) == undefined ? t : ji(n)
        };
        var ki = vi.ArrayBuffer;
        var Ai = vi.DataView;
        var Ni = Ai.prototype;
        var Ci = b(ki.prototype.slice);
        var Pi = b(Ni.getUint8);
        var _i = b(Ni.setUint8);
        var Ii = a((function() {
            return !new ki(2).slice(1, undefined).byteLength
        }
        ));
        zt({
            target: "ArrayBuffer",
            proto: true,
            unsafe: true,
            forced: Ii
        }, {
            slice: function e(t, r) {
                if (Ci && r === undefined) {
                    return Ci(Ce(this), t)
                }
                var n = Ce(this).byteLength;
                var i = mt(t, n);
                var a = mt(r === undefined ? n : r, n);
                var s = new (Xi(this, ki))(bt(a - i));
                var o = new Ai(this);
                var u = new Ai(s);
                var l = 0;
                while (i < a) {
                    _i(u, l++, Pi(o, i++))
                }
                return s
            }
        });
        zt({
            target: "Object",
            stat: true
        }, {
            fromEntries: function e(t) {
                var r = {};
                qr(t, (function(e, t) {
                    hr(r, e, t)
                }
                ), {
                    AS_ENTRIES: true
                });
                return r
            }
        });
        zt({
            target: "Object",
            stat: true
        }, {
            hasOwn: le
        });
        var Li = function(e) {
            var t, r;
            this.promise = new e((function(e, n) {
                if (t !== undefined || r !== undefined)
                    throw TypeError("Bad Promise constructor");
                t = e;
                r = n
            }
            ));
            this.resolve = q(t);
            this.reject = q(r)
        };
        var Mi = function(e) {
            return new Li(e)
        };
        var Di = {
            f: Mi
        };
        var Fi = function(e) {
            try {
                return {
                    error: false,
                    value: e()
                }
            } catch (e) {
                return {
                    error: true,
                    value: e
                }
            }
        };
        zt({
            target: "Promise",
            stat: true
        }, {
            allSettled: function e(t) {
                var r = this;
                var n = Di.f(r);
                var i = n.resolve;
                var a = n.reject;
                var s = Fi((function() {
                    var e = q(r.resolve);
                    var n = [];
                    var a = 0;
                    var s = 1;
                    qr(t, (function(t) {
                        var o = a++;
                        var l = false;
                        s++;
                        u(e, r, t).then((function(e) {
                            if (l)
                                return;
                            l = true;
                            n[o] = {
                                status: "fulfilled",
                                value: e
                            };
                            --s || i(n)
                        }
                        ), (function(e) {
                            if (l)
                                return;
                            l = true;
                            n[o] = {
                                status: "rejected",
                                reason: e
                            };
                            --s || i(n)
                        }
                        ))
                    }
                    ));
                    --s || i(n)
                }
                ));
                if (s.error)
                    a(s.value);
                return n.promise
            }
        });
        var Ri = "No one promise resolved";
        zt({
            target: "Promise",
            stat: true
        }, {
            any: function e(t) {
                var r = this;
                var n = C("AggregateError");
                var i = Di.f(r);
                var a = i.resolve;
                var s = i.reject;
                var o = Fi((function() {
                    var e = q(r.resolve);
                    var i = [];
                    var o = 0;
                    var l = 1;
                    var c = false;
                    qr(t, (function(t) {
                        var f = o++;
                        var d = false;
                        l++;
                        u(e, r, t).then((function(e) {
                            if (d || c)
                                return;
                            c = true;
                            a(e)
                        }
                        ), (function(e) {
                            if (d || c)
                                return;
                            d = true;
                            i[f] = e;
                            --l || s(new n(i,Ri))
                        }
                        ))
                    }
                    ));
                    --l || s(new n(i,Ri))
                }
                ));
                if (o.error)
                    s(o.value);
                return i.promise
            }
        });
        var Hi = i.Promise;
        var Wi = function(e, t) {
            Ce(e);
            if (A(t) && t.constructor === e)
                return t;
            var r = Di.f(e);
            var n = r.resolve;
            n(t);
            return r.promise
        };
        var zi = !!Hi && a((function() {
            Hi.prototype["finally"].call({
                then: function() {}
            }, (function() {}
            ))
        }
        ));
        zt({
            target: "Promise",
            proto: true,
            real: true,
            forced: zi
        }, {
            finally: function(e) {
                var t = Xi(this, C("Promise"));
                var r = k(e);
                return this.then(r ? function(r) {
                    return Wi(t, e()).then((function() {
                        return r
                    }
                    ))
                }
                : e, r ? function(r) {
                    return Wi(t, e()).then((function() {
                        throw r
                    }
                    ))
                }
                : e)
            }
        });
        if (!Q && k(Hi)) {
            var Gi = C("Promise").prototype["finally"];
            if (Hi.prototype["finally"] !== Gi) {
                ft(Hi.prototype, "finally", Gi, {
                    unsafe: true
                })
            }
        }
        var Ui = ge("iterator");
        var $i = false;
        var Vi, Yi, qi;
        if ([].keys) {
            qi = [].keys();
            if (!("next"in qi))
                $i = true;
            else {
                Yi = Yt(Yt(qi));
                if (Yi !== Object.prototype)
                    Vi = Yi
            }
        }
        var Ji = Vi == undefined || a((function() {
            var e = {};
            return Vi[Ui].call(e) !== e
        }
        ));
        if (Ji)
            Vi = {};
        if (!k(Vi[Ui])) {
            ft(Vi, Ui, (function() {
                return this
            }
            ))
        }
        var Zi = {
            IteratorPrototype: Vi,
            BUGGY_SAFARI_ITERATORS: $i
        };
        var Ki = Zi.IteratorPrototype;
        var Qi = function() {
            return this
        };
        var ea = function(e, t, r) {
            var n = t + " Iterator";
            e.prototype = pr(Ki, {
                next: h(1, r)
            });
            An(e, n, false, true);
            kr[n] = Qi;
            return e
        };
        var ta = ge("match");
        var ra = function(e) {
            var t;
            return A(e) && ((t = e[ta]) !== undefined ? !!t : S(e) == "RegExp")
        };
        var na = function() {
            var e = Ce(this);
            var t = "";
            if (e.global)
                t += "g";
            if (e.ignoreCase)
                t += "i";
            if (e.multiline)
                t += "m";
            if (e.dotAll)
                t += "s";
            if (e.unicode)
                t += "u";
            if (e.sticky)
                t += "y";
            return t
        };
        var ia = b("".charAt);
        var aa = b("".charCodeAt);
        var sa = b("".slice);
        var oa = function(e) {
            return function(t, r) {
                var n = Zr(O(t));
                var i = ht(r);
                var a = n.length;
                var s, o;
                if (i < 0 || i >= a)
                    return e ? "" : undefined;
                s = aa(n, i);
                return s < 55296 || s > 56319 || i + 1 === a || (o = aa(n, i + 1)) < 56320 || o > 57343 ? e ? ia(n, i) : s : e ? sa(n, i, i + 2) : (s - 55296 << 10) + (o - 56320) + 65536
            }
        };
        var ua = {
            codeAt: oa(false),
            charAt: oa(true)
        };
        var la = ua.charAt;
        var ca = function(e, t, r) {
            return t + (r ? la(e, t).length : 1)
        };
        var fa = i.RegExp;
        var da = a((function() {
            var e = fa("a", "y");
            e.lastIndex = 2;
            return e.exec("abcd") != null
        }
        ));
        var pa = da || a((function() {
            return !fa("a", "y").sticky
        }
        ));
        var ha = da || a((function() {
            var e = fa("^r", "gy");
            e.lastIndex = 2;
            return e.exec("str") != null
        }
        ));
        var va = {
            BROKEN_CARET: ha,
            MISSED_STICKY: pa,
            UNSUPPORTED_Y: da
        };
        var ya = i.RegExp;
        var ma = a((function() {
            var e = ya(".", "s");
            return !(e.dotAll && e.exec("\n") && e.flags === "s")
        }
        ));
        var ga = i.RegExp;
        var ba = a((function() {
            var e = ga("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }
        ));
        var wa = it.get;
        var xa = ae("native-string-replace", String.prototype.replace);
        var Sa = RegExp.prototype.exec;
        var Ea = Sa;
        var Ta = b("".charAt);
        var Ba = b("".indexOf);
        var ja = b("".replace);
        var Oa = b("".slice);
        var Xa = function() {
            var e = /a/;
            var t = /b*/g;
            u(Sa, e, "a");
            u(Sa, t, "a");
            return e.lastIndex !== 0 || t.lastIndex !== 0
        }();
        var ka = va.BROKEN_CARET;
        var Aa = /()??/.exec("")[1] !== undefined;
        var Na = Xa || Aa || ka || ma || ba;
        if (Na) {
            Ea = function e(t) {
                var r = this;
                var n = wa(r);
                var i = Zr(t);
                var a = n.raw;
                var s, o, l, c, f, d, p;
                if (a) {
                    a.lastIndex = r.lastIndex;
                    s = u(Ea, a, i);
                    r.lastIndex = a.lastIndex;
                    return s
                }
                var h = n.groups;
                var v = ka && r.sticky;
                var y = u(na, r);
                var m = r.source;
                var g = 0;
                var b = i;
                if (v) {
                    y = ja(y, "y", "");
                    if (Ba(y, "g") === -1) {
                        y += "g"
                    }
                    b = Oa(i, r.lastIndex);
                    if (r.lastIndex > 0 && (!r.multiline || r.multiline && Ta(i, r.lastIndex - 1) !== "\n")) {
                        m = "(?: " + m + ")";
                        b = " " + b;
                        g++
                    }
                    o = new RegExp("^(?:" + m + ")",y)
                }
                if (Aa) {
                    o = new RegExp("^" + m + "$(?!\\s)",y)
                }
                if (Xa)
                    l = r.lastIndex;
                c = u(Sa, v ? o : r, b);
                if (v) {
                    if (c) {
                        c.input = Oa(c.input, g);
                        c[0] = Oa(c[0], g);
                        c.index = r.lastIndex;
                        r.lastIndex += c[0].length
                    } else
                        r.lastIndex = 0
                } else if (Xa && c) {
                    r.lastIndex = r.global ? c.index + c[0].length : l
                }
                if (Aa && c && c.length > 1) {
                    u(xa, c[0], o, (function() {
                        for (f = 1; f < arguments.length - 2; f++) {
                            if (arguments[f] === undefined)
                                c[f] = undefined
                        }
                    }
                    ))
                }
                if (c && h) {
                    c.groups = d = pr(null);
                    for (f = 0; f < h.length; f++) {
                        p = h[f];
                        d[p[0]] = c[p[1]]
                    }
                }
                return c
            }
        }
        var Ca = Ea;
        var Pa = i.TypeError;
        var _a = function(e, t) {
            var r = e.exec;
            if (k(r)) {
                var n = u(r, e, t);
                if (n !== null)
                    Ce(n);
                return n
            }
            if (S(e) === "RegExp")
                return u(Ca, e, t);
            throw Pa("RegExp#exec called on incompatible receiver")
        };
        var Ia = ge("matchAll");
        var La = "RegExp String";
        var Ma = La + " Iterator";
        var Da = it.set;
        var Fa = it.getterFor(Ma);
        var Ra = RegExp.prototype;
        var Ha = i.TypeError;
        var Wa = b(na);
        var za = b("".indexOf);
        var Ga = b("".matchAll);
        var Ua = !!Ga && !a((function() {
            Ga("a", /./)
        }
        ));
        var $a = ea((function e(t, r, n, i) {
            Da(this, {
                type: Ma,
                regexp: t,
                string: r,
                global: n,
                unicode: i,
                done: false
            })
        }
        ), La, (function e() {
            var t = Fa(this);
            if (t.done)
                return {
                    value: undefined,
                    done: true
                };
            var r = t.regexp;
            var n = t.string;
            var i = _a(r, n);
            if (i === null)
                return {
                    value: undefined,
                    done: t.done = true
                };
            if (t.global) {
                if (Zr(i[0]) === "")
                    r.lastIndex = ca(n, bt(r.lastIndex), t.unicode);
                return {
                    value: i,
                    done: false
                }
            }
            t.done = true;
            return {
                value: i,
                done: false
            }
        }
        ));
        var Va = function(e) {
            var t = Ce(this);
            var r = Zr(e);
            var n, i, a, s, o, u;
            n = Xi(t, RegExp);
            i = t.flags;
            if (i === undefined && P(Ra, t) && !("flags"in Ra)) {
                i = Wa(t)
            }
            a = i === undefined ? "" : Zr(i);
            s = new n(n === RegExp ? t.source : t,a);
            o = !!~za(a, "g");
            u = !!~za(a, "u");
            s.lastIndex = bt(t.lastIndex);
            return new $a(s,r,o,u)
        };
        zt({
            target: "String",
            proto: true,
            forced: Ua
        }, {
            matchAll: function e(t) {
                var r = O(this);
                var n, i, a, s;
                if (t != null) {
                    if (ra(t)) {
                        n = Zr(O("flags"in Ra ? t.flags : Wa(t)));
                        if (!~za(n, "g"))
                            throw Ha("`.matchAll` does not allow non-global regexes")
                    }
                    if (Ua)
                        return Ga(r, t);
                    a = J(t, Ia);
                    if (a === undefined && Q && S(t) == "RegExp")
                        a = Va;
                    if (a)
                        return u(a, t, r)
                } else if (Ua)
                    return Ga(r, t);
                i = Zr(r);
                s = new RegExp(t,"g");
                return Q ? u(Va, s, i) : s[Ia](i)
            }
        });
        Q || Ia in Ra || ft(Ra, Ia, Va);
        var Ya = Math.floor;
        var qa = b("".charAt);
        var Ja = b("".replace);
        var Za = b("".slice);
        var Ka = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
        var Qa = /\$([$&'`]|\d{1,2})/g;
        var es = function(e, t, r, n, i, a) {
            var s = r + e.length;
            var o = n.length;
            var u = Qa;
            if (i !== undefined) {
                i = oe(i);
                u = Ka
            }
            return Ja(a, u, (function(a, u) {
                var l;
                switch (qa(u, 0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return Za(t, 0, r);
                case "'":
                    return Za(t, s);
                case "<":
                    l = i[Za(u, 1, -1)];
                    break;
                default:
                    var c = +u;
                    if (c === 0)
                        return a;
                    if (c > o) {
                        var f = Ya(c / 10);
                        if (f === 0)
                            return a;
                        if (f <= o)
                            return n[f - 1] === undefined ? qa(u, 1) : n[f - 1] + qa(u, 1);
                        return a
                    }
                    l = n[c - 1]
                }
                return l === undefined ? "" : l
            }
            ))
        };
        var ts = ge("replace");
        var rs = RegExp.prototype;
        var ns = i.TypeError;
        var is = b(na);
        var as = b("".indexOf);
        var ss = b("".replace);
        var os = b("".slice);
        var us = Math.max;
        var ls = function(e, t, r) {
            if (r > e.length)
                return -1;
            if (t === "")
                return r;
            return as(e, t, r)
        };
        zt({
            target: "String",
            proto: true
        }, {
            replaceAll: function e(t, r) {
                var n = O(this);
                var i, a, s, o, l, c, f, d, p;
                var h = 0;
                var v = 0;
                var y = "";
                if (t != null) {
                    i = ra(t);
                    if (i) {
                        a = Zr(O("flags"in rs ? t.flags : is(t)));
                        if (!~as(a, "g"))
                            throw ns("`.replaceAll` does not allow non-global regexes")
                    }
                    s = J(t, ts);
                    if (s) {
                        return u(s, t, n, r)
                    } else if (Q && i) {
                        return ss(Zr(n), t, r)
                    }
                }
                o = Zr(n);
                l = Zr(t);
                c = k(r);
                if (!c)
                    r = Zr(r);
                f = l.length;
                d = us(1, f);
                h = ls(o, l, 0);
                while (h !== -1) {
                    p = c ? Zr(r(l, h, o)) : es(l, o, h, [], undefined, r);
                    y += os(o, v, h) + p;
                    v = h + f;
                    h = ls(o, l, h + d)
                }
                if (v < o.length) {
                    y += os(o, v)
                }
                return y
            }
        });
        var cs = ge("iterator");
        var fs = false;
        var ds = function(e, t) {
            if (!t && !fs)
                return false;
            var r = false;
            try {
                var n = {};
                n[cs] = function() {
                    return {
                        next: function() {
                            return {
                                done: r = true
                            }
                        }
                    }
                }
                ;
                e(n)
            } catch (e) {}
            return r
        };
        var ps = Le.f;
        var hs = i.Int8Array;
        var vs = hs && hs.prototype;
        var ys = i.Uint8ClampedArray;
        var ms = ys && ys.prototype;
        var gs = hs && Yt(hs);
        var bs = vs && Yt(vs);
        var ws = Object.prototype;
        var xs = i.TypeError;
        var Ss = ge("toStringTag");
        var Es = pe("TYPED_ARRAY_TAG");
        var Ts = pe("TYPED_ARRAY_CONSTRUCTOR");
        var Bs = dn && !!Kt && Rr(i.opera) !== "Opera";
        var js = false;
        var Os, Xs, ks;
        var As = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        };
        var Ns = {
            BigInt64Array: 8,
            BigUint64Array: 8
        };
        var Cs = function e(t) {
            if (!A(t))
                return false;
            var r = Rr(t);
            return r === "DataView" || le(As, r) || le(Ns, r)
        };
        var Ps = function(e) {
            if (!A(e))
                return false;
            var t = Rr(e);
            return le(As, t) || le(Ns, t)
        };
        var _s = function(e) {
            if (Ps(e))
                return e;
            throw xs("Target is not a typed array")
        };
        var Is = function(e) {
            if (k(e) && (!Kt || P(gs, e)))
                return e;
            throw xs(V(e) + " is not a typed array constructor")
        };
        var Ls = function(e, t, r) {
            if (!s)
                return;
            if (r)
                for (var n in As) {
                    var a = i[n];
                    if (a && le(a.prototype, e))
                        try {
                            delete a.prototype[e]
                        } catch (e) {}
                }
            if (!bs[e] || r) {
                ft(bs, e, r ? t : Bs && vs[e] || t)
            }
        };
        var Ms = function(e, t, r) {
            var n, a;
            if (!s)
                return;
            if (Kt) {
                if (r)
                    for (n in As) {
                        a = i[n];
                        if (a && le(a, e))
                            try {
                                delete a[e]
                            } catch (e) {}
                    }
                if (!gs[e] || r) {
                    try {
                        return ft(gs, e, r ? t : Bs && gs[e] || t)
                    } catch (e) {}
                } else
                    return
            }
            for (n in As) {
                a = i[n];
                if (a && (!a[e] || r)) {
                    ft(a, e, t)
                }
            }
        };
        for (Os in As) {
            Xs = i[Os];
            ks = Xs && Xs.prototype;
            if (ks)
                Me(ks, Ts, Xs);
            else
                Bs = false
        }
        for (Os in Ns) {
            Xs = i[Os];
            ks = Xs && Xs.prototype;
            if (ks)
                Me(ks, Ts, Xs)
        }
        if (!Bs || !k(gs) || gs === Function.prototype) {
            gs = function e() {
                throw xs("Incorrect invocation")
            }
            ;
            if (Bs)
                for (Os in As) {
                    if (i[Os])
                        Kt(i[Os], gs)
                }
        }
        if (!Bs || !bs || bs === ws) {
            bs = gs.prototype;
            if (Bs)
                for (Os in As) {
                    if (i[Os])
                        Kt(i[Os].prototype, bs)
                }
        }
        if (Bs && Yt(ms) !== bs) {
            Kt(ms, bs)
        }
        if (s && !le(bs, Ss)) {
            js = true;
            ps(bs, Ss, {
                get: function() {
                    return A(this) ? this[Es] : undefined
                }
            });
            for (Os in As)
                if (i[Os]) {
                    Me(i[Os], Es, Os)
                }
        }
        var Ds = {
            NATIVE_ARRAY_BUFFER_VIEWS: Bs,
            TYPED_ARRAY_CONSTRUCTOR: Ts,
            TYPED_ARRAY_TAG: js && Es,
            aTypedArray: _s,
            aTypedArrayConstructor: Is,
            exportTypedArrayMethod: Ls,
            exportTypedArrayStaticMethod: Ms,
            isView: Cs,
            isTypedArray: Ps,
            TypedArray: gs,
            TypedArrayPrototype: bs
        };
        var Fs = Ds.NATIVE_ARRAY_BUFFER_VIEWS;
        var Rs = i.ArrayBuffer;
        var Hs = i.Int8Array;
        var Ws = !Fs || !a((function() {
            Hs(1)
        }
        )) || !a((function() {
            new Hs(-1)
        }
        )) || !ds((function(e) {
            new Hs;
            new Hs(null);
            new Hs(1.5);
            new Hs(e)
        }
        ), true) || a((function() {
            return new Hs(new Rs(2),1,undefined).length !== 1
        }
        ));
        var zs = Math.floor;
        var Gs = Number.isInteger || function e(t) {
            return !A(t) && isFinite(t) && zs(t) === t
        }
        ;
        var Us = i.RangeError;
        var $s = function(e) {
            var t = ht(e);
            if (t < 0)
                throw Us("The argument can't be less than 0");
            return t
        };
        var Vs = i.RangeError;
        var Ys = function(e, t) {
            var r = $s(e);
            if (r % t)
                throw Vs("Wrong offset");
            return r
        };
        var qs = Ds.aTypedArrayConstructor;
        var Js = function e(t) {
            var r = ji(this);
            var n = oe(t);
            var i = arguments.length;
            var a = i > 1 ? arguments[1] : undefined;
            var s = a !== undefined;
            var o = Wr(n);
            var l, c, f, d, p, h;
            if (o && !Cr(o)) {
                p = Gr(n, o);
                h = p.next;
                n = [];
                while (!(d = u(h, p)).done) {
                    n.push(d.value)
                }
            }
            if (s && i > 2) {
                a = Xr(a, arguments[2])
            }
            c = wt(n);
            f = new (qs(r))(c);
            for (l = 0; c > l; l++) {
                f[l] = s ? a(n[l], l) : n[l]
            }
            return f
        };
        var Zs = ge("species");
        var Ks = i.Array;
        var Qs = function(e) {
            var t;
            if (ln(e)) {
                t = e.constructor;
                if (Ti(t) && (t === Ks || ln(t.prototype)))
                    t = undefined;
                else if (A(t)) {
                    t = t[Zs];
                    if (t === null)
                        t = undefined
                }
            }
            return t === undefined ? Ks : t
        };
        var eo = function(e, t) {
            return new (Qs(e))(t === 0 ? 0 : t)
        };
        var to = b([].push);
        var ro = function(e) {
            var t = e == 1;
            var r = e == 2;
            var n = e == 3;
            var i = e == 4;
            var a = e == 6;
            var s = e == 7;
            var o = e == 5 || a;
            return function(u, l, c, f) {
                var d = oe(u);
                var p = B(d);
                var h = Xr(l, c);
                var v = wt(p);
                var y = 0;
                var m = f || eo;
                var g = t ? m(u, v) : r || s ? m(u, 0) : undefined;
                var b, w;
                for (; v > y; y++)
                    if (o || y in p) {
                        b = p[y];
                        w = h(b, y, d);
                        if (e) {
                            if (t)
                                g[y] = w;
                            else if (w)
                                switch (e) {
                                case 3:
                                    return true;
                                case 5:
                                    return b;
                                case 6:
                                    return y;
                                case 2:
                                    to(g, b)
                                }
                            else
                                switch (e) {
                                case 4:
                                    return false;
                                case 7:
                                    to(g, b)
                                }
                        }
                    }
                return a ? -1 : n || i ? i : g
            }
        };
        var no = {
            forEach: ro(0),
            map: ro(1),
            filter: ro(2),
            some: ro(3),
            every: ro(4),
            find: ro(5),
            findIndex: ro(6),
            filterReject: ro(7)
        };
        var io = ge("species");
        var ao = function(e) {
            var t = C(e);
            var r = Le.f;
            if (s && t && !t[io]) {
                r(t, io, {
                    configurable: true,
                    get: function() {
                        return this
                    }
                })
            }
        };
        var so = function(e, t, r) {
            var n, i;
            if (Kt && k(n = t.constructor) && n !== r && A(i = n.prototype) && i !== r.prototype)
                Kt(e, i);
            return e
        };
        var oo = r((function(e) {
            var t = kt.f;
            var r = no.forEach;
            var n = it.get;
            var a = it.set;
            var o = Le.f;
            var l = ke.f;
            var c = Math.round;
            var f = i.RangeError;
            var d = vi.ArrayBuffer;
            var p = d.prototype;
            var v = vi.DataView;
            var y = Ds.NATIVE_ARRAY_BUFFER_VIEWS;
            var m = Ds.TYPED_ARRAY_CONSTRUCTOR;
            var g = Ds.TYPED_ARRAY_TAG;
            var b = Ds.TypedArray;
            var w = Ds.TypedArrayPrototype;
            var x = Ds.aTypedArrayConstructor;
            var S = Ds.isTypedArray;
            var E = "BYTES_PER_ELEMENT";
            var T = "Wrong length";
            var B = function(e, t) {
                x(e);
                var r = 0;
                var n = t.length;
                var i = new e(n);
                while (n > r)
                    i[r] = t[r++];
                return i
            };
            var j = function(e, t) {
                o(e, t, {
                    get: function() {
                        return n(this)[t]
                    }
                })
            };
            var O = function(e) {
                var t;
                return P(p, e) || (t = Rr(e)) == "ArrayBuffer" || t == "SharedArrayBuffer"
            };
            var X = function(e, t) {
                return S(e) && !U(t) && t in e && Gs(+t) && t >= 0
            };
            var k = function e(t, r) {
                r = Se(r);
                return X(t, r) ? h(2, t[r]) : l(t, r)
            };
            var N = function e(t, r, n) {
                r = Se(r);
                if (X(t, r) && A(n) && le(n, "value") && !le(n, "get") && !le(n, "set") && !n.configurable && (!le(n, "writable") || n.writable) && (!le(n, "enumerable") || n.enumerable)) {
                    t[r] = n.value;
                    return t
                }
                return o(t, r, n)
            };
            if (s) {
                if (!y) {
                    ke.f = k;
                    Le.f = N;
                    j(w, "buffer");
                    j(w, "byteOffset");
                    j(w, "byteLength");
                    j(w, "length")
                }
                zt({
                    target: "Object",
                    stat: true,
                    forced: !y
                }, {
                    getOwnPropertyDescriptor: k,
                    defineProperty: N
                });
                e.exports = function(e, s, l) {
                    var p = e.match(/\d+$/)[0] / 8;
                    var h = e + (l ? "Clamped" : "") + "Array";
                    var x = "get" + e;
                    var j = "set" + e;
                    var X = i[h];
                    var k = X;
                    var N = k && k.prototype;
                    var C = {};
                    var P = function(e, t) {
                        var r = n(e);
                        return r.view[x](t * p + r.byteOffset, true)
                    };
                    var _ = function(e, t, r) {
                        var i = n(e);
                        if (l)
                            r = (r = c(r)) < 0 ? 0 : r > 255 ? 255 : r & 255;
                        i.view[j](t * p + i.byteOffset, r, true)
                    };
                    var I = function(e, t) {
                        o(e, t, {
                            get: function() {
                                return P(this, t)
                            },
                            set: function(e) {
                                return _(this, t, e)
                            },
                            enumerable: true
                        })
                    };
                    if (!y) {
                        k = s((function(e, t, r, n) {
                            vn(e, N);
                            var i = 0;
                            var s = 0;
                            var o, l, c;
                            if (!A(t)) {
                                c = mn(t);
                                l = c * p;
                                o = new d(l)
                            } else if (O(t)) {
                                o = t;
                                s = Ys(r, p);
                                var h = t.byteLength;
                                if (n === undefined) {
                                    if (h % p)
                                        throw f(T);
                                    l = h - s;
                                    if (l < 0)
                                        throw f(T)
                                } else {
                                    l = bt(n) * p;
                                    if (l + s > h)
                                        throw f(T)
                                }
                                c = l / p
                            } else if (S(t)) {
                                return B(k, t)
                            } else {
                                return u(Js, k, t)
                            }
                            a(e, {
                                buffer: o,
                                byteOffset: s,
                                byteLength: l,
                                length: c,
                                view: new v(o)
                            });
                            while (i < c)
                                I(e, i++)
                        }
                        ));
                        if (Kt)
                            Kt(k, b);
                        N = k.prototype = pr(w)
                    } else if (Ws) {
                        k = s((function(e, t, r, n) {
                            vn(e, N);
                            return so(function() {
                                if (!A(t))
                                    return new X(mn(t));
                                if (O(t))
                                    return n !== undefined ? new X(t,Ys(r, p),n) : r !== undefined ? new X(t,Ys(r, p)) : new X(t);
                                if (S(t))
                                    return B(k, t);
                                return u(Js, k, t)
                            }(), e, k)
                        }
                        ));
                        if (Kt)
                            Kt(k, b);
                        r(t(X), (function(e) {
                            if (!(e in k)) {
                                Me(k, e, X[e])
                            }
                        }
                        ));
                        k.prototype = N
                    }
                    if (N.constructor !== k) {
                        Me(N, "constructor", k)
                    }
                    Me(N, m, k);
                    if (g) {
                        Me(N, g, h)
                    }
                    C[h] = k;
                    zt({
                        global: true,
                        forced: k != X,
                        sham: !y
                    }, C);
                    if (!(E in k)) {
                        Me(k, E, p)
                    }
                    if (!(E in N)) {
                        Me(N, E, p)
                    }
                    ao(h)
                }
            } else
                e.exports = function() {}
        }
        ));
        oo("Float32", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ));
        oo("Float64", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ));
        oo("Int8", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ));
        oo("Int16", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ));
        oo("Int32", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ));
        oo("Uint8", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ));
        oo("Uint8", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ), true);
        oo("Uint16", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ));
        oo("Uint32", (function(e) {
            return function t(r, n, i) {
                return e(this, r, n, i)
            }
        }
        ));
        var uo = Ds.aTypedArray;
        var lo = Ds.exportTypedArrayMethod;
        lo("at", (function e(t) {
            var r = uo(this);
            var n = wt(r);
            var i = ht(t);
            var a = i >= 0 ? i : n + i;
            return a < 0 || a >= n ? undefined : r[a]
        }
        ));
        var co = Ds.exportTypedArrayStaticMethod;
        co("from", Js, Ws);
        var fo = Ds.aTypedArrayConstructor;
        var po = Ds.exportTypedArrayStaticMethod;
        po("of", (function e() {
            var t = 0;
            var r = arguments.length;
            var n = new (fo(this))(r);
            while (r > t)
                n[t] = arguments[t++];
            return n
        }
        ), Ws);
        var ho = Math.floor;
        var vo = function(e, t) {
            var r = e.length;
            var n = ho(r / 2);
            return r < 8 ? yo(e, t) : mo(e, vo(mr(e, 0, n), t), vo(mr(e, n), t), t)
        };
        var yo = function(e, t) {
            var r = e.length;
            var n = 1;
            var i, a;
            while (n < r) {
                a = n;
                i = e[n];
                while (a && t(e[a - 1], i) > 0) {
                    e[a] = e[--a]
                }
                if (a !== n++)
                    e[a] = i
            }
            return e
        };
        var mo = function(e, t, r, n) {
            var i = t.length;
            var a = r.length;
            var s = 0;
            var o = 0;
            while (s < i || o < a) {
                e[s + o] = s < i && o < a ? n(t[s], r[o]) <= 0 ? t[s++] : r[o++] : s < i ? t[s++] : r[o++]
            }
            return e
        };
        var go = vo;
        var bo = _.match(/firefox\/(\d+)/i);
        var wo = !!bo && +bo[1];
        var xo = /MSIE|Trident/.test(_);
        var So = _.match(/AppleWebKit\/(\d+)\./);
        var Eo = !!So && +So[1];
        var To = i.Array;
        var Bo = Ds.aTypedArray;
        var jo = Ds.exportTypedArrayMethod;
        var Oo = i.Uint16Array;
        var Xo = Oo && b(Oo.prototype.sort);
        var ko = !!Xo && !(a((function() {
            Xo(new Oo(2), null)
        }
        )) && a((function() {
            Xo(new Oo(2), {})
        }
        )));
        var Ao = !!Xo && !a((function() {
            if (H)
                return H < 74;
            if (wo)
                return wo < 67;
            if (xo)
                return true;
            if (Eo)
                return Eo < 602;
            var e = new Oo(516);
            var t = To(516);
            var r, n;
            for (r = 0; r < 516; r++) {
                n = r % 4;
                e[r] = 515 - r;
                t[r] = r - 2 * n + 3
            }
            Xo(e, (function(e, t) {
                return (e / 4 | 0) - (t / 4 | 0)
            }
            ));
            for (r = 0; r < 516; r++) {
                if (e[r] !== t[r])
                    return true
            }
        }
        ));
        var No = function(e) {
            return function(t, r) {
                if (e !== undefined)
                    return +e(t, r) || 0;
                if (r !== r)
                    return -1;
                if (t !== t)
                    return 1;
                if (t === 0 && r === 0)
                    return 1 / t > 0 && 1 / r < 0 ? 1 : -1;
                return t > r
            }
        };
        jo("sort", (function e(t) {
            if (t !== undefined)
                q(t);
            if (Ao)
                return Xo(this, t);
            return go(Bo(this), No(t))
        }
        ), !Ao || ko);
        var Co = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        };
        var Po = Be("span").classList;
        var _o = Po && Po.constructor && Po.constructor.prototype;
        var Io = _o === Object.prototype ? undefined : _o;
        var Lo = ct.PROPER;
        var Mo = ct.CONFIGURABLE;
        var Do = Zi.IteratorPrototype;
        var Fo = Zi.BUGGY_SAFARI_ITERATORS;
        var Ro = ge("iterator");
        var Ho = "keys";
        var Wo = "values";
        var zo = "entries";
        var Go = function() {
            return this
        };
        var Uo = function(e, t, r, n, i, a, s) {
            ea(r, t, n);
            var o = function(e) {
                if (e === i && p)
                    return p;
                if (!Fo && e in f)
                    return f[e];
                switch (e) {
                case Ho:
                    return function t() {
                        return new r(this,e)
                    }
                    ;
                case Wo:
                    return function t() {
                        return new r(this,e)
                    }
                    ;
                case zo:
                    return function t() {
                        return new r(this,e)
                    }
                }
                return function() {
                    return new r(this)
                }
            };
            var l = t + " Iterator";
            var c = false;
            var f = e.prototype;
            var d = f[Ro] || f["@@iterator"] || i && f[i];
            var p = !Fo && d || o(i);
            var h = t == "Array" ? f.entries || d : d;
            var v, y, m;
            if (h) {
                v = Yt(h.call(new e));
                if (v !== Object.prototype && v.next) {
                    if (Yt(v) !== Do) {
                        if (Kt) {
                            Kt(v, Do)
                        } else if (!k(v[Ro])) {
                            ft(v, Ro, Go)
                        }
                    }
                    An(v, l, true, true)
                }
            }
            if (Lo && i == Wo && d && d.name !== Wo) {
                if (Mo) {
                    Me(f, "name", Wo)
                } else {
                    c = true;
                    p = function e() {
                        return u(d, this)
                    }
                }
            }
            if (i) {
                y = {
                    values: o(Wo),
                    keys: a ? p : o(Ho),
                    entries: o(zo)
                };
                if (s)
                    for (m in y) {
                        if (Fo || c || !(m in f)) {
                            ft(f, m, y[m])
                        }
                    }
                else
                    zt({
                        target: t,
                        proto: true,
                        forced: Fo || c
                    }, y)
            }
            if (f[Ro] !== p) {
                ft(f, Ro, p, {
                    name: i
                })
            }
            kr[t] = p;
            return y
        };
        var $o = "Array Iterator";
        var Vo = it.set;
        var Yo = it.getterFor($o);
        var qo = Uo(Array, "Array", (function(e, t) {
            Vo(this, {
                type: $o,
                target: X(e),
                index: 0,
                kind: t
            })
        }
        ), (function() {
            var e = Yo(this);
            var t = e.target;
            var r = e.kind;
            var n = e.index++;
            if (!t || n >= t.length) {
                e.target = undefined;
                return {
                    value: undefined,
                    done: true
                }
            }
            if (r == "keys")
                return {
                    value: n,
                    done: false
                };
            if (r == "values")
                return {
                    value: t[n],
                    done: false
                };
            return {
                value: [n, t[n]],
                done: false
            }
        }
        ), "values");
        kr.Arguments = kr.Array;
        un("keys");
        un("values");
        un("entries");
        var Jo = ge("iterator");
        var Zo = ge("toStringTag");
        var Ko = qo.values;
        var Qo = function(e, t) {
            if (e) {
                if (e[Jo] !== Ko)
                    try {
                        Me(e, Jo, Ko)
                    } catch (t) {
                        e[Jo] = Ko
                    }
                if (!e[Zo]) {
                    Me(e, Zo, t)
                }
                if (Co[t])
                    for (var r in qo) {
                        if (e[r] !== qo[r])
                            try {
                                Me(e, r, qo[r])
                            } catch (t) {
                                e[r] = qo[r]
                            }
                    }
            }
        };
        for (var eu in Co) {
            Qo(i[eu] && i[eu].prototype, eu)
        }
        Qo(Io, "DOMTokenList");
        var tu = Function.prototype;
        var ru = tu.apply;
        var nu = tu.bind;
        var iu = tu.call;
        var au = typeof Reflect == "object" && Reflect.apply || (nu ? iu.bind(ru) : function() {
            return iu.apply(ru, arguments)
        }
        );
        var su = b([].slice);
        var ou = /(?:ipad|iphone|ipod).*applewebkit/i.test(_);
        var uu = S(i.process) == "process";
        var lu = i.setImmediate;
        var cu = i.clearImmediate;
        var fu = i.process;
        var du = i.Dispatch;
        var pu = i.Function;
        var hu = i.MessageChannel;
        var vu = i.String;
        var yu = 0;
        var mu = {};
        var gu = "onreadystatechange";
        var bu, wu, xu, Su;
        try {
            bu = i.location
        } catch (e) {}
        var Eu = function(e) {
            if (le(mu, e)) {
                var t = mu[e];
                delete mu[e];
                t()
            }
        };
        var Tu = function(e) {
            return function() {
                Eu(e)
            }
        };
        var Bu = function(e) {
            Eu(e.data)
        };
        var ju = function(e) {
            i.postMessage(vu(e), bu.protocol + "//" + bu.host)
        };
        if (!lu || !cu) {
            lu = function e(t) {
                var r = su(arguments, 1);
                mu[++yu] = function() {
                    au(k(t) ? t : pu(t), undefined, r)
                }
                ;
                wu(yu);
                return yu
            }
            ;
            cu = function e(t) {
                delete mu[t]
            }
            ;
            if (uu) {
                wu = function(e) {
                    fu.nextTick(Tu(e))
                }
            } else if (du && du.now) {
                wu = function(e) {
                    du.now(Tu(e))
                }
            } else if (hu && !ou) {
                xu = new hu;
                Su = xu.port2;
                xu.port1.onmessage = Bu;
                wu = Xr(Su.postMessage, Su)
            } else if (i.addEventListener && k(i.postMessage) && !i.importScripts && bu && bu.protocol !== "file:" && !a(ju)) {
                wu = ju;
                i.addEventListener("message", Bu, false)
            } else if (gu in Be("script")) {
                wu = function(e) {
                    tr.appendChild(Be("script"))[gu] = function() {
                        tr.removeChild(this);
                        Eu(e)
                    }
                }
            } else {
                wu = function(e) {
                    setTimeout(Tu(e), 0)
                }
            }
        }
        var Ou = {
            set: lu,
            clear: cu
        };
        var Xu = !i.setImmediate || !i.clearImmediate;
        zt({
            global: true,
            bind: true,
            enumerable: true,
            forced: Xu
        }, {
            setImmediate: Ou.set,
            clearImmediate: Ou.clear
        });
        var ku = /ipad|iphone|ipod/i.test(_) && i.Pebble !== undefined;
        var Au = /web0s(?!.*chrome)/i.test(_);
        var Nu = ke.f;
        var Cu = Ou.set;
        var Pu = i.MutationObserver || i.WebKitMutationObserver;
        var _u = i.document;
        var Iu = i.process;
        var Lu = i.Promise;
        var Mu = Nu(i, "queueMicrotask");
        var Du = Mu && Mu.value;
        var Fu, Ru, Hu, Wu, zu, Gu, Uu, $u;
        if (!Du) {
            Fu = function() {
                var e, t;
                if (uu && (e = Iu.domain))
                    e.exit();
                while (Ru) {
                    t = Ru.fn;
                    Ru = Ru.next;
                    try {
                        t()
                    } catch (e) {
                        if (Ru)
                            Wu();
                        else
                            Hu = undefined;
                        throw e
                    }
                }
                Hu = undefined;
                if (e)
                    e.enter()
            }
            ;
            if (!ou && !uu && !Au && Pu && _u) {
                zu = true;
                Gu = _u.createTextNode("");
                new Pu(Fu).observe(Gu, {
                    characterData: true
                });
                Wu = function() {
                    Gu.data = zu = !zu
                }
            } else if (!ku && Lu && Lu.resolve) {
                Uu = Lu.resolve(undefined);
                Uu.constructor = Lu;
                $u = Xr(Uu.then, Uu);
                Wu = function() {
                    $u(Fu)
                }
            } else if (uu) {
                Wu = function() {
                    Iu.nextTick(Fu)
                }
            } else {
                Cu = Xr(Cu, i);
                Wu = function() {
                    Cu(Fu)
                }
            }
        }
        var Vu = Du || function(e) {
            var t = {
                fn: e,
                next: undefined
            };
            if (Hu)
                Hu.next = t;
            if (!Ru) {
                Ru = t;
                Wu()
            }
            Hu = t
        }
        ;
        var Yu = i.process;
        zt({
            global: true,
            enumerable: true,
            noTargetGet: true
        }, {
            queueMicrotask: function e(t) {
                var r = uu && Yu.domain;
                Vu(r ? r.bind(t) : t)
            }
        })
    }
    )(this.window = this.window || {});
    if (window._main_polyfill_core) {
        console.warn("main.polyfill.core is loaded more than once on this page")
    }
    window._main_polyfill_core = true;
    (function(e) {
        "use strict";
        var t = window.BX;
        window.BX = function(e) {
            if (window.BX.type.isNotEmptyString(e)) {
                return document.getElementById(e)
            }
            if (window.BX.type.isDomNode(e)) {
                return e
            }
            if (window.BX.type.isFunction(e)) {
                return window.BX.ready(e)
            }
            return null
        }
        ;
        if (t) {
            Object.keys(t).forEach((e=>{
                window.BX[e] = t[e]
            }
            ))
        }
        e = window.BX;
        function r(e) {
            return Object.prototype.toString.call(e)
        }
        const n = Function.prototype.toString.call(Object);
        let i = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "isString",
                value: function e(t) {
                    return typeof t === "string"
                }
            }, {
                key: "isStringFilled",
                value: function e(t) {
                    return this.isString(t) && t !== ""
                }
            }, {
                key: "isFunction",
                value: function e(t) {
                    return typeof t === "function"
                }
            }, {
                key: "isObject",
                value: function e(t) {
                    return !!t && (typeof t === "object" || typeof t === "function")
                }
            }, {
                key: "isObjectLike",
                value: function e(t) {
                    return !!t && typeof t === "object"
                }
            }, {
                key: "isPlainObject",
                value: function t(i) {
                    if (!e.isObjectLike(i) || r(i) !== "[object Object]") {
                        return false
                    }
                    const a = Object.getPrototypeOf(i);
                    if (a === null) {
                        return true
                    }
                    const s = a.hasOwnProperty("constructor") && a.constructor;
                    return typeof s === "function" && Function.prototype.toString.call(s) === n
                }
            }, {
                key: "isBoolean",
                value: function e(t) {
                    return t === true || t === false
                }
            }, {
                key: "isNumber",
                value: function e(t) {
                    return !Number.isNaN(t) && typeof t === "number"
                }
            }, {
                key: "isInteger",
                value: function t(r) {
                    return e.isNumber(r) && r % 1 === 0
                }
            }, {
                key: "isFloat",
                value: function t(r) {
                    return e.isNumber(r) && !e.isInteger(r)
                }
            }, {
                key: "isNil",
                value: function e(t) {
                    return t === null || t === undefined
                }
            }, {
                key: "isArray",
                value: function t(r) {
                    return !e.isNil(r) && Array.isArray(r)
                }
            }, {
                key: "isArrayFilled",
                value: function e(t) {
                    return this.isArray(t) && t.length > 0
                }
            }, {
                key: "isArrayLike",
                value: function t(r) {
                    return !e.isNil(r) && !e.isFunction(r) && r.length > -1 && r.length <= Number.MAX_SAFE_INTEGER
                }
            }, {
                key: "isDate",
                value: function t(n) {
                    return e.isObjectLike(n) && r(n) === "[object Date]"
                }
            }, {
                key: "isDomNode",
                value: function t(r) {
                    return e.isObjectLike(r) && !e.isPlainObject(r) && "nodeType"in r
                }
            }, {
                key: "isElementNode",
                value: function t(r) {
                    return e.isDomNode(r) && r.nodeType === Node.ELEMENT_NODE
                }
            }, {
                key: "isTextNode",
                value: function t(r) {
                    return e.isDomNode(r) && r.nodeType === Node.TEXT_NODE
                }
            }, {
                key: "isMap",
                value: function t(n) {
                    return e.isObjectLike(n) && r(n) === "[object Map]"
                }
            }, {
                key: "isSet",
                value: function t(n) {
                    return e.isObjectLike(n) && r(n) === "[object Set]"
                }
            }, {
                key: "isWeakMap",
                value: function t(n) {
                    return e.isObjectLike(n) && r(n) === "[object WeakMap]"
                }
            }, {
                key: "isWeakSet",
                value: function t(n) {
                    return e.isObjectLike(n) && r(n) === "[object WeakSet]"
                }
            }, {
                key: "isPrototype",
                value: function e(t) {
                    return (typeof (t && t.constructor) === "function" && t.constructor.prototype || Object.prototype) === t
                }
            }, {
                key: "isRegExp",
                value: function t(n) {
                    return e.isObjectLike(n) && r(n) === "[object RegExp]"
                }
            }, {
                key: "isNull",
                value: function e(t) {
                    return t === null
                }
            }, {
                key: "isUndefined",
                value: function e(t) {
                    return typeof t === "undefined"
                }
            }, {
                key: "isArrayBuffer",
                value: function t(n) {
                    return e.isObjectLike(n) && r(n) === "[object ArrayBuffer]"
                }
            }, {
                key: "isTypedArray",
                value: function t(n) {
                    const i = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)]$/;
                    return e.isObjectLike(n) && i.test(r(n))
                }
            }, {
                key: "isBlob",
                value: function t(r) {
                    return e.isObjectLike(r) && e.isNumber(r.size) && e.isString(r.type) && e.isFunction(r.slice)
                }
            }, {
                key: "isFile",
                value: function t(r) {
                    return e.isBlob(r) && e.isString(r.name) && (e.isNumber(r.lastModified) || e.isObjectLike(r.lastModifiedDate))
                }
            }, {
                key: "isFormData",
                value: function e(t) {
                    return t instanceof FormData
                }
            }]);
            return e
        }();
        let a = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "getClass",
                value: function e(t) {
                    if (i.isString(t) && !!t) {
                        let e = null;
                        let r = window;
                        const n = t.split(".");
                        for (let t = 0; t < n.length; t += 1) {
                            const i = n[t];
                            if (!r[i]) {
                                return null
                            }
                            r = r[i];
                            e = r
                        }
                        return e
                    }
                    if (i.isFunction(t)) {
                        return t
                    }
                    return null
                }
            }, {
                key: "namespace",
                value: function e(t) {
                    let r = t.split(".");
                    let n = window.BX;
                    if (r[0] === "BX") {
                        r = r.slice(1)
                    }
                    for (let e = 0; e < r.length; e += 1) {
                        if (i.isUndefined(n[r[e]])) {
                            n[r[e]] = {}
                        }
                        n = n[r[e]]
                    }
                    return n
                }
            }]);
            return e
        }();
        const s = /[&<>'"]/g;
        const o = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
        const u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        };
        const l = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"'
        };
        let c = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "encode",
                value: function e(t) {
                    if (i.isString(t)) {
                        return t.replace(s, (e=>u[e]))
                    }
                    return t
                }
            }, {
                key: "decode",
                value: function e(t) {
                    if (i.isString(t)) {
                        return t.replace(o, (e=>l[e]))
                    }
                    return t
                }
            }, {
                key: "getRandom",
                value: function e(t=8) {
                    return [...Array(t)].map((()=>(~~(Math.random() * 36)).toString(36))).join("")
                }
            }, {
                key: "toNumber",
                value: function e(t) {
                    const r = Number.parseFloat(t);
                    if (i.isNumber(r)) {
                        return r
                    }
                    return 0
                }
            }, {
                key: "toInteger",
                value: function t(r) {
                    return e.toNumber(Number.parseInt(r, 10))
                }
            }, {
                key: "toBoolean",
                value: function e(t, r=[]) {
                    const n = i.isString(t) ? t.toLowerCase() : t;
                    return ["true", "y", "1", 1, true, ...r].includes(n)
                }
            }, {
                key: "toCamelCase",
                value: function e(t) {
                    if (!i.isStringFilled(t)) {
                        return t
                    }
                    const r = /[-_\s]+(.)?/g;
                    if (!r.test(t)) {
                        return t.match(/^[A-Z]+$/) ? t.toLowerCase() : t[0].toLowerCase() + t.slice(1)
                    }
                    t = t.toLowerCase();
                    t = t.replace(r, (function(e, t) {
                        return t ? t.toUpperCase() : ""
                    }
                    ));
                    return t[0].toLowerCase() + t.substr(1)
                }
            }, {
                key: "toPascalCase",
                value: function e(t) {
                    if (!i.isStringFilled(t)) {
                        return t
                    }
                    return this.capitalize(this.toCamelCase(t))
                }
            }, {
                key: "toKebabCase",
                value: function e(t) {
                    if (!i.isStringFilled(t)) {
                        return t
                    }
                    const r = t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
                    if (!r) {
                        return t
                    }
                    return r.map((e=>e.toLowerCase())).join("-")
                }
            }, {
                key: "capitalize",
                value: function e(t) {
                    if (!i.isStringFilled(t)) {
                        return t
                    }
                    return t[0].toUpperCase() + t.substr(1)
                }
            }]);
            return e
        }();
        const f = {
            mousewheel: ["DOMMouseScroll"],
            bxchange: ["change", "cut", "paste", "drop", "keyup"],
            animationend: ["animationend", "oAnimationEnd", "webkitAnimationEnd", "MSAnimationEnd"],
            transitionend: ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"],
            fullscreenchange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
            fullscreenerror: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
        };
        let d = function() {
            function e() {
                babelHelpers.classCallCheck(this, e);
                babelHelpers.defineProperty(this, "registry", new WeakMap)
            }
            babelHelpers.createClass(e, [{
                key: "set",
                value: function e(t, r, n) {
                    const a = this.get(t);
                    if (!i.isSet(a[r])) {
                        a[r] = new Set
                    }
                    a[r].add(n);
                    this.registry.set(t, a)
                }
            }, {
                key: "get",
                value: function e(t) {
                    return this.registry.get(t) || {}
                }
            }, {
                key: "has",
                value: function e(t, r, n) {
                    if (r && n) {
                        return this.registry.has(t) && this.registry.get(t)[r].has(n)
                    }
                    return this.registry.has(t)
                }
            }, {
                key: "delete",
                value: function e(t, r, n) {
                    if (!i.isDomNode(t)) {
                        return
                    }
                    if (i.isString(r) && i.isFunction(n)) {
                        const e = this.registry.get(t);
                        if (i.isPlainObject(e) && i.isSet(e[r])) {
                            e[r].delete(n)
                        }
                        return
                    }
                    if (i.isString(r)) {
                        const e = this.registry.get(t);
                        if (i.isPlainObject(e) && i.isSet(e[r])) {
                            e[r] = new Set
                        }
                        return
                    }
                    this.registry.delete(t)
                }
            }]);
            return e
        }();
        var p = new d;
        function h(e) {
            let t = false;
            try {
                const r = Object.defineProperty({}, e, {
                    get() {
                        t = true;
                        return undefined
                    }
                });
                window.addEventListener("test", null, r)
            } catch (e) {}
            return t
        }
        function v(e) {
            if (!i.isPlainObject(e)) {
                return e
            }
            return Object.keys(e).reduce(((t,r)=>{
                if (h(r)) {
                    t[r] = e[r]
                }
                return t
            }
            ), {})
        }
        function y(e, t, r, n) {
            if (!i.isObject(e) || !i.isFunction(e.addEventListener)) {
                return
            }
            const a = v(n);
            if (t in f) {
                f[t].forEach((n=>{
                    e.addEventListener(n, r, a);
                    p.set(e, t, r)
                }
                ));
                return
            }
            e.addEventListener(t, r, a);
            p.set(e, t, r)
        }
        function m(e, t, r, n) {
            if (!i.isObject(e) || !i.isFunction(e.removeEventListener)) {
                return
            }
            const a = v(n);
            if (t in f) {
                f[t].forEach((t=>{
                    e.removeEventListener(t, r, a);
                    p.delete(e, t, r)
                }
                ));
                return
            }
            e.removeEventListener(t, r, a);
            p.delete(e, t, r)
        }
        function g(e, t) {
            const r = p.get(e);
            Object.keys(r).forEach((n=>{
                r[n].forEach((r=>{
                    if (!i.isString(t) || t === n) {
                        m(e, n, r)
                    }
                }
                ))
            }
            ))
        }
        function b(e, t, r, n) {
            const i = function i(...a) {
                m(e, t, i, n);
                r(...a)
            };
            y(e, t, i, n)
        }
        let w = true;
        function x() {
            w = true
        }
        function S() {
            w = false
        }
        function E() {
            return w
        }
        function T(...e) {
            if (E() && i.isObject(window.console)) {
                if (i.isFunction(window.console.log)) {
                    window.console.log("BX.debug: ", e.length > 0 ? e : e[0]);
                    if (e[0]instanceof Error && e[0].stack) {
                        window.console.log("BX.debug error stack trace", e[0].stack)
                    }
                }
                if (i.isFunction(window.console.trace)) {
                    console.trace()
                }
            }
        }
        var B = Object.freeze({
            get debugState() {
                return w
            },
            enableDebug: x,
            disableDebug: S,
            isDebugEnabled: E,
            default: T
        });
        function j(e) {
            if (i.isStringFilled(e)) {
                const t = e.match(/<script type="extension\/settings" \b[^>]*>([\s\S]*?)<\/script>/g);
                if (i.isArrayFilled(t)) {
                    return t.map((e=>{
                        const [,t] = e.match(/data-extension="(.[a-z0-9_.-]+)"/);
                        return {
                            extension: t,
                            script: e
                        }
                    }
                    ))
                }
            }
            return []
        }
        let O = function() {
            function e(t) {
                babelHelpers.classCallCheck(this, e);
                this.config = t.config || {};
                this.name = t.extension;
                this.state = "scheduled";
                const r = BX.processHTML(t.html || "");
                this.inlineScripts = r.SCRIPT.reduce(L, []);
                this.externalScripts = r.SCRIPT.reduce(M, []);
                this.externalStyles = r.STYLE.reduce(D, []);
                this.settingsScripts = j(r.HTML)
            }
            babelHelpers.createClass(e, [{
                key: "load",
                value: function e() {
                    if (this.state === "error") {
                        this.loadPromise = this.loadPromise || Promise.resolve(this);
                        console.warn("Extension", this.name, "not found")
                    }
                    if (!this.loadPromise && this.state) {
                        this.state = "load";
                        this.settingsScripts.forEach((e=>{
                            const t = !!document.querySelector(`script[data-extension="${e.extension}"]`);
                            if (!t) {
                                document.body.insertAdjacentHTML("beforeend", e.script)
                            }
                        }
                        ));
                        this.inlineScripts.forEach(BX.evalGlobal);
                        this.loadPromise = Promise.all([H(this.externalScripts), H(this.externalStyles)]).then((()=>{
                            this.state = "loaded";
                            if (i.isPlainObject(this.config) && this.config.namespace) {
                                return a.getClass(this.config.namespace)
                            }
                            return window
                        }
                        ))
                    }
                    return this.loadPromise
                }
            }]);
            return e
        }();
        const X = {};
        const k = "main.bitrix.main.controller.loadext.getextensions";
        function A(e) {
            return i.isArray(e) ? e : [e]
        }
        function N(e) {
            return e in X
        }
        function C(e) {
            return X[e]
        }
        function P(e) {
            return e.every(N)
        }
        function _(e) {
            return Promise.all(e.map((e=>e.load())))
        }
        function I(e) {
            return e.reduce(((e,t)=>{
                if (i.isObject(t)) {
                    return {
                        ...t
                    }
                }
                return t
            }
            ), {})
        }
        function L(e, t) {
            if (t.isInternal) {
                e.push(t.JS)
            }
            return e
        }
        function M(e, t) {
            if (!t.isInternal) {
                e.push(t.JS)
            }
            return e
        }
        function D(e, t) {
            if (i.isString(t) && t !== "") {
                e.push(t)
            }
            return e
        }
        function F(e) {
            return new Promise((t=>{
                BX.ajax.runAction(k, {
                    data: e
                }).then(t)
            }
            ))
        }
        function R(e) {
            if (e.status !== "success") {
                e.errors.map(console.warn);
                return []
            }
            return e.data.map((e=>{
                const t = C(e.extension);
                if (t) {
                    return t
                }
                X[e.extension] = new O(e);
                return X[e.extension]
            }
            ))
        }
        function H(e) {
            const t = A(e);
            if (!t.length) {
                return Promise.resolve()
            }
            return new Promise((e=>{
                BX.load(t, e)
            }
            ))
        }
        function W(e) {
            const t = A(e);
            const r = P(t);
            if (r) {
                const e = t.map(C);
                return _(e).then(I)
            }
            return F({
                extension: t
            }).then(R).then(_).then(I)
        }
        const z = ["[object Object]", "[object Array]", "[object RegExp]", "[object Arguments]", "[object Date]", "[object Error]", "[object Map]", "[object Set]", "[object ArrayBuffer]", "[object DataView]", "[object Float32Array]", "[object Float64Array]", "[object Int8Array]", "[object Int16Array]", "[object Int32Array]", "[object Uint8Array]", "[object Uint16Array]", "[object Uint32Array]", "[object Uint8ClampedArray]"];
        function G(e) {
            const t = i.isObjectLike(e) && z.includes(r(e));
            return t || i.isDomNode(e)
        }
        function U(e, t) {
            if (t.has(e)) {
                return t.get(e)
            }
            if (G(e)) {
                if (i.isArray(e)) {
                    const r = Array.from(e);
                    t.set(e, r);
                    e.forEach(((e,n)=>{
                        r[n] = U(e, t)
                    }
                    ));
                    return t.get(e)
                }
                if (i.isDomNode(e)) {
                    return e.cloneNode(true)
                }
                if (i.isMap(e)) {
                    const r = new Map;
                    t.set(e, r);
                    e.forEach(((e,n)=>{
                        r.set(U(n, t), U(e, t))
                    }
                    ));
                    return r
                }
                if (i.isSet(e)) {
                    const r = new Set;
                    t.set(e, r);
                    e.forEach((e=>{
                        r.add(U(e, t))
                    }
                    ));
                    return r
                }
                if (i.isDate(e)) {
                    return new Date(e)
                }
                if (i.isRegExp(e)) {
                    const t = /\w*$/;
                    const r = t.exec(e);
                    let n = new RegExp(e.source);
                    if (r && i.isArray(r)) {
                        n = new RegExp(e.source,r[0])
                    }
                    n.lastIndex = e.lastIndex;
                    return n
                }
                const r = Object.getPrototypeOf(e);
                const n = Object.assign(Object.create(r), e);
                t.set(e, n);
                Object.keys(e).forEach((r=>{
                    n[r] = U(e[r], t)
                }
                ));
                return n
            }
            return e
        }
        function $(e) {
            return U(e, new WeakMap)
        }
        function V(e, t) {
            return Object.entries(t).reduce(((e,[t,r])=>{
                if (!i.isDomNode(e[t]) && i.isObjectLike(e[t]) && i.isObjectLike(r)) {
                    e[t] = V(e[t], r);
                    return e
                }
                e[t] = r;
                return e
            }
            ), e)
        }
        function Y(e, t=[]) {
            return (r,n)=>{
                const a = e[0];
                const s = t[0] || "asc";
                if (i.isUndefined(a)) {
                    return 0
                }
                let o = r[a];
                let u = n[a];
                if (i.isString(o) && i.isString(u)) {
                    o = o.toLowerCase();
                    u = u.toLowerCase()
                }
                if (o < u) {
                    return s === "asc" ? -1 : 1
                }
                if (o > u) {
                    return s === "asc" ? 1 : -1
                }
                return Y(e.slice(1), t.slice(1))(r, n)
            }
        }
        let q = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "debounce",
                value: function e(t, r=0, n=null) {
                    let a;
                    return function e(...s) {
                        if (i.isNumber(a)) {
                            clearTimeout(a)
                        }
                        a = setTimeout((()=>{
                            t.apply(n || this, s)
                        }
                        ), r)
                    }
                }
            }, {
                key: "throttle",
                value: function e(t, r=0, n=null) {
                    let i = 0;
                    let a;
                    return function e(...s) {
                        a = true;
                        if (!i) {
                            const e = function e() {
                                if (a) {
                                    t.apply(n || this, s);
                                    a = false;
                                    i = setTimeout(e, r)
                                } else {
                                    i = null
                                }
                            };
                            e()
                        }
                    }
                }
            }, {
                key: "html",
                value: function e(t, r, n={}) {
                    if (i.isNil(r) && i.isDomNode(t)) {
                        return t.innerHTML
                    }
                    const a = BX.processHTML(r);
                    const s = a.STYLE.reduce(D, []);
                    const o = a.SCRIPT.reduce(M, []);
                    const u = a.SCRIPT.reduce(L, []);
                    if (i.isDomNode(t)) {
                        if (n.htmlFirst || !o.length && !s.length) {
                            if (n.useAdjacentHTML) {
                                t.insertAdjacentHTML("beforeend", a.HTML)
                            } else {
                                t.innerHTML = a.HTML
                            }
                        }
                    }
                    return Promise.all([H(o), H(s)]).then((()=>{
                        if (i.isDomNode(t) && (o.length > 0 || s.length > 0)) {
                            if (n.useAdjacentHTML) {
                                t.insertAdjacentHTML("beforeend", a.HTML)
                            } else {
                                t.innerHTML = a.HTML
                            }
                        }
                        u.forEach((e=>BX.evalGlobal(e)));
                        if (i.isFunction(n.callback)) {
                            n.callback()
                        }
                    }
                    ))
                }
            }, {
                key: "merge",
                value: function e(...t) {
                    if (i.isArray(t[0])) {
                        t.unshift([])
                    } else if (i.isObject(t[0])) {
                        t.unshift({})
                    }
                    return t.reduce(((e,t)=>V(e, t)), t[0])
                }
            }, {
                key: "orderBy",
                value: function e(t, r=[], n=[]) {
                    const i = Y(r, n);
                    return Object.values(t).sort(i)
                }
            }, {
                key: "destroy",
                value: function e(t, r="Object is destroyed") {
                    if (i.isObject(t)) {
                        const e = ()=>{
                            throw new Error(r)
                        }
                        ;
                        const n = Object.keys(t);
                        const a = (()=>{
                            const e = Object.getPrototypeOf(t);
                            if (i.isObject(e)) {
                                return Object.getOwnPropertyNames(e)
                            }
                            return []
                        }
                        )();
                        const s = [...new Set([...n, ...a])];
                        s.filter((e=>{
                            const r = Object.getOwnPropertyDescriptor(t, e);
                            return !/__(.+)__/.test(e) && (!i.isObject(r) || r.configurable === true)
                        }
                        )).forEach((r=>{
                            Object.defineProperty(t, r, {
                                get: e,
                                set: e,
                                configurable: false
                            })
                        }
                        ));
                        Object.setPrototypeOf(t, null)
                    }
                }
            }]);
            return e
        }();
        babelHelpers.defineProperty(q, "debug", T);
        babelHelpers.defineProperty(q, "loadExtension", W);
        babelHelpers.defineProperty(q, "clone", $);
        const J = Symbol.for("BX.BaseError.isError");
        let Z = function() {
            function e(t, r, n) {
                babelHelpers.classCallCheck(this, e);
                this[J] = true;
                this.message = "";
                this.code = null;
                this.customData = null;
                this.setMessage(t);
                this.setCode(r);
                this.setCustomData(n)
            }
            babelHelpers.createClass(e, [{
                key: "getMessage",
                value: function e() {
                    return this.message
                }
            }, {
                key: "setMessage",
                value: function e(t) {
                    if (i.isString(t)) {
                        this.message = t
                    }
                    return this
                }
            }, {
                key: "getCode",
                value: function e() {
                    return this.code
                }
            }, {
                key: "setCode",
                value: function e(t) {
                    if (i.isStringFilled(t) || t === null) {
                        this.code = t
                    }
                    return this
                }
            }, {
                key: "getCustomData",
                value: function e() {
                    return this.customData
                }
            }, {
                key: "setCustomData",
                value: function e(t) {
                    if (!i.isUndefined(t)) {
                        this.customData = t
                    }
                    return this
                }
            }, {
                key: "toString",
                value: function e() {
                    const t = this.getCode();
                    const r = this.getMessage();
                    if (!i.isStringFilled(t) && !i.isStringFilled(r)) {
                        return ""
                    } else if (!i.isStringFilled(t)) {
                        return `Error: ${r}`
                    } else if (!i.isStringFilled(r)) {
                        return t
                    } else {
                        return `${t}: ${r}`
                    }
                }
            }], [{
                key: "isError",
                value: function e(t) {
                    return i.isObject(t) && t[J] === true
                }
            }]);
            return e
        }();
        let K = function() {
            function e(t={
                data: {}
            }) {
                babelHelpers.classCallCheck(this, e);
                this.type = "";
                this.data = null;
                this.target = null;
                this.compatData = null;
                this.defaultPrevented = false;
                this.immediatePropagationStopped = false;
                this.errors = [];
                this.setData(t.data);
                this.setCompatData(t.compatData)
            }
            babelHelpers.createClass(e, [{
                key: "getType",
                value: function e() {
                    return this.type
                }
            }, {
                key: "setType",
                value: function e(t) {
                    if (i.isStringFilled(t)) {
                        this.type = t
                    }
                    return this
                }
            }, {
                key: "getData",
                value: function e() {
                    return this.data
                }
            }, {
                key: "setData",
                value: function e(t) {
                    if (!i.isUndefined(t)) {
                        this.data = t
                    }
                    return this
                }
            }, {
                key: "getCompatData",
                value: function e() {
                    return this.compatData
                }
            }, {
                key: "setCompatData",
                value: function e(t) {
                    if (i.isArrayLike(t)) {
                        this.compatData = t
                    }
                    return this
                }
            }, {
                key: "setTarget",
                value: function e(t) {
                    this.target = t;
                    return this
                }
            }, {
                key: "getTarget",
                value: function e() {
                    return this.target
                }
            }, {
                key: "getErrors",
                value: function e() {
                    return this.errors
                }
            }, {
                key: "setError",
                value: function e(t) {
                    if (Z.isError(t)) {
                        this.errors.push(t)
                    }
                }
            }, {
                key: "preventDefault",
                value: function e() {
                    this.defaultPrevented = true
                }
            }, {
                key: "isDefaultPrevented",
                value: function e() {
                    return this.defaultPrevented
                }
            }, {
                key: "stopImmediatePropagation",
                value: function e() {
                    this.immediatePropagationStopped = true
                }
            }, {
                key: "isImmediatePropagationStopped",
                value: function e() {
                    return this.immediatePropagationStopped
                }
            }], [{
                key: "create",
                value: function e(t) {
                    return new this(t)
                }
            }]);
            return e
        }();
        let Q = function() {
            function e(t={}) {
                babelHelpers.classCallCheck(this, e);
                this.defaultMaxListeners = i.isNumber(t.defaultMaxListeners) ? t.defaultMaxListeners : 10;
                this.eventStore = new WeakMap
            }
            babelHelpers.createClass(e, [{
                key: "add",
                value: function e(t, r={}) {
                    const n = this.getRecordScheme();
                    if (i.isNumber(r.maxListeners)) {
                        n.maxListeners = r.maxListeners
                    }
                    this.eventStore.set(t, n);
                    return n
                }
            }, {
                key: "get",
                value: function e(t) {
                    return this.eventStore.get(t)
                }
            }, {
                key: "getOrAdd",
                value: function e(t, r={}) {
                    return this.get(t) || this.add(t, r)
                }
            }, {
                key: "delete",
                value: function e(t) {
                    this.eventStore.delete(t)
                }
            }, {
                key: "getRecordScheme",
                value: function e() {
                    return {
                        eventsMap: new Map,
                        onceMap: new Map,
                        maxListeners: this.getDefaultMaxListeners(),
                        eventsMaxListeners: new Map
                    }
                }
            }, {
                key: "getDefaultMaxListeners",
                value: function e() {
                    return this.defaultMaxListeners
                }
            }]);
            return e
        }();
        let ee = function() {
            function e() {
                babelHelpers.classCallCheck(this, e);
                this.warnings = new Map;
                this.printDelayed = q.debounce(this.print.bind(this), 500)
            }
            babelHelpers.createClass(e, [{
                key: "add",
                value: function e(t, r, n) {
                    let a = this.warnings.get(t);
                    if (!a) {
                        a = Object.create(null);
                        this.warnings.set(t, a)
                    }
                    if (!a[r]) {
                        a[r] = {}
                    }
                    a[r].size = n.size;
                    if (!i.isArray(a[r].errors)) {
                        a[r].errors = []
                    }
                    a[r].errors.push(new Error)
                }
            }, {
                key: "print",
                value: function e() {
                    this.warnings.forEach((e=>{
                        for (let t in e) {
                            console.groupCollapsed("Possible BX.Event.EventEmitter memory leak detected. " + e[t].size + ' "' + t + '" listeners added. ' + "Use emitter.setMaxListeners() to increase limit.");
                            console.dir(e[t].errors);
                            console.groupEnd()
                        }
                    }
                    ));
                    this.clear()
                }
            }, {
                key: "clear",
                value: function e() {
                    this.warnings.clear()
                }
            }, {
                key: "printDelayed",
                value: function e() {}
            }]);
            return e
        }();
        const te = new Q({
            defaultMaxListeners: 10
        });
        const re = new ee;
        const ne = new Map;
        const ie = {
            GLOBAL_TARGET: "GLOBAL_TARGET"
        };
        te.add(ie, {
            maxListeners: 25
        });
        const ae = Symbol.for("BX.Event.EventEmitter.isEmitter");
        const se = Symbol("namespaceProperty");
        const oe = Symbol("targetProperty");
        let ue = function() {
            function e(...t) {
                babelHelpers.classCallCheck(this, e);
                this[oe] = null;
                this[se] = null;
                this[ae] = true;
                let r = this;
                if (Object.getPrototypeOf(this) === e.prototype && t.length > 0) {
                    if (!i.isObject(t[0])) {
                        throw new TypeError(`The "target" argument must be an object.`)
                    }
                    r = t[0];
                    this.setEventNamespace(t[1])
                }
                this[oe] = r
            }
            babelHelpers.createClass(e, [{
                key: "setEventNamespace",
                value: function e(t) {
                    if (i.isStringFilled(t)) {
                        this[se] = t
                    }
                }
            }, {
                key: "getEventNamespace",
                value: function e() {
                    return this[se]
                }
            }, {
                key: "subscribe",
                value: function t(r, n) {
                    e.subscribe(this, r, n);
                    return this
                }
            }, {
                key: "subscribeFromOptions",
                value: function t(r, n, a) {
                    if (!i.isPlainObject(r)) {
                        return
                    }
                    n = i.isPlainObject(n) ? e.normalizeAliases(n) : {};
                    Object.keys(r).forEach((t=>{
                        const i = e.normalizeListener(r[t]);
                        t = e.normalizeEventName(t);
                        if (n[t]) {
                            const {eventName: r} = n[t];
                            e.subscribe(this, r, i, {
                                compatMode: a !== false
                            })
                        } else {
                            e.subscribe(this, t, i, {
                                compatMode: a === true
                            })
                        }
                    }
                    ))
                }
            }, {
                key: "subscribeOnce",
                value: function t(r, n) {
                    e.subscribeOnce(this, r, n);
                    return this
                }
            }, {
                key: "unsubscribe",
                value: function t(r, n) {
                    e.unsubscribe(this, r, n);
                    return this
                }
            }, {
                key: "unsubscribeAll",
                value: function t(r) {
                    e.unsubscribeAll(this, r)
                }
            }, {
                key: "emit",
                value: function t(r, n) {
                    if (this.getEventNamespace() === null) {
                        console.warn("The instance of BX.Event.EventEmitter is supposed to have an event namespace. " + "Use emitter.setEventNamespace() to make events more unique.")
                    }
                    e.emit(this, r, n);
                    return this
                }
            }, {
                key: "emitAsync",
                value: function t(r, n) {
                    if (this.getEventNamespace() === null) {
                        console.warn("The instance of BX.Event.EventEmitter is supposed to have an event namespace. " + "Use emitter.setEventNamespace() to make events more unique.")
                    }
                    return e.emitAsync(this, r, n)
                }
            }, {
                key: "setMaxListeners",
                value: function t(...r) {
                    e.setMaxListeners(this, ...r);
                    return this
                }
            }, {
                key: "getMaxListeners",
                value: function t(r) {
                    return e.getMaxListeners(this, r)
                }
            }, {
                key: "incrementMaxListeners",
                value: function t(...r) {
                    return e.incrementMaxListeners(this, ...r)
                }
            }, {
                key: "decrementMaxListeners",
                value: function t(...r) {
                    return e.decrementMaxListeners(this, ...r)
                }
            }, {
                key: "getListeners",
                value: function t(r) {
                    return e.getListeners(this, r)
                }
            }, {
                key: "getFullEventName",
                value: function t(r) {
                    if (!i.isStringFilled(r)) {
                        throw new TypeError(`The "eventName" argument must be a string.`)
                    }
                    return e.makeFullEventName(this.getEventNamespace(), r)
                }
            }], [{
                key: "makeObservable",
                value: function t(r, n) {
                    if (!i.isObject(r)) {
                        throw new TypeError('The "target" argument must be an object.')
                    }
                    if (!i.isStringFilled(n)) {
                        throw new TypeError('The "namespace" must be an non-empty string.')
                    }
                    if (e.isEventEmitter(r)) {
                        throw new TypeError('The "target" is an event emitter already.')
                    }
                    const a = Object.getPrototypeOf(r);
                    const s = new e;
                    s.setEventNamespace(n);
                    Object.setPrototypeOf(s, a);
                    Object.setPrototypeOf(r, s);
                    Object.getOwnPropertyNames(e.prototype).forEach((t=>{
                        if (["constructor"].includes(t)) {
                            return
                        }
                        s[t] = function(...n) {
                            return e.prototype[t].apply(r, n)
                        }
                    }
                    ))
                }
            }, {
                key: "subscribe",
                value: function e(t, r, n, a) {
                    if (i.isString(t)) {
                        a = n;
                        n = r;
                        r = t;
                        t = this.GLOBAL_TARGET
                    }
                    if (!i.isObject(t)) {
                        throw new TypeError(`The "target" argument must be an object.`)
                    }
                    r = this.normalizeEventName(r);
                    if (!i.isStringFilled(r)) {
                        throw new TypeError(`The "eventName" argument must be a string.`)
                    }
                    n = this.normalizeListener(n);
                    a = i.isPlainObject(a) ? a : {};
                    const s = this.resolveEventName(r, t, a.useGlobalNaming === true);
                    const {eventsMap: o, onceMap: u} = te.getOrAdd(t);
                    const l = u.get(s);
                    let c = o.get(s);
                    if (c && c.has(n) || l && l.has(n)) {
                        console.error(`You cannot subscribe the same "${s}" event listener twice.`)
                    } else {
                        if (c) {
                            c.set(n, {
                                listener: n,
                                options: a,
                                sort: this.getNextSequenceValue()
                            })
                        } else {
                            c = new Map([[n, {
                                listener: n,
                                options: a,
                                sort: this.getNextSequenceValue()
                            }]]);
                            o.set(s, c)
                        }
                    }
                    const f = this.getMaxListeners(t, r);
                    if (c.size > f) {
                        re.add(t, s, c);
                        re.printDelayed()
                    }
                }
            }, {
                key: "subscribeOnce",
                value: function e(t, r, n) {
                    if (i.isString(t)) {
                        n = r;
                        r = t;
                        t = this.GLOBAL_TARGET
                    }
                    if (!i.isObject(t)) {
                        throw new TypeError(`The "target" argument must be an object.`)
                    }
                    r = this.normalizeEventName(r);
                    if (!i.isStringFilled(r)) {
                        throw new TypeError(`The "eventName" argument must be a string.`)
                    }
                    n = this.normalizeListener(n);
                    const a = this.resolveEventName(r, t);
                    const {eventsMap: s, onceMap: o} = te.getOrAdd(t);
                    const u = s.get(a);
                    let l = o.get(a);
                    if (u && u.has(n) || l && l.has(n)) {
                        console.error(`You cannot subscribe the same "${a}" event listener twice.`)
                    } else {
                        const e = (...i)=>{
                            this.unsubscribe(t, r, e);
                            l.delete(n);
                            n(...i)
                        }
                        ;
                        if (l) {
                            l.set(n, e)
                        } else {
                            l = new Map([[n, e]]);
                            o.set(a, l)
                        }
                        this.subscribe(t, r, e)
                    }
                }
            }, {
                key: "unsubscribe",
                value: function e(t, r, n, a) {
                    if (i.isString(t)) {
                        n = r;
                        r = t;
                        t = this.GLOBAL_TARGET
                    }
                    r = this.normalizeEventName(r);
                    if (!i.isStringFilled(r)) {
                        throw new TypeError(`The "eventName" argument must be a string.`)
                    }
                    n = this.normalizeListener(n);
                    a = i.isPlainObject(a) ? a : {};
                    const s = this.resolveEventName(r, t, a.useGlobalNaming === true);
                    const o = te.get(t);
                    const u = o && o.eventsMap.get(s);
                    const l = o && o.onceMap.get(s);
                    if (u) {
                        u.delete(n)
                    }
                    if (l) {
                        const e = l.get(n);
                        if (e) {
                            l.delete(n);
                            u.delete(e)
                        }
                    }
                }
            }, {
                key: "unsubscribeAll",
                value: function e(t, r, n) {
                    if (i.isString(t)) {
                        r = t;
                        t = this.GLOBAL_TARGET
                    }
                    if (i.isStringFilled(r)) {
                        const e = te.get(t);
                        if (e) {
                            n = i.isPlainObject(n) ? n : {};
                            const a = this.resolveEventName(r, t, n.useGlobalNaming === true);
                            e.eventsMap.delete(a);
                            e.onceMap.delete(a)
                        }
                    } else if (i.isNil(r)) {
                        if (t === this.GLOBAL_TARGET) {
                            console.error("You cannot unsubscribe all global listeners.")
                        } else {
                            te.delete(t)
                        }
                    }
                }
            }, {
                key: "emit",
                value: function e(t, r, n, a) {
                    if (i.isString(t)) {
                        a = n;
                        n = r;
                        r = t;
                        t = this.GLOBAL_TARGET
                    }
                    if (!i.isObject(t)) {
                        throw new TypeError(`The "target" argument must be an object.`)
                    }
                    r = this.normalizeEventName(r);
                    if (!i.isStringFilled(r)) {
                        throw new TypeError(`The "eventName" argument must be a string.`)
                    }
                    a = i.isPlainObject(a) ? a : {};
                    const s = this.resolveEventName(r, t, a.useGlobalNaming === true);
                    const o = te.get(this.GLOBAL_TARGET);
                    const u = o && o.eventsMap.get(s) || new Map;
                    let l = new Set;
                    if (t !== this.GLOBAL_TARGET) {
                        const e = te.get(t);
                        l = e && e.eventsMap.get(s) || new Map
                    }
                    const c = [...u.values(), ...l.values()];
                    c.sort((function(e, t) {
                        return e.sort - t.sort
                    }
                    ));
                    const f = this.prepareEvent(t, s, n);
                    const d = [];
                    for (let e = 0; e < c.length; e++) {
                        if (f.isImmediatePropagationStopped()) {
                            break
                        }
                        const {listener: r, options: n} = c[e];
                        if (u.has(r) || l.has(r)) {
                            let e;
                            if (n.compatMode) {
                                let n = [];
                                const s = f.getCompatData();
                                if (s !== null) {
                                    n = a.cloneData === true ? q.clone(s) : s
                                } else {
                                    n = [f]
                                }
                                const o = i.isUndefined(a.thisArg) ? t : a.thisArg;
                                e = r.apply(o, n)
                            } else {
                                e = i.isUndefined(a.thisArg) ? r(f) : r.call(a.thisArg, f)
                            }
                            d.push(e)
                        }
                    }
                    return d
                }
            }, {
                key: "emitAsync",
                value: function e(t, r, n) {
                    if (i.isString(t)) {
                        n = r;
                        r = t;
                        t = this.GLOBAL_TARGET
                    }
                    return Promise.all(this.emit(t, r, n))
                }
            }, {
                key: "prepareEvent",
                value: function e(t, r, n) {
                    let i = n;
                    if (!(n instanceof K)) {
                        i = new K;
                        i.setData(n)
                    }
                    i.setTarget(this.isEventEmitter(t) ? t[oe] : t);
                    i.setType(r);
                    return i
                }
            }, {
                key: "getNextSequenceValue",
                value: function e() {
                    return this.sequenceValue++
                }
            }, {
                key: "setMaxListeners",
                value: function e(...t) {
                    let r = this.GLOBAL_TARGET;
                    let n = null;
                    let a = undefined;
                    if (t.length === 1) {
                        a = t[0]
                    } else if (t.length === 2) {
                        if (i.isString(t[0])) {
                            [n,a] = t
                        } else {
                            [r,a] = t
                        }
                    } else if (t.length >= 3) {
                        [r,n,a] = t
                    }
                    if (!i.isObject(r)) {
                        throw new TypeError(`The "target" argument must be an object.`)
                    }
                    if (n !== null && !i.isStringFilled(n)) {
                        throw new TypeError(`The "eventName" argument must be a string.`)
                    }
                    if (!i.isNumber(a) || a < 0) {
                        throw new TypeError(`The value of "count" is out of range. It must be a non-negative number. Received ${a}.`)
                    }
                    const s = te.getOrAdd(r);
                    if (i.isStringFilled(n)) {
                        const e = this.resolveEventName(n, r);
                        s.eventsMaxListeners.set(e, a)
                    } else {
                        s.maxListeners = a
                    }
                }
            }, {
                key: "getMaxListeners",
                value: function e(t, r) {
                    if (i.isString(t)) {
                        r = t;
                        t = this.GLOBAL_TARGET
                    } else if (i.isNil(t)) {
                        t = this.GLOBAL_TARGET
                    }
                    if (!i.isObject(t)) {
                        throw new TypeError(`The "target" argument must be an object.`)
                    }
                    const n = te.get(t);
                    if (n) {
                        let e = n.maxListeners;
                        if (i.isStringFilled(r)) {
                            const i = this.resolveEventName(r, t);
                            e = n.eventsMaxListeners.get(i) || e
                        }
                        return e
                    }
                    return this.DEFAULT_MAX_LISTENERS
                }
            }, {
                key: "addMaxListeners",
                value: function t(...r) {
                    const [n,a,s] = this.destructMaxListenersArgs(...r);
                    const o = Math.max(this.getMaxListeners(n, a) + s, 0);
                    if (i.isStringFilled(a)) {
                        e.setMaxListeners(n, a, o)
                    } else {
                        e.setMaxListeners(n, o)
                    }
                    return o
                }
            }, {
                key: "incrementMaxListeners",
                value: function e(...t) {
                    const [r,n,i] = this.destructMaxListenersArgs(...t);
                    return this.addMaxListeners(r, n, Math.abs(i))
                }
            }, {
                key: "decrementMaxListeners",
                value: function e(...t) {
                    const [r,n,i] = this.destructMaxListenersArgs(...t);
                    return this.addMaxListeners(r, n, -Math.abs(i))
                }
            }, {
                key: "destructMaxListenersArgs",
                value: function e(...t) {
                    let r = null;
                    let n = 1;
                    let a = this.GLOBAL_TARGET;
                    if (t.length === 1) {
                        if (i.isNumber(t[0])) {
                            n = t[0]
                        } else if (i.isString(t[0])) {
                            r = t[0]
                        } else {
                            a = t[0]
                        }
                    } else if (t.length === 2) {
                        if (i.isString(t[0])) {
                            [r,n] = t
                        } else if (i.isString(t[1])) {
                            [a,r] = t
                        } else {
                            [a,n] = t
                        }
                    } else if (t.length >= 3) {
                        [a,r,n] = t
                    }
                    if (!i.isObject(a)) {
                        throw new TypeError(`The "target" argument must be an object.`)
                    }
                    if (r !== null && !i.isStringFilled(r)) {
                        throw new TypeError(`The "eventName" argument must be a string.`)
                    }
                    if (!i.isNumber(n)) {
                        throw new TypeError(`The value of "increment" must be a number.`)
                    }
                    return [a, r, n]
                }
            }, {
                key: "getListeners",
                value: function e(t, r) {
                    if (i.isString(t)) {
                        r = t;
                        t = this.GLOBAL_TARGET
                    }
                    if (!i.isObject(t)) {
                        throw new TypeError(`The "target" argument must be an object.`)
                    }
                    r = this.normalizeEventName(r);
                    if (!i.isStringFilled(r)) {
                        throw new TypeError(`The "eventName" argument must be a string.`)
                    }
                    const n = te.get(t);
                    if (!n) {
                        return new Map
                    }
                    const a = this.resolveEventName(r, t);
                    return n.eventsMap.get(a) || new Map
                }
            }, {
                key: "registerAliases",
                value: function t(r) {
                    r = this.normalizeAliases(r);
                    Object.keys(r).forEach((e=>{
                        ne.set(e, {
                            eventName: r[e].eventName,
                            namespace: r[e].namespace
                        })
                    }
                    ));
                    e.mergeEventAliases(r)
                }
            }, {
                key: "normalizeAliases",
                value: function e(t) {
                    if (!i.isPlainObject(t)) {
                        throw new TypeError(`The "aliases" argument must be an object.`)
                    }
                    const r = Object.create(null);
                    for (let e in t) {
                        if (!i.isStringFilled(e)) {
                            throw new TypeError(`The alias must be an non-empty string.`)
                        }
                        const n = t[e];
                        if (!n || !i.isStringFilled(n.eventName) || !i.isStringFilled(n.namespace)) {
                            throw new TypeError(`The alias options must set the "eventName" and the "namespace".`)
                        }
                        e = this.normalizeEventName(e);
                        r[e] = {
                            eventName: n.eventName,
                            namespace: n.namespace
                        }
                    }
                    return r
                }
            }, {
                key: "mergeEventAliases",
                value: function e(t) {
                    const r = te.get(this.GLOBAL_TARGET);
                    if (!r) {
                        return
                    }
                    Object.keys(t).forEach((e=>{
                        const n = t[e];
                        e = this.normalizeEventName(e);
                        const i = this.makeFullEventName(n.namespace, n.eventName);
                        const a = r.eventsMap.get(e);
                        if (a) {
                            const t = r.eventsMap.get(i) || new Map;
                            r.eventsMap.set(i, new Map([...t, ...a]));
                            r.eventsMap.delete(e)
                        }
                        const s = r.onceMap.get(e);
                        if (s) {
                            const t = r.onceMap.get(i) || new Map;
                            r.onceMap.set(i, new Map([...t, ...s]));
                            r.onceMap.delete(e)
                        }
                        const o = r.eventsMaxListeners.get(e);
                        if (o) {
                            const t = r.eventsMaxListeners.get(i) || 0;
                            r.eventsMaxListeners.set(i, Math.max(t, o));
                            r.eventsMaxListeners.delete(e)
                        }
                    }
                    ))
                }
            }, {
                key: "isEventEmitter",
                value: function e(t) {
                    return i.isObject(t) && t[ae] === true
                }
            }, {
                key: "normalizeEventName",
                value: function e(t) {
                    if (!i.isStringFilled(t)) {
                        return ""
                    }
                    return t.toLowerCase()
                }
            }, {
                key: "normalizeListener",
                value: function e(t) {
                    if (i.isString(t)) {
                        t = a.getClass(t)
                    }
                    if (!i.isFunction(t)) {
                        throw new TypeError(`The "listener" argument must be of type Function. Received type ${typeof t}.`)
                    }
                    return t
                }
            }, {
                key: "resolveEventName",
                value: function e(t, r, n=false) {
                    t = this.normalizeEventName(t);
                    if (!i.isStringFilled(t)) {
                        return ""
                    }
                    if (this.isEventEmitter(r) && n !== true) {
                        if (r.getEventNamespace() !== null && t.includes(".")) {
                            console.warn(`Possible the wrong event name "${t}".`)
                        }
                        t = r.getFullEventName(t)
                    } else if (ne.has(t)) {
                        const {namespace: e, eventName: r} = ne.get(t);
                        t = this.makeFullEventName(e, r)
                    }
                    return t
                }
            }, {
                key: "makeFullEventName",
                value: function e(t, r) {
                    const n = i.isStringFilled(t) ? `${t}:${r}` : r;
                    return i.isStringFilled(n) ? n.toLowerCase() : ""
                }
            }]);
            return e
        }();
        babelHelpers.defineProperty(ue, "GLOBAL_TARGET", ie);
        babelHelpers.defineProperty(ue, "DEFAULT_MAX_LISTENERS", te.getDefaultMaxListeners());
        babelHelpers.defineProperty(ue, "sequenceValue", 1);
        let le = [];
        e.isReady = false;
        function ce(t) {
            switch (document.readyState) {
            case "loading":
                le.push(t);
                break;
            case "interactive":
            case "complete":
                if (i.isFunction(t)) {
                    t()
                }
                e.isReady = true;
                break;
            default:
                break
            }
        }
        document.addEventListener("readystatechange", (()=>{
            if (!e.isReady) {
                le.forEach(ce);
                le = []
            }
        }
        ));
        let fe = function e() {
            babelHelpers.classCallCheck(this, e)
        };
        babelHelpers.defineProperty(fe, "bind", y);
        babelHelpers.defineProperty(fe, "bindOnce", b);
        babelHelpers.defineProperty(fe, "unbind", m);
        babelHelpers.defineProperty(fe, "unbindAll", g);
        babelHelpers.defineProperty(fe, "ready", ce);
        babelHelpers.defineProperty(fe, "EventEmitter", ue);
        babelHelpers.defineProperty(fe, "BaseEvent", K);
        function de(e) {
            if (i.isPlainObject(e) || i.isArray(e)) {
                return JSON.stringify(e)
            }
            return c.encode(c.decode(e))
        }
        function pe(e) {
            if (i.isString(e)) {
                const t = c.decode(e);
                let r;
                try {
                    r = JSON.parse(t)
                } catch (e) {
                    r = t
                }
                if (r === t) {
                    if (/^[\d.]+[.]?\d+$/.test(r)) {
                        return Number(r)
                    }
                }
                if (r === "true" || r === "false") {
                    return Boolean(r)
                }
                return r
            }
            return e
        }
        function he() {
            const {documentElement: e, body: t} = document;
            const r = Math.max(window.pageYOffset || 0, e ? e.scrollTop : 0, t ? t.scrollTop : 0);
            const n = Math.max(window.pageXOffset || 0, e ? e.scrollLeft : 0, t ? t.scrollLeft : 0);
            return {
                scrollTop: r,
                scrollLeft: n
            }
        }
        let ve = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "replace",
                value: function e(t, r) {
                    if (i.isDomNode(t) && i.isDomNode(r)) {
                        if (i.isDomNode(t.parentNode)) {
                            t.parentNode.replaceChild(r, t)
                        }
                    }
                }
            }, {
                key: "remove",
                value: function e(t) {
                    if (i.isDomNode(t) && i.isDomNode(t.parentNode)) {
                        t.parentNode.removeChild(t)
                    }
                }
            }, {
                key: "clean",
                value: function t(r) {
                    if (i.isDomNode(r)) {
                        while (r.childNodes.length > 0) {
                            r.removeChild(r.firstChild)
                        }
                        return
                    }
                    if (i.isString(r)) {
                        e.clean(document.getElementById(r))
                    }
                }
            }, {
                key: "insertBefore",
                value: function e(t, r) {
                    if (i.isDomNode(t) && i.isDomNode(r)) {
                        if (i.isDomNode(r.parentNode)) {
                            r.parentNode.insertBefore(t, r)
                        }
                    }
                }
            }, {
                key: "insertAfter",
                value: function e(t, r) {
                    if (i.isDomNode(t) && i.isDomNode(r)) {
                        if (i.isDomNode(r.parentNode)) {
                            const e = r.parentNode;
                            if (i.isDomNode(r.nextSibling)) {
                                e.insertBefore(t, r.nextSibling);
                                return
                            }
                            e.appendChild(t)
                        }
                    }
                }
            }, {
                key: "append",
                value: function e(t, r) {
                    if (i.isDomNode(t) && i.isDomNode(r)) {
                        r.appendChild(t)
                    }
                }
            }, {
                key: "prepend",
                value: function t(r, n) {
                    if (i.isDomNode(r) && i.isDomNode(n)) {
                        if (i.isDomNode(n.firstChild)) {
                            n.insertBefore(r, n.firstChild);
                            return
                        }
                        e.append(r, n)
                    }
                }
            }, {
                key: "hasClass",
                value: function t(r, n) {
                    if (i.isElementNode(r)) {
                        if (i.isString(n)) {
                            const t = n.trim();
                            if (t.length > 0) {
                                if (t.includes(" ")) {
                                    return t.split(" ").every((t=>e.hasClass(r, t)))
                                }
                                if ("classList"in r) {
                                    return r.classList.contains(t)
                                }
                                if (i.isObject(r.className) && i.isString(r.className.baseVal)) {
                                    return r.getAttribute("class").split(" ").some((e=>e === t))
                                }
                            }
                        }
                        if (i.isArray(n) && n.length > 0) {
                            return n.every((t=>e.hasClass(r, t)))
                        }
                    }
                    return false
                }
            }, {
                key: "addClass",
                value: function t(r, n) {
                    if (i.isElementNode(r)) {
                        if (i.isString(n)) {
                            const t = n.trim();
                            if (t.length > 0) {
                                if (t.includes(" ")) {
                                    e.addClass(r, t.split(" "));
                                    return
                                }
                                if ("classList"in r) {
                                    r.classList.add(t);
                                    return
                                }
                                if (i.isObject(r.className) && i.isString(r.className.baseVal)) {
                                    if (r.className.baseVal === "") {
                                        r.className.baseVal = t;
                                        return
                                    }
                                    const e = r.className.baseVal.split(" ");
                                    if (!e.includes(t)) {
                                        e.push(t);
                                        r.className.baseVal = e.join(" ").trim();
                                        return
                                    }
                                }
                                return
                            }
                        }
                        if (i.isArray(n)) {
                            n.forEach((t=>e.addClass(r, t)))
                        }
                    }
                }
            }, {
                key: "removeClass",
                value: function t(r, n) {
                    if (i.isElementNode(r)) {
                        if (i.isString(n)) {
                            const t = n.trim();
                            if (t.length > 0) {
                                if (t.includes(" ")) {
                                    e.removeClass(r, t.split(" "));
                                    return
                                }
                                if ("classList"in r) {
                                    r.classList.remove(t);
                                    return
                                }
                                if (i.isObject(r.className) && i.isString(r.className.baseVal)) {
                                    const e = r.className.baseVal.split(" ").filter((e=>e !== t));
                                    r.className.baseVal = e.join(" ");
                                    return
                                }
                            }
                        }
                        if (i.isArray(n)) {
                            n.forEach((t=>e.removeClass(r, t)))
                        }
                    }
                }
            }, {
                key: "toggleClass",
                value: function t(r, n) {
                    if (i.isElementNode(r)) {
                        if (i.isString(n)) {
                            const t = n.trim();
                            if (t.length > 0) {
                                if (t.includes(" ")) {
                                    e.toggleClass(r, t.split(" "));
                                    return
                                }
                                r.classList.toggle(t);
                                return
                            }
                        }
                        if (i.isArray(n)) {
                            n.forEach((t=>e.toggleClass(r, t)))
                        }
                    }
                }
            }, {
                key: "style",
                value: function t(r, n, a) {
                    if (i.isElementNode(r)) {
                        if (i.isNull(n)) {
                            r.removeAttribute("style");
                            return r
                        }
                        if (i.isPlainObject(n)) {
                            Object.entries(n).forEach((t=>{
                                const [n,i] = t;
                                e.style(r, n, i)
                            }
                            ));
                            return r
                        }
                        if (i.isString(n)) {
                            if (i.isUndefined(a) && r.nodeType !== Node.DOCUMENT_NODE) {
                                const e = getComputedStyle(r);
                                if (n in e) {
                                    return e[n]
                                }
                                return e.getPropertyValue(n)
                            }
                            if (i.isNull(a) || a === "" || a === "null") {
                                if (String(n).startsWith("--")) {
                                    r.style.removeProperty(n);
                                    return r
                                }
                                r.style[n] = "";
                                return r
                            }
                            if (i.isString(a) || i.isNumber(a)) {
                                if (String(n).startsWith("--")) {
                                    r.style.setProperty(n, a);
                                    return r
                                }
                                r.style[n] = a;
                                return r
                            }
                        }
                    }
                    return null
                }
            }, {
                key: "adjust",
                value: function t(r, n={}) {
                    if (!r.nodeType) {
                        return null
                    }
                    let a = r;
                    if (r.nodeType === Node.DOCUMENT_NODE) {
                        a = r.body
                    }
                    if (i.isPlainObject(n)) {
                        if (i.isPlainObject(n.attrs)) {
                            Object.keys(n.attrs).forEach((e=>{
                                if (e === "class" || e.toLowerCase() === "classname") {
                                    a.className = n.attrs[e];
                                    return
                                }
                                if (n.attrs[e] == "") {
                                    a.removeAttribute(e);
                                    return
                                }
                                a.setAttribute(e, n.attrs[e])
                            }
                            ))
                        }
                        if (i.isPlainObject(n.style)) {
                            e.style(a, n.style)
                        }
                        if (i.isPlainObject(n.props)) {
                            Object.keys(n.props).forEach((e=>{
                                a[e] = n.props[e]
                            }
                            ))
                        }
                        if (i.isPlainObject(n.events)) {
                            Object.keys(n.events).forEach((e=>{
                                fe.bind(a, e, n.events[e])
                            }
                            ))
                        }
                        if (i.isPlainObject(n.dataset)) {
                            Object.keys(n.dataset).forEach((e=>{
                                a.dataset[e] = n.dataset[e]
                            }
                            ))
                        }
                        if (i.isString(n.children)) {
                            n.children = [n.children]
                        }
                        if (i.isArray(n.children) && n.children.length > 0) {
                            n.children.forEach((t=>{
                                if (i.isDomNode(t)) {
                                    e.append(t, a)
                                }
                                if (i.isString(t)) {
                                    a.insertAdjacentHTML("beforeend", t)
                                }
                            }
                            ));
                            return a
                        }
                        if ("text"in n && !i.isNil(n.text)) {
                            a.innerText = n.text;
                            return a
                        }
                        if ("html"in n && !i.isNil(n.html)) {
                            a.innerHTML = n.html
                        }
                    }
                    return a
                }
            }, {
                key: "create",
                value: function t(r, n={}, a=document) {
                    let s = r;
                    let o = n;
                    if (i.isObjectLike(r)) {
                        o = r;
                        s = r.tag
                    }
                    return e.adjust(a.createElement(s), o)
                }
            }, {
                key: "show",
                value: function e(t) {
                    if (i.isDomNode(t)) {
                        t.hidden = false
                    }
                }
            }, {
                key: "hide",
                value: function e(t) {
                    if (i.isDomNode(t)) {
                        t.hidden = true
                    }
                }
            }, {
                key: "isShown",
                value: function e(t) {
                    return i.isDomNode(t) && !t.hidden && t.style.getPropertyValue("display") !== "none"
                }
            }, {
                key: "toggle",
                value: function t(r) {
                    if (i.isDomNode(r)) {
                        if (e.isShown(r)) {
                            e.hide(r)
                        } else {
                            e.show(r)
                        }
                    }
                }
            }, {
                key: "getPosition",
                value: function e(t) {
                    if (i.isDomNode(t)) {
                        const e = t.getBoundingClientRect();
                        const {scrollLeft: r, scrollTop: n} = he();
                        return new DOMRect(e.left + r,e.top + n,e.width,e.height)
                    }
                    return new DOMRect
                }
            }, {
                key: "getRelativePosition",
                value: function t(r, n) {
                    if (i.isDomNode(r) && i.isDomNode(n)) {
                        const t = e.getPosition(r);
                        const i = e.getPosition(n);
                        return new DOMRect(t.left - i.left,t.top - i.top,t.width,t.height)
                    }
                    return new DOMRect
                }
            }, {
                key: "attr",
                value: function t(r, n, a) {
                    if (i.isElementNode(r)) {
                        if (i.isString(n)) {
                            if (!i.isNil(a)) {
                                return r.setAttribute(n, de(a))
                            }
                            if (i.isNull(a)) {
                                return r.removeAttribute(n)
                            }
                            return pe(r.getAttribute(n))
                        }
                        if (i.isPlainObject(n)) {
                            return Object.entries(n).forEach((([t,n])=>{
                                e.attr(r, t, n)
                            }
                            ))
                        }
                    }
                    return null
                }
            }]);
            return e
        }();
        const ye = navigator.userAgent.toLowerCase();
        let me = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "isOpera",
                value: function e() {
                    return ye.includes("opera")
                }
            }, {
                key: "isIE",
                value: function t() {
                    return "attachEvent"in document && !e.isOpera()
                }
            }, {
                key: "isIE6",
                value: function e() {
                    return ye.includes("msie 6")
                }
            }, {
                key: "isIE7",
                value: function e() {
                    return ye.includes("msie 7")
                }
            }, {
                key: "isIE8",
                value: function e() {
                    return ye.includes("msie 8")
                }
            }, {
                key: "isIE9",
                value: function e() {
                    return "documentMode"in document && document.documentMode >= 9
                }
            }, {
                key: "isIE10",
                value: function e() {
                    return "documentMode"in document && document.documentMode >= 10
                }
            }, {
                key: "isSafari",
                value: function e() {
                    return ye.includes("safari") && !ye.includes("chrome")
                }
            }, {
                key: "isFirefox",
                value: function e() {
                    return ye.includes("firefox")
                }
            }, {
                key: "isChrome",
                value: function e() {
                    return ye.includes("chrome")
                }
            }, {
                key: "detectIEVersion",
                value: function t() {
                    if (e.isOpera() || e.isSafari() || e.isFirefox() || e.isChrome()) {
                        return -1
                    }
                    let r = -1;
                    if (!!window.MSStream && !window.ActiveXObject && "ActiveXObject"in window) {
                        r = 11
                    } else if (e.isIE10()) {
                        r = 10
                    } else if (e.isIE9()) {
                        r = 9
                    } else if (e.isIE()) {
                        r = 8
                    }
                    if (r === -1 || r === 8) {
                        if (navigator.appName === "Microsoft Internet Explorer") {
                            const e = new RegExp("MSIE ([0-9]+[.0-9]*)");
                            const t = navigator.userAgent.match(e);
                            if (i.isArrayLike(t) && t.length > 0) {
                                r = parseFloat(t[1])
                            }
                        }
                        if (navigator.appName === "Netscape") {
                            r = 11;
                            const e = new RegExp("Trident/.*rv:([0-9]+[.0-9]*)");
                            if (e.exec(navigator.userAgent) != null) {
                                const t = navigator.userAgent.match(e);
                                if (i.isArrayLike(t) && t.length > 0) {
                                    r = parseFloat(t[1])
                                }
                            }
                        }
                    }
                    return r
                }
            }, {
                key: "isIE11",
                value: function t() {
                    return e.detectIEVersion() >= 11
                }
            }, {
                key: "isMac",
                value: function e() {
                    return ye.includes("macintosh")
                }
            }, {
                key: "isWin",
                value: function e() {
                    return ye.includes("windows")
                }
            }, {
                key: "isLinux",
                value: function t() {
                    return ye.includes("linux") && !e.isAndroid()
                }
            }, {
                key: "isAndroid",
                value: function e() {
                    return ye.includes("android")
                }
            }, {
                key: "isIPad",
                value: function e() {
                    return ye.includes("ipad;") || this.isMac() && this.isTouchDevice()
                }
            }, {
                key: "isIPhone",
                value: function e() {
                    return ye.includes("iphone;")
                }
            }, {
                key: "isIOS",
                value: function t() {
                    return e.isIPad() || e.isIPhone()
                }
            }, {
                key: "isMobile",
                value: function t() {
                    return e.isIPhone() || e.isIPad() || e.isAndroid() || ye.includes("mobile") || ye.includes("touch")
                }
            }, {
                key: "isRetina",
                value: function e() {
                    return window.devicePixelRatio && window.devicePixelRatio >= 2
                }
            }, {
                key: "isTouchDevice",
                value: function e() {
                    return "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                }
            }, {
                key: "isDoctype",
                value: function e(t) {
                    const r = t || document;
                    if (r.compatMode) {
                        return r.compatMode === "CSS1Compat"
                    }
                    return r.documentElement && r.documentElement.clientHeight
                }
            }, {
                key: "isLocalStorageSupported",
                value: function e() {
                    try {
                        localStorage.setItem("test", "test");
                        localStorage.removeItem("test");
                        return true
                    } catch (e) {
                        return false
                    }
                }
            }, {
                key: "addGlobalClass",
                value: function t(r) {
                    let n = "bx-core";
                    r = i.isElementNode(r) ? r : document.documentElement;
                    if (ve.hasClass(r, n)) {
                        return
                    }
                    if (e.isIOS()) {
                        n += " bx-ios"
                    } else if (e.isWin()) {
                        n += " bx-win"
                    } else if (e.isMac()) {
                        n += " bx-mac"
                    } else if (e.isLinux()) {
                        n += " bx-linux"
                    } else if (e.isAndroid()) {
                        n += " bx-android"
                    }
                    n += e.isMobile() ? " bx-touch" : " bx-no-touch";
                    n += e.isRetina() ? " bx-retina" : " bx-no-retina";
                    if (/AppleWebKit/.test(navigator.userAgent)) {
                        n += " bx-chrome"
                    } else if (/Opera/.test(navigator.userAgent)) {
                        n += " bx-opera"
                    } else if (e.isFirefox()) {
                        n += " bx-firefox"
                    }
                    ve.addClass(r, n)
                }
            }, {
                key: "detectAndroidVersion",
                value: function e() {
                    const t = new RegExp("Android ([0-9]+[.0-9]*)");
                    if (t.exec(navigator.userAgent) != null) {
                        const e = navigator.userAgent.match(t);
                        if (i.isArrayLike(e) && e.length > 0) {
                            return parseFloat(e[1])
                        }
                    }
                    return 0
                }
            }, {
                key: "isPropertySupported",
                value: function e(t, r) {
                    if (t === "") {
                        return false
                    }
                    function n(e) {
                        return e.replace(/([A-Z])/g, ((...e)=>`-${e[1].toLowerCase()}`))
                    }
                    function i(e) {
                        const t = /(\\-([a-z]))/g;
                        if (t.test(e)) {
                            return e.replace(t, ((...e)=>e[2].toUpperCase()))
                        }
                        return e
                    }
                    const a = t.includes("-") ? i(t) : t;
                    const s = !!r;
                    const o = a.charAt(0).toUpperCase() + a.slice(1);
                    const u = ["Webkit", "Moz", "O", "ms"].join(`${o} `);
                    const l = `${a} ${u} ${o}`.split(" ");
                    const c = document.body || document.documentElement;
                    for (let e = 0; e < l.length; e += 1) {
                        const t = l[e];
                        if (c && "style"in c && t in c.style) {
                            const e = t.substr(0, t.length - a.length).toLowerCase();
                            const r = t === a ? "" : `-${e}-`;
                            return s ? r + n(a) : t
                        }
                    }
                    return false
                }
            }, {
                key: "addGlobalFeatures",
                value: function t(r) {
                    if (!i.isArray(r)) {
                        return
                    }
                    const n = [];
                    for (let t = 0; t < r.length; t += 1) {
                        const i = !!e.isPropertySupported(r[t]);
                        n.push(`bx-${i ? "" : "no-"}${r[t].toLowerCase()}`)
                    }
                    ve.addClass(document.documentElement, n.join(" "))
                }
            }]);
            return e
        }();
        let ge = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "getList",
                value: function e() {
                    return document.cookie.split(";").map((e=>e.split("="))).map((e=>e.map((e=>e.trim())))).reduce(((e,t)=>{
                        const [r,n] = t;
                        e[decodeURIComponent(r)] = decodeURIComponent(n);
                        return e
                    }
                    ), {})
                }
            }, {
                key: "get",
                value: function t(r) {
                    const n = e.getList();
                    if (r in n) {
                        return n[r]
                    }
                    return undefined
                }
            }, {
                key: "set",
                value: function e(t, r, n={}) {
                    const a = {
                        expires: "",
                        ...n
                    };
                    if (i.isNumber(a.expires)) {
                        const e = +new Date;
                        const t = a.expires;
                        const r = 864e5;
                        a.expires = new Date(e + t * r)
                    }
                    if (i.isDate(a.expires)) {
                        a.expires = a.expires.toUTCString()
                    }
                    const s = decodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                    const o = encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    const u = Object.keys(a).reduce(((e,t)=>{
                        const r = a[t];
                        if (!r) {
                            return e
                        }
                        if (r === true) {
                            return `${e}; ${t}`
                        }
                        return `${e}; ${t}=${r.split(";")[0]}`
                    }
                    ), "");
                    document.cookie = `${s}=${o}${u}`
                }
            }, {
                key: "remove",
                value: function t(r, n={}) {
                    e.set(r, "", {
                        ...n,
                        expires: -1
                    })
                }
            }]);
            return e
        }();
        function be(e, t=new FormData, r=null) {
            if (i.isUndefined(e)) {
                return t
            }
            if (i.isNull(e)) {
                t.append(r, "")
            } else if (i.isArray(e)) {
                if (!e.length) {
                    const e = `${r}[]`;
                    t.append(e, "")
                } else {
                    e.forEach(((e,n)=>{
                        const i = `${r}[${n}]`;
                        be(e, t, i)
                    }
                    ))
                }
            } else if (i.isDate(e)) {
                t.append(r, e.toISOString())
            } else if (i.isObject(e) && !i.isFile(e) && !i.isBlob(e)) {
                Object.keys(e).forEach((n=>{
                    const a = e[n];
                    let s = n;
                    if (i.isArray(a)) {
                        while (n.length > 2 && n.lastIndexOf("[]") === n.length - 2) {
                            s = n.substring(0, n.length - 2)
                        }
                    }
                    const o = r ? `${r}[${s}]` : s;
                    be(a, t, o)
                }
                ))
            } else {
                t.append(r, e)
            }
            return t
        }
        let we = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "convertObjectToFormData",
                value: function e(t) {
                    return be(t)
                }
            }]);
            return e
        }();
        let xe = function e() {
            babelHelpers.classCallCheck(this, e)
        };
        babelHelpers.defineProperty(xe, "Cookie", ge);
        babelHelpers.defineProperty(xe, "Data", we);
        function Se(e) {
            if (i.isString(e)) {
                if (i.isNil(Se[e])) {
                    ue.emit("onBXMessageNotFound", new K({
                        compatData: [e]
                    }));
                    if (i.isNil(Se[e])) {
                        q.debug(`message undefined: ${e}`);
                        Se[e] = ""
                    }
                }
            }
            if (i.isPlainObject(e)) {
                Object.keys(e).forEach((t=>{
                    Se[t] = e[t]
                }
                ))
            }
            return Se[e]
        }
        if (!i.isNil(window.BX) && i.isFunction(window.BX.message)) {
            Object.keys(window.BX.message).forEach((e=>{
                Se({
                    [e]: window.BX.message[e]
                })
            }
            ))
        }
        let Ee = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "getMessage",
                value: function e(t, r=null) {
                    let n = Se(t);
                    if (i.isString(n) && i.isPlainObject(r)) {
                        const e = e=>String(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                        Object.keys(r).forEach((t=>{
                            const a = new RegExp(e(t),"gi");
                            n = n.replace(a, (()=>i.isNil(r[t]) ? "" : String(r[t])))
                        }
                        ))
                    }
                    return n
                }
            }, {
                key: "hasMessage",
                value: function e(t) {
                    return i.isString(t) && !i.isNil(Se[t])
                }
            }, {
                key: "setMessage",
                value: function e(t, r) {
                    if (i.isString(t) && i.isString(r)) {
                        Se({
                            [t]: r
                        })
                    }
                    if (i.isObject(t)) {
                        Se(t)
                    }
                }
            }, {
                key: "getMessagePlural",
                value: function e(t, r, n=null) {
                    let a = "";
                    if (i.isNumber(r)) {
                        if (this.hasMessage(`${t}_PLURAL_ ${this.getPluralForm(r)}`)) {
                            a = this.getMessage(`${t}_PLURAL_ ${this.getPluralForm(r)}`, n)
                        } else {
                            a = this.getMessage(`${t}_PLURAL_1`, n)
                        }
                    } else {
                        a = this.getMessage(t, n)
                    }
                    return a
                }
            }, {
                key: "getPluralForm",
                value: function e(t, r) {
                    let n;
                    if (!i.isStringFilled(r)) {
                        r = Se("LANGUAGE_ID")
                    }
                    if (t < 0) {
                        t = -1 * t
                    }
                    switch (r) {
                    case "ar":
                        n = t !== 1 ? 1 : 0;
                        break;
                    case "br":
                    case "fr":
                    case "tr":
                        n = t > 1 ? 1 : 0;
                        break;
                    case "de":
                    case "en":
                    case "hi":
                    case "it":
                    case "la":
                        n = t !== 1 ? 1 : 0;
                        break;
                    case "ru":
                    case "ua":
                        if (t % 10 === 1 && t % 100 !== 11) {
                            n = 0
                        } else if (t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)) {
                            n = 1
                        } else {
                            n = 2
                        }
                        break;
                    case "pl":
                        if (t === 1) {
                            n = 0
                        } else if (t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)) {
                            n = 1
                        } else {
                            n = 2
                        }
                        break;
                    case "id":
                    case "ja":
                    case "ms":
                    case "sc":
                    case "tc":
                    case "th":
                    case "vn":
                        n = 0;
                        break;
                    default:
                        n = 1;
                        break
                    }
                    return n
                }
            }]);
            return e
        }();
        const Te = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
        function Be(e) {
            return Te.includes(e)
        }
        const je = {
            tag: /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>|{{uid[0-9]+}}/g,
            comment: /<!--(?!<!)[^\[>].*?-->/g,
            tagName: /<\/?([^\s]+?)[/\s>]/,
            attributes: /\s([\w\-_:.]+)\s?\n?=\s?\n?"([^"]+)?"|\s([\w\-_:.]+)\s?\n?=\s?\n?'([^']+)?'|\s([\w\-_:.]+)/gs,
            placeholder: /{{uid[0-9]+}}/g
        };
        function Oe(e) {
            const t = {
                type: "tag",
                name: "",
                svg: false,
                attrs: {},
                children: [],
                voidElement: false
            };
            if (e.startsWith("\x3c!--")) {
                const t = e.indexOf("--\x3e");
                const r = "\x3c!--".length;
                return {
                    type: "comment",
                    content: t !== -1 ? e.slice(r, t) : ""
                }
            }
            const r = e.match(je.tagName);
            if (i.isArrayFilled(r)) {
                const [,n] = r;
                t.name = n;
                t.svg = n === "svg";
                t.voidElement = Be(n) || e.trim().endsWith("/>")
            }
            const n = new RegExp(je.attributes);
            for (; ; ) {
                const r = n.exec(e);
                if (!i.isNil(r)) {
                    const [,e,n] = r;
                    if (!i.isNil(e)) {
                        t.attrs[e] = i.isStringFilled(n) ? n : ""
                    } else {
                        const [,,,e,n] = r;
                        if (!i.isNil(e)) {
                            t.attrs[e] = i.isStringFilled(n) ? n : ""
                        } else {
                            const [,,,,,e] = r;
                            t.attrs[e] = ""
                        }
                    }
                } else {
                    break
                }
            }
            return t
        }
        function Xe(e) {
            const t = e.replace(/[\n\r\t]$/, "");
            const r = t.match(je.placeholder);
            return t.split(je.placeholder).reduce(((e,t,n)=>{
                if (i.isStringFilled(t)) {
                    e.push(...t.split(/\n/).reduce(((e,t)=>{
                        const r = t.replace(/[\t\r]/g, "");
                        if (i.isStringFilled(r)) {
                            e.push({
                                type: "text",
                                content: r
                            })
                        }
                        return e
                    }
                    ), []))
                }
                if (r && r[n]) {
                    e.push({
                        type: "placeholder",
                        uid: parseInt(r[n].replace(/{{uid|}}/, ""))
                    })
                }
                return e
            }
            ), [])
        }
        function ke(e, t) {
            const r = [];
            if (e.indexOf("<") !== 0 && !e.startsWith("{{")) {
                const t = e.indexOf("<");
                r.push(...Xe(t === -1 ? e : e.slice(0, t)))
            }
            const n = [];
            let i = -1;
            e = e.replace(je.comment, (e=>{
                i += 1;
                n.push(e.replace(/^<!--|-->$/g, ""));
                return `\x3c!--{{cUid ${i}}}--\x3e`
            }
            ));
            const a = [];
            let s = -1;
            let o;
            e.replace(je.tag, ((i,u)=>{
                const l = u + i.length;
                const c = e.charAt(l);
                let f;
                if (i.startsWith("\x3c!--")) {
                    const e = Oe(i, t);
                    e.content = n[i.replace(/<!--{{cUid|}}-->/g, "")];
                    if (s < 0) {
                        r.push(e);
                        return r
                    }
                    f = a[s];
                    f.children.push(e);
                    return r
                }
                if (i.startsWith("{{")) {
                    const [e] = Xe(i);
                    if (s < 0) {
                        r.push(e);
                        return r
                    }
                    f = a[s];
                    f.children.push(e);
                    return r
                }
                if (!i.startsWith("</")) {
                    s++;
                    o = Oe(i, t);
                    if (!o.voidElement && c && c !== "<") {
                        o.children.push(...Xe(e.slice(l, e.indexOf("<", l))))
                    }
                    if (s === 0) {
                        r.push(o)
                    }
                    f = a[s - 1];
                    if (f) {
                        if (!o.svg) {
                            o.svg = f.svg
                        }
                        f.children.push(o)
                    }
                    a[s] = o
                }
                if (i.startsWith("</") || o.voidElement) {
                    if (s > -1 && (o.voidElement || o.name === i.slice(2, -1))) {
                        s--;
                        o = s === -1 ? r : a[s]
                    }
                    if (c && c !== "<") {
                        f = s === -1 ? r : a[s].children;
                        const t = e.indexOf("<", l);
                        const n = e.slice(l, t === -1 ? undefined : t);
                        if (t > -1 && s + f.length >= 0 || n !== " ") {
                            f.push(...Xe(n))
                        }
                    }
                }
            }
            ));
            return r
        }
        const Ae = (e,t)=>{
            if (i.isDomNode(e) && i.isDomNode(t)) {
                if (t.nodeName !== "TEMPLATE") {
                    ve.append(e, t)
                } else {
                    t.content.append(e)
                }
            }
        }
        ;
        function Ne(e) {
            const {node: t, parentElement: r, substitutions: n} = e;
            if (t.type === "tag") {
                const e = (()=>{
                    if (t.svg) {
                        return document.createElementNS("http://www.w3.org/2000/svg", t.name)
                    }
                    return document.createElement(t.name)
                }
                )();
                Object.entries(t.attrs).forEach((([t,r])=>{
                    if (t.startsWith("on") && new RegExp(je.placeholder).test(r)) {
                        const a = n[parseInt(r.replace(/{{uid|}}/, "")) - 1];
                        if (i.isFunction(a)) {
                            const r = t.endsWith("once") ? "bindOnce" : "bind";
                            fe[r](e, t.replace(/^on|once$/g, ""), a)
                        } else {
                            e.setAttribute(t, a)
                        }
                    } else {
                        if (new RegExp(je.placeholder).test(r)) {
                            const i = r.split(/{{|}}/).reduce(((e,t)=>{
                                if (t.startsWith("uid")) {
                                    const r = n[parseInt(t.replace("uid", "")) - 1];
                                    return `${e}${r}`
                                }
                                return `${e}${t}`
                            }
                            ), "");
                            e.setAttribute(t, i)
                        } else {
                            e.setAttribute(t, c.decode(r))
                        }
                    }
                }
                ));
                t.children.forEach((t=>{
                    const r = Ne({
                        node: t,
                        parentElement: e,
                        substitutions: n
                    });
                    if (i.isArray(r)) {
                        r.forEach((t=>{
                            Ae(t, e)
                        }
                        ))
                    } else {
                        Ae(r, e)
                    }
                }
                ));
                return e
            }
            if (t.type === "comment") {
                return document.createComment(t.content)
            }
            if (t.type === "text") {
                if (r) {
                    if (r.nodeName !== "TEMPLATE") {
                        r.insertAdjacentHTML("beforeend", t.content)
                    } else {
                        r.content.append(t.content)
                    }
                    return
                }
                return document.createTextNode(t.content)
            }
            if (t.type === "placeholder") {
                return n[t.uid - 1]
            }
        }
        function Ce(e, ...t) {
            const r = e.reduce(((e,r,n)=>{
                if (n > 0) {
                    const a = t[n - 1];
                    if (i.isString(a) || i.isNumber(a)) {
                        return `${e}${a}${r}`
                    }
                    return `${e}{{uid ${n}}}${r}`
                }
                return e
            }
            ), e[0]).replace(/^[\r\n\t\s]+/gm, "").replace(/>[\n]+/g, ">").replace(/[}][\n]+/g, "}");
            const n = ke(r);
            if (n.length === 1) {
                return Ne({
                    node: n[0],
                    substitutions: t
                })
            }
            if (n.length > 1) {
                return n.map((e=>Ne({
                    node: e,
                    substitutions: t
                })))
            }
            return false
        }
        function Pe(e, ...t) {
            return t.reduce(((t,r,n)=>{
                const a = n + 1;
                if (!i.isPlainObject(r) && !i.isArray(r)) {
                    return t + r + e[a]
                }
                return `${t}__s ${n}${e[a]}`
            }
            ), e[0]).replace(/[\r\t]/gm, "").split(";\n").map((e=>e.replace(/\n/, ""))).reduce(((e,r)=>{
                if (r !== "") {
                    const n = r.match(/^[\w-. ]+:/);
                    const i = r.split(/^[\w-. ]+:/);
                    const a = n[0].replace(":", "").trim();
                    const s = i[1].trim();
                    const o = /^__s\d+/;
                    if (o.test(s)) {
                        e[a] = t[s.replace("__s", "")];
                        return e
                    }
                    e[a] = s
                }
                return e
            }
            ), {})
        }
        let _e = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "safe",
                value: function e(t, ...r) {
                    return r.reduce(((e,r,n)=>e + c.encode(r) + t[n + 1]), t[0])
                }
            }, {
                key: "unsafe",
                value: function e(t, ...r) {
                    return r.reduce(((e,r,n)=>e + c.decode(r) + t[n + 1]), t[0])
                }
            }, {
                key: "style",
                value: function e(t) {
                    if (!i.isDomNode(t)) {
                        throw new Error("element is not HTMLElement")
                    }
                    return function e(...r) {
                        ve.style(t, Pe(...r))
                    }
                }
            }, {
                key: "message",
                value: function e(t, ...r) {
                    return r.reduce(((e,r,n)=>e + Ee.getMessage(r) + t[n + 1]), t[0])
                }
            }, {
                key: "attrs",
                value: function e(t) {
                    if (!i.isDomNode(t)) {
                        throw new Error("element is not HTMLElement")
                    }
                    return function e(...r) {
                        ve.attr(t, Pe(...r))
                    }
                }
            }]);
            return e
        }();
        babelHelpers.defineProperty(_e, "render", Ce);
        babelHelpers.defineProperty(_e, "attr", _e.attrs);
        function Ie(e) {
            switch (e) {
            case "index":
                return (e,t,r)=>{
                    const n = /\[(\w*)\]$/.exec(e);
                    const a = e.replace(/\[\w*\]$/, "");
                    if (i.isNil(n)) {
                        r[a] = t;
                        return
                    }
                    if (i.isUndefined(r[a])) {
                        r[a] = {}
                    }
                    r[a][n[1]] = t
                }
                ;
            case "bracket":
                return (e,t,r)=>{
                    const n = /(\[\])$/.exec(e);
                    const a = e.replace(/\[\]$/, "");
                    if (i.isNil(n)) {
                        r[a] = t;
                        return
                    }
                    if (i.isUndefined(r[a])) {
                        r[a] = [t];
                        return
                    }
                    r[a] = [].concat(r[a], t)
                }
                ;
            default:
                return (e,t,r)=>{
                    const n = e.replace(/\[\]$/, "");
                    r[n] = t
                }
            }
        }
        function Le(e) {
            if (/^\w+\[([\w]+)\]$/.test(e)) {
                return "index"
            }
            if (/^\w+\[\]$/.test(e)) {
                return "bracket"
            }
            return "default"
        }
        function Me(e) {
            return !String(e).startsWith("__proto__")
        }
        function De(e) {
            if (!i.isString(e)) {
                return {}
            }
            const t = e.trim().replace(/^[?#&]/, "");
            if (!t) {
                return {}
            }
            return {
                ...t.split("&").reduce(((e,t)=>{
                    const [r,n] = t.replace(/\+/g, " ").split("=");
                    if (Me(r)) {
                        const t = Le(r);
                        const i = Ie(t);
                        i(r, n, e)
                    }
                    return e
                }
                ), Object.create(null))
            }
        }
        const Fe = /^((\w+):)?(\/\/((\w+)?(:(\w+))?@)?([^\/\?:]+)(:(\d+))?)?(\/?([^\/\?#][^\?#]*)?)?(\?([^#]+))?(#(\w*))?/;
        function Re(e) {
            const t = e.match(Fe);
            if (i.isArray(t)) {
                const r = De(t[14]);
                return {
                    useShort: /^\/\//.test(e),
                    href: t[0] || "",
                    schema: t[2] || "",
                    host: t[8] || "",
                    port: t[10] || "",
                    path: t[11] || "",
                    query: t[14] || "",
                    queryParams: r,
                    hash: t[16] || "",
                    username: t[5] || "",
                    password: t[7] || "",
                    origin: t[8] || ""
                }
            }
            return {}
        }
        function He(e={}) {
            const t = Object.keys(e).reduce(((t,r)=>{
                if (i.isArray(e[r])) {
                    e[r].forEach((e=>{
                        t.push(`${r}[]=${e}`)
                    }
                    ), "")
                }
                if (i.isPlainObject(e[r])) {
                    Object.keys(e[r]).forEach((n=>{
                        t.push(`${r}[${n}]=${e[r][n]}`)
                    }
                    ), "")
                }
                if (!i.isObject(e[r]) && !i.isArray(e[r])) {
                    t.push(`${r}=${e[r]}`)
                }
                return t
            }
            ), []).join("&");
            if (t.length > 0) {
                return `?${t}`
            }
            return t
        }
        function We(e) {
            if (i.isArray(e)) {
                return e.map((e=>String(e)))
            }
            if (i.isPlainObject(e)) {
                return {
                    ...e
                }
            }
            return String(e)
        }
        const ze = new WeakMap;
        let Ge = function() {
            babelHelpers.createClass(e, null, [{
                key: "addParam",
                value: function t(r, n={}) {
                    return new e(r).setQueryParams(n).toString()
                }
            }, {
                key: "removeParam",
                value: function t(r, n) {
                    const a = i.isArray(n) ? n : [n];
                    return new e(r).removeQueryParam(...a).toString()
                }
            }]);
            function e(t="") {
                babelHelpers.classCallCheck(this, e);
                ze.set(this, Re(t))
            }
            babelHelpers.createClass(e, [{
                key: "getSchema",
                value: function e() {
                    return ze.get(this).schema
                }
            }, {
                key: "setSchema",
                value: function e(t) {
                    ze.get(this).schema = String(t);
                    return this
                }
            }, {
                key: "getHost",
                value: function e() {
                    return ze.get(this).host
                }
            }, {
                key: "setHost",
                value: function e(t) {
                    ze.get(this).host = String(t);
                    return this
                }
            }, {
                key: "getPort",
                value: function e() {
                    return ze.get(this).port
                }
            }, {
                key: "setPort",
                value: function e(t) {
                    ze.get(this).port = String(t);
                    return this
                }
            }, {
                key: "getPath",
                value: function e() {
                    return ze.get(this).path
                }
            }, {
                key: "setPath",
                value: function e(t) {
                    if (!/^\//.test(t)) {
                        ze.get(this).path = `/${String(t)}`;
                        return this
                    }
                    ze.get(this).path = String(t);
                    return this
                }
            }, {
                key: "getQuery",
                value: function e() {
                    return He(ze.get(this).queryParams)
                }
            }, {
                key: "getQueryParam",
                value: function e(t) {
                    const r = this.getQueryParams();
                    if (Object.hasOwn(r, t)) {
                        return r[t]
                    }
                    return null
                }
            }, {
                key: "setQueryParam",
                value: function e(t, r="") {
                    ze.get(this).queryParams[t] = We(r);
                    return this
                }
            }, {
                key: "getQueryParams",
                value: function e() {
                    return {
                        ...ze.get(this).queryParams
                    }
                }
            }, {
                key: "setQueryParams",
                value: function e(t={}) {
                    const r = this.getQueryParams();
                    const n = {
                        ...r,
                        ...t
                    };
                    Object.keys(n).forEach((e=>{
                        n[e] = We(n[e])
                    }
                    ));
                    ze.get(this).queryParams = n;
                    return this
                }
            }, {
                key: "removeQueryParam",
                value: function e(...t) {
                    const r = {
                        ...ze.get(this).queryParams
                    };
                    t.forEach((e=>{
                        if (Object.hasOwn(r, e)) {
                            delete r[e]
                        }
                    }
                    ));
                    ze.get(this).queryParams = r;
                    return this
                }
            }, {
                key: "getFragment",
                value: function e() {
                    return ze.get(this).hash
                }
            }, {
                key: "setFragment",
                value: function e(t) {
                    ze.get(this).hash = String(t);
                    return this
                }
            }, {
                key: "serialize",
                value: function e() {
                    const t = {
                        ...ze.get(this)
                    };
                    t.href = this.toString();
                    return t
                }
            }, {
                key: "toString",
                value: function e() {
                    const t = {
                        ...ze.get(this)
                    };
                    let r = t.schema ? `${t.schema}://` : "";
                    if (t.useShort) {
                        r = "//"
                    }
                    const n = (()=>{
                        if (i.isString(t.port) && !["", "80"].includes(t.port)) {
                            return `:${t.port}`
                        }
                        return ""
                    }
                    )();
                    const a = this.getHost();
                    const s = this.getPath();
                    const o = He(t.queryParams);
                    const u = t.hash ? `#${t.hash}` : "";
                    return `${a ? r : ""}${a}${a ? n : ""}${s}${o}${u}`
                }
            }]);
            return e
        }();
        let Ue = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "isEmail",
                value: function e(t) {
                    const r = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                    return r.test(String(t).toLowerCase())
                }
            }]);
            return e
        }();
        let $e = function() {
            function e() {
                babelHelpers.classCallCheck(this, e);
                babelHelpers.defineProperty(this, "storage", new Map)
            }
            babelHelpers.createClass(e, [{
                key: "get",
                value: function e(t, r) {
                    if (!this.storage.has(t)) {
                        if (i.isFunction(r)) {
                            return r()
                        }
                        if (!i.isUndefined(r)) {
                            return r
                        }
                    }
                    return this.storage.get(t)
                }
            }, {
                key: "set",
                value: function e(t, r) {
                    this.storage.set(t, r)
                }
            }, {
                key: "delete",
                value: function e(t) {
                    this.storage.delete(t)
                }
            }, {
                key: "has",
                value: function e(t) {
                    return this.storage.has(t)
                }
            }, {
                key: "remember",
                value: function e(t, r) {
                    if (!this.storage.has(t)) {
                        if (i.isFunction(r)) {
                            this.storage.set(t, r())
                        } else if (!i.isUndefined(r)) {
                            this.storage.set(t, r)
                        }
                    }
                    return this.storage.get(t)
                }
            }, {
                key: "size",
                value: function e() {
                    return this.storage.size
                }
            }, {
                key: "keys",
                value: function e() {
                    return [...this.storage.keys()]
                }
            }, {
                key: "values",
                value: function e() {
                    return [...this.storage.values()]
                }
            }]);
            return e
        }();
        let Ve = function(e) {
            babelHelpers.inherits(t, e);
            function t(...e) {
                var r;
                babelHelpers.classCallCheck(this, t);
                r = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this, ...e));
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "storage", new Map);
                return r
            }
            return t
        }($e);
        let Ye = function() {
            function e() {
                babelHelpers.classCallCheck(this, e);
                babelHelpers.defineProperty(this, "stackKey", "BX.Cache.Storage.LsStorage.stack");
                babelHelpers.defineProperty(this, "stack", null)
            }
            babelHelpers.createClass(e, [{
                key: "getStack",
                value: function e() {
                    if (i.isPlainObject(this.stack)) {
                        return this.stack
                    }
                    const t = localStorage.getItem(this.stackKey);
                    if (i.isString(t) && t !== "") {
                        const e = JSON.parse(t);
                        if (i.isPlainObject(e)) {
                            this.stack = e;
                            return this.stack
                        }
                    }
                    this.stack = {};
                    return this.stack
                }
            }, {
                key: "saveStack",
                value: function e() {
                    if (i.isPlainObject(this.stack)) {
                        const e = JSON.stringify(this.stack);
                        localStorage.setItem(this.stackKey, e)
                    }
                }
            }, {
                key: "get",
                value: function e(t) {
                    const r = this.getStack();
                    return r[t]
                }
            }, {
                key: "set",
                value: function e(t, r) {
                    const n = this.getStack();
                    n[t] = r;
                    this.saveStack()
                }
            }, {
                key: "delete",
                value: function e(t) {
                    const r = this.getStack();
                    if (t in r) {
                        delete r[t]
                    }
                }
            }, {
                key: "has",
                value: function e(t) {
                    const r = this.getStack();
                    return t in r
                }
            }, {
                key: "keys",
                value: function e() {
                    const t = this.getStack();
                    return Object.keys(t)
                }
            }, {
                key: "values",
                value: function e() {
                    const t = this.getStack();
                    return Object.values(t)
                }
            }, {
                key: "size",
                get: function() {
                    const e = this.getStack();
                    return Object.keys(e).length
                }
            }]);
            return e
        }();
        let qe = function(e) {
            babelHelpers.inherits(t, e);
            function t(...e) {
                var r;
                babelHelpers.classCallCheck(this, t);
                r = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this, ...e));
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "storage", new Ye);
                return r
            }
            return t
        }($e);
        let Je = function e() {
            babelHelpers.classCallCheck(this, e)
        };
        babelHelpers.defineProperty(Je, "MemoryCache", Ve);
        babelHelpers.defineProperty(Je, "LocalStorageCache", qe);
        function Ze(e) {
            if (i.isStringFilled(e)) {
                return e.split(".").reduce(((e,t)=>{
                    t.split(/\[['"]?(.+?)['"]?\]/g).forEach((t=>{
                        if (i.isStringFilled(t)) {
                            e.push(t)
                        }
                    }
                    ));
                    return e
                }
                ), [])
            }
            return []
        }
        let Ke = function() {
            function e(t={}) {
                babelHelpers.classCallCheck(this, e);
                if (i.isPlainObject(t)) {
                    Object.assign(this, t)
                }
            }
            babelHelpers.createClass(e, [{
                key: "get",
                value: function e(t, r=null) {
                    const n = Ze(t);
                    return n.reduce(((e,t)=>{
                        if (!i.isNil(e) && e !== r) {
                            if (!i.isUndefined(e[t])) {
                                return e[t]
                            }
                            return r
                        }
                        return e
                    }
                    ), this)
                }
            }]);
            return e
        }();
        function Qe(e) {
            if (i.isObject(e)) {
                Object.values(e).forEach((e=>{
                    Qe(e)
                }
                ));
                return Object.freeze(e)
            }
            return e
        }
        const et = new Map;
        let tt = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "getSettings",
                value: function e(t) {
                    if (i.isStringFilled(t)) {
                        if (et.has(t)) {
                            return et.get(t)
                        }
                        const e = document.querySelector(`script[data-extension="${t}"]`);
                        if (i.isDomNode(e)) {
                            const r = (()=>{
                                try {
                                    return new Ke(JSON.parse(e.innerHTML))
                                } catch (e) {
                                    return new Ke
                                }
                            }
                            )();
                            const n = Qe(r);
                            et.set(t, n);
                            return n
                        }
                    }
                    return Qe(new Ke)
                }
            }]);
            return e
        }();
        let rt;
        function nt(e, t) {
            it(e, t);
            t.add(e)
        }
        function it(e, t) {
            if (t.has(e)) {
                throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
        }
        function at(e, t, r) {
            if (!t.has(e)) {
                throw new TypeError("attempted to get private field on non-instance")
            }
            return r
        }
        var st = new WeakSet;
        rt = Symbol.iterator;
        let ot = function() {
            function e(t=null) {
                babelHelpers.classCallCheck(this, e);
                nt(this, st);
                babelHelpers.defineProperty(this, "comparator", null);
                babelHelpers.defineProperty(this, "items", []);
                this.comparator = i.isFunction(t) ? t : null
            }
            babelHelpers.createClass(e, [{
                key: "add",
                value: function e(t) {
                    let r = -1;
                    if (this.comparator) {
                        r = at(this, st, ut).call(this, t);
                        this.items.splice(r, 0, t)
                    } else {
                        this.items.push(t)
                    }
                    return r
                }
            }, {
                key: "has",
                value: function e(t) {
                    return this.items.includes(t)
                }
            }, {
                key: "getIndex",
                value: function e(t) {
                    return this.items.indexOf(t)
                }
            }, {
                key: "getByIndex",
                value: function e(t) {
                    if (i.isNumber(t) && t >= 0) {
                        const e = this.items[t];
                        return i.isUndefined(e) ? null : e
                    }
                    return null
                }
            }, {
                key: "getFirst",
                value: function e() {
                    const t = this.items[0];
                    return i.isUndefined(t) ? null : t
                }
            }, {
                key: "getLast",
                value: function e() {
                    const t = this.items[this.count() - 1];
                    return i.isUndefined(t) ? null : t
                }
            }, {
                key: "count",
                value: function e() {
                    return this.items.length
                }
            }, {
                key: "delete",
                value: function e(t) {
                    const r = this.getIndex(t);
                    if (r !== -1) {
                        this.items.splice(r, 1);
                        return true
                    }
                    return false
                }
            }, {
                key: "clear",
                value: function e() {
                    this.items = []
                }
            }, {
                key: rt,
                value: function() {
                    return this.items[Symbol.iterator]()
                }
            }, {
                key: "forEach",
                value: function e(t, r) {
                    return this.items.forEach(t, r)
                }
            }, {
                key: "getAll",
                value: function e() {
                    return this.items
                }
            }, {
                key: "getComparator",
                value: function e() {
                    return this.comparator
                }
            }, {
                key: "sort",
                value: function e() {
                    const t = this.getComparator();
                    if (t === null) {
                        return
                    }
                    const r = this.items.length;
                    const n = new Array(r);
                    for (let e = 0; e < r; e++) {
                        n[e] = e
                    }
                    n.sort(((e,r)=>t(this.items[e], this.items[r]) || e - r));
                    for (let e = 0; e < r; e++) {
                        n[e] = this.items[n[e]]
                    }
                    for (let e = 0; e < r; e++) {
                        this.items[e] = n[e]
                    }
                }
            }]);
            return e
        }();
        function ut(e) {
            let t = 0;
            let r = this.items.length;
            while (t < r) {
                const n = Math.floor((t + r) / 2);
                if (this.comparator(this.items[n], e) >= 0) {
                    r = n
                } else {
                    t = n + 1
                }
            }
            return t
        }
        let lt = function(e) {
            babelHelpers.inherits(t, e);
            function t(e, r={}) {
                var n;
                babelHelpers.classCallCheck(this, t);
                n = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(t).call(this));
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "sort", 0);
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "alwaysOnTop", false);
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "zIndex", 0);
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "element", null);
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "overlay", null);
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "overlayGap", -5);
                babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "stack", null);
                n.setEventNamespace("BX.Main.ZIndexManager.Component");
                if (!i.isElementNode(e)) {
                    throw new Error("ZIndexManager.Component: The argument 'element' must be a DOM element.")
                }
                n.element = e;
                const a = i.isPlainObject(r) ? r : {};
                n.setAlwaysOnTop(a.alwaysOnTop);
                n.setOverlay(a.overlay);
                n.setOverlayGap(a.overlayGap);
                n.subscribeFromOptions(a.events);
                return n
            }
            babelHelpers.createClass(t, [{
                key: "getSort",
                value: function e() {
                    return this.sort
                }
            }, {
                key: "setSort",
                value: function e(t) {
                    if (i.isNumber(t)) {
                        this.sort = t
                    }
                }
            }, {
                key: "setStack",
                value: function e(t) {
                    this.stack = t
                }
            }, {
                key: "getStack",
                value: function e() {
                    return this.stack
                }
            }, {
                key: "getZIndex",
                value: function e() {
                    return this.zIndex
                }
            }, {
                key: "setZIndex",
                value: function e(t) {
                    const r = this.getZIndex() !== t;
                    this.getElement().style.setProperty("z-index", t, "important");
                    this.zIndex = t;
                    if (this.getOverlay() !== null) {
                        this.getOverlay().style.setProperty("z-index", t + this.getOverlayGap(), "important")
                    }
                    if (r) {
                        this.emit("onZIndexChange", {
                            component: this
                        })
                    }
                }
            }, {
                key: "getAlwaysOnTop",
                value: function e() {
                    return this.alwaysOnTop
                }
            }, {
                key: "setAlwaysOnTop",
                value: function e(t) {
                    if (i.isNumber(t) || i.isBoolean(t)) {
                        this.alwaysOnTop = t
                    }
                }
            }, {
                key: "getElement",
                value: function e() {
                    return this.element
                }
            }, {
                key: "setOverlay",
                value: function e(t, r) {
                    if (i.isElementNode(t) || t === null) {
                        this.overlay = t;
                        this.setOverlayGap(r);
                        if (this.getStack()) {
                            this.getStack().sort()
                        }
                    }
                }
            }, {
                key: "getOverlay",
                value: function e() {
                    return this.overlay
                }
            }, {
                key: "setOverlayGap",
                value: function e(t) {
                    if (i.isNumber(t)) {
                        this.overlayGap = t
                    }
                }
            }, {
                key: "getOverlayGap",
                value: function e() {
                    return this.overlayGap
                }
            }]);
            return t
        }(ue);
        let ct = function() {
            function e(t) {
                babelHelpers.classCallCheck(this, e);
                babelHelpers.defineProperty(this, "container", null);
                babelHelpers.defineProperty(this, "components", null);
                babelHelpers.defineProperty(this, "elements", new WeakMap);
                babelHelpers.defineProperty(this, "baseIndex", 1e3);
                babelHelpers.defineProperty(this, "baseStep", 50);
                babelHelpers.defineProperty(this, "sortCount", 0);
                if (!i.isDomNode(t)) {
                    throw new Error("ZIndexManager.Stack: The 'container' argument must be a DOM element.")
                }
                this.container = t;
                const r = (e,t)=>{
                    let r = (e.getAlwaysOnTop() || 0) - (t.getAlwaysOnTop() || 0);
                    if (!r) {
                        r = e.getSort() - t.getSort()
                    }
                    return r
                }
                ;
                this.components = new ot(r)
            }
            babelHelpers.createClass(e, [{
                key: "getBaseIndex",
                value: function e() {
                    return this.baseIndex
                }
            }, {
                key: "setBaseIndex",
                value: function e(t) {
                    if (i.isNumber(t) && t >= 0) {
                        this.baseIndex = t;
                        this.sort()
                    }
                }
            }, {
                key: "setBaseStep",
                value: function e(t) {
                    if (i.isNumber(t) && t > 0) {
                        this.baseStep = t;
                        this.sort()
                    }
                }
            }, {
                key: "getBaseStep",
                value: function e() {
                    return this.baseStep
                }
            }, {
                key: "register",
                value: function e(t, r={}) {
                    if (this.getComponent(t)) {
                        console.warn("ZIndexManager: You cannot register the element twice.", t);
                        return this.getComponent(t)
                    }
                    const n = new lt(t,r);
                    n.setStack(this);
                    n.setSort(++this.sortCount);
                    this.elements.set(t, n);
                    this.components.add(n);
                    this.sort();
                    return n
                }
            }, {
                key: "unregister",
                value: function e(t) {
                    const r = this.elements.get(t);
                    this.components.delete(r);
                    this.elements.delete(t);
                    this.sort()
                }
            }, {
                key: "getComponent",
                value: function e(t) {
                    return this.elements.get(t) || null
                }
            }, {
                key: "getComponents",
                value: function e() {
                    return this.components.getAll()
                }
            }, {
                key: "getMaxZIndex",
                value: function e() {
                    const t = this.components.getLast();
                    return t ? t.getZIndex() : this.baseIndex
                }
            }, {
                key: "sort",
                value: function e() {
                    this.components.sort();
                    let t = this.baseIndex;
                    this.components.forEach((e=>{
                        e.setZIndex(t);
                        t += this.baseStep
                    }
                    ))
                }
            }, {
                key: "bringToFront",
                value: function e(t) {
                    const r = this.getComponent(t);
                    if (!r) {
                        console.error("ZIndexManager: element was not found in the stack.", t);
                        return null
                    }
                    r.setSort(++this.sortCount);
                    this.sort();
                    return r
                }
            }]);
            return e
        }();
        function ft(e, t, r) {
            dt(e, t);
            return r
        }
        function dt(e, t) {
            if (e !== t) {
                throw new TypeError("Private static access of wrong provenance")
            }
        }
        let pt = function() {
            function e() {
                babelHelpers.classCallCheck(this, e)
            }
            babelHelpers.createClass(e, null, [{
                key: "register",
                value: function t(r, n={}) {
                    const i = ft(this, e, ht).call(this, r);
                    if (!i) {
                        return null
                    }
                    const a = this.getOrAddStack(i);
                    return a.register(r, n)
                }
            }, {
                key: "unregister",
                value: function t(r) {
                    const n = ft(this, e, ht).call(this, r);
                    const i = this.getStack(n);
                    if (i) {
                        i.unregister(r)
                    }
                }
            }, {
                key: "addStack",
                value: function e(t) {
                    const r = new ct(t);
                    this.stacks.set(t, r);
                    return r
                }
            }, {
                key: "getStack",
                value: function e(t) {
                    return this.stacks.get(t) || null
                }
            }, {
                key: "getOrAddStack",
                value: function e(t) {
                    return this.getStack(t) || this.addStack(t)
                }
            }, {
                key: "getComponent",
                value: function t(r) {
                    const n = ft(this, e, ht).call(this, r, true);
                    if (!n) {
                        return null
                    }
                    const i = this.getStack(n);
                    return i ? i.getComponent(r) : null
                }
            }, {
                key: "bringToFront",
                value: function t(r) {
                    const n = ft(this, e, ht).call(this, r);
                    const i = this.getStack(n);
                    if (i) {
                        return i.bringToFront(r)
                    }
                    return null
                }
            }]);
            return e
        }();
        function ht(e, t=false) {
            if (!i.isElementNode(e)) {
                if (!t) {
                    console.error("ZIndexManager: The argument 'element' must be a DOM element.", e)
                }
                return null
            } else if (!i.isElementNode(e.parentNode)) {
                if (!t) {
                    console.error("ZIndexManager: The 'element' doesn't have a parent node.", e)
                }
                return null
            }
            return e.parentNode
        }
        babelHelpers.defineProperty(pt, "stacks", new WeakMap);
        var vt = {
            OrderedArray: ot
        };
        function yt(e) {
            if (i.isString(e)) {
                return document.getElementById(e)
            }
            return e
        }
        function mt(e) {
            if (i.isElementNode(e)) {
                return e.ownerDocument.parentWindow || e.ownerDocument.defaultView || window
            }
            if (i.isDomNode(e)) {
                return e.parentWindow || e.defaultView || window
            }
            return window
        }
        const {getClass: gt, namespace: bt} = a;
        const wt = Se;
        const {replace: xt, remove: St, clean: Et, insertBefore: Tt, insertAfter: Bt, append: jt, prepend: Ot, style: Xt, adjust: kt, create: At, isShown: Nt} = ve;
        const Ct = function e() {
            ve.addClass(...q.merge([], Array.from(arguments), [yt(arguments[0])]))
        };
        const Pt = function e() {
            ve.removeClass(...q.merge(Array.from(arguments), [yt(arguments[0])]))
        };
        const _t = function e() {
            return ve.hasClass(...q.merge(Array.from(arguments), [yt(arguments[0])]))
        };
        const It = function e() {
            ve.toggleClass(...q.merge(Array.from(arguments), [yt(arguments[0])]))
        };
        const Lt = (e,t=false)=>{
            const r = yt(e);
            if (i.isDomNode(r)) {
                ve.clean(r);
                if (t) {
                    ve.remove(r);
                    return r
                }
            }
            return r
        }
        ;
        const Mt = xe.Cookie.get;
        const Dt = (e,t,r={})=>{
            const n = {
                ...r
            };
            if (i.isNumber(n.expires)) {
                n.expires /= 3600 * 24
            }
            xe.Cookie.set(e, t, n)
        }
        ;
        const {bind: Ft, unbind: Rt, unbindAll: Ht, bindOnce: Wt, ready: zt} = fe;
        const {debugState: Gt, isDebugEnabled: Ut, default: $t} = B;
        const Vt = e=>{
            if (e) {
                x()
            } else {
                S()
            }
        }
        ;
        const {clone: Yt, loadExtension: qt, debounce: Jt, throttle: Zt, html: Kt} = q;
        const Qt = {
            ...Object.getOwnPropertyNames(i).filter((e=>!["name", "length", "prototype", "caller", "arguments"].includes(e))).reduce(((e,t)=>{
                e[t] = i[t];
                return e
            }
            ), {}),
            isNotEmptyString: e=>i.isString(e) && e !== "",
            isNotEmptyObject: e=>i.isObjectLike(e) && Object.keys(e).length > 0,
            isMapKey: i.isObject,
            stringToInt: e=>{
                const t = parseInt(e);
                return !Number.isNaN(t) ? t : 0
            }
        };
        const er = {
            IsOpera: me.isOpera,
            IsIE: me.isIE,
            IsIE6: me.isIE6,
            IsIE7: me.isIE7,
            IsIE8: me.isIE8,
            IsIE9: me.isIE9,
            IsIE10: me.isIE10,
            IsIE11: me.isIE11,
            IsSafari: me.isSafari,
            IsFirefox: me.isFirefox,
            IsChrome: me.isChrome,
            DetectIeVersion: me.detectIEVersion,
            IsMac: me.isMac,
            IsAndroid: me.isAndroid,
            isIPad: me.isIPad,
            isIPhone: me.isIPhone,
            IsIOS: me.isIOS,
            IsMobile: me.isMobile,
            isRetina: me.isRetina,
            IsDoctype: me.isDoctype,
            SupportLocalStorage: me.isLocalStorageSupported,
            addGlobalClass: me.addGlobalClass,
            DetectAndroidVersion: me.detectAndroidVersion,
            isPropertySupported: me.isPropertySupported,
            addGlobalFeatures: me.addGlobalFeatures
        };
        const tr = window.BX ? window.BX.ajax : ()=>{}
        ;
        function rr(e=document) {
            return {
                scrollWidth: e.documentElement.scrollWidth,
                scrollHeight: e.documentElement.scrollHeight
            }
        }
        function nr(e=document) {
            const t = mt(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }
        function ir(e=document) {
            const t = mt(e);
            return {
                innerWidth: t.innerWidth,
                innerHeight: t.innerHeight
            }
        }
        function ar(e=document) {
            return {
                ...ir(e),
                ...nr(e),
                ...rr(e)
            }
        }
        function sr(e) {
            return mt(e)
        }
        function or(e, t=false) {
            if (!e) {
                return (new DOMRect).toJSON()
            }
            if (e.ownerDocument === document && !t) {
                const t = e.getBoundingClientRect();
                const r = document.documentElement;
                const {body: n} = document;
                return {
                    top: Math.round(t.top + (r.scrollTop || n.scrollTop)),
                    left: Math.round(t.left + (r.scrollLeft || n.scrollLeft)),
                    width: Math.round(t.right - t.left),
                    height: Math.round(t.bottom - t.top),
                    right: Math.round(t.right + (r.scrollLeft || n.scrollLeft)),
                    bottom: Math.round(t.bottom + (r.scrollTop || n.scrollTop))
                }
            }
            let r = 0;
            let n = 0;
            const i = e.offsetWidth;
            const a = e.offsetHeight;
            let s = true;
            for (; e != null; e = e.offsetParent) {
                if (!s && t && BX.is_relative(e)) {
                    break
                }
                r += e.offsetLeft;
                n += e.offsetTop;
                if (s) {
                    s = false;
                    continue
                }
                r += c.toNumber(ve.style(e, "border-left-width"));
                n += c.toNumber(ve.style(e, "border-top-width"))
            }
            return new DOMRect(r,n,i,a).toJSON()
        }
        function ur(e, t, r) {
            if (i.isString(e)) {
                r = t;
                t = e;
                e = ue.GLOBAL_TARGET
            }
            if (e === window) {
                e = ue.GLOBAL_TARGET
            }
            if (!i.isObject(e)) {
                console.error('The "eventObject" argument must be an object. Received type ' + typeof e + ".");
                return
            }
            if (!i.isStringFilled(t)) {
                console.error('The "eventName" argument must be a string.');
                return
            }
            if (!i.isFunction(r)) {
                console.error('The "eventHandler" argument must be a function. Received type ' + typeof r + ".");
                return
            }
            t = t.toLowerCase();
            ue.subscribe(e, t, r, {
                compatMode: true,
                useGlobalNaming: true
            })
        }
        function lr(e, t, r, n) {
            if (i.isString(e)) {
                n = r;
                r = t;
                t = e;
                e = ue.GLOBAL_TARGET
            }
            if (!i.isObject(e) || e === window) {
                e = ue.GLOBAL_TARGET
            }
            if (!r) {
                r = []
            }
            t = t.toLowerCase();
            const a = new K;
            a.setData(r);
            a.setCompatData(r);
            ue.emit(e, t, a, {
                cloneData: n === true,
                useGlobalNaming: true
            })
        }
        function cr(e, t, r) {
            if (i.isString(e)) {
                r = t;
                t = e;
                e = ue.GLOBAL_TARGET
            }
            if (!i.isFunction(r)) {
                console.error('The "eventHandler" argument must be a function. Received type ' + typeof r + ".");
                return
            }
            if (e === window) {
                e = ue.GLOBAL_TARGET
            }
            t = t.toLowerCase();
            ue.unsubscribe(e, t, r, {
                useGlobalNaming: true
            })
        }
        function fr(e, t) {
            if (i.isString(e)) {
                t = e;
                e = ue.GLOBAL_TARGET
            }
            if (e === window) {
                e = ue.GLOBAL_TARGET
            }
            t = t.toLowerCase();
            ue.unsubscribeAll(e, t, {
                useGlobalNaming: true
            })
        }
        if (typeof global === "object" && global.window && global.window.BX) {
            Object.assign(global.window.BX, e)
        }
        e.Type = i;
        e.Reflection = a;
        e.Text = c;
        e.Dom = ve;
        e.Browser = me;
        e.Event = fe;
        e.Http = xe;
        e.Runtime = q;
        e.Loc = Ee;
        e.Tag = _e;
        e.Uri = Ge;
        e.Validation = Ue;
        e.Cache = Je;
        e.BaseError = Z;
        e.Extension = tt;
        e.ZIndexManager = pt;
        e.Collections = vt;
        e.getClass = gt;
        e.namespace = bt;
        e.message = wt;
        e.replace = xt;
        e.remove = St;
        e.clean = Et;
        e.insertBefore = Tt;
        e.insertAfter = Bt;
        e.append = jt;
        e.prepend = Ot;
        e.style = Xt;
        e.adjust = kt;
        e.create = At;
        e.isShown = Nt;
        e.addClass = Ct;
        e.removeClass = Pt;
        e.hasClass = _t;
        e.toggleClass = It;
        e.cleanNode = Lt;
        e.getCookie = Mt;
        e.setCookie = Dt;
        e.bind = Ft;
        e.unbind = Rt;
        e.unbindAll = Ht;
        e.bindOnce = Wt;
        e.ready = zt;
        e.debugEnableFlag = Gt;
        e.debugStatus = Ut;
        e.debug = $t;
        e.debugEnable = Vt;
        e.clone = Yt;
        e.loadExt = qt;
        e.debounce = Jt;
        e.throttle = Zt;
        e.html = Kt;
        e.type = Qt;
        e.browser = er;
        e.ajax = tr;
        e.GetWindowScrollSize = rr;
        e.GetWindowScrollPos = nr;
        e.GetWindowInnerSize = ir;
        e.GetWindowSize = ar;
        e.GetContext = sr;
        e.pos = or;
        e.addCustomEvent = ur;
        e.onCustomEvent = lr;
        e.removeCustomEvent = cr;
        e.removeAllCustomEvents = fr
    }
    )(this.BX = this.BX || {});
    (function(BX) {
        var proxyList = new WeakMap;
        var deferList = new WeakMap;
        var deniedEvents = [];
        var customEvents = new WeakMap;
        var customEventsCnt = 0;
        var garbageCollectors = [];
        var cssList = [];
        var cssInit = false;
        var jsList = [];
        var jsInit = false;
        var eventTypes = {
            click: "MouseEvent",
            dblclick: "MouseEvent",
            mousedown: "MouseEvent",
            mousemove: "MouseEvent",
            mouseout: "MouseEvent",
            mouseover: "MouseEvent",
            mouseup: "MouseEvent",
            focus: "MouseEvent",
            blur: "MouseEvent"
        };
        var lastWait = [];
        var CHECK_FORM_ELEMENTS = {
            tagName: /^INPUT|SELECT|TEXTAREA|BUTTON$/i
        };
        BX.MSLEFT = 1;
        BX.MSMIDDLE = 2;
        BX.MSRIGHT = 4;
        BX.AM_PM_UPPER = 1;
        BX.AM_PM_LOWER = 2;
        BX.AM_PM_NONE = false;
        BX.ext = function(e) {
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    this[t] = e[t]
                }
            }
        }
        ;
        var r = {
            script: /<script([^>]*)>/gi,
            script_end: /<\/script>/gi,
            script_src: /src=["\']([^"\']+)["\']/i,
            script_type: /type=["\']([^"\']+)["\']/i,
            space: /\s+/,
            ltrim: /^[\s\r\n]+/g,
            rtrim: /[\s\r\n]+$/g,
            style: /<link.*?(rel="stylesheet"|type="text\/css")[^>]*>/i,
            style_href: /href=["\']([^"\']+)["\']/i
        };
        BX.processHTML = function(e, t) {
            var n, i, a, s, o, u = [], l = [];
            var c = [];
            var f = r.script.lastIndex = r.script_end.lastIndex = 0;
            while ((n = r.script.exec(e)) !== null) {
                r.script_end.lastIndex = r.script.lastIndex;
                var d = r.script_end.exec(e);
                if (d === null) {
                    break
                }
                var p = false;
                if ((o = n[1].match(r.script_type)) !== null) {
                    if (o[1] == "text/html" || o[1] == "text/template" || o[1] == "extension/settings") {
                        p = true
                    }
                }
                if (p) {
                    c.push([f, r.script_end.lastIndex - f])
                } else {
                    c.push([f, n.index - f]);
                    var h = t || n[1].indexOf("bxrunfirst") != "-1";
                    if ((a = n[1].match(r.script_src)) !== null) {
                        u.push({
                            bRunFirst: h,
                            isInternal: false,
                            JS: a[1]
                        })
                    } else {
                        var v = n.index + n[0].length;
                        var y = e.substr(v, d.index - v);
                        u.push({
                            bRunFirst: h,
                            isInternal: true,
                            JS: y
                        })
                    }
                }
                f = d.index + 9;
                r.script.lastIndex = f
            }
            c.push([f, f === 0 ? e.length : e.length - f]);
            var m = "";
            for (var g = 0, b = c.length; g < b; g++) {
                if (BX.type.isString(e) && BX.type.isFunction(e.substr)) {
                    m += e.substr(c[g][0], c[g][1])
                }
            }
            while ((i = m.match(r.style)) !== null) {
                if ((s = i[0].match(r.style_href)) !== null && i[0].indexOf('media="') < 0) {
                    l.push(s[1])
                }
                m = m.replace(i[0], "")
            }
            return {
                HTML: m,
                SCRIPT: u,
                STYLE: l
            }
        }
        ;
        BX.extend = function(e, t) {
            var r = function() {};
            r.prototype = t.prototype;
            e.prototype = new r;
            e.prototype.constructor = e;
            e.superclass = t.prototype;
            e.prototype.superclass = t.prototype;
            if (t.prototype.constructor == Object.prototype.constructor) {
                t.prototype.constructor = t
            }
        }
        ;
        BX.is_subclass_of = function(e, t) {
            if (e instanceof t)
                return true;
            if (t.superclass)
                return BX.is_subclass_of(e, t.superclass);
            return false
        }
        ;
        BX.clearNodeCache = function() {
            return false
        }
        ;
        BX.bitrix_sessid = function() {
            return BX.message("bitrix_sessid")
        }
        ;
        BX.createFragment = function(e) {
            var t = document.createDocumentFragment();
            if (!BX.type.isArray(e)) {
                return t
            }
            for (var r = 0; r < e.length; r++) {
                t.appendChild(e[r])
            }
            return t
        }
        ;
        BX.setOpacity = function(e, t) {
            var r = parseFloat(t);
            if (!isNaN(r) && BX.type.isDomNode(e)) {
                r = r < 1 ? r : r / 100;
                BX.style(e, "opacity", r)
            }
        }
        ;
        BX.hoverEvents = function(e) {
            if (e)
                return BX.adjust(e, {
                    events: BX.hoverEvents()
                });
            else
                return {
                    mouseover: BX.hoverEventsHover,
                    mouseout: BX.hoverEventsHout
                }
        }
        ;
        BX.hoverEventsHover = function() {
            BX.addClass(this, "bx-hover");
            this.BXHOVER = true
        }
        ;
        BX.hoverEventsHout = function() {
            BX.removeClass(this, "bx-hover");
            this.BXHOVER = false
        }
        ;
        BX.focusEvents = function(e) {
            if (e)
                return BX.adjust(e, {
                    events: BX.focusEvents()
                });
            else
                return {
                    mouseover: BX.focusEventsFocus,
                    mouseout: BX.focusEventsBlur
                }
        }
        ;
        BX.focusEventsFocus = function() {
            BX.addClass(this, "bx-focus");
            this.BXFOCUS = true
        }
        ;
        BX.focusEventsBlur = function() {
            BX.removeClass(this, "bx-focus");
            this.BXFOCUS = false
        }
        ;
        BX.setUnselectable = function(e) {
            BX.style(e, {
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                KhtmlUserSelect: "none"
            });
            e.setAttribute("unSelectable", "on")
        }
        ;
        BX.setSelectable = function(e) {
            BX.style(e, {
                userSelect: null,
                MozUserSelect: null,
                WebkitUserSelect: null,
                KhtmlUserSelect: null
            });
            e.removeAttribute("unSelectable")
        }
        ;
        BX.styleIEPropertyName = function(e) {
            if (e == "float")
                e = BX.browser.IsIE() ? "styleFloat" : "cssFloat";
            else {
                var t = BX.browser.isPropertySupported(e);
                if (t) {
                    e = t
                } else {
                    var r = /(\-([a-z]){1})/g;
                    if (r.test(e)) {
                        e = e.replace(r, (function() {
                            return arguments[2].toUpperCase()
                        }
                        ))
                    }
                }
            }
            return e
        }
        ;
        BX.focus = function(e) {
            try {
                e.focus();
                return true
            } catch (e) {
                return false
            }
        }
        ;
        BX.firstChild = function(e) {
            return BX.type.isDomNode(e) ? e.firstElementChild : null
        }
        ;
        BX.lastChild = function(e) {
            return BX.type.isDomNode(e) ? e.lastElementChild : null
        }
        ;
        BX.previousSibling = function(e) {
            return BX.type.isDomNode(e) ? e.previousElementSibling : null
        }
        ;
        BX.nextSibling = function(e) {
            return BX.type.isDomNode(e) ? e.nextElementSibling : null
        }
        ;
        BX.findChildrenByClassName = function(e, t, r) {
            if (!e || !e.childNodes)
                return null;
            var n = [];
            if (typeof e.getElementsByClassName == "undefined") {
                r = r !== false;
                n = BX.findChildren(e, {
                    className: t
                }, r)
            } else {
                var a = e.getElementsByClassName(t);
                for (i = 0,
                l = a.length; i < l; i++) {
                    n[i] = a[i]
                }
            }
            return n
        }
        ;
        BX.findChildByClassName = function(e, t, r) {
            if (!e || !e.childNodes)
                return null;
            var n = null;
            if (typeof e.getElementsByClassName == "undefined") {
                r = r !== false;
                n = BX.findChild(e, {
                    className: t
                }, r)
            } else {
                var i = e.getElementsByClassName(t);
                if (i && typeof i[0] != "undefined") {
                    n = i[0]
                } else {
                    n = null
                }
            }
            return n
        }
        ;
        BX.findChildren = function(e, t, r) {
            return BX.findChild(e, t, r, true)
        }
        ;
        BX.findChild = function(e, t, r, n) {
            if (!e || !e.childNodes)
                return null;
            r = !!r;
            n = !!n;
            var i = e.childNodes.length
              , a = [];
            for (var s = 0; s < i; s++) {
                var o = e.childNodes[s];
                if (_checkNode(o, t)) {
                    if (n)
                        a.push(o);
                    else
                        return o
                }
                if (r == true) {
                    var u = BX.findChild(o, t, r, n);
                    if (u) {
                        if (n)
                            a = BX.util.array_merge(a, u);
                        else
                            return u
                    }
                }
            }
            if (n || a.length > 0)
                return a;
            else
                return null
        }
        ;
        BX.findParent = function(e, t, r) {
            if (!e)
                return null;
            var n = e;
            while (n.parentNode) {
                var i = n.parentNode;
                if (_checkNode(i, t))
                    return i;
                n = i;
                if (!!r && (BX.type.isFunction(r) || typeof r == "object")) {
                    if (BX.type.isElementNode(r)) {
                        if (n == r)
                            break
                    } else {
                        if (_checkNode(n, r))
                            break
                    }
                }
            }
            return null
        }
        ;
        BX.findNextSibling = function(e, t) {
            if (!e)
                return null;
            var r = e;
            while (r.nextSibling) {
                var n = r.nextSibling;
                if (_checkNode(n, t))
                    return n;
                r = n
            }
            return null
        }
        ;
        BX.findPreviousSibling = function(e, t) {
            if (!e)
                return null;
            var r = e;
            while (r.previousSibling) {
                var n = r.previousSibling;
                if (_checkNode(n, t))
                    return n;
                r = n
            }
            return null
        }
        ;
        BX.checkNode = function(e, t) {
            return _checkNode(e, t)
        }
        ;
        BX.findFormElements = function(e) {
            if (BX.type.isString(e))
                e = document.forms[e] || BX(e);
            var t = [];
            if (BX.type.isElementNode(e)) {
                if (e.tagName.toUpperCase() == "FORM") {
                    t = e.elements
                } else {
                    t = BX.findChildren(e, CHECK_FORM_ELEMENTS, true)
                }
            }
            return t
        }
        ;
        BX.isParentForNode = function(e, t) {
            if (BX.type.isDomNode(e) && BX.type.isDomNode(t)) {
                return e.contains(t)
            }
            return false
        }
        ;
        BX.getCaretPosition = function(e) {
            var t = 0;
            if (e.selectionStart || e.selectionStart == 0) {
                t = e.selectionStart
            } else if (document.selection) {
                e.focus();
                var r = document.selection.createRange();
                r.moveStart("character", -e.value.length);
                t = r.text.length
            }
            return t
        }
        ;
        BX.setCaretPosition = function(e, t) {
            if (!BX.isNodeInDom(e) || BX.isNodeHidden(e) || e.disabled) {
                return
            }
            if (e.setSelectionRange) {
                e.focus();
                e.setSelectionRange(t, t)
            } else if (e.createTextRange) {
                var r = e.createTextRange();
                r.collapse(true);
                r.moveEnd("character", t);
                r.moveStart("character", t);
                r.select()
            }
        }
        ;
        BX.merge = function() {
            var e = Array.prototype.slice.call(arguments);
            if (e.length < 2)
                return {};
            var t = e.shift();
            for (var r = 0; r < e.length; r++) {
                for (var n in e[r]) {
                    if (typeof e[r] == "undefined" || e[r] == null)
                        continue;
                    if (e[r].hasOwnProperty(n)) {
                        if (typeof e[r][n] == "undefined" || e[r][n] == null)
                            continue;
                        if (typeof e[r][n] == "object" && !BX.type.isDomNode(e[r][n]) && typeof e[r][n]["isUIWidget"] == "undefined") {
                            var i = "length"in e[r][n];
                            if (typeof t[n] != "object")
                                t[n] = i ? [] : {};
                            if (i)
                                BX.util.array_merge(t[n], e[r][n]);
                            else
                                BX.merge(t[n], e[r][n])
                        } else
                            t[n] = e[r][n]
                    }
                }
            }
            return t
        }
        ;
        BX.mergeEx = function() {
            var e = Array.prototype.slice.call(arguments);
            if (e.length < 2) {
                return {}
            }
            var t = e.shift();
            for (var r = 0; r < e.length; r++) {
                for (var n in e[r]) {
                    if (typeof e[r] == "undefined" || e[r] == null || !e[r].hasOwnProperty(n)) {
                        continue
                    }
                    if (BX.type.isPlainObject(e[r][n]) && BX.type.isPlainObject(t[n])) {
                        BX.mergeEx(t[n], e[r][n])
                    } else {
                        t[n] = BX.type.isPlainObject(e[r][n]) ? BX.clone(e[r][n]) : e[r][n]
                    }
                }
            }
            return t
        }
        ;
        BX.getEventButton = function(e) {
            e = e || window.event;
            var t = 0;
            if (typeof e.which != "undefined") {
                switch (e.which) {
                case 1:
                    t = t | BX.MSLEFT;
                    break;
                case 2:
                    t = t | BX.MSMIDDLE;
                    break;
                case 3:
                    t = t | BX.MSRIGHT;
                    break
                }
            } else if (typeof e.button != "undefined") {
                t = event.button
            }
            return t || BX.MSLEFT
        }
        ;
        var captured_events = null
          , _bind = null;
        BX.CaptureEvents = function(e, t) {
            if (_bind)
                return;
            _bind = BX.bind;
            captured_events = [];
            BX.bind = function(r, n, i) {
                if (r === e && n === t)
                    captured_events.push(i);
                _bind.apply(this, arguments)
            }
        }
        ;
        BX.CaptureEventsGet = function() {
            if (_bind) {
                BX.bind = _bind;
                var e = captured_events;
                _bind = null;
                captured_events = null;
                return e
            }
            return null
        }
        ;
        BX.fireEvent = function(e, t) {
            var r = false
              , n = null;
            if (BX.type.isDomNode(e)) {
                r = true;
                if (document.createEventObject) {
                    if (eventTypes[t] != "MouseEvent") {
                        n = document.createEventObject();
                        n.type = t;
                        r = e.fireEvent("on" + t, n)
                    }
                    if (e[t]) {
                        e[t]()
                    }
                } else {
                    n = null;
                    switch (eventTypes[t]) {
                    case "MouseEvent":
                        n = document.createEvent("MouseEvent");
                        try {
                            n.initMouseEvent(t, true, true, top, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, null)
                        } catch (e) {
                            n.initMouseEvent(t, true, true, window, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, null)
                        }
                        break;
                    default:
                        n = document.createEvent("Event");
                        n.initEvent(t, true, true)
                    }
                    r = e.dispatchEvent(n)
                }
            }
            return r
        }
        ;
        BX.getWheelData = function(e) {
            e = e || window.event;
            e.wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40;
            return e.wheelData
        }
        ;
        BX.proxy_context = null;
        BX.delegate = function(e, t) {
            if (!e || !t)
                return e;
            return function() {
                var r = BX.proxy_context;
                BX.proxy_context = this;
                var n = e.apply(t, arguments);
                BX.proxy_context = r;
                return n
            }
        }
        ;
        BX.delegateLater = function(e, t, r) {
            return function() {
                if (t[e]) {
                    var n = BX.proxy_context;
                    BX.proxy_context = this;
                    var i = t[e].apply(r || t, arguments);
                    BX.proxy_context = n;
                    return i
                }
                return null
            }
        }
        ;
        BX.proxy = function(e, t) {
            return getObjectDelegate(e, t, proxyList)
        }
        ;
        BX.defer = function(e, t) {
            if (!!t)
                return BX.defer_proxy(e, t);
            else
                return function() {
                    var t = arguments;
                    setTimeout((function() {
                        e.apply(this, t)
                    }
                    ), 10)
                }
        }
        ;
        BX.defer_proxy = function(e, t) {
            return getObjectDelegate(e, t, deferList, BX.defer)
        }
        ;
        function getObjectDelegate(e, t, r, n) {
            if (!BX.type.isFunction(e) || !BX.type.isMapKey(t)) {
                return e
            }
            var i = r.get(t);
            if (!i) {
                i = new WeakMap;
                r.set(t, i)
            }
            var a = i.get(e);
            if (!a) {
                a = n ? n(BX.delegate(e, t)) : BX.delegate(e, t);
                i.set(e, a)
            }
            return a
        }
        BX.once = function(e, t, r) {
            var n = function() {
                BX.unbind(e, t, n);
                r.apply(this, arguments)
            };
            return n
        }
        ;
        BX.bindDelegate = function(e, t, r, n) {
            var i = BX.delegateEvent(r, n);
            BX.bind(e, t, i);
            return i
        }
        ;
        BX.delegateEvent = function(e, t) {
            return function(r) {
                r = r || window.event;
                var n = r.target || r.srcElement;
                while (n != this) {
                    if (_checkNode(n, e)) {
                        return t.call(n, r)
                    }
                    if (n && n.parentNode)
                        n = n.parentNode;
                    else
                        break
                }
                return null
            }
        }
        ;
        BX.False = function() {
            return false
        }
        ;
        BX.DoNothing = function() {}
        ;
        BX.denyEvent = function(e, t) {
            deniedEvents.push([e, t, e["on" + t]]);
            e["on" + t] = BX.DoNothing
        }
        ;
        BX.allowEvent = function(e, t) {
            for (var r = 0, n = deniedEvents.length; r < n; r++) {
                if (deniedEvents[r][0] == e && deniedEvents[r][1] == t) {
                    e["on" + t] = deniedEvents[r][2];
                    BX.util.deleteFromArray(deniedEvents, r);
                    return
                }
            }
        }
        ;
        BX.fixEventPageXY = function(e) {
            BX.fixEventPageX(e);
            BX.fixEventPageY(e);
            return e
        }
        ;
        BX.fixEventPageX = function(e) {
            if (e.pageX == null && e.clientX != null) {
                e.pageX = e.clientX + (document.documentElement && document.documentElement.scrollLeft || document.body && document.body.scrollLeft || 0) - (document.documentElement.clientLeft || 0)
            }
            return e
        }
        ;
        BX.fixEventPageY = function(e) {
            if (e.pageY == null && e.clientY != null) {
                e.pageY = e.clientY + (document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0) - (document.documentElement.clientTop || 0)
            }
            return e
        }
        ;
        BX.PreventDefault = function(e) {
            if (!e)
                e = window.event;
            if (e.stopPropagation) {
                e.preventDefault();
                e.stopPropagation()
            } else {
                e.cancelBubble = true;
                e.returnValue = false
            }
            return false
        }
        ;
        BX.eventReturnFalse = function(e) {
            e = e || window.event;
            if (e && e.preventDefault)
                e.preventDefault();
            else
                e.returnValue = false;
            return false
        }
        ;
        BX.eventCancelBubble = function(e) {
            e = e || window.event;
            if (e && e.stopPropagation)
                e.stopPropagation();
            else
                e.cancelBubble = true
        }
        ;
        BX.bindDebouncedChange = function(e, t, r, n, i) {
            i = i || window;
            n = n || 300;
            var a = "bx-dc-previous-value";
            BX.data(e, a, e.value);
            var s = function(t, r) {
                var n = BX.data(e, a);
                if (typeof n == "undefined" || n != r) {
                    if (typeof i != "object")
                        t(r);
                    else
                        t.apply(i, [r])
                }
            };
            var o = BX.debounce((function() {
                var r = e.value;
                s(t, r);
                BX.data(e, a, r)
            }
            ), n);
            BX.bind(e, "keyup", o);
            BX.bind(e, "change", o);
            BX.bind(e, "input", o);
            if (BX.type.isFunction(r)) {
                var u = function() {
                    s(r, e.value)
                };
                BX.bind(e, "keyup", u);
                BX.bind(e, "change", u);
                BX.bind(e, "input", u)
            }
        }
        ;
        BX.parseJSON = function(data, context) {
            var result = null;
            if (BX.type.isNotEmptyString(data)) {
                try {
                    if (data.indexOf("\n") >= 0)
                        eval("result = " + data);
                    else
                        result = new Function("return " + data)()
                } catch (e) {
                    BX.onCustomEvent(context, "onParseJSONFailure", [data, context])
                }
            } else if (BX.type.isPlainObject(data)) {
                return data
            }
            return result
        }
        ;
        BX.submit = function(e, t, r, n) {
            t = t || "save";
            if (!e["BXFormSubmit_" + t]) {
                e["BXFormSubmit_" + t] = e.appendChild(BX.create("INPUT", {
                    props: {
                        type: "submit",
                        name: t,
                        value: r || "Y"
                    },
                    style: {
                        display: "none"
                    }
                }))
            }
            if (e.sessid)
                e.sessid.value = BX.bitrix_sessid();
            setTimeout(BX.delegate((function() {
                BX.fireEvent(this, "click");
                if (n)
                    n()
            }
            ), e["BXFormSubmit_" + t]), 10)
        }
        ;
        BX.show = function(e, t) {
            if (e.BXDISPLAY || !_checkDisplay(e, t)) {
                e.style.display = e.BXDISPLAY
            }
        }
        ;
        BX.hide = function(e, t) {
            if (!e.BXDISPLAY)
                _checkDisplay(e, t);
            e.style.display = "none"
        }
        ;
        BX.toggle = function(e, t) {
            if (!t && BX.type.isElementNode(e)) {
                var r = true;
                if (e.BXDISPLAY)
                    r = !_checkDisplay(e);
                else
                    r = e.style.display == "none";
                if (r)
                    BX.show(e);
                else
                    BX.hide(e)
            } else if (BX.type.isArray(t)) {
                for (var n = 0, i = t.length; n < i; n++) {
                    if (e == t[n]) {
                        e = t[n == i - 1 ? 0 : n + 1];
                        break
                    }
                }
                if (n == i)
                    e = t[0]
            }
            return e
        }
        ;
        function _checkDisplay(e, t) {
            if (typeof t != "undefined")
                e.BXDISPLAY = t;
            var r = e.style.display || BX.style(e, "display");
            if (r != "none") {
                e.BXDISPLAY = e.BXDISPLAY || r;
                return true
            } else {
                e.BXDISPLAY = e.BXDISPLAY || "block";
                return false
            }
        }
        BX.util = {
            array_values: function(e) {
                if (!BX.type.isArray(e))
                    return BX.util._array_values_ob(e);
                var t = [];
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] !== null && typeof e[r] != "undefined")
                        t.push(e[r]);
                return t
            },
            _array_values_ob: function(e) {
                var t = [];
                for (var r in e)
                    if (e[r] !== null && typeof e[r] != "undefined")
                        t.push(e[r]);
                return t
            },
            array_keys: function(e) {
                if (!BX.type.isArray(e))
                    return BX.util._array_keys_ob(e);
                var t = [];
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] !== null && typeof e[r] != "undefined")
                        t.push(r);
                return t
            },
            _array_keys_ob: function(e) {
                var t = [];
                for (var r in e)
                    if (e[r] !== null && typeof e[r] != "undefined")
                        t.push(r);
                return t
            },
            object_keys: function(e) {
                var t = [];
                for (var r in e) {
                    if (e.hasOwnProperty(r)) {
                        t.push(r)
                    }
                }
                return t
            },
            array_merge: function(e, t) {
                if (!BX.type.isArray(e))
                    e = [];
                if (!BX.type.isArray(t))
                    t = [];
                var r = e.length
                  , n = 0;
                if (typeof t.length === "number") {
                    for (var i = t.length; n < i; n++) {
                        e[r++] = t[n]
                    }
                } else {
                    while (t[n] !== undefined) {
                        e[r++] = t[n++]
                    }
                }
                e.length = r;
                return e
            },
            array_flip: function(e) {
                var t = {};
                for (var r in e) {
                    t[e[r]] = r
                }
                return t
            },
            array_diff: function(e, t, r) {
                r = BX.type.isFunction(r) ? r : null;
                var n, i, a, s, o = {}, u = [];
                for (n = 0,
                i = t.length; n < i; n++) {
                    a = t[n];
                    s = r ? r(a) : a;
                    o[s] = true
                }
                for (n = 0,
                i = e.length; n < i; n++) {
                    a = e[n];
                    s = r ? r(a) : a;
                    if (typeof o[s] === "undefined") {
                        u.push(a)
                    }
                }
                return u
            },
            array_unique: function(e) {
                var t = 0, r, n = e.length;
                if (n < 2)
                    return e;
                for (; t < n - 1; t++) {
                    for (r = t + 1; r < n; r++) {
                        if (e[t] == e[r]) {
                            e.splice(r--, 1);
                            n--
                        }
                    }
                }
                return e
            },
            in_array: function(e, t) {
                for (var r = 0; r < t.length; r++) {
                    if (t[r] == e)
                        return true
                }
                return false
            },
            array_search: function(e, t) {
                for (var r = 0; r < t.length; r++) {
                    if (t[r] == e)
                        return r
                }
                return -1
            },
            object_search_key: function(e, t) {
                if (typeof t[e] != "undefined")
                    return t[e];
                for (var r in t) {
                    if (typeof t[r] == "object") {
                        var n = BX.util.object_search_key(e, t[r]);
                        if (n !== false)
                            return n
                    }
                }
                return false
            },
            trim: function(e) {
                if (BX.type.isString(e)) {
                    return e.trim()
                }
                return e
            },
            urlencode: function(e) {
                return encodeURIComponent(e)
            },
            deleteFromArray: function(e, t) {
                return e.slice(0, t).concat(e.slice(t + 1))
            },
            insertIntoArray: function(e, t, r) {
                return e.slice(0, t).concat([r]).concat(e.slice(t))
            },
            htmlspecialchars: function(e) {
                return BX.Text.encode(e)
            },
            htmlspecialcharsback: function(e) {
                return BX.Text.decode(e)
            },
            preg_quote: function(e, t) {
                if (!e.replace)
                    return e;
                return e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\" + (t || "") + "-]","g"), "\\$&")
            },
            jsencode: function(e) {
                if (!e || !e.replace)
                    return e;
                var t = [{
                    c: "\\\\",
                    r: "\\\\"
                }, {
                    c: "\\t",
                    r: "\\t"
                }, {
                    c: "\\n",
                    r: "\\n"
                }, {
                    c: "\\r",
                    r: "\\r"
                }, {
                    c: '"',
                    r: '\\"'
                }, {
                    c: "'",
                    r: "\\'"
                }, {
                    c: "<",
                    r: "\\x3C"
                }, {
                    c: ">",
                    r: "\\x3E"
                }, {
                    c: "\\u2028",
                    r: "\\u2028"
                }, {
                    c: "\\u2029",
                    r: "\\u2029"
                }];
                for (var r = 0; r < t.length; r++)
                    e = e.replace(new RegExp(t[r].c,"g"), t[r].r);
                return e
            },
            getCssName: function(e) {
                if (!BX.type.isNotEmptyString(e)) {
                    return ""
                }
                return e.replace(/[A-Z]/g, (function(e) {
                    return "-" + e.toLowerCase()
                }
                ))
            },
            getJsName: function(e) {
                var t = /\-([a-z]){1}/g;
                if (t.test(e)) {
                    return e.replace(t, (function(e, t) {
                        return t.toUpperCase()
                    }
                    ))
                }
                return e
            },
            nl2br: function(e) {
                if (!e || !e.replace)
                    return e;
                return e.replace(/([^>])\n/g, "$1<br/>")
            },
            str_pad: function(e, t, r, n) {
                r = r || " ";
                n = n || "right";
                e = e.toString();
                if (n === "left") {
                    return BX.util.str_pad_left(e, t, r)
                }
                return BX.util.str_pad_right(e, t, r)
            },
            str_pad_left: function(e, t, r) {
                return e.toString().padStart(t, r)
            },
            str_pad_right: function(e, t, r) {
                return e.toString().padEnd(t, r)
            },
            strip_tags: function(e) {
                return e.split(/<[^>]+>/g).join("")
            },
            strip_php_tags: function(e) {
                return e.replace(/<\?(.|[\r\n])*?\?>/g, "")
            },
            popup: function(e, t, r) {
                var n, i;
                if (BX.browser.IsOpera()) {
                    n = document.body.offsetWidth;
                    i = document.body.offsetHeight
                } else {
                    n = screen.width;
                    i = screen.height
                }
                return window.open(e, "", "status=no,scrollbars=yes,resizable=yes,width=" + t + ",height=" + r + ",top=" + Math.floor((i - r) / 2 - 14) + ",left=" + Math.floor((n - t) / 2 - 5))
            },
            shuffle: function(e) {
                var t, r;
                var n = e.length;
                while (0 !== n) {
                    r = Math.floor(Math.random() * n);
                    n -= 1;
                    t = e[n];
                    e[n] = e[r];
                    e[r] = t
                }
                return e
            },
            objectSort: function(e, t, r) {
                r = r == "asc" ? "asc" : "desc";
                var n = [], i;
                for (i in e) {
                    if (e.hasOwnProperty(i) && e[i][t]) {
                        n.push([i, e[i][t]])
                    }
                }
                if (r == "asc") {
                    n.sort((function(e, t) {
                        var r, n;
                        if (BX.type.isDate(e[1])) {
                            r = e[1].getTime()
                        } else if (!isNaN(e[1])) {
                            r = parseInt(e[1])
                        } else {
                            r = e[1].toString().toLowerCase()
                        }
                        if (BX.type.isDate(t[1])) {
                            n = t[1].getTime()
                        } else if (!isNaN(t[1])) {
                            n = parseInt(t[1])
                        } else {
                            n = t[1].toString().toLowerCase()
                        }
                        if (r > n)
                            return 1;
                        else if (r < n)
                            return -1;
                        else
                            return 0
                    }
                    ))
                } else {
                    n.sort((function(e, t) {
                        var r, n;
                        if (BX.type.isDate(e[1])) {
                            r = e[1].getTime()
                        } else if (!isNaN(e[1])) {
                            r = parseInt(e[1])
                        } else {
                            r = e[1].toString().toLowerCase()
                        }
                        if (BX.type.isDate(t[1])) {
                            n = t[1].getTime()
                        } else if (!isNaN(t[1])) {
                            n = parseInt(t[1])
                        } else {
                            n = t[1].toString().toLowerCase()
                        }
                        if (r < n)
                            return 1;
                        else if (r > n)
                            return -1;
                        else
                            return 0
                    }
                    ))
                }
                var a = Array();
                for (i = 0; i < n.length; i++) {
                    a.push(e[n[i][0]])
                }
                return a
            },
            objectMerge: function() {
                return BX.mergeEx.apply(window, arguments)
            },
            objectClone: function(e) {
                return BX.clone(e, true)
            },
            hex2rgb: function(e) {
                var t = e.replace(/[# ]/g, "").replace(/^(.)(.)(.)$/, "$1$1$2$2$3$3").match(/.{2}/g);
                for (var r = 0; r < 3; r++) {
                    t[r] = parseInt(t[r], 16)
                }
                return {
                    r: t[0],
                    g: t[1],
                    b: t[2]
                }
            },
            remove_url_param: function(e, t) {
                return BX.Uri.removeParam(e, t)
            },
            add_url_param: function(e, t) {
                var r = Object.entries(t).reduce((function(e, t) {
                    e[t[0]] = BX.type.isArray(t[1]) ? t[1].join() : t[1];
                    return e
                }
                ), {});
                return BX.Uri.addParam(e, r)
            },
            buildQueryString: function(e) {
                var t = "";
                for (var r in e) {
                    var n = e[r];
                    if (BX.type.isArray(n)) {
                        n.forEach((function(e, n) {
                            t += encodeURIComponent(r + "[" + n + "]") + "=" + encodeURIComponent(e) + "&"
                        }
                        ))
                    } else {
                        t += encodeURIComponent(r) + "=" + encodeURIComponent(n) + "&"
                    }
                }
                if (t.length > 0) {
                    t = t.substr(0, t.length - 1)
                }
                return t
            },
            even: function(e) {
                return parseInt(e) % 2 == 0
            },
            hashCode: function(e) {
                if (!BX.type.isNotEmptyString(e)) {
                    return 0
                }
                var t = 0;
                for (var r = 0; r < e.length; r++) {
                    var n = e.charCodeAt(r);
                    t = (t << 5) - t + n;
                    t = t & t
                }
                return t
            },
            getRandomString: function(e) {
                return BX.Text.getRandom(e)
            },
            number_format: function(e, t, r, n) {
                var i, a, s, o, u, l = "";
                t = Math.abs(t);
                if (isNaN(t) || t < 0) {
                    t = 2
                }
                r = r || ",";
                if (typeof n === "undefined")
                    n = ".";
                e = (+e || 0).toFixed(t);
                if (e < 0) {
                    l = "-";
                    e = -e
                }
                i = parseInt(e, 10) + "";
                a = i.length > 3 ? i.length % 3 : 0;
                u = a ? i.substr(0, a) + n : "";
                s = i.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + n);
                o = t ? r + Math.abs(e - i).toFixed(t).replace(/-/, "0").slice(2) : "";
                return l + u + s + o
            },
            getExtension: function(e) {
                e = e || "";
                var t = e.split("?")[0].split(".");
                return t[t.length - 1].toLowerCase()
            },
            addObjectToForm: function(e, t, r) {
                if (!BX.type.isString(r)) {
                    r = ""
                }
                for (var n in e) {
                    if (!e.hasOwnProperty(n)) {
                        continue
                    }
                    var i = e[n];
                    var a = r !== "" ? r + "[" + n + "]" : n;
                    if (BX.type.isArray(i)) {
                        var s = {};
                        for (var o = 0; o < i.length; o++) {
                            s[o] = i[o]
                        }
                        BX.util.addObjectToForm(s, t, a)
                    } else if (BX.type.isPlainObject(i)) {
                        BX.util.addObjectToForm(i, t, a)
                    } else {
                        i = BX.type.isFunction(i.toString) ? i.toString() : "";
                        if (i !== "") {
                            t.appendChild(BX.create("INPUT", {
                                attrs: {
                                    type: "hidden",
                                    name: a,
                                    value: i
                                }
                            }))
                        }
                    }
                }
            },
            observe: function(e, t) {
                console.error("BX.util.observe: function is no longer supported by browser.");
                return false
            },
            escapeRegExp: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
        };
        BX.validation = {
            checkIfEmail: function(e) {
                var t = "[=a-z0-9_+~'!$&*^`|#%/?{}-]";
                return new RegExp("^\\s*" + t + "+(\\." + t + "+)*@([a-z0-9-]+\\.)+[a-z0-9-]{2,20}\\s*$","i").test(e)
            },
            checkIfPhone: function(e) {
                var t = new RegExp(typeof BX.PhoneNumber === "undefined" ? BX.PhoneNumber.getValidNumberPattern() : "^\\s*\\+?s*[0-9(-)\\s]+\\s*$","i");
                return t.test(e)
            }
        };
        BX.prop = {
            get: function(e, t, r) {
                return e && e.hasOwnProperty(t) ? e[t] : r
            },
            getObject: function(e, t, r) {
                return e && BX.type.isPlainObject(e[t]) ? e[t] : r
            },
            getElementNode: function(e, t, r) {
                return e && BX.type.isElementNode(e[t]) ? e[t] : r
            },
            getArray: function(e, t, r) {
                return e && BX.type.isArray(e[t]) ? e[t] : r
            },
            getFunction: function(e, t, r) {
                return e && BX.type.isFunction(e[t]) ? e[t] : r
            },
            getNumber: function(e, t, r) {
                if (!(e && e.hasOwnProperty(t))) {
                    return r
                }
                var n = e[t];
                if (BX.type.isNumber(n)) {
                    return n
                }
                n = parseFloat(n);
                return !isNaN(n) ? n : r
            },
            getInteger: function(e, t, r) {
                if (!(e && e.hasOwnProperty(t))) {
                    return r
                }
                var n = e[t];
                if (BX.type.isNumber(n)) {
                    return n
                }
                n = parseInt(n);
                return !isNaN(n) ? n : r
            },
            getBoolean: function(e, t, r) {
                if (!(e && e.hasOwnProperty(t))) {
                    return r
                }
                var n = e[t];
                return BX.type.isBoolean(n) ? n : BX.type.isString(n) ? n.toLowerCase() === "true" : !!n
            },
            getString: function(e, t, r) {
                if (!(e && e.hasOwnProperty(t))) {
                    return r
                }
                var n = e[t];
                return BX.type.isString(n) ? n : n ? n.toString() : ""
            },
            extractDate: function(e) {
                if (!BX.type.isDate(e)) {
                    e = new Date
                }
                e.setHours(0);
                e.setMinutes(0);
                e.setSeconds(0);
                e.setMilliseconds(0);
                return e
            }
        };
        BX.isNodeInDom = function(e, t) {
            return e === (t || document) ? true : e.parentNode ? BX.isNodeInDom(e.parentNode) : false
        }
        ;
        BX.isNodeHidden = function(e) {
            if (e === document)
                return false;
            else if (BX.style(e, "display") == "none")
                return true;
            else
                return e.parentNode ? BX.isNodeHidden(e.parentNode) : true
        }
        ;
        BX.evalPack = function(e) {
            while (e.length > 0) {
                var t = e.shift();
                if (t.TYPE == "SCRIPT_EXT" || t.TYPE == "SCRIPT_SRC") {
                    BX.loadScript(t.DATA, (function() {
                        BX.evalPack(e)
                    }
                    ));
                    return
                } else if (t.TYPE == "SCRIPT") {
                    BX.evalGlobal(t.DATA)
                }
            }
        }
        ;
        BX.evalGlobal = function(e) {
            if (e) {
                var t = document.getElementsByTagName("head")[0] || document.documentElement
                  , r = document.createElement("script");
                r.type = "text/javascript";
                if (!BX.browser.IsIE()) {
                    r.appendChild(document.createTextNode(e))
                } else {
                    r.text = e
                }
                t.insertBefore(r, t.firstChild);
                t.removeChild(r)
            }
        }
        ;
        BX.garbage = function(e, t) {
            garbageCollectors.push({
                callback: e,
                context: t
            })
        }
        ;
        BX.GetDocElement = function(e) {
            e = e || document;
            return BX.browser.IsDoctype(e) ? e.documentElement : e.body
        }
        ;
        BX.scrollTop = function(e, t) {
            if (typeof t != "undefined") {
                if (e == window) {
                    throw new Error("scrollTop() for window is not implemented")
                } else
                    e.scrollTop = parseInt(t)
            } else {
                if (e == window)
                    return BX.GetWindowScrollPos().scrollTop;
                return e.scrollTop
            }
        }
        ;
        BX.scrollLeft = function(e, t) {
            if (typeof t != "undefined") {
                if (e == window) {
                    throw new Error("scrollLeft() for window is not implemented")
                } else
                    e.scrollLeft = parseInt(t)
            } else {
                if (e == window)
                    return BX.GetWindowScrollPos().scrollLeft;
                return e.scrollLeft
            }
        }
        ;
        BX.hide_object = function(e) {
            e = BX(e);
            e.style.position = "absolute";
            e.style.top = "-1000px";
            e.style.left = "-1000px";
            e.style.height = "10px";
            e.style.width = "10px"
        }
        ;
        BX.is_relative = function(e) {
            var t = BX.style(e, "position");
            return t == "relative" || t == "absolute"
        }
        ;
        BX.is_float = function(e) {
            var t = BX.style(e, "float");
            return t == "right" || t == "left"
        }
        ;
        BX.is_fixed = function(e) {
            var t = BX.style(e, "position");
            return t == "fixed"
        }
        ;
        BX.width = function(e, t) {
            if (typeof t != "undefined")
                BX.style(e, "width", parseInt(t) + "px");
            else {
                if (e == window)
                    return window.innerWidth;
                return BX.pos(e).width
            }
        }
        ;
        BX.height = function(e, t) {
            if (typeof t != "undefined")
                BX.style(e, "height", parseInt(t) + "px");
            else {
                if (e == window)
                    return window.innerHeight;
                return BX.pos(e).height
            }
        }
        ;
        BX.align = function(e, t, r, n) {
            if (n)
                n = n.toLowerCase();
            else
                n = "";
            var i = document;
            if (BX.type.isElementNode(e)) {
                i = e.ownerDocument;
                e = BX.pos(e)
            }
            var a = e["left"]
              , s = e["bottom"];
            var o = BX.GetWindowScrollPos(i);
            var u = BX.GetWindowInnerSize(i);
            if (u.innerWidth + o.scrollLeft - (e["left"] + t) < 0) {
                if (e["right"] - t >= 0)
                    a = e["right"] - t;
                else
                    a = o.scrollLeft
            }
            if (u.innerHeight + o.scrollTop - (e["bottom"] + r) < 0 || ~n.indexOf("top")) {
                if (e["top"] - r >= 0 || ~n.indexOf("top"))
                    s = e["top"] - r;
                else
                    s = o.scrollTop
            }
            return {
                left: a,
                top: s
            }
        }
        ;
        BX.scrollToNode = function(e) {
            var t = BX(e);
            if (t.scrollIntoView)
                t.scrollIntoView(true);
            else {
                var r = BX.pos(t);
                window.scrollTo(r.left, r.top)
            }
        }
        ;
        BX.showWait = function(e, t) {
            e = BX(e) || document.body || document.documentElement;
            t = t || BX.message("JS_CORE_LOADING");
            var r = e.id || Math.random();
            var n = e.bxmsg = document.body.appendChild(BX.create("DIV", {
                props: {
                    id: "wait_" + r
                },
                style: {
                    background: 'url("/bitrix/js/main/core/images/wait.gif") no-repeat scroll 10px center #fcf7d1',
                    border: "1px solid #E1B52D",
                    color: "black",
                    fontFamily: "Verdana,Arial,sans-serif",
                    fontSize: "11px",
                    padding: "10px 30px 10px 37px",
                    position: "absolute",
                    textAlign: "center"
                },
                text: t
            }));
            BX.ZIndexManager.register(n);
            BX.ZIndexManager.bringToFront(n);
            setTimeout(BX.delegate(_adjustWait, e), 10);
            lastWait[lastWait.length] = n;
            return n
        }
        ;
        BX.closeWait = function(e, t) {
            if (e && !t)
                t = e.bxmsg;
            if (e && !t && BX.hasClass(e, "bx-core-waitwindow"))
                t = e;
            if (e && !t)
                t = BX("wait_" + e.id);
            if (!t)
                t = lastWait.pop();
            if (t && t.parentNode) {
                for (var r = 0, n = lastWait.length; r < n; r++) {
                    if (t == lastWait[r]) {
                        lastWait = BX.util.deleteFromArray(lastWait, r);
                        break
                    }
                }
                BX.ZIndexManager.unregister(t);
                t.parentNode.removeChild(t);
                if (e)
                    e.bxmsg = null;
                BX.cleanNode(t, true)
            }
        }
        ;
        BX.setJSList = function(e) {
            if (BX.type.isArray(e)) {
                e = e.map((function(e) {
                    return normalizeUrl(e)
                }
                ));
                jsList = jsList.concat(e)
            }
        }
        ;
        BX.getJSList = function() {
            initJsList();
            return jsList
        }
        ;
        BX.setCSSList = function(e) {
            if (BX.type.isArray(e)) {
                e = e.map((function(e) {
                    return normalizeUrl(e)
                }
                ));
                cssList = cssList.concat(e)
            }
        }
        ;
        BX.getCSSList = function() {
            initCssList();
            return cssList
        }
        ;
        BX.getJSPath = function(e) {
            return e.replace(/^(http[s]*:)*\/\/[^\/]+/i, "")
        }
        ;
        BX.getCSSPath = function(e) {
            return e.replace(/^(http[s]*:)*\/\/[^\/]+/i, "")
        }
        ;
        BX.getCDNPath = function(e) {
            return e
        }
        ;
        BX.loadScript = function(e, t, r) {
            if (BX.type.isString(e)) {
                e = [e]
            }
            return BX.load(e, t, r)
        }
        ;
        BX.loadCSS = function(e, t, r) {
            if (BX.type.isString(e)) {
                e = [e]
            }
            if (BX.type.isArray(e)) {
                e = e.map((function(e) {
                    return {
                        url: e,
                        ext: "css"
                    }
                }
                ));
                BX.load(e, null, t)
            }
        }
        ;
        const LOADING = 3;
        const LOADED = 4;
        const assets = {};
        BX.load = function(e, t, r) {
            if (!BX.isReady) {
                var n = arguments;
                BX.ready((function() {
                    BX.load.apply(this, n)
                }
                ));
                return null
            }
            r = r || document;
            t = BX.Type.isFunction(t) ? t : ()=>{}
            ;
            return loadAsync(e, t, r)
        }
        ;
        function loadAsync(e, t, r) {
            if (!BX.type.isArray(e)) {
                t();
                return
            }
            function n() {
                const e = a.shift();
                if (e) {
                    load(e, n, r)
                } else if (i()) {
                    t()
                }
            }
            function i() {
                for (const e in s) {
                    if (s[e].state !== LOADED) {
                        return false
                    }
                }
                return true
            }
            const a = [];
            const s = {};
            e.forEach((e=>{
                const t = getAsset(e);
                if (t && t.state !== LOADED) {
                    a.push(t);
                    s[t.name] = t
                }
            }
            ));
            if (a.length > 0) {
                const e = 6;
                const t = Math.min(a.length, e);
                const i = a.splice(0, t);
                i.forEach((e=>{
                    load(e, n, r)
                }
                ))
            } else {
                t()
            }
        }
        function load(e, t, r) {
            t = t || BX.DoNothing;
            if (e.state === LOADED) {
                t();
                return
            }
            e.state = LOADING;
            loadAsset(e, (function() {
                e.state = LOADED;
                t()
            }
            ), r)
        }
        function loadAsset(e, t, r) {
            t = t || BX.DoNothing;
            function n(e) {
                s.onload = s.onreadystatechange = s.onerror = null;
                t()
            }
            function i(n) {
                n = n || window.event;
                if (n.type === "load" || /loaded|complete/.test(s.readyState) && (!r.documentMode || r.documentMode < 9)) {
                    window.clearTimeout(e.errorTimeout);
                    window.clearTimeout(e.cssTimeout);
                    s.onload = s.onreadystatechange = s.onerror = null;
                    t()
                }
            }
            function a() {
                if (e.state !== LOADED && e.cssRetries <= 20) {
                    for (var t = 0, n = r.styleSheets.length; t < n; t++) {
                        if (r.styleSheets[t].href === s.href) {
                            i({
                                type: "load"
                            });
                            return
                        }
                    }
                    e.cssRetries++;
                    e.cssTimeout = window.setTimeout(a, 250)
                }
            }
            let s = null;
            const o = BX.type.isNotEmptyString(e.ext) ? e.ext : BX.util.getExtension(e.url);
            if (o === "css") {
                s = r.createElement("link");
                s.type = "text/" + (e.type || "css");
                s.rel = "stylesheet";
                s.href = e.url;
                e.cssRetries = 0;
                e.cssTimeout = window.setTimeout(a, 500)
            } else {
                s = r.createElement("script");
                s.type = "text/" + (e.type || "javascript");
                s.src = e.url
            }
            s.onload = s.onreadystatechange = i;
            s.onerror = n;
            s.async = false;
            s.defer = false;
            e.errorTimeout = window.setTimeout((function() {
                n({
                    type: "timeout"
                })
            }
            ), 7e3);
            if (o === "css") {
                cssList.push(normalizeMinUrl(normalizeUrl(e.url)))
            } else {
                jsList.push(normalizeMinUrl(normalizeUrl(e.url)))
            }
            let u = null;
            const l = r.head || r.getElementsByTagName("head")[0];
            if (o === "css" && (u = getTemplateLink(l)) !== null) {
                u.parentNode.insertBefore(s, u)
            } else {
                l.insertBefore(s, l.lastChild)
            }
        }
        function getAsset(e) {
            var t = {};
            if (typeof e === "object") {
                t = e;
                t.name = t.name ? t.name : BX.util.hashCode(e.url)
            } else {
                t = {
                    name: BX.util.hashCode(e),
                    url: e
                }
            }
            var r = BX.type.isNotEmptyString(t.ext) ? t.ext : BX.util.getExtension(t.url);
            if (r === "css" && isCssLoaded(t.url) || isScriptLoaded(t.url)) {
                t.state = LOADED
            }
            var n = assets[t.name];
            if (n && n.url === t.url) {
                return n
            }
            assets[t.name] = t;
            return t
        }
        function normalizeUrl(e) {
            if (!BX.type.isNotEmptyString(e)) {
                return ""
            }
            e = BX.getJSPath(e);
            e = e.replace(/\?[0-9]*$/, "");
            return e
        }
        function normalizeMinUrl(e) {
            if (!BX.type.isNotEmptyString(e)) {
                return ""
            }
            var t = e.indexOf(".min");
            return t >= 0 ? e.substr(0, t) + e.substr(t + 4) : e
        }
        function isCssLoaded(e) {
            initCssList();
            e = normalizeUrl(e);
            var t = normalizeMinUrl(e);
            return e !== t && BX.util.in_array(t, cssList) || BX.util.in_array(e, cssList)
        }
        function initCssList() {
            if (!cssInit) {
                var e = document.getElementsByTagName("link");
                if (!!e && e.length > 0) {
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t].getAttribute("href");
                        if (BX.type.isNotEmptyString(r)) {
                            r = normalizeMinUrl(normalizeUrl(r));
                            cssList.push(r)
                        }
                    }
                }
                cssInit = true
            }
        }
        function getTemplateLink(e) {
            var t = function(t) {
                var r = e.getElementsByTagName(t);
                for (var n = 0, i = r.length; n < i; n++) {
                    var a = r[n].getAttribute("data-template-style");
                    if (BX.type.isNotEmptyString(a) && a == "true") {
                        return r[n]
                    }
                }
                return null
            };
            var r = t("link");
            if (r === null) {
                r = t("style")
            }
            return r
        }
        function isScriptLoaded(e) {
            initJsList();
            e = normalizeUrl(e);
            var t = normalizeMinUrl(e);
            return e !== t && BX.util.in_array(t, jsList) || BX.util.in_array(e, jsList)
        }
        function initJsList() {
            if (!jsInit) {
                var e = document.getElementsByTagName("script");
                if (!!e && e.length > 0) {
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t].getAttribute("src");
                        if (BX.type.isNotEmptyString(r)) {
                            r = normalizeMinUrl(normalizeUrl(r));
                            jsList.push(r)
                        }
                    }
                }
                jsInit = true
            }
        }
        function reloadInternal(e, t) {
            if (e === true) {
                t = true;
                e = null
            }
            var r = function() {
                if (BX.PageObject && BX.PageObject.getRootWindow) {
                    return BX.PageObject.getRootWindow()
                }
                return window.top
            }();
            var n = e || r.location.href;
            var i = n.indexOf("#")
              , a = "";
            if (i != -1) {
                a = n.substr(i);
                n = n.substr(0, i)
            }
            if (t && n.indexOf("clear_cache=Y") < 0)
                n += (n.indexOf("?") == -1 ? "?" : "&") + "clear_cache=Y";
            if (a) {
                if (t && (a.substr(0, 5) == "view/" || a.substr(0, 6) == "#view/") && a.indexOf("clear_cache%3DY") < 0)
                    a += (a.indexOf("%3F") == -1 ? "%3F" : "%26") + "clear_cache%3DY";
                n = n.replace(/(\?|\&)_r=[\d]*/, "");
                n += (n.indexOf("?") == -1 ? "?" : "&") + "_r=" + Math.round(Math.random() * 1e4) + a
            }
            r.location.href = n
        }
        BX.reload = function(e, t) {
            if (window !== window.top) {
                BX.Runtime.loadExtension("main.pageobject").then((function() {
                    reloadInternal(e, t)
                }
                ))
            } else {
                reloadInternal(e, t)
            }
        }
        ;
        BX.clearCache = function() {
            BX.showWait();
            BX.reload(true)
        }
        ;
        BX.template = function(e, t, r) {
            BX.ready((function() {
                _processTpl(BX(e), t, r)
            }
            ))
        }
        ;
        BX.isAmPmMode = function(e) {
            if (e === true) {
                return BX.message.AMPM_MODE
            }
            return BX.message.AMPM_MODE !== false
        }
        ;
        BX.formatDate = function(e, t) {
            e = e || new Date;
            var r = e.getHours() || e.getMinutes() || e.getSeconds()
              , n = !!t ? t : r ? BX.message("FORMAT_DATETIME") : BX.message("FORMAT_DATE");
            return n.replace(/YYYY/gi, e.getFullYear()).replace(/MMMM/gi, BX.util.str_pad_left((e.getMonth() + 1).toString(), 2, "0")).replace(/MM/gi, BX.util.str_pad_left((e.getMonth() + 1).toString(), 2, "0")).replace(/DD/gi, BX.util.str_pad_left(e.getDate().toString(), 2, "0")).replace(/HH/gi, BX.util.str_pad_left(e.getHours().toString(), 2, "0")).replace(/MI/gi, BX.util.str_pad_left(e.getMinutes().toString(), 2, "0")).replace(/SS/gi, BX.util.str_pad_left(e.getSeconds().toString(), 2, "0"))
        }
        ;
        BX.formatName = function(e, t, r) {
            e = e || {};
            t = t || "";
            var n = {
                TITLE: e["TITLE"] || "",
                NAME: e["NAME"] || "",
                LAST_NAME: e["LAST_NAME"] || "",
                SECOND_NAME: e["SECOND_NAME"] || "",
                LOGIN: e["LOGIN"] || "",
                NAME_SHORT: e["NAME"] ? e["NAME"].substr(0, 1) + "." : "",
                LAST_NAME_SHORT: e["LAST_NAME"] ? e["LAST_NAME"].substr(0, 1) + "." : "",
                SECOND_NAME_SHORT: e["SECOND_NAME"] ? e["SECOND_NAME"].substr(0, 1) + "." : "",
                EMAIL: e["EMAIL"] || "",
                ID: e["ID"] || "",
                NOBR: "",
                "/NOBR": ""
            }
              , i = t;
            for (var a in n) {
                if (n.hasOwnProperty(a)) {
                    i = i.replace("#" + a + "#", n[a])
                }
            }
            i = i.replace(/([\s]+)/gi, " ").trim();
            if (i == "") {
                i = r == "Y" ? n["LOGIN"] : "";
                i = i == "" ? "Noname" : i
            }
            return i
        }
        ;
        BX.getNumMonth = function(e) {
            var t = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
            var r = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
            var n = e.toUpperCase();
            for (i = 1; i <= 12; i++) {
                if (n == BX.message("MON_" + i).toUpperCase() || n == BX.message("MONTH_" + i).toUpperCase() || n == t[i - 1].toUpperCase() || n == r[i - 1].toUpperCase()) {
                    return i
                }
            }
            return e
        }
        ;
        BX.parseDate = function(e, t, r, n) {
            if (BX.type.isNotEmptyString(e)) {
                if (!r)
                    r = BX.message("FORMAT_DATE");
                if (!n)
                    n = BX.message("FORMAT_DATETIME");
                var i = "";
                for (u = 1; u <= 12; u++) {
                    i = i + "|" + BX.message("MON_" + u)
                }
                var a = new RegExp("([0-9]+|[a-z]+" + i + ")","ig");
                var s = e.match(a), o = r.match(/(DD|MI|MMMM|MM|M|YYYY)/gi), u, l, c = [], f = [], d = {};
                if (!s)
                    return null;
                if (s.length > o.length) {
                    o = n.match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/gi)
                }
                for (u = 0,
                l = s.length; u < l; u++) {
                    if (BX.util.trim(s[u]) != "") {
                        c[c.length] = s[u]
                    }
                }
                for (u = 0,
                l = o.length; u < l; u++) {
                    if (BX.util.trim(o[u]) != "") {
                        f[f.length] = o[u]
                    }
                }
                var p = BX.util.array_search("MMMM", f);
                if (p > 0) {
                    c[p] = BX.getNumMonth(c[p]);
                    f[p] = "MM"
                } else {
                    p = BX.util.array_search("M", f);
                    if (p > 0) {
                        c[p] = BX.getNumMonth(c[p]);
                        f[p] = "MM"
                    }
                }
                for (u = 0,
                l = f.length; u < l; u++) {
                    var h = f[u].toUpperCase();
                    d[h] = h == "T" || h == "TT" ? c[u] : parseInt(c[u], 10)
                }
                if (d["DD"] > 0 && d["MM"] > 0 && d["YYYY"] > 0) {
                    var v = new Date;
                    if (t) {
                        v.setUTCDate(1);
                        v.setUTCFullYear(d["YYYY"]);
                        v.setUTCMonth(d["MM"] - 1);
                        v.setUTCDate(d["DD"]);
                        v.setUTCHours(0, 0, 0, 0)
                    } else {
                        v.setDate(1);
                        v.setFullYear(d["YYYY"]);
                        v.setMonth(d["MM"] - 1);
                        v.setDate(d["DD"]);
                        v.setHours(0, 0, 0, 0)
                    }
                    if ((!isNaN(d["HH"]) || !isNaN(d["GG"]) || !isNaN(d["H"]) || !isNaN(d["G"])) && !isNaN(d["MI"])) {
                        if (!isNaN(d["H"]) || !isNaN(d["G"])) {
                            var y = (d["T"] || d["TT"] || "am").toUpperCase() == "PM";
                            var m = parseInt(d["H"] || d["G"] || 0, 10);
                            if (y) {
                                d["HH"] = m + (m == 12 ? 0 : 12)
                            } else {
                                d["HH"] = m < 12 ? m : 0
                            }
                        } else {
                            d["HH"] = parseInt(d["HH"] || d["GG"] || 0, 10)
                        }
                        if (isNaN(d["SS"]))
                            d["SS"] = 0;
                        if (t) {
                            v.setUTCHours(d["HH"], d["MI"], d["SS"])
                        } else {
                            v.setHours(d["HH"], d["MI"], d["SS"])
                        }
                    }
                    return v
                }
            }
            return null
        }
        ;
        BX.selectUtils = {
            addNewOption: function(e, t, r, n, i) {
                e = BX(e);
                if (e) {
                    var a = e.length;
                    if (i !== false) {
                        for (var s = 0; s < a; s++) {
                            if (e[s].value == t) {
                                return
                            }
                        }
                    }
                    e.options[a] = new Option(r,t,false,false)
                }
                if (n === true) {
                    this.sortSelect(e)
                }
            },
            deleteOption: function(e, t) {
                e = BX(e);
                if (e) {
                    for (var r = 0; r < e.length; r++) {
                        if (e[r].value == t) {
                            e.remove(r);
                            break
                        }
                    }
                }
            },
            deleteSelectedOptions: function(e) {
                e = BX(e);
                if (e) {
                    var t = 0;
                    while (t < e.length) {
                        if (e[t].selected) {
                            e[t].selected = false;
                            e.remove(t)
                        } else {
                            t++
                        }
                    }
                }
            },
            deleteAllOptions: function(e) {
                e = BX(e);
                if (e) {
                    for (var t = e.length - 1; t >= 0; t--) {
                        e.remove(t)
                    }
                }
            },
            optionCompare: function(e, t) {
                var r = e.optText.toLowerCase();
                var n = t.optText.toLowerCase();
                if (r > n)
                    return 1;
                if (r < n)
                    return -1;
                return 0
            },
            sortSelect: function(e) {
                e = BX(e);
                if (e) {
                    var t = [];
                    var r = e.options.length;
                    var n;
                    for (n = 0; n < r; n++) {
                        t[n] = {
                            optText: e[n].text,
                            optValue: e[n].value
                        }
                    }
                    t.sort(this.optionCompare);
                    e.length = 0;
                    r = t.length;
                    for (n = 0; n < r; n++) {
                        e[n] = new Option(t[n].optText,t[n].optValue,false,false)
                    }
                }
            },
            selectAllOptions: function(e) {
                e = BX(e);
                if (e) {
                    var t = e.length;
                    for (var r = 0; r < t; r++) {
                        e[r].selected = true
                    }
                }
            },
            selectOption: function(e, t) {
                e = BX(e);
                if (e) {
                    var r = e.length;
                    for (var n = 0; n < r; n++) {
                        e[n].selected = e[n].value == t
                    }
                }
            },
            addSelectedOptions: function(e, t, r, n) {
                e = BX(e);
                if (!e)
                    return;
                var i = e.length;
                for (var a = 0; a < i; a++)
                    if (e[a].selected)
                        this.addNewOption(t, e[a].value, e[a].text, n, r)
            },
            moveOptionsUp: function(e) {
                e = BX(e);
                if (!e)
                    return;
                var t = e.length;
                for (var r = 0; r < t; r++) {
                    if (e[r].selected && r > 0 && e[r - 1].selected == false) {
                        var n = new Option(e[r].text,e[r].value);
                        e[r] = new Option(e[r - 1].text,e[r - 1].value);
                        e[r].selected = false;
                        e[r - 1] = n;
                        e[r - 1].selected = true
                    }
                }
            },
            moveOptionsDown: function(e) {
                e = BX(e);
                if (!e)
                    return;
                var t = e.length;
                for (var r = t - 1; r >= 0; r--) {
                    if (e[r].selected && r < t - 1 && e[r + 1].selected == false) {
                        var n = new Option(e[r].text,e[r].value);
                        e[r] = new Option(e[r + 1].text,e[r + 1].value);
                        e[r].selected = false;
                        e[r + 1] = n;
                        e[r + 1].selected = true
                    }
                }
            }
        };
        BX.getEventTarget = function(e) {
            if (e.target) {
                return e.target
            } else if (e.srcElement) {
                return e.srcElement
            }
            return null
        }
        ;
        BX.convert = {
            toNumber: function(e) {
                if (BX.type.isNumber(e)) {
                    return e
                }
                e = Number(e);
                return !isNaN(e) ? e : 0
            },
            nodeListToArray: function(e) {
                try {
                    return Array.prototype.slice.call(e, 0)
                } catch (i) {
                    var t = [];
                    for (var r = 0, n = e.length; r < n; r++) {
                        t.push(e[r])
                    }
                    return t
                }
            }
        };
        BX.hint = function(e, t, r, n) {
            if (null == r) {
                r = t;
                t = ""
            }
            if (null == e.BXHINT) {
                e.BXHINT = new BX.CHint({
                    parent: e,
                    hint: r,
                    title: t,
                    id: n
                });
                e.BXHINT.Show()
            }
        }
        ;
        BX.hint_replace = function(e, t, r) {
            if (null == r) {
                r = t;
                t = ""
            }
            if (!e || !e.parentNode || !r)
                return null;
            var n = new BX.CHint({
                hint: r,
                title: t
            });
            n.CreateParent();
            e.parentNode.insertBefore(n.PARENT, e);
            e.parentNode.removeChild(e);
            n.PARENT.style.marginLeft = "5px";
            return e
        }
        ;
        BX.CHint = function(e) {
            if (BX.CHint.cssLoaded === false) {
                BX.load(["/bitrix/js/main/core/css/core_hint.css"]);
                BX.CHint.cssLoaded = true
            }
            this.PARENT = BX(e.parent);
            this.HINT = e.hint;
            this.HINT_TITLE = e.title;
            this.PARAMS = {};
            for (var t in this.defaultSettings) {
                if (null == e[t])
                    this.PARAMS[t] = this.defaultSettings[t];
                else
                    this.PARAMS[t] = e[t]
            }
            if (null != e.id)
                this.ID = e.id;
            this.timer = null;
            this.bInited = false;
            this.msover = true;
            if (this.PARAMS.showOnce) {
                this.__show();
                this.msover = false;
                this.timer = setTimeout(BX.proxy(this.__hide, this), this.PARAMS.hide_timeout)
            } else if (this.PARENT) {
                BX.bind(this.PARENT, "mouseover", BX.proxy(this.Show, this));
                BX.bind(this.PARENT, "mouseout", BX.proxy(this.Hide, this))
            }
        }
        ;
        BX.CHint.cssLoaded = false;
        BX.CHint.openHints = new Set;
        BX.CHint.globalDisabled = false;
        BX.CHint.handleMenuOpen = function() {
            BX.CHint.globalDisabled = true;
            BX.CHint.openHints.forEach((function(e) {
                e.__hide_immediately()
            }
            ))
        }
        ;
        BX.CHint.handleMenuClose = function() {
            BX.CHint.globalDisabled = false
        }
        ;
        BX.addCustomEvent("onMenuOpen", BX.CHint.handleMenuOpen);
        BX.addCustomEvent("onMenuClose", BX.CHint.handleMenuClose);
        BX.CHint.prototype.defaultSettings = {
            show_timeout: 1e3,
            hide_timeout: 500,
            dx: 2,
            showOnce: false,
            preventHide: true,
            min_width: 250
        };
        BX.CHint.prototype.CreateParent = function(e, t) {
            if (this.PARENT) {
                BX.unbind(this.PARENT, "mouseover", BX.proxy(this.Show, this));
                BX.unbind(this.PARENT, "mouseout", BX.proxy(this.Hide, this))
            }
            if (!t)
                t = {};
            var r = "icon";
            if (t.type && (t.type == "link" || t.type == "icon"))
                r = t.type;
            if (e)
                r = "element";
            if (r == "icon") {
                e = BX.create("IMG", {
                    props: {
                        src: t.iconSrc ? t.iconSrc : "/bitrix/js/main/core/images/hint.gif"
                    }
                })
            } else if (r == "link") {
                e = BX.create("A", {
                    props: {
                        href: "javascript:void(0)"
                    },
                    html: "[?]"
                })
            }
            this.PARENT = e;
            BX.bind(this.PARENT, "mouseover", BX.proxy(this.Show, this));
            BX.bind(this.PARENT, "mouseout", BX.proxy(this.Hide, this));
            return this.PARENT
        }
        ;
        BX.CHint.prototype.Show = function() {
            this.msover = true;
            if (null != this.timer)
                clearTimeout(this.timer);
            this.timer = setTimeout(BX.proxy(this.__show, this), this.PARAMS.show_timeout)
        }
        ;
        BX.CHint.prototype.Hide = function() {
            this.msover = false;
            if (null != this.timer)
                clearTimeout(this.timer);
            this.timer = setTimeout(BX.proxy(this.__hide, this), this.PARAMS.hide_timeout)
        }
        ;
        BX.CHint.prototype.__show = function() {
            if (!this.msover || this.disabled || BX.CHint.globalDisabled)
                return;
            if (!this.bInited)
                this.Init();
            if (this.prepareAdjustPos()) {
                this.DIV.style.display = "block";
                BX.ZIndexManager.bringToFront(this.DIV);
                this.adjustPos();
                BX.CHint.openHints.add(this);
                BX.bind(window, "scroll", BX.proxy(this.__onscroll, this));
                if (this.PARAMS.showOnce) {
                    this.timer = setTimeout(BX.proxy(this.__hide, this), this.PARAMS.hide_timeout)
                }
            }
        }
        ;
        BX.CHint.prototype.__onscroll = function() {
            if (!BX.admin || !BX.admin.panel || !BX.admin.panel.isFixed())
                return;
            if (this.scrollTimer)
                clearTimeout(this.scrollTimer);
            this.DIV.style.display = "none";
            this.scrollTimer = setTimeout(BX.proxy(this.Reopen, this), this.PARAMS.show_timeout)
        }
        ;
        BX.CHint.prototype.Reopen = function() {
            if (null != this.timer)
                clearTimeout(this.timer);
            this.timer = setTimeout(BX.proxy(this.__show, this), 50)
        }
        ;
        BX.CHint.prototype.__hide = function() {
            if (this.msover)
                return;
            if (!this.bInited)
                return;
            BX.unbind(window, "scroll", BX.proxy(this.Reopen, this));
            BX.CHint.openHints.delete(this);
            if (this.PARAMS.showOnce) {
                this.Destroy()
            } else {
                this.DIV.style.display = "none"
            }
        }
        ;
        BX.CHint.prototype.__hide_immediately = function() {
            this.msover = false;
            this.__hide()
        }
        ;
        BX.CHint.prototype.Init = function() {
            this.DIV = document.body.appendChild(BX.create("DIV", {
                props: {
                    className: "bx-panel-tooltip"
                },
                style: {
                    display: "none",
                    position: "absolute",
                    visibility: "hidden"
                },
                children: [this.CONTENT = BX.create("DIV", {
                    props: {
                        className: "bx-panel-tooltip-content"
                    },
                    children: [BX.create("DIV", {
                        props: {
                            className: "bx-panel-tooltip-underlay"
                        },
                        children: [BX.create("DIV", {
                            props: {
                                className: "bx-panel-tooltip-underlay-bg"
                            }
                        })]
                    })]
                })]
            }));
            BX.ZIndexManager.register(this.DIV);
            if (this.ID) {
                this.CONTENT.insertBefore(BX.create("A", {
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    props: {
                        className: "bx-panel-tooltip-close"
                    },
                    events: {
                        click: BX.delegate(this.Close, this)
                    }
                }), this.CONTENT.firstChild)
            }
            if (this.HINT_TITLE) {
                this.CONTENT.appendChild(BX.create("DIV", {
                    props: {
                        className: "bx-panel-tooltip-title"
                    },
                    text: this.HINT_TITLE
                }))
            }
            if (this.HINT) {
                this.CONTENT_TEXT = this.CONTENT.appendChild(BX.create("DIV", {
                    props: {
                        className: "bx-panel-tooltip-text"
                    }
                })).appendChild(BX.create("SPAN", {
                    html: this.HINT
                }))
            }
            if (this.PARAMS.preventHide) {
                BX.bind(this.DIV, "mouseout", BX.proxy(this.Hide, this));
                BX.bind(this.DIV, "mouseover", BX.proxy(this.Show, this))
            }
            this.bInited = true
        }
        ;
        BX.CHint.prototype.setContent = function(e) {
            this.HINT = e;
            if (this.CONTENT_TEXT)
                this.CONTENT_TEXT.innerHTML = this.HINT;
            else
                this.CONTENT_TEXT = this.CONTENT.appendChild(BX.create("DIV", {
                    props: {
                        className: "bx-panel-tooltip-text"
                    }
                })).appendChild(BX.create("SPAN", {
                    html: this.HINT
                }))
        }
        ;
        BX.CHint.prototype.prepareAdjustPos = function() {
            this._wnd = {
                scrollPos: BX.GetWindowScrollPos(),
                scrollSize: BX.GetWindowScrollSize()
            };
            return BX.style(this.PARENT, "display") != "none"
        }
        ;
        BX.CHint.prototype.getAdjustPos = function() {
            var e = {}
              , t = BX.pos(this.PARENT)
              , r = 0;
            e.top = t.bottom + this.PARAMS.dx;
            if (BX.admin && BX.admin.panel.DIV) {
                r = BX.admin.panel.DIV.offsetHeight + this.PARAMS.dx;
                if (BX.admin.panel.isFixed()) {
                    r += this._wnd.scrollPos.scrollTop
                }
            }
            if (e.top < r)
                e.top = r;
            else {
                if (e.top + this.DIV.offsetHeight > this._wnd.scrollSize.scrollHeight)
                    e.top = t.top - this.PARAMS.dx - this.DIV.offsetHeight
            }
            e.left = t.left;
            if (t.left < this.PARAMS.dx)
                t.left = this.PARAMS.dx;
            else {
                var n = this.DIV.offsetWidth;
                var i = this._wnd.scrollSize.scrollWidth - n - this.PARAMS.dx;
                if (e.left > i)
                    e.left = i
            }
            return e
        }
        ;
        BX.CHint.prototype.adjustWidth = function() {
            if (this.bWidthAdjusted)
                return;
            var e = this.DIV.offsetWidth
              , t = this.DIV.offsetHeight;
            if (e > this.PARAMS.min_width)
                e = Math.round(Math.sqrt(1.618 * e * t));
            if (e < this.PARAMS.min_width)
                e = this.PARAMS.min_width;
            this.DIV.style.width = e + "px";
            if (this._adjustWidthInt)
                clearInterval(this._adjustWidthInt);
            this._adjustWidthInt = setInterval(BX.delegate(this._adjustWidthInterval, this), 5);
            this.bWidthAdjusted = true
        }
        ;
        BX.CHint.prototype._adjustWidthInterval = function() {
            if (!this.DIV || this.DIV.style.display == "none")
                clearInterval(this._adjustWidthInt);
            var e = 20
              , t = 1500
              , r = this.DIV.offsetWidth
              , n = this.CONTENT_TEXT.offsetWidth;
            if (r > 0 && n > 0 && r - n < e && r < t) {
                this.DIV.style.width = r + e + "px";
                return
            }
            clearInterval(this._adjustWidthInt)
        }
        ;
        BX.CHint.prototype.adjustPos = function() {
            this.adjustWidth();
            var e = this.getAdjustPos();
            this.DIV.style.top = e.top + "px";
            this.DIV.style.left = e.left + "px"
        }
        ;
        BX.CHint.prototype.Close = function() {
            if (this.ID && BX.WindowManager)
                BX.WindowManager.saveWindowOptions(this.ID, {
                    display: "off"
                });
            this.__hide_immediately();
            this.Destroy()
        }
        ;
        BX.CHint.prototype.Destroy = function() {
            if (this.PARENT) {
                BX.unbind(this.PARENT, "mouseover", BX.proxy(this.Show, this));
                BX.unbind(this.PARENT, "mouseout", BX.proxy(this.Hide, this))
            }
            if (this.DIV) {
                BX.unbind(this.DIV, "mouseover", BX.proxy(this.Show, this));
                BX.unbind(this.DIV, "mouseout", BX.proxy(this.Hide, this));
                BX.ZIndexManager.unregister(this.DIV);
                BX.cleanNode(this.DIV, true)
            }
        }
        ;
        BX.CHint.prototype.enable = function() {
            this.disabled = false
        }
        ;
        BX.CHint.prototype.disable = function() {
            this.__hide_immediately();
            this.disabled = true
        }
        ;
        function _adjustWait() {
            if (!this.bxmsg)
                return;
            var e = BX.pos(this)
              , t = e.top;
            if (t < BX.GetDocElement().scrollTop)
                t = BX.GetDocElement().scrollTop + 5;
            this.bxmsg.style.top = t + 5 + "px";
            if (this == BX.GetDocElement()) {
                this.bxmsg.style.right = "5px"
            } else {
                this.bxmsg.style.left = e.right - this.bxmsg.offsetWidth - 5 + "px"
            }
        }
        function _processTpl(e, t, r) {
            if (e) {
                if (r)
                    e.parentNode.removeChild(e);
                var n = {}
                  , i = BX.findChildren(e, {
                    attribute: "data-role"
                }, true);
                for (var a = 0, s = i.length; a < s; a++) {
                    n[i[a].getAttribute("data-role")] = i[a]
                }
                t.apply(e, [n])
            }
        }
        function _checkNode(e, t) {
            t = t || {};
            if (BX.type.isFunction(t))
                return t.call(window, e);
            if (!t.allowTextNodes && !BX.type.isElementNode(e))
                return false;
            var r, n, i;
            for (r in t) {
                if (t.hasOwnProperty(r)) {
                    switch (r) {
                    case "tag":
                    case "tagName":
                        if (BX.type.isString(t[r])) {
                            if (e.tagName.toUpperCase() != t[r].toUpperCase())
                                return false
                        } else if (t[r]instanceof RegExp) {
                            if (!t[r].test(e.tagName))
                                return false
                        }
                        break;
                    case "class":
                    case "className":
                        if (BX.type.isString(t[r])) {
                            if (!BX.hasClass(e, t[r]))
                                return false
                        } else if (t[r]instanceof RegExp) {
                            if (!BX.type.isString(e.className) || !t[r].test(e.className))
                                return false
                        }
                        break;
                    case "attr":
                    case "attrs":
                    case "attribute":
                        if (BX.type.isString(t[r])) {
                            if (!e.getAttribute(t[r]))
                                return false
                        } else if (BX.type.isArray(t[r])) {
                            for (n = 0,
                            i = t[r].length; n < i; n++) {
                                if (t[r] && !e.getAttribute(t[r]))
                                    return false
                            }
                        } else {
                            for (n in t[r]) {
                                if (t[r].hasOwnProperty(n)) {
                                    var a = e.getAttribute(n);
                                    if (t[r][n]instanceof RegExp) {
                                        if (!BX.type.isString(a) || !t[r][n].test(a)) {
                                            return false
                                        }
                                    } else {
                                        if (a != "" + t[r][n]) {
                                            return false
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case "property":
                    case "props":
                        if (BX.type.isString(t[r])) {
                            if (!e[t[r]])
                                return false
                        } else if (BX.type.isArray(t[r])) {
                            for (n = 0,
                            i = t[r].length; n < i; n++) {
                                if (t[r] && !e[t[r]])
                                    return false
                            }
                        } else {
                            for (n in t[r]) {
                                if (BX.type.isString(t[r][n])) {
                                    if (e[n] != t[r][n])
                                        return false
                                } else if (t[r][n]instanceof RegExp) {
                                    if (!BX.type.isString(e[n]) || !t[r][n].test(e[n]))
                                        return false
                                }
                            }
                        }
                        break;
                    case "callback":
                        return t[r](e)
                    }
                }
            }
            return true
        }
        function Trash() {
            var e, t;
            for (e = 0,
            t = garbageCollectors.length; e < t; e++) {
                try {
                    garbageCollectors[e].callback.apply(garbageCollectors[e].context || window);
                    delete garbageCollectors[e];
                    garbageCollectors[e] = null
                } catch (e) {}
            }
        }
        if (window.attachEvent)
            window.attachEvent("onunload", Trash);
        else if (window.addEventListener)
            window.addEventListener("unload", Trash, false);
        else
            window.onunload = Trash;
        BX(BX.DoNothing);
        window.BX = BX;
        BX.browser.addGlobalClass();
        BX.data = function(e, t, r) {
            if (typeof e == "undefined")
                return undefined;
            if (typeof t == "undefined")
                return undefined;
            if (typeof r != "undefined") {
                dataStorage.set(e, t, r)
            } else {
                var n;
                if ((n = dataStorage.get(e, t)) != undefined) {
                    return n
                } else {
                    if ("getAttribute"in e) {
                        n = e.getAttribute("data-" + t.toString());
                        if (n === null) {
                            return undefined
                        }
                        return n
                    }
                }
                return undefined
            }
        }
        ;
        BX.DataStorage = function() {
            this.keyOffset = 1;
            this.data = {};
            this.uniqueTag = "BX-" + Math.random();
            this.resolve = function(e, t) {
                if (typeof e[this.uniqueTag] == "undefined")
                    if (t) {
                        try {
                            Object.defineProperty(e, this.uniqueTag, {
                                value: this.keyOffset++
                            })
                        } catch (t) {
                            e[this.uniqueTag] = this.keyOffset++
                        }
                    } else
                        return undefined;
                return e[this.uniqueTag]
            }
            ;
            this.get = function(e, t) {
                if (e != document && !BX.type.isElementNode(e) || typeof t == "undefined")
                    return undefined;
                e = this.resolve(e, false);
                if (typeof e == "undefined" || typeof this.data[e] == "undefined")
                    return undefined;
                return this.data[e][t]
            }
            ;
            this.set = function(e, t, r) {
                if (e != document && !BX.type.isElementNode(e) || typeof r == "undefined")
                    return;
                var n = this.resolve(e, true);
                if (typeof this.data[n] == "undefined")
                    this.data[n] = {};
                this.data[n][t] = r
            }
        }
        ;
        var dataStorage = new BX.DataStorage
    }
    )(window.BX);
    (function(e) {
        if (!e.BX) {
            e.BX = {}
        }
        var t = e.BX;
        t.Promise = function(e, t) {
            this.state = null;
            this.value = null;
            this.reason = null;
            this.next = null;
            this.ctx = t || this;
            this.onFulfilled = [];
            this.onRejected = []
        }
        ;
        t.Promise.prototype.fulfill = function(e) {
            this.checkState();
            this.value = e;
            this.state = true;
            this.execute()
        }
        ;
        t.Promise.prototype.reject = function(e) {
            this.checkState();
            this.reason = e;
            this.state = false;
            this.execute()
        }
        ;
        t.Promise.prototype.then = function(e, r) {
            if (typeof e == "function" || e instanceof Function) {
                this.onFulfilled.push(e)
            }
            if (typeof r == "function" || r instanceof Function) {
                this.onRejected.push(r)
            }
            if (this.next === null) {
                this.next = new t.Promise(null,this.ctx)
            }
            if (this.state !== null) {
                this.execute()
            }
            return this.next
        }
        ;
        t.Promise.prototype.catch = function(e) {
            if (typeof e == "function" || e instanceof Function) {
                this.onRejected.push(e)
            }
            if (this.next === null) {
                this.next = new t.Promise(null,this.ctx)
            }
            if (this.state !== null) {
                this.execute()
            }
            return this.next
        }
        ;
        t.Promise.prototype.setAutoResolve = function(e, t) {
            this.timer = setTimeout(function() {
                if (this.state === null) {
                    this[e ? "fulfill" : "reject"]()
                }
            }
            .bind(this), t || 15)
        }
        ;
        t.Promise.prototype.cancelAutoResolve = function() {
            clearTimeout(this.timer)
        }
        ;
        t.Promise.prototype.resolve = function(e) {
            var t = this;
            if (this === e) {
                this.reject(new TypeError("Promise cannot fulfill or reject itself"))
            } else if (e && e.toString() === "[object BX.Promise]") {
                e.then((function(e) {
                    t.fulfill(e)
                }
                ), (function(e) {
                    t.reject(e)
                }
                ))
            } else {
                this.fulfill(e)
            }
        }
        ;
        t.Promise.prototype.toString = function() {
            return "[object BX.Promise]"
        }
        ;
        t.Promise.prototype.execute = function() {
            if (this.state === null) {
                return
            }
            var r = undefined;
            var n = undefined;
            var i = undefined;
            var a;
            if (this.state === true) {
                if (this.onFulfilled.length) {
                    try {
                        for (a = 0; a < this.onFulfilled.length; a++) {
                            i = this.onFulfilled[a].apply(this.ctx, [this.value]);
                            if (typeof i != "undefined") {
                                r = i
                            }
                        }
                    } catch (r) {
                        if ("console"in e) {
                            console.dir(r)
                        }
                        if (typeof t.debug !== "undefined") {
                            t.debug(r)
                        }
                        n = r
                    }
                } else {
                    r = this.value
                }
            } else if (this.state === false) {
                if (this.onRejected.length) {
                    try {
                        for (a = 0; a < this.onRejected.length; a++) {
                            i = this.onRejected[a].apply(this.ctx, [this.reason]);
                            if (typeof i != "undefined") {
                                r = i
                            }
                        }
                    } catch (r) {
                        if ("console"in e) {
                            console.dir(r)
                        }
                        if (typeof t.debug !== "undefined") {
                            t.debug(r)
                        }
                        n = r
                    }
                } else {
                    n = this.reason
                }
            }
            if (this.next !== null) {
                if (typeof n != "undefined") {
                    this.next.reject(n)
                } else if (typeof r != "undefined") {
                    this.next.resolve(r)
                }
            }
        }
        ;
        t.Promise.prototype.checkState = function() {
            if (this.state !== null) {
                throw new Error("You can not do fulfill() or reject() multiple times")
            }
        }
    }
    )(window);
    (function(e) {
        if (e.BX.ajax)
            return;
        var t = e.BX
          , r = {}
          , n = {
            method: "GET",
            dataType: "html",
            timeout: 0,
            async: true,
            processData: true,
            scriptsRunFirst: false,
            emulateOnload: true,
            skipAuthCheck: false,
            start: true,
            cache: true,
            preparePost: true,
            headers: false,
            lsTimeout: 30,
            lsForce: false
        }
          , i = {}
          , a = []
          , s = {
            url_utf: /[^\034-\254]+/g,
            script_self: /\/bitrix\/js\/main\/core\/core(_ajax)*.js$/i,
            script_self_window: /\/bitrix\/js\/main\/core\/core_window.js$/i,
            script_self_admin: /\/bitrix\/js\/main\/core\/core_admin.js$/i,
            script_onload: /window.onload/g
        };
        t.ajax = function(e) {
            var i, a;
            if (!e || !e.url || !t.type.isString(e.url)) {
                return false
            }
            for (var u in r)
                if (typeof e[u] == "undefined")
                    e[u] = r[u];
            r = {};
            for (u in n)
                if (typeof e[u] == "undefined")
                    e[u] = n[u];
            e.method = e.method.toUpperCase();
            if (!t.localStorage)
                e.lsId = null;
            if (t.browser.IsIE()) {
                var l = s.url_utf.exec(e.url);
                if (l) {
                    do {
                        e.url = e.url.replace(l, t.util.urlencode(l));
                        l = s.url_utf.exec(e.url)
                    } while (l)
                }
            }
            if (e.dataType == "json")
                e.emulateOnload = false;
            if (!e.cache && e.method == "GET")
                e.url = t.ajax._uncache(e.url);
            if (e.method == "POST") {
                if (e.preparePost) {
                    e.data = t.ajax.prepareData(e.data)
                } else if (o(e.headers) === "application/json") {
                    e.data = JSON.stringify(e.data)
                }
            }
            var c = true;
            if (e.lsId && !e.lsForce) {
                var f = t.localStorage.get("ajax-" + e.lsId);
                if (f !== null) {
                    c = false;
                    var d = function(r) {
                        if (r.key == "ajax-" + e.lsId && r.value != "BXAJAXWAIT") {
                            var n = r.value
                              , i = !!r.oldValue && n == null;
                            if (!i)
                                t.ajax.__run(e, n);
                            else if (e.onfailure)
                                e.onfailure("timeout");
                            t.removeCustomEvent("onLocalStorageChange", d)
                        }
                    };
                    if (f == "BXAJAXWAIT") {
                        t.addCustomEvent("onLocalStorageChange", d)
                    } else {
                        setTimeout((function() {
                            d({
                                key: "ajax-" + e.lsId,
                                value: f
                            })
                        }
                        ), 10)
                    }
                }
            }
            if (c) {
                e.xhr = t.ajax.xhr();
                if (!e.xhr)
                    return;
                if (e.lsId) {
                    t.localStorage.set("ajax-" + e.lsId, "BXAJAXWAIT", e.lsTimeout)
                }
                if (t.Type.isFunction(e.onprogress)) {
                    t.bind(e.xhr, "progress", e.onprogress)
                }
                if (t.Type.isFunction(e.onprogressupload) && e.xhr.upload) {
                    t.bind(e.xhr.upload, "progress", e.onprogressupload)
                }
                e.xhr.open(e.method, e.url, e.async);
                if (!e.skipBxHeader && !t.ajax.isCrossDomain(e.url)) {
                    e.xhr.setRequestHeader("Bx-ajax", "true")
                }
                if (e.method == "POST" && e.preparePost) {
                    e.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                }
                if (typeof e.headers == "object") {
                    for (u = 0; u < e.headers.length; u++)
                        e.xhr.setRequestHeader(e.headers[u].name, e.headers[u].value)
                }
                var p = false;
                var h = e.xhr.onreadystatechange = function(r) {
                    if (p)
                        return;
                    if (r === "timeout") {
                        if (e.onfailure) {
                            e.onfailure("timeout", "", e)
                        }
                        t.onCustomEvent(e.xhr, "onAjaxFailure", ["timeout", "", e]);
                        e.xhr.onreadystatechange = t.DoNothing;
                        e.xhr.abort();
                        if (e.async) {
                            e.xhr = null
                        }
                    } else {
                        if (e.xhr.readyState == 4 || r == "run") {
                            i = t.ajax.xhrSuccess(e.xhr) ? "success" : "error";
                            p = true;
                            e.xhr.onreadystatechange = t.DoNothing;
                            if (i == "success") {
                                var n = !!e.skipAuthCheck || t.ajax.isCrossDomain(e.url) ? false : e.xhr.getResponseHeader("X-Bitrix-Ajax-Status");
                                if (!!n && n == "Authorize") {
                                    if (e.onfailure) {
                                        e.onfailure("auth", e.xhr.status, e)
                                    }
                                    t.onCustomEvent(e.xhr, "onAjaxFailure", ["auth", e.xhr.status, e])
                                } else {
                                    var a = e.xhr.responseText;
                                    if (e.lsId) {
                                        t.localStorage.set("ajax-" + e.lsId, a, e.lsTimeout)
                                    }
                                    t.ajax.__run(e, a)
                                }
                            } else {
                                if (e.onfailure) {
                                    e.onfailure("status", e.xhr.status, e)
                                }
                                t.onCustomEvent(e.xhr, "onAjaxFailure", ["status", e.xhr.status, e])
                            }
                            if (e.async) {
                                e.xhr = null
                            }
                        }
                    }
                }
                ;
                if (e.async && e.timeout > 0) {
                    setTimeout((function() {
                        if (e.xhr && !p) {
                            h("timeout")
                        }
                    }
                    ), e.timeout * 1e3)
                }
                if (e.start) {
                    e.xhr.send(e.data);
                    if (!e.async) {
                        h("run")
                    }
                }
                return e.xhr
            }
        }
        ;
        t.ajax.xhr = function() {
            if (e.XMLHttpRequest) {
                try {
                    return new XMLHttpRequest
                } catch (e) {}
            } else if (e.ActiveXObject) {
                try {
                    return new e.ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (e) {}
                try {
                    return new e.ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (e) {}
                try {
                    return new e.ActiveXObject("Msxml2.XMLHTTP")
                } catch (e) {}
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
                throw new Error("This browser does not support XMLHttpRequest.")
            }
            return null
        }
        ;
        t.ajax.isCrossDomain = function(r, n) {
            n = n || e.location;
            if (r.indexOf("//") === 0) {
                r = n.protocol + r
            }
            if (r.indexOf("http") !== 0) {
                return false
            }
            var i = e.document.createElement("a");
            i.href = r;
            return i.protocol !== n.protocol || i.hostname !== n.hostname || t.ajax.getHostPort(i.protocol, i.host) !== t.ajax.getHostPort(n.protocol, n.host)
        }
        ;
        t.ajax.getHostPort = function(e, t) {
            var r = /:(\d+)$/.exec(t);
            if (r) {
                return r[1]
            } else {
                if (e === "http:") {
                    return "80"
                } else if (e === "https:") {
                    return "443"
                }
            }
            return ""
        }
        ;
        t.ajax.__prepareOnload = function(r, n) {
            if (r.length > 0) {
                t.ajax["onload_" + n] = null;
                for (var i = 0, a = r.length; i < a; i++) {
                    if (r[i].isInternal) {
                        r[i].JS = r[i].JS.replace(s.script_onload, "BX.ajax.onload_" + n)
                    }
                }
            }
            t.CaptureEventsGet();
            t.CaptureEvents(e, "load")
        }
        ;
        t.ajax.__runOnload = function(r) {
            if (null != t.ajax["onload_" + r]) {
                t.ajax["onload_" + r].apply(e);
                t.ajax["onload_" + r] = null
            }
            var n = t.CaptureEventsGet();
            if (n) {
                for (var i = 0; i < n.length; i++)
                    n[i].apply(e)
            }
        }
        ;
        t.ajax.__run = function(e, r) {
            if (!e.processData) {
                if (e.onsuccess) {
                    e.onsuccess(r)
                }
                t.onCustomEvent(e.xhr, "onAjaxSuccess", [r, e])
            } else {
                r = t.ajax.processRequestData(r, e)
            }
        }
        ;
        t.ajax._onParseJSONFailure = function(e) {
            this.jsonFailure = true;
            this.jsonResponse = e;
            this.jsonProactive = /^\[WAF\]/.test(e)
        }
        ;
        t.ajax.processRequestData = function(e, r) {
            var n, i = [], a = [];
            switch (r.dataType.toUpperCase()) {
            case "JSON":
                var s = r.xhr || {};
                t.addCustomEvent(s, "onParseJSONFailure", t.proxy(t.ajax._onParseJSONFailure, r));
                n = t.parseJSON(e, s);
                t.removeCustomEvent(s, "onParseJSONFailure", t.proxy(t.ajax._onParseJSONFailure, r));
                if (!!n && t.type.isArray(n["bxjs"])) {
                    for (var o = 0; o < n["bxjs"].length; o++) {
                        if (t.type.isNotEmptyString(n["bxjs"][o])) {
                            i.push({
                                isInternal: false,
                                JS: n["bxjs"][o],
                                bRunFirst: r.scriptsRunFirst
                            })
                        } else {
                            i.push(n["bxjs"][o])
                        }
                    }
                }
                if (!!n && t.type.isArray(n["bxcss"])) {
                    a = n["bxcss"]
                }
                break;
            case "SCRIPT":
                i.push({
                    isInternal: true,
                    JS: e,
                    bRunFirst: r.scriptsRunFirst
                });
                n = e;
                break;
            default:
                var u = t.processHTML(e, r.scriptsRunFirst);
                n = u.HTML;
                i = u.SCRIPT;
                a = u.STYLE;
                break
            }
            if (a.length > 0) {
                t.loadCSS(a)
            }
            let l = null;
            if (r.emulateOnload) {
                l = parseInt(Math.random() * 1e6);
                t.ajax.__prepareOnload(i, l)
            }
            const c = t.defer((function() {
                if (r.emulateOnload) {
                    t.ajax.__runOnload(l)
                }
                t.onCustomEvent(r.xhr, "onAjaxSuccessFinish", [r])
            }
            ));
            try {
                if (!!r.jsonFailure) {
                    throw {
                        type: "json_failure",
                        data: r.jsonResponse,
                        bProactive: r.jsonProactive
                    }
                }
                r.scripts = i;
                t.ajax.processScripts(r.scripts, true);
                if (r.onsuccess) {
                    r.onsuccess(n)
                }
                t.onCustomEvent(r.xhr, "onAjaxSuccess", [n, r]);
                t.ajax.processScripts(r.scripts, false, c)
            } catch (e) {
                if (r.onfailure)
                    r.onfailure("processing", e);
                t.onCustomEvent(r.xhr, "onAjaxFailure", ["processing", e, r])
            }
        }
        ;
        t.ajax.processScripts = function(e, r, n) {
            var i = []
              , a = "";
            n = n || t.DoNothing;
            for (var s = 0, o = e.length; s < o; s++) {
                if (typeof r != "undefined" && r != !!e[s].bRunFirst)
                    continue;
                if (e[s].isInternal)
                    a += ";" + e[s].JS;
                else
                    i.push(e[s].JS)
            }
            i = t.util.array_unique(i);
            var u = a.length > 0 ? function() {
                t.evalGlobal(a)
            }
            : t.DoNothing;
            if (i.length > 0) {
                t.load(i, (function() {
                    u();
                    n()
                }
                ))
            } else {
                u();
                n()
            }
        }
        ;
        t.ajax.prepareData = function(e, r) {
            var n = "";
            if (t.type.isString(e))
                n = e;
            else if (null != e) {
                for (var i in e) {
                    if (e.hasOwnProperty(i)) {
                        if (n.length > 0)
                            n += "&";
                        var a = t.util.urlencode(i);
                        if (r)
                            a = r + "[" + a + "]";
                        if (typeof e[i] == "object")
                            n += t.ajax.prepareData(e[i], a);
                        else
                            n += a + "=" + t.util.urlencode(e[i])
                    }
                }
            }
            return n
        }
        ;
        t.ajax.xhrSuccess = function(e) {
            return e.status >= 200 && e.status < 300 || e.status === 304 || e.status === 1223 || e.status === 0
        }
        ;
        t.ajax.Setup = function(e, t) {
            t = !!t;
            for (var i in e) {
                if (t)
                    r[i] = e[i];
                else
                    n[i] = e[i]
            }
        }
        ;
        t.ajax.replaceLocalStorageValue = function(e, r, n) {
            if (!!t.localStorage)
                t.localStorage.set("ajax-" + e, r, n)
        }
        ;
        t.ajax._uncache = function(e) {
            return e + ((e.indexOf("?") !== -1 ? "&" : "?") + "_=" + (new Date).getTime())
        }
        ;
        t.ajax.get = function(e, r, n) {
            if (t.type.isFunction(r)) {
                n = r;
                r = ""
            }
            r = t.ajax.prepareData(r);
            if (r) {
                e += (e.indexOf("?") !== -1 ? "&" : "?") + r;
                r = ""
            }
            return t.ajax({
                method: "GET",
                dataType: "html",
                url: e,
                data: "",
                onsuccess: n
            })
        }
        ;
        t.ajax.getCaptcha = function(e) {
            return t.ajax.loadJSON("/bitrix/tools/ajax_captcha.php", e)
        }
        ;
        t.ajax.insertToNode = function(e, n) {
            n = t(n);
            if (!!n) {
                var i = {
                    cancel: false
                };
                t.onCustomEvent("onAjaxInsertToNode", [{
                    url: e,
                    node: n,
                    eventArgs: i
                }]);
                if (i.cancel === true) {
                    return
                }
                var a = null;
                if (!r.denyShowWait) {
                    a = t.showWait(n);
                    delete r.denyShowWait
                }
                return t.ajax.get(e, (function(e) {
                    n.innerHTML = e;
                    t.closeWait(n, a)
                }
                ))
            }
        }
        ;
        t.ajax.post = function(e, r, n) {
            r = t.ajax.prepareData(r);
            return t.ajax({
                method: "POST",
                dataType: "html",
                url: e,
                data: r,
                onsuccess: n
            })
        }
        ;
        t.ajax.promise = function(e) {
            var r = new t.Promise;
            e.onsuccess = function(e) {
                r.fulfill(e)
            }
            ;
            e.onfailure = function(e, t, n) {
                r.reject({
                    reason: e,
                    data: t,
                    ajaxConfig: n,
                    xhr: n.xhr
                })
            }
            ;
            var n = t.ajax(e);
            if (n) {
                if (typeof e.onrequeststart === "function") {
                    e.onrequeststart(n)
                }
            } else {
                r.reject({
                    reason: "init",
                    data: false
                })
            }
            return r
        }
        ;
        t.ajax.loadScriptAjax = function(e, r, n) {
            if (t.type.isArray(e)) {
                for (var a = 0, o = e.length; a < o; a++) {
                    t.ajax.loadScriptAjax(e[a], r, n)
                }
            } else {
                var u = e.replace(/\.js\?.*/, ".js");
                if (s.script_self.test(u))
                    return;
                if (s.script_self_window.test(u) && t.CWindow)
                    return;
                if (s.script_self_admin.test(u) && t.admin)
                    return;
                if (typeof i[u] == "undefined") {
                    if (!!n) {
                        i[u] = "";
                        return t.loadScript(e)
                    } else {
                        return t.ajax({
                            url: e,
                            method: "GET",
                            dataType: "script",
                            processData: true,
                            emulateOnload: false,
                            scriptsRunFirst: true,
                            async: false,
                            start: true,
                            onsuccess: function(e) {
                                i[u] = e;
                                if (r)
                                    r(e)
                            }
                        })
                    }
                } else if (r) {
                    r(i[u])
                }
            }
        }
        ;
        t.ajax.loadJSON = function(e, r, n, i) {
            if (t.type.isFunction(r)) {
                i = n;
                n = r;
                r = ""
            }
            r = t.ajax.prepareData(r);
            if (r) {
                e += (e.indexOf("?") !== -1 ? "&" : "?") + r;
                r = ""
            }
            return t.ajax({
                method: "GET",
                dataType: "json",
                url: e,
                onsuccess: n,
                onfailure: i
            })
        }
        ;
        var o = function(e) {
            if (!t.Type.isArray(e)) {
                return null
            }
            var r = e.filter((function(e) {
                return e.name === "Content-Type"
            }
            )).pop();
            return r ? r.value : null
        };
        var u = function(e) {
            var r = e.getParameters || {};
            if (t.type.isNotEmptyString(e.analyticsLabel)) {
                r.analyticsLabel = e.analyticsLabel
            } else if (t.type.isNotEmptyObject(e.analyticsLabel)) {
                r.analyticsLabel = e.analyticsLabel
            }
            if (typeof e.mode !== "undefined") {
                r.mode = e.mode
            }
            if (e.navigation) {
                if (e.navigation.page) {
                    r.nav = "page-" + e.navigation.page
                }
                if (e.navigation.size) {
                    if (r.nav) {
                        r.nav += "-"
                    } else {
                        r.nav = ""
                    }
                    r.nav += "size-" + e.navigation.size
                }
            }
            return r
        };
        var l = function(e) {
            e = t.type.isPlainObject(e) ? e : {};
            e.headers = e.headers || [];
            e.headers.push({
                name: "X-Bitrix-Csrf-Token",
                value: t.bitrix_sessid()
            });
            if (t.message.SITE_ID) {
                e.headers.push({
                    name: "X-Bitrix-Site-Id",
                    value: t.message.SITE_ID
                })
            }
            if (typeof e.json !== "undefined") {
                if (!t.type.isPlainObject(e.json)) {
                    throw new Error("Wrong `config.json`, plain object expected.")
                }
                e.headers.push({
                    name: "Content-Type",
                    value: "application/json"
                });
                e.data = e.json;
                e.preparePost = false
            } else if (e.data instanceof FormData) {
                e.preparePost = false;
                if (typeof e.signedParameters !== "undefined") {
                    e.data.append("signedParameters", e.signedParameters)
                }
            } else if (t.type.isPlainObject(e.data) || t.Type.isNil(e.data)) {
                e.data = t.type.isPlainObject(e.data) ? e.data : {};
                if (typeof e.signedParameters !== "undefined") {
                    e.data.signedParameters = e.signedParameters
                }
            }
            if (!e.method) {
                e.method = "POST"
            }
            return e
        };
        var c = function(e, r) {
            r = r || false;
            var n = t.clone(e);
            var i = null;
            var a = e.onrequeststart;
            e.onrequeststart = function(e) {
                i = e;
                if (t.type.isFunction(a)) {
                    a(e)
                }
            }
            ;
            var s = n.onrequeststart;
            n.onrequeststart = function(e) {
                i = e;
                if (t.type.isFunction(s)) {
                    s(e)
                }
            }
            ;
            var o = t.ajax.promise(e);
            return o.then((function(e) {
                if (!r && t.type.isPlainObject(e) && t.type.isArray(e.errors)) {
                    var i = false;
                    e.errors.forEach((function(e) {
                        if (e.code === "invalid_csrf" && e.customData.csrf) {
                            t.message({
                                bitrix_sessid: e.customData.csrf
                            });
                            n.headers = n.headers || [];
                            n.headers = n.headers.filter((function(e) {
                                return e && e.name !== "X-Bitrix-Csrf-Token"
                            }
                            ));
                            n.headers.push({
                                name: "X-Bitrix-Csrf-Token",
                                value: t.bitrix_sessid()
                            });
                            i = true
                        }
                    }
                    ));
                    if (i) {
                        return c(n, true)
                    }
                }
                if (!t.type.isPlainObject(e) || e.status !== "success") {
                    var a = new t.Promise;
                    a.reject(e);
                    return a
                }
                return e
            }
            )).catch((function(e) {
                var r = new t.Promise;
                var n;
                if (t.type.isPlainObject(e) && e.xhr && e.xhr.responseText) {
                    try {
                        n = JSON.parse(e.xhr.responseText);
                        e = n
                    } catch (e) {}
                }
                if (t.type.isPlainObject(e) && e.status && e.hasOwnProperty("data")) {
                    r.reject(e)
                } else {
                    r.reject({
                        status: "error",
                        data: {
                            ajaxRejectData: e
                        },
                        errors: [{
                            code: "NETWORK_ERROR",
                            message: "Network error"
                        }]
                    })
                }
                return r
            }
            )).then((function(e) {
                var r = new t.Promise;
                var n = i.getAllResponseHeaders().trim().split(/[\r\n]+/);
                var a = {};
                n.forEach((function(e) {
                    var t = e.split(": ");
                    var r = t.shift().toLowerCase();
                    a[r] = t.join(": ")
                }
                ));
                if (!a["x-process-assets"]) {
                    r.fulfill(e);
                    return r
                }
                var s = t.prop.getObject(t.prop.getObject(e, "data", {}), "assets", {});
                var o = new Promise((function(e, r) {
                    var n = t.prop.getArray(s, "css", []);
                    t.load(n, (function() {
                        t.loadScript(t.prop.getArray(s, "js", []), e)
                    }
                    ))
                }
                ));
                o.then((function() {
                    var n = t.prop.getArray(s, "string", []);
                    var i = n.join("\n");
                    t.html(document.head, i, {
                        useAdjacentHTML: true
                    }).then((function() {
                        r.fulfill(e)
                    }
                    ))
                }
                ));
                return r
            }
            ))
        };
        t.ajax.runAction = function(e, r) {
            r = l(r);
            var n = u(r);
            n.action = e;
            var i = "/bitrix/services/main/ajax.php?" + t.ajax.prepareData(n);
            return c({
                method: r.method,
                dataType: "json",
                url: i,
                data: r.data,
                timeout: r.timeout,
                preparePost: r.preparePost,
                headers: r.headers,
                onrequeststart: r.onrequeststart,
                onprogress: r.onprogress,
                onprogressupload: r.onprogressupload
            })
        }
        ;
        t.ajax.runComponentAction = function(e, r, n) {
            n = l(n);
            n.mode = n.mode || "ajax";
            var i = u(n);
            i.c = e;
            i.action = r;
            var a = "/bitrix/services/main/ajax.php?" + t.ajax.prepareData(i);
            return c({
                method: n.method,
                dataType: "json",
                url: a,
                data: n.data,
                timeout: n.timeout,
                preparePost: n.preparePost,
                headers: n.headers,
                onrequeststart: n.onrequeststart ? n.onrequeststart : null,
                onprogress: n.onprogress,
                onprogressupload: n.onprogressupload
            })
        }
        ;
        t.ajax.load = function(e, r) {
            if (!t.type.isArray(e))
                e = [e];
            var n = 0;
            if (!t.type.isFunction(r))
                r = t.DoNothing;
            var i = function(e) {
                if (t.type.isFunction(this.callback))
                    this.callback(e);
                if (++n >= s)
                    r()
            };
            for (var a = 0, s = e.length; a < s; a++) {
                switch (e[a].type.toUpperCase()) {
                case "SCRIPT":
                    t.loadScript([e[a].url], t.proxy(i, e[a]));
                    break;
                case "CSS":
                    t.loadCSS([e[a].url]);
                    if (++n >= s)
                        r();
                    break;
                case "JSON":
                    t.ajax.loadJSON(e[a].url, t.proxy(i, e[a]));
                    break;
                default:
                    t.ajax.get(e[a].url, "", t.proxy(i, e[a]));
                    break
                }
            }
        }
        ;
        t.ajax.submit = function(e, r) {
            if (!e.target) {
                if (null == e.BXFormTarget) {
                    var n = "formTarget_" + Math.random();
                    e.BXFormTarget = document.body.appendChild(t.create("IFRAME", {
                        props: {
                            name: n,
                            id: n,
                            src: "javascript:void(0)"
                        },
                        style: {
                            display: "none"
                        }
                    }))
                }
                e.target = e.BXFormTarget.name
            }
            e.BXFormCallback = r;
            t.bind(e.BXFormTarget, "load", t.proxy(t.ajax._submit_callback, e));
            t.submit(e);
            return false
        }
        ;
        t.ajax.submitComponentForm = function(r, n, i) {
            if (!r.target) {
                if (null == r.BXFormTarget) {
                    var a = "formTarget_" + Math.random();
                    r.BXFormTarget = document.body.appendChild(t.create("IFRAME", {
                        props: {
                            name: a,
                            id: a,
                            src: "javascript:void(0)"
                        },
                        style: {
                            display: "none"
                        }
                    }))
                }
                r.target = r.BXFormTarget.name
            }
            if (!!i)
                var s = t.showWait(n);
            r.BXFormCallback = function(r) {
                if (!!i)
                    t.closeWait(s);
                var a = function() {
                    if (!!e.bxcompajaxframeonload) {
                        setTimeout((function() {
                            e.bxcompajaxframeonload();
                            e.bxcompajaxframeonload = null
                        }
                        ), 10)
                    }
                };
                t(n).innerHTML = r;
                t.onCustomEvent("onAjaxSuccess", [null, null, a])
            }
            ;
            t.bind(r.BXFormTarget, "load", t.proxy(t.ajax._submit_callback, r));
            return true
        }
        ;
        t.ajax._submit_callback = function() {
            try {
                if (this.BXFormTarget.contentWindow.location.href.indexOf("http") != 0)
                    return
            } catch (e) {
                return
            }
            if (this.BXFormCallback)
                this.BXFormCallback.apply(this, [this.BXFormTarget.contentWindow.document.body.innerHTML]);
            t.unbindAll(this.BXFormTarget)
        }
        ;
        t.ajax.prepareForm = function(e, t) {
            t = !!t ? t : {};
            var r, n, i, a = [], s = e.elements.length, o = 0, u = 0;
            if (!!e) {
                for (r = 0; r < s; r++) {
                    i = e.elements[r];
                    if (i.disabled)
                        continue;
                    if (!i.type)
                        continue;
                    switch (i.type.toLowerCase()) {
                    case "text":
                    case "textarea":
                    case "password":
                    case "number":
                    case "hidden":
                    case "select-one":
                        a.push({
                            name: i.name,
                            value: i.value
                        });
                        u += i.name.length + i.value.length;
                        break;
                    case "file":
                        if (!!i.files) {
                            for (n = 0; n < i.files.length; n++) {
                                o++;
                                a.push({
                                    name: i.name,
                                    value: i.files[n],
                                    file: true
                                });
                                u += i.files[n].size
                            }
                        }
                        break;
                    case "radio":
                    case "checkbox":
                        if (i.checked) {
                            a.push({
                                name: i.name,
                                value: i.value
                            });
                            u += i.name.length + i.value.length
                        }
                        break;
                    case "select-multiple":
                        for (var l = 0; l < i.options.length; l++) {
                            if (i.options[l].selected) {
                                a.push({
                                    name: i.name,
                                    value: i.options[l].value
                                });
                                u += i.name.length + i.options[l].length
                            }
                        }
                        break;
                    default:
                        break
                    }
                }
                r = 0;
                u = 0;
                var c = t, f, d, p, h;
                while (r < a.length) {
                    var v = a[r].name.indexOf("[");
                    if (h) {
                        c[a[r].name] = {};
                        c[a[r].name][h.replace(/\[|\]/gi, "")] = a[r].value;
                        c = t;
                        h = null;
                        r++
                    } else if (v == -1) {
                        c[a[r].name] = a[r].value;
                        c = t;
                        r++
                    } else {
                        f = a[r].name.substring(0, v);
                        d = a[r].name.substring(v + 1);
                        p = d.indexOf("]");
                        if (p == -1) {
                            if (!c[f])
                                c[f] = [];
                            c = t;
                            r++
                        } else if (p == 0) {
                            if (!c[f])
                                c[f] = [];
                            c = c[f];
                            a[r].name = "" + c.length;
                            if (d.substring(p + 1).indexOf("[") === 0)
                                h = d.substring(0, p) + d.substring(p + 1)
                        } else {
                            if (!c[f])
                                c[f] = {};
                            c = c[f];
                            a[r].name = d.substring(0, p) + d.substring(p + 1)
                        }
                    }
                }
            }
            return {
                data: t,
                filesCount: o,
                roughSize: u
            }
        }
        ;
        t.ajax.submitAjax = function(r, n) {
            n = n !== null && typeof n == "object" ? n : {};
            n.url = n["url"] || r.getAttribute("action");
            var i = n["data"] || {};
            n.data = t.ajax.prepareForm(r).data;
            for (var a in i) {
                if (i.hasOwnProperty(a)) {
                    n.data[a] = i[a]
                }
            }
            if (!e["FormData"]) {
                t.ajax(n)
            } else {
                var s = function(e) {
                    var t = Object.prototype.toString.call(e);
                    return t == "[object File]" || t == "[object Blob]"
                }
                  , o = function(e, t, r) {
                    if (!!r && typeof r == "object" && !s(r)) {
                        for (var n in r) {
                            if (r.hasOwnProperty(n)) {
                                o(e, t == "" ? n : t + "[" + n + "]", r[n])
                            }
                        }
                    } else
                        e.append(t, !!r ? r : "")
                }
                  , u = function(e) {
                    var r = {};
                    if (null != e) {
                        if (typeof e == "object") {
                            for (var n in e) {
                                if (e.hasOwnProperty(n)) {
                                    var i = t.util.urlencode(n);
                                    if (typeof e[n] == "object" && e[n]["file"] !== true)
                                        r[i] = u(e[n]);
                                    else if (e[n]["file"] === true)
                                        r[i] = e[n]["value"];
                                    else
                                        r[i] = t.util.urlencode(e[n])
                                }
                            }
                        } else
                            r = t.util.urlencode(e)
                    }
                    return r
                }
                  , l = new e.FormData;
                if (n.method !== "POST") {
                    n.data = t.ajax.prepareData(n.data);
                    if (n.data) {
                        n.url += (n.url.indexOf("?") !== -1 ? "&" : "?") + n.data;
                        n.data = ""
                    }
                } else {
                    if (n.preparePost === true)
                        n.data = u(n.data);
                    o(l, "", n.data);
                    n.data = l
                }
                n.preparePost = false;
                n.start = false;
                var c = t.ajax(n);
                if (!!n["onprogress"])
                    c.upload.addEventListener("progress", (function(e) {
                        var t = null;
                        if (e.lengthComputable && (e.total || e["totalSize"])) {
                            t = e.loaded * 100 / (e.total || e["totalSize"])
                        }
                        n["onprogress"](e, t)
                    }
                    ));
                c.send(l)
            }
        }
        ;
        t.ajax.UpdatePageData = function(e) {
            if (e.TITLE)
                t.ajax.UpdatePageTitle(e.TITLE);
            if (e.WINDOW_TITLE || e.TITLE)
                t.ajax.UpdateWindowTitle(e.WINDOW_TITLE || e.TITLE);
            if (e.NAV_CHAIN)
                t.ajax.UpdatePageNavChain(e.NAV_CHAIN);
            if (e.CSS && e.CSS.length > 0)
                t.loadCSS(e.CSS);
            if (e.SCRIPTS && e.SCRIPTS.length > 0) {
                var r = function(n, i, a) {
                    if (!!i && t.type.isArray(i.scripts)) {
                        for (var s = 0, o = e.SCRIPTS.length; s < o; s++) {
                            i.scripts.push({
                                isInternal: false,
                                JS: e.SCRIPTS[s]
                            })
                        }
                    } else {
                        t.loadScript(e.SCRIPTS, a)
                    }
                    t.removeCustomEvent("onAjaxSuccess", r)
                };
                t.addCustomEvent("onAjaxSuccess", r)
            } else {
                var n = function(e, r, i) {
                    if (t.type.isFunction(i)) {
                        i()
                    }
                    t.removeCustomEvent("onAjaxSuccess", n)
                };
                t.addCustomEvent("onAjaxSuccess", n)
            }
        }
        ;
        t.ajax.UpdatePageTitle = function(e) {
            var r = t("pagetitle");
            if (r) {
                t.remove(r.firstChild);
                if (!r.firstChild)
                    r.appendChild(document.createTextNode(e));
                else
                    r.insertBefore(document.createTextNode(e), r.firstChild)
            }
        }
        ;
        t.ajax.UpdateWindowTitle = function(e) {
            document.title = e
        }
        ;
        t.ajax.UpdatePageNavChain = function(e) {
            var r = t("navigation");
            if (r) {
                r.innerHTML = e
            }
        }
        ;
        t.userOptions = {
            options: null,
            bSend: false,
            delay: 5e3,
            path: "/bitrix/admin/user_options.php?"
        };
        t.userOptions.setAjaxPath = function(e) {
            t.userOptions.path = e.indexOf("?") == -1 ? e + "?" : e + "&"
        }
        ;
        t.userOptions.save = function(e, r, n, i, a) {
            if (null == t.userOptions.options)
                t.userOptions.options = {};
            a = !!a;
            t.userOptions.options[e + "." + r + "." + n] = [e, r, n, i, a];
            var s = t.userOptions.__get();
            if (s != "")
                document.cookie = t.message("COOKIE_PREFIX") + "_LAST_SETTINGS=" + encodeURIComponent(s) + "&sessid=" + t.bitrix_sessid() + "; expires=Thu, 31 Dec " + ((new Date).getFullYear() + 1) + " 23:59:59 GMT; path=/;";
            if (!t.userOptions.bSend) {
                t.userOptions.bSend = true;
                setTimeout((function() {
                    t.userOptions.send(null)
                }
                ), t.userOptions.delay)
            }
        }
        ;
        t.userOptions.send = function(e) {
            var r = t.userOptions.__get();
            t.userOptions.options = null;
            t.userOptions.bSend = false;
            if (r != "") {
                document.cookie = t.message("COOKIE_PREFIX") + "_LAST_SETTINGS=; path=/;";
                t.ajax({
                    method: "GET",
                    dataType: "html",
                    processData: false,
                    cache: false,
                    url: t.userOptions.path + r + "&sessid=" + t.bitrix_sessid(),
                    onsuccess: e
                })
            }
        }
        ;
        t.userOptions.del = function(e, r, n, i) {
            t.ajax.get(t.userOptions.path + "action=delete&c=" + e + "&n=" + r + (n == true ? "&common=Y" : "") + "&sessid=" + t.bitrix_sessid(), i)
        }
        ;
        t.userOptions.__get = function() {
            if (!t.userOptions.options)
                return "";
            var e = "", r = -1, n = "", i, a;
            for (a in t.userOptions.options) {
                if (t.userOptions.options.hasOwnProperty(a)) {
                    i = t.userOptions.options[a];
                    if (n != i[0] + "." + i[1]) {
                        r++;
                        e += "&p[" + r + "][c]=" + t.util.urlencode(i[0]);
                        e += "&p[" + r + "][n]=" + t.util.urlencode(i[1]);
                        if (i[4] == true)
                            e += "&p[" + r + "][d]=Y";
                        n = i[0] + "." + i[1]
                    }
                    var s = i[2];
                    var o = i[3];
                    if (s === null) {
                        e += "&p[" + r + "][v]=" + t.util.urlencode(o)
                    } else {
                        e += "&p[" + r + "][v][" + t.util.urlencode(s) + "]=" + t.util.urlencode(o)
                    }
                }
            }
            return e.substr(1)
        }
        ;
        t.ajax.history = {
            expected_hash: "",
            obParams: null,
            obFrame: null,
            obImage: null,
            obTimer: null,
            bInited: false,
            bHashCollision: false,
            bPushState: !!(history.pushState && t.type.isFunction(history.pushState)),
            startState: null,
            init: function(r) {
                if (t.ajax.history.bInited)
                    return;
                this.obParams = r;
                var n = this.obParams.getState();
                if (t.ajax.history.bPushState) {
                    t.ajax.history.expected_hash = e.location.pathname;
                    if (e.location.search)
                        t.ajax.history.expected_hash += e.location.search;
                    t.ajax.history.put(n, t.ajax.history.expected_hash, "", true);
                    setTimeout((function() {
                        t.bind(e, "popstate", t.ajax.history.__hashListener)
                    }
                    ), 500)
                } else {
                    t.ajax.history.expected_hash = e.location.hash;
                    if (!t.ajax.history.expected_hash || t.ajax.history.expected_hash == "#")
                        t.ajax.history.expected_hash = "__bx_no_hash__";
                    f.put(t.ajax.history.expected_hash, n);
                    t.ajax.history.obTimer = setTimeout(t.ajax.history.__hashListener, 500);
                    if (t.browser.IsIE()) {
                        t.ajax.history.obFrame = document.createElement("IFRAME");
                        t.hide_object(t.ajax.history.obFrame);
                        document.body.appendChild(t.ajax.history.obFrame);
                        t.ajax.history.obFrame.contentWindow.document.open();
                        t.ajax.history.obFrame.contentWindow.document.write(t.ajax.history.expected_hash);
                        t.ajax.history.obFrame.contentWindow.document.close()
                    } else if (t.browser.IsOpera()) {
                        t.ajax.history.obImage = document.createElement("IMG");
                        t.hide_object(t.ajax.history.obImage);
                        document.body.appendChild(t.ajax.history.obImage);
                        t.ajax.history.obImage.setAttribute("src", "javascript:location.href = 'javascript:BX.ajax.history.__hashListener();';")
                    }
                }
                t.ajax.history.bInited = true
            },
            __hashListener: function(r) {
                r = r || e.event || {
                    state: false
                };
                if (t.ajax.history.bPushState) {
                    t.ajax.history.obParams.setState(r.state || t.ajax.history.startState)
                } else {
                    if (t.ajax.history.obTimer) {
                        e.clearTimeout(t.ajax.history.obTimer);
                        t.ajax.history.obTimer = null
                    }
                    var n;
                    if (null != t.ajax.history.obFrame)
                        n = t.ajax.history.obFrame.contentWindow.document.body.innerText;
                    else
                        n = e.location.hash;
                    if (!n || n == "#")
                        n = "__bx_no_hash__";
                    if (n.indexOf("#") == 0)
                        n = n.substring(1);
                    if (n != t.ajax.history.expected_hash) {
                        var i = f.get(n);
                        if (i) {
                            t.ajax.history.obParams.setState(i);
                            t.ajax.history.expected_hash = n;
                            if (null != t.ajax.history.obFrame) {
                                var a = n == "__bx_no_hash__" ? "" : n;
                                if (e.location.hash != a && e.location.hash != "#" + a)
                                    e.location.hash = a
                            }
                        }
                    }
                    t.ajax.history.obTimer = setTimeout(t.ajax.history.__hashListener, 500)
                }
            },
            put: function(r, n, i, a) {
                if (this.bPushState) {
                    if (!a) {
                        history.pushState(r, "", n)
                    } else {
                        t.ajax.history.startState = r
                    }
                } else {
                    if (typeof i != "undefined")
                        n = i;
                    else
                        n = "view" + n;
                    f.put(n, r);
                    t.ajax.history.expected_hash = n;
                    e.location.hash = t.util.urlencode(n);
                    if (null != t.ajax.history.obFrame) {
                        t.ajax.history.obFrame.contentWindow.document.open();
                        t.ajax.history.obFrame.contentWindow.document.write(n);
                        t.ajax.history.obFrame.contentWindow.document.close()
                    }
                }
            },
            checkRedirectStart: function(r, n) {
                var i = e.location.hash;
                if (i.substring(0, 1) == "#")
                    i = i.substring(1);
                var a = i.substring(0, 5);
                if (a == "view/" || a == "view%") {
                    t.ajax.history.bHashCollision = true;
                    document.write("<" + 'div id="__ajax_hash_collision_' + n + '" style="display: none;">')
                }
            },
            checkRedirectFinish: function(r, n) {
                document.write("</div>");
                var i = e.location.hash;
                if (i.substring(0, 1) == "#")
                    i = i.substring(1);
                t.ready((function() {
                    var e = i.substring(0, 5);
                    if (e == "view/" || e == "view%") {
                        var a = t("__ajax_hash_collision_" + n);
                        var s = a.firstChild;
                        t.cleanNode(s);
                        a.style.display = "block";
                        if (e != "view%")
                            i = t.util.urlencode(i);
                        i += (i.indexOf("%3F") == -1 ? "%3F" : "%26") + r + "=" + n;
                        var o = "/bitrix/tools/ajax_redirector.php?hash=" + i;
                        t.ajax.insertToNode(o, s)
                    }
                }
                ))
            }
        };
        t.ajax.component = function(e) {
            this.node = e
        }
        ;
        t.ajax.component.prototype.getState = function() {
            var r = {
                node: this.node,
                title: e.document.title,
                data: t(this.node).innerHTML
            };
            var n = t("navigation");
            if (null != n)
                r.nav_chain = n.innerHTML;
            t.onCustomEvent(t(r.node), "onComponentAjaxHistoryGetState", [r]);
            return r
        }
        ;
        t.ajax.component.prototype.setState = function(e) {
            t(e.node).innerHTML = e.data;
            t.ajax.UpdatePageTitle(e.title);
            if (e.nav_chain) {
                t.ajax.UpdatePageNavChain(e.nav_chain)
            }
            t.onCustomEvent(t(e.node), "onComponentAjaxHistorySetState", [e])
        }
        ;
        var f = {
            arHistory: {},
            put: function(e, t) {
                this.arHistory[e] = t
            },
            get: function(e) {
                return this.arHistory[e]
            }
        };
        t.ajax.FormData = function() {
            this.elements = [];
            this.files = [];
            this.features = {};
            this.isSupported();
            this.log("BX FormData init")
        }
        ;
        t.ajax.FormData.isSupported = function() {
            var e = new t.ajax.FormData;
            var r = e.features.supported;
            e = null;
            return r
        }
        ;
        t.ajax.FormData.prototype.log = function(e) {
            if (false) {
                try {
                    if (t.browser.IsIE())
                        e = JSON.stringify(e);
                    console.log(e)
                } catch (e) {}
            }
        }
        ;
        t.ajax.FormData.prototype.isSupported = function() {
            var t = {};
            t.fileReader = e.FileReader && e.FileReader.prototype.readAsBinaryString;
            t.readFormData = t.sendFormData = !!e.FormData;
            t.supported = !!(t.readFormData && t.sendFormData);
            this.features = t;
            this.log("features:");
            this.log(t);
            return t.supported
        }
        ;
        t.ajax.FormData.prototype.append = function(e, t) {
            if (typeof t === "object") {
                this.files.push({
                    name: e,
                    value: t
                })
            } else {
                this.elements.push({
                    name: e,
                    value: t
                })
            }
        }
        ;
        t.ajax.FormData.prototype.send = function(e, r, n, i) {
            this.log("FD send");
            this.xhr = t.ajax({
                method: "POST",
                dataType: "html",
                url: e,
                onsuccess: r,
                onfailure: i,
                start: false,
                preparePost: false
            });
            if (n) {
                this.xhr.upload.addEventListener("progress", (function(e) {
                    if (e.lengthComputable)
                        n(e.loaded / (e.total || e.totalSize))
                }
                ), false)
            }
            if (this.features.readFormData && this.features.sendFormData) {
                var a = new FormData;
                this.log("use browser formdata");
                for (var s in this.elements) {
                    if (this.elements.hasOwnProperty(s))
                        a.append(this.elements[s].name, this.elements[s].value)
                }
                for (s in this.files) {
                    if (this.files.hasOwnProperty(s))
                        a.append(this.files[s].name, this.files[s].value)
                }
                this.xhr.send(a)
            }
            return this.xhr
        }
        ;
        t.addCustomEvent("onAjaxFailure", t.debug)
    }
    )(window);
    (function(e, t) {
        "use strict";
        var r = {
            observer: null,
            images: {},
            imageStatus: {
                hidden: -2,
                error: -1,
                undefined: 0,
                inited: 1,
                loaded: 2
            },
            imageTypes: {
                image: 1,
                background: 2
            },
            initObserver: function e() {
                this.observer = new IntersectionObserver(this.onIntersection.bind(this),{
                    rootMargin: "20% 0% 20% 0%",
                    threshold: .1
                })
            },
            onIntersection: function e(t) {
                t.forEach(function(e) {
                    if (e.isIntersecting) {
                        this.showImage(e.target)
                    }
                }
                .bind(this))
            },
            registerImage: function e(r, n, i) {
                if (this.observer === null) {
                    this.initObserver()
                }
                i = i || {};
                if (!t.Type.isStringFilled(r)) {
                    return
                }
                if (t.Type.isObject(this.images[r])) {
                    return
                }
                var a = document.getElementById(r);
                if (!t.Type.isDomNode(a)) {
                    return
                }
                this.observer.observe(a);
                this.images[r] = {
                    id: r,
                    node: null,
                    src: null,
                    dataSrcName: i.dataSrcName || "src",
                    type: null,
                    func: t.Type.isFunction(n) ? n : null,
                    status: this.imageStatus.undefined
                }
            },
            registerImages: function e(r, n, i) {
                if (t.Type.isArray(r)) {
                    for (var a = 0, s = r.length; a < s; a++) {
                        this.registerImage(r[a], n, i)
                    }
                }
            },
            showImage: function e(r) {
                var n = r.id;
                if (!t.Type.isStringFilled(n)) {
                    return
                }
                var i = this.images[n];
                if (!t.Type.isPlainObject(i)) {
                    return
                }
                if (i.status == this.imageStatus.undefined) {
                    this.initImage(i)
                }
                if (i.status !== this.imageStatus.inited) {
                    return
                }
                if (!i.node || !i.node.parentNode) {
                    i.node = null;
                    i.status = this.imageStatus.error;
                    return
                }
                if (i.type == this.imageTypes.image) {
                    i.node.src = i.src
                } else {
                    i.node.style.backgroundImage = "url('" + i.src + "')"
                }
                i.node.dataset[i.dataSrcName] = "";
                i.status = this.imageStatus.loaded
            },
            showImages: function e(r) {
                r = r !== false;
                for (var n in this.images) {
                    if (!this.images.hasOwnProperty(n)) {
                        continue
                    }
                    var i = this.images[n];
                    if (i.status == this.imageStatus.undefined) {
                        this.initImage(i)
                    }
                    if (i.status !== this.imageStatus.inited) {
                        continue
                    }
                    if (!i.node || !i.node.parentNode) {
                        i.node = null;
                        i.status = this.imageStatus.error;
                        continue
                    }
                    var a = true;
                    if (r && t.Type.isFunction(i.func)) {
                        a = i.func(i)
                    }
                    if (a === true && this.isElementVisibleOnScreen(i.node)) {
                        if (i.type == this.imageTypes.image) {
                            i.node.src = i.src
                        } else {
                            i.node.style.backgroundImage = "url('" + i.src + "')"
                        }
                        i.node.dataset[i.dataSrcName] = "";
                        i.status = this.imageStatus.loaded
                    }
                }
            },
            initImage: function e(r) {
                r.status = this.imageStatus.error;
                var n = document.getElementById(r.id);
                if (!t.Type.isDomNode(n)) {
                    return
                }
                var i = n.dataset[r.dataSrcName];
                if (t.Type.isStringFilled(i)) {
                    r.node = n;
                    r.src = i;
                    r.status = this.imageStatus.inited;
                    r.type = r.node.tagName.toLowerCase() == "img" ? this.imageTypes.image : this.imageTypes.background
                }
            },
            isElementVisibleOnScreen: function e(t) {
                var r = this.getElementCoords(t);
                var n = window.pageYOffset || document.documentElement.scrollTop;
                var i = n + document.documentElement.clientHeight;
                r.bottom = r.top + t.offsetHeight;
                return r.top > n && r.top < i || r.bottom < i && r.bottom > n
            },
            isElementVisibleOn2Screens: function e(t) {
                var r = document.documentElement.clientHeight;
                var n = window.pageYOffset || document.documentElement.scrollTop;
                var i = n + r;
                var a = this.getElementCoords(t);
                a.bottom = a.top + t.offsetHeight;
                n -= r;
                i += r;
                return a.top > n && a.top < i || a.bottom < i && a.bottom > n
            },
            getElementCoords: function e(t) {
                var r = t.getBoundingClientRect();
                return {
                    originTop: r.top,
                    originLeft: r.left,
                    top: r.top + window.pageYOffset,
                    left: r.left + window.pageXOffset
                }
            },
            onScroll: function e() {},
            clearImages: function e() {
                this.images = []
            }
        };
        e.LazyLoad = r
    }
    )(this.BX = this.BX || {}, BX);
    (function(e) {
        "use strict";
        var t = function() {
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                babelHelpers.classCallCheck(this, e);
                if (!!t && babelHelpers.typeof(t) === "object") {
                    this.params = new Map(Object.entries(t))
                } else {
                    this.params = new Map
                }
            }
            babelHelpers.createClass(e, [{
                key: "getParam",
                value: function e(t) {
                    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    if (this.params.has(t)) {
                        return this.params.get(t)
                    }
                    return r
                }
            }, {
                key: "setParam",
                value: function e(t, r) {
                    this.params.set(t, r)
                }
            }, {
                key: "clear",
                value: function e() {
                    this.params.clear()
                }
            }], [{
                key: "create",
                value: function t() {
                    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return new e(r)
                }
            }]);
            return e
        }();
        e.ParamBag = t
    }
    )(this.BX = this.BX || {});
    (function() {
        BX.FixFontSize = function(e) {
            var t, r, n;
            this.node = null;
            this.prevWindowSize = 0;
            this.prevWrapperSize = 0;
            this.mainWrapper = null;
            this.textWrapper = null;
            this.objList = e.objList;
            this.minFontSizeList = [];
            this.minFontSize = 0;
            if (e.onresize) {
                this.prevWindowSize = window.innerWidth || document.documentElement.clientWidth;
                BX.bind(window, "resize", BX.throttle(this.onResize, 350, this))
            }
            if (e.onAdaptiveResize) {
                t = this.objList[0].scaleBy || this.objList[0].node;
                r = getComputedStyle(t);
                this.prevWrapperSize = parseInt(r["width"]) - parseInt(r["paddingLeft"]) - parseInt(r["paddingRight"]);
                BX.bind(window, "resize", BX.throttle(this.onAdaptiveResize, 350, this))
            }
            this.createTestNodes();
            this.decrease()
        }
        ;
        BX.FixFontSize.prototype = {
            createTestNodes: function() {
                this.textWrapper = BX.create("div", {
                    style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                    }
                });
                this.mainWrapper = BX.create("div", {
                    style: {
                        height: 0,
                        overflow: "hidden"
                    },
                    children: [this.textWrapper]
                })
            },
            insertTestNodes: function() {
                document.body.appendChild(this.mainWrapper)
            },
            removeTestNodes: function() {
                document.body.removeChild(this.mainWrapper)
            },
            decrease: function() {
                var e, t, r, n;
                this.insertTestNodes();
                for (var i = this.objList.length - 1; i >= 0; i--) {
                    r = this.objList[i].scaleBy || this.objList[i].node;
                    n = getComputedStyle(r);
                    e = parseInt(n["width"]) - parseInt(n["paddingLeft"]) - parseInt(n["paddingRight"]);
                    t = parseInt(getComputedStyle(this.objList[i].node)["font-size"]);
                    this.textWrapperSetStyle(this.objList[i].node);
                    if (this.textWrapperInsertText(this.objList[i].node)) {
                        while (this.textWrapper.offsetWidth > e && t > 0) {
                            this.textWrapper.style.fontSize = --t + "px"
                        }
                        if (this.objList[i].smallestValue) {
                            this.minFontSize = this.minFontSize ? Math.min(this.minFontSize, t) : t;
                            this.minFontSizeList.push(this.objList[i].node)
                        } else {
                            this.objList[i].node.style.fontSize = t + "px"
                        }
                    }
                }
                if (this.minFontSizeList.length > 0)
                    this.setMinFont();
                this.removeTestNodes()
            },
            increase: function() {
                this.insertTestNodes();
                var e, t, r, n;
                this.insertTestNodes();
                for (var i = this.objList.length - 1; i >= 0; i--) {
                    r = this.objList[i].scaleBy || this.objList[i].node;
                    n = getComputedStyle(r);
                    e = parseInt(n["width"]) - parseInt(n["paddingLeft"]) - parseInt(n["paddingRight"]);
                    t = parseInt(getComputedStyle(this.objList[i].node)["font-size"]);
                    this.textWrapperSetStyle(this.objList[i].node);
                    if (this.textWrapperInsertText(this.objList[i].node)) {
                        while (this.textWrapper.offsetWidth < e && t < this.objList[i].maxFontSize) {
                            this.textWrapper.style.fontSize = ++t + "px"
                        }
                        t--;
                        if (this.objList[i].smallestValue) {
                            this.minFontSize = this.minFontSize ? Math.min(this.minFontSize, t) : t;
                            this.minFontSizeList.push(this.objList[i].node)
                        } else {
                            this.objList[i].node.style.fontSize = t + "px"
                        }
                    }
                }
                if (this.minFontSizeList.length > 0)
                    this.setMinFont();
                this.removeTestNodes()
            },
            setMinFont: function() {
                for (var e = this.minFontSizeList.length - 1; e >= 0; e--) {
                    this.minFontSizeList[e].style.fontSize = this.minFontSize + "px"
                }
                this.minFontSize = 0
            },
            onResize: function() {
                var e = window.innerWidth || document.documentElement.clientWidth;
                if (this.prevWindowSize > e)
                    this.decrease();
                else if (this.prevWindowSize < e)
                    this.increase();
                this.prevWindowSize = e
            },
            onAdaptiveResize: function() {
                var e = this.objList[0].scaleBy || this.objList[0].node
                  , t = getComputedStyle(e)
                  , r = parseInt(t["width"]) - parseInt(t["paddingLeft"]) - parseInt(t["paddingRight"]);
                if (this.prevWrapperSize > r)
                    this.decrease();
                else if (this.prevWrapperSize < r)
                    this.increase();
                this.prevWrapperSize = r
            },
            textWrapperInsertText: function(e) {
                if (e.textContent) {
                    this.textWrapper.textContent = e.textContent;
                    return true
                } else if (e.innerText) {
                    this.textWrapper.innerText = e.innerText;
                    return true
                } else {
                    return false
                }
            },
            textWrapperSetStyle: function(e) {
                this.textWrapper.style.fontFamily = getComputedStyle(e)["font-family"];
                this.textWrapper.style.fontSize = getComputedStyle(e)["font-size"];
                this.textWrapper.style.fontStyle = getComputedStyle(e)["font-style"];
                this.textWrapper.style.fontWeight = getComputedStyle(e)["font-weight"];
                this.textWrapper.style.lineHeight = getComputedStyle(e)["line-height"]
            }
        };
        BX.FixFontSize.init = function(e) {
            return new BX.FixFontSize(e)
        }
    }
    )()
}
)();
//# sourceMappingURL=core.map.js
