import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e742f73 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1ebc54ae = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _0f0b9bc2 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _5e65326e = () => interopDefault(import('..\\pages\\education.vue' /* webpackChunkName: "pages/education" */))
const _6e89eecc = () => interopDefault(import('..\\pages\\errors.vue' /* webpackChunkName: "pages/errors" */))
const _4b23d3b8 = () => interopDefault(import('..\\pages\\eventPage2.vue' /* webpackChunkName: "pages/eventPage2" */))
const _4b31eb39 = () => interopDefault(import('..\\pages\\eventPage3.vue' /* webpackChunkName: "pages/eventPage3" */))
const _4b4002ba = () => interopDefault(import('..\\pages\\eventPage4.vue' /* webpackChunkName: "pages/eventPage4" */))
const _795ea03a = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _a82e5ab2 = () => interopDefault(import('..\\pages\\loyalty.vue' /* webpackChunkName: "pages/loyalty" */))
const _7d2d3146 = () => interopDefault(import('..\\pages\\media\\index.vue' /* webpackChunkName: "pages/media/index" */))
const _4b60ec80 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _3bd09857 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _46ab6922 = () => interopDefault(import('..\\pages\\events\\_id.vue' /* webpackChunkName: "pages/events/_id" */))
const _8018c5f6 = () => interopDefault(import('..\\pages\\media\\_id.vue' /* webpackChunkName: "pages/media/_id" */))
const _297fe230 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _3e742f73,
    name: "index___en"
  }, {
    path: "/ru",
    component: _3e742f73,
    name: "index___ru"
  }, {
    path: "/en/about",
    component: _1ebc54ae,
    name: "about___en"
  }, {
    path: "/en/contacts",
    component: _0f0b9bc2,
    name: "contacts___en"
  }, {
    path: "/en/education",
    component: _5e65326e,
    name: "education___en"
  }, {
    path: "/en/errors",
    component: _6e89eecc,
    name: "errors___en"
  }, {
    path: "/en/eventPage2",
    component: _4b23d3b8,
    name: "eventPage2___en"
  }, {
    path: "/en/eventPage3",
    component: _4b31eb39,
    name: "eventPage3___en"
  }, {
    path: "/en/eventPage4",
    component: _4b4002ba,
    name: "eventPage4___en"
  }, {
    path: "/en/events",
    component: _795ea03a,
    name: "events___en"
  }, {
    path: "/en/loyalty",
    component: _a82e5ab2,
    name: "loyalty___en"
  }, {
    path: "/en/media",
    component: _7d2d3146,
    name: "media___en"
  }, {
    path: "/en/news",
    component: _4b60ec80,
    name: "news___en"
  }, {
    path: "/en/search",
    component: _3bd09857,
    name: "search___en"
  }, {
    path: "/ru/about",
    component: _1ebc54ae,
    name: "about___ru"
  }, {
    path: "/ru/contacts",
    component: _0f0b9bc2,
    name: "contacts___ru"
  }, {
    path: "/ru/education",
    component: _5e65326e,
    name: "education___ru"
  }, {
    path: "/ru/errors",
    component: _6e89eecc,
    name: "errors___ru"
  }, {
    path: "/ru/eventPage2",
    component: _4b23d3b8,
    name: "eventPage2___ru"
  }, {
    path: "/ru/eventPage3",
    component: _4b31eb39,
    name: "eventPage3___ru"
  }, {
    path: "/ru/eventPage4",
    component: _4b4002ba,
    name: "eventPage4___ru"
  }, {
    path: "/ru/events",
    component: _795ea03a,
    name: "events___ru"
  }, {
    path: "/ru/loyalty",
    component: _a82e5ab2,
    name: "loyalty___ru"
  }, {
    path: "/ru/media",
    component: _7d2d3146,
    name: "media___ru"
  }, {
    path: "/ru/news",
    component: _4b60ec80,
    name: "news___ru"
  }, {
    path: "/ru/search",
    component: _3bd09857,
    name: "search___ru"
  }, {
    path: "/en/events/:id",
    component: _46ab6922,
    name: "events-id___en"
  }, {
    path: "/en/media/:id",
    component: _8018c5f6,
    name: "media-id___en"
  }, {
    path: "/en/news/:id",
    component: _297fe230,
    name: "news-id___en"
  }, {
    path: "/ru/events/:id",
    component: _46ab6922,
    name: "events-id___ru"
  }, {
    path: "/ru/media/:id",
    component: _8018c5f6,
    name: "media-id___ru"
  }, {
    path: "/ru/news/:id",
    component: _297fe230,
    name: "news-id___ru"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
