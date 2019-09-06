import 'leaflet'
import 'proj4leaflet'

const L = window.L;

const mapConfig = {

    DEFAULT_CENTER:  [42.447868406560, -7.538507194519],

    DEFAULT_ZOOM: 11,

    MIN_ZOOM: 1,

    MAX_ZOOM: 18,

    CRS25829: new L.Proj.CRS("EPSG:25829","+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", {
        resolutions: [32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125]
    }),

}

export default mapConfig;