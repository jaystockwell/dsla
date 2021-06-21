<template>
<el-container>
  <el-header>
    <!--
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/node/123">Go to node/123</router-link>
      <router-link to="/node/444">Go to node/444</router-link>
    </p>
    -->

    <el-menu mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">Home</el-menu-item>
      <!--
      <el-submenu index="/node">
        <template #title>Nodes</template>
        <el-menu-item index="/node/1">node 1</el-menu-item>
        <el-menu-item index="/node/2">node 2</el-menu-item>

        <el-submenu index="/node/3">
          <template #title>node/3</template>
          <el-menu-item index="/node/3/sub1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      -->
      <el-menu-item index="/admin" disabled>Admin</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>  
    </el-menu>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  <el-footer>
    <el-divider></el-divider>
    Learning Accelerator - CTIL
  </el-footer>




</el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'

import yaml from 'js-yaml';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Counter,
  },
  data() {
    return {
      appName: "some cute name",
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted() {
    this.$http.get("http://dev1.soichi.us/nodes.yml").then(res=>{
      const data = yaml.load(res.data);
      this.$store.commit("setNodes", data.nodes);
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    }
  }
})
</script>

<style>
html, body {
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #333;
}

</style>
