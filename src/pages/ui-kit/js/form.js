import renderList from "../../../common/list/list";

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
renderList({id: 'bedroom2'}, bedRoomResponse());

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

renderList({id: "guests1", buttons: true}, guestsResponse());

renderList({id: "guests2", buttons: true, clearHide: false}, guestsResponse());