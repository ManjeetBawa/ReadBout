import { StyleSheet } from "react-native"
import fonts from "../../../../assets/fonts";

const styles = StyleSheet.create({
    uperimage: {
        marginVertical: 60,
        marginHorizontal: 16,
      },
      author: {
        fontFamily: fonts.BOLD,
        color: '#fff',
        fontSize: 15,
      },
      title: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 7,
        fontFamily: fonts.TINO_BOLD,
      },
      body: {
        color: '#fff',
        fontSize: 12,
        fontFamily: fonts.REGULAR,
        marginHorizontal: 16,
        marginBottom: 15,
    
      }
})
export default styles;