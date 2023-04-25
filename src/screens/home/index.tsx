import React, {Component} from 'react';
import {Text, View,TouchableOpacity,TextInput, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './style';
import {Icons} from '../../assets/Icons';
import fonts from '../../assets/fonts';



const Home = () => {
 const SLIDER_WIDTH = Dimensions.get('screen').width ;
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];
  const Search =()=> {
    console.log('Search Clicked');
  }

  const CarouselCardItem = ({item}) => {
    return (
    <Image
        source={{ uri: item.imgUrl }}
        style={{height: 250, width: ITEM_WIDTH}}
      />
    // <Text>item.title</Text>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInput}>
          <TextInput
            returnKeyType='search'
            placeholder="DogeCoin to the Moon..."
            // placeholderTextColor={'#fff'}
            style={styles.searchArea}
            onBlur={Search}
          />
          <TouchableOpacity onPress={Search} >
            <Icons.VectorSearch width={16} height={14} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity >
          <Icons.Bell width={40} height={36} />
        </TouchableOpacity>
      </View>
    
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
      {/* <View>
      <Text style={{fontFamily: fonts.BOLD, fontSize: 30}}>Hello world</Text>
      </View> */}
      <Image source={{ uri: "https://picsum.photos/id/12/200/300" }} style={{height:40,width:50}}/>
    </View>
  );
};

export default Home;
