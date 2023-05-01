import { StyleSheet } from "react-native";
import fonts from "../assets/fonts";
const styles = StyleSheet.create({
  bottomTab:{
    borderRadius: 32,
    marginHorizontal: 28,
    marginBottom: 35,
    paddingHorizontal: 25,
    position: 'absolute',
  },
  icon: {
    padding: 40,
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontFamily:fonts.BOLD
  }
});
export default styles;