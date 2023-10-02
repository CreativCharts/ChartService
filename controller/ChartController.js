import {charts} from "../model/Chart.js";


export function getCharts() {
    return charts;
}

export function getAllCharts() {
    return charts;
}

export function createChart(chart) {
    return {
        createChart: createChart
    }
}

export function getChartByType(type) {
    return charts.find((chart) => {
        return chart.type === type;
    });
}



export function readChart(chart) {
    return charts.find((chart) => {
        let type = chart.type;
        return chart.type === type;
    });
}


export function updateChart(chart) {
    return charts.find((chart) => {
        let type = chart.type;
        return chart.type === type;
    });
}

export function deleteChart(chart) {
    return charts.find((chart) => {
        let type = chart.type;
        return chart.type === type;
    });
}
