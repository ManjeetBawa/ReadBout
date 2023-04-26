import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ImageBackground,
  FlatList
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './style';
import {Icons} from '../../assets/Icons';

const Home = () => {
  const SLIDER_WIDTH = Dimensions.get('screen').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

  const data = [
    {
      title: 'Aenean leo becomes the new president of the united states',
      Author: 'by John Franc',
      body: '“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”',
      imgUrl: 'https://picsum.photos/id/11/200/300',
    },
    {
      title: 'Aenean leo becomes the new president of the Great Britain',
      Author: 'by SuperUser',
      body: 'Cryptocurrencies “have no intrinsic value” and people who invest in them should be prepared to lose all ',
      imgUrl: 'https://picsum.photos/id/10/200/300',
    },
    {
      title: 'RCB wins the world cup',
      Author: 'by Metlle',
      body: 'Andrew Bailey said. Digital currencies like bitcoin, ether and even dogecoin have been on a tear this year,',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
  ];
  const Search = () => {
    console.log('Search Clicked', ITEM_WIDTH, SLIDER_WIDTH);
  };

  const CarouselCardItem = ({item}) => {
    return (
      <View>
        <ImageBackground
          source={{uri: item.imgUrl}}
          style={{height: 250, width: ITEM_WIDTH}}
          >
            <View style={styles.uperimage}>
              <Text style={styles.author}>{item.Author}</Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.body}>{item.body}</Text>
        </ImageBackground>
      </View>
    );
  };

  const filter = ({item})=> {
    console.log(item)
    return (
      <View>
        <Text>{item.Author}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInput}>
          <TextInput
            returnKeyType="search"
            placeholder="DogeCoin to the Moon..."
            // placeholderTextColor={'#fff'}
            style={styles.searchArea}
            onBlur={Search}
          />
          <TouchableOpacity onPress={Search}>
            <Icons.VectorSearch width={16} height={14} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.BelliIcon}>
          <Icons.Bell width={40} height={36} />
        </TouchableOpacity>
      </View>

      <View style={styles.seeMoreBox}>
        <Text style={styles.latestNews}>Latest News</Text>
        <TouchableOpacity style={styles.SeeMoreSection}>
          <Text style={styles.SeeMore}>See More</Text>
          <Icons.Arrow width={20} height={20} />
        </TouchableOpacity>
      </View>
      {/* -----------------------------------------Carousel--------------------------------- */}
      <View style={styles.Carousel}>
        <Carousel
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />
      </View>
      <FlatList data={data} renderItem={filter} horizontal />
    </View>
  );
};

export default Home;
