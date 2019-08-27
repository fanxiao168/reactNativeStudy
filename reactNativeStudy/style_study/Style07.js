import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Style07 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.one]}>
          <Text>内容1</Text>
        </View>
        <View style={[styles.box, styles.two]}>
          <Text>内容2</Text>
        </View>
        <View style={[styles.box, styles.three]}>
          <Text>内容3</Text>
        </View>
      </View>
    );
  }
}

//现在我就想给子元素设置固定的宽度100，而不是使用flex设置自适应宽度。
//那么目前来看，三个子盒子加起来也没有占满父盒子，而是从左到右排列，右边出险空白。

//我们可以通过justifyContent样式设置子盒子的主轴排列方式。
//主轴对齐方式有5种：flex-start flex-end center space-between space-around
//辅轴对齐方式有4种：flex-start flex-end center stretch
const styles = StyleSheet.create({
  //通过修改主轴方向，控制子元素的排列方向
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  box: {
    width: 100,
    height: 100,
  },
  one: {
    backgroundColor: 'yellow',
  },
  two: {
    backgroundColor: 'blue',
  },
  three: {
    backgroundColor: 'green',
  },
});
