import ChartItem from "./ChartItem";

export default class ChartLegend {

    constructor(node) {
        this.$item = $(node);
        this.items = [];
        this.$item
            .find('.chart__item')
            .each((index, element) => {
                this.items[index] = new ChartItem(element);
            })
    }

    get data() {
        return {
            item: this.$item,
            data: this.items.map(item => item.data),
            totalCount: (() => {
                return this.items.reduce((acc, item) => {
                    return acc += item.count;
                }, 0)
            })()
        };
    }
}