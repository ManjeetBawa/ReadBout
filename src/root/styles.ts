import { StyleSheet } from "react-native";
import fonts from "../assets/fonts";
const styles = StyleSheet.create({
  bottomTab:{
    borderRadius: 32,
    marginHorizontal: 28,
    marginBottom: 15,
    paddingHorizontal: 25,
    position: 'absolute',
    shadowColor: '#050114', 
    shadowOffset:{width:0, height: 10} , 
    shadowOpacity: 0.25, 
    shadowRadius: 3.5, 
    elevation: 5
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