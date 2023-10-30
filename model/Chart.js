// Chart.js
import mongoose from 'mongoose';

const GridCellSchema = new mongoose.Schema({
    type: { type: String },
    text: { type: String, default: '' },
    className: { type: String, default: '' }
});

const GridRowSchema = new mongoose.Schema({
    rowId: { type: String },
    cells: { type: [GridCellSchema], default: [] }
});

const ChartSchema = new mongoose.Schema({
    data: { type: String, default: '' },
    type: { type: String },
    gridData: { type: [GridRowSchema], default: [] }
});

const ChartModel = mongoose.model('Chart', ChartSchema);
export default ChartModel;
