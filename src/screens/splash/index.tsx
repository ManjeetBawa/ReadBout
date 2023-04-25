import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';


const Splash = () => {
  return (
    <View style={{flex:1, alignItems: 'center', margin:0}}>
      <LottieView
        source={require('./waveloading.json')}
        autoPlay
        loop={false}
        resizeMode='cover'
      />
    </View>
  );
};

export default Splash;
