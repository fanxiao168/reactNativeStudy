import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

let pic = {
  uri:
    'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=645293140,2005760885&fm=173',
};

export default class ImageStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        {/* 加载网络图片，使用source属性设置地址，网络图片必须设置宽高 */}
        <View>
          <Text>
            加载网络图片，使用source属性设置地址，网络图片必须设置宽高
          </Text>
          <Image source={pic} style={styles.image} />
        </View>
        <View style={styles.bottomView}>
          <Text>
            加载本地图片，使用source属性需要使用require方法载入，本地图片无须设置宽高
          </Text>
          <Image source={require('../image/111.jpg')} />
          <Image source={require('../image/222.jpg')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
  bottomView: {
    marginTop: 20,
  },
});
