export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Galleria } from '../..\\components\\Galleria.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Main } from '../..\\components\\Main.vue'
export { default as Partniors } from '../..\\components\\Partniors.vue'
export { default as Teachers } from '../..\\components\\Teachers.vue'
export { default as VueGalleria } from '../..\\components\\VueGalleria.vue'
export { default as VueNewsSwiper } from '../..\\components\\VueNewsSwiper.vue'
export { default as VueSwiper } from '../..\\components\\VueSwiper.vue'

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
