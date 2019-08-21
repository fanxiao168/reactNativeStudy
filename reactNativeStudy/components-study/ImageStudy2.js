import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default class ImageStudy2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../image/111.jpg'),
        require('../image/222.jpg'),
        require('../image/111.jpg'),
        require('../image/222.jpg'),
      ],
      images2: [
        {
          uri:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3638906533,1411199962&fm=173&app=25&f=JPG?w=218&h=146&s=F1018EBC5601494B0292E9450300F0FE',
        },
        {
          uri:
            'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3116792533,2964023525&fm=173&app=25&f=JPEG?w=218&h=146&s=35A3DA16C7A3CB4F4CABB17B0300D019',
        },
      ],
    };
  }
  render() {
    return (
      <View>
        {this.state.images.map((img, i) => (
          <Image key={i} source={img} />
        ))}
        {this.state.images2.map((img, i) => (
          <Image key={i} source={img} style={{width: 80, height: 80}} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
