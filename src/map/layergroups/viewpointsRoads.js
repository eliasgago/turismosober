
import 'leaflet'
import 'proj4leaflet'
import MapConfig from '../config/map-config';
import MapPanes from '../config/map-panes';
import { createPathOptions } from '../config/path-options';
import BaseLayerGroup from './base'

const L = window.L;

const ViewpointsRoadsLayerGroup = BaseLayerGroup.extend({

    initialize: function(geojson, map, options) {
        this.name = 'viewpointsRoads';
        if(!options){
            options = {};
        }
        options.pane = MapPanes.VIEWPOINTS_ROADS;
        BaseLayerGroup.prototype.initialize.call(this, geojson, map, options);
    },

});

export default ViewpointsRoadsLayerGroup;