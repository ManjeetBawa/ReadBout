import {StyleSheet} from 'react-native';
import palette from '../../assets/colors';

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
    // backgroundColor: 'green'
  },
  back_button : {
    position: 'absolute', 
    left: 10, 
    top: 10
  }
});

export default styles;
