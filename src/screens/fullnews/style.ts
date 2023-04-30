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
        // backgroundColor:'pink'
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.BLACK,
    }
});
export default styles;