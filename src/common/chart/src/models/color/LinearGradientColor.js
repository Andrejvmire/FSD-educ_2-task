let angleMatrix = {
    "to top": 0,
    "to bottom": 180,
    "to left": 270,
    "to right": 90,
    "to top left": 315,
    "to left top": 315,
    "to top right": 45,
    "to right top": 45,
    "to bottom right": 135,
    "to right bottom": 135
};

export default class LinearGradientColor {
    constructor(color) {
        this.color = color;
        let angleTest = this.color.match(/([0-9]{1,2}|[1-2]{1}[0-9]{2}|3{1}[0-5]{1}[0-9]{1})deg/);
        if (angleTest === null) {
            this.angle = angleMatrix[
                this.color.match(/(to\s+[a-zA-Z\s]+)/g)
                ];
        } else {
            this.angle = angleTest[1];
        }
        let gradients = this.color.match(/(#[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?)(\s([0-9]{1,2}|100)%)?/g);
        this.gradients = gradients.map(item => {
            let [color, colorStop] = item.split(' ');
            colorStop = (typeof colorStop === 'undefined') ? 0 : colorStop.slice(0,-1) / 100;
            return {
                color,
                colorStop
            }
        })
    }

    static test(color) {
        return /^linear-gradient\(((([0-9]{1,2}|[1-2][0-9]{2}|3[0-5][0-9])deg)|(to\s+[a-zA-Z\s]+))?(,*\s*(#([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)(\s([0-9]{1,2}|100)%)?)+\)$/.test(color);
    }

    get cssColor() {
        return this.color;
    }

    svgColor(SVG) {
        return SVG.gradient('linear', (Gradient) => {
            Gradient.from('0', '0')
                .to('0', '1');
            this.gradients.forEach( item => {
                Gradient.stop(item.colorStop, item.color)
            })
        })
    }
}