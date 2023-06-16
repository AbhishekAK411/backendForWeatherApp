import express from "express";
import { userRegister } from "../controllers/userControllers.js";
import { checkPassword, checkRegister } from "../middleware/auth.js";
import { getAstro, getTemp, getWind } from "../controllers/weather.js";

const router = express.Router();

router.post("/register", checkRegister, userRegister);

//weatherAPI links
router.post("/checkTemp", checkPassword, getTemp);
router.post("/checkAstro", checkPassword, getAstro);
router.post("/checkWind", checkPassword, getWind);

export default router;