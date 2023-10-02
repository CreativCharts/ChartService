import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {
    getAllCharts,
    getCharts,
    getChartByType,
    createChart
} from "../controller/ChartController.js";

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Chart Service API',
        version: '1.0.0',
        description: 'APIs for Chart Service',
    },
    servers: [
        {
            url: 'http://localhost:3001',
        },
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    // Path to the API docs
    apis: ['./**/*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(options);

const app = express();
const port = 3001;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health check
 *     responses:
 *       200:
 *         description: ChartService is up and running!
 */
app.get('/', (req, res) => res.send('ChartService is up and running!'));

/**
 * @swagger
 * /chart:
 *   get:
 *     summary: Retrieve a chart by type
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: The chart type
 *     responses:
 *       200:
 *         description: A JSON object of chart data
 *       404:
 *         description: Chart not found
 */
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

/**
 * @swagger
 * /charts:
 *   get:
 *     summary: Retrieve charts
 *     responses:
 *       200:
 *         description: A JSON array of charts
 */
app.get('/charts', (req, res) => {
    let type = req.type;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(getCharts(type));
});

app.post = function (path, callback) {
    return this.put(path, callback);

};
/**
 * @swagger
 * /chart:
 *   post:
 *     summary: Create a new chart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: A JSON object of the created chart
 *       404:
 *         description: Failed to create chart
 */

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
});
