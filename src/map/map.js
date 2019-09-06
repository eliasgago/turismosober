
import 'leaflet'
import 'proj4leaflet'

import MapConfig from './config/map-config'
import MapStyles from './config/map-styles'
import MapPanes from './config/map-panes'
import ViewpointsLayerGroup from './layergroups/viewpoints'
import RoadsLayerGroup from './layergroups/roads'
import ViewpointsRoadsLayerGroup from './layergroups/viewpointsRoads'

const L = window.L;

L.LayerGroup.include({
    getLayerById: function (id) {
      for (var i in this._layers) {
          if (this._layers[i].feature.id == id) {
            return this._layers[i];
          }
      }
    }
});

const map = L.Map.extend({

    // imagen base
    baseLayer: null,

    // capas base
    viewpointsLayerGroup: null,
    roadsLayerGroup: null,
    viewpointsRoadsLayerGroup: null,

    controls: {
        zoom: null
    },

    init: function() {
        MapStyles.init();
    },

    // BASE LAYERS
    initBaseLayers: function (layer) {
        console.log('init base layers')
        // Orto Galicia 2014: http://ideg.xunta.gal/servizos/services/Raster/PNOA_2014/MapServer/WmsServer? (capa: 1)
        // Orto PNOA: http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS& (capa: OI.OrthoimageCoverage)
        // IGN Base: http://www.ign.es/wms-inspire/ign-base?SERVICE=WMS& (capa: IGNBaseOrto)
        /*this.baseLayer = new L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&",{
            layers: "OI.OrthoimageCoverage",
            crs: MapConfig.CRS25829,
            format: 'image/png',
            transparent: true,
            attribution: '© Instituto Geográfico Nacional de España',
            opacity: 0.8
        }).addTo(this);*/

        /*this.baseLayer = new  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
            maxZoom: 18
        }).addTo(this);*/

        this.baseLayer = new  L.tileLayer('https://api.mapbox.com/styles/v1/eliasgago/cj6wdigx7091o2rp5dbs1niwe/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxpYXNnYWdvIiwiYSI6ImNqM3ZtbDlheTAwMG8zMW8wYzNocGVzcXcifQ.3Ex1pscNCyDO4Pdq3uIqLw', {
            maxZoom: 18
        }).addTo(this);

        

        this.viewpointsLayerGroup = new ViewpointsLayerGroup([], this);
        this.roadsLayerGroup = new RoadsLayerGroup([], this);
        this.viewpointsRoadsLayerGroup = new ViewpointsRoadsLayerGroup([], this);
    },

    setViewpoints: function(viewpointsGeoJSON) {
        console.log('viewpointsGeoJSON', viewpointsGeoJSON)
        if(viewpointsGeoJSON && this.viewpointsLayerGroup) {
            this.viewpointsLayerGroup.setData(viewpointsGeoJSON);
            /*for(var i = 0; i < viewpointsGeoJSON.length; i++) {
                console.log(viewpointsGeoJSON[i])
                L.circle([viewpointsGeoJSON[i].latitud, viewpointsGeoJSON[i].longitud], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 50
                }).bindPopup(viewpointsGeoJSON[i].nombre).addTo(this.viewpointsLayerGroup);
            }*/
        }
    },

    setRoads: function(roadsGeoJSON) {
        console.log('roadsGeoJSON', roadsGeoJSON)
        if(roadsGeoJSON && this.roadsLayerGroup) {
            this.roadsLayerGroup.setData(roadsGeoJSON);
        }
    },

    setViewpointsRoads: function(viewpointsRoadsGeoJSON) {
        console.log('viewpointsRoadsGeoJSON', viewpointsRoadsGeoJSON)
        if(viewpointsRoadsGeoJSON && this.viewpointsRoadsLayerGroup) {
            this.viewpointsRoadsLayerGroup.setData(viewpointsRoadsGeoJSON);
        }
    },


    // CONTROLS
    initDefaultControls: function() {
        this.controls.zoom = L.control.zoom({ position: 'bottomright' })
    },

    reviewPanesOrder() {
        this.getPane(MapPanes.VIEWPOINTS).style.zIndex = 605;
    },

    createPanes: function() {
        this.createPane(MapPanes.VIEWPOINTS);
        this.createPane(MapPanes.ROADS);
        this.createPane(MapPanes.VIEWPOINTS_ROADS);
        this.reviewPanesOrder();
    },

  });

  export default map;