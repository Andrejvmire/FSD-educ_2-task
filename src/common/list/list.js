import renderItem from "../item/item";

const renderList = (options, data) => {
    let {id} = options;
    let {response} = data;
    let container = $('#' + id);
    let list = document.createElement('ul');
    list = $(list);
    list.addClass('list');
    let items = response.map(renderItem);
    list.append(items.map(item => item.render));
    container.append(list);
};

export default renderList;