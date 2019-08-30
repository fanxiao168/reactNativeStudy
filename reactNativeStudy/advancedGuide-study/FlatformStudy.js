import React, {Component} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';

export default class FlatformStudy extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});


// 上面的代码会根据平台的不同返回不同的 container 样式 —— iOS 上背景色为红色，而 android 为蓝色。
// 这一方法可以接受任何合法类型的参数，因此你也可以直接用它针对不同平台返回不同的组件，像下面这样：
// const Component = Platform.select({
//   ios: () => require("ComponentIOS"),
//   android: () => require("ComponentAndroid")
// })();
//
// <Component />;
//
// 在 Android 上，Version属性是一个数字，表示 Android 的 api level：
// import { Platform } from "react-native";
//
// if (Platform.Version === 25) {
//   console.log("Running on Nougat!");
// }
//
// 在 iOS 上，Version属性是-[UIDevice systemVersion]的返回值，具体形式为一个表示当前系统版本的字符串。比如可能是"10.3"
// import { Platform } from "react-native";
//
// const majorVersionIOS = parseInt(Platform.Version, 10);
// if (majorVersionIOS <= 9) {
//   console.log("Work around a change in behavior");
// }
