/**
 *
 * Created by thinkcentre on 2016/10/24.
 */

import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    ActivityIndicator,
    Dimensions,
    Image,
    ProgressBarAndroid,
    TouchableOpacity,
    Alert,
    ToastAndroid,
    RefreshControl
} from 'react-native';

import {connect} from "react-redux"

import {
    colorTitleText,
    colorStateText,
    colorTipsText,
    colorCommit,
    ScreenWidth,

} from "value"

import LoadingImage from "../view/LoadingImage"

const HOME_LIST_URL = "http://h5.xinyingren.com/mobile/crowdfunding/list.do";

import {fetchHomeList, receiveHomeList} from "../actions/homeList"

class HomeView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            // dataList: ds,
            // loaded: false
            testText: "未获取",
        }
    }

    _itemClick() {
        console.log("点击了");
        // Alert.alert("点击");
        this.props.nav.push({
            name: "home_detail",
            index: 1,
            id: "home_detail",
            params: {
                backResult: (msg)=> {
                    console.log(msg);
                    ToastAndroid.show(msg, ToastAndroid.SHORT);
                }
            }
        })
    }

    _renderRow(data) {
        let sumSupportAmt = data.sumSupportAmt;
        let fundAmt = data.fundAmt;
        let progress = sumSupportAmt / fundAmt;
        return (
            <View>
                <TouchableOpacity onPress={this._itemClick.bind(this)} activeOpacity={0.8}>
                    <View style={{backgroundColor: 'white', padding: 10}}>
                        <Image style={styles.logo} source={{uri: data.logo}}/>
                        <Text style={{color: colorTitleText, fontSize: 14, marginTop: 10}}>{data.name}</Text>
                        <Text style={{color: colorStateText, fontSize: 12, marginTop: 5}}>{data.subtitle}</Text>
                        <ProgressBarAndroid indeterminate={false} color={colorCommit} processColor={colorCommit}
                                            progress={progress} styleAttr='Horizontal'/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{
                                flex: 1,
                                color: colorStateText,
                                fontSize: 12,
                            }}> {"项目进度：" + (progress * 100).toFixed(0) + "%"}</Text>
                            <Text style={{
                                flex: 1,
                                color: colorStateText,
                                fontSize: 12,
                                textAlign: 'right'
                            }}> {"支持人数：" + data.sumSupportCount}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={{height: 2, flex: 1, backgroundColor: colorTipsText}}/>
            </View>

        )
    }

    componentDidMount() {
        this._getData();
    }

    _getData() {
        this.props.dispatch(fetchHomeList());
        fetch(HOME_LIST_URL)
            .then((response) =>response.json())
            .then((responseData) => {
                console.log(responseData);
                this.props.dispatch(receiveHomeList(responseData.data.rows));
                // this.setState({
                //     dataList: this.state.dataList.cloneWithRows(responseData.data.rows),
                //     loaded: true,
                // })
            })
            .catch((error) => {
                console.log(error.message);
            })
            .done();
    }

    _scrollEnd() {
        console.log("滑动到底部")
    }

    render() {
        // console.log(this._itemClick);
        // if (!this.state.loaded) {
        if (!this.props.homeList.loaded) {
            return (<View style={styles.container}>
                    <ActivityIndicator style={{width: 50, height: 50,}}/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <ListView dataSource={this.props.homeList.dataList}
                          renderRow={this._renderRow.bind(this)}
                          pageSize={2}
                          initialListSize={3}
                          onEndReached={this._scrollEnd}
                          showsVerticalScrollIndicator={false}
                          refreshControl={
                              <RefreshControl
                                  enabled={true}
                                  refreshing={this.props.homeList.isRefreshing}
                                  onRefresh={this._getData.bind(this)}
                                  tintColor={'#ff0000'}
                                  title={"更新数据中..."}
                                  colors={['#ff0000', '#00ff00', '#0000ff']}
                                  progressBackgroundColor={'white'}/>
                          }>
                </ListView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {homeList: state.homeList}
}

export default connect(mapStateToProps)(HomeView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: ScreenWidth - 20,
        height: (ScreenWidth - 20) * 2 / 3,
        resizeMode: 'contain',
    }
});
