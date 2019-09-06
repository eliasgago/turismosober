<template>
  <div class="home">
    <div class="map">
      <the-map></the-map>
    </div>
  </div>
</template>

<script>
import { TheMap } from '@/components'

export default {
  components: {
    TheMap
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
  height: 100vh;
}
</style>
