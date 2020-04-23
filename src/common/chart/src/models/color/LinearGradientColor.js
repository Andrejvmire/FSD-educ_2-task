export default class LinearGradientColor {
    constructor(color) {
        this.color = color;
    }

    static test(color) {
        return /^linear-gradient\([0-9]{1,3}deg*(,*\s*#[0-9a-fA-F]{6}\s+[0-9]{1,3}%{1})+\)$/.test(color);
    }

    get cssColor() {
        return this.color;
    }

    get svgColor() {
        return "#FFBA9C";
    }
}