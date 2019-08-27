import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Style02 extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.colorBlue, styles.font14]}>
          如何给一个元素引入多个样式定义
        </Text>
        <Text style={[styles.colorRed, styles.font20, {marginTop: 30}]}>
          通过数组
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorRed: {
    color: 'red',
  },
  colorBlue: {
    color: 'blue',
  },
  font14: {
    fontSize: 14,
    lineHeight: 16,
  },
  font20: {
    fontSize: 20,
    lineHeight: 24,
  },
});
