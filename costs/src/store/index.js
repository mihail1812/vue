import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
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
    fetchData({ dispatch}) {
      let res = fetch('obj.json')
        .then(data => {
          console.log(data, '0'); //ТУТ ВСЕ ОК В КОНСОЛЬ ВЫХОДИТ response
          return data.text
        })
        .then(data => {
          console.log(res, '1');
          console.log(data, '2');
          return (data)
        })
        .then(res => {
          console.log(res, '3');
          dispatch('upgradeData', res)
        })
    },
    loadCategories({
      commit
    }) {
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