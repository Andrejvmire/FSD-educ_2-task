import {uniformChoice} from "../../common/fieldset/__iqdropdown/iqdropdown";
import ChartController from "../../common/chart/src/controller/ChartController";
// import Chart from "../../common/chart/chart";

uniformChoice('guests333');
// Chart('chart');

let chart = new ChartController();
chart.doughnut('chart');