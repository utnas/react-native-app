import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import styles from './styles';
import CardElement from "./card-element";

export default class Card extends Component {

    render() {
        return (
            <View style={styles.content}>
                <CardElement />
                <CardElement />
                <Button
                    onPress={this.onPressLearnMore}
                    title="Buy now"
                    color="#841584"
                    accessibilityLabel="Buy album now"
                />
            </View>
        );
    }

    onPressLearnMore() {
        console.log('Button pressed');
    }
};