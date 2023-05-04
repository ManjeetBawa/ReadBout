import React from 'react';
import { Text, Pressable,View, ImageBackground, Dimensions,ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../../../../services/endpoints';

import styles from './style';
// import data from '../data';

interface prop {
  isrefreshing: boolean,
}
const CarouselLoader = ({isrefreshing}: prop) => {

   const { isLoading, error, data ,refetch} = useQuery('LatestNews', async () => {
    const response = await axios.get(BASE_URL+'/top-headlines?country=in&apiKey=a2f0f00c594e483a8b69a5db16b329da');
    return response.data;
  });

  if (isLoading) {
    return  <ActivityIndicator color={'#FF3A44'} size={'large'}/>
  }

  if (error) {
    return <View><Text>An error has occurred: {error.message}</Text></View>;
  }

  if(isrefreshing)
  {
    console.log('refetching carousel');
    refetch();
  }

  const navigation = useNavigation();
    const SLIDER_WIDTH = Dimensions.get('screen').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

    const CarouselCardItem = ({item}) => {
      const OpenNews = () => {
        console.log(item.key);
        navigation.navigate('News',{item});
      }
     
        return (
          <View style={{height: 250,width: ITEM_WIDTH}}>
            <Pressable onPress={()=>OpenNews(item)}>
            <ImageBackground
              source={{uri: item.urlToImage?item.urlToImage:'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA='}}
              // source={{uri: item.imgUrl}}
              imageStyle={{ borderRadius: 8}}
              >
                <View style={styles.uperimage}>
                  <Text style={styles.author}>{item.author?item.author:'Unknown'}</Text>
                  <Text style={styles.title}>{item.title?item.title:null}</Text>
                </View>
                <Text style={styles.body}>{item.description?item.description.slice(0,100)+'...':null}</Text>
            </ImageBackground>
            </Pressable>
          </View>
        );
      };
    return(
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