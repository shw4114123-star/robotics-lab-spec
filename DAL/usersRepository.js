import { ObjectId } from "mongodb";
import db from "../db/usersDB.js";



export async function createUser(body) {
    const user = await db.collection("users").insertOne({ ...body, labSessionsIds: [] })
    return user.insertedId.toString()
}

export async function getUserById(id) {
    const user = await db.collection("users").findOne({_id: new ObjectId(id)});
    return user;    
}