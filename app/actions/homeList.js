/**
 *
 * Created by thinkcentre on 2016/10/26.
 */
import * as URL from "../utils/url/URL"
import * as types from "../utils/constants/ActionTypes"
// export function fetchHomeListData() {
//     return dispatch => {
//         dispatch(fetchHomeList());
//         fetch(URL.HOME_LIST_URL)
//             .then((response) =>response.json())
//             .then((responseData) => {
//                 console.log(responseData);
//                 dispatch(receiveHomeList(responseData.data.rows));
//             })
//             .catch((error) => {
//                 console.log(error.message);
//                 dispatch(receiveHomeList([]));
//             })
//             .done();
//     };
// }

export function fetchHomeList(){
    return {
        type:types.FETCH_HOME_LIST,
    }
}
export function receiveHomeList(dataList) {

    return{
        type:types.RECEIVE_HOME_LIST,
        dataList:dataList,
    }
}