import express from "express";
import "dotenv/config";
import usersRouter from "./routers/usersRouter.js";
import sessionRouter from "./routers/sessionRouter.js"
import { connoction } from "./db/usersDB.js";


const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use("/users", usersRouter)
app.use("/session", sessionRouter)


connoction().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on http://localhose:${PORT}`);
    })
})
