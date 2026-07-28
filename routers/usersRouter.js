import express from "express";

import {createUsers, getById} from "../controllers/usersControler.js"

const router = express.Router()

router.post("/", createUsers)

router.get("/:userId", getById)

export default router