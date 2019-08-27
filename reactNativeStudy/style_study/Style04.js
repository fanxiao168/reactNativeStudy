import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Style04 extends Component {
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
  //要求盒子，上下margin50,左右padding20
  box: {
    // marginTop: 50,
    // marginBottom:50,
    //代表垂直方向两边各50
    marginVertical: 50,
    borderWidth: 6,
    borderColor: 'yellow',
    // paddingLeft:20,
    // paddingRight:20,
    //代表水平方向两边各20
    paddingHorizontal: 20,
    backgroundColor: 'green',
  },
});
