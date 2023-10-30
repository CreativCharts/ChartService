import ChartModel from "../model/Chart.js";

export async function allCharts() {
    try {
        return await ChartModel.find();
    } catch (error) {
        console.error("Error in getAllCharts:", error);
        throw error;
    }
}

export async function createChart(chart) {
    if (!chart.type) {
        throw new Error("Missing required field: type");
    }

    const newChart = new ChartModel({
        type: chart.type,
        data: chart.data,
        gridData: chart.gridData
    });

    try {
        await newChart.save();
        return newChart;
    } catch (error) {
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

export function getChart() {
    return ChartModel.find();
}
