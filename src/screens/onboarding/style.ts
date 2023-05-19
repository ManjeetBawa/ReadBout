import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import palette from '../../assets/colors';
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.white
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.white
      },
      bttn:{
        backgroundColor: palette.Primary,
        borderRadius:100,
        // padding: 10,
        paddingBottom: 15,
        paddingHorizontal: 14,
      },
      nextBtn:{
        fontFamily: fonts.BOLD, 
        fontSize: 40,
        color:palette.white
      }
});
export default styles;