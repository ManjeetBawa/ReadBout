import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import palette from '../../assets/colors';
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
  goback: {
    position:'absolute' ,
     bottom: '15%'
  },
  Lottie:{
    height: '50%',
    width: '50%'
  },
  NointernetText:{
    fontFamily: fonts.BLACK,
    fontSize: 24,
    color: '#FF3A44'
  },
  backbttn :{
    color:palette.Secondary,
    fontSize: 24, 
    fontFamily: fonts.BOLD
  }
});
export default styles;
