export const getters = {
  menuData: state => state.menuData
}

export const mutations = {
  setLanguage (state, data) {
    state.menuData = data.header
  },
  setHomeData (state, data) {
    state.homeData = data.content
    state.head = data.head
  },
}

export const actions = {
  getLanguage ({ commit }) {
    return this.$axios.get('api/' + this.$i18n.locale +'/menu/').then((res) => {
      commit('setLanguage', res.data)
      return res.data
    })
  },
  getHomeData ({ commit }) {
    return this.$axios.get('api/' + this.$i18n.locale +'/').then((res) => {
      commit('setHomeData', res.data)
      return res.data
    })
  }
}

export const state = () => ({
  menuData: null,
  head: null,
  homeData: null
})
