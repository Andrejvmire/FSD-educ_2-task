import renderList from "../../../common/list/list";
import renderItem from "../../../common/item/item";
import renderCheckbox from "../../../common/checkbox/renderCheckbox";
import Paginator from "../../../common/pagination/pagination";
import iqDropdown from "item-quantity-dropdown/lib/item-quantity-dropdown.min";
import {uniformChoice, multiChoice} from "../../../common/fieldset/__iqdropdown/iqdropdown";


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
});

uniformChoice("drop11");
uniformChoice('drop12');
multiChoice('drop13');
multiChoice('drop14');
uniformChoice('drop15');
uniformChoice('drop16');