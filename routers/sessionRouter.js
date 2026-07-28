import express from "express";

import { createSession, getAll } from "../controllers/sessionControler.js";

const router = express.Router()

router.post("/:sessionId/register", createSession)

router.get("/:sessionId", getAll)

export default router