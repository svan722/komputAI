import {
  o as e,
  c as o,
  a as t,
  t as y,
  b as p,
  u as N,
  r as i,
  i as u,
  e as l,
  g as b,
  n as g,
  F as P,
  k as I,
  j as B,
  l as j,
  m as G,
} from "./index-nWkXIawp.js";
import { _ as T } from "./gpubg-hAwauZ-d.js";
import { _ as z } from "./_plugin-vue_export-helper-x3n3nnut.js";
const K = {
    name: "GPUCard",
    props: { datas: void 0 },
    methods: {
      buy() {
        this.$store.commit("BUY_GPU", {
          id: this.datas.id,
          price: this.datas.sellPrice,
        });
      },
      async getGpuPrice() {
        try {
          const m = await this.$store.state.gpuContract.convertPrice(
            this.datas.id
          );
          this.priceInKai = parseFloat(m.toString()) / 10 ** 18;
        } catch (m) {
          return console.error("No Price :", m), null;
        }
      },
    },
    data: function () {
      return { priceInKai: 0 };
    },
    mounted() {
      this.getGpuPrice();
    },
  },
  V = {
    class:
      "rounded-xl bg-gray-500 bg-opacity-10 text-lime-50 px-5 py-3 relative my-5 mr-5 zoom",
    style: { width: "550px" },
  },
  S = { style: { "z-index": "1000 !important" } },
  U = { class: "text-2xl font-bold" },
  E = { class: "text-gray-300 mr-3" },
  L = { class: "absolute right-0 top-0 m-4 mr-6 flex" },
  R = t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "2.3",
      stroke: "currentColor",
      class: "size-5 pt-1 text-lime-400 mr-1",
    },
    [
      t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
      }),
    ],
    -1
  ),
  F = t("div", null, "NVIDIA Turing, 2,560 CUDA cores, 1250MHz", -1),
  H = t("div", { class: "mt-10 font-thin" }, "16GB GDDR6", -1),
  O = t(
    "div",
    { class: "flex font-thin" },
    [
      t(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 20 24",
          "stroke-width": "2",
          stroke: "currentColor",
          class: "size-5 text-lime-400 mr-1",
        },
        [
          t("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5",
          }),
        ]
      ),
      t("div", null, "300 Gbps"),
    ],
    -1
  ),
  W = { class: "flex justify-between mt-14" },
  Y = { class: "font-bold text-lg" },
  Z = { key: 0 },
  J = { key: 0, class: "text-lime-400 ml-2" },
  q = { key: 1, class: "text-lime-400 ml-2" },
  Q = { key: 1 },
  X = t("span", { class: "text-orange-400" }, " Not for sale", -1),
  tt = [X],
  et = t(
    "div",
    null,
    [p("Daily Earn "), t("span", { class: "text-lime-400" }, "~13 $CPA")],
    -1
  ),
  ot = {
    key: 0,
    class:
      "rounded-3xl bg-gray-500 bg-opacity-50 px-7 py-4 text-gray-400 mr-5 font-bold cursor-not-allowed text-2xl items-center flex justify-center",
  },
  st = {
    key: 2,
    class:
      "rounded-3xl bg-gray-500 bg-opacity-50 px-7 py-4 text-gray-400 mr-5 font-bold cursor-not-allowed text-2xl items-center flex justify-center",
  },
  it = t(
    "img",
    {
      class: "absolute top-0",
      style: { right: "-0px", "z-index": "-1" },
      src: T,
    },
    null,
    -1
  );
function lt(m, a, d, w, k, f) {
  return (
    e(),
    o("div", V, [
      t("div", S, [
        t("div", U, [
          t("span", E, "#" + y(d.datas.id), 1),
          p(" 1/10 NVIDIA Tesla T4 "),
        ]),
        t("div", L, [
          R,
          p(
            " " +
              y(d.datas.owner.slice(0, 4) + "..." + d.datas.owner.slice(-4)),
            1
          ),
        ]),
        F,
        H,
        O,
        t("div", W, [
          t("div", Y, [
            d.datas.sellPrice > 0
              ? (e(),
                o("div", Z, [
                  p(" Price "),
                  d.datas.sellPrice > 1e12
                    ? (e(),
                      o(
                        "span",
                        J,
                        y(m.priceInKai.toFixed(2)) +
                          " CPA (" +
                          y(d.datas.sellPrice / 10 ** 18) +
                          " $)",
                        1
                      ))
                    : (e(), o("span", q, " 0 $")),
                ]))
              : (e(), o("div", Q, tt)),
            et,
          ]),
          d.datas.owner == m.$store.state.address
            ? (e(), o("div", ot, " Owned "))
            : d.datas.sellPrice > 0
            ? (e(),
              o(
                "div",
                {
                  key: 1,
                  onClick: a[0] || (a[0] = ($) => f.buy()),
                  class:
                    "rounded-3xl bg-gray-500 bg-opacity-50 px-7 py-4 text-lime-400 mr-5 font-bold cursor-pointer text-2xl items-center flex justify-center hover:outline-lime-400 hover:outline outline-1",
                },
                " Book Now "
              ))
            : (e(), o("div", st, " Book Now ")),
        ]),
      ]),
      it,
    ])
  );
}
const rt = z(K, [["render", lt]]),
  at = { class: "p-7 w-full" },
  nt = B(
    '<div class="text-4xl text-lime-50 font-bold mt-20"> Discover the <b class="text-lime-400">K</b>omputing <b class="text-lime-400">Power</b></div><div class="text-4xl text-lime-50 mt-16"> Join the Computation<br> Revolution: <span class="text-lime-400"> Where Your<br> GPU&#39;s Power Meets Purpose</span></div>',
    2
  ),
  dt = { class: "mt-20" },
  ct = { class: "flex" },
  mt = t(
    null
  ),
  ut = t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-4 h-4 ml-2 mt-1",
    },
    [
      t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
      }),
    ],
    -1
  ),
  pt = {
    key: 0,
    class:
      "ping2 w-full h-full absolute top-0 left-0 rounded-xl bg-lime-400 px-3 py-2 outline-lime-400",
  },
  xt = { key: 0, class: "fade-in", id: "#" },
  gt = t(
    "div",
    { class: "text-4xl text-lime-50 mt-16 font-bold" },
    [
      t("span", { class: "text-lime-400" }, "K"),
      p("omputAI "),
      t("span", { class: "text-lime-400" }, "Network"),
    ],
    -1
  ),
  yt = { class: "flex flex-wrap mt-20 hidden" },
  _t = { key: 0 },
  ft = { key: 0, class: "flex justify-center flex-wrap mt-10" },
  vt = { class: "flex justify-center w-full text-white items-center mt-8" },
  ht = ["onClick"],
  bt = { key: 1, class: "text-center text-white w-full my-10" },
  It = {
    __name: "Marketplace",
    setup(m) {
      const a = N();
      i(void 0);
      const d = new Date(Date.UTC(2024, 0, 31, 20, 30, 0)),
        w = setInterval(D, 1e3);
      let k = i(0),
        f = i(0),
        $ = i(0),
        M = i(0);
      i(6), i(!0), i(!1);
      let x = i(!1),
        r = i(1);
      Math.floor(new Date().getTime() / 1e3), i(!1);
      let c = i(0);
      function D() {
        const s = d - new Date();
        (k.value = Math.floor(s / (1e3 * 60 * 60 * 24))),
          (f.value = Math.floor((s % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60))),
          ($.value = Math.floor((s % (1e3 * 60 * 60)) / (1e3 * 60))),
          (M.value = i(Math.floor((s % (1e3 * 60)) / 1e3))),
          s <= 0 && clearInterval(w);
      }
      let v = i(!0);
      function A() {
        (v.value = !1),
          setTimeout(() => {
            v.value = !0;
          }, 0);
      }
      function h() {
        a.commit("GET_MARKETPLACE", {
          page: r.value,
          amount: a.state.pageAmount,
        }),
          A();
      }
      return (
        (localStorage.stakingVisited = !0),
        window.scrollTo({ top: 0, behavior: "instant" }),
        (C, s) => (
          e(),
          o("div", at, [
            nt,
            t("div", dt, [
              t("div", ct, [
                mt,
                t(
                  "a",
                  {
                    onClick:
                      s[0] ||
                      (s[0] = (n) => (u(x) ? (x.value = !0) : (x = !0))),
                    href: "##",
                    class:
                      "relative rounded-xl bg-gray-500 bg-opacity-30 px-3 py-2 border border-lime-400 text-lime-50 font-bold flex cursor-pointer mt-3",
                  },
                  [
                    p(" Explore the market "),
                    ut,
                    l(x) ? b("", !0) : (e(), o("a", pt)),
                  ]
                ),
              ]),
            ]),
            l(x)
              ? (e(),
                o("div", xt, [
                  gt,
                  t("div", yt, [
                    t(
                      "div",
                      {
                        onClick:
                          s[1] ||
                          (s[1] = (n) => (u(c) ? (c.value = 0) : (c = 0))),
                        class: g([
                          "rounded-xl bg-gray-500 bg-opacity-30 px-3 py-2 text-lime-50 font-bold cursor-pointer w-32 text-center opacity-50 mr-5",
                          {
                            "bg-lime-800 border border-lime-400 text-lime-50 opacity-100":
                              l(c) == 0,
                          },
                        ]),
                      },
                      " On Sale ",
                      2
                    ),
                    t(
                      "div",
                      {
                        onClick:
                          s[2] ||
                          (s[2] = (n) => (u(c) ? (c.value = 1) : (c = 1))),
                        class: g([
                          "rounded-xl bg-gray-500 bg-opacity-30 px-3 py-2 text-lime-50 font-bold cursor-pointer w-32 text-center opacity-50",
                          {
                            "bg-lime-800 border border-lime-400 text-lime-50 opacity-100":
                              l(c) == 1,
                          },
                        ]),
                      },
                      " Activity ",
                      2
                    ),
                  ]),
                  l(c) == 0
                    ? (e(),
                      o("div", _t, [
                        l(v)
                          ? (e(),
                            o("div", ft, [
                              (e(!0),
                              o(
                                P,
                                null,
                                I(
                                  l(a).state.mpItems,
                                  (n, _) => (
                                    e(),
                                    j(
                                      rt,
                                      {
                                        class: "scale-in-center",
                                        style: G(
                                          "animation-delay:" + _ * 0.1 + "s"
                                        ),
                                        key: _,
                                        sold: C.n % 3,
                                        datas: n,
                                      },
                                      null,
                                      8,
                                      ["style", "sold", "datas"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ]))
                          : b("", !0),
                        t("div", vt, [
                          t(
                            "a",
                            {
                              href: "##",
                              class: g([
                                { "opacity-50 pointer-events-none": l(r) == 1 },
                                "rounded-xl bg-gray-500 bg-opacity-30 px-3 py-2 border border-lime-400 text-lime-50 mr-2 font-bold cursor-pointer",
                              ]),
                              onClick:
                                s[3] ||
                                (s[3] = (n) => {
                                  u(r) ? r.value-- : r--, h();
                                }),
                            },
                            " Prev ",
                            2
                          ),
                          (e(!0),
                          o(
                            P,
                            null,
                            I(
                              Math.ceil(
                                l(a).state.lastId / l(a).state.pageAmount
                              ),
                              (n, _) => (
                                e(),
                                o(
                                  "a",
                                  {
                                    href: "##",
                                    class: g([
                                      {
                                        "opacity-50 pointer-events-none":
                                          l(r) == n,
                                      },
                                      "rounded-xl bg-gray-500 bg-opacity-30 px-3 py-2 border border-lime-400 text-lime-50 mr-1 font-bold cursor-pointer",
                                    ]),
                                    key: _,
                                    onClick: (kt) => {
                                      u(r) ? (r.value = n) : (r = n), h();
                                    },
                                  },
                                  y(n),
                                  11,
                                  ht
                                )
                              )
                            ),
                            128
                          )),
                          t(
                            "a",
                            {
                              href: "##",
                              class: g([
                                {
                                  "opacity-50 pointer-events-none":
                                    l(a).state.mpItems[
                                      l(a).state.mpItems.length - 1
                                    ].id ==
                                    l(a).state.lastId - 1,
                                },
                                "rounded-xl bg-gray-500 bg-opacity-30 px-3 py-2 border border-lime-400 text-lime-50 ml-1 font-bold cursor-pointer",
                              ]),
                              onClick:
                                s[4] ||
                                (s[4] = (n) => {
                                  u(r) ? r.value++ : r++, h();
                                }),
                            },
                            " Next ",
                            2
                          ),
                        ]),
                      ]))
                    : (e(), o("div", bt, "Work in progress ⌛")),
                ]))
              : b("", !0),
          ])
        )
      );
    },
  };
export { It as default };
