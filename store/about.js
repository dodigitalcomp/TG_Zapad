export const state = () => ({
    aboutListItems: [],
    partners: {},
    people: {},
    property: {},
    slider: {},
    head: {}
})
export const actions = {
    getAbout ({ commit }) {
        return this.$axios.get('api/' + this.$i18n.locale +'/about/').then((res) => {
            commit('setAbout', res.data)
            return res.data
        })
    }
}

export const mutations = {
    setAbout(state, data) {
        state.head = data.head
        if (data.content && data.content.about && data.content.about.listItems) {
            state.aboutListItems = data.content.about.listItems
        }
        state.partners = data.content.partners
        state.people = data.content.people
        state.property = data.content.property
        state.slider = data.content.slider.listItems
        state.head = data.head
    }
}

export const getters = {
    getCounter(state) {
        return state.counter
    }
}