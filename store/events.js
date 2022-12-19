export const state = () => ({
    events: [],
    listItems: [],
    pagination: [],
    sortPanel: [],
    partners: {},
    sameEvents: {},
    event: {},
    langPhrase: {},
    head: {},
})
export const actions = {
    getEvents ({ commit },page) {
        return this.$axios.get('api/' + this.$i18n.locale +'/events/?PAGEN_1=' + page).then((res) => {
            commit('setEvents', res.data)
            return res.data
        })
    },
    getByUrlEvents ({ commit },link) {
        return this.$axios.get('api/' + link).then((res) => {
            commit('setEvents', res.data)
            return res.data
        })
    },
    getEvent ({ commit }, slog) {
        return this.$axios.get('api/' + this.$i18n.locale +'/events/' + slog).then((res) => {
            console.log(222, res)
            commit('setEvent', res.data)
            return res.data
        })
    }
}

export const mutations = {
    setEvents(state, data) {
        state.head = data.head
        if (data.content && data.content.events) {
            state.events = data.content.events.listItemsByDate
            state.listItems = data.content.events.listItems
            state.langPhrase = data.content.events.langPhrase
            state.pagination = data.content.events.NAVIGATION
        }
        if (data.content) {
            state.sortPanel = data.content.sort_panel
        }
    },
    setEvent(state, data) {
        state.head = data.head
        if (data.content && data.content.event && data.content.event.item) {
            state.event = data.content.event.item
            state.langPhrase = data.content.event.langPhrase
        }
        if (data.content) {
            state.partners = data.content.partners
            state.sameEvents = data.content.sameEvents
        }
    }
}

export const getters = {
    getCounter(state) {
        return state.counter
    }
}
