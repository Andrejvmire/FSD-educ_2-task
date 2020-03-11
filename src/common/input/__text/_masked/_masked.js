require('jquery.maskedinput/src/jquery.maskedinput');

const maskedInput = (options) => {
    const defaultOptions = {className: "input__text_masked"};
    const {className} = Object.assign(defaultOptions, options);

    const classSelector = `.${className}`;
    $(classSelector).each(function (item, element) {
        $(this).attr('placeholder', $(this).data('placeholder'))
        $(this).mask($(this).data('mask'), {
            placeholder: $(this).data('placeholder')
        })
    });
};

maskedInput();