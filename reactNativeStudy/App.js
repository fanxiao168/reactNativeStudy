/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// 内置组件学习
import ViewStudy from './components-study/ViewStudy';
import TextStudy from './components-study/TextStudy';
import TextStudy2 from './components-study/TextStudy2';
import TextStudy3 from './components-study/TextStudy3';
import ButtonStudy from './components-study/ButtonStudy';
import ImageStudy from './components-study/ImageStudy';
import ImageStudy2 from './components-study/ImageStudy2';
import TextInputStudy from './components-study/TextInputStudy';
import AlertStudy from './components-study/AlertStudy';
import DimensionsStudy from './components-study/DimensionsStudy';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<ViewStudy />*/}
        {/*<TextStudy />*/}
        {/*<TextStudy2 />*/}
        {/*<TextStudy3 />*/}
        {/*<ButtonStudy />*/}
        {/*<ImageStudy />*/}
        {/*<ImageStudy2 />*/}
        {/*<TextInputStudy />*/}
        {/*<AlertStudy />*/}
        <DimensionsStudy />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
