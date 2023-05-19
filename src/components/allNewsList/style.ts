import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import palette from '../../assets/colors';
const styles = StyleSheet.create({
    image: {
        height: 170, 
        width: '100%', 
        borderRadius: 8, 
        resizeMode: 'contain',
    },
    authNdate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomText: {
        fontFamily: fonts.NEW_YORK_SMALL_BOLD,
        fontSize: 15,
        color: palette.black,
        paddingVertical: 10,
       },
       DateText:{
        fontFamily: fonts.BOLD,
        color: palette.black,
        fontSize: 15,
        paddingBottom:5
       },
});

export default styles;