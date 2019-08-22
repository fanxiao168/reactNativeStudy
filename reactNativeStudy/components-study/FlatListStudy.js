import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

export default class FlatListStudy extends Component {
  constructor(props) {
    super(props);
    //FlatList组件对数据的格式是有要求的，
    //列表数据的每一项，都要有一个唯一的key属性，它相当于以前给列表元素设置的key属性
    this.state = {
      list: [
        {
          key: 'red',
          data: {
            title: '红色',
            color: 'red',
          },
        },
        {
          key: 'yellow',
          data: {
            title: '黄色',
            color: 'yellow',
          },
        },
        {
          key: 'blue',
          data: {
            title: '蓝色',
            color: 'blue',
          },
        },
        {
          key: 'green',
          data: {
            title: '绿色',
            color: 'green',
          },
        },
        {
          key: 'pink',
          data: {
            title: '粉色',
            color: 'pink',
          },
        },
        {
          key: 'skyblue',
          data: {
            title: '天空蓝',
            color: 'skyblue',
          },
        },
        {
          key: 'orange',
          data: {
            title: '橘黄',
            color: 'orange',
          },
        },
      ],
    };
  }

  _renderItem = ({item}) => {
    return (
      <View style={{backgroundColor: item.data.color, width: 300, height: 180}}>
        <Text>{item.data.title}</Text>
      </View>
    );
  };
  render() {
    return <FlatList data={this.state.list} renderItem={this._renderItem} />;
  }
}

const styles = StyleSheet.create({});
