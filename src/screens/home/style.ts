import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import palette from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  headerInput: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.grey,
    flex: 1,
    borderRadius: 16,
    margin: 10,
    paddingHorizontal: 6,
  },
  searchArea: {
    flex: 1,
    fontSize: 12,
    fontFamily: fonts.REGULAR,
  },
  BelliIcon:{
    paddingRight: 10,
  },
  Carousel: {
    marginVertical: 15,
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
    fontFamily: fonts.TINO_BOLD,
    color: palette.black,
  },
  SeeMore: {
    fontSize: 15,
    fontFamily: fonts.TINO_BOLD,
    justifyContent: 'center',
    color: palette.Secondary,
    paddingHorizontal: 5,
  },
  uperimage: {
    marginVertical: 60,
    marginHorizontal: 16,
  },
  author: {
    fontFamily: fonts.BOLD,
    color: palette.white,
    fontSize: 15,
  },
  title: {
    color: palette.white,
    paddingVertical: 7,
  },
  body: {
    color: palette.white,
    marginHorizontal: 16,
  },
  filterItems:{
      marginBottom: 24,
      marginHorizontal: 15,
  },
  Newslist : {
    marginBottom: 55,
  },
  itembox: {
    borderColor: palette.grey,
    borderWidth: 2,
    marginVertical : 3,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  itemtext: {
    fontSize: 20,
    textAlign: 'center',
  },
  savebutton:{
    backgroundColor: palette.Primary,
    padding: 10,
    marginVertical: 16,
    marginHorizontal: 100,
    borderRadius: 8,
  },
  saveText :{
    color: palette.white,
    textAlign: 'center',
  },
});

export default styles;
