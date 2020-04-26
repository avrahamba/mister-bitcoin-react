import { bitcoinService } from "./BitcoinService";


let user = (_ => {
    const res = localStorage.user;
    if (res) return JSON.parse(res)
    return null
})()

const setUser = name=>{
    user =     {
            name,
            dolars: 100,
            moves: []
        }
        localStorage.user = JSON.stringify(user)
        return Promise.resolve(user)
    }

const getUser = _ => {
    return Promise.resolve(user)
}
const isConnected = _ => {
    return !!user;
}
const sendCoins = (count, contactId, contactName) => {
    user.dolars -= count;
    user.moves.unshift({ count, contactId, contactName, at: Date.now() })
    localStorage.user = JSON.stringify(user)
    return Promise.resolve(getMoves(contactId))
}
const getMoves = async (contactId) => {
    let res = []
    if (contactId) {
        res = JSON.parse(JSON.stringify(user.moves.filter(move => move.contactId === contactId)))
    } else {
        res = JSON.parse(JSON.stringify(user.moves)).splice(0, 3)
    }
    const rate = await bitcoinService.getRate(1)
    res.forEach(move => {
        move.countBitcoin = move.count * rate;
        const at = new Date(move.at)
        move.atToShow = `${at.getDate()}/${at.getMonth()}/${at.getFullYear()}`
    })
    return res
}

export const userService = {
    getUser,
    sendCoins,
    getMoves,
    isConnected,
    setUser
}