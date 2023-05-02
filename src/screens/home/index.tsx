import React, {Component, useEffect, useState, useRef} from 'react';

import {Text, View, TouchableOpacity, TextInput,RefreshControl,ScrollView} from 'react-native';
import CarouselLoader from './components/carousel';
import styles from './style';
import {Icons} from '../../assets/Icons';
import {Strings} from '../strings';
import Filterbutton from './components/filterbutton';

import NewsList from './components/newslists';
const Home = () => {
 
  const [refreshing,setRefreshing] = useState<boolean>(false);
  const [filter, setfilter] = useState<string>('business');
  const searchref = useRef();
  const searchIconHandler = () => {
    searchref.current.focus();
  };
  const Search = () => {
    // console.log('Search Clicked');
    // console.log('filtervalue  ', filter);
  };
  const getfilter = (value: string) => {
    setfilter(value);
  };
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      console.log(refreshing);
    }, 1000);
  }
  return (
    <View style={styles.container}>
      {/* ------------------Header------------ */}
      <View style={styles.header}>
        <View style={styles.headerInput}>
          <TextInput
            returnKeyType="search"
            placeholder="DogeCoin to the Moon..."
            // placeholderTextColor={'#fff'}
            style={styles.searchArea}
            // autoFocus={focus}
            onEndEditing={Search}
            ref={searchref}
          />
          <TouchableOpacity onPress={searchIconHandler}>
            <Icons.VectorSearch width={16} height={14} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.BelliIcon}>
          <Icons.Bell width={40} height={36} />
        </TouchableOpacity>
      </View>
      {/* ------------------------------See More Box---------------- */}
      <View style={styles.seeMoreBox}>
        <Text style={styles.latestNews}>{Strings.home.latest_news}</Text>
        <TouchableOpacity style={styles.SeeMoreSection}>
          <Text style={styles.SeeMore}>{Strings.home.see_all}</Text>
          <Icons.Arrow width={20} height={20} />
        </TouchableOpacity>
      </View>
      {/* -----------------------------------------Carousel--------------------------------- */}
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>
      }>
        <View>
        <View style={styles.Carousel}>
          <CarouselLoader isrefreshing = {refreshing}/>
        </View>
        <View style={styles.filterItems}>
          <Filterbutton getfilter={val => getfilter(val)} />
        </View>
        <View>
          <NewsList category = {filter} isrefreshing = {refreshing}/>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
