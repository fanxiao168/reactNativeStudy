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
import ScrollViewStudy from './components-study/ScrollViewStudy';
import FlatListStudy from './components-study/FlatListStudy';
import SectionListStudy from './components-study/SectionListStudy';
import ActivityIndicatorStudy from './components-study/ActivityIndicatorStudy';
import TouchableStudy from './components-study/TouchableStudy';
import StatusBarStudy from './components-study/StatusBarStudy';
import FetchStudy from './components-study/FetchStudy';

//RN布局学习
import Style01 from './style_study/Style01';
import Style02 from './style_study/Style02';
import Style03 from './style_study/Style03';
import Style04 from './style_study/Style04';
import Style05 from './style_study/Style05';
import Style06 from './style_study/Style06';
import Style07 from './style_study/Style07';

//advancedGuide
import FlatformStudy from './advancedGuide-study/FlatformStudy';
import AnimatedStudy from './advancedGuide-study/AnimatedStudy';
import TimerStudy from './advancedGuide-study/TimerStudy';


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
        {/*<DimensionsStudy />*/}
        {/*<ScrollViewStudy />*/}
        {/*<FlatListStudy />*/}
        {/*<SectionListStudy />*/}
        {/*<ActivityIndicatorStudy />*/}
        {/*<TouchableStudy />*/}
        {/*<StatusBarStudy />*/}
        {/*<FetchStudy />*/}

        {/*<FlatformStudy />*/}

        {/*<AnimatedStudy*/}
        {/*  style={{*/}
        {/*    width: 300,*/}
        {/*    height: 100,*/}
        {/*    backgroundColor: 'powderblue',*/}
        {/*    justifyContent: 'center',*/}
        {/*  }}>*/}
        {/*  <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>*/}
        {/*    Fading in*/}
        {/*  </Text>*/}
        {/*</AnimatedStudy>*/}

        <TimerStudy />

        {/*<Style01 />*/}
        {/*<Style02 />*/}
        {/*<Style03 />*/}
        {/*<Style04 />*/}
        {/*<Style05 />*/}
        {/*<Style06 />*/}
        {/*<Style07 />*/}
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
