import React from "react";
import {View,Text,Image, ScrollView} from 'react-native'
import styles from "./style";

const News = (params) => {
    console.log(params.route.params.item);
    const item = params.route.params.item;
    return (
        <View style={styles.container}>
            <Image source={{uri: item.urlToImage?item.urlToImage:'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA='}} style={styles.image}/>
            <ScrollView style={styles.textBox}>
            <Text style={styles.text}>{item.description}</Text>
            </ScrollView>
        </View>
    );
};

export default News;