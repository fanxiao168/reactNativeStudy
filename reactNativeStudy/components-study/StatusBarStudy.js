import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';

export default class StatusBarStudy extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'pink', width: '100%', height: '100%'}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="red"
          translucent={false}
          hidden={false}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <Text>内容</Text>
        </View>
      </View>
    );
  }
}
