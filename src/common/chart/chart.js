import {SVG} from '@svgdotjs/svg.js';

function Chart(id) {
    let $chartWrapper = $(`#${id}`),
        $chart = $($chartWrapper.find('.chart__chart')),
        $title = $($chartWrapper.find('.chart__title')),
        $legend = $($chartWrapper.find('.chart__legend')),
        $items = $($legend.find('.chart__item')),
        data = [],
        chartDraw = SVG().addTo($chart.get(0));
    $items.each(function () {
        data.push($(this).data());
        let {color} = $(this).data();
        $(this)
            .attr('style', "background: " + color + ";");
    });
    let radius = 58,
        circleLength = 2 * Math.PI * radius,
        offset = circleLength - 93;
    console.log(circleLength)
    chartDraw
        .width(120)
        .height(120)
        .group();
    chartDraw.circle({
        cx: 60,
        cy: 60,
        r: radius,
        fill: 'transparent',
        "stroke-width": 4,
        stroke: 'red',
        "stroke-dashoffset": offset + 1,
        "stroke-dasharray": ((circleLength * 130 / 260) - 2) + " " + (circleLength - circleLength * 130 / 260 + 2)
    });
    chartDraw.circle({
        cx: 60,
        cy: 60,
        r: radius,
        fill: 'transparent',
        "stroke-width": 4,
        stroke: 'orange',
        "stroke-dashoffset": offset-(circleLength * 130 / 260) + 1,
        "stroke-dasharray": ((circleLength * 65 / 260) - 2) + " " + (circleLength - circleLength * 65 / 260 + 2)
    });
    chartDraw.circle({
        cx: 60,
        cy: 60,
        r: radius,
        fill: 'transparent',
        "stroke-width": 4,
        stroke: 'green',
        "stroke-dashoffset": offset-(circleLength * 130 / 260)-(circleLength * 65 / 260) + 1,
        "stroke-dasharray": ((circleLength * 65 / 260) - 2) + " " + (circleLength - circleLength * 65 / 260 + 2)
    })
}

export default Chart;