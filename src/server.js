import express from 'express';
import {allCharts, createChart} from "./controller/chartController.js";
import {initializeDatabase} from "./dataBase/database.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

initializeDatabase()
    .then(value =>
        console.log("Database initialized"));



app.get('/api', (req, res) => {
    console.log("GET /api - Request received");
    res.send('ChartService is up and running!');
});

app.get('/dashboard/all-charts', async (req, res) => {
    console.log("GET /dashboard/all-charts - Request received");
    try {
        const charts = await allCharts();
        console.log("GET /all-charts - Sending charts", charts);
        res.status(200).json(charts);
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

app.listen(port, () => {
    console.log(`Chart service listening on port ${port}`);
});
