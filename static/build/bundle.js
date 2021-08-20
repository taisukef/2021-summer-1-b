var app = function () {
  "use strict";
  function t() {}
  function n(t) {
    return t();
  }
  function e() {
    return Object.create(null);
  }
  function c(t) {
    t.forEach(n);
  }
  function o(t) {
    return "function" == typeof t;
  }
  function r(t, n) {
    return t != t
      ? n == n
      : t !== n || t && "object" == typeof t || "function" == typeof t;
  }
  let l, s;
  function a(t, n) {
    return l || (l = document.createElement("a")), l.href = n, t === l.href;
  }
  function i(t, n) {
    t.appendChild(n);
  }
  function u(t, n, e) {
    t.insertBefore(n, e || null);
  }
  function f(t) {
    t.parentNode.removeChild(t);
  }
  function d(t) {
    return document.createElement(t);
  }
  function p(t) {
    return document.createTextNode(t);
  }
  function m() {
    return p(" ");
  }
  function h() {
    return p("");
  }
  function g(t, n, e, c) {
    return t.addEventListener(n, e, c), () => t.removeEventListener(n, e, c);
  }
  function $(t, n, e) {
    null == e
      ? t.removeAttribute(n)
      : t.getAttribute(n) !== e && t.setAttribute(n, e);
  }
  function x(t, n) {
    n = "" + n, t.wholeText !== n && (t.data = n);
  }
  function b(t) {
    s = t;
  }
  function w() {
    if (!s) throw new Error("Function called outside component initialization");
    return s;
  }
  function k() {
    const t = w();
    return (n, e) => {
      const c = t.$$.callbacks[n];
      if (c) {
        const o = function (t, n, e = !1) {
          const c = document.createEvent("CustomEvent");
          return c.initCustomEvent(t, e, !1, n), c;
        }(n, e);
        c.slice().forEach(
          ((n) => {
            n.call(t, o);
          }),
        );
      }
    };
  }
  function y(t, n) {
    const e = t.$$.callbacks[n.type];
    e && e.slice().forEach(((t) => t.call(this, n)));
  }
  const v = [], _ = [], C = [], E = [], M = Promise.resolve();
  let j = !1;
  function N(t) {
    C.push(t);
  }
  let z = !1;
  const T = new Set();
  function F() {
    if (!z) {
      z = !0;
      do {
        for (let t = 0; t < v.length; t += 1) {
          const n = v[t];
          b(n), S(n.$$);
        }
        for (b(null), v.length = 0; _.length;) _.pop()();
        for (let t = 0; t < C.length; t += 1) {
          const n = C[t];
          T.has(n) || (T.add(n), n());
        }
        C.length = 0;
      } while (v.length);
      for (; E.length;) E.pop()();
      j = !1, z = !1, T.clear();
    }
  }
  function S(t) {
    if (null !== t.fragment) {
      t.update(), c(t.before_update);
      const n = t.dirty;
      t.dirty = [-1],
        t.fragment && t.fragment.p(t.ctx, n),
        t.after_update.forEach(N);
    }
  }
  const A = new Set();
  let O;
  function B() {
    O = { r: 0, c: [], p: O };
  }
  function I() {
    O.r || c(O.c), O = O.p;
  }
  function P(t, n) {
    t && t.i && (A.delete(t), t.i(n));
  }
  function D(t, n, e, c) {
    if (t && t.o) {
      if (A.has(t)) return;
      A.add(t),
        O.c.push(
          (() => {
            A.delete(t), c && (e && t.d(1), c());
          }),
        ),
        t.o(n);
    }
  }
  function H(t, n) {
    const e = n.token = {};
    function c(t, c, o, r) {
      if (n.token !== e) return;
      n.resolved = r;
      let l = n.ctx;
      void 0 !== o && (l = l.slice(), l[o] = r);
      const s = t && (n.current = t)(l);
      let a = !1;
      n.block && (n.blocks
        ? n.blocks.forEach(
          ((t, e) => {
            e !== c && t && (B(),
              D(
                t,
                1,
                1,
                (() => {
                  n.blocks[e] === t && (n.blocks[e] = null);
                }),
              ),
              I());
          }),
        )
        : n.block.d(1),
        s.c(),
        P(s, 1),
        s.m(n.mount(), n.anchor),
        a = !0),
        n.block = s,
        n.blocks && (n.blocks[c] = s),
        a && F();
    }
    if ((o = t) && "object" == typeof o && "function" == typeof o.then) {
      const e = w();
      if (
        t.then(
          ((t) => {
            b(e), c(n.then, 1, n.value, t), b(null);
          }),
          ((t) => {
            if (b(e), c(n.catch, 2, n.error, t), b(null), !n.hasCatch) throw t;
          }),
        ), n.current !== n.pending
      ) {
        return c(n.pending, 0), !0;
      }
    } else {
      if (n.current !== n.then) return c(n.then, 1, n.value, t), !0;
      n.resolved = t;
    }
    var o;
  }
  function q(t, n, e) {
    const c = n.slice(), { resolved: o } = t;
    t.current === t.then && (c[t.value] = o),
      t.current === t.catch && (c[t.error] = o),
      t.block.p(c, e);
  }
  function V(t, n) {
    D(
      t,
      1,
      1,
      (() => {
        n.delete(t.key);
      }),
    );
  }
  function G(t) {
    t && t.c();
  }
  function J(t, e, r, l) {
    const { fragment: s, on_mount: a, on_destroy: i, after_update: u } = t.$$;
    s && s.m(e, r),
      l || N(
        (() => {
          const e = a.map(n).filter(o);
          i ? i.push(...e) : c(e), t.$$.on_mount = [];
        }),
      ),
      u.forEach(N);
  }
  function K(t, n) {
    const e = t.$$;
    null !== e.fragment &&
      (c(e.on_destroy),
        e.fragment && e.fragment.d(n),
        e.on_destroy = e.fragment = null,
        e.ctx = []);
  }
  function Q(t, n) {
    -1 === t.$$.dirty[0] &&
    (v.push(t), j || (j = !0, M.then(F)), t.$$.dirty.fill(0)),
      t.$$.dirty[n / 31 | 0] |= 1 << n % 31;
  }
  function R(n, o, r, l, a, i, u, d = [-1]) {
    const p = s;
    b(n);
    const m = n.$$ = {
      fragment: null,
      ctx: null,
      props: i,
      update: t,
      not_equal: a,
      bound: e(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(p ? p.$$.context : o.context || []),
      callbacks: e(),
      dirty: d,
      skip_bound: !1,
      root: o.target || p.$$.root,
    };
    u && u(m.root);
    let h = !1;
    if (
      m.ctx = r
        ? r(
          n,
          o.props || {},
          ((t, e, ...c) => {
            const o = c.length ? c[0] : e;
            return m.ctx && a(m.ctx[t], m.ctx[t] = o) &&
              (!m.skip_bound && m.bound[t] && m.bound[t](o), h && Q(n, t)),
              e;
          }),
        )
        : [],
        m.update(),
        h = !0,
        c(m.before_update),
        m.fragment = !!l && l(m.ctx),
        o.target
    ) {
      if (o.hydrate) {
        const t = function (t) {
          return Array.from(t.childNodes);
        }(o.target);
        m.fragment && m.fragment.l(t), t.forEach(f);
      } else m.fragment && m.fragment.c();
      o.intro && P(n.$$.fragment),
        J(n, o.target, o.anchor, o.customElement),
        F();
    }
    b(p);
  }
  class U {
    $destroy() {
      K(this, 1), this.$destroy = t;
    }
    $on(t, n) {
      const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return e.push(n), () => {
        const t = e.indexOf(n);
        -1 !== t && e.splice(t, 1);
      };
    }
    $set(t) {
      var n;
      this.$$set && (n = t, 0 !== Object.keys(n).length) &&
        (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
    }
  }
  function W(n) {
    let e, c;
    return {
      c() {
        e = d("img"),
          $(e, "class", "h-full object-contain mx-auto"),
          a(e.src, c = n[0]) || $(e, "src", c),
          $(e, "alt", n[1]);
      },
      m(t, n) {
        u(t, e, n);
      },
      p(t, [n]) {
        1 & n && !a(e.src, c = t[0]) && $(e, "src", c),
          2 & n && $(e, "alt", t[1]);
      },
      i: t,
      o: t,
      d(t) {
        t && f(e);
      },
    };
  }
  function X(t, n, e) {
    let { src: c = "" } = n, { alt: o = "" } = n;
    return t.$$set = (t) => {
      "src" in t && e(0, c = t.src), "alt" in t && e(1, o = t.alt);
    },
      [c, o];
  }
  class Y extends U {
    constructor(t) {
      super(), R(this, t, X, W, r, { src: 0, alt: 1 });
    }
  }
  function Z(n) {
    let e, o, r, l, s, a, p, h;
    return r = new Y({ props: { src: "/favicon.png", alt: "icon" } }), {
      c() {
        e = d("header"),
          o = d("div"),
          G(r.$$.fragment),
          l = m(),
          s = d("h1"),
          s.textContent = "Nicheller",
          $(o, "class", "h-1/2 pr-5"),
          $(
            s,
            "class",
            "font-mono text-4xl text-yellow-600 font-semibold italic tracking-widest",
          ),
          $(e, "class", "flex justify-center items-center bg-gray-200 z-10");
      },
      m(t, c) {
        u(t, e, c),
          i(e, o),
          J(r, o, null),
          i(e, l),
          i(e, s),
          a = !0,
          p || (h = [g(o, "click", n[1]), g(s, "click", n[0])], p = !0);
      },
      p: t,
      i(t) {
        a || (P(r.$$.fragment, t), a = !0);
      },
      o(t) {
        D(r.$$.fragment, t), a = !1;
      },
      d(t) {
        t && f(e), K(r), p = !1, c(h);
      },
    };
  }
  function tt(t) {
    return [function (n) {
      y.call(this, t, n);
    }, function (n) {
      y.call(this, t, n);
    }];
  }
  class nt extends U {
    constructor(t) {
      super(), R(this, t, tt, Z, r, {});
    }
  }
  function et(n) {
    let e, c, o;
    return {
      c() {
        e = d("button"),
          e.innerHTML =
            '<svg aria-hidden="true" class="text-gray-700 h-3/4 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>',
          $(e, "class", "h-16 w-16 bg-blue-400 rounded-full");
      },
      m(t, r) {
        u(t, e, r), c || (o = g(e, "click", n[0]), c = !0);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(e), c = !1, o();
      },
    };
  }
  function ct(t) {
    return [function (n) {
      y.call(this, t, n);
    }];
  }
  class ot extends U {
    constructor(t) {
      super(), R(this, t, ct, et, r, {});
    }
  }
  function rt(n) {
    let e, c, o;
    return {
      c() {
        e = d("button"),
          e.innerHTML =
            '<svg aria-hidden="true" class="text-yellow-500 h-3/5 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>',
          $(e, "class", "h-16 w-16 bg-green-400 rounded-full");
      },
      m(t, r) {
        u(t, e, r), c || (o = g(e, "click", n[0]), c = !0);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(e), c = !1, o();
      },
    };
  }
  function lt(t) {
    return [function (n) {
      y.call(this, t, n);
    }];
  }
  class st extends U {
    constructor(t) {
      super(), R(this, t, lt, rt, r, {});
    }
  }
  function at(t) {
    let n,
      e,
      c,
      o,
      r,
      l,
      s,
      a,
      h,
      g,
      b,
      w,
      k,
      y,
      v,
      _ = t[0].name + "",
      C = t[0].description + "";
    return e = new Y({ props: { src: t[0].thumbnail, alt: t[0].name } }),
      w = new ot({}),
      w.$on("click", t[1]),
      y = new st({}),
      y.$on("click", t[2]),
      {
        c() {
          n = d("div"),
            G(e.$$.fragment),
            c = m(),
            o = d("div"),
            r = d("h1"),
            l = p(_),
            s = m(),
            a = d("p"),
            h = p(C),
            g = m(),
            b = d("div"),
            G(w.$$.fragment),
            k = m(),
            G(y.$$.fragment),
            $(n, "class", "row-span-3 mx-auto"),
            $(r, "class", "text-2xl line-clamp-1"),
            $(a, "class", "line-clamp-2"),
            $(
              b,
              "class",
              "flex justify-around items-center md:w-1/2 md:mx-auto",
            );
        },
        m(t, f) {
          u(t, n, f),
            J(e, n, null),
            u(t, c, f),
            u(t, o, f),
            i(o, r),
            i(r, l),
            i(o, s),
            i(o, a),
            i(a, h),
            u(t, g, f),
            u(t, b, f),
            J(w, b, null),
            i(b, k),
            J(y, b, null),
            v = !0;
        },
        p(t, [n]) {
          const c = {};
          1 & n && (c.src = t[0].thumbnail),
            1 & n && (c.alt = t[0].name),
            e.$set(c),
            (!v || 1 & n) && _ !== (_ = t[0].name + "") && x(l, _),
            (!v || 1 & n) && C !== (C = t[0].description + "") && x(h, C);
        },
        i(t) {
          v ||
            (P(e.$$.fragment, t),
              P(w.$$.fragment, t),
              P(y.$$.fragment, t),
              v = !0);
        },
        o(t) {
          D(e.$$.fragment, t), D(w.$$.fragment, t), D(y.$$.fragment, t), v = !1;
        },
        d(t) {
          t && f(n),
            K(e),
            t && f(c),
            t && f(o),
            t && f(g),
            t && f(b),
            K(w),
            K(y);
        },
      };
  }
  function it(t, n, e) {
    let { place: c = {} } = n;
    const o = k();
    return t.$$set = (t) => {
      "place" in t && e(0, c = t.place);
    },
      [c, () => o("next"), () => o("like")];
  }
  class ut extends U {
    constructor(t) {
      super(), R(this, t, it, at, r, { place: 0 });
    }
  }
  function ft(t, n, e) {
    const c = t.slice();
    return c[14] = n[e], c;
  }
  function dt(n) {
    let e, c, o = n[17].message + "";
    return {
      c() {
        e = d("p"), c = p(o), $(e, "class", "text-red-500");
      },
      m(t, n) {
        u(t, e, n), i(e, c);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(e);
      },
    };
  }
  function pt(t) {
    let n, e, c, o, r, l;
    const s = [ht, mt], a = [];
    function p(t, n) {
      return t[1] ? 0 : 1;
    }
    return o = p(t), r = a[o] = s[o](t), {
      c() {
        n = d("section"),
          e = d("h2"),
          e.textContent = "近くの観光地",
          c = m(),
          r.c(),
          $(e, "class", "text-xl"),
          $(n, "class", "md:w-2/3 mx-auto");
      },
      m(t, r) {
        u(t, n, r), i(n, e), i(n, c), a[o].m(n, null), l = !0;
      },
      p(t, e) {
        let c = o;
        o = p(t),
          o === c ? a[o].p(t, e) : (B(),
            D(
              a[c],
              1,
              1,
              (() => {
                a[c] = null;
              }),
            ),
            I(),
            r = a[o],
            r ? r.p(t, e) : (r = a[o] = s[o](t), r.c()),
            P(r, 1),
            r.m(n, null));
      },
      i(t) {
        l || (P(r), l = !0);
      },
      o(t) {
        D(r), l = !1;
      },
      d(t) {
        t && f(n), a[o].d();
      },
    };
  }
  function mt(n) {
    let e;
    return {
      c() {
        e = d("div"), e.textContent = "Internal server error occurred.";
      },
      m(t, n) {
        u(t, e, n);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(e);
      },
    };
  }
  function ht(t) {
    let n, e, c = [], o = new Map(), r = t[2];
    const l = (t) => t[14].id;
    for (let n = 0; n < r.length; n += 1) {
      let e = ft(t, r, n), s = l(e);
      o.set(s, c[n] = gt(s, e));
    }
    return {
      c() {
        n = d("div");
        for (let t = 0; t < c.length; t += 1) c[t].c();
        $(n, "class", "grid gap-y-5");
      },
      m(t, o) {
        u(t, n, o);
        for (let t = 0; t < c.length; t += 1) c[t].m(n, null);
        e = !0;
      },
      p(t, e) {
        36 & e &&
          (r = t[2],
            B(),
            c = function (t, n, e, c, o, r, l, s, a, i, u, f) {
              let d = t.length, p = r.length, m = d;
              const h = {};
              for (; m--;) h[t[m].key] = m;
              const g = [], $ = new Map(), x = new Map();
              for (m = p; m--;) {
                const t = f(o, r, m), s = e(t);
                let a = l.get(s);
                a ? c && a.p(t, n) : (a = i(s, t), a.c()),
                  $.set(s, g[m] = a),
                  s in h && x.set(s, Math.abs(m - h[s]));
              }
              const b = new Set(), w = new Set();
              function k(t) {
                P(t, 1), t.m(s, u), l.set(t.key, t), u = t.first, p--;
              }
              for (; d && p;) {
                const n = g[p - 1], e = t[d - 1], c = n.key, o = e.key;
                n === e ? (u = n.first, d--, p--) : $.has(o)
                  ? !l.has(c) || b.has(c) ? k(n) : w.has(o)
                    ? d--
                    : x.get(c) > x.get(o)
                    ? (w.add(c), k(n))
                    : (b.add(o), d--)
                  : (a(e, l), d--);
              }
              for (; d--;) {
                const n = t[d];
                $.has(n.key) || a(n, l);
              }
              for (; p;) k(g[p - 1]);
              return g;
            }(c, e, l, 1, t, r, o, n, V, gt, null, ft),
            I());
      },
      i(t) {
        if (!e) {
          for (let t = 0; t < r.length; t += 1) P(c[t]);
          e = !0;
        }
      },
      o(t) {
        for (let t = 0; t < c.length; t += 1) D(c[t]);
        e = !1;
      },
      d(t) {
        t && f(n);
        for (let t = 0; t < c.length; t += 1) c[t].d();
      },
    };
  }
  function gt(t, n) {
    let e,
      c,
      o,
      r,
      l,
      s,
      a,
      h,
      b,
      w,
      k,
      y,
      v,
      _,
      C,
      E,
      M,
      L,
      j,
      N = n[14].name + "",
      z = n[14].distance + "",
      T = n[14].description + "";
    function F() {
      return n[9](n[14]);
    }
    return o = new Y({ props: { src: n[14].thumbnail, alt: n[14].name } }),
      {
        key: t,
        first: null,
        c() {
          e = d("div"),
            c = d("div"),
            G(o.$$.fragment),
            r = m(),
            l = d("div"),
            s = d("h3"),
            a = p(N),
            h = m(),
            b = d("p"),
            w = p("("),
            k = p(z),
            y = p(")"),
            v = m(),
            _ = d("p"),
            C = p(T),
            E = m(),
            $(c, "class", "w-1/2 md:w-full mx-auto opacity-1 hover:opacity-75"),
            $(s, "class", "text-lg line-clamp-1 float-left"),
            $(b, "class", "float-right"),
            $(_, "class", "line-clamp-1"),
            $(e, "class", "grid"),
            this.first = e;
        },
        m(t, n) {
          u(t, e, n),
            i(e, c),
            J(o, c, null),
            i(e, r),
            i(e, l),
            i(l, s),
            i(s, a),
            i(l, h),
            i(l, b),
            i(b, w),
            i(b, k),
            i(b, y),
            i(e, v),
            i(e, _),
            i(_, C),
            i(e, E),
            M = !0,
            L || (j = g(c, "click", F), L = !0);
        },
        p(t, e) {
          n = t;
          const c = {};
          4 & e && (c.src = n[14].thumbnail),
            4 & e && (c.alt = n[14].name),
            o.$set(c),
            (!M || 4 & e) && N !== (N = n[14].name + "") && x(a, N),
            (!M || 4 & e) && z !== (z = n[14].distance + "") && x(k, z),
            (!M || 4 & e) && T !== (T = n[14].description + "") && x(C, T);
        },
        i(t) {
          M || (P(o.$$.fragment, t), M = !0);
        },
        o(t) {
          D(o.$$.fragment, t), M = !1;
        },
        d(t) {
          t && f(e), K(o), L = !1, j();
        },
      };
  }
  function $t(n) {
    let e;
    return {
      c() {
        e = d("div"), e.textContent = "loading...";
      },
      m(t, n) {
        u(t, e, n);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(e);
      },
    };
  }
  function xt(t) {
    let n,
      e,
      c,
      o,
      r,
      l,
      s,
      a,
      h,
      b,
      w,
      k,
      y,
      v,
      _,
      C,
      E,
      M,
      L,
      j,
      N,
      z,
      T,
      F,
      S,
      A,
      O,
      B,
      I = t[0].likes + "",
      V = t[0].name + "",
      Q = t[0].address + "",
      R = t[0].description + "";
    e = new Y({ props: { src: t[0].thumbnail, alt: t[0].name } });
    let U = {
      ctx: t,
      current: null,
      token: null,
      hasCatch: !0,
      pending: $t,
      then: pt,
      catch: dt,
      error: 17,
      blocks: [, , ],
    };
    return H(t[4](), U), {
      c() {
        n = d("div"),
          G(e.$$.fragment),
          c = m(),
          o = d("div"),
          r = p("ニッチ度："),
          l = d("span"),
          s = p(I),
          h = m(),
          b = d("div"),
          w = d("h1"),
          k = p(V),
          y = m(),
          v = d("p"),
          _ = p(Q),
          C = m(),
          E = d("p"),
          M = p(R),
          L = m(),
          j = d("div"),
          N = m(),
          z = d("hr"),
          T = m(),
          U.block.c(),
          F = m(),
          S = d("button"),
          S.textContent = "他の場所を探す",
          $(n, "class", "mx-auto"),
          $(l, "class", a = (t[3] ? "text-yellow-500" : "") + " font-bold"),
          $(o, "class", "text-xl mx-auto pt-2"),
          $(w, "class", "text-2xl"),
          $(v, "class", "font-extralight"),
          $(E, "class", "pt-1"),
          $(b, "class", "py-2"),
          $(j, "id", "access-map"),
          $(j, "class", "mx-4 md:mx-8 svelte-edl89r"),
          $(z, "class", "my-5"),
          $(
            S,
            "class",
            "w-1/2 p-2 mt-4 mx-auto rounded-lg bg-blue-400 text-white text-lg font-medium",
          );
      },
      m(a, f) {
        u(a, n, f),
          J(e, n, null),
          u(a, c, f),
          u(a, o, f),
          i(o, r),
          i(o, l),
          i(l, s),
          u(a, h, f),
          u(a, b, f),
          i(b, w),
          i(w, k),
          i(b, y),
          i(b, v),
          i(v, _),
          i(b, C),
          i(b, E),
          i(E, M),
          u(a, L, f),
          u(a, j, f),
          u(a, N, f),
          u(a, z, f),
          u(a, T, f),
          U.block.m(a, U.anchor = f),
          U.mount = () => F.parentNode,
          U.anchor = F,
          u(a, F, f),
          u(a, S, f),
          A = !0,
          O || (B = g(S, "click", t[6]), O = !0);
      },
      p(n, [c]) {
        t = n;
        const o = {};
        1 & c && (o.src = t[0].thumbnail),
          1 & c && (o.alt = t[0].name),
          e.$set(o),
          (!A || 1 & c) && I !== (I = t[0].likes + "") && x(s, I),
          (!A ||
            8 & c &&
              a !== (a = (t[3] ? "text-yellow-500" : "") + " font-bold")) &&
          $(l, "class", a),
          (!A || 1 & c) && V !== (V = t[0].name + "") && x(k, V),
          (!A || 1 & c) && Q !== (Q = t[0].address + "") && x(_, Q),
          (!A || 1 & c) && R !== (R = t[0].description + "") && x(M, R),
          q(U, t, c);
      },
      i(t) {
        A || (P(e.$$.fragment, t), P(U.block), A = !0);
      },
      o(t) {
        D(e.$$.fragment, t);
        for (let t = 0; t < 3; t += 1) D(U.blocks[t]);
        A = !1;
      },
      d(t) {
        t && f(n),
          K(e),
          t && f(c),
          t && f(o),
          t && f(h),
          t && f(b),
          t && f(L),
          t && f(j),
          t && f(N),
          t && f(z),
          t && f(T),
          U.block.d(t),
          U.token = null,
          U = null,
          t && f(F),
          t && f(S),
          O = !1,
          B();
      },
    };
  }
  function bt(t, n, e) {
    let c, { place: o } = n, { places: r } = n;
    const l = Math.PI / 180,
      s = (t, n, e) => {
        t *= l, n *= l;
        const c = [];
        return e.forEach(
          ((e) => {
            let o = e.latitude * l,
              r = e.longitude * l,
              s = 6371 *
                Math.acos(
                  Math.cos(t) * Math.cos(o) * Math.cos(r - n) +
                    Math.sin(t) * Math.sin(o),
                );
            t == o && n == r || (e.distance = s, c.push(e));
          }),
        ),
          c.sort(((t, n) => t.distance < n.distance ? -1 : 1)),
          c.slice(0, 3);
      };
    let a = !1, i = [];
    const u = async () => {
      e(1, a = !0),
        console.log(o.latitude, o.longitude, r),
        e(2, i = s(o.latitude, o.longitude, r)),
        console.log(i);
      for (const t of i) {
        t.distance = (1e3 * parseFloat(t.distance)).toFixed() + "m";
      }
    };
    let f;
    const d = () => {
        const t = [parseFloat(o.latitude), parseFloat(o.longitude)];
        f = (f ?? L.map("access-map")).setView(t, 16),
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(f),
          L.marker(t).addTo(f);
      },
      p = async (t) => {
        e(0, o = t), await u(), d();
      },
      m = k();
    var h;
    h = d, w().$$.on_mount.push(h);
    return t.$$set = (t) => {
      "place" in t && e(0, o = t.place), "places" in t && e(7, r = t.places);
    },
      t.$$.update = () => {
        1 & t.$$.dirty && e(3, c = o.likes < 10);
      },
      [o, a, i, c, u, p, () => m("restore-reviews"), r, s, (t) => p(t)];
  }
  class wt extends U {
    constructor(t) {
      super(), R(this, t, bt, xt, r, { place: 0, places: 7, calcDistance: 8 });
    }
    get calcDistance() {
      return this.$$.ctx[8];
    }
  }
  function kt(n) {
    let e, c, o = n[9].message + "";
    return {
      c() {
        var t, n, r;
        e = d("p"),
          c = p(o),
          t = "color",
          n = "red",
          e.style.setProperty(t, n, r ? "important" : "");
      },
      m(t, n) {
        u(t, e, n), i(e, c);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(e);
      },
    };
  }
  function yt(t) {
    let n, e, c, o;
    const r = [_t, vt], l = [];
    function s(t, n) {
      return t[2] ? 0 : 1;
    }
    return n = s(t), e = l[n] = r[n](t), {
      c() {
        e.c(), c = h();
      },
      m(t, e) {
        l[n].m(t, e), u(t, c, e), o = !0;
      },
      p(t, o) {
        let a = n;
        n = s(t),
          n === a ? l[n].p(t, o) : (B(),
            D(
              l[a],
              1,
              1,
              (() => {
                l[a] = null;
              }),
            ),
            I(),
            e = l[n],
            e ? e.p(t, o) : (e = l[n] = r[n](t), e.c()),
            P(e, 1),
            e.m(c.parentNode, c));
      },
      i(t) {
        o || (P(e), o = !0);
      },
      o(t) {
        D(e), o = !1;
      },
      d(t) {
        l[n].d(t), t && f(c);
      },
    };
  }
  function vt(n) {
    let e;
    return {
      c() {
        e = d("div"),
          e.textContent = "Internal server error occurred.",
          $(e, "class", "row-span-5 text-center");
      },
      m(t, n) {
        u(t, e, n);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(e);
      },
    };
  }
  function _t(t) {
    let n, e, c, o;
    const r = [Et, Ct], l = [];
    function s(t, n) {
      return t[3] ? 0 : 1;
    }
    return n = s(t), e = l[n] = r[n](t), {
      c() {
        e.c(), c = h();
      },
      m(t, e) {
        l[n].m(t, e), u(t, c, e), o = !0;
      },
      p(t, o) {
        let a = n;
        n = s(t),
          n === a ? l[n].p(t, o) : (B(),
            D(
              l[a],
              1,
              1,
              (() => {
                l[a] = null;
              }),
            ),
            I(),
            e = l[n],
            e ? e.p(t, o) : (e = l[n] = r[n](t), e.c()),
            P(e, 1),
            e.m(c.parentNode, c));
      },
      i(t) {
        o || (P(e), o = !0);
      },
      o(t) {
        D(e), o = !1;
      },
      d(t) {
        l[n].d(t), t && f(c);
      },
    };
  }
  function Ct(t) {
    let n, e;
    return n = new ut({ props: { place: t[0][t[1]] } }),
      n.$on("next", t[5]),
      n.$on("like", t[4]),
      {
        c() {
          G(n.$$.fragment);
        },
        m(t, c) {
          J(n, t, c), e = !0;
        },
        p(t, e) {
          const c = {};
          3 & e && (c.place = t[0][t[1]]), n.$set(c);
        },
        i(t) {
          e || (P(n.$$.fragment, t), e = !0);
        },
        o(t) {
          D(n.$$.fragment, t), e = !1;
        },
        d(t) {
          K(n, t);
        },
      };
  }
  function Et(t) {
    let n, e;
    return n = new wt({ props: { place: t[0][t[1]], places: t[0] } }),
      n.$on("restore-reviews", t[8]),
      {
        c() {
          G(n.$$.fragment);
        },
        m(t, c) {
          J(n, t, c), e = !0;
        },
        p(t, e) {
          const c = {};
          3 & e && (c.place = t[0][t[1]]),
            1 & e && (c.places = t[0]),
            n.$set(c);
        },
        i(t) {
          e || (P(n.$$.fragment, t), e = !0);
        },
        o(t) {
          D(n.$$.fragment, t), e = !1;
        },
        d(t) {
          K(n, t);
        },
      };
  }
  function Mt(n) {
    let e;
    return {
      c() {
        e = d("div"),
          e.textContent = "Loading...",
          $(e, "class", "row-span-5 text-center");
      },
      m(t, n) {
        u(t, e, n);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(e);
      },
    };
  }
  function Lt(t) {
    let n, e, c, o, r, l, s, a;
    e = new nt({}), e.$on("click", t[7]);
    let p = {
      ctx: t,
      current: null,
      token: null,
      hasCatch: !0,
      pending: Mt,
      then: yt,
      catch: kt,
      error: 9,
      blocks: [, , ],
    };
    return H(t[6](), p), {
      c() {
        n = d("div"),
          G(e.$$.fragment),
          c = m(),
          o = d("main"),
          p.block.c(),
          l = m(),
          s = d("footer"),
          $(o, "id", "place"),
          $(
            o,
            "class",
            r = "row-span-6 " + (t[3]
              ? "flex flex-col"
              : "grid grid-rows-5 gap-y-3") +
              " p-3 md:w-2/5 md:mx-auto overflow-y-scroll scroll-bar-none",
          ),
          $(s, "class", "bg-gray-200 z-10"),
          $(n, "class", "grid grid-rows-8 h-screen");
      },
      m(t, r) {
        u(t, n, r),
          J(e, n, null),
          i(n, c),
          i(n, o),
          p.block.m(o, p.anchor = null),
          p.mount = () => o,
          p.anchor = null,
          i(n, l),
          i(n, s),
          a = !0;
      },
      p(n, [e]) {
        q(p, t = n, e),
          (!a || 8 & e && r !== (r = "row-span-6 " + (t[3]
                  ? "flex flex-col"
                  : "grid grid-rows-5 gap-y-3") +
                  " p-3 md:w-2/5 md:mx-auto overflow-y-scroll scroll-bar-none")) &&
          $(o, "class", r);
      },
      i(t) {
        a || (P(e.$$.fragment, t), P(p.block), a = !0);
      },
      o(t) {
        D(e.$$.fragment, t);
        for (let t = 0; t < 3; t += 1) D(p.blocks[t]);
        a = !1;
      },
      d(t) {
        t && f(n), K(e), p.block.d(), p.token = null, p = null;
      },
    };
  }
  function jt(t, n, e) {
    let c = [], o = 0, r = !1, l = !1;
    const s = () => {
      const t = c.length;
      e(1, o = (o + 1) % (0 === t ? 1 : t));
    };
    return [
      c,
      o,
      r,
      l,
      () => {
        e(3, l = !0);
      },
      s,
      async () => {
        e(0, c = await (await fetch("places.json")).json()),
          console.log(c),
          e(2, r = !0);
      },
      () => {
        l && (s(), e(3, l = !1));
      },
      () => {
        e(3, l = !1), s();
      },
    ];
  }
  return new class extends U {
    constructor(t) {
      super(), R(this, t, jt, Lt, r, {});
    }
  }({ target: document.body, props: {} });
}();
//# sourceMappingURL=bundle.js.map
