export const state = () => ({
  mediaData: [],
  langPhrase: {},
  pagination: {},
  filter: {},
  same_media: {},
  sort: {},
  media: {},
  head: {}
})
export const actions = {
  getMedia ({ commit },page) {
    return this.$axios.get(this.$i18n.locale +'/media?PAGEN_1=' + page).then((res) => {
      commit('setNews', res.data)
      return res.data
    })
  },
  getMediaByLink ({ commit },link) {
    return this.$axios.get(link).then((res) => {
      commit('setNews', res.data)
      return res.data
    })
  },
  getMediaData ({ commit }, id) {
    return this.$axios.get(this.$i18n.locale +'/media/' + id).then((res) => {
      console.log(222, res)
      commit('setNew', res.data)
      return res.data
    })
  }
}

export const mutations = {
  setNew (state, data) {
    state.media = data.content.media.item
    state.langPhrase = data.content.media.langPhrase
    state.same_media = data.content.same_media
  },
  setNews(state, data) {
    state.head = data.head
    if (data.content && data.content.media && data.content.media.listItems) {
      state.mediaData = data.content.media.listItems
      state.langPhrase = data.content.media.langPhrase
      state.pagination = data.content.media.NAVIGATION
    }
    if (data.content && data.content.sort_panel) {
      state.filter = data.content.sort_panel.filterByType[0]
      state.sort = data.content.sort_panel.sort.sortByDate
    }
  }
}

export const getters = {
  getCounter(state) {
    return state.counter
  }
}