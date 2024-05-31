const mongoose = require ("mongoose");
require("./user.model")

const bookSchema = mongoose.Schema( //Je crée le shema bookSchema
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        maxPages: {
            type: Number,
            required: true,
        },
        readedPages: {
            type: Number,
        },
        Categories: {
            type: [String]
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
)
bookSchema.plugin(require('mongoose-autopopulate')); 
// Exporte le modèle de données pour le livre (book) en utilisant le schéma bookSchema
module.exports = mongoose.model('book', bookSchema);