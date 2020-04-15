import {multiChoice, uniformChoice} from "../../common/fieldset/__iqdropdown/iqdropdown";
import Paginator from "../../common/pagination/pagination";

uniformChoice('formSearch22');
multiChoice('formSearch23');
Paginator({
    id: 'pagination21',
    pageSize: 12,
    dataSource: (done) => {
        done(
            Array(150)
                .fill(1)
        );
    }
});