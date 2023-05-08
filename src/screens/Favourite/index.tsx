import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ImageBackground, Pressable} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import News from '../fullnews';
import styles from './style';
const Favourite = () => {
  // const { isLoading, error, data:everything ,refetch} = useQuery('try', async () => {
  //   const response = await axios.get('https://newsapi.org/v2/everything?q=virat&apiKey=ba98ff1447a14572bdf276236083a22c');
  //   console.log(response.data.totalResults);
  //   return response.data;
  // });

  // if (isLoading) {
  //   return  <ActivityIndicator />
  // }

  // if (error) {
  //   return <View><Text>An error has occurred: {error.message}</Text></View>;
  // }
  const isfocused = useIsFocused();
  const [favdata, setFavdata] = useState();
  useEffect(() => {
    AsyncStorage.getItem('favorites').then(res => {
      console.log('----------------', JSON.parse(res));
      setFavdata(JSON.parse(res));
    });
    console.log(isfocused);
  }, [isfocused]);
  const renderItem = ({item}) => {
    // console.log(item)
    return (
      <View style={styles.item}>
        <Pressable >
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

  NetInfo.addEventListener(networkState => {
    console.log('Connection type - ', networkState.type);
    console.log('Is connected? - ', networkState.isConnected);
  });

  return (
    <View style={styles.container}>
      {/* {NetInfo.addEventListener()} */}
      <FlatList data={favdata} renderItem={renderItem} />
    </View>
  );
};

export default Favourite;
