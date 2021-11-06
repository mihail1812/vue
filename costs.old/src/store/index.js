import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
        paginationLength: 0,
        pages: []
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        addPaymentListData(state, payload) {
            state.paymentsList.push(payload);
        },
        setCategories(state, payload) {
            if (!Array.isArray(payload)) {
                payload = [payload]
            }
            state.categoryList.push(...payload)
        },
    },
    actions: {
        fetchData({ dispatch }) {
            return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            "page1": [{
                                    "id": 1,
                                    "date": "20.03.2020",
                                    "category": "Food",
                                    "value": 169
                                },
                                {
                                    "id": 2,
                                    "date": "21.03.2020",
                                    "category": "Navigation",
                                    "value": 50
                                },
                                {
                                    "id": 3,
                                    "date": "22.03.2020",
                                    "category": "Sport",
                                    "value": 450
                                },
                                {
                                    "id": 4,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 5,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                }
                            ],
                            "page2": [{
                                    "id": 6,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 7,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                },
                                {
                                    "id": 8,
                                    "date": "25.03.2020",
                                    "category": "Food",
                                    "value": 200
                                },
                                {
                                    "id": 9,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 10,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                }
                            ],
                            "page3": [{
                                    "id": 11,
                                    "date": "20.03.2020",
                                    "category": "Food",
                                    "value": 169
                                },
                                {
                                    "id": 12,
                                    "date": "21.03.2020",
                                    "category": "Navigation",
                                    "value": 50
                                },
                                {
                                    "id": 13,
                                    "date": "22.03.2020",
                                    "category": "Sport",
                                    "value": 450
                                },
                                {
                                    "id": 14,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 15,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                }
                            ],
                            "page4": [{
                                    "id": 16,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 17,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                },
                                {
                                    "id": 18,
                                    "date": "25.03.2020",
                                    "category": "Food",
                                    "value": 200
                                },
                                {
                                    "id": 19,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 20,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                }
                            ],
                            "page5": [{
                                    "id": 21,
                                    "date": "20.03.2020",
                                    "category": "Food",
                                    "value": 169
                                },
                                {
                                    "id": 22,
                                    "date": "21.03.2020",
                                    "category": "Navigation",
                                    "value": 50
                                },
                                {
                                    "id": 23,
                                    "date": "22.03.2020",
                                    "category": "Sport",
                                    "value": 450
                                },
                                {
                                    "id": 24,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 25,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                }
                            ],
                            "page6": [{
                                    "id": 26,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 27,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                },
                                {
                                    "id": 28,
                                    "date": "25.03.2020",
                                    "category": "Food",
                                    "value": 200
                                },
                                {
                                    "id": 29,
                                    "date": "23.03.2020",
                                    "category": "Entertaiment",
                                    "value": 969
                                },
                                {
                                    "id": 30,
                                    "date": "24.03.2020",
                                    "category": "Education",
                                    "value": 1500
                                }
                            ]
                        })
                    }, 1000)
                })
                .then(res => {
                    console.log(res);
                    dispatch('upgradeData', res)
                })
        },
        loadCategories({ commit }) {
            return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(['Food', 'Transport', 'Education', 'Entertainment'])
                    }, 1000)
                })
                .then(res => {
                    commit('setCategories', res)
                })
        },
        upgradeData({
            commit
        }, payload) {
            commit('setPaymentsListData', payload);

        },

    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
        getCategoryList: state => state.categoryList,
    }
})