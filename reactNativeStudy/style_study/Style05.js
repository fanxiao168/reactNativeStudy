import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Style05 extends Component {
  render() {
    return (
      <View>
        {/*设置主轴为纵向（其实默认就是纵向的）*/}
        <View style={styles.column}>
          <Button title="按钮1" />
          <Button title="按钮2" />
        </View>
        {/*设置主轴为横向*/}
        <View style={styles.row}>
          <Text>内容1</Text>
          <Text>内容2</Text>
        </View>
      </View>
    );
  }
}

//我们可以通过flexDirection样式修改子元素主轴方向
const styles = StyleSheet.create({
  //通过修改主轴方向，控制子元素的排列方向
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});
