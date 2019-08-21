import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class TextStudy3 extends Component {
  render() {
    return (
      //在RN中，父文本的样式可以传递给后代文本，也就是样式继承。
      //但是除了Text与Text组件之间外，其他组件无法实现样式继承。
      <Text style={styles.container}>
        <Text>啦啦啦</Text>
        <Text>我是卖报的小行家</Text>
        <Text>我是行内元素，一行显示！！！</Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    lineHeight: 40,
    color: 'red',
  },
});
