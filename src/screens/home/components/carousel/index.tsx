import React from 'react';
import { Text, FlatList,View, ImageBackground, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './style';
import data from '../data';
const CarouselLoader = () => {
    const SLIDER_WIDTH = Dimensions.get('screen').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
    const CarouselCardItem = ({item}) => {
        return (
          <View style={{height:250,width: ITEM_WIDTH}}>
            <ImageBackground
              source={{uri: item.imgUrl}}
              imageStyle={{ borderRadius: 8}}
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
    return(
        <Carousel
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />
    );
};
export default CarouselLoader;