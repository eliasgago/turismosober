import 'leaflet'
import 'proj4leaflet'
import mapStyles from '../config/map-styles';

const L = window.L;

const BaseLayerGroup = L.Proj.GeoJSON.extend({

    name: null,
    map: null,

    clickListener: null,
    
    initialize: function(geojson, map, options) {
        if(!options){
            options = {};
        }
        if(!options.style) {
            options.style = mapStyles.getDefaultStyle(this.name);
        }
        L.GeoJSON.prototype.initialize.call(this, geojson, options);
        this.addTo(map)
        this.map = map;
    },

    setData: function(geojson) {
        console.log('pasoooo')
        this.clearLayers();

        console.log('geojson', geojson)
        this.addData(geojson);
        this.reviewLayerGroupForZoom();
    },

    select: function(selectedLayers) {
        if(selectedLayers && !(selectedLayers instanceof Array)) {
            selectedLayers = [selectedLayers]
        }
        let oldLayersSelected = this.getLayers().filter(layer => layer.options.selected);
        oldLayersSelected.forEach(layer => {
            delete layer.options.selected;
            this.reviewLayerForZoom(layer)
        });
        if(selectedLayers) {
            let newLayersSelected = this.getLayers().filter(layer => selectedLayers.includes(layer.feature.id));
            newLayersSelected.forEach(layer => {
                layer.options.selected = true;
                this.reviewLayerForZoom(layer)
            });
        }
    },

    outline: function(outlinedLayers) {
        if(outlinedLayers && !(outlinedLayers instanceof Array)) {
            outlinedLayers = [outlinedLayers]
        }
        let oldLayersOutlined = this.getLayers().filter(layer => layer.options.outlined);
        oldLayersOutlined.forEach(layer => {
            delete layer.options.outlined;
            this.reviewLayerForZoom(layer)
        });
        if(outlinedLayers) {
            let newLayersOutlined = this.getLayers().filter(layer => outlinedLayers.includes(layer.feature.id));
            newLayersOutlined.forEach(layer => {
                layer.options.outlined = true;
                this.reviewLayerForZoom(layer)
            });
        }
    },

    reviewLayerGroupForZoom: function() {
        let zoomLevel = this.map.getZoom();
        this.reviewLayerGroup(zoomLevel)
        if(this.map.hasLayer(this)) {
            this.eachLayer(layer => {
                if(layer.options.removed) {
                    if(this.hasLayer(layer)) {
                        this.removeLayer(layer)
                    }
                }else{
                    if(!this.hasLayer(layer)) {
                        this.addLayer(layer)
                    }
                    this.reviewLayerForZoom(layer, zoomLevel);
                }
            });
        }
    },

    reviewLayerForZoom: function(layer, zoomLevel) {
        if(!zoomLevel) {
            zoomLevel = this.map.getZoom();
        }
        this.reviewLayerStyle(layer, zoomLevel);
        this.reviewLayerTooltip(layer, zoomLevel);
        this.reviewLayerPopup(layer, zoomLevel);
        this.reviewLayerListeners(layer, zoomLevel);
    },

    getStyleForZoom(zoomLevel) {
        return mapStyles.getStyleForZoom(this.name, zoomLevel)
    },

    reviewLayerStyle(layer, zoomLevel) {
        if(!zoomLevel) {
            zoomLevel = this && this.map ? this.map.getZoom() : 1;
        }
        if(layer.options.outlined) {
            layer.setStyle(mapStyles.getStyle('outlined', this.name, zoomLevel));
        }else if(layer.options.selected) {
            layer.setStyle(mapStyles.getStyle('selected', this.name, zoomLevel));
        }else if(layer.options.detailed) {
            layer.setStyle(mapStyles.getStyle('detailed', this.name, zoomLevel));
        }else if(layer.options.disabled) {
            layer.setStyle(mapStyles.getStyle('disabled', this.name, zoomLevel));
        }else{
            layer.setStyle(this.getStyleForZoom(zoomLevel))
        }
    },


    reviewLayerGroup: function(zoomLevel) {},
    reviewLayerTooltip: function(layer, zoomLevel) {},
    reviewLayerPopup: function(layer, zoomLevel) {},
    reviewLayerListeners: function(layer, zoomLevel) {},

    setClickListener(listener) {
        this.clickListener = listener;
    },

    removeLayerFromMap() {
        this.map.removeLayer(this);
    },

    addLayerToMap() {
        this.map.addLayer(this)
    }


});

export default BaseLayerGroup;