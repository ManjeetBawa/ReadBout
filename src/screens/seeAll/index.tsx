import React, {useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {useQuery} from 'react-query';
import axios from 'axios';
import AllNewsList from '../../components/allNewsList';
import {API_KEY, BASE_URL} from '../../services/endpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Itemdivider from '../../components/itemDivider';
import {useNavigation} from '@react-navigation/native';
import {Icons} from '../../assets/Icons';
import { TOP_HEADLINES } from '../../services/endpoints';
import { Countries } from '../../services/endpoints';
import palette from '../../assets/colors';
const SeeAll = () => {
  const [offdata, setOffdata] = useState();
  const navigation = useNavigation();
  const FullNews = item => {
    navigation.navigate('News', {item});
  };
  const {goBack} = useNavigation();
  const gobackhandler = () => {
    goBack();
  };

  const {error, data, refetch, isLoading} = useQuery('LatestNewsagain', async () => {
    const response = await axios.get(
      BASE_URL +
      TOP_HEADLINES+'?country='+Countries.India+'&'+API_KEY,
    );
    return response.data;
  });

  if (isLoading) {
    return (
      <View style={styles.itemIndicator}>
        <ActivityIndicator color={palette.Primary} size={'large'} />
      </View>
    );
  }
  const renderItem = ({item}) => {
    const date = new Date(`${item.publishedAt.slice(0, 10)}`);
    return (
      <View style={styles.item}>
        <Pressable onPress={() => FullNews(item)}>
          <AllNewsList item={item} date={date} DateAndAuth={true} />
        </Pressable>
      </View>
    );
  };

  if (error) {
    AsyncStorage.getItem('LatestNews').then(Response => {
      setOffdata(JSON.parse(Response));
    });
    if (offdata) {
      return (
        <FlatList
          renderItem={renderItem}
          data={data.articles}
          ItemSeparatorComponent={Itemdivider}
        />
      );
    } else {
      return null;
    }
  }

  return (
    <View>
      <FlatList
        renderItem={renderItem}
        data={data.articles}
        ItemSeparatorComponent={Itemdivider}
      />
      <TouchableOpacity
        onPress={gobackhandler}
        style={{top: 10, left: 10, position: 'absolute'}}>
        <Icons.goBack height={45} width={45} />
      </TouchableOpacity>
    </View>
  );
};
export default SeeAll;
