import renderItem from '../../item/item';

let dropdownOptions = {
    contentClass: 'fieldset__content',
    labelClass: 'fieldset__label'
};

let response = (options) => ({
    response: [
        {
            name: "спальни", count: 2, id: 1
        },
        {
            name: "кровати", count: 2, id: 2
        },
        {
            name: "ванные комнаты", count: 0, id: 3
        }
    ]
});

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

const renderList = (options, data) => {
    let {id} = options;
    let {response} = data;
    let container = $('#' + id);
    let list = document.createElement('ul');
    list = $(list);
    list.addClass('menu');
    let items = response.map(renderItem);
    list.append(items.map(item => item.render));
    container.append(list);
};

renderList({id: 'bedroom2'}, response());