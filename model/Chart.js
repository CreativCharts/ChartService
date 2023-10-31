import mongoose from 'mongoose';

const GridCellSchema = new mongoose.Schema({
    type: { type: String, default: '' },
    text: { type: String, default: '' },
    className: { type: String, default: '' }
});

const GridRowSchema = new mongoose.Schema({
    rowId: { type: String, default: '' },
    cells: { type: [GridCellSchema], default: [] }
});

const ChartSchema = new mongoose.Schema({
    data: { type: String, default: '' },
    type: { type: String, default: '' },
    gridData: { type: [GridRowSchema], default: [] }
});

const ChartModel = mongoose.model('Chart', ChartSchema);
export default ChartModel;
