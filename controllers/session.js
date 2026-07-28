import { createSessionForUser, getAllSession } from "../DAL/sessionRepositry.js";


export const createSession = async (req, res) => {
    const { sessionId } = req.params
    const { userId } = req.body
    const session = await createSessionForUser(sessionId, userId)
    res.status(session.status).json(session.message);
}

export const getAll = async (req, res) => {
    const { sessionId } = req.params
    const session = await getAllSession(sessionId)
    res.json(session)
}