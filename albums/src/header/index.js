import React, {Component} from 'react';

import {Text} from 'react-native';

import {styles} from './styles';

export default class Header extends Component {

    render() {
        return (
            <View styles={styles.header}>
            <Text> Hello Header </Text>
            </View>
        );
    }
}