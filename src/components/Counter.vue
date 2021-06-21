<template>
    counter:<b @click="inc">{{count}}</b>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
      return{
          //counter: 0
      }
  },

  mounted() {
      console.log("counter loaded");
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },

  methods: {
      inc() {
          this.$store.commit('increment')
      }
  }
})
</script>