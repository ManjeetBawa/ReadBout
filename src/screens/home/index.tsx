import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {Icons} from '../../assets/Icons';

// import {ImagesAssets} from '../../assets/images';
// import {Svg} from 'react-native-svg';

const Home = () => {
  return (
    // Header
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInput}>
          <TextInput
            placeholder="DogeCoin to the Moon..."
            // placeholderTextColor={'#fff'}
            style={styles.searchArea}
          />
          <Icons.VectorSearch width={12.18} height={12} />
        </View>
        <Icons.Bell width={33} height={32} />
      </View>
    </View>
  );
};

export default Home;
