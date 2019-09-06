<template lang="html">
  <div class="menu">
    <div class="menu-button">
      <span class="menu-button-title">Miradores</span>
    </div>
    <div class="menu-button">
      <span class="menu-button-title">Embarcaderos</span>
    </div>
    <div class="menu-button">
      <span class="menu-button-title">Alojamientos</span>
    </div>
    <div class="menu-button">
      <span class="menu-button-title">Bodegas</span>
    </div>
    <div class="menu-button">
      <span class="menu-button-title">Restaurantes</span>
    </div>
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
    background-color: grey
    border-radius: 4px
    height: 90px
    width: 90px
    color: white
    margin: 14px
    display: flex
    align-items: center
    justify-content: center
    font-size: 10pt
    font-weight: bold

    .menu-button-title



</style>
