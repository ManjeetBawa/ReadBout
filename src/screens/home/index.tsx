import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, TextInput, RefreshControl, ScrollView,Platform } from 'react-native';
import CarouselLoader from './components/carousel';
import styles from './style';
import { Icons } from '../../assets/Icons';
import { Strings } from '../strings';
import Filterbutton from './components/filterbutton';
import NewsList from './components/newslists';
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
const Home = () => {
  const requestPermissions = () => {
    if (Platform.OS == 'ios') {
      PushNotificationIOS.requestPermissions({
        alert: true,
        badge: true,
        sound: true,
        critical: true,
      }).then(
        (data) => {
          console.log('PushNotificationIOS.requestPermissions', data);
        },
        (data) => {
          console.log('PushNotificationIOS.requestPermissions failed', data);
        },
      );
    }
    return PushNotification.requestPermissions()
  }

  const createNotificationChannel = () => {
    PushNotification.createChannel({
      channelId: 'buddy',
      channelName: 'Buddy',
      channelDescription: 'Buddy',
      soundName: 'default',
      vibrate: true,
    },
      (created) => console.log(`createChannel 'buddy' returned ‘${created}’`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    requestPermissions()
  }
  useEffect(()=>{
    createNotificationChannel();
  },[])

  const testpush = () => {
    console.log('bell pressed');
    PushNotification.localNotification({
      channelId: "buddy",
      title: "Bell Pressed", // (optional)
      message: "Notification", // (required)

    });
  }
  const testschepush = () => {
    PushNotification.localNotificationSchedule({
      channelId: "buddy",
      //... You can use all the options from localNotifications
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + 10 * 1000), // in 10 secs

    });
  }

  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [filter, setfilter] = useState<string>('business');
  const [searchval, setSearchval] = useState('');
  const searchref = useRef();
  const searchIconHandler = () => {
    searchref.current.focus();
  };
  const Search = () => {
    console.log('Search Clicked');
    if (!(searchval.trim() === '')) {
      navigation.navigate('SearchItem', { searchval });
    }
  };
  const getfilter = (value: string) => {
    setfilter(value);
  };
  const SeeAllHandler = () => {
    navigation.navigate('SeeAll');
  }
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      console.log(refreshing);
    }, 1500);
  }

  return (
    <View style={styles.container}>
      {/* ------------------Header------------ */}
      <View style={styles.header}>
        <View style={styles.headerInput}>
          <TextInput
            returnKeyType="search"
            value={searchval}
            placeholder="Search anything here ..."
            style={styles.searchArea}
            onChangeText={(val) => setSearchval(val)}
            onEndEditing={Search}
            ref={searchref}
          />
          <TouchableOpacity onPress={searchIconHandler}>
            <Icons.VectorSearch width={16} height={14} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.BelliIcon} onPress={testpush}>
          <Icons.Bell width={40} height={36} />
        </TouchableOpacity>
      </View>
      {/* ------------------------------See More Box---------------- */}
      <View style={styles.seeMoreBox}>
        <Text style={styles.latestNews}>{Strings.home.latest_news}</Text>
        <TouchableOpacity style={styles.SeeMoreSection} onPress={SeeAllHandler}>
          <Text style={styles.SeeMore}>{Strings.home.see_all}</Text>
          <Icons.Arrow width={20} height={20} />
        </TouchableOpacity>
      </View>
      {/* -----------------------------------------Carousel--------------------------------- */}
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
        <View>
          <View style={styles.Carousel}>
            <CarouselLoader isrefreshing={refreshing} />
          </View>
          <View style={styles.filterItems}>
            <Filterbutton getfilter={val => getfilter(val)} />
          </View>
          <View>
            <NewsList category={filter} isrefreshing={refreshing} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
