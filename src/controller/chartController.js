import ChartModel from "../models/Chart.js";

export async function allCharts() {
    try {
        return await ChartModel.find();
    } catch (error) {
        console.error("Error in allCharts:", error);
        throw error;
    }
}

export async function createChart(chart) {

    console.log('Received data:', chart);  

    const chartModel = new ChartModel(chart);

    chartModel.type = chart.type || 'default-type';

    chartModel.data = chart.data || {};

    chartModel.gridData = chart.gridData || [];

    try {
        return await chartModel.save();

    } catch (error) {

        console.error("Error in createChart:", error);

        throw error;
    }
}

export async function updateChart(chart) {
    try {
        const updatedChart = await ChartModel.findOneAndUpdate(

            { type: chart.type },
            chart,
            { new: true }
        );

        return updatedChart;

    } catch (error) {

        console.error("Error in updateChart:", error);

        throw error;
    }
}

export async function deleteChart(chart) {

    try {

        const deletedChart = await ChartModel.findOneAndDelete({ type: chart.type });

        return deletedChart;

    } catch (error) {

        console.error("Error in deleteChart:", error);
        
        throw error;
    }
}
