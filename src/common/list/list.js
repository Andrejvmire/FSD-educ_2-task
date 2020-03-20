import fieldsetButtonRender from "../fieldset/__control/fieldsetControl";

const renderList = (options, data, items) => {
    let {id, buttons} = options;
    let {response} = data;
    let container = $('#' + id);
    $(document.createElement('ul'))
        .addClass('list')
        .append(
            response.map(items)
                .map(item => item.render)
        )
        .appendTo(container);
    if (buttons) {
        container
            .append(fieldsetButtonRender())
    }
};

export default renderList;