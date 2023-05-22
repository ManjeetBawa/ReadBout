import { View , ActivityIndicator} from "react-native";
import React from "react";
import palette from "../../assets/colors";
import styles from "./styles";
const ActivityLoader = () => {
    return (
        <View style={styles.itemIndicator}>
        <ActivityIndicator color={palette.Primary} size={'large'} />
      </View>
    );
};
export default ActivityLoader;