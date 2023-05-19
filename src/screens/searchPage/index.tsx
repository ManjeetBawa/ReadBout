import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from 'react-query';
import axios from 'axios';
import styles from './style';
import {BASE_URL} from '../../services/endpoints';
import AllNewsList from '../../components/allNewsList';
import Itemdivider from '../../components/itemDivider';
import LottieView from 'lottie-react-native';
import fonts from '../../assets/fonts';
const SearchItem = prop => {
  const navigation = useNavigation();
  const {goBack} = useNavigation();
  const searchitem = prop.route.params.searchval;
  console.log(prop.route.params.searchval);

  const {isLoading, error, data, refetch} = useQuery('SearchApi', async () => {
    const response = await axios.get(
      BASE_URL +
        '/everything?q=' +
        `${searchitem}` +
        '&apiKey=ba98ff1447a14572bdf276236083a22c',
    );
    console.log(response.data.articles);
    return response.data;
  });

  if (isLoading) {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator color={'#FF3A44'} size={'large'} />
      </View>
    );
  }

  if (error) {
    if ((error.message = 'Network Error')) {
      return (
        <View style={styles.Loading}>
          <Text style={styles.NointernetText}>No internet Connection</Text>
        <View style={styles.Lottie}>
          <LottieView
        source={require('./129246-no-internet-connection.json')}
        autoPlay
        loop={true}
        resizeMode='cover'
      />
        </View>
        <TouchableOpacity onPress={goBack}>
        <Text style={{color:'#0080FF',fontSize: 24, fontFamily: fonts.BOLD}}>Go back</Text>
        </TouchableOpacity>
        </View>
      );
    }
    return (
      <View>
        <Text>An error has occurred: {error.message}</Text>
      </View>
    );
  }

  const To_fullnews = item => {
    navigation.navigate('News', {item});
  };
  const renderitem = ({item}) => {
    const date = new Date(`${item.publishedAt.slice(0, 10)}`);
    return (
      <View style={{marginVertical: 4}}>
        <Pressable onPress={() => To_fullnews(item)}>
          <AllNewsList date={date} item={item} DateAndAuth={false} />
        </Pressable>
      </View>
    );
  };
  return (
    <View style={styles.flatlistBox}>
      <FlatList
        renderItem={renderitem}
        data={data.articles}
        ItemSeparatorComponent={Itemdivider}
      />
    </View>
  );
};

export default SearchItem;
