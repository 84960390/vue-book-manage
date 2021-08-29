import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    studentinfo:{},
  },
  mutations: {
    getStudentName(state,name){
      state.studentinfo=name;
    }
  },
  actions: {
  },
  modules: {
  }
})
