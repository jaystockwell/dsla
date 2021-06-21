<template>
<div>
  nodeid: {{nodeId}} {{$route.params.id}}
  <el-button type="primary">Primary</el-button>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    nodeId() {
      return this.$route.params.id;
    },
  },
  created() {
    /*
    this.$watch(() => this.$route.params,
      (toParams, previousParams) => {
        console.log(toParams, previousParams);
      }
    )
    */
  },
})
</script>