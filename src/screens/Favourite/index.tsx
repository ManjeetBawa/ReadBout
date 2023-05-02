import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Pressable,
  ScrollView,
} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';

const Favourite = () => {
  const [refreshing,setRefreshing] = useState(false);
  const handleRefresh = () => {
    console.log('yes');
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    },2000)
  }
  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>
    }> 
        <Text style={{fontSize: 32, color: 'black'}}></Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32, color: 'black'}}></Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
        <Text style={{fontSize: 32}}>Hello</Text>
    </ScrollView>
  );
};

export default Favourite;
