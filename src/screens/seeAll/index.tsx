import React, {useState} from 'react';
import {View, FlatList, Pressable} from 'react-native';
import styles from './style';
import {useQuery} from 'react-query';
import axios from 'axios';
import AllNewsList from '../../components/allNewsList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Itemdivider from '../../components/itemDivider';
import {useNavigation} from '@react-navigation/native';
import {TOP_HEADLINES, Countries,API_KEY, BASE_URL} from '../../services/endpoints';
import ActivityLoader from '../../components/ActivityIndicator';
import routes from '../../assets/routes';
import Header from '../../components/header';
const SeeAll = () => {
  const [offdata, setOffdata] = useState();
  const {navigate} = useNavigation();
  const FullNews = item => {
    navigate(routes.News.path, {item});
  };
  const {goBack} = useNavigation();

  const {error, data, refetch, isLoading} = useQuery('LatestNews', async () => {
    const response = await axios.get(
      BASE_URL + TOP_HEADLINES + '?' + Countries.India + '&' + API_KEY,
    );
    return response.data;
  });

  if (isLoading) {
    return <ActivityLoader />;
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
    <View >
     <Header header='See All' />
      <FlatList
        renderItem={renderItem}
        data={data.articles}
        ItemSeparatorComponent={Itemdivider}
      />
    </View>
  );
};
export default SeeAll;
