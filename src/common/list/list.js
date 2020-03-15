import renderItem from "../item/item";
import fieldsetButtonRender from "../fieldset/__control/fieldsetControl";

const renderList = (options, data) => {
    let {id, buttons, clearHide} = options;
    let {response} = data;
    let container = $('#' + id);
    $(document.createElement('ul'))
        .addClass('list')
        .append(
            response.map(renderItem)
                .map(item => item.render)
        )
        .appendTo(container);
    if (buttons) {
        container
            .append(fieldsetButtonRender())
    }
};

export default renderList;