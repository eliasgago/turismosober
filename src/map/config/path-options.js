import colors from '../util/colors';

const pathOptions = {
    color: null,
    radius: null,
    weight: null,
    opacity: null,
    dashArray: null,
    fillColor: null,
    fillOpacity: null,
    interactive: true,
    
    // nested styles for selected & outlined
    selectedStyle: null,
    outlinedStyle: null,
    disabledStyle: null,
    detailedStyle: null,

    withProperty: function(property, value) {
        this[property] = value
        return this;
    },

    withSaturation: function(colorType, saturation) {
        let satColor = colors.applySaturation(this[colorType], saturation)
        this[colorType] = satColor
        return this;
    }
}

export function createPathOptions(baseStyle) {
    let newStyle = Object.create(pathOptions);
    if(baseStyle) {
        newStyle.color = baseStyle.color;
        newStyle.radius = baseStyle.radius;
        newStyle.weight = baseStyle.weight;
        newStyle.opacity = baseStyle.opacity;
        newStyle.dashArray = baseStyle.dashArray;
        newStyle.fillColor =baseStyle.fillColor;
        newStyle.fillOpacity = baseStyle.fillOpacity;
        newStyle.interactive = baseStyle.interactive == false ? false : true;
        newStyle.selectedStyle = baseStyle.selectedStyle;
        newStyle.outlinedStyle = baseStyle.outlinedStyle;
        newStyle.disabledStyle = baseStyle.disabledStyle;
        newStyle.detailedStyle = baseStyle.detailedStyle;
    }
    return newStyle;
}