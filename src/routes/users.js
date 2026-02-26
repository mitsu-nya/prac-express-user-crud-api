const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//ユーザ覧
router.get("/", usersController.getUsers);

//ユーザ登録
router.post("/create", usersController.postUsers);

//ユーザ更新
router.put("/update/:id", usersController.putUsers);

//ユーザ削除
router.delete("/delete/:id", usersController.deleteUsers);

module.exports = router;