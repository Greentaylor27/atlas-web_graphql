const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {type: String},
    weight: { type: Number},
    projectID: { type: Number},
    description: { type: String}
});

module.exports = mongoose.model('Task', taskSchema);
