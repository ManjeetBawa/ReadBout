import { StyleSheet } from "react-native"
import fonts from "../../assets/fonts";
import palette from "../../assets/colors";
const styles = StyleSheet.create({
    page :{
        backgroundColor: palette.white,
    },
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
        // flex: 1,
        paddingTop: 15,
        marginBottom: 55,
        // paddingBottom: 55,
        backgroundColor: palette.white,
    },
    item: {
        width:'100%',
        paddingHorizontal: 15,
        marginBottom: 8,
        marginVertical: 4
    },
    headerbox: {
        backgroundColor: '#fff', 
        flex: 1
    }
})
export default styles;