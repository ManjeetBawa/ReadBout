import React, {useState} from 'react';
import {
  FlatList,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {API_KEY, BASE_URL} from '../../../../services/endpoints';
import {useQuery} from 'react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllNewsList from '../../../../components/allNewsList';
import palette from '../../../../assets/colors';
import Itemdivider from '../../../../components/itemDivider';
import { TOP_HEADLINES } from '../../../../services/endpoints';
import { Countries } from '../../../../services/endpoints';
import routes from '../../../../assets/routes';
interface Props {
  category: string;
  isrefreshing: boolean;
}
const NewsList = ({category, isrefreshing}: Props) => {
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
        <ActivityIndicator color={palette.Primary} size={'large'} />
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
