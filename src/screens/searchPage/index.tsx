import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useQuery} from 'react-query';
import axios from 'axios';
import styles from './style';

const SearchItem = prop => {
    const navigation = useNavigation();
  const searchitem = prop.route.params.searchval;
  console.log(prop.route.params.searchval);
  const {isLoading, error, data, refetch} = useQuery('SearchApi', async () => {
    const response = await axios.get(
      'https://newsapi.org/v2/everything?q=' +
        `${searchitem}` +
        '&apiKey=a2f0f00c594e483a8b69a5db16b329da',
    );
    console.log(response.data.articles);
    return response.data;
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <View>
        <Text>An error has occurred: {error.message}</Text>
      </View>
    );
  }
  const To_fullnews = (item) => {
    navigation.navigate('News',{item})
  }
  const renderitem = ({item}) => {
    console.log(item.publishedAt);
    return (
      <View>
        <Pressable onPress={()=>To_fullnews(item)}>
          <Image
            style={styles.newsImage}
            source={{
              uri: item.urlToImage
                ? item.urlToImage
                : 'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA=',
            }}
          />
          <Text style={styles.dateTime}>
            {item.publishedAt
              ? item.publishedAt.slice(11, 16) +
                '  ' +
                item.publishedAt.slice(0, 10)
              : null}
          </Text>
          <Text style={styles.title}>{item.title ? item.title : null}</Text>
          <Text style={styles.content}>
            {item.content ? item.content : null}
          </Text>
          <Text style={styles.author}>{item.author ? item.author : null}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View style={styles.flatlistBox}>
      <FlatList renderItem={renderitem} data={data.articles} />
    </View>
  );
};

export default SearchItem;
