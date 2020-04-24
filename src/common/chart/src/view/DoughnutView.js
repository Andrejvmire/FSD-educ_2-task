import {SVG} from '@svgdotjs/svg.js';

export default class DoughnutView {
    static strokeDasharray(circleLength, totalCount, count, padding = 0) {
        let lineLength = (circleLength * count / totalCount);
        this.offset -= lineLength;
        return (lineLength - padding / 2) + " " + (circleLength - lineLength + padding / 2);
    }

    static render(data) {
        let {chart, title, legend} = data;
        this.offset = -93;
        const width = 120,
            height = 120;
        this.canvas = SVG().addTo(
            chart.$item.get(0)
        )
            .width(width)
            .height(height);
        legend.items.forEach(item => {
            item.$self
                .attr('style', "background: " + item.data.color.cssColor + ";");
            if (item.count !== 0) {
                this.canvas.circle({
                    cx: width / 2,
                    cy: height / 2,
                    r: chart.radius,
                    fill: "transparent",
                    "stroke-width": chart.strokeWidth,
                    stroke: item.data.color.svgColor(this.canvas),
                    "stroke-dashoffset": this.offset + 1,
                    "stroke-dasharray": this.strokeDasharray(chart.circleLength, legend.data.totalCount, item.count, 4)
                })
            }
        });
    }
}