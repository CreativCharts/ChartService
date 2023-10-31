import ChartModel from "../model/Chart.js";

export async function allCharts() {

    try {
        return await ChartModel.find();
    } catch (error) {
        console.error("Error in allCharts:", error);
        throw error;
    }
}


export async function createChart(chart) {
    const chartModel = new ChartModel(chart);
    chartModel.type = chart.type;
    chartModel.data = chart.data;
    chartModel.gridData = chart.gridData;
    try {
        return await chartModel.save();
    } catch (error) {
        console.error("Error in createChart:", error);
        throw error;
    }
}

export function updateChart(chart) {
    return ChartModel.find((chart) => {
        let type = chart.type;
        return chart.type === type;
    });
}

export function deleteChart(chart) {
    return ChartModel.find((chart) => {
        let type = chart.type;
        return chart.type === type;
    });
}

