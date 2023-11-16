import ChartModel from "../models/Chart.js";
import {ObjectId} from "mongodb";

export async function fetchAll() {
    try {
        return await ChartModel.find();
    } catch (error) {
        throw new Error("Fehler beim Abrufen der Charts");
    }
}

export async function createChart(chart) {
    delete chart._id;
    const chartModel = new ChartModel(chart);
    try {
        return await chartModel.save();
    } catch (error) {

        throw new Error("Fehler beim Speichern des Charts" + error);
    }
}

export async function fetchChartById(chartId) {
    try {
        return await ChartModel.findById(chartId);
    } catch (error) {
        throw new Error("Fehler beim Abrufen des Charts" + error);
    }
}

export async function updateChart(chart) {
    try {
        return await ChartModel.findByIdAndUpdate(new ObjectId(chart._id), chart, {new: true});
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
