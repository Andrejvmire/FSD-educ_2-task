import Color from "./color/Color";

export default class ChartItem {

    constructor(node) {
        this.$item = $(node);
        this.count = this.$item.data('count');
        this.color = new Color(this.$item.data('color'));
        this.name = this.$item.data('name');
    }

    get $self() {
        return this.$item;
    }
    get data() {
        return {
            item: this.$item,
            count: this.count,
            color: this.color,
            name: this.name
        }
    }
}