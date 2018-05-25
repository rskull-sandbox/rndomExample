/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    num: 0
  }

  add = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    this.setState({ num: this.state.num + 1 })
  }

  render() {
    const { num } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.add}>
          <Text>Add</Text>
        </TouchableOpacity>
        <View style={styles.balls}>
          {[...Array(num)].map((_, i) => <View style={styles.ball} key={i} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  balls: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  ball: {
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red'
  }
});
