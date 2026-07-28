import express from "express";
import { createSessionForUser, getAllSession } from "../DAL/sessionRepositry.js";

const router = express.Router()


router.post("/:sessionId/register", async (req, res) => {
    const { sessionId } = req.params
    const { userId } = req.body
    const session = await createSessionForUser(sessionId, userId)
    res.status(session.status).json(session.message);
})


router.get("/:sessionId", async (req, res) => {
    const { sessionId } = req.params
    const session = await getAllSession(sessionId)
    res.json(session)
})

export default router