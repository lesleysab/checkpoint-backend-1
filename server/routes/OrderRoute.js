let express = require("express");
const router = express.Router();
let {
    list,
    show,
    create
} = require("../controllers/OrderController");

router.get("/orders", list);
router.get("/orders/:id", show);
router.post("/orders", create);


module.exports = router;