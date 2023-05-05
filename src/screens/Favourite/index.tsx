import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  Image
} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";

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
  const renderItem = ({item}) => {
    return (
      <Image
      source={{uri: item.urlToImage?item.urlToImage:'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA='}}
      style={{width: '100%', height: 128, borderRadius: 8}}/>
    //   <View >
    //     <Text >{item.title?item.title:null}</Text>
    //     {/* <View >
    //       <Text >{item.author?item.author:null}</Text>
    //       <Text >{item.publishedAt?item.publishedAt.slice(0,10):null}</Text>
    //     </View> */}
    //   </View>
    // </ImageBackground>
    );
  }
  NetInfo.addEventListener(networkState => {
    console.log("Connection type - ", networkState.type);
    console.log("Is connected? - ", networkState.isConnected);
  });



 

  return (
    <View>
      {/* {NetInfo.addEventListener()} */}
      {/* <FlatList data={everything.articles} renderItem={renderItem}/> */}

    </View>
  );
};

export default Favourite;
