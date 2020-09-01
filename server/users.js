const users = []

const addUser = ({id, userName, roomCode}) => {
    const user = {id, userName, roomCode}
    users.push(user)
    return user
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