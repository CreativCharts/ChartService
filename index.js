import express from 'express';
import {allCharts, createChart} from "./controller/ChartController.js";
import {initializeDatabase} from "./dbConnect/database.js";

const app = express();
const port = 3001;

app.use(express.json());

initializeDatabase();

app.get('/dashboard', (req, res) => res.send('ChartService is up and running!'));

app.get('/dashboard/allCharts', async (req, res) => {  // Stellen Sie sicher, dass die Methode asynchron ist, wenn sie eine Datenbankabfrage enthält
    try {
        const charts = await allCharts();  // Annahme, dass `getAllCharts` asynchron ist
        res.status(200).json(charts);
    } catch (error) {
        console.error("Error fetching all charts:", error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/dashboard/create-chart', async (req, res) => {
    const chart = req.body;
    try {
        const response = await createChart(chart);  // `createChart` sollte asynchron sein, da es eine Datenbankoperation ausführt
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(response);
    } catch (error) {
        console.error("Error while saving the chart:", error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Chart service listening on port ${port}`);
});
