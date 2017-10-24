import React, { Component } from 'react';
import { View } from 'react-native';

import Card from "./src/card";
import Header from './src/header';
import styles from './styles';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Card />
      </View>
    );
  }
}