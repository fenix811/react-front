import { combineReducers } from 'redux';

export interface IProductState {
}

const initialState: IProductState = {}

export const productReducer = combineReducers(initialState)