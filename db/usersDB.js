import { MongoClient } from "mongodb";
import "dotenv/config"

const url = process.env.MONGO_URL
const mongoDB = process.env.MONGO_DB
const client = new MongoClient(url)

try {
    await client.connect()
    console.log("database connect");
} catch (error) {
    console.error(error);
}


const db = client.db(mongoDB)
export default db