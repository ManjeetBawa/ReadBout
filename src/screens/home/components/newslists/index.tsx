import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {BASE_URL} from '../../../../services/endpoints';
import {useQuery} from 'react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllNewsList from '../../../commonComponents/allNewsList';
import Itemdivider from '../../../commonComponents/itemDivider';
interface Props {
  category: string;
  isrefreshing: boolean;
}
const NewsList = ({category, isrefreshing}: Props) => {
  const [offdata, setOffdata] = useState();
  const navigation = useNavigation();
  const FullNews = item => {
    navigation.navigate('News', {item});
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
          '/top-headlines?country=in&category=' +
          `${category}` +
          '&apiKey=ba98ff1447a14572bdf276236083a22c',
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
      <View>
        <ActivityIndicator color={'#FF3A44'} size={'large'} />
      </View>
    );
  }
  if (error) {
    AsyncStorage.getItem(`${category}`).then(Response => {
      setOffdata(JSON.parse(Response));
    });
    if (offdata) {
      return (
        <View>
          <FlatList renderItem={renderItem} data={offdata.articles} />
        </View>
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
    </View>
  );
};
export default NewsList;
