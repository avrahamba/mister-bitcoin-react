const initialState = {
  user: null,
  currMoves:[],
}

export default function ContactReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USER':
      return { ...state, user: action.user }
      case 'SET_CURR_MOVES':
        return { ...state, currMoves: action.moves }
   default:
      return state;
  }
}