import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    nodes: null,
  },
  mutations: {
    increment(state) {
      console.log("incrementing count", state.count);
      state.count++
    },
    setNodes(state, nodes) {
      console.log("mutating nodes", nodes);
      state.nodes = nodes;
    }
  }
})