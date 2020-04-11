import renderList from "../../../common/list/list";
import renderItem from "../../../common/item/item";
import renderCheckbox from "../../../common/checkbox/renderCheckbox";
import Paginator from "../../../common/pagination/pagination";

let bedRoomResponse = (options) => ({
    response: [
        {
            name: "спальни", count: 2, id: 1
        },
        {
            name: "кровати", count: 2, id: 2
        },
        {
            name: "ванные комнаты", count: 0, id: 3
        }
    ]
});
renderList({id: 'bedroom2'}, bedRoomResponse(), renderItem);

let guestsResponse = (options) => ({
    response: [
        {
            name: "Взрослые"
        },
        {
            name: "Дети"
        },
        {
            name: "Младенцы"
        }
    ]
});

renderList({id: "guests1", buttons: true}, guestsResponse(), renderItem);

renderList({id: "guests2", buttons: true, clearHide: false}, guestsResponse(), renderItem);

let checkbox_list = (options) => ({
    response: [
        {
            label: "Завтрак"
        },
        {
            label: "Письменый стол",
            checked: true
        },
        {
            label: "Стул для кормления",
            checked: true
        },
        {
            label: "Кроватка",
            checked: true
        },
        {
            label: "Телевизор"
        },
        {
            label: "Шампунь"
        },
        {
            label: "Телевизор"
        },
        {
            label: "Шампунь"
        },
    ]
})

renderList({id: "expand1"}, checkbox_list(), renderCheckbox);

renderList({id: "expand2"}, checkbox_list(), renderCheckbox);

Paginator({
    id: 'pagination',
    dataSource: (done) => {
        let result = [];
        for (let i = 0; i < 149; i++) {
            result[i] = i;
        }
        done(result);
    }
},
    data => console.log(data));