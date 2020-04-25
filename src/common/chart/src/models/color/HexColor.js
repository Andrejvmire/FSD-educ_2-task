export default class HexColor {
    constructor(color) {
        this.color = color;
    }
    static test(color) {
        return /^#[0-9A-Fa-f]{6}$/.test(color);
    }
    get cssColor() {
        return this.color;
    }

    get svgColor() {
        return this.color;
    }
}