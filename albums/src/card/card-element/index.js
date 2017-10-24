import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class CardElement extends Component {

    render() {
        return (
            <View style={styles.cardElement}>
                <Text>Artist</Text>
            </View>
        );
    }
}