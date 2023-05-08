import React,{useState} from "react";
import {View,Text,Image, ScrollView, TouchableOpacity} from 'react-native'
import styles from "./style";
import { Icons } from "../../assets/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const News = (params) => {
    
    // console.log(params.route.params.item);
    const item = params.route.params.item;
    
    
    // const [fav, setFav] = useState([]);
    const [active , setActive] = useState<boolean>(false);
    const FavClicked = async() => {
        active?setActive(false):setActive(true);
        try {
            const existingFavorites = await AsyncStorage.getItem('favorites');
            let favoritesArray = existingFavorites ? JSON.parse(existingFavorites) : [];
            // favoritesArray.push(item);
            let newarray = [item,...favoritesArray];
            // favoritesArray.push(item,{'favactive':true});
            // const myval = favoritesArray.filter((val)=>val.title == item.title)
            // console.log('myval',myval.length);
            await AsyncStorage.setItem('favorites', JSON.stringify(newarray));
          } catch (e) {
            console.log('Error adding item to favorites', e);
          }
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: item.urlToImage?item.urlToImage:'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA='}} style={styles.image}/>
            <ScrollView style={styles.textBox}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.disc}>{item.description}</Text>
            <Text style={styles.disc}>{item.author}</Text>
            </ScrollView>
            <TouchableOpacity style={styles.FavIcon} onPress={FavClicked}>
                {active?
            <Icons.FavActive height={40} width={40}/>
            :
            <Icons.FavInactive height={40} width={40}/>
                }
            </TouchableOpacity>
        </View>
    );
};

export default News;