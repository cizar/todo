import { todo } from 'event'
import { user } from 'event'

const initialState = {
    list : [],
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case user.LOGOUT :
        case todo.LIST_FAIL :
            return {
                ...state,
                list : []
            };
        case todo.LIST_OK :
            return {
                ...state,
                list : action.payload,
            }
        default : return state;
  }
}
