import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Style01 extends Component {
  render() {
    // 在RN中，组件的display默认为flex,且方向是纵向排列
    //本例当中，Button与Text因为收到了View-flex的默认布局影响，
    //所以并没有在一行渲染，而是换行渲染。
    return (
      <View>
        <View style={styles.row}>
          <Button title="按钮1" />
          <Button title="按钮2" />
        </View>
        <View style={styles.row}>
          <Text>内容1</Text>
          <Text>内容2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
