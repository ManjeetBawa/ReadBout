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
import {API_KEY, BASE_URL} from '../../services/endpoints';
import AllNewsList from '../../components/allNewsList';
import Itemdivider from '../../components/itemDivider';
import LottieView from 'lottie-react-native';
import { Icons } from '../../assets/Icons';
import palette from '../../assets/colors';
import { Strings } from '../../constants/strings';
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
        '&'+API_KEY,
    );
    console.log(response.data.articles);
    return response.data;
  });

  if (isLoading) {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator color={palette.Primary} size={'large'} />
      </View>
    );
  }

  if (error) {
    if ((error.message = 'Network Error')) {
      return (
        <View style={styles.Loading}>
          <Text style={styles.NointernetText}>{Strings.Offline.No_Intenet}</Text>
        <View style={styles.Lottie}>
          <LottieView
        source={require('./129246-no-internet-connection.json')}
        autoPlay
        loop={true}
        resizeMode='cover'
      />
        </View>
        <TouchableOpacity onPress={goBack}>
        <Text style={styles.backbttn}>{Strings.bttn.Go_back}</Text>
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
       <TouchableOpacity
        onPress={goBack}
        style={{top: 10, left: 10, position: 'absolute'}}>
        <Icons.goBack height={45} width={45} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchItem;
