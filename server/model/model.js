const mongoose = require('mongoose');

var produtoDB = new mongoose.Schema({
    nomeProduto:{
        type: String,
        required: true,
        trim: true
    },
    tipoProduto:{
        type: String,
        required: true,
        trim: true
    },
    categoriaProduto:{
        type: String,
        required: true,
        trim: true
    },
    precoProduto:{
        type: Number,
        required: true,
    },
})

const ProdutoDB = mongoose.model('produto', produtoDB);

module.exports = ProdutoDB;