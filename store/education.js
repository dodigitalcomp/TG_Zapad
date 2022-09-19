export const state = () => ({
    education: [],
    faq: {},
    langPhrase: {},
    head: {}
})
export const actions = {
    getData ({ commit }) {
        return this.$axios.get(this.$i18n.locale +'/education/').then((res) => {
            commit('setData', res.data)
            return res.data
        })
    }
}

export const mutations = {
    setData(state, data) {
        if (data.content && data.content.education && data.content.education.item) {
            state.education = data.content.education.item
            state.langPhrase = data.content.education.langPhrase
        }
        state.faq = data.content.faq
        state.head = data.head
    }
}

export const getters = {
    getCounter(state) {
        return state.counter
    }
}