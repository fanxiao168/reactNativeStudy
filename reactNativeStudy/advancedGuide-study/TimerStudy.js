import React, {Component} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';

export default class TimerStudy extends Component {
  state = {
    count: 0,
  };

  componentDidMount(): void {
    // this.timer = setTimeout(() => {
    //   console.log('把一个定时器的引用挂在this上');
    //   let temCount = this.state.count + 1;
    //   this.setState({
    //     count: temCount,
    //   });
    // }, 500);

    this.timer = setInterval(() => {
      console.log('把一个定时器的引用挂在this上');
      let temCount = this.state.count + 1;
      this.setState({
        count: temCount,
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    //请注意Un"m"ount的m是小写

    //如果存在this.timer,则使用clearTimeout清空。
    //如果你使用了多个timer,那么用多个变量，或者用个数组来保存引用，然后逐个clear
    // this.timer && clearTimeout(this.timer);
    this.timer && clearInterval(this.timer);
  }

  render() {
    return <Text>{this.state.count}</Text>;
  }
}

// setTimeout, clearTimeout
// setInterval, clearInterval
// setImmediate, clearImmediate
// requestAnimationFrame, cancelAnimationFrame
// requestAnimationFrame(fn)和setTimeout(fn, 0)不同，前者会在每帧刷新之后执行一次，而后者则会尽可能快的执行（在 iPhone5S 上有可能每秒 1000 次以上）。
//
// setImmediate则会在当前 JavaScript 执行块结束的时候执行，就在将要发送批量响应数据到原生之前。注意如果你在setImmediate的回调函数中又执行了setImmediate，它会紧接着立刻执行，而不会在调用之前等待原生代码。
//
// Promise的实现就使用了setImmediate来执行异步调用。
//
// InteractionManager
// 原生应用感觉如此流畅的一个重要原因就是在互动和动画的过程中避免繁重的操作。在 React Native 里，我们目前受到限制，因为我们只有一个 JavaScript 执行线程。不过你可以用InteractionManager来确保在执行繁重工作之前所有的交互和动画都已经处理完毕。
//
// 应用可以通过以下代码来安排一个任务，使其在交互结束之后执行：
//
// InteractionManager.runAfterInteractions(() => {
//   // ...需要长时间同步执行的任务...
// });
