import ChartLegend from "./ChartLegend";
import ChartTitle from "./ChartTitle";
import ChartData from "./ChartData";

export default class ChartWrapper {

    constructor(node) {
        this.$item = $(node);
        this.legend = new ChartLegend(this.$item.find('.chart__legend'));
        this.title = new ChartTitle(
            this.$item.find('.chart__title'),
            this.legend.data.totalCount
        );
        this.chart = new ChartData(this.$item.find('.chart__chart'));
    }

    get data() {
        return {
            item: this.$item,
            legend: this.legend,
            title: this.title,
            chart: this.chart
        }
    }
}