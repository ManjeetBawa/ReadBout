import React, { useState } from 'react';
import { Text, FlatList,View, Pressable, TouchableOpacity } from 'react-native';
import styles from './style';
import data from '../data';
const Filterbutton = () => {
      const [color,setColor] =useState('green')
      const filter = ({item}: any)=> {
        console.log('--------------->',item,item.key)
        return (
          <TouchableOpacity >
            <Text style={styles.item}>{item.Author}</Text>
          </TouchableOpacity>
        );
      };
    return(
          <FlatList renderItem={filter} data={data} keyExtractor={(item)=>item.key} horizontal showsHorizontalScrollIndicator={false}/>
    );
};
export default Filterbutton;