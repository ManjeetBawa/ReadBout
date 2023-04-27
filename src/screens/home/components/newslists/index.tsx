import React from 'react';
import { Text, FlatList,View,ImageBackground,Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import data from '../data';
interface props {
    data1: any;
}
const NewsList = () => {
    const navigation = useNavigation();
    const FullNews = (item) => {
        // console.log('jello')
        navigation.navigate('News',{item})
    }
    const renderItem = ({item}) => {
        // console.log(item)
        return(
            <View style={styles.item}>
                <Pressable onPress={()=>FullNews(item)}>
            <ImageBackground
              source={{uri: item.imgUrl}}
              imageStyle={{width: '100%', height: 128, borderRadius: 8}}
              >
                <Text>{item.title}</Text>
                <View>
                    <Text>{item.Author}</Text>
                    <Text>{item.date}</Text>
                </View>
              </ImageBackground>
              </Pressable>
              </View>
        );
    };
    return(
        <FlatList renderItem={renderItem} data={data}/>
    );
};
export default NewsList;