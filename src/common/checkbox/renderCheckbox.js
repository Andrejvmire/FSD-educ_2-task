const renderCheckbox = (data) => {
    let defaultData = {
        className: '',
        type: 'checkbox',
        checked: false
    }
    let {className, type, checked, name, value, count, label} = Object.assign(defaultData, data);
    let li = $(document.createElement('div'))
        .addClass('checkbox');
    let render = (li => (
        li
            .empty()
            .append(
                $(document.createElement('input'))
                    .addClass('checkbox__input' + className)
                    .attr({
                        type,
                        checked,
                        name: name,
                    })
                    .data('like-count', count)
                    .val(value),
                $(document.createElement('label'))
                    .addClass('checkbox__label')
                    .html(label)
            )
    ))
    return {
        render: render(li)
    };
}

export default renderCheckbox;