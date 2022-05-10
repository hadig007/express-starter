const mongoose = require("mongoose");
const schema = mongoose.Schema;

const book_schema = new schema({
    nama_buku: {
        type : String
    },
    penulis_buku: {
        type : String
    },
    penerbit: {
        type : String
    },
    tahun: {
        type : String
    },
    harga: {
        type: String
    }
}, {timestamps:true});


const buku = mongoose.model('buku', book_schema);
module.exports = buku;