import { StyleSheet } from "react-native"
import fonts from "../../assets/fonts";
import palette from "../../assets/colors";
const styles = StyleSheet.create({
    nodataBox:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    NodataText:{
        fontFamily: fonts.BOLD,
        fontSize: 20,
        color: palette.Primary,
    },
    container:{
        marginTop: 15,
    },
    item: {
        width:'100%',
        paddingHorizontal: 15,
        marginBottom: 8,
        marginVertical: 4
    },
})
export default styles;