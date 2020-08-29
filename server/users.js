const users = []

const addUser = ({id, userName, roomCode}) => {
    userName = userName.trim().toLowerCase()
    roomCode = roomCode.trim().toLowerCase()

    const existingUser = users.find((user) => {
        user.userName === userName && user.roomCode === roomCode
    })

    if (existingUser) {
        return { error: 'User already exist'}
    } else if (!userName || !roomCode){
        return { error: 'Name and Room code are required'}
    }

    const user = {id, userName, roomCode}

    users.push(user)

    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        user.id === id
    })

    if (index !== -1) {
        users.splice(index, 1)
    }
}

const getUser = (id) => users.find((user) => user.id === id)

const getUsersInRoom = (roomCode) => {
    const usersInRoom = users.filter((user) => {
        if (user.roomCode === roomCode) {
            return user
        }
    })
}

module.exports = {addUser, removeUser, getUser, getUsersInRoom}