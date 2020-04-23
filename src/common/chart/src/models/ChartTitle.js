export default class ChartTitle {
    constructor(node, totalCount) {
        if (typeof totalCount === "undefined") throw new Error('Total count is not defined');
        this.$item = $(node);
        this.postfix = this.$item.data('postfix');
    }
}