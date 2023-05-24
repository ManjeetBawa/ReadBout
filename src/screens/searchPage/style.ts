import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import palette from '../../assets/colors';
const styles = StyleSheet.create({
  box:{
    backgroundColor: palette.white,
    flex: 1,
  },
  Loading: {
    flex: 1, 
    justifyContent:'center' , 
    alignItems: 'center',
  },
  flatlistBox: {
    paddingHorizontal: 15,
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
  },
  goback_bttn : {
    top: 10, 
    left: 10, 
    position: 'absolute'
  },
  noresult: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  }
  ,
  noresultText :{
    fontSize: 17,
    fontFamily: fonts.BOLD,
    color: palette.Primary
  }
});
export default styles;
