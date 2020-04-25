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
        let textGroup = this.canvas.group();
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
                    stroke: item.data.color.svgColor(color => {
                        return this.canvas.gradient('linear', (Gradient) => {
                            Gradient.from('0', '0')
                                .to('0', '1');
                            color.gradients.forEach( item => {
                                Gradient.stop(item.colorStop, item.color)
                            })
                        })
                    }),
                    "stroke-dashoffset": this.offset + 1,
                    "stroke-dasharray": this.strokeDasharray(chart.circleLength, legend.data.totalCount, item.count, 4)
                })
            }
        });
        textGroup
            .text(text => {
                text
                    .tspan(title.count)
                    .newLine()
                    .fill(title.data.color.svgColor)
                    .x(50)
                    .font({
                        size: 24,
                        family: "Quicksand",
                        weight: 'bold'
                    })
                    .attr('text-anchor', "middle");
                text
                    .tspan(title.title.toUpperCase())
                    .newLine()
                    .fill(title.data.color.svgColor)
                    .font({
                        size: 12,
                        family: "Montserrat",
                        weight: 'bold'
                    })
                    .attr('text-anchor', "middle");
            })
            .move(30, 37)
    }
}