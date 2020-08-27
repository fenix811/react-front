import { combineReducers } from 'redux';

export interface ISystemState {
}

const initialState: ISystemState = {
}

const systemReducer = (state = initialState, action:any) => {
        switch (action.type) {
  
            default:
                return state;
        }
    }
export {systemReducer}