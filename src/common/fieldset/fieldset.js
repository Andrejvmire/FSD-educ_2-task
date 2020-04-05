let dropdownOptions = {
    contentClass: 'fieldset__content',
    labelClass: 'fieldset__label'
};


const fieldset = ((options) => {
    let {contentClass, labelClass} = options;
    let content = $('.' + contentClass);
    content.parent().each(function () {
        let self = $($(this)[0]);
        let content = $(self.children('.' + contentClass));
        let label = $(self.children('.' + labelClass));
        let icon = $(self.children('.fieldset__icon_rotatable'));
        label.click(function () {
            icon.toggleClass('rotate');
            content.toggleClass(contentClass + '_show');
            label.toggleClass(() => {
                return !$(this).parent().is('.fieldset__expandable')
                    ?
                    'fieldset__label_border_top'
                    :
                    ''
            });
        });
    })
})
(dropdownOptions);
