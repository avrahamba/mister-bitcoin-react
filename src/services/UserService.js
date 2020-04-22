

let user = (_ => {
    const res = localStorage.user;
    if (res) return JSON.parse(res)
    return {
        name: 'Avraham',
        coins: 100,
        move: []
    }
})()

function getUser(){
    return Promise.resolve(user)
}
export const userService = {
    getUser
}