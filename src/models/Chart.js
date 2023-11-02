import mongoose from 'mongoose';

const cellSchema = new mongoose.Schema({

    type: String,
    text: String,
    className: String
});

const rowSchema = new mongoose.Schema({

    rowId: String,
    cells: [cellSchema]
});

const chartSchema = new mongoose.Schema({

    gridData: [rowSchema]
});

const ChartModel = mongoose.model('Chart', chartSchema);

export default ChartModel;
