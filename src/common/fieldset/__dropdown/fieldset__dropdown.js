let dropdownOptions = {
    contentClass: 'fieldset__content',
    labelClass: 'fieldset__label'
};


const fieldsetDropDown = ((options) => {
    let {contentClass, labelClass} = options;
    let content = $('.' + contentClass);
    content.parent().each(function () {
        let self = $($(this)[0]);
        let content = $(self.children('.' + contentClass));
        let label = $(self.children('.' + labelClass));
        label.click(function () {
            content.toggleClass(contentClass + '_show');
            self.off('mouseout');
            self.on('mouseout', function (e) {
                if (!$(this).find(e.relatedTarget).length) {
                    content.removeClass(contentClass + '_show');
                    self.off('mouseout');
                }
            })
        });
    })
})(dropdownOptions);
