import db from "../db/usersDB.js";



export async function createUser(body) {
    const user = await db.collection("users").insertOne({ ...body, labSessionsIds: [] })
    return user.insertedId.toString()
}