import { userService } from '../services/UserService';
import { bitcoinService } from '../services/BitcoinService';


// READ
export function laodUser() {
    return async dispatch => {
        const user = await userService.getUser()
        user.coins = await bitcoinService.getRate(user.dolars)
        dispatch({ type: 'LOAD_USER', user })
    }
}



export function setCurrMoves(id) {
    return async dispatch => {
        const moves = await userService.getMoves(id);
        dispatch({ type: 'SET_CURR_MOVES', moves })
    }
}

export function addMove({ count, _id, name }) {
    return async dispatch => {
        const moves = await userService.sendCoins(count, _id, name)
        dispatch({ type: 'SET_CURR_MOVES', moves })
    }
}

export function loadMove() {
    return async dispatch => {
        const moves = await userService.getMoves()
        dispatch({ type: 'SET_CURR_MOVES', moves })
    }
}