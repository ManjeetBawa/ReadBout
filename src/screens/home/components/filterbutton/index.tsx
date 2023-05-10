import React, { useState } from 'react';
import { Text, FlatList, Pressable } from 'react-native';

import styles from './style';
import data from './category';
interface filterProps{
  getfilter:(value:string)=>void;
}
const Filterbutton = ({getfilter}:filterProps) => {
  const [selectedId, setSelectedId] = useState<string>('business');
      const NewsOpener = (item) => {
        setSelectedId(item.value);
        getfilter(item.value);
      }
      const filter = ({item}: any)=> { 
        const backgroundColor = item.value === selectedId ? '#FF3A44' : '#fff';
        const color = item.value === selectedId ? '#fff' : '#000';
        return (
          <Pressable onPress={()=>NewsOpener(item)}>
            <Text style={[styles.item,{backgroundColor},{color}]}>{item.value}</Text>
          </Pressable>
        );
      };
    return(
          <FlatList renderItem={filter} data={data} keyExtractor={item => item.key}  horizontal showsHorizontalScrollIndicator={false} extraData={selectedId}/>
    );
};
export default Filterbutton;