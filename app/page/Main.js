/**
 *
 * Created by thinkcentre on 2016/10/22.
 */
import React, {
    Component
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    BackAndroid
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import HomeView from "./HomeView"
import AccountView from "./AccountView"
import {
    HomeHeader,
} from "view"
// import HomeHeader from "../view/HomeHeader"
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    componentDidMount() {
        const navigator = this.props.nav;
        BackAndroid.addEventListener('hardwareBackPress', ()=> {
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

    // title="Home"
    // titleStyle={this.props.selected ? styles.tabTitleChecked : styles.tabTitleNormal}
// <HomeHeader title={this.state.selectedTab === 'home' ? "首页" : "账户中心"}/>
    render() {
        return (
            <View style={styles.container}>
                <HomeHeader title={this.state.selectedTab === 'home' ? "首页" : "账户中心"}/>
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}

                        renderIcon={() => <Image style={styles.tabIcon}
                                                 source={require("../images/home_normal_icon.png")}/>}
                        renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                         source={require("../images/home_checked_icon.png")}/>}
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <HomeView nav={this.props.nav}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'account'}
                        renderIcon={() => <Image style={styles.tabIcon}
                                                 source={require("../images/account_center_normal_icon.png")}/>}
                        renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                         source={require("../images/account_center_checked_icon.png")}/>}
                        onPress={() => this.setState({selectedTab: 'account'})}>
                        <AccountView nav={this.props.nav}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
        },
        tab: {
            height: 52,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        },
        tabIcon: {
            width: 30,
            height: 30,
            marginTop: 10
        },
        tabTitleNormal: {
            color: "#595968",
            marginTop: 3
        },
        tabTitleChecked: {
            color: "#ed6b6b",
            marginTop: 3
        }
    })
    ;