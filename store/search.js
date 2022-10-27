export const state = () => ({
    listItem: [],
    blocks: [],
    pagination: {},
    head: {}
})
export const actions = {
    search ({ commit }, text) {
        const q = text ? text : ''
        return this.$axios.get('api/' + this.$i18n.locale +'/search/?q=' + q).then((res) => {
            commit('setData', res.data)
            return res.data
        })
    },
    searchByUrl ({ commit }, url) {
        return this.$axios.get(url).then((res) => {
            commit('setData', res.data)
            return res.data
        })
    }
}

export const mutations = {
    setData(state, data) {
        if (data.content && data.content.search && data.content.search.listItem) {
            state.listItem = data.content.search.listItem
            state.pagination = data.content.search.NAVIGATION
            state.blocks = data.content.search.blocks
        }
        state.head = data.head
    }
}

export const getters = {
    getCounter(state) {
        return state.counter
    }
}