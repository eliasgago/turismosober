<template lang="html">
  <div class="map">
    <div id="map">
    </div>
  </div>
</template>

<script>

import { mutations } from '@/store'
import { Map, MapConfig } from '@/map'

export default {
  data() {
    return {
      map: null
    }
  },
  computed: {
    viewpointsGeoJSON() {
      return this.$store.state.map.viewpointsGeoJSON
    },
    roadsGeoJSON() {
      return this.$store.state.map.roadsGeoJSON
    },
    viewpointsRoadsGeoJSON() {
      return this.$store.state.map.viewpointsRoadsGeoJSON
    },
    showViewPointsRoads() {
      return this.$store.state.map.show.viewpointsRoads
    }
  },
  watch: {
    viewpointsGeoJSON(viewpointsGeoJSON) {
      this.map.setViewpoints(viewpointsGeoJSON)
    },
    roadsGeoJSON(roadsGeoJSON) {
      console.log('calling setRoads', roadsGeoJSON)
      this.map.setRoads(roadsGeoJSON)
    },
    viewpointsRoadsGeoJSON(viewpointsRoadsGeoJSON) {
      console.log('calling setViewpointsRoads', viewpointsRoadsGeoJSON)
      this.map.setViewpointsRoads(viewpointsRoadsGeoJSON)
    },
    showViewPointsRoads(showViewPointsRoads) {
      console.log('calling showViewPointsRoads', showViewPointsRoads)
      this.map.showLayerMap('viewpointsRoads', showViewPointsRoads)
      this.map.showLayerMap('viewpoints', showViewPointsRoads)
    }
  },
  methods: {

  },
  mounted() {
    var map = new Map('map', {
      minZoom: MapConfig.MIN_ZOOM,
      maxZoom: MapConfig.MAX_ZOOM,
      center: MapConfig.DEFAULT_CENTER,
      zoom: MapConfig.DEFAULT_ZOOM,
      zoomControl: false,
      //almostOnMouseMove: false,
    });
    this.map = map;

    this.map.init();
    this.map.createPanes();
    this.map.initBaseLayers();
    this.map.initDefaultControls();
    this.map.setViewpoints(this.viewpointsGeoJSON);
    this.map.setRoads(this.roadsGeoJSON);
    this.map.setViewpointsRoads(this.viewpointsRoadsGeoJSON);

  }
}
</script>

<style lang="sass">
@import "../../node_modules/leaflet/dist/leaflet.css"

.bens-map
  height: 100%
  width: 100%

#map
  height: 100%
  width: 100%

</style>
