<template>
<div>
  <h1>Node Dump</h1>
  <div class="node-canvas">
    <div class="node" v-for="node in $store.state.nodes" :key="node.id" 
      :class="nodeClass(node)" 
      :title="node.desc" 
      :style="{top: node.y+'px', left: node.x+'px'}">
      <b>{{node.id}}</b>
    </div>
  </div>
</div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'

interface Node {
  id: string;
  url: string;
}

export default defineComponent({
  data() {
    return {
      //classObject: {},
    }
  },
  methods: {
    nodeClass(node: Node) {
      const idpath = node.id.split("/");
      return {["node-"+idpath[0]]: true}
    }
  },
})
</script>
<style scoped>
.node-canvas {
  width: 100%;
  height: 700px;
  overflow: auto;
  background-color: #eee;
  position: relative;
}
.node {
  position: absolute;
  //width: 300px;
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 80%;
}
.node-know {
  background-color: #a3e6e9;
}
.node-learn {
  background-color: #e5eb92;
}
.node-skill {
  background-color: #abe9a5;
}
</style>