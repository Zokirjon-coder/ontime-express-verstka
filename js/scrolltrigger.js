/*!
 * ScrollTrigger 3.10.3
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function p() {
    return (
      me ||
      ("undefined" != typeof window &&
        (me = window.gsap) &&
        me.registerPlugin &&
        me)
    );
  }
  function x(e, t) {
    return ~Ye.indexOf(e) && Ye[Ye.indexOf(e) + 1][t];
  }
  function y(e) {
    return !!~t.indexOf(e);
  }
  function z(e, t, r, n, i) {
    return e.addEventListener(t, r, { passive: !n, capture: !!i });
  }
  function A(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function D() {
    return (De && De.isPressed) || a.cache++;
  }
  function E(t) {
    return function (e) {
      return (
        e || 0 === e
          ? (r && (xe.history.scrollRestoration = "manual"),
            t(e),
            (t.v = e),
            (t.c = a.cache),
            De && De.isPressed && i("ss", e))
          : (a.cache === t.c && !i("ref")) || ((t.c = a.cache), (t.v = t())),
        t.v
      );
    };
  }
  function H(e) {
    return (
      me.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== me.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function I(t, e) {
    var r = e.s,
      n = e.sc,
      i = a.indexOf(t),
      o = n === We.sc ? 1 : 2;
    return (
      ~i || (i = a.push(t) - 1),
      a[i + o] ||
        (a[i + o] =
          x(t, r) ||
          (y(t)
            ? n
            : function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              }))
    );
  }
  function J(e, t, i) {
    function gd(e, t) {
      var r = Xe();
      t || n < r - s
        ? ((a = o), (o = e), (l = s), (s = r))
        : i
        ? (o += e)
        : (o = a + ((e - a) / (r - l)) * (s - l));
    }
    var o = e,
      a = e,
      s = Xe(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: gd,
      reset: function reset() {
        (a = o = i ? 0 : o), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Xe();
        return (
          (!e && 0 !== e) || e === o || gd(e),
          s === l || c < n - l
            ? 0
            : ((o + (i ? r : -r)) / ((i ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function K(e, t) {
    return t && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }
  function L(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function M() {
    (ze = me.core.globals().ScrollTrigger) &&
      ze.core &&
      (function _integrate() {
        var e = ze.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, a),
          n.push.apply(n, Ye),
          (a = t),
          (Ye = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function N(e) {
    return (
      (me = e || p()) &&
        "undefined" != typeof document &&
        document.body &&
        ((xe = window),
        (_e = (we = document).documentElement),
        (ke = we.body),
        (t = [xe, we, _e, ke]),
        me.utils.clamp,
        (Ae = "onpointerenter" in ke ? "pointer" : "mouse"),
        (Ce = w.isTouch =
          xe.matchMedia &&
          xe.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in xe ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        setTimeout(function () {
          return (r = 0);
        }, 500),
        M(),
        (ye = 1)),
      ye
    );
  }
  var me,
    ye,
    xe,
    we,
    _e,
    ke,
    Ce,
    Ae,
    ze,
    t,
    De,
    r = 1,
    Be = [],
    a = [],
    Ye = [],
    Xe = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    o = "scrollTop",
    Ge = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: E(function (e) {
        return arguments.length
          ? xe.scrollTo(e, We.sc())
          : xe.pageXOffset || we[n] || _e[n] || ke[n] || 0;
      }),
    },
    We = {
      s: o,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ge,
      sc: E(function (e) {
        return arguments.length
          ? xe.scrollTo(Ge.sc(), e)
          : xe.pageYOffset || we[o] || _e[o] || ke[o] || 0;
      }),
    };
  (Ge.op = We), (a.cache = 0);
  var w =
    ((Observer.prototype.init = function init(e) {
      ye || N(me) || console.warn("Please gsap.registerPlugin(Observer)"),
        ze || M();
      var i = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        n = e.target,
        r = e.lineHeight,
        o = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        b = e.onPress,
        v = e.onRelease,
        m = e.onRight,
        x = e.onLeft,
        w = e.onUp,
        S = e.onDown,
        T = e.onChangeX,
        _ = e.onChangeY,
        k = e.onChange,
        P = e.onToggleX,
        E = e.onToggleY,
        C = e.onHover,
        O = e.onHoverEnd,
        F = e.onMove,
        R = e.ignoreCheck,
        B = e.isNormalizer,
        Y = e.onGestureStart,
        X = e.onGestureEnd,
        G = e.onWheel,
        W = e.onEnable,
        V = e.onDisable,
        j = e.onClick,
        q = e.scrollSpeed,
        U = e.capture,
        Z = e.allowClicks;
      function Ee() {
        return (be = Xe());
      }
      function Fe(e, t) {
        return (
          ((ne.event = e) && u && ~u.indexOf(e.target)) ||
          (t && fe && "touch" !== e.pointerType) ||
          (R && R(e, t))
        );
      }
      function He() {
        var e = (ne.deltaX = L(ge)),
          t = (ne.deltaY = L(he)),
          r = Math.abs(e) >= i,
          n = Math.abs(t) >= i;
        k && (r || n) && k(ne, e, t, ge, he),
          r &&
            (m && 0 < ne.deltaX && m(ne),
            x && ne.deltaX < 0 && x(ne),
            T && T(ne),
            P && ne.deltaX < 0 != ie < 0 && P(ne),
            (ie = ne.deltaX),
            (ge[0] = ge[1] = ge[2] = 0)),
          n &&
            (S && 0 < ne.deltaY && S(ne),
            w && ne.deltaY < 0 && w(ne),
            _ && _(ne),
            E && ne.deltaY < 0 != oe < 0 && E(ne),
            (oe = ne.deltaY),
            (he[0] = he[1] = he[2] = 0)),
          (te || ee) && (F && F(ne), (te = !1)),
          ee && (h(ne), (ee = !1)),
          re && (G(ne), (re = !1)),
          (Q = 0);
      }
      function Ie(e, t, r) {
        (ge[r] += e),
          (he[r] += t),
          ne._vx.update(e, 2 === r),
          ne._vy.update(t, 2 === r),
          o ? (Q = Q || requestAnimationFrame(He)) : He();
      }
      function Je(e) {
        if (!Fe(e, 1)) {
          var t = (e = K(e, s)).clientX,
            r = e.clientY,
            n = t - ne.x,
            i = r - ne.y,
            o = ne.isDragging;
          (ne.x = t),
            (ne.y = r),
            (o ||
              Math.abs(ne.startX - t) >= a ||
              Math.abs(ne.startY - r) >= a) &&
              (h && (ee = !0),
              o || (ne.isDragging = !0),
              Ie(n, i, 2),
              o || (p && p(ne)));
        }
      }
      function Le(t) {
        if (!Fe(t, 1)) {
          A(B ? n : pe, ue[1], Je);
          var e =
              ne.isDragging &&
              (3 < Math.abs(ne.x - ne.startX) ||
                3 < Math.abs(ne.y - ne.startY)),
            r = K(t);
          e ||
            (ne._vx.reset(),
            ne._vy.reset(),
            s &&
              Z &&
              me.delayedCall(0.05, function () {
                if (300 < Xe() - be && !t.defaultPrevented)
                  if (t.target.click) t.target.click();
                  else if (pe.createEvent) {
                    var e = pe.createEvent("MouseEvents");
                    e.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      xe,
                      1,
                      r.screenX,
                      r.screenY,
                      r.clientX,
                      r.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      t.target.dispatchEvent(e);
                  }
              })),
            (ne.isDragging = ne.isGesturing = ne.isPressed = !1),
            l && !B && $.restart(!0),
            g && e && g(ne),
            v && v(ne, e);
        }
      }
      function Me(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (ne.isGesturing = !0) &&
          Y(e, ne.isDragging)
        );
      }
      function Ne() {
        return (ne.isGesturing = !1) || X(ne);
      }
      function Oe(e) {
        if (!Fe(e)) {
          var t = ae(),
            r = se();
          Ie((t - le) * q, (r - ce) * q, 1),
            (le = t),
            (ce = r),
            l && $.restart(!0);
        }
      }
      function Pe(e) {
        if (!Fe(e)) {
          (e = K(e, s)), G && (re = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? xe.innerHeight : 1) *
            f;
          Ie(e.deltaX * t, e.deltaY * t, 0), l && !B && $.restart(!0);
        }
      }
      function Qe(e) {
        if (!Fe(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - ne.x,
            i = r - ne.y;
          (ne.x = t), (ne.y = r), F && (te = !0), (n || i) && Ie(n, i, 2);
        }
      }
      function Re(e) {
        (ne.event = e), C(ne);
      }
      function Se(e) {
        (ne.event = e), O(ne);
      }
      function Te(e) {
        return Fe(e) || (K(e, s) && j(ne));
      }
      (this.target = n = H(n) || _e),
        (this.vars = e),
        (u = u && me.utils.toArray(u)),
        (i = i || 0),
        (a = a || 0),
        (f = f || 1),
        (q = q || 1),
        (t = t || "wheel,touch,pointer"),
        (o = !1 !== o),
        (r = r || parseFloat(xe.getComputedStyle(ke).lineHeight) || 22);
      var Q,
        $,
        ee,
        te,
        re,
        ne = this,
        ie = 0,
        oe = 0,
        ae = I(n, Ge),
        se = I(n, We),
        le = ae(),
        ce = se(),
        ue = (
          "ontouchstart" in _e
            ? "touchstart,touchmove,touchcancel,touchend"
            : 0 <= t.indexOf("pointer") && !("onpointerdown" in _e)
            ? "mousedown,mousemove,mouseup,mouseup"
            : "pointerdown,pointermove,pointercancel,pointerup"
        ).split(","),
        fe =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === ue[0],
        de = y(n),
        pe = n.ownerDocument || we,
        ge = [0, 0, 0],
        he = [0, 0, 0],
        be = 0,
        ve = (ne.onPress = function (e) {
          Fe(e, 1) ||
            ($.pause(),
            (ne.isPressed = !0),
            (e = K(e, s)),
            (ie = oe = 0),
            (ne.startX = ne.x = e.clientX),
            (ne.startY = ne.y = e.clientY),
            ne._vx.reset(),
            ne._vy.reset(),
            z(B ? n : pe, ue[1], Je, s, U),
            (ne.deltaX = ne.deltaY = 0),
            b && b(ne));
        });
      ($ = ne._dc =
        me
          .delayedCall(c || 0.25, function onStopFunc() {
            ne._vx.reset(), ne._vy.reset(), $.pause(), l && l(ne);
          })
          .pause()),
        (ne.deltaX = ne.deltaY = 0),
        (ne._vx = J(0, 50, !0)),
        (ne._vy = J(0, 50, !0)),
        (ne.scrollX = ae),
        (ne.scrollY = se),
        (ne.isDragging = ne.isGesturing = ne.isPressed = !1),
        (ne.enable = function (e) {
          return (
            ne.isEnabled ||
              (z(de ? pe : n, "scroll", D),
              0 <= t.indexOf("scroll") && z(de ? pe : n, "scroll", Oe, s, U),
              0 <= t.indexOf("wheel") && z(n, "wheel", Pe, s, U),
              ((0 <= t.indexOf("touch") && Ce) || 0 <= t.indexOf("pointer")) &&
                (z(n, ue[0], ve, s, U),
                z(pe, ue[2], Le),
                z(pe, ue[3], Le),
                Z && z(n, "click", Ee, !1, !0),
                j && z(n, "click", Te),
                Y && z(pe, "gesturestart", Me),
                X && z(pe, "gestureend", Ne),
                C && z(n, Ae + "enter", Re),
                O && z(n, Ae + "leave", Se),
                F && z(n, Ae + "move", Qe)),
              (ne.isEnabled = !0),
              e && e.type && ve(e),
              W && W(ne)),
            ne
          );
        }),
        (ne.disable = function () {
          ne.isEnabled &&
            (Be.filter(function (e) {
              return e !== ne && y(e.target);
            }).length || A(de ? pe : n, "scroll", D),
            ne.isPressed &&
              (ne._vx.reset(), ne._vy.reset(), A(B ? n : pe, ue[1], Je)),
            A(de ? pe : n, "scroll", Oe),
            A(n, "wheel", Pe),
            A(n, ue[0], ve),
            A(pe, ue[2], Le),
            A(pe, ue[3], Le),
            A(n, "click", Ee),
            A(n, "click", Te),
            A(pe, "gesturestart", Me),
            A(pe, "gestureend", Ne),
            A(n, Ae + "enter", Re),
            A(n, Ae + "leave", Se),
            A(n, Ae + "move", Qe),
            (ne.isEnabled = ne.isPressed = ne.isDragging = !1),
            V && V(ne));
        }),
        (ne.kill = function () {
          ne.disable();
          var e = Be.indexOf(ne);
          0 <= e && Be.splice(e, 1), De === ne && (De = 0);
        }),
        Be.push(ne),
        B && (De = ne),
        ne.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (w.version = "3.10.3"),
    (w.create = function (e) {
      return new w(e);
    }),
    (w.register = N),
    (w.getAll = function () {
      return Be.slice();
    }),
    (w.getById = function (t) {
      return Be.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    p() && me.registerPlugin(w);
  function ta() {
    return (rt = 1);
  }
  function ua() {
    return (rt = 0);
  }
  function va(e) {
    return e;
  }
  function wa(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function xa() {
    return "undefined" != typeof window;
  }
  function ya() {
    return Ve || (xa() && (Ve = window.gsap) && Ve.registerPlugin && Ve);
  }
  function za(e) {
    return !!~l.indexOf(e);
  }
  function Aa(e) {
    return (
      x(e, "getBoundingClientRect") ||
      (za(e)
        ? function () {
            return (zt.width = je.innerWidth), (zt.height = je.innerHeight), zt;
          }
        : function () {
            return kt(e);
          })
    );
  }
  function Da(e, t) {
    var r = t.s,
      n = t.d2,
      i = t.d,
      o = t.a;
    return (r = "scroll" + n) && (o = x(e, r))
      ? o() - Aa(e)()[i]
      : za(e)
      ? (qe[r] || Ue[r]) -
        (je["inner" + n] || qe["client" + n] || Ue["client" + n])
      : e[r] - e["offset" + n];
  }
  function Ea(e, t) {
    for (var r = 0; r < h.length; r += 3)
      (t && !~t.indexOf(h[r + 1])) || e(h[r], h[r + 1], h[r + 2]);
  }
  function Fa(e) {
    return "string" == typeof e;
  }
  function Ga(e) {
    return "function" == typeof e;
  }
  function Ha(e) {
    return "number" == typeof e;
  }
  function Ia(e) {
    return "object" == typeof e;
  }
  function Ja(e) {
    return Ga(e) && e();
  }
  function Ka(r, n) {
    return function () {
      var e = Ja(r),
        t = Ja(n);
      return function () {
        Ja(e), Ja(t);
      };
    };
  }
  function La(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Ma(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function bb(e) {
    return je.getComputedStyle(e);
  }
  function db(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function fb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function gb(e) {
    var t,
      r = [],
      n = e.labels,
      i = e.duration();
    for (t in n) r.push(n[t] / i);
    return r;
  }
  function ib(i) {
    var o = Ve.utils.snap(i),
      a =
        Array.isArray(i) &&
        i.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return o(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = o(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : o(t < 0 ? e - i : e + i);
        };
  }
  function kb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function lb(e, t, r, n, i) {
    return e.addEventListener(t, r, { passive: !n, capture: !!i });
  }
  function mb(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function nb(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }
  function rb(e, t) {
    if (Fa(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in R
            ? R[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function sb(e, t, r, n, i, o, a, s) {
    var l = i.startColor,
      c = i.endColor,
      u = i.fontSize,
      f = i.indent,
      d = i.fontWeight,
      p = Ke.createElement("div"),
      g = za(r) || "fixed" === x(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      b = g ? Ue : r,
      v = -1 !== e.indexOf("start"),
      m = v ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (y += (n === We ? C : O) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = v),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      B(p, 0, n, v),
      p
    );
  }
  function xb() {
    return 34 < ft() - dt && $();
  }
  function yb() {
    (v && v.isPressed) ||
      (a.cache++,
      (_ = _ || requestAnimationFrame($)),
      dt || W("scrollStart"),
      (dt = ft()));
  }
  function zb() {
    a.cache++,
      tt ||
        b ||
        Ke.fullscreenElement ||
        (m &&
          T === je.innerWidth &&
          !(Math.abs(je.innerHeight - S) > 0.25 * je.innerHeight)) ||
        c.restart(!0);
  }
  function Fb(e) {
    var t,
      r = Ve.ticker.frame,
      n = [],
      i = 0;
    if (k !== r || ut) {
      for (q(); i < G.length; i += 4)
        (t = je.matchMedia(G[i]).matches) !== G[i + 3] &&
          ((G[i + 3] = t)
            ? n.push(i)
            : q(1, G[i]) || (Ga(G[i + 2]) && G[i + 2]()));
      for (j(), i = 0; i < n.length; i++)
        (t = n[i]), (st = G[t]), (G[t + 2] = G[t + 1](e));
      (st = 0), s && Z(0, 1), (k = r), W("matchMedia");
    }
  }
  function Gb() {
    return mb(ie, "scrollEnd", Gb) || Z(!0);
  }
  function Lb() {
    return (
      a.cache++ &&
      a.forEach(function (e) {
        return "function" == typeof e && (e.rec = 0);
      })
    );
  }
  function Wb(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var i, o = ee.length, a = t.style, s = e.style; o--; )
        a[(i = ee[o])] = r[i];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[O] = s[C] = a.flexBasis = "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[ht] = fb(e, Ge) + _t),
        (a[bt] = fb(e, We) + _t),
        (a[wt] = s[St] = s.top = s.left = "0"),
        At(n),
        (s[ht] = s.maxWidth = r[ht]),
        (s[bt] = s.maxHeight = r[bt]),
        (s[wt] = r[wt]),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e);
    }
  }
  function Zb(e) {
    for (var t = te.length, r = e.style, n = [], i = 0; i < t; i++)
      n.push(te[i], r[te[i]]);
    return (n.t = e), n;
  }
  function ac(e, t, r, n, i, o, a, s, l, c, u, f, d) {
    Ga(e) && (e = e(s)),
      Fa(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? rb("0" + e.substr(3), r) : 0));
    var p,
      g,
      h,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), Ha(e))) a && B(a, r, n, !0);
    else {
      Ga(t) && (t = t(s));
      var v,
        m,
        y,
        x,
        w = e.split(" ");
      (h = H(t) || Ue),
        ((v = kt(h) || {}) && (v.left || v.top)) ||
          "none" !== bb(h).display ||
          ((x = h.style.display),
          (h.style.display = "block"),
          (v = kt(h)),
          x ? (h.style.display = x) : h.style.removeProperty("display")),
        (m = rb(w[0], v[n.d])),
        (y = rb(w[1] || "0", r)),
        (e = v[n.p] - l[n.p] - c + m + i - y),
        a && B(a, y, n, r - y < 20 || (a._isStart && 20 < y)),
        (r -= r - y);
    }
    if (o) {
      var S = e + r,
        T = o._isStart;
      (p = "scroll" + n.d2),
        B(
          o,
          S,
          n,
          (T && 20 < S) ||
            (!T && (u ? Math.max(Ue[p], qe[p]) : o.parentNode[p]) <= S + 1)
        ),
        u &&
          ((l = kt(a)),
          u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + _t));
    }
    return (
      d &&
        h &&
        ((p = kt(h)),
        d.seek(f),
        (g = kt(h)),
        (d._caScrollDist = p[n.p] - g[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function cc(e, t, r, n) {
    if (e.parentNode !== t) {
      var i,
        o,
        a = e.style;
      if (t === Ue) {
        for (i in ((e._stOrig = a.cssText), (o = bb(e))))
          +i ||
            ne.test(i) ||
            !o[i] ||
            "string" != typeof a[i] ||
            "0" === i ||
            (a[i] = o[i]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Ve.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function dc(l, e) {
    function Bj(e, t, r, n, i) {
      var o = Bj.tween,
        a = t.onComplete,
        s = {};
      return (
        (r = r || f()),
        (i = (n && i) || 0),
        (n = n || e - r),
        o && o.kill(),
        (c = Math.round(r)),
        (t[d] = e),
        ((t.modifiers = s)[d] = function (e) {
          return (
            (e = wa(f())) !== c &&
            e !== u &&
            2 < Math.abs(e - c) &&
            2 < Math.abs(e - u)
              ? (o.kill(), (Bj.tween = 0))
              : (e = r + n * o.ratio + i * o.ratio * o.ratio),
            (u = c),
            (c = wa(e))
          );
        }),
        (t.onComplete = function () {
          (Bj.tween = 0), a && a.call(o);
        }),
        (o = Bj.tween = Ve.to(l, t))
      );
    }
    var c,
      u,
      f = I(l, e),
      d = "_scroll" + e.p2;
    return (
      ((l[d] = f).wheelHandler = function () {
        return Bj.tween && Bj.tween.kill() && (Bj.tween = 0);
      }),
      lb(l, "wheel", f.wheelHandler),
      Bj
    );
  }
  var Ve,
    s,
    je,
    Ke,
    qe,
    Ue,
    l,
    c,
    Ze,
    $e,
    et,
    u,
    tt,
    rt,
    f,
    nt,
    d,
    g,
    h,
    it,
    ot,
    b,
    v,
    m,
    S,
    T,
    at,
    _,
    st,
    k,
    lt,
    ct,
    ut = 1,
    ft = Date.now,
    P = ft(),
    dt = 0,
    pt = 0,
    gt = Math.abs,
    C = "right",
    O = "bottom",
    ht = "width",
    bt = "height",
    vt = "Right",
    mt = "Left",
    yt = "Top",
    xt = "Bottom",
    wt = "padding",
    St = "margin",
    Tt = "Width",
    F = "Height",
    _t = "px",
    kt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== bb(e)[f] &&
          Ve.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    Mt = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Pt = { toggleActions: "play", anticipatePin: 0 },
    R = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    B = function _positionMarker(e, t, r, n) {
      var i = { display: "block" },
        o = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (i[r.a + "Percent"] = n ? -100 : 0),
        (i[r.a] = n ? "1px" : 0),
        (i["border" + o + Tt] = 1),
        (i["border" + a + Tt] = 0),
        (i[r.p] = t + "px"),
        Ve.set(e, i);
    },
    Et = [],
    Ct = {},
    Y = {},
    X = [],
    G = [],
    W = function _dispatch(e) {
      return (
        (Y[e] &&
          Y[e].map(function (e) {
            return e();
          })) ||
        X
      );
    },
    V = [],
    j = function _revertRecorded(e) {
      for (var t = 0; t < V.length; t += 5)
        (e && V[t + 4] !== e) ||
          ((V[t].style.cssText = V[t + 1]),
          V[t].getBBox && V[t].setAttribute("transform", V[t + 2] || ""),
          (V[t + 3].uncache = 1));
    },
    q = function _revertAll(e, t) {
      var r;
      for (nt = 0; nt < Et.length; nt++)
        (r = Et[nt]), (t && r.media !== t) || (e ? r.kill(1) : r.revert());
      t && j(t), t || W("revert");
    },
    U = 0,
    Z = function _refreshAll(e, t) {
      if (!dt || e) {
        lt = !0;
        var r = W("refreshInit");
        it && ie.sort(),
          t || q(),
          Et.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          Et.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(e.start, Da(e.scroller, e._dir))
            );
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          Lb(),
          c.pause(),
          U++,
          (lt = !1),
          W("refresh");
      } else lb(ie, "scrollEnd", Gb);
    },
    Q = 0,
    Ot = 1,
    $ = function _updateAll() {
      if (!lt) {
        ct && ct.update(0), (ie.isUpdating = !0);
        var e = Et.length,
          t = ft(),
          r = 50 <= t - P,
          n = e && Et[0].scroll();
        if (
          ((Ot = n < Q ? -1 : 1),
          (Q = n),
          r &&
            (dt && !rt && 200 < t - dt && ((dt = 0), W("scrollEnd")),
            (et = P),
            (P = t)),
          Ot < 0)
        ) {
          for (nt = e; 0 < nt--; ) Et[nt] && Et[nt].update(0, r);
          Ot = 1;
        } else for (nt = 0; nt < e; nt++) Et[nt] && Et[nt].update(0, r);
        ie.isUpdating = !1;
      }
      _ = 0;
    },
    ee = [
      "left",
      "top",
      O,
      C,
      St + xt,
      St + vt,
      St + yt,
      St + mt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    te = ee.concat([
      ht,
      bt,
      "boxSizing",
      "max" + Tt,
      "max" + F,
      "position",
      St,
      wt,
      wt + yt,
      wt + vt,
      wt + xt,
      wt + mt,
    ]),
    re = /([A-Z])/g,
    At = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || Ve.core.getCache(e.t)).uncache = 1; o < i; o += 2)
          (r = e[o + 1]),
            (t = e[o]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(re, "-$1").toLowerCase());
      }
    },
    zt = { left: 0, top: 0 },
    ne = /(webkit|moz|length|cssText|inset)/i,
    ie =
      ((ScrollTrigger.prototype.init = function init(T, _) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), pt)
        ) {
          var k,
            n,
            p,
            M,
            P,
            E,
            C,
            O,
            A,
            z,
            D,
            e,
            F,
            L,
            R,
            B,
            Y,
            t,
            X,
            v,
            N,
            G,
            m,
            W,
            y,
            w,
            r,
            S,
            V,
            j,
            i,
            g,
            J,
            K,
            q,
            U,
            Z,
            o,
            Q = (T = db(Fa(T) || Ha(T) || T.nodeType ? { trigger: T } : T, Pt))
              .onUpdate,
            $ = T.toggleClass,
            a = T.id,
            ee = T.onToggle,
            te = T.onRefresh,
            re = T.scrub,
            ne = T.trigger,
            ie = T.pin,
            oe = T.pinSpacing,
            ae = T.invalidateOnRefresh,
            se = T.anticipatePin,
            s = T.onScrubComplete,
            h = T.onSnapComplete,
            le = T.once,
            ce = T.snap,
            ue = T.pinReparent,
            l = T.pinSpacer,
            fe = T.containerAnimation,
            de = T.fastScrollEnd,
            pe = T.preventOverlaps,
            ge =
              T.horizontal || (T.containerAnimation && !1 !== T.horizontal)
                ? Ge
                : We,
            he = !re && 0 !== re,
            be = H(T.scroller || je),
            c = Ve.core.getCache(be),
            ve = za(be),
            me =
              "fixed" ===
              ("pinType" in T
                ? T.pinType
                : x(be, "pinType") || (ve && "fixed")),
            ye = [T.onEnter, T.onLeave, T.onEnterBack, T.onLeaveBack],
            xe = he && T.toggleActions.split(" "),
            u = "markers" in T ? T.markers : Pt.markers,
            we = ve ? 0 : parseFloat(bb(be)["border" + ge.p2 + Tt]) || 0,
            Se = this,
            Te =
              T.onRefreshInit &&
              function () {
                return T.onRefreshInit(Se);
              },
            _e = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                i = r.d2,
                o = r.a;
              return (o = x(e, "getBoundingClientRect"))
                ? function () {
                    return o()[n];
                  }
                : function () {
                    return (t ? je["inner" + i] : e["client" + i]) || 0;
                  };
            })(be, ve, ge),
            ke = (function _getOffsetsFunc(e, t) {
              return !t || ~Ye.indexOf(e)
                ? Aa(e)
                : function () {
                    return zt;
                  };
            })(be, ve),
            Me = 0,
            Pe = 0,
            Ee = I(be, ge);
          if (
            ((Se.media = st),
            (Se._dir = ge),
            (se *= 45),
            (Se.scroller = be),
            (Se.scroll = fe ? fe.time.bind(fe) : Ee),
            (M = Ee()),
            (Se.vars = T),
            (_ = _ || T.animation),
            "refreshPriority" in T &&
              ((it = 1), -9999 === T.refreshPriority && (ct = Se)),
            (c.tweenScroll = c.tweenScroll || {
              top: dc(be, We),
              left: dc(be, Ge),
            }),
            (Se.tweenTo = k = c.tweenScroll[ge.p]),
            (Se.scrubDuration = function (e) {
              (i = Ha(e) && e)
                ? j
                  ? j.duration(e)
                  : (j = Ve.to(_, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: i,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Se);
                      },
                    }))
                : (j && j.progress(1).kill(), (j = 0));
            }),
            _ &&
              ((_.vars.lazy = !1),
              _._initted ||
                (!1 !== _.vars.immediateRender &&
                  !1 !== T.immediateRender &&
                  _.render(0, !0, !0)),
              (Se.animation = _.pause()),
              (_.scrollTrigger = Se).scrubDuration(re),
              (S = 0),
              (a = a || _.vars.id)),
            Et.push(Se),
            ce &&
              ((Ia(ce) && !ce.push) || (ce = { snapTo: ce }),
              "scrollBehavior" in Ue.style &&
                Ve.set(ve ? [Ue, qe] : be, { scrollBehavior: "auto" }),
              (p = Ga(ce.snapTo)
                ? ce.snapTo
                : "labels" === ce.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return Ve.utils.snap(gb(t), e);
                    };
                  })(_)
                : "labelsDirectional" === ce.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return ib(gb(r))(e, t.direction);
                    };
                  })(_)
                : !1 !== ce.directional
                ? function (e, t) {
                    return ib(ce.snapTo)(e, ft() - Pe < 500 ? 0 : t.direction);
                  }
                : Ve.utils.snap(ce.snapTo)),
              (g = ce.duration || { min: 0.1, max: 2 }),
              (g = Ia(g) ? $e(g.min, g.max) : $e(g, g)),
              (J = Ve.delayedCall(ce.delay || i / 2 || 0.1, function () {
                var e = Ee(),
                  t = ft() - Pe < 500,
                  r = k.tween;
                if (
                  !(t || Math.abs(Se.getVelocity()) < 10) ||
                  r ||
                  rt ||
                  Me === e
                )
                  Se.isActive && Me !== e && J.restart(!0);
                else {
                  var n = (e - E) / F,
                    i = _ && !he ? _.totalProgress() : n,
                    o = t ? 0 : ((i - V) / (ft() - et)) * 1e3 || 0,
                    a = Ve.utils.clamp(-n, 1 - n, (gt(o / 2) * o) / 0.185),
                    s = n + (!1 === ce.inertia ? 0 : a),
                    l = $e(0, 1, p(s, Se)),
                    c = Math.round(E + l * F),
                    u = ce.onStart,
                    f = ce.onInterrupt,
                    d = ce.onComplete;
                  if (e <= C && E <= e && c !== e) {
                    if (r && !r._initted && r.data <= gt(c - e)) return;
                    !1 === ce.inertia && (a = l - n),
                      k(
                        c,
                        {
                          duration: g(
                            gt(
                              (0.185 * Math.max(gt(s - i), gt(l - i))) /
                                o /
                                0.05 || 0
                            )
                          ),
                          ease: ce.ease || "power3",
                          data: gt(c - e),
                          onInterrupt: function onInterrupt() {
                            return J.restart(!0) && f && f(Se);
                          },
                          onComplete: function onComplete() {
                            Se.update(),
                              (Me = Ee()),
                              (S = V =
                                _ && !he ? _.totalProgress() : Se.progress),
                              h && h(Se),
                              d && d(Se);
                          },
                        },
                        e,
                        a * F,
                        c - e - a * F
                      ),
                      u && u(Se, k.tween);
                  }
                }
              }).pause())),
            a && (Ct[a] = Se),
            (o =
              (o =
                (ne = Se.trigger = H(ne || ie)) &&
                ne._gsap &&
                ne._gsap.stRevert) && o(Se)),
            (ie = !0 === ie ? ne : H(ie)),
            Fa($) && ($ = { targets: ne, className: $ }),
            ie &&
              (!1 === oe ||
                oe === St ||
                (oe = !(!oe && "flex" === bb(ie.parentNode).display) && wt),
              (Se.pin = ie),
              !1 !== T.force3D && Ve.set(ie, { force3D: !0 }),
              (n = Ve.core.getCache(ie)).spacer
                ? (L = n.pinState)
                : (l &&
                    ((l = H(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = Zb(l))),
                  (n.spacer = Y = l || Ke.createElement("div")),
                  Y.classList.add("pin-spacer"),
                  a && Y.classList.add("pin-spacer-" + a),
                  (n.pinState = L = Zb(ie))),
              (Se.spacer = Y = n.spacer),
              (r = bb(ie)),
              (m = r[oe + ge.os2]),
              (X = Ve.getProperty(ie)),
              (v = Ve.quickSetter(ie, ge.a, _t)),
              Wb(ie, Y, r),
              (B = Zb(ie))),
            u)
          ) {
            (e = Ia(u) ? db(u, Mt) : Mt),
              (z = sb("scroller-start", a, be, ge, e, 0)),
              (D = sb("scroller-end", a, be, ge, e, 0, z)),
              (t = z["offset" + ge.op.d2]);
            var f = H(x(be, "content") || be);
            (O = this.markerStart = sb("start", a, f, ge, e, t, 0, fe)),
              (A = this.markerEnd = sb("end", a, f, ge, e, t, 0, fe)),
              fe && (Z = Ve.quickSetter([O, A], ge.a, _t)),
              me ||
                (Ye.length && !0 === x(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = bb(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(ve ? Ue : be),
                Ve.set([z, D], { force3D: !0 }),
                (y = Ve.quickSetter(z, ge.a, _t)),
                (w = Ve.quickSetter(D, ge.a, _t)));
          }
          if (fe) {
            var d = fe.vars.onUpdate,
              b = fe.vars.onUpdateParams;
            fe.eventCallback("onUpdate", function () {
              Se.update(0, 0, 1), d && d.apply(b || []);
            });
          }
          (Se.previous = function () {
            return Et[Et.indexOf(Se) - 1];
          }),
            (Se.next = function () {
              return Et[Et.indexOf(Se) + 1];
            }),
            (Se.revert = function (e) {
              var t = !1 !== e || !Se.enabled,
                r = tt;
              t !== Se.isReverted &&
                (t &&
                  (!Se.scroll.rec && tt && lt && (Se.scroll.rec = Ee()),
                  (q = Math.max(Ee(), Se.scroll.rec || 0)),
                  (K = Se.progress),
                  (U = _ && _.progress())),
                O &&
                  [O, A, z, D].forEach(function (e) {
                    return (e.style.display = t ? "none" : "block");
                  }),
                t && (tt = 1),
                Se.update(t),
                (tt = r),
                ie &&
                  (t
                    ? (function _swapPinOut(e, t, r) {
                        At(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) At(n.spacerState);
                        else if (e.parentNode === t) {
                          var i = t.parentNode;
                          i && (i.insertBefore(e, t), i.removeChild(t));
                        }
                      })(ie, Y, L)
                    : (ue && Se.isActive) || Wb(ie, Y, bb(ie), W)),
                (Se.isReverted = t));
            }),
            (Se.refresh = function (e, t) {
              if ((!tt && Se.enabled) || t)
                if (ie && e && dt) lb(ScrollTrigger, "scrollEnd", Gb);
                else {
                  !lt && Te && Te(Se),
                    (tt = 1),
                    (Pe = ft()),
                    k.tween && (k.tween.kill(), (k.tween = 0)),
                    j && j.pause(),
                    ae && _ && _.time(-0.01, !0).invalidate(),
                    Se.isReverted || Se.revert();
                  for (
                    var r,
                      n,
                      i,
                      o,
                      a,
                      s,
                      l,
                      c,
                      u,
                      f,
                      d = _e(),
                      p = ke(),
                      g = fe ? fe.duration() : Da(be, ge),
                      h = 0,
                      b = 0,
                      v = T.end,
                      m = T.endTrigger || ne,
                      y =
                        T.start ||
                        (0 !== T.start && ne ? (ie ? "0 0" : "0 100%") : 0),
                      x = (Se.pinnedContainer =
                        T.pinnedContainer && H(T.pinnedContainer)),
                      w = (ne && Math.max(0, Et.indexOf(Se))) || 0,
                      S = w;
                    S--;

                  )
                    (s = Et[S]).end || s.refresh(0, 1) || (tt = 1),
                      !(l = s.pin) ||
                        (l !== ne && l !== ie) ||
                        s.isReverted ||
                        ((f = f || []).unshift(s), s.revert()),
                      s !== Et[S] && (w--, S--);
                  for (
                    Ga(y) && (y = y(Se)),
                      E =
                        ac(y, ne, d, ge, Ee(), O, z, Se, p, we, me, g, fe) ||
                        (ie ? -0.001 : 0),
                      Ga(v) && (v = v(Se)),
                      Fa(v) &&
                        !v.indexOf("+=") &&
                        (~v.indexOf(" ")
                          ? (v = (Fa(y) ? y.split(" ")[0] : "") + v)
                          : ((h = rb(v.substr(2), d)),
                            (v = Fa(y) ? y : E + h),
                            (m = ne))),
                      C =
                        Math.max(
                          E,
                          ac(
                            v || (m ? "100% 0" : g),
                            m,
                            d,
                            ge,
                            Ee() + h,
                            A,
                            D,
                            Se,
                            p,
                            we,
                            me,
                            g,
                            fe
                          )
                        ) || -0.001,
                      F = C - E || ((E -= 0.01) && 0.001),
                      h = 0,
                      S = w;
                    S--;

                  )
                    (l = (s = Et[S]).pin) &&
                      s.start - s._pinPush < E &&
                      !fe &&
                      0 < s.end &&
                      ((r = s.end - s.start),
                      (l !== ne && l !== x) ||
                        Ha(y) ||
                        (h += r * (1 - s.progress)),
                      l === ie && (b += r));
                  if (
                    ((E += h),
                    (C += h),
                    (Se._pinPush = b),
                    O &&
                      h &&
                      (((r = {})[ge.a] = "+=" + h),
                      x && (r[ge.p] = "-=" + Ee()),
                      Ve.set([O, A], r)),
                    ie)
                  )
                    (r = bb(ie)),
                      (o = ge === We),
                      (i = Ee()),
                      (N = parseFloat(X(ge.a)) + b),
                      !g &&
                        1 < C &&
                        ((ve ? Ue : be).style["overflow-" + ge.a] = "scroll"),
                      Wb(ie, Y, r),
                      (B = Zb(ie)),
                      (n = kt(ie, !0)),
                      (c = me && I(be, o ? Ge : We)()),
                      oe &&
                        (((W = [oe + ge.os2, F + b + _t]).t = Y),
                        (S = oe === wt ? fb(ie, ge) + F + b : 0) &&
                          W.push(ge.d, S + _t),
                        At(W),
                        me && Ee(q)),
                      me &&
                        (((a = {
                          top: n.top + (o ? i - E : c) + _t,
                          left: n.left + (o ? c : i - E) + _t,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[ht] = a.maxWidth =
                          Math.ceil(n.width) + _t),
                        (a[bt] = a.maxHeight = Math.ceil(n.height) + _t),
                        (a[St] =
                          a[St + yt] =
                          a[St + vt] =
                          a[St + xt] =
                          a[St + mt] =
                            "0"),
                        (a[wt] = r[wt]),
                        (a[wt + yt] = r[wt + yt]),
                        (a[wt + vt] = r[wt + vt]),
                        (a[wt + xt] = r[wt + xt]),
                        (a[wt + mt] = r[wt + mt]),
                        (R = (function _copyState(e, t, r) {
                          for (
                            var n, i = [], o = e.length, a = r ? 8 : 0;
                            a < o;
                            a += 2
                          )
                            (n = e[a]), i.push(n, n in t ? t[n] : e[a + 1]);
                          return (i.t = e.t), i;
                        })(L, a, ue))),
                      _
                        ? ((u = _._initted),
                          ot(1),
                          _.render(_.duration(), !0, !0),
                          (G = X(ge.a) - N + F + b),
                          F !== G && R.splice(R.length - 2, 2),
                          _.render(0, !0, !0),
                          u || _.invalidate(),
                          ot(0))
                        : (G = F);
                  else if (ne && Ee() && !fe)
                    for (n = ne.parentNode; n && n !== Ue; )
                      n._pinOffset &&
                        ((E -= n._pinOffset), (C -= n._pinOffset)),
                        (n = n.parentNode);
                  f &&
                    f.forEach(function (e) {
                      return e.revert(!1);
                    }),
                    (Se.start = E),
                    (Se.end = C),
                    (M = P = Ee()),
                    fe || (M < q && Ee(q), (Se.scroll.rec = 0)),
                    Se.revert(!1),
                    J &&
                      ((Me = -1), Se.isActive && Ee(E + F * K), J.restart(!0)),
                    (tt = 0),
                    _ &&
                      he &&
                      (_._initted || U) &&
                      _.progress() !== U &&
                      _.progress(U, !0).render(_.time(), !0, !0),
                    (K === Se.progress && !fe) ||
                      (_ && !he && _.totalProgress(K, !0),
                      (Se.progress = K),
                      Se.update(0, 0, 1)),
                    ie && oe && (Y._pinOffset = Math.round(Se.progress * G)),
                    te && te(Se);
                }
            }),
            (Se.getVelocity = function () {
              return ((Ee() - P) / (ft() - et)) * 1e3 || 0;
            }),
            (Se.endAnimation = function () {
              La(Se.callbackAnimation),
                _ &&
                  (j
                    ? j.progress(1)
                    : _.paused()
                    ? he || La(_, Se.direction < 0, 1)
                    : La(_, _.reversed()));
            }),
            (Se.labelToScroll = function (e) {
              return (
                (_ &&
                  _.labels &&
                  (E || Se.refresh() || E) +
                    (_.labels[e] / _.duration()) * F) ||
                0
              );
            }),
            (Se.getTrailing = function (t) {
              var e = Et.indexOf(Se),
                r =
                  0 < Se.direction ? Et.slice(0, e).reverse() : Et.slice(e + 1);
              return (
                Fa(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Se.direction ? e.end <= E : e.start >= C;
              });
            }),
            (Se.update = function (e, t, r) {
              if (!fe || r || e) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  l,
                  c,
                  u = Se.scroll(),
                  f = e ? 0 : (u - E) / F,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = Se.progress;
                if (
                  (t &&
                    ((P = M),
                    (M = fe ? Ee() : u),
                    ce && ((V = S), (S = _ && !he ? _.totalProgress() : d))),
                  se &&
                    !d &&
                    ie &&
                    !tt &&
                    !ut &&
                    dt &&
                    E < u + ((u - P) / (ft() - et)) * se &&
                    (d = 1e-4),
                  d !== p && Se.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (Se.direction = p < d ? 1 : -1),
                    (Se.progress = d),
                    a &&
                      !tt &&
                      ((i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      he &&
                        ((o =
                          (!s && "none" !== xe[i + 1] && xe[i + 1]) || xe[i]),
                        (c =
                          _ && ("complete" === o || "reset" === o || o in _)))),
                    pe &&
                      (s || c) &&
                      (c || re || !_) &&
                      (Ga(pe)
                        ? pe(Se)
                        : Se.getTrailing(pe).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    he ||
                      (!j || tt || ut
                        ? _ && _.totalProgress(d, !!tt)
                        : ((fe || (ct && ct !== Se)) &&
                            j.render(j._dp._time - j._start),
                          j.resetTo
                            ? j.resetTo("totalProgress", d, _._tTime / _._tDur)
                            : ((j.vars.totalProgress = d),
                              j.invalidate().restart()))),
                    ie)
                  )
                    if ((e && oe && (Y.style[oe + ge.os2] = m), me)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < C + 1 && u + 1 >= Da(be, ge)),
                          ue)
                        )
                          if (e || (!n && !l)) cc(ie, Y);
                          else {
                            var g = kt(ie, !0),
                              h = u - E;
                            cc(
                              ie,
                              Ue,
                              g.top + (ge === We ? h : 0) + _t,
                              g.left + (ge === We ? 0 : h) + _t
                            );
                          }
                        At(n || l ? R : B),
                          (G !== F && d < 1 && n) ||
                            v(N + (1 !== d || l ? 0 : G));
                      }
                    } else v(wa(N + G * d));
                  !ce || k.tween || tt || ut || J.restart(!0),
                    $ &&
                      (s || (le && d && (d < 1 || !at))) &&
                      Ze($.targets).forEach(function (e) {
                        return e.classList[n || le ? "add" : "remove"](
                          $.className
                        );
                      }),
                    !Q || he || e || Q(Se),
                    a && !tt
                      ? (he &&
                          (c &&
                            ("complete" === o
                              ? _.pause().totalProgress(1)
                              : "reset" === o
                              ? _.restart(!0).pause()
                              : "restart" === o
                              ? _.restart(!0)
                              : _[o]()),
                          Q && Q(Se)),
                        (!s && at) ||
                          (ee && s && Ma(Se, ee),
                          ye[i] && Ma(Se, ye[i]),
                          le && (1 === d ? Se.kill(!1, 1) : (ye[i] = 0)),
                          s || (ye[(i = 1 === d ? 1 : 3)] && Ma(Se, ye[i]))),
                        de &&
                          !n &&
                          Math.abs(Se.getVelocity()) > (Ha(de) ? de : 2500) &&
                          (La(Se.callbackAnimation),
                          j ? j.progress(1) : La(_, !d, 1)))
                      : he && Q && !tt && Q(Se);
                }
                if (w) {
                  var b = fe
                    ? (u / fe.duration()) * (fe._caScrollDist || 0)
                    : u;
                  y(b + (z._isFlipped ? 1 : 0)), w(b);
                }
                Z && Z((-u / fe.duration()) * (fe._caScrollDist || 0));
              }
            }),
            (Se.enable = function (e, t) {
              Se.enabled ||
                ((Se.enabled = !0),
                lb(be, "resize", zb),
                lb(ve ? Ke : be, "scroll", yb),
                Te && lb(ScrollTrigger, "refreshInit", Te),
                !1 !== e && ((Se.progress = K = 0), (M = P = Me = Ee())),
                !1 !== t && Se.refresh());
            }),
            (Se.getTween = function (e) {
              return e && k ? k.tween : j;
            }),
            (Se.setPositions = function (e, t) {
              ie && ((N += e - E), (G += t - e - F)),
                (Se.start = E = e),
                (Se.end = C = t),
                (F = t - e),
                Se.update();
            }),
            (Se.disable = function (e, t) {
              if (
                Se.enabled &&
                (!1 !== e && Se.revert(),
                (Se.enabled = Se.isActive = !1),
                t || (j && j.pause()),
                (q = 0),
                n && (n.uncache = 1),
                Te && mb(ScrollTrigger, "refreshInit", Te),
                J && (J.pause(), k.tween && k.tween.kill() && (k.tween = 0)),
                !ve)
              ) {
                for (var r = Et.length; r--; )
                  if (Et[r].scroller === be && Et[r] !== Se) return;
                mb(be, "resize", zb), mb(be, "scroll", yb);
              }
            }),
            (Se.kill = function (e, t) {
              Se.disable(e, t), j && !t && j.kill(), a && delete Ct[a];
              var r = Et.indexOf(Se);
              0 <= r && Et.splice(r, 1),
                r === nt && 0 < Ot && nt--,
                (r = 0),
                Et.forEach(function (e) {
                  return e.scroller === Se.scroller && (r = 1);
                }),
                r || (Se.scroll.rec = 0),
                _ &&
                  ((_.scrollTrigger = null), e && _.render(-1), t || _.kill()),
                O &&
                  [O, A, z, D].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ct === Se && (ct = 0),
                ie &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Et.forEach(function (e) {
                    return e.pin === ie && r++;
                  }),
                  r || (n.spacer = 0)),
                T.onKill && T.onKill(Se);
            }),
            Se.enable(!1, !1),
            o && o(Se),
            _ && _.add && !F
              ? Ve.delayedCall(0.01, function () {
                  return E || C || Se.refresh();
                }) &&
                (F = 0.01) &&
                (E = C = 0)
              : Se.refresh();
        } else this.update = this.refresh = this.kill = va;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          s ||
            ((Ve = e || ya()),
            xa() && window.document && ScrollTrigger.enable(),
            (s = pt)),
          s
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Pt[t] = e[t];
        return Pt;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (pt = 0),
          Et.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          mb(je, "wheel", yb),
          mb(Ke, "scroll", yb),
          clearInterval(u),
          mb(Ke, "touchcancel", va),
          mb(Ue, "touchstart", va),
          kb(mb, Ke, "pointerdown,touchstart,mousedown", ta),
          kb(mb, Ke, "pointerup,touchend,mouseup", ua),
          c.kill(),
          Ea(mb);
        for (var e = 0; e < a.length; e += 3)
          nb(mb, a[e], a[e + 1]), nb(mb, a[e], a[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((je = window),
          (Ke = document),
          (qe = Ke.documentElement),
          (Ue = Ke.body),
          Ve &&
            ((Ze = Ve.utils.toArray),
            ($e = Ve.utils.clamp),
            (ot = Ve.core.suppressOverwrites || va),
            Ve.core.globals("ScrollTrigger", ScrollTrigger),
            Ue))
        ) {
          (pt = 1),
            w.register(Ve),
            (ScrollTrigger.isTouch = w.isTouch),
            (l = [je, Ke, qe, Ue]),
            (S = je.innerHeight),
            (T = je.innerWidth),
            lb(Ke, "scroll", yb);
          var e,
            t,
            r = Ue.style,
            n = r.borderTopStyle;
          for (
            r.borderTopStyle = "solid",
              e = kt(Ue),
              We.m = Math.round(e.top + We.sc()) || 0,
              Ge.m = Math.round(e.left + Ge.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              u = setInterval(xb, 250),
              Ve.delayedCall(0.5, function () {
                return (ut = 0);
              }),
              lb(Ke, "touchcancel", va),
              lb(Ue, "touchstart", va),
              kb(lb, Ke, "pointerdown,touchstart,mousedown", ta),
              kb(lb, Ke, "pointerup,touchend,mouseup", ua),
              f = Ve.utils.checkPrefix("transform"),
              te.push(f),
              s = ft(),
              c = Ve.delayedCall(0.2, Z).pause(),
              h = [
                Ke,
                "visibilitychange",
                function () {
                  var e = je.innerWidth,
                    t = je.innerHeight;
                  Ke.hidden ? ((d = e), (g = t)) : (d === e && g === t) || zb();
                },
                Ke,
                "DOMContentLoaded",
                Z,
                je,
                "load",
                Z,
                je,
                "resize",
                zb,
              ],
              Ea(lb),
              Et.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < a.length;
            t += 3
          )
            nb(mb, a[t], a[t + 1]), nb(mb, a[t], a[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (at = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(xb, t)),
          "ignoreMobileResize" in e &&
            (m = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Ea(mb) || Ea(lb, e.autoRefreshEvents || "none"),
            (b = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = H(e),
          n = a.indexOf(r),
          i = za(r);
        ~n && a.splice(n, i ? 6 : 2),
          t && (i ? Ye.unshift(je, t, Ue, t, qe, t) : Ye.unshift(r, t));
      }),
      (ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, i, o;
        for (r in e)
          (n = G.indexOf(r)),
            (i = e[r]),
            "all" === (st = r)
              ? i()
              : (t = je.matchMedia(r)) &&
                (t.matches && (o = i()),
                ~n
                  ? ((G[n + 1] = Ka(G[n + 1], i)), (G[n + 2] = Ka(G[n + 2], o)))
                  : ((n = G.length),
                    G.push(r, i, o),
                    t.addListener
                      ? t.addListener(Fb)
                      : t.addEventListener("change", Fb)),
                (G[n + 3] = t.matches)),
            (st = 0);
        return G;
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (G.length = 0), 0 <= (e = G.indexOf(e)) && G.splice(e, 4);
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Fa(e) ? H(e) : e).getBoundingClientRect(),
          i = n[r ? ht : bt] * t || 0;
        return r
          ? 0 < n.right - i && n.left + i < je.innerWidth
          : 0 < n.bottom - i && n.top + i < je.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Fa(e) && (e = H(e));
        var n = e.getBoundingClientRect(),
          i = n[r ? ht : bt],
          o =
            null == t
              ? i / 2
              : t in R
              ? R[t] * i
              : ~t.indexOf("%")
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + o) / je.innerWidth : (n.top + o) / je.innerHeight;
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s ||
      ScrollTrigger.register(Ve) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  (ie.version = "3.10.3"),
    (ie.saveStyles = function (e) {
      return e
        ? Ze(e).forEach(function (e) {
            if (e && e.style) {
              var t = V.indexOf(e);
              0 <= t && V.splice(t, 5),
                V.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Ve.core.getCache(e),
                  st
                );
            }
          })
        : V;
    }),
    (ie.revert = function (e, t) {
      return q(!e, t);
    }),
    (ie.create = function (e, t) {
      return new ie(e, t);
    }),
    (ie.refresh = function (e) {
      return e ? zb() : (s || ie.register()) && Z(!0);
    }),
    (ie.update = $),
    (ie.clearScrollMemory = Lb),
    (ie.maxScroll = function (e, t) {
      return Da(e, t ? Ge : We);
    }),
    (ie.getScrollFunc = function (e, t) {
      return I(H(e), t ? Ge : We);
    }),
    (ie.getById = function (e) {
      return Ct[e];
    }),
    (ie.getAll = function () {
      return Et.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (ie.isScrolling = function () {
      return !!dt;
    }),
    (ie.snapDirectional = ib),
    (ie.addEventListener = function (e, t) {
      var r = Y[e] || (Y[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (ie.removeEventListener = function (e, t) {
      var r = Y[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (ie.batch = function (e, t) {
      function eo(e, t) {
        var r = [],
          n = [],
          i = Ve.delayedCall(o, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || i.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && i.progress(1);
        };
      }
      var r,
        n = [],
        i = {},
        o = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        i[r] =
          "on" === r.substr(0, 2) && Ga(t[r]) && "onRefreshInit" !== r
            ? eo(0, t[r])
            : t[r];
      return (
        Ga(a) &&
          ((a = a()),
          lb(ie, "refresh", function () {
            return (a = t.batchMax());
          })),
        Ze(e).forEach(function (e) {
          var t = {};
          for (r in i) t[r] = i[r];
          (t.trigger = e), n.push(ie.create(t));
        }),
        n
      );
    });
  function fc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function gc(e) {
    !0 === e
      ? (Ue.style.removeProperty("touch-action"),
        qe.style.removeProperty("touch-action"))
      : (Ue.style.touchAction = qe.style.touchAction = e ? "pan-" + e : "none");
  }
  function ic(e) {
    var t,
      r = e.event,
      n = (r.changedTouches ? r.changedTouches[0] : r).target,
      i = n._gsap || Ve.core.getCache(n),
      o = ft();
    if (!i._isScrollT || 2e3 < o - i._isScrollT) {
      for (; n && n.scrollHeight <= n.clientHeight; ) n = n.parentNode;
      (i._isScroll =
        n &&
        n !== Ue &&
        n !== qe &&
        (oe[(t = bb(n)).overflowY] || oe[t.overflowX])),
        (i._isScrollT = o);
    }
    i._isScroll && r.stopPropagation();
  }
  function jc(e, t, r) {
    return w.create({
      capture: !0,
      debounce: !1,
      type: e,
      onWheel: (r = r && ic),
      onPress: r,
      onMove: r,
      onScroll: r,
      onEnable: function onEnable() {
        return t && lb(Ke, "touchstart", se, !1, !0);
      },
      onDisable: function onDisable() {
        return mb(Ke, "touchstart", se);
      },
    });
  }
  function mc(e) {
    function So() {
      return (n = !1);
    }
    function Vo() {
      (r = Da(qe, We)), (y = $e(0, r)), u && (m = $e(0, Da(qe, Ge))), (o = U);
    }
    function ap() {
      Vo(),
        a.isActive() && a.vars.scrollY > r && a.resetTo("scrollY", Da(qe, We));
    }
    Ia(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t,
      r,
      n,
      o,
      a,
      s,
      l,
      c,
      u = e.normalizeScrollX,
      i = e.momentum,
      f = e.allowNestedScroll,
      d = I(qe, We),
      p = I(qe, Ge),
      g = 1,
      h = 0,
      b = Ga(i)
        ? function () {
            return i(t);
          }
        : function () {
            return i || 2.8;
          },
      v = jc(e.type, !0, f),
      m = va,
      y = va,
      x = ie.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
    return (
      (e.ignoreCheck = function (e) {
        return (
          (x &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (n) return requestAnimationFrame(So), !0;
              n = !0;
            })()) ||
          1 < g ||
          t.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        var e = g;
        (g = (je.visualViewport && je.visualViewport.scale) || 1),
          a.pause(),
          e !== g && gc(1 < g || (!u && "x")),
          (n = !1),
          (s = p()),
          (l = d()),
          Vo(),
          (o = U);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if (t) {
            var r,
              n,
              i = b();
            u &&
              ((n = (r = p()) + (0.05 * i * -e.velocityX) / 0.227 / g),
              (i *= fc(p, r, n, Da(qe, Ge))),
              (a.vars.scrollX = m(n))),
              (n = (r = d()) + (0.05 * i * -e.velocityY) / 0.227 / g),
              (i *= fc(d, r, n, Da(qe, We))),
              (a.vars.scrollY = y(n)),
              a.invalidate().duration(i).play(0.01);
          } else c.restart(!0);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < ft() - h && ((o = 0), (h = ft()));
      }),
      (e.onChange = function (e, t, r, n, i) {
        U !== o && Vo(),
          t &&
            u &&
            p(m(n[2] === t ? s + (e.startX - e.x) / g : p() + t - n[1])),
          r && d(y(i[2] === r ? l + (e.startY - e.y) / g : d() + r - i[1])),
          $();
      }),
      (e.onEnable = function () {
        gc(!u && "x"), lb(je, "resize", ap), v.enable();
      }),
      (e.onDisable = function () {
        gc(!0), mb(je, "resize", ap), v.kill();
      }),
      (t = new w(e)),
      (c = t._dc),
      (a = Ve.to(t, {
        ease: "power4",
        paused: !0,
        scrollX: u ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: c.vars.onComplete,
      })),
      t
    );
  }
  var oe = { auto: 1, scroll: 1 },
    ae = /(input|label|select|textarea)/i,
    se = function _captureInputs(e) {
      return ae.test(e.target.tagName) && e.stopPropagation();
    };
  (ie.sort = function (e) {
    return Et.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (ie.observe = function (e) {
      return new w(e);
    }),
    (ie.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      var t = e instanceof w;
      return (
        v && (!1 === e || (t && e !== v)) && v.kill(),
        e && !t && (e = mc(e)),
        (v = e && e.enable())
      );
    }),
    (ie.core = {
      _getVelocityProp: J,
      _inputObserver: jc,
      _scrollers: a,
      _proxies: Ye,
      bridge: {
        ss: function ss() {
          dt || W("scrollStart"), (dt = ft());
        },
        ref: function ref() {
          return tt;
        },
      },
    }),
    ya() && Ve.registerPlugin(ie),
    (e.ScrollTrigger = ie),
    (e.default = ie);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
