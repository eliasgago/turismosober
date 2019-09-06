import { createPathOptions } from '../config/path-options';

const mapStyles = {
    viewpoints: {
        default: {
            interactive: false,
            radius: 1.3,
            fillColor: "brown",
            fillOpacity: 0.5,
            color: "black",
            weight: 4
        }
    },
    roads: {
        default: {
            interactive: false,
            color: "#FF0000",
            weight: 2,
            opacity: 0.8
        }
    },
    viewpointsRoads: {
        default: {
            interactive: false,
            color: "#0000FF",
            weight: 2,
            opacity: 0.8
        }
    },

    init: function() {
        for (var type in mapStyles) {
            let styleConfiguration = mapStyles[type];
            let styles = ['lowZoom', 'midZoom', 'highZoom'];
            for (var i = 0; i < styles.length; i++) {
                let style = styles[i];
                let styleResult = createPathOptions(styleConfiguration.default);
                for (var property in styleConfiguration[style]) {
                    if (styleConfiguration.midZoom.hasOwnProperty(property)) {
                        styleResult[property] = styleConfiguration[style][property];
                    }
                }
                styleConfiguration[style] = styleResult;
            }
        }
        console.log(this)
    },

    getDefaultStyle: function(type) {
        let styleType = this[type];
        return styleType ? styleType.default: {};
    },

    getStyleForZoom: function(type, zoomLevel) {
        let styleType = this[type];
        if(styleType) {
            if(zoomLevel >=1 && zoomLevel <= 2 && styleType.lowZoom) {
                return styleType.lowZoom;
            } else if(zoomLevel >=3 && zoomLevel <= 5 && styleType.midZoom) {
                return styleType.midZoom;
            } else if(zoomLevel >= 6 && styleType.highZoom) {
                return styleType.highZoom;
            }
            return styleType.default;
        }
        return {};
    },

    getStyle: function(styleType, type, zoomLevel) {
        let newStyle = createPathOptions(this.getStyleForZoom(type, zoomLevel));
        let defaultNestedStyle = this[type].default[styleType + 'Style'];
        for (var propertyDefault in defaultNestedStyle) {
            if (defaultNestedStyle.hasOwnProperty(propertyDefault)) {
                newStyle[propertyDefault] = defaultNestedStyle[propertyDefault];
            }
        }
        let newNestedStyle = newStyle[styleType + 'Style'];
        for (var propertyNested in newNestedStyle) {
            if (newNestedStyle.hasOwnProperty(propertyNested)) {
                newStyle[propertyNested] = newNestedStyle[propertyNested];
            }
        }
        return newStyle;
    }

}

export default mapStyles;