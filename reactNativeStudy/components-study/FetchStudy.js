import React from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';

export default class FetchStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount(): void {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }),
          function() {};
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <ActivityIndicator
            animating={this.state.isLoading}
            color="skyblue"
            size="large"
          />
        </View>
      );
    }

    return (
      <View style={{flex: 1, padding: 20}}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={this.state.dataSource}
          renderItem={({item}) => (
            <Text>
              {item.title},{item.releaseYear}
            </Text>
          )}
        />
      </View>
    );
  }
}
