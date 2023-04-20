const express = require("express")
const router = express.Router()

const postController = require("../Controllers/post.controller")

router.get("/",postController.getAll)
router.get("/:id",postController.getByID)
router.post("/",postController.create)
router.patch("/:id",postController.update)
router.delete("/:id",postController.delete)

module.exports = router