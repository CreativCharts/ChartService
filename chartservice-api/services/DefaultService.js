/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Retrieve a chart by type
*
* type String The chart type (optional)
* no response value expected for this operation
* */
const chartGET = ({ type }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        type,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create a new chart
*
* chartPostRequest ChartPostRequest 
* no response value expected for this operation
* */
const chartPOST = ({ chartPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        chartPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Retrieve charts
*
* no response value expected for this operation
* */
const chartsGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Health check
*
* no response value expected for this operation
* */
const rootGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  chartGET,
  chartPOST,
  chartsGET,
  rootGET,
};
