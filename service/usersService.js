import { ObjectId } from "mongodb";
import { getUserById, createUser } from "../DAL/usersRepository.js"
import { usersRepo } from "../tests/usersRepo/usersRepo.js";

export function createError(status, message) {
    const err = new Error(message);
    err.status = status
    return err
}


export async function checkId(userId) {
    if (!ObjectId.isValid(userId)) throw createError(400, "invalid id")
    const myUser = await usersRepo.get(userId)
    if (!myUser) throw createError(404, "not found")
    return myUser
}

export function isvalidBody({ firstName, lastName, className }) {
    return (
        firstName !== undefined && firstName.trim() !== "" &&
        lastName !== undefined && lastName.trim() !== "" &&
        className !== undefined && className.trim() !== "" 
    )
}
export async function checkBody(body) {
    if (!isvalidBody(body)) throw createError(400, "bad body")
    const user = await usersRepo.create(body)
    return user
}