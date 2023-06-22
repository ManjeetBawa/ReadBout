import React, {useState} from 'react';
import {
  FlatList,
  View,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {useQuery} from 'react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllNewsList from '../../../../components/allNewsList';
import Itemdivider from '../../../../components/itemDivider';
import { TOP_HEADLINES ,Countries,API_KEY, BASE_URL} from '../../../../services/endpoints';
import routes from '../../../../assets/routes';
import ActivityLoader from '../../../../components/ActivityIndicator';
interface Props {
  category: string;
  isrefreshing: boolean;
  sources: string;
}
const NewsList = ({category, isrefreshing,sources}: Props) => {
  console.log('newslistsources', sources)
  const [offdata, setOffdata] = useState();
  const navigation = useNavigation();
  const FullNews = item => {
    navigation.navigate(routes.News.path, {item});
  };

  const renderItem = ({item}) => {
    const date = new Date(`${item.publishedAt.slice(0, 10)}`);
    return (
      <View style={styles.item}>
        <Pressable onPress={() => FullNews(item)}>
            <AllNewsList item={item} date={date} DateAndAuth={true}/>
        </Pressable>
      </View>
    );
  };

  const {isLoading, error, data, refetch} = useQuery(
    `${category}`,
    async () => {
      const response = await axios.get(
        BASE_URL +
          TOP_HEADLINES+'?'+Countries.India+'&category=' +
          `${category}` + 
          '&'+API_KEY,
      );
      await AsyncStorage.setItem(`${category}`, JSON.stringify(response.data));
      return response.data;
    },
  );
  if (isrefreshing) {
    refetch();
  }
  if (isLoading) {
    return (
      <ActivityLoader/>
      );
  }
  if (error) {
    AsyncStorage.getItem(`${category}`).then(Response => {
      setOffdata(JSON.parse(Response));
    });
    if (offdata) {
      return (
          <FlatList renderItem={renderItem} data={offdata.articles} />
      );
    } else {
      return null;
    }
  }
  return (
      <FlatList
        renderItem={renderItem}
        data={data.articles}
        ItemSeparatorComponent={Itemdivider}
      />
  );
};
export default NewsList;
