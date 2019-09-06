
import 'leaflet'
import 'proj4leaflet'
import MapConfig from '../config/map-config';
import MapPanes from '../config/map-panes';
import { createPathOptions } from '../config/path-options';
import BaseLayerGroup from './base'

const L = window.L;

const ViewpointsLayerGroup = BaseLayerGroup.extend({

    initialize: function(geojson, map, options) {
        this.name = 'viewpoints';
        if(!options){
            options = {};
        }
        options.pane = MapPanes.VIEWPOINTS;
        BaseLayerGroup.prototype.initialize.call(this, geojson, map, options);
    },

    setData: function(viewpointsData) {
        this.clearLayers();

        for(var i = 0; i < viewpointsData.length; i++) {
            console.log(viewpointsData[i])
            L.circle([viewpointsData[i].latitud, viewpointsData[i].longitud], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 50
            }).bindPopup(viewpointsData[i].nombre).addTo(this);
        }

        this.reviewLayerGroupForZoom();
    },

});

export default ViewpointsLayerGroup;