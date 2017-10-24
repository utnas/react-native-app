import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export default class Card extends Component {

    render() {
        return (
            <View style={styles.content}>
                <Text> Card content </Text>
            </View>
        );
    }
};