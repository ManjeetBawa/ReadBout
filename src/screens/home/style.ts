import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 15,
    marginTop: 16,
  },
  headerInput: {
    height: 40,
    flexDirection: 'row',
    // backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F1FA',
    flex: 1,
    borderRadius: 16,
    margin: 10,
    paddingHorizontal: 6,
  },
  searchArea: {
    flex: 1,
    fontSize: 12,
    // backgroundColor: 'pink',
  },
  BelliIcon:{
    paddingRight: 10,
  },
  Carousel: {
    marginVertical: 15,
    // backgroundColor:'black'
  },
  SeeMoreSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeMoreBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  latestNews: {
    fontSize: 20,
    fontFamily: fonts.BOLD,
  },
  SeeMore: {
    fontSize: 15,
    fontFamily: fonts.BOLD,
    justifyContent: 'center',
    color: '#0080FF',
    paddingHorizontal: 5,
  },
  uperimage: {
    marginVertical: 60,
    marginHorizontal: 16,
  },
  author: {
    fontFamily: fonts.BOLD,
    color: '#fff',
    fontSize: 15,
  },
  title: {
    color: '#fff',
    paddingVertical: 7,
  },
  body: {
    color: '#fff',
    marginHorizontal: 16,

  }
});

export default styles;
