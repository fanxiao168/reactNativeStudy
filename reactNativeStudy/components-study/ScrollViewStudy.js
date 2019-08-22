import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

export default class ScrollViewStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['red', 'yellow', 'pink', 'orange', 'blue', 'skyblue'],
    };
  }
  render() {
    return (
      <ScrollView>
        {/* 如果内容超出屏幕，默认情况下是不能拖动查阅的，包裹ScrollView就可以解决 */}
        {/* ScrollView的特点是，无论列表有多少，都是一起渲染 */}
        {this.state.list.map(color => (
          <View
            key={color}
            style={{backgroundColor: color, width: 300, height: 180}}>
            <Text>{color}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
