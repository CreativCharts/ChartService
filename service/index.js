import express from 'express';
import {
    getAllCharts,
    getCharts,
    getChartByType,
    createChart
} from "../controller/ChartController.js";
import res from "express/lib/response.js";
import req from "express/lib/request.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('ChartService is up and running!'));

res.setHeader = function (type, applicationJson) {

};
app.get('/charts', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let type = req.type;
    res.sendStatus(200).send(getCharts(type));
});

app.get('/allCharts', (req, res) => {
    const type = req.query.type;
    const response = getAllCharts(type);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(response);
});

app.get('/chart', (req, res) => {
    const type = req.query.type;
    const response = getChartByType(type);

    if (response == null) {
        res.status(404);
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(response);
    }
});

app.post = function (chart, createChart) {
    return {
        createChart: createChart
    }
};

app.post('/chart', (req, res) => {
    const chart = req.body;
    const response = createChart(chart);

    if (response == null) {
        res.status(404);
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(response);
    }
});

app.listen(port, () => {
    console.log(`Chart service listening on port ${port}`);
})

