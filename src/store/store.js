import Vue from 'vue'
import Vuex from 'vuex'

import { ViewpointService, RoadService, ViewpointRoadService } from '@/api'
import mutations from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

    map: {
      viewpointsGeoJSON: null,
      roadsGeoJSON: null,
      viewpointsRoadsGeoJSON: null,
      show: {
        viewpointsRoads: true 
      }
    },
  },

  mutations: {
    [mutations.SET_MAP_VIEWPOINTS](state, viewpointsGeoJSON) {
      console.log('MUTATION - SET_MAP_VIEWPOINTS', viewpointsGeoJSON);
      state.map.viewpointsGeoJSON = viewpointsGeoJSON
    },
    [mutations.SET_MAP_ROADS](state, roadsGeoJSON) {
      console.log('MUTATION - SET_MAP_ROADS', roadsGeoJSON);
      state.map.roadsGeoJSON = roadsGeoJSON
    },
    [mutations.SET_MAP_VIEWPOINTS_ROADS](state, viewpointsRoadsGeoJSON) {
      console.log('MUTATION - SET_MAP_VIEWPOINTS_ROADS', viewpointsRoadsGeoJSON);
      state.map.viewpointsRoadsGeoJSON = viewpointsRoadsGeoJSON
    },
    [mutations.SET_MAP_LAYER_VISIBILITY](state, mapLayer) {
      console.log('MUTATION - SET_MAP_LAYER_VISIBILITY', mapLayer);
      state.map.show[mapLayer] = !state.map.show[mapLayer];
      console.log('MUTATION - SET_MAP_LAYER_VISIBILITY', state.map.show[mapLayer]);
    },
  },
  actions: {
    initState({ commit }) {
      if(!this.state.map.viewpointsGeoJSON) {
        ViewpointService.getAll()
          .then(
            geojsonData => {
              console.log(geojsonData);
              commit(mutations.SET_MAP_VIEWPOINTS, geojsonData)
            }
          );
      }
      if(!this.state.map.roadsGeoJSON) {
        RoadService.getAll()
          .then(
            geojsonData => {
              console.log(geojsonData);
              commit(mutations.SET_MAP_ROADS, geojsonData)
            }
          );
      }
      if(!this.state.map.viewpointsRoadsGeoJSON) {
        ViewpointRoadService.getAll()
          .then(
            geojsonData => {
              console.log(geojsonData);
              commit(mutations.SET_MAP_VIEWPOINTS_ROADS, geojsonData)
            }
          );
      }
    },
    changeLayerVisibility({ commit }, mapLayer) {
      commit(mutations.SET_MAP_LAYER_VISIBILITY, mapLayer)
    }
  }
})

export default store;