const express = require("express");
const router = express.Router();

const buku_controller = require("../controller/buku");
const upload = require("../public/upload");

router.get('/', buku_controller.index);
router.post('/show', buku_controller.show);
router.post('/store', upload.single('photo'), buku_controller.store);
router.post('/update', buku_controller.update);
router.post('/delete', buku_controller.destroy);

module.exports = router;