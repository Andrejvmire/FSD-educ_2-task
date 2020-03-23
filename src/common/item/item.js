const renderItem = (data) => { //todo: Добавить обработку событий changeCount для заголовка
    let defaultData = {count: 0};
    let {name, id, count} = Object.assign(defaultData, data);
    let li = $(document.createElement('li'));
    const changeCount = data => {
        let {value, target} = data;
        count += value;
        li.trigger('changeCount', $(target).parent());
    };
    let render = (li => (
        li
            .empty()
            .addClass('item item__dropdown')
            .append(
                $(document.createElement('span'))
                    .addClass('item__text')
                    .html(name),
                $(document.createElement('button'))
                    .addClass('item__decrease')
                    .addClass(() => {
                        return count === 0 ? 'item__decrease-inactive' : '';
                    })
                    .html('-')
                    .click(function (e) {
                        changeCount({
                            target: e.currentTarget,
                            value: -1
                        })
                    }),
                $(document.createElement('input'))
                    .addClass('item__count')
                    .attr({
                        value: count,
                        type: "number",
                        min: 0,
                        id
                    }),
                $(document.createElement('button'))
                    .addClass('item__increase')
                    .html('+')
                    .click(function (e) {
                        changeCount({
                            target: e.currentTarget,
                            value: 1
                        })
                    }),
            )))
    li.on('changeCount', (e, target) => render($(target)));
    return {
        render: render(li)
    };
}

export default renderItem;