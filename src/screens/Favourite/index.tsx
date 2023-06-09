import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import styles from './style';
import AllNewsList from '../../components/allNewsList';
import itemdivider from '../../components/itemDivider';
import {Strings} from '../../constants/strings';
import routes from '../../assets/routes';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/header';
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
    navigation.navigate(routes.News.path, {item:item , focus: isfocused});
  };

  const renderItem = ({item}) => {
    const date = new Date(`${item.publishedAt.slice(0, 10)}`);
    return (
      <View style={styles.item}>
        <Pressable onPress={() => FullNews(item)}>
          <AllNewsList date={date} item={item} DateAndAuth={true} />
        </Pressable>
      </View>
    );
  };
  if (!favdata || favdata?.length === 0) {
    return (
      <View style={styles.headerbox}>
     <Header header='Favourites' />
      <View style={styles.nodataBox}>
        <Text style={styles.NodataText}>{Strings.favourite.Nothing}</Text>
      </View>
      </View>
    );
  }
  return (
    <View style={styles.headerbox}>
      <Header header="Favourites" />
      <ScrollView style={styles.page}>
        <View style={styles.container}>
          <FlatList
            data={favdata}
            renderItem={renderItem}
            ItemSeparatorComponent={itemdivider}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Favourite;
