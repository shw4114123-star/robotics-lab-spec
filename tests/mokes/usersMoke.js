


export const MOCK_USER_ID = "123456789a123456789c5432"
export const MOCK_SESSION_ID = "session-1"


export const USER_BODY = {
    firstName: "momo",
    lastName: "mimi",
    className: "coding"
}

export const MOCK_USER = {
    _id: MOCK_USER_ID,
    ...USER_BODY,
    labSessionsIds: []
}

export async function mockCreateUser(body) {
    return MOCK_USER_ID
}

export async function mockGetUserById(id) {
    if (String(id) === MOCK_USER_ID) {
        return MOCK_USER
    }
    return null
}

export async function mockAddSessionToUser(sessionId, userId) {
    if (String(userId) !== MOCK_USER_ID) {
        return {
            matchedCount: 0,
            modifiedCount: 0,
            acknowledged: true
        }
    }
    return {
        matchedCount: 1,
        modifiedCount: 1,
        acknowledged: true
    }
}