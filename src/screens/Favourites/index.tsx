import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl ,Pressable} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';

const MyComponent = () => {
  
  const shower = () => {
    console.log('hi');
  }

  return (
    <View>
        <Pressable onPress={shower}><Text>get</Text></Pressable>
    </View>
  );
};

export default MyComponent;