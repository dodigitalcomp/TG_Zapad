export const state = () => ({
    listItem: [],
    head: {}
})
export const actions = {
    search ({ commit }, text) {
        const q = text ? text : ''
        return this.$axios.get(this.$i18n.locale +'/search/?q=' + q).then((res) => {
            commit('setData', res.data)
            return res.data
        })
    }
}

export const mutations = {
    setData(state, data) {
        if (data.content && data.content.search && data.content.search.listItem) {
            console.log(data.content.search.listItem)
            state.listItem = data.content.search.listItem
        }
        state.head = data.head
    }
}

export const getters = {
    getCounter(state) {
        return state.counter
    }
}