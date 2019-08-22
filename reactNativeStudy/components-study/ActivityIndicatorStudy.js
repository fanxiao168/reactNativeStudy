import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, ActivityIndicator} from 'react-native';

export default class ActivityIndicatorStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  _loadingContrl = () => {
    const isShow = this.state.isShow;
    this.setState({isShow: !isShow});
  };
  render() {
    return (
      <View>
        <Text>loading...</Text>
        <ActivityIndicator
          animating={this.state.isShow}
          color="skyblue"
          // size='large'
        />
        <Button
          title={this.state.isShow ? '隐藏' : '显示'}
          onPress={this._loadingContrl}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
