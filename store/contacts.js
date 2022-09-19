export const state = () => ({
    contactsData: [],
    faq: {},
    places: {},
    head: {}
})
export const actions = {
    getData ({ commit }) {
        return this.$axios.get(this.$i18n.locale +'/contacts/').then((res) => {
            commit('setData', res.data)
            return res.data
        })
    }
}

export const mutations = {
    setData(state, data) {
        if (data.content && data.content.contactsData) {
            state.contactsData = data.content.contactsData
            state.places = data.content.places
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