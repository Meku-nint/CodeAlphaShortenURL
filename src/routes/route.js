import { Router } from "express";
import { createUrl } from "../controller/controller.js";
import { redirectUrl } from "../controller/controller.js";
const router = Router();
router.post("/original",createUrl);
router.get("/:shortUrl", redirectUrl);
export default router;