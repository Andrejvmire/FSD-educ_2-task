require("webpack-jquery-ui/slider");
require("jquery");
import currency from "../currency/currency";

const rangeSlider = options => {
    let {className, classes} = options;
    $(className).each(function () {
        let dataset = $(this)[0].dataset;
        let {value} = dataset;
        let {min, max, from, to} = JSON.parse(value);
        let comment = $('#' + dataset.comment_id);
        let slider = $(this).slider({
            ...dataset,
            min,
            max,
            classes,
            range: true,
            values: [from, to],
            slide: (event, ui) => {
                comment.html(currency({value: ui.values[0]}) + currency({value: ui.values[1]}));
            }
        })
        comment.html(currency({value: from}) + currency({value: to}));
    })
}

rangeSlider({
    className: '.range-slider',
    classes: {
        "ui-slider": "range-slider",
        "ui-slider-handle": "range-slider__handle",
        "ui-slider-range": "range-slider__range",
    }
})