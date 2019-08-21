import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

export default class TextInputStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
  }

  _changeMyText = newText => {
    this.setState({val: newText});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.val}</Text>
        <TextInput
          style={styles.input}
          placeholder="请输入"
          placeholderTextColor="#ccc"
          value={this.state.val}
          onChangeText={this._changeMyText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    paddingLeft: 5,
    width: 200,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 2,
  },
});
