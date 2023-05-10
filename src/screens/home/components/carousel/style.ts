import { StyleSheet } from "react-native"
import { Dimensions } from "react-native";

const SLIDER_WIDTH = Dimensions.get('screen').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const styles = StyleSheet.create({
   itemBox :{
    height: 250,
    width: ITEM_WIDTH,
    borderRadius: 8,
   }
})
export default styles;