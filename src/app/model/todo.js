import { todo, user } from '../event'

const initialState = {
  list : []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case user.LOGOUT:
    case todo.LIST_FAIL:
      return Object.assign({}, state, { list: [] })
    case todo.LIST_OK :
      return Object.assign({}, state, { list: action.payload })
    default:
      return state
  }
}
