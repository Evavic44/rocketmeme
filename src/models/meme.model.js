const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemeSchema = Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    downloads: {
        type: mongoose.Schema.Types.Number,
        default: 0
    },
    likes: {
        type: mongoose.Schema.Types.Number,
        default: 0
    },
    imagelink: {
        type: mongoose.Schema.Types.String,
        default: ""
    },
    categories: {
        type: mongoose.Schema.Types.Array,
        default: [] // there should have a maximum of 5 categories per meme
    }
});

module.exports = mongoose.model("meme", MemeSchema);