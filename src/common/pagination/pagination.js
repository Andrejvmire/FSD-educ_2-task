import pagination from 'paginationjs';

const Paginator = defaultOptions => {
    return (options = {}, callback = undefined) => {
        let {id, style, displayControl, dataSource, customizeText, pageSize} = Object.assign(defaultOptions, options);
        let $id = $(`#${id}`);
        if ($id.length === 0) return;
        $id.pagination({
            ...style,
            ...displayControl,
            ...customizeText,
            pageSize,
            dataSource,
            callback
        })
    }
};

const formatNavigator = (currentPage, totalPage, totalNumber) => {
    let fieldsOnPage = Math.ceil(totalNumber / totalPage);
    let firstOnPage = fieldsOnPage * (currentPage - 1) + 1;
    let lastOnPage = (currentPage !== totalPage) ? firstOnPage - 1 + fieldsOnPage : totalNumber;
    let length = totalNumber > 100 ? "100+" : totalNumber;
    return `${firstOnPage} - ${lastOnPage} из ${length} вариантов аренды`;
}

const style = {
    className: 'pagination',
    classPrefix: 'pagination',
    ulClassName: 'pagination__list',
    activeClassName: 'pagination__item_active',
    disableClassName: 'pagination__item_disable',
    showNavigator: true,
    pageRange: 1,
}

const displayControl = {
    autoHidePrevious: true,
    autoHideNext: true,
}

const customizeText = {
    prevText: 'arrow_back',
    nextText: 'arrow_forward',
    formatNavigator,
}

export default Paginator({
    displayControl: {
        ...displayControl
    },
    style: {
        ...style,
    },
    customizeText: {
        ...customizeText
    }
});