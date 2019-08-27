import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Style06 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*对于flex容器的子盒子，可以通过flex属性设置它所占的空间比例*/}
        <View style={[styles.inBox, {flex: 2, backgroundColor: 'red'}]}>
          <Text>内容1</Text>
        </View>
        <View style={[styles.inBox, {flex: 3, backgroundColor: 'blue'}]}>
          <Text>内容2</Text>
        </View>
        <View style={[styles.inBox, {flex: 5, backgroundColor: 'yellow'}]}>
          <Text>内容3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //通过修改主轴方向，控制子元素的排列方向
  container: {
    marginTop: 40,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  inBox: {
    flex: 1,
    height: 50,
  },
});
