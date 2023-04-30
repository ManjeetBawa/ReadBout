import React from "react";
import {View,Text,Image, ScrollView} from 'react-native'
import styles from "./style";

const News = (params) => {
    console.log(params.route.params.item);
    const item = params.route.params.item;
    return (
        <View style={styles.container}>
            <Image source={{uri: item.imgUrl}} style={styles.image}/>
            <ScrollView style={styles.textBox}>
            <Text style={styles.text}>{item.body}</Text>
            </ScrollView>
        </View>
    );
};

export default News;