import {describe, it, beforeEach, afterEach, test, mock} from "node:test"
import assert from "node:assert/strict"
import { usersRepo } from "./usersRepo/usersRepo.js"
import {createUser, getUserById, addSessionToUser} from "../DAL/usersRepository.js"
import {
    MOCK_USER_ID,
    MOCK_SESSION_ID,
    USER_BODY,
    MOCK_USER,
    mockCreateUser,
    mockGetUserById,
    mockAddSessionToUser
} from "./mokes/usersMoke.js"
import { checkBody, checkId } from "../service/usersService.js"


describe("usersRepository (unit)", ()=>{

    beforeEach(()=>{
        mock.method(usersRepo, "create", mockCreateUser);
        mock.method(usersRepo, "get", mockGetUserById);
    })

    afterEach(()=>{
        mock.restoreAll()
    })

    it("create user  return user id", async ()=>{
        const user = await checkBody(USER_BODY)
        assert.equal(user, MOCK_USER_ID)
        assert.equal(usersRepo.create.mock.callCount(), 1)
    })
    it("get user by id  return one user by id", async ()=>{
        const user = await checkId(MOCK_USER_ID)

        assert.equal(user.firstName, MOCK_USER.firstName)
        assert.equal(user._id, MOCK_USER_ID)
        assert.equal(usersRepo.get.mock.callCount(), 1)
    })
    it("get user by id throw createError 404 if not found", async ()=>{
        let error = null
        try{
            await checkId("12345678901234567890accb")
        }
        catch (err) {
            error = err
        }
        assert.ok(error, "not found")
        assert.equal(error.status, 404, "fail shold be 404")
        assert.equal(usersRepo.get.mock.callCount(), 1)
    })
    it("get user by id throw createError 400 if not a correct id", async ()=>{
        let error = null
        try{
            await checkId("12345678901234567890accb12")
        }
        catch (err) {
            error = err
        }
        assert.ok(error, "invalid id")
        assert.equal(error.status, 400, "fail shold be 400")
        assert.equal(usersRepo.get.mock.callCount(), 0)
    })
})