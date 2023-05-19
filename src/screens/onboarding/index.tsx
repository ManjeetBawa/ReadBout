import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';
import {Icons} from '../../assets/Icons';
import {useNavigation, CommonActions} from '@react-navigation/native';
import palette from '../../assets/colors';

const SwiperComponent = () => {
  const navigation = useNavigation();
  const {dispatch} = useNavigation();
  const ToDashBoard = () => {
    dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'DashboardNavigation'}],
      }),
    );
  };
  return (
    <Swiper loop={false} activeDotColor={palette.Primary}>
      <View style={styles.slide1}>
        <Icons.ContentFirstScreen height={413} width={295} />
      </View>
      <View style={styles.slide2}>
        <Icons.SecondScreen height={413} width={295} />
        <TouchableOpacity onPress={ToDashBoard}>
          <View style={styles.bttn}>
            <Text style={styles.nextBtn}>{'→'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default SwiperComponent;
