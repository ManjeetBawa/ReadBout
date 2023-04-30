import React from 'react';
import { Text, Pressable,View, ImageBackground, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import { useQuery } from 'react-query';
import axios from 'axios';

import styles from './style';
import data from '../data';
const CarouselLoader = () => {

  // const { isLoading, error, data } = useQuery('LatestNews', async () => {
  //   const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ba98ff1447a14572bdf276236083a22c');
  //   return response.data;
  // });

  // if (isLoading) {
  //   return <View><Text>Loading...</Text></View>;
  // }

  // if (error) {
  //   return <View><Text>An error has occurred: {error.message}</Text></View>;
  // }


  const navigation = useNavigation();
    const SLIDER_WIDTH = Dimensions.get('screen').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

    const CarouselCardItem = ({item}) => {
      const OpenNews = () => {
        console.log(item.key);
        navigation.navigate('News',{item});
      }
     
      // if(item.urlToImage==null)
      // {
      //   return null;
      // }
        return (
          <View style={{height: 250,width: ITEM_WIDTH}}>
            <Pressable onPress={()=>OpenNews(item)}>
            <ImageBackground
              // source={{uri: item.urlToImage?item.urlToImage:'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA='}}
              source={{uri: item.imgUrl}}
              imageStyle={{ borderRadius: 8}}
              >
                <View style={styles.uperimage}>
                  <Text style={styles.author}>{item.Author}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Text style={styles.body}>{item.body}</Text>
            </ImageBackground>
            </Pressable>
          </View>
        );
      };
    return(
        <Carousel
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />
    );
};
export default CarouselLoader;