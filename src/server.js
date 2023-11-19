import express from 'express';
import {initializeDatabase, PORT} from "./dataBase/database.js";
import {
    fetchAll,
    createChart,
    fetchChartById,
    updateChart,
    deleteChart
} from "./controller/chartController.js";

const app = express();

app.use(express.json());

initializeDatabase()
    .then(value =>
        console.log("Database initialized"));


app.get('/', (
    req,
    res) => {
    console.log("GET / 200 OK");
    res.send('ChartService is up and running!');
});

app.get('/dashboard/all', async (
    req,
    res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 12;

    try {
        const response = await fetchAll(page, pageSize);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.post('/editor/create', async (
    req,
    res) => {
    console.log("POST /api/create-chart - Request received with body:", req.body);
    try {
        const response = await createChart(req.body);
        console.log("POST /editor/create-chart - Chart created:", response);
        res.status(200).json(response);
    } catch (error) {
        console.error("Error while saving the chart:", error);
        res.status(500).json({error: error.message});
    }
});

app.get(`/editor/chart/:id`, async (
    req,
    res) => {
    console.log("GET /editor/chart - Request received with id:", req.params.id);
    try {
        const response = await fetchChartById(req.params.id);
        res.status(200).json(response);
        console.log("GET /editor/chart - Sending chart: ", response);
    } catch (error) {
        console.error("Error fetching chart: ", error);
        res.status(500).send('Internal Server Error');
    }
});

app.put(`/editor/update/:id`, async (
    req,
    res) => {
    console.log("PUT /editor/update - Request received with id:", req.params.id);
    try {
        const response = await updateChart(req.body);
        res.status(200).json(response);
    } catch (error) {
        console.error("Error updating chart:", error);
        res.status(500).send('Internal Server Error');
    }
});

app.delete(`/dashboard/delete/:id`, async (
    req,
    res) => {
    console.log("DELETE /dashboard/delete-chart - Request received with id:", req.params.id);
    try {
        const response = await deleteChart(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        console.error("Error deleting chart:", error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Chart service listening on port ${PORT}`);
});
