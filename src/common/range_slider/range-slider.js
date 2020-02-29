require("webpack-jquery-ui/slider");
require("jquery");
import currency from "../currency/currency";

const RangeSlider = options => {
    let {className, classes} = options;
    let dataset = $(className)[0].dataset;
    let min = dataset.min * 1;
    let max = dataset.max * 1;
    let comment = $('#' + dataset.comment_id); // todo: знак рубля
    let slider = $(className).slider({
        ...dataset,
        min,
        max,
        classes,
        range: true,
        values: [dataset.from, dataset.to],
        slide: function (event, ui) {
            comment.html(currency({value: ui.values[0]}) + currency({value: ui.values[1]}));
        }
    });
    comment.html(currency({value: $(className).slider("values", 0)}) +
        currency({value: $(className).slider("values", 1)}));
}

RangeSlider({
    className: '.range-slider',
    classes: {
        "ui-slider": "range-slider",
        "ui-slider-handle": "range-slider__handle",
        "ui-slider-range": "range-slider__range",
    }
})