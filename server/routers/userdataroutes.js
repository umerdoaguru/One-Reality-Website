const express = require("express");

const { user_data, register, login, getuserdata } = require("../controllers/UserController");
const authenticate = require("../Middleware/authMiddleware");
const router = express.Router();






router.post("/register",register);
router.post("/login",login );
router.post("/contact",user_data);
router.get("/user-data",authenticate, getuserdata);



module.exports = router;