import Color from "./color/Color";

export default class ChartTitle {
    constructor(node, totalCount) {
        if (typeof totalCount === "undefined") throw new Error('Total count is not defined');
        this.$item = $(node);
        this.singular = this.$item.data('singular');
        this.plural = this.$item.data('plural');
        this.totalCount = totalCount;
        this.color = new Color(this.$item.data('color'));
    }

    get title() {
        let usePlural = (this.totalCount !== 1);
        let text = usePlural ? this.plural : this.singular;
        return `${text}`;
    }

    get count() {
        return this.totalCount;
    }

    get data() {
        return {
            title: this.title,
            color: this.color,
            count: this.totalCount
        }
    }
}