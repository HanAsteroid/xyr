/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Provider
} from 'react-redux'
import configureStore from "./app/store/configureStore"

import App from "./app/xyrApp"
const store = configureStore();
class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
AppRegistry.registerComponent('xyr', () => Root);
