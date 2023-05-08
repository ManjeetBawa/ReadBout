import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        flex: 0.4,
    },
    textBox:{
        flex:0.6,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.BLACK,
        color: '#000',
    },
    disc: {
        fontFamily: fonts.REGULAR,
        color: '#000',
        paddingVertical: 20,
        
    },
    FavIcon:{
        position: 'absolute',
        bottom: 48,
        right: 30,
    }
});
export default styles;