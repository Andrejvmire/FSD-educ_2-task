import ChartWrapper from "../models/ChartWrapper";
import DoughnutView from "../view/DoughnutView";

class ChartController {
    doughnut(id) {
        id = /^#/.test(id)
            ?
            id
            :
            `#${id}`
        let model = new ChartWrapper(id);
        DoughnutView.render(
            model.data
        )
    }
}

export default ChartController;