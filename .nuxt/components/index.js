export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Galleria = () => import('../..\\components\\Galleria.vue' /* webpackChunkName: "components/galleria" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Main = () => import('../..\\components\\Main.vue' /* webpackChunkName: "components/main" */).then(c => wrapFunctional(c.default || c))
export const Meta = () => import('../..\\components\\Meta.vue' /* webpackChunkName: "components/meta" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const Partniors = () => import('../..\\components\\Partniors.vue' /* webpackChunkName: "components/partniors" */).then(c => wrapFunctional(c.default || c))
export const Teachers = () => import('../..\\components\\Teachers.vue' /* webpackChunkName: "components/teachers" */).then(c => wrapFunctional(c.default || c))
export const VueGalleria = () => import('../..\\components\\VueGalleria.vue' /* webpackChunkName: "components/vue-galleria" */).then(c => wrapFunctional(c.default || c))
export const VueNewsSwiper = () => import('../..\\components\\VueNewsSwiper.vue' /* webpackChunkName: "components/vue-news-swiper" */).then(c => wrapFunctional(c.default || c))
export const VueSwiper = () => import('../..\\components\\VueSwiper.vue' /* webpackChunkName: "components/vue-swiper" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
