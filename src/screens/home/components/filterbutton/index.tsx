import React, { useState } from 'react';
import { Text, FlatList,View, Pressable, TouchableOpacity } from 'react-native';

import styles from './style';
import data from '../data';

const Filterbutton = () => {
  
  const [selectedId, setSelectedId] = useState<string>('0');
      const NewsOpener = (item) => {
        setSelectedId(item.key);
      }
      const filter = ({item}: any)=> { 
        const backgroundColor = item.key === selectedId ? '#FF3A44' : '#fff';
        const color = item.key === selectedId ? '#fff' : '#000';
        return (
          <Pressable onPress={()=>NewsOpener(item)}>
            <Text style={[styles.item,{backgroundColor},{color}]}>{item.Author}</Text>
          </Pressable>
        );
      };
    return(
          <FlatList renderItem={filter} data={data} keyExtractor={item => item.key}  horizontal showsHorizontalScrollIndicator={false} extraData={selectedId}/>
    );
};
export default Filterbutton;