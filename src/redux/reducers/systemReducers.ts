import { combineReducers } from 'redux';

export interface ISystemState {
}

const initialState: ISystemState = {
}

export const systemReducer = combineReducers({
    auth(state = initialState, action) {
        switch (action.type) {
        //   case types.AUTH_LOGIN_SUCCESS:
        //     return {...action.user,
        //     loggedIn: true,
        //     }
  
            default:
                return state;
        }
    }
});