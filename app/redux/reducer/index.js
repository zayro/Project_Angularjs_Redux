import { combineReducers } from 'redux';
import {  testing, httpDataArray, httpDataObject }  from './http.reducer';

const rootReducer = combineReducers({
    testing,
    httpDataArray,
    httpDataObject
});

export default rootReducer;
