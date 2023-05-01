import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl ,Pressable} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';

const Favourite = () => {
  
  const shower = () => {
    console.log('hi');
  }

  return (
    <View>
        <Pressable onPress={shower}><Text>get</Text></Pressable>
    </View>
  );
};

export default Favourite;