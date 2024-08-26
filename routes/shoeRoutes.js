
const express = require("express");
const router = express.Router();

const { getShoes , createShoe, deleteShoe, updateShoe } = require("../controllers/shoeController");


router.get("/shoes", getShoes);
router.post("/shoe/new",createShoe);
router.delete("/shoe/delete/:id",deleteShoe);
router.post("/shoe/update/:id", updateShoe);

module.exports = router;


