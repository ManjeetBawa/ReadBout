import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Pressable, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import styles from './style';
import AllNewsList from '../commonComponents/allNewsList';
import itemdivider from '../commonComponents/itemDivider';
const Favourite = () => {
  const navigation = useNavigation();
  const isfocused = useIsFocused();
  const [favdata, setFavdata] = useState();
  useEffect(() => {
    AsyncStorage.getItem('favorites').then(res => {
      console.log('----------------', JSON.parse(res));
      setFavdata(JSON.parse(res));
    });
    console.log(isfocused);
  }, [isfocused]);

  const FullNews = item => {
    navigation.navigate('News', {item});
  };
  
  const renderItem = ({item}) => {
    const date = new Date(`${item.publishedAt.slice(0,10)}`);
    return (
      <View style={styles.item}>
        <Pressable onPress={() => FullNews(item)}>
          <AllNewsList date={date} item={item} DateAndAuth={true}/>
        </Pressable>
      </View>
    );
  };
  if (favdata?.length === 0) {
    return (
      <View style={styles.nodataBox}>
        <Text style={styles.NodataText}>Nothing to show</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList data={favdata} renderItem={renderItem} ItemSeparatorComponent={itemdivider} />
      
    </View>
  );
};

export default Favourite;
