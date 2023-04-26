import React from 'react';
import { Text, FlatList,View,ImageBackground } from 'react-native';
import styles from './style';
import data from '../data';
const NewsList = () => {
    const renderItem = ({item}) => {
        return(
            <View style={styles.item}>
            <ImageBackground
              source={{uri: item.imgUrl}}
              imageStyle={{width: '100%', height: 128, borderRadius: 8}}
              ></ImageBackground>
              </View>
        );
    };
    return(
        <FlatList renderItem={renderItem} data={data}/>
    );
};
export default NewsList;