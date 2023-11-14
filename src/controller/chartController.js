import ChartModel from "../models/Chart.js";

export async function allCharts() {
    try {
        return await ChartModel.find();
    } catch (error) {
        throw new Error("Fehler beim Abrufen der Charts");
    }
}

export async function createChart(chart) {
    

    const chartModel = new ChartModel(chart);

    try {
        return await chartModel.save();
    } catch (error) {
        
        throw new Error("Fehler beim Speichern des Charts" + error);
    }
}

export async function updateChart(chart) {
    try {
        return await ChartModel.findOneAndUpdate(
            {_id: chart._id},
            chart,
            {new: true}
        );
    } catch (error) {
        
        throw new Error("Fehler beim Aktualisieren des Charts" + error);
    }
}

export async function deleteChart(chartId) {
    try {
        return await ChartModel.findByIdAndDelete(chartId);
    } catch (error) {
        
        throw new Error("Fehler beim Löschen des Charts" + error);
    }
}
