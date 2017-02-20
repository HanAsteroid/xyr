/**
 *
 * Created by thinkcentre on 2016/10/26.
 */
'use strict';
import {combineReducers} from 'redux';
import homeList from './homeList';
export const rootReducer = combineReducers({
    homeList,
});
export default rootReducer;
