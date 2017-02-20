/**
 *
 * Created by thinkcentre on 2016/10/26.
 */
import {ListView} from "react-native"
import * as types from "../utils/constants/ActionTypes"
const initialState = {
    dataList: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    }),
    loaded: false,
    isRefreshing:false,
};

export default function homeList(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_HOME_LIST:
            return {
                ...state,
                loaded: false,
                dataList: state.dataList,
                isRefreshing:true
            };
        case types.RECEIVE_HOME_LIST:
            return {
                ...state,
                loaded: true,
                dataList:state.dataList.cloneWithRows([...action.dataList,...action.dataList,...action.dataList]),
                isRefreshing:false
            };
        default:
            return state;
    }
}