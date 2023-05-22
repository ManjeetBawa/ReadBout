import React, {useState} from 'react';
import {
  Pressable,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from 'react-query';
import axios from 'axios';
import {BASE_URL, TOP_HEADLINES, API_KEY,Countries} from '../../../../services/endpoints';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllNewsList from '../../../../components/allNewsList';
import routes from '../../../../assets/routes';
import ActivityLoader from '../../../../components/ActivityIndicator';

interface prop {
  isrefreshing: boolean;
}
const CarouselLoader = ({isrefreshing}: prop) => {
  const [offdata, setOffdata] = useState();
  const navigation = useNavigation();
  const SLIDER_WIDTH = Dimensions.get('screen').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

  const CarouselCardItem = ({item}) => {
    const OpenNews = () => {
      navigation.navigate(routes.News.path, {item});
    };
    const date = new Date(`${item.publishedAt.slice(0, 10)}`);
    return (
      <View style={styles.itemBox}>
        <Pressable onPress={() => OpenNews(item)}>
          <AllNewsList item={item} date={date} DateAndAuth={false} />
        </Pressable>
      </View>
    );
  };
  const {error, data, refetch, isLoading} = useQuery('LatestNews', async () => {
    const response = await axios.get(
      BASE_URL + TOP_HEADLINES+'?'+Countries.India+'&'+API_KEY,
    );
    await AsyncStorage.setItem('LatestNews', JSON.stringify(response.data));
    return response.data;
  });
  if (isrefreshing) {
    refetch();
  }

  if (isLoading) {
    return(
    <ActivityLoader />
    )
  }

  if (error) {
    AsyncStorage.getItem('LatestNews').then(Response => {
      setOffdata(JSON.parse(Response));
    });
    if (offdata) {
      return (
        <Carousel
          data={offdata.articles}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />
      );
    } else {
      return null;
    }
  }

  return (
    <Carousel
      data={data.articles}
      renderItem={CarouselCardItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      useScrollView={true}
    />
  );
};
export default CarouselLoader;
