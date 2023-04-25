import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {Icons} from '../../assets/Icons';
import LottieView from 'lottie-react-native';

// import {ImagesAssets} from '../../assets/images';
// import {Svg} from 'react-native-svg';

const Splash = () => {
  return (
    <View style={{flex:1, alignItems: 'center', margin:0}}>
      <LottieView
        source={require('../../assets/waveloading.json')}
        autoPlay
        loop={false}
        resizeMode='cover'
      />
    </View>
  );
};

export default Splash;
