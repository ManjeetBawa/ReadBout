import {StyleSheet} from 'react-native';
import palette from '../../assets/colors';
import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    height: 45,
    alignItems: 'center',
    backgroundColor: palette.white
  },
  headerText : {
    fontSize: 20, 
    color: palette.black,
    fontFamily: fonts.BOLD,
  },
  back_button : {
    position: 'absolute', 
    left: 10, 
    top: 10
  }
});

export default styles;
