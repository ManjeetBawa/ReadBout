import styles from "./style";
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import { format } from "date-fns";

interface AllNewsList {
    item: any;
    date: any;
    DateAndAuth: boolean;
}
const AllNewsList = ({item,date,DateAndAuth}:AllNewsList) => {
    return (
    <View>
        <Image
            style={{height: 170, width: '100%', borderRadius: 8}}
            source={{
              uri: item.urlToImage
                ? item.urlToImage
                : 'https://media.istockphoto.com/id/1390033645/photo/world-news-background-which-can-be-used-for-broadcast-news.jpg?b=1&s=170667a&w=0&k=20&c=glqFWZtWU4Zqyxd8CRu5_Or81zqwe7cyhturXaIFEOA=',
            }}
          />
          <Text style={styles.bottomText}>
            {item.title ? item.title : null}
          </Text>
          {DateAndAuth&&(<View style={styles.authNdate}>
            <Text style={styles.DateText}>
              {item.author ? item.author : null}
            </Text>
            <Text style={styles.DateText}>
              {item.publishedAt ? format(date, 'EEEE, do MMMM yyyy') : null}
            </Text>
          </View>)}
          
    </View>
    )
};


export default AllNewsList;
