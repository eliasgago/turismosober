
const colors = {

    clone: function(style) {
        return Object.assign({}, style)
    },

    applySaturation: function(color, saturation) {
        let col = this.hexToRgb(color)
        let sat = Number(saturation/100);
        const gray = col.r * 0.3086 + col.g * 0.6094 + col.b * 0.0820;

        col.r = Math.round(col.r * sat + gray * (1-sat));
        col.g = Math.round(col.g * sat + gray * (1-sat));
        col.b = Math.round(col.b * sat + gray * (1-sat));

        let out = this.rgbToHex(col.r,col.g,col.b);
        
        return out;
    },

    componentToHex: function(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    },

    rgbToHex: function(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    },

    hexToRgb: function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}

export default Object.create(colors);