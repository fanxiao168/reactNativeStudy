import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Style03 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>
            盒子模型，盒子模型，盒子模型，盒子模型，盒子模型，盒子模型，盒子模型，盒子模型，盒子模型，盒子模型
          </Text>
        </View>
      </View>
    );
  }
}

//下面的布局，如果在web端，子盒子的margin会与父盒子margin重叠，
//造成内部的子盒子与父盒子没有产生距离，一般需要通过BFC来解决，比如overflow,hidden.
//不过，在RN中不用担心，这里是正常的。
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  box: {
    margin: 30,
    borderWidth: 6,
    borderColor: 'yellow',
    padding: 10,
    backgroundColor: 'green',
  },
});
