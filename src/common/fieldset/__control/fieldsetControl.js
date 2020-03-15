const fieldsetControlRender = options => {
    let defaultOptions = {clear: 'Очистить', confirm: 'Применить', clearHide: true};
    let {clear, confirm, clearClick, confirmClick, clearHide} = Object.assign(defaultOptions, options);
    return $(document.createElement('div'))
        .addClass('fieldset__control')
        .append(
            $(document.createElement('button'))
                .addClass('button fieldset__button fieldset__button_clear')
                .addClass(() => (
                    clearHide === true ? 'fieldset__button_hide' : ''
                ))
                .click(clearClick)
                .html(clear),
            $(document.createElement('button'))
                .addClass('button fieldset__button fieldset__button_confirm')
                .click(confirmClick)
                .html(confirm)
        )
};

export default fieldsetControlRender;