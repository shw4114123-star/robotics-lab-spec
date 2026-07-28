import { ObjectId } from "mongodb";
import db from "../db/usersDB.js";



export async function createUser(body) {
    const user = await db.collection("users").insertOne({ ...body, labSessionsIds: [] })
    return user.insertedId.toString()
}

export async function getUserById(id) {
    const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
    return user;
}

export async function addSessionToUser(sessionId, userId) {
    try {
        console.log(userId);
        
        const user = await db.collection("users").updateOne(
            { _id: new ObjectId(userId) },
            { $push: { labSessionsIds: sessionId } }
        )
        return user
    } catch (error) {
        console.error(error);
    }
}