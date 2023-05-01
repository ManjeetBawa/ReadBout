import React, { useEffect, useState } from 'react';
import {Text, FlatList, View, ImageBackground, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import data from '../data';
import { useQuery } from 'react-query';
import axios from 'axios';
interface Props {
  category: string,
  isrefreshing: boolean
}
const NewsList = ({category,isrefreshing}:Props) => {
  console.log('category',category);
  const navigation = useNavigation();
  const { isLoading, error, data,refetch } = useQuery(`${category}`, async () => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category='+`${category}`+'&apiKey=ba98ff1447a14572bdf276236083a22c');
    return response.data;
  });

  if (isLoading) {
    return <View><Text>Loading...</Text></View>;
  }

  if (error) {
    return <View><Text>An error has occurred: {error.message}</Text></View>;
  }
  if(isrefreshing)
  {
    refetch();
  }

  // useEffect(()=>{
  //   NewsList
  // },[category]);


  const FullNews = item => {
    // console.log('jello')
    navigation.navigate('News', {item});
  };
  const renderItem = ({item}) => {
    // console.log(item)
    return (
      <View style={styles.item}>
        <Pressable onPress={() => FullNews(item)}>
          <ImageBackground
            source={{uri: item.urlToImage?item.urlToImage:'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA='}}
            imageStyle={{width: '100%', height: 128, borderRadius: 8}}>
            <View style={styles.alltext}>
              <Text style={styles.bottomText}>{item.title?item.title:null}</Text>
              <View style={styles.authNdate}>
                <Text style={styles.bottomText}>{item.author?item.author:null}</Text>
                <Text style={styles.bottomText}>{item.publishedAt?item.publishedAt.slice(0,10):null}</Text>
              </View>
            </View>
          </ImageBackground>
        </Pressable>
      </View>
    );
  };
  return (
    <View>
      <FlatList renderItem={renderItem} data={data.articles} />
    </View>
  );
};
export default NewsList;
