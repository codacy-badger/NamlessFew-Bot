const mongoose = require('mongoose');

const memberDataSchema = mongoose.Schema({
    _id: String,
    userId: String,
    name: String,
    warnings: Number,
    warningreasons: Array,
    mutecount: Number,
    mutehistory: Array,
    steamid: String,
    cash: Number,
});

module.exports = mongoose.model('MemberData', memberDataSchema);