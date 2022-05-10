const Buku = require("../models/buku");
// show list of book
const index = (req, res, next) => {
  Buku.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({
        status: "an error occured!",
        message: err,
      });
    });
};
// show single book
const show = (req, res, next) => {
  const buku_id = req.body.buku_id;
  Buku.findById(buku_id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({
        status: "an error occured!",
        message: err,
      });
    });
};
// store book
const store = (req, res, next) => {
  let buku = new Buku({
    nama_buku: req.body.nama_buku,
    penulis_buku: req.body.penulis_buku,
    penerbit: req.body.penerbit,
    tahun: req.body.tahun,
    harga: req.body.harga,
  });
  buku
    .save()
    .then((response) => {
      res.json(buku);
    })
    .catch((err) => {
      res.json({
        status: "an error occured!",
        message: err,
      });
    });
};
// update a book
const update = (req, res, next) => {
  const buku_id = req.body.buku_id;
  let buku = {
    nama_buku: req.body.nama_buku,
    penulis_buku: req.body.penulis_buku,
    penerbit: req.body.penerbit,
    tahun: req.body.tahun,
    harga: req.body.harga,
  };
  Buku.findByIdAndUpdate(buku_id, { $set: buku })
    .then((response) => {
      res.json(buku);
    })
    .catch((err) => {
      res.json({
        status: "an error occured!",
        message: err,
      });
    });
};
// delete a book
const destroy = (req, res, next) => {
  const buku_id = req.body.buku_id;
  Buku.findByIdAndRemove(buku_id)
    .then((response) => {
      res.json({
        message: "Berhasil menghapus buku",
      });
    })
    .catch((err) => {
      res.json({
        status: "an error occured!",
        message: err,
      });
    });
};


module.exports = {
    index, show, store, update, destroy
}