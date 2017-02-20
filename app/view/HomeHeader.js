/**
 *
 * Created by thinkcentre on 2016/10/24.
 */
import React, {
    Component,
    PropTypes
} from 'react'
import {
    View,
    Text
} from 'react-native'
export class HomeHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (
            <View style={{flexDirection: 'row',height:45, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ed6b6b'}}>
                <Text style={{fontSize: 18, color: "white", textAlign: 'center'}}>{this.props.title}</Text>
            </View>
        )
    }
}
