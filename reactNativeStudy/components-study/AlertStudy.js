import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert, Button} from 'react-native';

export default class AlertStudy extends Component {
  _alert1 = () => {
    Alert.alert('你好吗？', null, null);
  };
  _alert2 = () => {
    Alert.alert('你好吗？', '没有你的夜我彻夜难眠！', null);
  };
  _alert3 = () => {
    Alert.alert('你好吗？', '没有你的夜我彻夜难眠！', [
      {
        text: '取消',
        onPress: () => {
          console.log('不理会');
        },
      },
      {
        text: '确认',
        onPress: () => {
          console.log('跟你走');
        },
      },
      {
        text: '什么',
        onPress: () => {
          console.log('你要我怎样');
        },
      },
    ]);
  };
  render() {
    return (
      <View>
        <Button title="最简单的弹窗" onPress={this._alert1} />
        <Button title="复杂一点的弹窗" onPress={this._alert2} />
        <Button title="功能最全的弹窗" onPress={this._alert3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
