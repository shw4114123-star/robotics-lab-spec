import express from "express";
import { createUser, getUserById } from "../DAL/usersRepository.js";

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const body = req.body
        const user = await createUser(body)
        res.status(201).json({ "id": user })
    } catch (error) {
        console.error(error);
    }
})

router.get("/:userId", async (req, res) => {
    const { userId } = req.params
    const user = await getUserById(userId)
    res.json(user)
})

export default router