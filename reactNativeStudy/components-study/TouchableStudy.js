import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';

export default class TouchableStudy extends Component {
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

  _alertColor = color => {
    Alert.alert(color, null, null);
  };
  _renderItem = ({item, index}) => {
    return index === 0 ? (
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#000"
        onPress={this._alertColor.bind(this, item.data.color)}>
        <View
          style={{backgroundColor: item.data.color, width: 300, height: 180}}>
          <Text>{item.data.title}</Text>
        </View>
      </TouchableHighlight>
    ) : index === 1 ? (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this._alertColor.bind(this, item.data.color)}>
        <View
          style={{backgroundColor: item.data.color, width: 300, height: 180}}>
          <Text>{item.data.title}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('red')}
        onPress={this._alertColor.bind(this, item.data.color)}>
        <View
          style={{backgroundColor: item.data.color, width: 300, height: 180}}>
          <Text>{item.data.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  };
  render() {
    return <FlatList data={this.state.list} renderItem={this._renderItem} />;
  }
}

const styles = StyleSheet.create({});
