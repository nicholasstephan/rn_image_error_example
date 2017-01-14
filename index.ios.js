/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class ImageTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{
            height: 200,
            width: 200,
            backgroundColor: "#F0F0F0",
          }}
          source={{uri: "http://is3.mzstatic.com/image/thumb/Music1/v4/54/44/5c/54445c13-46ca-cb08-81c4-d1f09ec8ba03/source/1200x630bf.jpg"}}
          resizeMode="cover"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ImageTest', () => ImageTest);
