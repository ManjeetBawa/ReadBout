import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      bttn:{
        backgroundColor: '#FF3A44',
        borderRadius:100,
        // padding: 10,
        paddingBottom: 15,
        paddingHorizontal: 14,
      },
      nextBtn:{
        fontFamily: fonts.BOLD, 
        fontSize: 40,
        color:'#fff'
      }
});
export default styles;