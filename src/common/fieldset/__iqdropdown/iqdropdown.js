import iqDropdown from 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export const uniformChoice = (id, options = {}) => {
    let $id = $(`#${id}`),
        defaultOptions = {
            placeholder: $id.find('p').data('placeholder') || '',
        },
        {placeholder} = Object.assign(defaultOptions, options);
    $id.iqDropdown({
        ...options,
        setSelectionText: function (itemsCount, totalCount) {
            if (totalCount === 0) return placeholder;
            let postfix = (totalCount === 1) ? this.selectionText : this.textPlural;
            return `${totalCount} ${postfix}`;
        }
    });
}

export const multiChoice = (id, options = {}) => {
    let $id = $(`#${id}`),
        defaultOptions = {
            placeholder: $id.find('p').data('placeholder') || '',
        },
        {placeholder} = Object.assign(defaultOptions, options);
    $id.iqDropdown({
        ...options,
        setSelectionText: function (itemCount, totalCount) {
            if (totalCount === 0) return placeholder;
            return Object.entries(itemCount)
                .reduce(
                    (previousValue, currentValue, step, originalArr) => {
                        if (previousValue.length < 20) {
                            return `${previousValue}${currentValue[1]} ${currentValue[0]}, `;
                        }
                        originalArr.splice(step);
                        return `${previousValue}...`;
                    },
                    '');
        }
    })
}