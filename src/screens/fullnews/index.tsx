import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import {Icons} from '../../assets/Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import fonts from '../../assets/fonts';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
const News = params => {
  const item = params.route.params.item;
  const {goBack} = useNavigation();
  const [active, setActive] = useState<boolean>(false);
  const gobackhandler = () => {
    goBack();
  }
  const FavClicked = async () => {
    const existingmatching = await AsyncStorage.getItem('matching');
    let matchingfinal = existingmatching ? JSON.parse(existingmatching) : [];
    const existingFavorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = existingFavorites ? JSON.parse(existingFavorites) : [];
    if (!active) {
        Snackbar.show({
            text: 'Added to Favourite',
            duration: Snackbar.LENGTH_SHORT,
            textColor: '#FF3A44',
            backgroundColor: '#fff',
            fontFamily: fonts.BOLD,
          });
      try {
        setActive(true);
        let newarray = [item, ...favoritesArray];
        let pushedmatch = [item.title, ...matchingfinal];
        await AsyncStorage.setItem('favorites', JSON.stringify(newarray));
        await AsyncStorage.setItem('matching', JSON.stringify(pushedmatch));
      } catch (e) {
        console.log('Error adding item to favorites', e);
      }
    } else {
        setActive(false);
        Snackbar.show({
            text: 'Removed from Favourites',
            duration: Snackbar.LENGTH_SHORT,
            textColor: '#FF3A44',
            backgroundColor: '#fff',
            fontFamily: fonts.BOLD,
          });
        let pushmatch= matchingfinal.filter((res)=>{
             return item.title !==res
        }
        )
      let pushfav = favoritesArray.filter((res)=>{
        return item.title !== res.title;
      }
      )
      await AsyncStorage.setItem('favorites', JSON.stringify(pushfav));
      await AsyncStorage.setItem('matching', JSON.stringify(pushmatch));
    }
  };
  useEffect(() => {
    AsyncStorage.getItem('matching').then(val => {
      if (val) {
        const mydata = JSON.parse(val);
        const search = mydata.filter(value => value === item.title);
        if (search.length >= 1) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    });
  }, []);
  const date = new Date(`${item.publishedAt.slice(0, 10)}`);
  return (
    
    <View style={styles.container}>
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA=',
        }}
        style={styles.image}
      />
      <ScrollView style={styles.textBox}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.disc}>{item.description}</Text>
        <Text style={styles.disc}>{item.content}</Text>
        <View style={styles.authNdate}>
            <Text style={styles.DateText}>
              {item.author ? item.author : null}
            </Text>
            <Text style={styles.DateText}>
              {item.publishedAt ? format(date, 'EEEE, do MMMM yyyy') : null}
            </Text>
          </View>
      </ScrollView>
      <TouchableOpacity  onPress={gobackhandler} style={{top: 10, left: 10, position: 'absolute'}}>
      <Icons.goBack height={45} width={45} />
        </TouchableOpacity>
      <TouchableOpacity style={styles.FavIcon} onPress={FavClicked}>
        {active ? (
          <Icons.FavActive height={40} width={40} />
        ) : (
          <Icons.FavInactive height={40} width={40} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default News;
