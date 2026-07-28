import client from "../db/sessionDB.js";
import { addSessionToUser } from "./usersRepository.js";




export async function createSessionForUser(sessionId, userId) {
    const registeredCount = await (await client.from("sessions").select("registeredCount").eq("id", sessionId)).data[0].registeredCount
    const remainingSpots = await (await client.from("sessions").select("remainingSpots").eq("id", sessionId)).data[0].remainingSpots
    if (remainingSpots > 0) {
        const session = await addSessionToUser(sessionId, userId)
        if (session.modifiedCount === 1) {
            const { data, error } = await client.from("sessions").update({ remainingSpots: remainingSpots - 1, registeredCount: registeredCount + 1 }).eq("id", sessionId);
            if (error) return error
            return { status: 201, message: { remainingSpots: remainingSpots - 1 } }
        }
    }
    else {
        return { status: 400, message: { error: "The meeting is out of places.", remainingSpots: remainingSpots } }
    }
}


export async function getAllSession(sessionId) {
    const session = await client.from("sessions").select().eq("id", sessionId)
    return session.data[0]
}