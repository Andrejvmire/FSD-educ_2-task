const currency = options => {
    let defaultOptions = {className: "currency"};
    let {className, value} = Object.assign(defaultOptions, options);
    value = Intl.NumberFormat('ru-RU').format(value * 1);
    return `<p class=${className}>${value}</p>`
}

export default currency;