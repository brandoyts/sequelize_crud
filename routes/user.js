const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    createUser,
    deleteUser,
    getAdmins,
    updateUser
} = require("../controllers/user");

router.get("/", getAllUsers);
router.get("/admins", getAdmins);
router.post("/create-user", createUser);
router.patch("/update-user", updateUser);
router.delete("/delete-user", deleteUser);

module.exports = router;
