export default class ChartData {
    constructor(node) {
        this.$item = $(node);
        this.radius = this.$item.data('radius');
        this.strokeWidth = this.$item.data('strokeWidth');
    }

    get data() {
        return {
            item: this.$item,
        }
    }

    get circleLength() {
        return 2 * Math.PI * this.radius;
    }
}