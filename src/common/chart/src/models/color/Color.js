import LinearGradientColor from "./LinearGradientColor";
import HexColor from "./HexColor"

export default class Color {
    constructor(color) {
        if (LinearGradientColor.test(color)) return new LinearGradientColor(color);
        if (HexColor.test(color)) return new HexColor(color);
        return new HexColor('#FFFFFF');
    }
}