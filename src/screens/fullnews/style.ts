import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import palette from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.4,
  },
  textBox: {
    flex: 0.6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.BLACK,
    color: palette.black,
  },
  disc: {
    fontFamily: fonts.REGULAR,
    color: palette.black,
    paddingVertical: 20,
  },
  FavIcon: {
    position: 'absolute',
    bottom: 48,
    right: 30,
  },
  DateText: {
    fontFamily: fonts.BOLD,
    color: palette.black,
    fontSize: 15,
    paddingBottom: 5,
  },
  authNdate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
