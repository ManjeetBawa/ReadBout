import React , {useState }from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Pressable,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useQuery} from 'react-query';
import axios from 'axios';
import styles from './style';
import { BASE_URL } from '../../services/endpoints';
import AllNewsList from '../commonComponents/allNewsList';
import Itemdivider from '../commonComponents/itemDivider';
import NetInfo from "@react-native-community/netinfo";
import { Icons } from '../../assets/Icons';
const SearchItem = prop => {
  const [netstatus, setNetStatus] = useState(true);
  NetInfo.fetch().then(networkState => {
    // console.log("Connection type - ", networkState.type);
    console.log("Is connected? - ", networkState.isConnected);
    setNetStatus(networkState.isConnected);
  });
    const navigation = useNavigation();
    const {goBack} = useNavigation();
  const searchitem = prop.route.params.searchval;
  console.log(prop.route.params.searchval);
  
  const {isLoading, error, data, refetch} = useQuery('SearchApi', async () => {
    const response = await axios.get(
      BASE_URL+'/everything?q=' +
        `${searchitem}` +
        '&apiKey=ba98ff1447a14572bdf276236083a22c',
    );
    console.log(response.data.articles);
    return response.data;
  });

  if (isLoading) {
    return <View style={styles.Loading}><ActivityIndicator color={'#FF3A44'} size={'large'}/></View>;
  }
  

  if (error) {
    if(error.message = 'Network Error')
    {
      return (

        <View style={styles.Loading}>
          <Icons.Offline />
          <TouchableOpacity style={styles.goback} onPress={goBack}>
          <Icons.GoBackOffline />
          </TouchableOpacity>
          
        </View>
      )
    }
    return (
      <View>
        <Text>An error has occurred: {error.message}</Text>
      </View>
    );
  }
  
  const To_fullnews = (item) => {
    navigation.navigate('News',{item})
  }
  const renderitem = ({item}) => {
    const date = new Date(`${item.publishedAt.slice(0, 10)}`);
    return (
      <View style={{marginVertical:4}}>
        <Pressable onPress={()=>To_fullnews(item)}>
        <AllNewsList date={date} item={item} DateAndAuth={false}/>
        </Pressable>
      </View>
    );
  };
  return (
    <View style={styles.flatlistBox}>
      <FlatList renderItem={renderitem} data={data.articles} ItemSeparatorComponent={Itemdivider} />
    </View>
  );
};

export default SearchItem;
