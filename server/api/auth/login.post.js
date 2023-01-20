export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    const { username, password } = body

    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Ivalid params'
        }))
    }

    const user = await getUserByUsername(username)

    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }


}) 