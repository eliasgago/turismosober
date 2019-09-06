<template>
  <div class="home">
      <the-map></the-map>
      <the-menu></the-menu>
  </div>
</template>

<script>
import { TheMap } from '@/components'
import { TheMenu } from '@/components'

export default {
  components: {
    TheMap,
    TheMenu
  },
  created() {
    console.log('HomeView created')
  },
  mounted() {
    this.$store.dispatch("initState");
  }
}
</script>

<style lang="scss">
.home{
  width: 100%;
  height: 100vh;
}
.map {
  width: 100%;
  height: 50vh;
}
</style>
