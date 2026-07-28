

import { getUserById, createUser, addSessionToUser } from "../../DAL/usersRepository.js"
import {checkBody, checkId} from "../../service/usersService.js"


export const usersRepo = {
    create: (...args) => createUser(...args),
    get: (...args) => getUserById(...args),
    add: (...args) => addSessionToUser(...args)
}