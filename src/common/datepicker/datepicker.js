import datepicker from 'air-datepicker';

let calendar = $('.datepicker-container').datepicker({
    classes: "block block_width_320",
    offset: 0,
    multipleDateSeparator: ' - ',
    range: true,
    navTitles: {
        days: 'MM yyyy'
    },
    prevHtml: `<span class="datepicker__arrow">arrow_back</span>`,
    nextHtml: `<span class="datepicker__arrow">arrow_forward</span>`,
    selectOtherMonths: false,
});

calendar = calendar.data('datepicker');
const parse = (object) => {
    if (object === undefined) return;
    let {$el, $nav, $content, $buttons} = object;
    $el.find('.datepicker--buttons')
        .append(
            $(document.createElement('span'))
                .addClass('datepicker--button')
                .attr('data-action', 'hide')
                .html('применить')
        );
}

parse(calendar);