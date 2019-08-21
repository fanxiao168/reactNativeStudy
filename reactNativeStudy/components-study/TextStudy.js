import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class TextStudy extends Component {
  render() {
    return (
      //Text组件允许相互嵌套，但是不能嵌套其他组件
      //可以把它想象成一个span行内标签，不能嵌套块级元素
      <Text>
        <Text>啦啦啦</Text>
        <Text>我是卖报的小行家</Text>
        <Text>我是行内元素，一行显示！！！</Text>
      </Text>
    );
  }
}
