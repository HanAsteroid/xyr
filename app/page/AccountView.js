/**
 *
 * Created by thinkcentre on 2016/10/24.
 */

import React, {
    Component
} from 'react'
import {
    NativeModules,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ToastAndroid,
    DeviceEventEmitter,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import {
    colorTitleText,
    ScreenWidth
} from 'value'

const NativeInterface = NativeModules.NativeInterface;

export default class AccountView extends Component {

    constructor(props) {
        super(props);

    }

    _handleMsg() {
        NativeInterface.handleMessage("顾海宽");
    }
    _clickAvator(){
        // ToastAndroid.show("点击了头像", ToastAndroid.SHORT);
        this.props.nav.push({
            name: "home_detail",
            index: 1,
            id: "home_detail",
        })
    }
    componentDidMount() {
        DeviceEventEmitter.addListener("AndroidNativeMsg", (msg)=> {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={this._clickAvator.bind(this)}>
                    <Image source={require("../images/avator.jpeg")} style={styles.avator}/>
                </TouchableOpacity>
                <Text style={styles.name}>{"顾海宽\n蓝瘦香菇guhaikuan"}</Text>

                <TouchableOpacity style={{marginVertical: 10,}} onPress={this._handleMsg.bind(this)}>
                    <Text>向Native传递消息</Text>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                </View>
                <KeyboardAvoidingView behavior={"padding"}>
                    <TextInput style={styles.input} placeholder={"请输入内容"}>
                    </TextInput>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avator: {
        width: 100,
        height: 100,
        borderRadius: 90,
        marginTop: 30
    },
    name: {
        marginTop: 10,
        fontSize: 14,
        color: colorTitleText,
        textAlign: 'center',
        fontFamily: 'serif'
    },
    input: {
        marginBottom: 20,
        textAlign: "center",
        width: ScreenWidth - 20,
    }
});