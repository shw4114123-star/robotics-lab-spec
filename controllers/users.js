import { createUser, getUserById } from "../DAL/usersRepository.js";
import { checkId, checkBody } from "../service/usersService.js";

export const createUsers = async (req, res) => {
    try {
        const body = req.body
        const user = await checkBody(body)
        res.status(201).json({ "id": user })
    } catch (error) {
        res.status(error.status).json(error.message)
    }
}

export const getById = async (req, res) => {
    try {
        const { userId } = req.params
        const user = await checkId(userId)
        res.json(user)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
}