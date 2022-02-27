import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f0b9bc2 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _5e65326e = () => interopDefault(import('..\\pages\\education.vue' /* webpackChunkName: "pages/education" */))
const _6e89eecc = () => interopDefault(import('..\\pages\\errors.vue' /* webpackChunkName: "pages/errors" */))
const _3c3a32ea = () => interopDefault(import('..\\pages\\eventPage.vue' /* webpackChunkName: "pages/eventPage" */))
const _4b23d3b8 = () => interopDefault(import('..\\pages\\eventPage2.vue' /* webpackChunkName: "pages/eventPage2" */))
const _4b31eb39 = () => interopDefault(import('..\\pages\\eventPage3.vue' /* webpackChunkName: "pages/eventPage3" */))
const _4b4002ba = () => interopDefault(import('..\\pages\\eventPage4.vue' /* webpackChunkName: "pages/eventPage4" */))
const _bc3e1970 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _05165b66 = () => interopDefault(import('..\\pages\\friend.vue' /* webpackChunkName: "pages/friend" */))
const _23aac4f6 = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages/media" */))
const _5bc37398 = () => interopDefault(import('..\\pages\\mediaPage.vue' /* webpackChunkName: "pages/mediaPage" */))
const _6b7d6c7c = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _2e5a8bf1 = () => interopDefault(import('..\\pages\\newsPage.vue' /* webpackChunkName: "pages/newsPage" */))
const _3bd09857 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _3e742f73 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contacts",
    component: _0f0b9bc2,
    name: "contacts"
  }, {
    path: "/education",
    component: _5e65326e,
    name: "education"
  }, {
    path: "/errors",
    component: _6e89eecc,
    name: "errors"
  }, {
    path: "/eventPage",
    component: _3c3a32ea,
    name: "eventPage"
  }, {
    path: "/eventPage2",
    component: _4b23d3b8,
    name: "eventPage2"
  }, {
    path: "/eventPage3",
    component: _4b31eb39,
    name: "eventPage3"
  }, {
    path: "/eventPage4",
    component: _4b4002ba,
    name: "eventPage4"
  }, {
    path: "/events",
    component: _bc3e1970,
    name: "events"
  }, {
    path: "/friend",
    component: _05165b66,
    name: "friend"
  }, {
    path: "/media",
    component: _23aac4f6,
    name: "media"
  }, {
    path: "/mediaPage",
    component: _5bc37398,
    name: "mediaPage"
  }, {
    path: "/news",
    component: _6b7d6c7c,
    name: "news"
  }, {
    path: "/newsPage",
    component: _2e5a8bf1,
    name: "newsPage"
  }, {
    path: "/search",
    component: _3bd09857,
    name: "search"
  }, {
    path: "/",
    component: _3e742f73,
    name: "index"
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
