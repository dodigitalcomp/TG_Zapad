export const state = () => ({
    newsList: [],
    newData: {},
    pagination: {},
    filter: {},
    sort: {},
    head: {}
})
export const actions = {
    getNews ({ commit },page) {
        return this.$axios.get(this.$i18n.locale +'/news?PAGEN_1=' + page).then((res) => {
            commit('setNews', res.data)
            return res.data
        })
    },
    getNewsByLink ({ commit },link) {
        return this.$axios.get(link).then((res) => {
            commit('setNews', res.data)
            return res.data
        })
    },
    getNew ({ commit }, id) {
        return this.$axios.get(this.$i18n.locale +'/news/' + id).then((res) => {
            console.log(222, res)
            commit('setNew', res.data)
            return res.data
        })
    }
}

export const mutations = {
    setNew (state, data) {
        state.newData = data.content.news.item
        state.same_news = data.content.same_news
        state.head = data.head
    },
    setNews(state, data) {
        state.head = data.head
        if (data.content && data.content.news && data.content.news.listItems) {
            state.newsList = data.content.news.listItems
            state.pagination = data.content.news.NAVIGATION
        }
        if (data.content) {
            state.filter = data.content.filter[0]
            state.sort = data.content.sort.DATE_ACTIVE_FROM
        }
    }
}

export const getters = {
    getCounter(state) {
        return state.counter
    }
}