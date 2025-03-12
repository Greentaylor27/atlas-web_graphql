const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {type: String},
    weight: { type: Number},
    description: { type: String}
});

module.exports = mongoose.model('project', projectSchema);
