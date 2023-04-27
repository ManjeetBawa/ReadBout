import React, {Component, useEffect, useState,useRef} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CarouselLoader from './components/carousel';
import styles from './style';
import {Icons} from '../../assets/Icons';
import Filterbutton from './components/filterbutton';
import { ScrollView } from 'react-native-gesture-handler';
import NewsList from './components/newslists';
const Home = () => {
  const searchref = useRef();
  const searchIconHandler = () => {
    searchref.current.focus();
  };
  const Search = () => {
    console.log('Search Clicked');
  };
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
        <Text style={styles.latestNews}>Latest News</Text>
        <TouchableOpacity style={styles.SeeMoreSection}>
          <Text style={styles.SeeMore}>See All</Text>
          <Icons.Arrow width={20} height={20} />
        </TouchableOpacity>
      </View>
      {/* -----------------------------------------Carousel--------------------------------- */}
      <ScrollView>
      <View style={styles.Carousel}>
        <CarouselLoader/>
      </View>
      <View style={styles.filterItems}>
      <Filterbutton />
      </View>
      <NewsList/>
    </ScrollView>
    </View>
  );
};

export default Home;
