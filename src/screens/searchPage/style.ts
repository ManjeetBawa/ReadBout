import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
const styles = StyleSheet.create({
  Loading: {
    flex: 1, 
    justifyContent:'center' , 
    alignItems: 'center',
  },
  flatlistBox: {
    paddingHorizontal: 15,
    marginTop: 16,
  },
  newsImage: {
    width: '100%',
    height: 128,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 60,
  },
  dateTime: {
    fontFamily: fonts.BLACK,
    marginVertical: 4,
  },
  title: {
    fontFamily: fonts.TINO_BOLD,
    color: '#000',
    marginVertical: 8,
  },
  content: {
    fontFamily: fonts.TINO_REGULAR,
    color: '#000',
  },
  author: {
    fontFamily: fonts.BOLD,
    color: '#000',
    marginVertical: 8,
  },
});
export default styles;
