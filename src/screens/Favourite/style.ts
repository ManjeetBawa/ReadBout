import { StyleSheet } from "react-native"
import fonts from "../../assets/fonts";

const styles = StyleSheet.create({
    nodataBox:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    NodataText:{
        fontFamily: fonts.BOLD,
        fontSize: 20,
        color: '#FF3A44',
    },
    item: {
        width:'100%', 
        height: 128,
        paddingHorizontal: 15,
        marginBottom: 8,
    },
    // image: {
    //     width: '100%',
    //     height: '100%',
    //     borderRadius: 8,
    // },
    alltext: {
        // flex:1,
        height: '100%',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        paddingHorizontal: 16,
        paddingVertical: 8,
        
    },
    authNdate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomText: {
        fontFamily: fonts.BOLD,
        color: '#fff',
       },
       container:{
        marginTop: 10,
       }
})
export default styles;