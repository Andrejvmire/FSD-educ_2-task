import datepicker from 'air-datepicker';

const defaultOptions = () => ({
    classes: "block block_width_320",
    multipleDatesSeparator: ' - ',
    navTitles: {
        days: 'MM yyyy'
    },
    minDate: new Date(),
    prevHtml: `<span class="datepicker__arrow">arrow_back</span>`,
    nextHtml: `<span class="datepicker__arrow">arrow_forward</span>`,
    selectOtherMonths: false,
    language: {
        monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    }
});

const parse = (object) => {
    if (object === undefined) return;
    let {$datepicker} = object;
    let btnWrapper = $datepicker.find('.datepicker--buttons');
    if (!btnWrapper.length) {
        btnWrapper = $datepicker
            .append(
                $(document.createElement("div"))
                    .addClass('.datepicker--buttons')
            )
    }
    btnWrapper
        .append(
            $(document.createElement('span'))
                .addClass('datepicker--button')
                .attr('data-action', 'hide')
                .html('применить')
        );
}

const calendar = () => {
    $('.datepicker-container').each(function () {
        let item = $(this).datepicker(defaultOptions()).data('datepicker');
        parse(item);
    })
}

calendar();