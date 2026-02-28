import express from "express";
import createShortUrl from "../controller/createShortUrl.js";
import redirectUrl from "../controller/redirectUrl.js";
const router = express.Router();

router.post("/shorten", createShortUrl);
router.get("/:shortCode", redirectUrl);

export default router;
