<template lang="html">
  <div class="menu">
    <a class="menu-button" href="#" v-on:click="toggleOnMap('viewpointsRoads')">
      <span class="menu-button-title">Miradores</span>
    </a>
    <a class="menu-button" href="#">
      <span class="menu-button-title">Embarcaderos</span>
    </a>
    <a class="menu-button" href="#">
      <span class="menu-button-title">Alojamientos</span>
    </a>
    <a class="menu-button" href="#">
      <span class="menu-button-title">Bodegas</span>
    </a>
    <a class="menu-button" href="#">
      <span class="menu-button-title">Restaurantes</span>
    </a>
  </div>
</template>

<script>

import { mutations } from '@/store'

export default {
  data() {
    return {
    }
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    toggleOnMap(layerName) {
      console.log('toggleOnMap: ' + layerName);
      this.$store.dispatch("changeLayerVisibility", layerName);
    }
  },
  mounted() {
  }
}
</script>

<style lang="sass">
@import "../../node_modules/leaflet/dist/leaflet.css"

.menu
  width: 100%
  display: flex
  flex-wrap: wrap

  .menu-button
    background-color: red
    border-radius: 4px
    height: 90px
    width: 90px
    color: white
    margin: 14px
    display: flex
    align-items: center
    justify-content: center
    font-size: 9pt
    font-weight: bold

    .menu-button-title



</style>
