const express = require("express");
const router = express.Router();

const buku_controller = require("../controller/buku");

router.get('/', buku_controller.index);
router.post('/show', buku_controller.show);
router.post('/store', buku_controller.store);
router.post('/update', buku_controller.update);
router.post('/delete', buku_controller.destroy);

module.exports = router;