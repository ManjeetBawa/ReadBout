import React, { useEffect, useState } from 'react';
import {Text, FlatList, View, ImageBackground, Pressable,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import { BASE_URL } from '../../../../services/endpoints';
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
    const response = await axios.get(BASE_URL+'/top-headlines?country=in&category='+`${category}`+'&apiKey=a2f0f00c594e483a8b69a5db16b329da');
    return response.data;
  });

  if (isLoading) {
    return <View><ActivityIndicator color={'#FF3A44'} size={'large'}/></View>;
  }

  if (error) {
    return <View><Text>An error has occurred: {error.message}</Text></View>;
  }
  if(isrefreshing)
  {
    console.log('refetching newslist');
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
