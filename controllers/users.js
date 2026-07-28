import { createUser, getUserById } from "../DAL/usersRepository.js";

export const createUsers = async (req, res) => {
    try {
        const body = req.body
        const user = await createUser(body)
        res.status(201).json({ "id": user })
    } catch (error) {
        console.error(error);
    }
}

export const getById = async (req, res) => {
    try {
        const { userId } = req.params
        const user = await getUserById(userId)
        res.json(user)
    } catch (error) {
        console.error(error);
    }
}