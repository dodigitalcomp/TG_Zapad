export const state = () => ({
  adressList: [],
  langPhrase: {},
  levelCards: {},
  loyalty: {},
  faqData: {},
  head: {}
})
export const actions = {
  getData ({ commit }) {
    return this.$axios.get(this.$i18n.locale +'/loyalty/').then((res) => {
      commit('setNews', res.data)
      return res.data
    })
  },
}

export const mutations = {
  setNew (state, data) {
    state.media = data.content.media.item
  },
  setNews(state, data) {
    state.head = data.head
    state.faqData = data.content.faq
    if (data.content && data.content.loyalty) {
      state.adressList = data.content.loyalty.adressList
      state.langPhrase = data.content.loyalty.langPhrase
      state.levelCards = data.content.loyalty.levelCards
      state.loyalty = data.content.loyalty
    }
  }
}

export const getters = {
  getCounter(state) {
    return state.counter
  }
}