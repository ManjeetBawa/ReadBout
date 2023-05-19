import { StyleSheet } from "react-native"
import fonts from "../../../../assets/fonts";
import palette from "../../../../assets/colors";
const styles = StyleSheet.create({
    item: {
        fontSize: 15,
        color: palette.black,
        fontFamily: fonts.REGULAR,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: '#F0F1FA',
        borderWidth: 1,
        borderRadius: 16,
        marginHorizontal: 8,
    },
})
export default styles;