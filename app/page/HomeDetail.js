/**
 *
 * Created by thinkcentre on 2016/10/27.
 */

import React, {
    Component
} from 'react'
import {
    View,
    Text,
    ScrollView,
    BackAndroid
} from 'react-native'
import {connect} from 'react-redux'
class HomeDetail extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("路由===" + this.props.nav.getCurrentRoutes().length + "loaded===" + this.props.homeList.loaded)
        console.log(this.props.backResult);

        const navigator = this.props.nav;
        BackAndroid.addEventListener('hardwareBackPress', ()=> {
            if (this.props.backResult) {
                this.props.backResult("返回的数据")
            }
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        })
    }
    componentWillUnMount() {
        BackAndroid.removeEventListener("hardwareBackPress");
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text> {"main" + JSON.stringify(this.props.homeList.dataList)}</Text>
                </View>
            </ScrollView>
        )
    }
}
function mapStateToProps(state) {
    return {homeList: state.homeList}
}

export default connect(mapStateToProps)(HomeDetail);