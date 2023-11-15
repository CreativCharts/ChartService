import express from 'express';
import {initializeDatabase, PORT} from "./dataBase/database.js";
import {
    fetchAll,
    createChart,
    fetchChartById,
    updateChart
} from "./controller/chartController.js";


const app = express();



app.use(express.json());

initializeDatabase()
    .then(value =>
        console.log("Database initialized"));


app.get('/', (req, res) => {
    console.log("GET /- Request received");
    res.send('ChartService is up and running!');
});

app.get('/dashboard/all-charts', async (req, res) => {
    console.log("GET /dashboard/all-charts - Request received");
    try {
        const response = await fetchAll();
        console.log("GET /all-charts - Sending charts", response);
        res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching all charts:", error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/editor/create-chart', async (req, res) => {
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
        const response = await fetchChartById(
            {id: req.params.id}
        );
        res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching chart:", error);
        res.status(500).send('Internal Server Error');
    }
});

app.put(`/editor/update-chart/:id`, async (req, res) => {
    console.log("PUT /editor/update-chart - Request received with id:", req.params.id);
    try {
        const response = await updateChart(req.body);
        res.status(200).json(response);
    } catch (error) {
        console.error("Error updating chart:", error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Chart service listening on port ${PORT}`);
});
