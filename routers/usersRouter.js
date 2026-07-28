import express from "express";

import {createUsers, getById} from "../controllers/users.js"

const router = express.Router()

router.post("/", createUsers)

router.get("/:userId", getById)

export default router