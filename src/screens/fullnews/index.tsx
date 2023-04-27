import React from "react";
import {View,Text,Image} from 'react-native'
import styles from "./style";

const News = (params) => {
    console.log(params.route.params.item);
    const item = params.route.params.item;
    return (
        <View>
            <Text>{item.Author}</Text>
            <Image source={{uri: item.imgUrl}} style={{width: 60,height: 70}}/>
            <Text>{item.body}</Text>
        </View>
    );
};

export default News;