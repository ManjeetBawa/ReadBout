import React,{useEffect,useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icons } from '../../assets/Icons';
import fonts from '../../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const SwiperComponent = () => {
  
    const navigation = useNavigation();
    const ToDashBoard = () => {
        navigation.navigate('DashboardNavigation');
    }
  return (
    <Swiper loop={false}>
      <View style={styles.slide1}>
       <Icons.ContentFirstScreen  height = {413} width = {295}/>
      </View>
      <View style={styles.slide2}>
        <Icons.SecondScreen  height = {413} width = {295} />
        <TouchableOpacity onPress={ToDashBoard}>
        <Text style={{fontFamily: fonts.BOLD, fontSize: 20}}>{'Next->'}</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default SwiperComponent;