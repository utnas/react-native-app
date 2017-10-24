import React, {Component} from 'react';

import {Text, View} from 'react-native';

import style from './styles';

export default class Header extends Component {

    render() {
        return (
            <View style={style.headerBar} >
                <Text style={[style.fontSize, style.white]} > Albums </Text>
            </View>
        );
    }
}