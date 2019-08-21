import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

export default class DimensionsStudy extends Component {
  render() {
    return (
      <View>
        <View style={styles.view1} />
        <View style={styles.view2} />
      </View>
    );
  }
}

//Dimensions可以动态获取屏幕的宽高，用这个宽高我们可以根据需求自己计算
//使用它的时候，主要是因为我们不能确定父盒子的宽高与屏幕的关系
const styles = StyleSheet.create({
  view1: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'yellow',
  },
  view2: {
    width: (Dimensions.get('window').width / 3) * 2,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'orange',
  },
});
