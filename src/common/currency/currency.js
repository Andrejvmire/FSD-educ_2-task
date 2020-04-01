const currency = options => {
    let defaultOptions = {className: "currency currency__ru currency__range"};
    let {className, value} = Object.assign(defaultOptions, options);
    value = Intl.NumberFormat('ru-RU').format(value * 1);
    return $(document.createElement('p'))
        .addClass(className)
        .html(value);
}

export default currency;