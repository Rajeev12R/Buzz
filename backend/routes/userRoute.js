import express from "express";
import { logout, register, login, getOtherUsers} from "../controllers/userController.js";
import isAuthenticated from "../Middlewares/isAuthenticated.js";


const router =  express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthenticated,getOtherUsers);

export default router;