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
  Navigator,
  Platform,
} from 'react-native'

import {connect} from "react-redux"


import Main from "./page/Main"
import HomeDetail from "./page/HomeDetail"
export default class App extends Component {
  _renderPage(route, nav) {
    let t = Platform.OS === 'ios';
    switch (route.id) {
      case "main":
        return <Main {...route.params} nav={nav}/>;
        break;
      case "home_detail":
        return <HomeDetail {...route.params} nav={nav}/>;
        break;
    }
  }

  _navBar() {
    return <Navigator.NavigationBar
      routeMapper={{
        LeftButton: (route, navigator, index, navState) => {
          return (<Text>Cancel</Text>);
        },
        RightButton: (route, navigator, index, navState) => {
          return (<Text>Done</Text>);
        },
        Title: (route, navigator, index, navState) => {
          return (<Text>Awesome Nav Bar</Text>);
        },
      }}
      style={{backgroundColor: 'gray'}}
    />
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: "main", index: 0, id: "main"}}
        renderScene={
          (route, navigator) => this._renderPage(route, navigator)
        }
        configureScene={(route) => {
          return Navigator.SceneConfigs.FadeAndroid;
        }}
      />
    )
  }
}

//
// function mapStateToProps(){
//     return {}
// }
//
// export default connect(mapStateToProps)(App);
