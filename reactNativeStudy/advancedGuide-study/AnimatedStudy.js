import React from 'react';
import {Animated, default as Easing, Text, View} from 'react-native';

// Animated使得开发者可以非常容易地实现各种各样的动画和交互方式，
// 并且具备极高的性能。Animated旨在以声明的形式来定义动画的输入与输出，
// 在其中建立一个可配置的变化函数，然后使用简单的start/stop方法来控制动画按顺序执行。
// Animated仅封装了6个可以动画化的组件：View、Text、Image、ScrollView、FlatList和SectionList，
// 不过你也可以使用Animated.createAnimatedComponent()来封装你自己的组件。下面是一个在加载时带有淡入动画效果的视图：
export default class AnimatedStudy extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), //透明度初始值设为0
  };
  componentDidMount(): void {
    Animated.timing(
      //随时间变化而执行动画
      this.state.fadeAnim, //动画中的变量值
      {
        toValue: 1, //透明度最终变为1，即完全不透明
        duration: 1000, //让动画持续一段时间
      },
    ).start(); //开始执行动画
  }

  render() {
    let {fadeAnim} = this.state;
    return (
      <Animated.View //使用专门的可动画化的view组件
        style={{
          ...this.props.style,
          opacity: fadeAnim, //将透明度指定为动画变量值
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
