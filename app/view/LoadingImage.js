/**
 * Created by thinkcentre on 2016/10/25.
 */

import React, {
    Component,
    propTypes
} from 'react'

import {
    View,
    Image
} from 'react-native'

export default class LaodingImage extends Component {
    propTypes = {
        style: null,
        source: null,
        defaultImg: null,
    };

    constructor(props) {
        super(props)
        this.state({
            load: false,
        })
    }


    render() {
        if (!load) {
            return (
                <Image style={this.props.style} source={this.props.defaultImg}
                       onLoad={()=>this.setState({load: false})}/>
            )
        }
        return (
            <Image style={this.props.style} source={this.props.source}
                   onLoad={()=> this.setState({load: true})}/>

        )
    }
}