import React, { useState } from 'react';
import {
  Text,
  Pressable,
  View,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../../../../services/endpoints';
import { getData, setData } from '../../../../utils/storage/ApplicationStorage';
import NetInfo from '@react-native-community/netinfo';

import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import data from '../data';

interface prop {
  isrefreshing: boolean;
}
const CarouselLoader = ({ isrefreshing }: prop) => {
  const [offdata, setOffdata] = useState();

  const navigation = useNavigation();
  const SLIDER_WIDTH = Dimensions.get('screen').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

  const CarouselCardItem = ({ item }) => {
    const OpenNews = () => {
      console.log(item.key);
      navigation.navigate('News', { item });
    };
    return (
      <View style={{ height: 250, width: ITEM_WIDTH }}>
        <Pressable onPress={() => OpenNews(item)}>
          <ImageBackground
            source={{
              uri: item.urlToImage
                ? item.urlToImage
                : 'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA=',
            }}
            // source={{uri: item.imgUrl}}
            imageStyle={{ borderRadius: 8 }}>
            <View style={styles.uperimage}>
              <Text style={styles.author}>
                {item.author ? item.author : 'Unknown'}
              </Text>
              <Text style={styles.title}>{item.title ? item.title : null}</Text>
            </View>
            <Text style={styles.body}>
              {item.description ? item.description.slice(0, 100) + '...' : null}
            </Text>
          </ImageBackground>
        </Pressable>
      </View>
    );
  };

  const { isLoading, error, data, refetch } = useQuery('LatestNews', async () => {
    const response = await axios.get(
      BASE_URL +
      '/top-headlines?country=in&apiKey=a2f0f00c594e483a8b69a5db16b329da',
    );
    console.log('storingData');
    await AsyncStorage.setItem('LatestNews', JSON.stringify(response.data));
    return response.data;
  });
  if (isrefreshing) {
    console.log('refetching carousel');

    refetch();
  }

  if (isLoading) {
    return <ActivityIndicator color={'#FF3A44'} size={'large'} />;
  }

  if (error) {
    AsyncStorage.getItem('LatestNews').then(Response => {
      // console.log('resposnes ', JSON.parse(Response));
      setOffdata(JSON.parse(Response));
    });
    if (offdata) {
      return (
        // <Text>Error occured</Text>
        <Carousel
          data={offdata.articles}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />
      )
    }

    else {
      return (
        null
      )
    }
  }
 


return (
  <Carousel
    data={data.articles}
    renderItem={CarouselCardItem}
    sliderWidth={SLIDER_WIDTH}
    itemWidth={ITEM_WIDTH}
    useScrollView={true}
  />
);
};
export default CarouselLoader;
