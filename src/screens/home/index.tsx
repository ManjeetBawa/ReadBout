import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  ScrollView,
  Platform,
  Keyboard,
  PermissionsAndroid,
  Button,
  FlatList,
  Pressable,
} from 'react-native';
import CarouselLoader from './components/carousel';
import styles from './style';
import {Icons} from '../../assets/Icons';
import {Strings} from '../../constants/strings';
import Filterbutton from './components/filterbutton';
import NewsList from './components/newslists';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import palette from '../../assets/colors';
import routes from '../../assets/routes';
import fonts from '../../assets/fonts';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {sources} from '../../constants/strings';
const Home = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [show, setShow] = useState(false);
  const snapPoints = useMemo(() => ['28%', '50%'], []);
  const [sourceString, setSourcestring] = useState('');
  const [sourcelist, setSourcelist] = useState('publishedAt');
  const handleClosePress = () => {
    // const mysources = sourcelist.join(',');
    setSourcestring(sourcelist);
    // console.log('sourcesstring', mysources);
    sheetRef.current?.close();
    
  };
  const handleOpenPress = useCallback(() => {
    sheetRef.current?.expand();
    setShow(true);
  }, []);

  const requestPermissions = () => {
    if (Platform.OS == 'ios') {
      PushNotificationIOS.requestPermissions({
        alert: true,
        badge: true,
        sound: true,
        critical: true,
      }).then(
        data => {
          console.log('PushNotificationIOS.requestPermissions', data);
        },
        data => {
          console.log('PushNotificationIOS.requestPermissions failed', data);
        },
      );
    }
    return PushNotification.requestPermissions();
  };
  const createNotificationChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'buddy',
        channelName: 'Buddy',
        channelDescription: 'Buddy',
        soundName: 'default',
        vibrate: true,
      },
      created => console.log(`createChannel 'buddy' returned ‘${created}’`),
    );
    requestPermissions();
  };
  useEffect(() => {
    createNotificationChannel();
  }, []);

  const getPermission = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (permission === 'granted') {
        console.log('granted');
      }
    } catch (error) {
      return <Text>returning error</Text>;
    }
  };
  const testpush = () => {
    getPermission();

    PushNotification.localNotification({
      channelId: 'buddy',
      title: 'Bell Pressed',
      message: 'Notification',
    });
  };
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [filter, setfilter] = useState<string>('business');
  const [searchval, setSearchval] = useState('');
  const searchref = useRef();
  const searchIconHandler = () => {
    if (Keyboard.isVisible()) {
      Search();
    } else {
      searchref.current.focus();
    }
  };
  const Search = () => {
    console.log('Search Clicked');
    if (searchval.trim() !== '') {
      navigation.navigate(routes.SearchItem.path, {searchval});
    }
  };
  const getfilter = (value: string) => {
    setfilter(value);
  };
  const SeeAllHandler = () => {
    navigation.navigate(routes.SeeAll.path);
  };
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      console.log(refreshing);
    }, 1500);
  };
  const selectSource = item => {
   setSourcelist(item.source);
  
  };
  const rendersource = ({item}) => {
    const backgroundColor = sourcelist==item.source
      ? palette.Primary
      : palette.white;
    const color =  sourcelist==item.source
      ? palette.white
      : palette.black;
    return (
      <Pressable
        style={[{backgroundColor}, styles.itembox]}
        onPress={() => selectSource(item)}>
        <Text style={[{color}, styles.itemtext]}>{item.source}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {/* ------------------Header------------ */}
      <View style={styles.header}>
        <View style={styles.headerInput}>
          <TextInput
            returnKeyType="search"
            value={searchval}
            placeholder={Strings.PlaceHolder.Search_Placeholder}
            style={styles.searchArea}
            onChangeText={val => setSearchval(val)}
            onSubmitEditing={Search}
            ref={searchref}
            placeholderTextColor={palette.black}
          />
          <TouchableOpacity onPress={searchIconHandler}>
            <Icons.VectorSearch width={16} height={14} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.BelliIcon} onPress={testpush}>
          <Icons.Bell width={40} height={36} />
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        {/* ------------------------------See More Box---------------- */}
        <View style={styles.seeMoreBox}>
          <Text style={styles.latestNews}>{Strings.home.latest_news}</Text>
          <TouchableOpacity
            style={styles.SeeMoreSection}
            onPress={SeeAllHandler}>
            <Text style={styles.SeeMore}>{Strings.home.see_all}</Text>
            <Icons.Arrow width={20} height={20} />
          </TouchableOpacity>
        </View>
        {/* -----------------------------------------Carousel--------------------------------- */}
        <View>
          <View style={styles.Carousel}>
            <CarouselLoader isrefreshing={refreshing} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => handleOpenPress()}>
              <Text
                style={{
                  fontSize: 15,
                  color: palette.white,
                  fontFamily: fonts.REGULAR,
                  paddingHorizontal: 16,
                  backgroundColor: palette.Primary,
                  paddingVertical: 8,
                  borderColor: palette.grey,
                  borderWidth: 1,
                  borderRadius: 16,
                  marginLeft: 15,
                }}>
                Sort by
              </Text>
            </TouchableOpacity>
            <View style={styles.filterItems}>
              <Filterbutton getfilter={val => getfilter(val)} />
            </View>
          </View>

          <View style={styles.Newslist}>
            <NewsList
              category={filter}
              isrefreshing={refreshing}
              sources={sourceString}
            />
          </View>
        </View>
      </ScrollView>
      {show && (
        <BottomSheet
          ref={sheetRef}
          index={1}
          snapPoints={snapPoints}
          // onChange={handleSheetChange}
          // animateOnMount={false}
        >
          <BottomSheetScrollView
            contentContainerStyle={{backgroundColor: 'white', flex: 1}}>
            <View>
              <FlatList renderItem={rendersource} data={sources} />
              <Pressable onPress={() => handleClosePress()}>
                <View style={styles.savebutton}>
                  <Text style={styles.saveText}>Save</Text>
                </View>
              </Pressable>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </View>
  );
};

export default Home;
