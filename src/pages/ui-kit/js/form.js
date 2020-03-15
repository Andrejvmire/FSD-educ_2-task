import renderList from "../../../common/list/list";

let response = (options) => ({
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

renderList({id: 'bedroom2'}, response());