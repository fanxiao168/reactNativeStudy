import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class ButtonStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  _onPressHandle() {
    this.setState({count: ++this.state.count});
  }
  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        {/* 按钮可以通过onPress属性绑定触摸点击事件 */}
        {/* Button按钮必须使用title设置文本，不能内嵌文本，内嵌文本只能使用Text */}
        <Button title="点我！" onPress={this._onPressHandle.bind(this)} />
      </View>
    );
  }
}
