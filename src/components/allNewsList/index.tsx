import styles from './style';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {format} from 'date-fns';
import {defaultImage, dateFormat} from '../../constants/strings';
import FastImage from 'react-native-fast-image';

interface AllNewsList {
  item: any;
  date: any;
  DateAndAuth: boolean;
}
const AllNewsList = ({item, date, DateAndAuth}: AllNewsList) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.urlToImage ? item.urlToImage : defaultImage,
          priority: FastImage.priority.normal,
        }}
      />
      <Text style={styles.bottomText}>{item.title ? item.title : null}</Text>
      {DateAndAuth && (
        <View style={styles.authNdate}>
          <Text style={styles.DateText}>
            {item.author ? item.author : null}
          </Text>
          <Text style={styles.DateText}>
            {item.publishedAt ? format(date, dateFormat) : null}
          </Text>
        </View>
      )}
    </View>
  );
};

export default AllNewsList;
